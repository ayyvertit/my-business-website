"use client"

import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import UserDashboard from "@/components/UserDashboard"

export default function DashboardClient() {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    if (isLoaded && !user) {
      router.push("/login")
    }
  }, [user, isLoaded, router])

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--ocean-foam)] to-[var(--white-sand)] dark:from-[var(--deep-tide)] dark:to-[var(--ocean-foam)] flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-[var(--coastal-mist)] dark:bg-[var(--ocean-foam)] rounded mb-4"></div>
          <div className="h-4 bg-[var(--coastal-mist)] dark:bg-[var(--ocean-foam)] rounded"></div>
        </div>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--ocean-foam)] to-[var(--white-sand)] dark:from-[var(--deep-tide)] dark:to-[var(--ocean-foam)] flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-[var(--coastal-mist)] dark:bg-[var(--ocean-foam)] rounded mb-4"></div>
          <div className="h-4 bg-[var(--coastal-mist)] dark:bg-[var(--ocean-foam)] rounded"></div>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return <UserDashboard user={user} />
}


