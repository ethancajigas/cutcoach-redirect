import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'info@cutcoach.app',
        pass: 'ujjr vfwt qlsn ytxu' // App password
      }
    })

    // Extract first name from email (basic approach)
    const extractFirstName = (email: string) => {
      const username = email.split('@')[0]
      const name = username.split('.')[0] || username.split('_')[0] || username
      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    }

    const firstName = extractFirstName(email)

    // Email to admin (existing)
    const adminMailOptions = {
      from: 'info@cutcoach.app',
      to: 'info@cutcoach.app',
      subject: 'New Waitlist Signup - CutCoach',
      html: `
        <h2>New Waitlist Signup!</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <p>Add this email to your waitlist database.</p>
      `
    }

    // Email to user (new)
    const userMailOptions = {
      from: 'info@cutcoach.app',
      to: email,
      subject: 'You\'re on the CutCoach waitlist',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <p style="font-size: 16px; line-height: 1.6;">Hi ${firstName},</p>

          <p style="font-size: 16px; line-height: 1.6;">Thank you for joining the CutCoach waitlist. Our mission is to make weight cutting more structured, science-based, and manageable for combat sport athletes — and we're excited to have you with us.</p>

          <p style="font-size: 16px; line-height: 1.6;">While we prepare for launch, we'll be sharing updates on our progress along with practical tips and strategies around weight cutting, nutrition, and refuelling. The goal is to give you something useful to apply right away, even before the app is live.</p>

          <p style="font-size: 16px; line-height: 1.6;">You'll be the first to know when CutCoach is ready to download. In the meantime, keep an eye on your inbox for tips, insights, and launch updates.</p>

          <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">Best,<br>The CutCoach Team</p>

          <div style="margin-top: 10px; text-align: center;">
            <img src="https://cutcoach.app/cutcoachemailfooter.png" alt="CutCoach Footer" style="height: 200px; width: auto; display: block; margin: 0 auto;">
          </div>

          <hr style="margin: 15px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666; text-align: center;">
            You're receiving this because you signed up for our waitlist.<br>
            If you didn't sign up, please ignore this email.
          </p>
        </div>
      `
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ])

    return NextResponse.json(
      { message: 'Successfully joined the waitlist! We\'ll notify you when we launch.' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to join waitlist. Please try again.' },
      { status: 500 }
    )
  }
}
