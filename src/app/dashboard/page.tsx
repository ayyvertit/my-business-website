// import { currentUser } from "@clerk/nextjs/server" // Temporarily disabled
// import { redirect } from "next/navigation" // Temporarily disabled
import UserDashboard from "@/components/UserDashboard"

export default async function DashboardPage() {
    // const user = await currentUser() // Temporarily disabled

    // if (!user) {
    //     redirect("/login")
    // }

    return <UserDashboard user={null} />
} 