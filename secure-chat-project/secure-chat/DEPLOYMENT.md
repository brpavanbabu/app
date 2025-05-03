# Secure Chat Application Deployment Guide

This guide provides instructions for deploying the secure chat application to various platforms.

## Deployment Options

### 1. Vercel Deployment (Recommended)

Vercel is optimized for Next.js applications and provides the simplest deployment experience.

1. **Create a Vercel Account**:
   - Sign up at [vercel.com](https://vercel.com) if you don't have an account

2. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

3. **Deploy via GitHub**:
   - Push your code to a GitHub repository
   - Import the repository in the Vercel dashboard
   - Vercel will automatically detect the Next.js configuration
   - Set the following environment variables:
     - `NEXTAUTH_URL`: Your production URL (e.g., https://your-app.vercel.app)
     - `NEXTAUTH_SECRET`: A secure random string for JWT encryption

4. **Deploy via CLI**:
   ```bash
   # Login to Vercel
   vercel login
   
   # Deploy from project directory
   cd secure-chat
   vercel
   ```

### 2. Cloudflare Pages Deployment

1. **Create a Cloudflare Account**:
   - Sign up at [cloudflare.com](https://cloudflare.com) if you don't have an account

2. **Install Wrangler CLI**:
   ```bash
   npm install -g wrangler
   ```

3. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

4. **Deploy to Cloudflare Pages**:
   ```bash
   # From project directory
   cd secure-chat
   wrangler pages deploy .next
   ```

5. **Set Environment Variables**:
   - In the Cloudflare dashboard, navigate to your Pages project
   - Go to Settings > Environment variables
   - Add the following variables:
     - `NEXTAUTH_URL`: Your production URL (e.g., https://your-app.pages.dev)
     - `NEXTAUTH_SECRET`: A secure random string for JWT encryption

### 3. Traditional Hosting Deployment

For traditional hosting platforms that support Node.js:

1. **Build the Application**:
   ```bash
   npm run build
   ```

2. **Start the Production Server**:
   ```bash
   npm start
   ```

3. **Set Environment Variables**:
   - `NEXTAUTH_URL`: Your production URL
   - `NEXTAUTH_SECRET`: A secure random string for JWT encryption

## Post-Deployment Verification

After deploying, verify that the application works correctly:

1. **Authentication Testing**:
   - Open the application in two different browsers or incognito windows
   - In the first window, log in as User1 (email: user1@example.com / password: password1)
   - In the second window, log in as User2 (email: user2@example.com / password: password2)
   - Both users should use the default access code "secure123" for initial login

2. **Access Code Management**:
   - After logging in as User1, you should see the Access Code Management panel
   - Try setting a new alphanumeric access code
   - Log out of User2's session and log back in using the new access code
   - This should work seamlessly now with our cookie-based storage solution

3. **Chat Functionality**:
   - Send messages between the two users
   - Test voice notes and photo uploads
   - Verify that read receipts work correctly
   - Test message deletion and timed messages

## Troubleshooting

If you encounter any issues during deployment:

1. **Check Environment Variables**:
   - Ensure `NEXTAUTH_URL` and `NEXTAUTH_SECRET` are correctly set

2. **Verify Build Output**:
   - The build should complete without errors
   - All routes should be properly compiled

3. **Check Server Logs**:
   - Look for any error messages in the server logs
   - Pay attention to authentication-related errors

4. **Cookie Issues**:
   - If authentication problems persist, check that cookies are being properly set and read
   - Ensure your domain is correctly configured in the cookie settings

## Security Considerations

The application implements several security measures:

1. **HTTP-Only Cookies**: Access codes are stored in HTTP-only cookies to prevent client-side access
2. **Secure Flag**: In production, cookies are set with the secure flag to ensure HTTPS-only transmission
3. **Security Headers**: The application includes various security headers to protect against common web vulnerabilities
4. **CORS Configuration**: API routes have proper CORS settings to control access

For additional security in a production environment, consider implementing:
- Rate limiting to prevent brute force attacks
- IP-based restrictions if needed
- Regular security audits
