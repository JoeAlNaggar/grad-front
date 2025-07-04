"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/app/contexts/AuthContext"
import { getUserProfile, editUserProfile, updateUserProfile, getImageUrl, type ProfileData } from "@/app/services/api"
import { toast } from "sonner"
import { Upload, User, Briefcase, Save } from "lucide-react"
import "./neumorphism.css"

export default function ProfileSetup() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth()
  
  // State for form fields
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    job_title: "",
    job_status: "",
    brief: "",
    years_of_experience: 0,
    phone_number: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [profileExists, setProfileExists] = useState(false)
  
  // State for profile image
  const [profileImage, setProfileImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  // Load user data and profile on component mount
  useEffect(() => {
    if (!authLoading && isAuthenticated && user) {
      loadUserProfile()
    }
  }, [authLoading, isAuthenticated, user])

  const loadUserProfile = async () => {
    if (!user?.username) return
    
    try {
      setIsLoading(true)
      
      // Set readonly fields from user context
      setFormData(prev => ({
        ...prev,
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        username: user.username || "",
        email: user.email || "",
      }))

      // Try to fetch existing profile
      const profile = await getUserProfile(user.username)
      if (profile) {
        setProfileExists(true)
        setFormData(prev => ({
          ...prev,
          job_title: profile.job_title || "",
          job_status: profile.job_status || "",
          brief: profile.brief || "",
          years_of_experience: profile.years_of_experience || 0,
          phone_number: profile.phone_number || "",
        }))
        
        // Set profile image if exists
        if (profile.profile_image || profile.profile_picture) {
          setPreviewUrl(getImageUrl(profile.profile_image || profile.profile_picture))
        }
      }
    } catch (error: any) {
      // Profile doesn't exist yet, which is fine
      console.log('Profile not found, will create new one')
      setProfileExists(false)
    } finally {
      setIsLoading(false)
    }
  }

  // Handle form field changes (only for editable fields)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'years_of_experience' ? parseInt(value) || 0 : value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setProfileImage(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isAuthenticated) {
      toast.error("Please log in to save your profile")
      return
    }

    try {
      setIsLoading(true)

      const profileData = {
        job_title: formData.job_title,
        job_status: formData.job_status,
        brief: formData.brief,
        years_of_experience: formData.years_of_experience,
        phone_number: formData.phone_number,
      }

      if (profileExists) {
        // Update existing profile
        await updateUserProfile(profileData, profileImage || undefined)
        toast.success("Profile updated successfully!")
      } else {
        // Create new profile
        await editUserProfile(profileData, profileImage || undefined)
        setProfileExists(true)
        toast.success("Profile created successfully!")
      }
      
      // Clear the uploaded image state since it's now saved
      setProfileImage(null)
      
      // Reload profile to get updated data
      await loadUserProfile()
      
    } catch (error: any) {
      console.error('Error saving profile:', error)
      toast.error(error.response?.data?.detail || "Failed to save profile")
    } finally {
      setIsLoading(false)
    }
  }

  if (authLoading) {
    return (
      <div className="container mx-auto py-12 px-4 bg-neugray min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto py-12 px-4 bg-neugray min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Authentication Required</h2>
            <p className="text-gray-600">Please log in to access your profile setup.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4 bg-neugray min-h-screen">
      <div className="max-w-[100rem] mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-700 mb-2">Profile Setup</h1>
          <p className="text-gray-600">Create and manage your professional profile</p>
        </div>

        <Card className="neu-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              {profileExists ? 'Update Profile' : 'Create Profile'}
            </CardTitle>
            <CardDescription>
              {profileExists ? 'Update your professional information' : 'Set up your professional information'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="personal" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Personal
                  </TabsTrigger>
                  <TabsTrigger value="professional" className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Professional
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="space-y-6 mt-6">
                  {/* Profile Image Upload */}
                  <div className="flex flex-col items-center space-y-4">
                    <Label className="text-sm font-medium text-gray-600">Profile Image</Label>
                    <div className="relative w-32 h-32 rounded-full overflow-hidden neu-inset">
                      {previewUrl ? (
                        <img
                          src={previewUrl}
                          alt="Profile preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
                          <div className="text-center">
                            <Upload className="w-8 h-8 mx-auto mb-2" />
                            <span>Upload</span>
                            <br />
                            <span className="text-xs">300x300px</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <Label className="cursor-pointer neu-button py-2 px-6 rounded-full text-gray-700 hover:text-primary transition-colors">
                      Select Image
                      <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                    </Label>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* First Name - Readonly */}
                    <div>
                      <Label htmlFor="first_name" className="block text-sm font-medium mb-2 text-gray-600">
                        First Name
                      </Label>
                      <Input
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        readOnly
                        className="neu-input bg-gray-50 cursor-not-allowed"
                        placeholder="First name from account"
                      />
                    </div>

                    {/* Last Name - Readonly */}
                    <div>
                      <Label htmlFor="last_name" className="block text-sm font-medium mb-2 text-gray-600">
                        Last Name
                      </Label>
                      <Input
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        readOnly
                        className="neu-input bg-gray-50 cursor-not-allowed"
                        placeholder="Last name from account"
                      />
                    </div>

                    {/* Username - Readonly */}
                    <div>
                      <Label htmlFor="username" className="block text-sm font-medium mb-2 text-gray-600">
                        Username
                      </Label>
                      <Input
                        id="username"
                        name="username"
                        value={formData.username}
                        readOnly
                        className="neu-input bg-gray-50 cursor-not-allowed"
                        placeholder="Username from account"
                      />
                    </div>

                    {/* Email - Readonly */}
                    <div>
                      <Label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-600">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        readOnly
                        className="neu-input bg-gray-50 cursor-not-allowed"
                        placeholder="Email from account"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <Label htmlFor="phone_number" className="block text-sm font-medium mb-2 text-gray-600">
                      Phone Number
                    </Label>
                    <Input
                      id="phone_number"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      placeholder="+1234567890"
                      className="neu-input"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="professional" className="space-y-6 mt-6">
                  {/* Job Title */}
                  <div>
                    <Label htmlFor="job_title" className="block text-sm font-medium mb-2 text-gray-600">
                      Job Title
                    </Label>
                    <Input
                      id="job_title"
                      name="job_title"
                      value={formData.job_title}
                      onChange={handleChange}
                      placeholder="e.g., Security Analyst, Software Developer"
                      className="neu-input"
                    />
                  </div>

                  {/* Job Status */}
                  <div>
                    <Label htmlFor="job_status" className="block text-sm font-medium mb-2 text-gray-600">
                      Job Status
                    </Label>
                    <Select
                      value={formData.job_status}
                      onValueChange={(value) => handleSelectChange('job_status', value)}
                    >
                      <SelectTrigger className="neu-input">
                        <SelectValue placeholder="Select job status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employed">Employed</SelectItem>
                        <SelectItem value="freelance">Freelancing</SelectItem>
                        <SelectItem value="looking">Looking for opportunities</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Years of Experience */}
                  <div>
                    <Label htmlFor="years_of_experience" className="block text-sm font-medium mb-2 text-gray-600">
                      Years of Experience
                    </Label>
                    <Input
                      id="years_of_experience"
                      name="years_of_experience"
                      type="number"
                      min="0"
                      max="50"
                      value={formData.years_of_experience}
                      onChange={handleChange}
                      placeholder="e.g., 5"
                      className="neu-input"
                    />
                  </div>

                  {/* Brief */}
                  <div>
                    <Label htmlFor="brief" className="block text-sm font-medium mb-2 text-gray-600">
                      Professional Brief
                    </Label>
                    <Textarea
                      id="brief"
                      name="brief"
                      rows={4}
                      value={formData.brief}
                      onChange={handleChange}
                      placeholder="A brief description about your professional background, skills, and goals..."
                      className="neu-input resize-none"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Describe your expertise, passion, and what makes you unique in your field.
                    </p>
                  </div>
                </TabsContent>

                <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="neu-button-primary px-8 py-2 flex items-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        {profileExists ? 'Update Profile' : 'Create Profile'}
                      </>
                    )}
                  </Button>
                </div>
              </Tabs>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
