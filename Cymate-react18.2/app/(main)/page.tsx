"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MainPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard since this is the default main route
    router.replace("/dashboard");
  }, [router]);
return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
    </div>
  );
}
