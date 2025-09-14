import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { subject, body, recipients } = await request.json()

    // Validate inputs
    if (!subject || !subject.trim()) {
      return NextResponse.json(
        { error: 'Subject is required' },
        { status: 400 }
      )
    }

    if (!body || !body.trim()) {
      return NextResponse.json(
        { error: 'Email body is required' },
        { status: 400 }
      )
    }

    if (!recipients || !Array.isArray(recipients) || recipients.length === 0) {
      return NextResponse.json(
        { error: 'At least one recipient is required' },
        { status: 400 }
      )
    }

    // Validate email format for all recipients
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const invalidEmails = recipients.filter(email => !emailRegex.test(email))

    if (invalidEmails.length > 0) {
      return NextResponse.json(
        { error: `Invalid email format: ${invalidEmails.join(', ')}` },
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

    // Create email template using the waitlist email structure
    const createEmailHtml = (content: string) => {
      return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          ${content}

          <div style="margin-top: 10px; text-align: center;">
            <img src="https://cutcoach.app/cutcoachemailfooter.png" alt="CutCoach Footer" style="height: 200px; width: auto; display: block; margin: 0 auto;">
          </div>

          <hr style="margin: 15px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666; text-align: center;">
            You're receiving this from CutCoach.<br>
            If you no longer wish to receive emails, please reply with "unsubscribe".
          </p>
        </div>
      `
    }

    // Send emails to all recipients
    const emailPromises = recipients.map(recipient => {
      const mailOptions = {
        from: 'info@cutcoach.app',
        to: recipient,
        subject: subject,
        html: createEmailHtml(body)
      }

      return transporter.sendMail(mailOptions)
    })

    // Wait for all emails to be sent
    await Promise.all(emailPromises)

    return NextResponse.json(
      { message: `Successfully sent emails to ${recipients.length} recipient${recipients.length > 1 ? 's' : ''}!` },
      { status: 200 }
    )

  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send emails. Please try again.' },
      { status: 500 }
    )
  }
}
