"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SecurityManagement from "./SecurityManagement"
import TokenPricingTiers from "./TokenPricingTiers"


export default function SettingsManagementPage() {
  return (
    <div className="container mx-auto p-4 max-w-[100rem]">
      <h1 className="text-3xl font-bold mb-8">Settings Management</h1>
      <Tabs defaultValue="security" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="security">Security Management</TabsTrigger>
          {/* <TabsTrigger value="verification">Account Verification</TabsTrigger>
          <TabsTrigger value="payment">Payment Setup</TabsTrigger> */}
           <TabsTrigger value="billing">billing Management</TabsTrigger>
        </TabsList>
        <TabsContent value="security">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Security Management</CardTitle>
              <CardDescription>Manage your account security settings</CardDescription>
            </CardHeader>
            <CardContent>
              <SecurityManagement />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Billing & Subscriptions</CardTitle>
              <CardDescription>Manage your token packages and upgrade your security toolkit access</CardDescription>
            </CardHeader>
            <CardContent>
              <TokenPricingTiers />
            </CardContent>
          </Card>
        </TabsContent>

        {/* <TabsContent value="verification">
          <Card>
            <CardHeader>
              <CardTitle>Account Verification</CardTitle>
              <CardDescription>Verify your account by providing your National ID card details</CardDescription>
            </CardHeader>
            <CardContent>
              <AccountVerification />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <CardTitle>Payment Setup</CardTitle>
              <CardDescription>Manage your payment methods and subscriptions</CardDescription>
            </CardHeader>
            <CardContent>
              <PaymentSetup />
            </CardContent>
          </Card>
        </TabsContent> */}
      </Tabs>
    </div>
  )
}
