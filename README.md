# Mental Health Chat Application

This is a simple mental health chat application that uses the DeepSeek API for AI responses. The application is designed to be deployed on Vercel's free tier.

## Features

- Simple and clean UI
- Real-time chat with AI assistant
- Mobile-responsive design
- Minimalist approach to stay within free tier limits

## Prerequisites

- Node.js installed on your development machine
- A DeepSeek API key
- A Vercel account (for deployment)

## Setup Instructions

### Local Development

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with your DeepSeek API key:
   ```
   DEEPSEEK_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000`

### Deployment to Vercel

1. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
2. Login to Vercel:
   ```
   vercel login
   ```
3. Deploy the application:
   ```
   vercel
   ```
4. Add your environment variable (DeepSeek API key) in the Vercel dashboard

## Project Structure

- `index.js` - Main server file with Express.js setup
- `public/index.html` - HTML structure for the chat interface
- `public/style.css` - Styling for the application
- `public/script.js` - Frontend JavaScript for handling chat functionality
- `vercel.json` - Configuration for Vercel deployment
- `package.json` - Project dependencies and scripts

## Free Tier Considerations

This application is designed to work within Vercel's free tier limits:

- Minimal server-side processing
- Limited token usage in DeepSeek API calls (300 tokens max per response)
- No database requirements
- Small bundle size with minimal dependencies
- Simple static assets

## Important Note

This is a simple chat application for mental health support, but it is not a substitute for professional mental health care. Always recommend users to seek professional help for serious concerns.

## License

MIT