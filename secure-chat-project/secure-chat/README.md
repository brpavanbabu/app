# Secure Chat Application

A private, secure messaging platform for two users with voice notes, photo sharing, and fun elements.

## Features

- **Secure Authentication**: Only two specific users can access the conversation
- **Access Code System**: User1 can set an alphanumeric access code that both users need to enter
- **Private Messaging**: Text messages with read receipts
- **Voice Notes**: Record and play voice messages
- **Photo Sharing**: Upload and view images securely
- **Message Management**: Delete messages or set them to expire after a specific time
- **Fun Elements**: Emojis, stickers, and text effects

## Current Deployment

The application is currently deployed at:
https://3000-iebm1wmrjxnr8jchh42nc-def40531.manus.computer

This URL will remain active as long as the current session is maintained.

## Login Credentials

- **User1**: email: user1@example.com / password: password1
- **User2**: email: user2@example.com / password: password2
- **Default Access Code**: secure123

## Permanent Deployment

For permanent deployment, please follow the instructions in [DEPLOYMENT.md](./DEPLOYMENT.md).

## Technical Details

This application is built with:
- Next.js 15.1.4
- NextAuth.js for authentication
- Tailwind CSS for styling
- Cookie-based persistent storage for access codes

## Security Features

- HTTP-only cookies for secure storage
- Authentication checks at multiple levels
- Secure headers and CORS configuration
- Private messaging between only two authorized users

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
node .next/standalone/server.js
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
