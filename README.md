# Joddit Mobile

A beautiful, retro-futuristic note-taking app built with React Native and Expo. Joddit is a thinking companion that respects silence and design, featuring voice transcription, speaker diarization, and seamless cloud sync.

## ✨ Features

### Core Functionality
- **Local-First Architecture**: All notes save locally first for instant access
- **Cloud Sync**: Automatic sync with Neon PostgreSQL database when signed in
- **Smart Sync Logic**: Guest notes automatically transfer to your account when you sign in
- **Voice Recording**: Record audio notes with automatic transcription via Deepgram
- **Speaker Diarization**: Identify multiple speakers in recordings (for signed-in users)
- **Note Management**: Create, edit, pin, delete, and categorize notes
- **Search & Filter**: Search notes and filter by category
- **Multi-Select**: Select multiple notes for bulk delete or share operations

### Design
- **Retro-Futuristic Aesthetic**: Clean, pixelated fonts (Jersey 10 & 25) with muted color palette
- **Smooth Animations**: Fade-in animations on page load
- **Custom Icons**: Clean SVG icons throughout the app
- **Responsive Layout**: Optimized for mobile devices

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo Go app on your iOS/Android device
- Neon database account (for cloud sync)
- Clerk account (for authentication)
- Deepgram API key (for transcription)

### Installation

1. **Clone and install dependencies:**
   ```bash
   cd joddit-mobile
   npm install
   ```

2. **Set up environment variables:**
   
   Create a `.env` file in the root directory:
   ```env
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   EXPO_PUBLIC_DEEPGRAM_API_KEY=your_deepgram_api_key
   EXPO_PUBLIC_DATABASE_URL=your_neon_postgresql_connection_string
   ```

   **Important Notes:**
   - All environment variables must be prefixed with `EXPO_PUBLIC_` to be accessible in the app
   - For Neon database, use the **non-pooler** connection string (remove `-pooler` from hostname)
   - Remove `channel_binding=require` parameter from the database URL

3. **Start the development server:**
   ```bash
   npx expo start -c
   ```
   The `-c` flag clears the cache, which is important when updating environment variables.

4. **Run on your device:**
   - Open Expo Go on your iPhone/Android
   - Scan the QR code from the terminal
   - The app will load on your device!

## 📁 Project Structure

```
joddit-mobile/
├── App.tsx                 # Main app component with navigation
├── types.ts                # TypeScript type definitions
├── screens/
│   ├── Onboarding.tsx      # Welcome screen with animations
│   ├── Home.tsx            # Main notes list with search & filters
│   ├── Editor.tsx          # Note editing interface
│   ├── Recording.tsx        # Voice recording screen
│   ├── Auth.tsx            # Authentication screen
│   └── Profile.tsx         # User profile
├── lib/
│   ├── clerk.ts            # Clerk authentication setup
│   ├── storage.ts          # Local storage & cloud sync logic
│   ├── db.ts               # Neon database operations
│   └── deepgram.ts         # Audio transcription service
├── components/
│   └── Icons.tsx           # Custom SVG icon components
└── schema.sql              # Database schema
```

## 🗄️ Database Setup

1. **Create a Neon project** at [neon.tech](https://neon.tech)

2. **Run the schema:**
   ```bash
   # Connect to your Neon database and run:
   psql your_connection_string < schema.sql
   ```

3. **Configure connection:**
   - Use the standard (non-pooler) connection string
   - Ensure SSL mode is set: `?sslmode=require`
   - Do NOT include `channel_binding=require`

## 🎨 Design System

### Colors
- **Background**: `#E7E5DB` (Cream)
- **Pinned Notes**: `#303138` (Dark charcoal)
- **Recent Notes**: `#DAD8CC` (Light beige)
- **Primary Text**: `#1a1a1a` (Near black)
- **Search Bar**: `#Dad7cc` (Muted beige)

### Fonts
- **Jersey 10**: Used for main titles ("My Personal Jots", section headers)
- **Jersey 25**: Used for category buttons
- **System**: Default for body text

### Icons
All icons are custom SVG components in `components/Icons.tsx`:
- Search, Pin, Folder, User, Microphone, Plus, Share, Trash

## 🔄 Data Sync Logic

### Local-First Architecture
1. **All notes save locally first** using AsyncStorage
2. **If signed in**, notes automatically sync to cloud in the background
3. **Guest notes** are preserved and transferred when you sign in
4. **Account switching** transfers all local notes to the new account

### Sync Behavior
- Notes are sorted chronologically (most recent first)
- Pinned notes always appear above "Recent" section
- Pinned notes show regardless of category filter
- Speaker count badges only appear for signed-in users with diarization data

## 🎤 Voice Recording

1. Tap the microphone button in the floating action bar
2. Record your audio
3. Audio is transcribed using Deepgram
4. A new note is automatically created with the transcript
5. Speaker diarization identifies multiple speakers (if available)

## 📝 Note Management

### Creating Notes
- **Text Note**: Tap the "+" button in the floating action bar
- **Voice Note**: Tap the microphone button and record

### Organizing Notes
- **Pin Notes**: Notes can be pinned to appear at the top
- **Categorize**: Assign notes to categories (Ideas, Personal, etc.)
- **Search**: Use the search bar to find notes by title or content
- **Filter**: Tap category buttons to filter notes

### Bulk Operations
1. Tap "Select" in the top-right corner
2. Select one or more notes
3. Choose "Share" or "Delete" from the action bar

## 🔐 Authentication

Joddit uses Clerk for authentication:
- **Guest Mode**: Use the app without signing in (notes stored locally)
- **Sign In**: Create an account or sign in to enable cloud sync
- **Account Switching**: All local notes transfer to the new account

## 🛠️ Development

### Running the App
```bash
# Start development server
npx expo start

# Clear cache and start (recommended after .env changes)
npx expo start -c

# Run on iOS simulator
npx expo run:ios

# Run on Android emulator
npx expo run:android
```

### Key Dependencies
- **Expo SDK 54**: React Native framework
- **Clerk**: Authentication
- **Neon Serverless**: PostgreSQL database
- **Deepgram**: Audio transcription
- **AsyncStorage**: Local data persistence
- **React Native SVG**: Custom icon rendering

## 🐛 Troubleshooting

### "Invalid header: neon-connection-string" Error
- Ensure you're using the **non-pooler** connection string
- Remove `channel_binding=require` from the URL
- Restart Expo with `npx expo start -c`

### Environment Variables Not Loading
- All variables must be prefixed with `EXPO_PUBLIC_`
- Restart Expo server with `-c` flag after changing `.env`
- Check that `.env` file is in the root directory

### Fonts Not Loading
- Ensure `expo-font` is installed
- Fonts are loaded in `App.tsx` using `useFonts`
- Check console for font loading errors

## 📄 License

Private project - All rights reserved

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev)
- Authentication by [Clerk](https://clerk.com)
- Database by [Neon](https://neon.tech)
- Transcription by [Deepgram](https://deepgram.com)
