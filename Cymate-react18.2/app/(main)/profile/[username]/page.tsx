"use client"

import React, { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { useAuth } from "@/app/contexts/AuthContext"
import { getUserProfile, getImageUrl, type ProfileData, type Post } from "@/app/services/api"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { 
  User, 
  Briefcase, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  Edit,
  ArrowLeft,
  MessageCircle,
  Heart,
  Share2,
  Bookmark,
  Zap,
  ThumbsDown
} from "lucide-react"
import { toast } from "sonner"

export default function ProfilePage() {
  const { username } = useParams()
  const router = useRouter()
  const { user: currentUser, isAuthenticated } = useAuth()
  
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Case-insensitive comparison for profile ownership check
  const isOwnProfile = currentUser?.username?.toLowerCase() === (username as string)?.toLowerCase()

  useEffect(() => {
    if (username && typeof username === 'string') {
      fetchProfile()
    }
  }, [username])

  const fetchProfile = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      // Validate username
      if (!username || typeof username !== 'string') {
        setError('Invalid username')
        return
      }
      
      // Convert username to lowercase for case-insensitive lookup
      // This fixes the issue where "ashry" becomes "Ashry" in the URL
      const normalizedUsername = username.toLowerCase().trim()
      if (!normalizedUsername) {
        setError('Invalid username')
        return
      }
      
      const profileData = await getUserProfile(normalizedUsername)
      setProfile(profileData)
    } catch (error: any) {
      console.error('Error fetching profile:', error)
      if (error.response?.status === 404) {
        setError('Profile not found')
      } else {
        setError('Failed to load profile')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName?.[0] || ''}${lastName?.[0] || ''}`.toUpperCase()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleEditProfile = () => {
    router.push('/settings?tab=profile-setup')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <User className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{error || 'Profile not found'}</h2>
            <p className="text-gray-600 mb-4">
              {error === 'Profile not found' 
                ? 'The user profile you are looking for does not exist.' 
                : 'Something went wrong while loading the profile.'}
            </p>
            <Button onClick={() => router.back()} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
<div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex justify-end mb-8">
          {/* <Button 
            onClick={() => router.back()} 
            variant="ghost" 
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button> */}
          
          {isOwnProfile && (
            <Button onClick={handleEditProfile} className="flex items-center gap-2">
              <Edit className="w-4 h-4" />
              Edit Profile
            </Button>
          )}
        </div>

        {/* Profile Header Card */}
<Card className="mb-8 overflow-hidden dark:bg-slate-800 dark:border-slate-700">          <div className="h-32 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
          <CardContent className="p-8 relative">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Profile Avatar */}
              <div className="relative -mt-16 md:-mt-20">
                <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-white shadow-lg">
                  <AvatarImage 
                    src={getImageUrl(profile.profile_image || profile.profile_picture) || "/placeholder-user.jpg"} 
                    alt={`${profile.first_name} ${profile.last_name}`}
                  />
                  <AvatarFallback className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                    {getInitials(profile.first_name, profile.last_name)}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Profile Info */}
              <div className="flex-1 space-y-4">
                <div>
<h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                      {profile.first_name} {profile.last_name}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400">@{profile.username}</p>
                </div>

                {/* Job Info */}
                {profile.job_title && (
                  <div className="flex items-center gap-2 text-lg">
                    <Briefcase className="w-5 h-5 text-purple-600" />
                    <span className="font-medium dark:text-white">{profile.job_title}</span>
                    {profile.years_of_experience > 0 && (
                      <>
                        <span className="text-gray-400 dark:text-white">•</span>
                        <span className="text-gray-600 dark:text-white ">{profile.years_of_experience} years experience</span>
                      </>
                    )}
                  </div>
                )}

                {/* Job Status */}
                {profile.job_status && (
<Badge variant="secondary" className="w-fit dark:bg-slate-700 dark:text-white">                    {profile.job_status}
                  </Badge>
                )}

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-white">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{profile.email}</span>
                  </div>
                  {profile.phone_number && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{profile.phone_number}</span>
                    </div>
                  )}
                </div>

                {/* Brief */}
                {profile.brief && (
                  <div className="mt-4">
                    <p className="text-gray-700 leading-relaxed dark:text-white">{profile.brief}</p>
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="flex gap-6 md:gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{profile.posts_count}</div>
                  <div className="text-sm text-gray-600 dark:text-white">Posts</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Tabs */}
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="posts" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Posts ({profile.posts_count})
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              About
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-6">
            {profile.posts && profile.posts.length > 0 ? (
              <div className="grid gap-6">
                {profile.posts.map((post: Post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage 
                              src={getImageUrl(profile.profile_image || profile.profile_picture) || "/placeholder-user.jpg"} 
                              alt={profile.username}
                            />
                            <AvatarFallback>
                              {getInitials(profile.first_name, profile.last_name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{profile.first_name} {profile.last_name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">@{profile.username}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className = "dark:bg-slate-700 dark:text-white">{post.post_type}</Badge>
                      </div>
                      {post.title && (
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed mb-4 dark:text-white">{post.content}</p>
                      
                      {post.image && (
                        <div className="mb-4 rounded-lg overflow-hidden">
                          <img 
                            src={post.image} 
                            alt="Post image" 
                            className="w-full h-auto max-h-96 object-cover"
                          />
                        </div>
                      )}

                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <Separator className="my-4" />

                      {/* Post Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-4">
                          {/* Reaction Icons with Individual Counts */}
                          <div className="flex items-center gap-1 text-violet-600">
                            <Zap className="w-4 h-4" />
                            <span>{post.reactions?.Thunder || 0}</span>
                          </div>
                          <div className="flex items-center gap-1 text-red-600">
                            <Heart className="w-4 h-4" />
                            <span>{post.reactions?.Love || 0}</span>
                          </div>
                          <div className="flex items-center gap-1 text-blue-600">
                            <ThumbsDown className="w-4 h-4" />
                            <span>{post.reactions?.Dislike || 0}</span>
                          </div>
                          
                          <div className="flex items-center gap-1 dark:text-gray-400">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.comments_count}</span>
                          </div>
                          <div className="flex items-center gap-1 dark:text-gray-400">
                            <Share2 className="w-4 h-4" />
                            <span>{post.shares_count}</span>
                          </div>
                          <div className="flex items-center gap-1 dark:text-gray-400">
                            <Bookmark className="w-4 h-4" />
                            <span>{post.saves_count}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.created_at)}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <MessageCircle className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-700 mb-2">No posts yet</h3>
                  <p className="text-gray-500">
                    {isOwnProfile 
                      ? "Start sharing your thoughts and insights with the community!" 
                      : `${profile.first_name} hasn't shared any posts yet.`}
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  About {profile.first_name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Professional Info */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3 dark:text-gray-400">Professional Information</h3>
                  <div className="space-y-3">
                    {profile.job_title && (
                      <div className="flex items-center gap-3">
                        <Briefcase className="w-4 h-4 text-gray-400" />
                        <span>{profile.job_title}</span>
                      </div>
                    )}
                    {profile.job_status && (
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span>{profile.job_status}</span>
                      </div>
                    )}
                    {profile.years_of_experience > 0 && (
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>{profile.years_of_experience} years of experience</span>
                      </div>
                    )}
                  </div>
                </div>

                <Separator />

                {/* Contact Information */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3 dark:text-gray-400">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span>{profile.email}</span>
                    </div>
                    {profile.phone_number && (
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span>{profile.phone_number}</span>
                      </div>
                    )}
                  </div>
                </div>

                {profile.brief && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3 dark:text-gray-400">Bio</h3>
                      <p className="text-gray-700 leading-relaxed dark:text-white">{profile.brief}</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 