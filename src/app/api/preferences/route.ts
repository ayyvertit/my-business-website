import { NextRequest, NextResponse } from "next/server"
import { currentUser } from "@clerk/nextjs/server"

export async function POST(request: NextRequest) {
    try {
        const user = await currentUser()

        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const preferences = await request.json()

        // In a real application, you would save this to a database
        // For now, we'll just return a success response
        console.log("Saving preferences for user:", user.id, preferences)

        // Mock database save
        // await db.userPreferences.upsert({
        //   where: { userId: user.id },
        //   update: preferences,
        //   create: { userId: user.id, ...preferences }
        // })

        return NextResponse.json({
            success: true,
            message: "Preferences saved successfully"
        })
    } catch (error) {
        console.error("Error saving preferences:", error)
        return NextResponse.json(
            { error: "Failed to save preferences" },
            { status: 500 }
        )
    }
}

export async function GET(request: NextRequest) {
    try {
        const user = await currentUser()

        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        // In a real application, you would fetch from a database
        // For now, we'll return mock data
        const mockPreferences = {
            pressure: "medium",
            focusAreas: ["Neck & Shoulders", "Back & Spine"],
            scentPreference: "Lavender (Relaxing)"
        }

        return NextResponse.json(mockPreferences)
    } catch (error) {
        console.error("Error fetching preferences:", error)
        return NextResponse.json(
            { error: "Failed to fetch preferences" },
            { status: 500 }
        )
    }
} 