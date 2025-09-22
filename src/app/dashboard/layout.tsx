import type { Metadata } from "next"
import ClerkWrapper from "@/components/ClerkWrapper"

export const metadata: Metadata = {
  title: "Dashboard",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkWrapper>
      {children}
    </ClerkWrapper>
  )
}


