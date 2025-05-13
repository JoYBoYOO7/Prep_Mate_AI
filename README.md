
# 🚀 PrepMate

**PrepMate**: A job interview preparation platform powered by Vapi AI Voice agents  
[Live Demo](https://prep-mate-ai-steel.vercel.app/) · Built by [Vansh Yadav](https://github.com/JoYBoYOO7)

Build this project step-by-step with our detailed tutorial on JavaScript Mastery YouTube. Join the JSM family!

---

## 📋 Table of Contents

- [🤖 Introduction](#-introduction)  
- [⚙️ Tech Stack](#-tech-stack)  
- [🔋 Features](#-features)  
- [🤸 Quick Start](#-quick-start)  
- [🕸️ Snippets (Code to Copy)](#️-snippets-code-to-copy)  
- [🔗 Assets](#-assets)  
- [🚀 More](#-more)  
- [🚨 Tutorial](#-tutorial)  

---

## 🤖 Introduction

**PrepMate** is a modern web application designed to simulate job interviews using AI voice agents. Built with **Next.js**, **Firebase**, **Tailwind CSS**, and **Vapi AI**, it provides users with an immersive interview experience powered by **Google Gemini**.

Whether you're learning how to integrate AI in web apps or practicing for a job, PrepMate helps you build and prepare effectively.

Join our active Discord community (50k+ members) if you need help or want to share your progress.

---

## ⚙️ Tech Stack

- **Next.js** — React-based frontend + backend framework  
- **Firebase** — Auth, Firestore, Admin SDK  
- **Tailwind CSS** — Utility-first CSS styling  
- **Vapi AI** — Voice agent integration  
- **shadcn/ui** — Beautiful and accessible UI components  
- **Google Gemini** — Text generation from prompts  
- **Zod** — Schema validation

---

## 🔋 Features

- 🔐 **Authentication**: Email/password sign-up and login (Firebase Auth)  
- 🎙️ **AI-Powered Interviews**: Use voice assistants to simulate interviews  
- 🧠 **Smart Feedback**: AI provides instant insights after the session  
- 🖼️ **Modern UI/UX**: Sleek, mobile-friendly interface  
- 📜 **Transcripts**: Real-time chat + transcript display  
- 📊 **Dashboard**: Manage, view and track all your interviews  
- 📱 **Responsive**: Seamlessly usable on desktop, tablet, and mobile  

---

## 🤸 Quick Start

### Prerequisites

Make sure you have:

- Git
- Node.js
- npm

### Clone the Repo

```bash
git clone https://github.com/JoYBoYOO7/Prep_Mate_AI.git
cd Prep_Mate_AI

Install Dependencies

npm install

Set Up Environment Variables

Create a .env.local file in your root directory and add the following:

NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=

⚠️ Replace all the placeholder values with your actual credentials.

Run the Project

npm run dev

Visit http://localhost:3000 to use PrepMate locally.

⸻

🕸️ Snippets (Code to Copy)

Here are a few useful snippets from the project:
	•	globals.css
	•	lib/utils.ts
	•	Generate Questions Prompt: /app/api/vapi/generate/route.tsx
	•	Generate Feedback Prompt: lib/actions/general.action.ts
	•	Display Feedback Page: app/(root)/interview/[id]/feedback/page.tsx
	•	Dummy Interview Data (for testing UI)

⸻

🔗 Assets

Public assets (images, icons, etc.) used in this project are stored in the public/ folder.

⸻

🚀 More

Advance your skills with our Next.js Pro Course

Loved this project? Dive into our pro content and build even more complex apps with confidence.

⸻

🚨 Tutorial

This repository was built while following an in-depth video tutorial on the JavaScript Mastery YouTube channel.

If you’re a visual learner, this step-by-step guide is perfect to help you understand full-stack development using AI tools.

⸻

👨‍💻 Author

Made with ❤️ by Vansh Yadav
