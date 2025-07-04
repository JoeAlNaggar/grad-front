"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SavedContent from "./profile/SavedContent"
import Sharings from "./profile/Sharings"
import NotificationsList from './NotificationsList';

export default function ProfileContent() {
  return (
    <div className="container mx-auto p-4 max-w-[100 rem]">
      <Card>
        <CardHeader>
          <CardTitle>Profile Content</CardTitle>
          <CardDescription>Manage your saved content, sharings, notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="saved">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="saved">Saved Posts</TabsTrigger>
              <TabsTrigger value="sharings">Your Posts</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="saved">
              <SavedContent />
            </TabsContent>
            <TabsContent value="sharings">
              <Sharings />
            </TabsContent>
            <TabsContent value="notifications">
              <NotificationsList />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
