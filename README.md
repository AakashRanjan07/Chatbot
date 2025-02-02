# Chatbot for HTML & CSS Generation

## Project Overview
This project is a **Chatbot Application** designed to generate well-structured HTML and CSS code within a single file and provide a **live preview** of the generated code. The primary goal is to facilitate rapid MVP creation for landing pages by leveraging AI-driven code generation.

The application is built using modern web technologies and adheres to best practices in UI/UX design, authentication, and backend services.

## Features
### **Authentication System**
- User authentication implemented using **NextAuth.js**.
- Supports authentication via **email/password** and **Google Provider (OAuth)**.
- Secure JWT-based session handling.

### **Chat Interface**
- Interactive **chat page** for user input prompts.
- Integrated chatbot powered by **OpenAI's GPT-4 API**.

### **HTML & CSS Code Generation**
- Generates complete, self-contained **HTML and CSS code** for landing pages.
- Provides **live code preview** within the chat interface using an iframe, with the ability to select different device modes. 
- Option to **copy and download the generated HTML file**.

### **System Prompt Optimization**
- Fine-tuned system prompt to optimize chatbot responses specifically for landing page generation.
- Ensures modern design patterns, responsive layouts, and production-ready code.

### **Bonus Features**
- **Landing Page Optimization:** Incorporates strategies for improved chatbot responses, such as generating predefined templates.
- **Theme Support:** Offers both Dark Mode and Light Mode for an enhanced user experience.


## Tech Stack
### **Frontend**
- Framework: **Next.js (TypeScript)**
- UI Styling: **Tailwind CSS**, **ShadcnUI**

### **Backend**
- Authentication: **NextAuth.js**
- Database: **PostgreSQL (using Prisma) Supabase**
- GenAI Provider: **OpenAI (GPT-4)**
- Hosting: **Vercel**

### **Additional Libraries**
- **Lucide Icons:** For UI icons.
- **bcryptjs:** Password hashing for secure user management.
- **Theme Provider:** Dark Mode and Light Mode


## Installation and Setup
Follow these instructions to set up the project locally.

### Prerequisites
- **Node.js v16+**
- **PostgreSQL Database (Supabase)**
- Environment variables configured (.env file)
  ```env
  DATABASE_URL=your_postgres_db_url
  NEXTAUTH_SECRET=your_secret_key
  GOOGLE_CLIENT_ID=your_google_client_id
  GOOGLE_CLIENT_SECRET=your_google_client_secret
  OPENAI_API_KEY=your_openai_api_key
  ```

### **Steps to Run Locally**
1. Clone the repository:
   ```bash
   git clone https://github.com/AakashRanjan07/Chatbot.git
   cd chatbot
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000 in your browser.






