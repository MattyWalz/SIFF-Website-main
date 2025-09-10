import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  console.log("=== API ROUTE CALLED ===")
  try {
    const { name, email, university } = await request.json()

    // Create email content for recruitment@siffofficial.org
    const emailContent = `
New SIFF Application Interest

Name: ${name}
Email: ${email}
University: ${university}
Submitted: ${new Date().toLocaleString()}

This person has registered interest in joining SIFF when applications open in September.
    `.trim()

    // Log the application details for manual email sending
    console.log("=== NEW SIFF APPLICATION RECEIVED ===")
    console.log("Send to: recruitment@siffofficial.org")
    console.log("Subject: New SIFF Application Interest")
    console.log("Content:")
    console.log(emailContent)
    console.log("=====================================")

    return NextResponse.json({ success: true, message: "Application submitted successfully!" })
  } catch (error) {
    console.error("[v0] Error processing application:", error)
    return NextResponse.json(
      { success: false, message: "Failed to submit application. Please try again." },
      { status: 500 },
    )
  }
}
