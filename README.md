# Primetrade.ai - Authentication System

A full-stack authentication application built with the MERN stack featuring user registration, login, logout, and a protected dashboard.

## 🚀 Features

- **User Authentication**
  - User registration with validation
  - Secure login with JWT tokens
  - Logout functionality
  - Protected routes and session management

- **Dashboard**
  - User profile display
  - Protected access (requires authentication)
  - Responsive design

- **Modern UI/UX**
  - Built with Shadcn UI components
  - Styled with Tailwind CSS v4
  - Responsive and mobile-friendly
  - Clean, professional interface

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS framework
- **Shadcn UI** - Component library
- **Axios** - HTTP client
- **Sonner** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **Bcrypt.js** - Password hashing
- **Cookie Parser** - Cookie handling
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas account)
- npm or yarn package manager

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/pavan441199/Primetrade.ai.git
cd Primetrade.ai
```

### 2. Server Setup

```bash
cd server
npm install
```

Create a `.env` file in the server directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key_here
PORT=3000
```

### 3. Client Setup

```bash
cd client
npm install
```

## 🚀 Running the Application

### Start the Server

```bash
cd server
npm run dev
```

The server will run on `http://localhost:3000`

### Start the Client

```bash
cd client
npm run dev
```

The client will run on `http://localhost:5173`

## 📱 Usage

1. **Register**: Navigate to `/auth/register` to create a new account
2. **Login**: Go to `/auth/login` to sign in with your credentials
3. **Dashboard**: After logging in, you'll be redirected to `/dashboard` where you can view your profile
4. **Logout**: Click the logout button in the header to end your session

## 🗂️ Project Structure

```
assignment/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── ui/       # Shadcn UI components
│   │   │   ├── auth/     # Auth layout components
│   │   │   ├── admin-view/ # Dashboard layout components
│   │   │   └── common/   # Common components (forms, auth guards)
│   │   ├── pages/        # Page components
│   │   │   ├── auth/     # Login & Register pages
│   │   │   └── admin-view/ # Dashboard pages
│   │   ├── store/        # Redux store configuration
│   │   │   └── auth-slice/ # Authentication state management
│   │   ├── lib/          # Utility functions
│   │   ├── config/       # Form configurations
│   │   ├── App.jsx       # Main app component with routing
│   │   └── main.jsx      # Application entry point
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── controllers/       # Request handlers
    │   └── auth-controller/ # Authentication logic
    ├── models/           # Mongoose schemas
    │   └── user.js      # User model
    ├── routes/           # API routes
    │   └── auth-routs/  # Authentication routes
    ├── database/         # Database configuration
    │   └── db.js        # MongoDB connection
    ├── server.js         # Server entry point
    └── package.json
```

## 🔐 API Endpoints

### Authentication Routes

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/auth` - Check authentication status

## 🎨 Features Implemented

- ✅ User registration with form validation
- ✅ Secure login with JWT authentication
- ✅ Protected routes with authentication guards
- ✅ User dashboard with profile information
- ✅ Logout functionality
- ✅ Session management with cookies
- ✅ Responsive design for all screen sizes
- ✅ Toast notifications for user feedback
- ✅ Loading states and error handling

## 🔒 Security Features

- Password hashing with bcrypt.js
- JWT token-based authentication
- HTTP-only cookies for token storage
- Protected API routes
- CORS configuration
- Input validation and sanitization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Pawan Kalyan**

- GitHub: [@pavan441199](https://github.com/pavan441199)

## 🙏 Acknowledgments

- Shadcn UI for the beautiful component library
- Redux Toolkit for simplified state management
- The MERN stack community for excellent documentation
