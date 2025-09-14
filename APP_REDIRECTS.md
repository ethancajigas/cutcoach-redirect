# CutCoach App Authentication Redirects

This functionality has been integrated into the main CutCoach website to handle authentication redirects for the mobile app.

## What This Does

When users click authentication links in their email (password reset, email confirmation, OAuth callbacks), they'll see your `cutcoach.app` domain instead of Supabase URLs, and these pages will automatically redirect them to your mobile app.

## Available Routes

- `/reset-password` - Password reset redirects
- `/email-confirmation` - Email confirmation redirects  
- `/auth-callback` - OAuth callback redirects
- `/*` - Catch-all route for any other deep links

## How It Works

1. User clicks email link → goes to `cutcoach.app/email-confirmation?code=...`
2. Next.js page loads → shows CutCoach branding and loading spinner
3. JavaScript automatically redirects to `cutcoach://email-confirmation?code=...`
4. Mobile app opens and handles the authentication

## Configuration

### Supabase Dashboard

Make sure your Supabase project has these redirect URLs configured:
- `https://cutcoach.app/reset-password`
- `https://cutcoach.app/email-confirmation`
- `https://cutcoach.app/auth-callback`

### Site URL

Update your Supabase Site URL to:
- `https://cutcoach.app`

## Testing

After deployment, test these URLs:
- `https://cutcoach.app/reset-password?code=test`
- `https://cutcoach.app/email-confirmation?code=test`
- `https://cutcoach.app/auth-callback?code=test`

Each should show the CutCoach loading screen and attempt to open your mobile app.

## Design

The pages use your app's black and white design theme with:
- Black gradient background
- White CutCoach logo
- Loading spinner animation
- Manual redirect button as fallback
- Consistent styling with your main website
