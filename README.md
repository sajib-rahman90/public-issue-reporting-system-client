# 🏙️ Public Infrastructure Issue Reporting System

# Website name:

CityResolve

## 📌 Project Overview

The **Public Infrastructure Issue Reporting System** is a full-stack web application that allows citizens to report real-world infrastructure issues such as broken streetlights, potholes, water leakage, garbage overflow, damaged roads, and other municipal problems.

The platform connects citizens, staff, and administrators in a structured workflow system to ensure faster response, better transparency, and efficient issue resolution.

It is designed as a real-world civic management system where every issue is tracked from creation to final closure with a complete audit history.

---

## 🌐 Live Project Links

- Live Website: https://public-issue-reporting-system-sajib.netlify.app

- GitHub Client Repository Link: https://github.com/sajib-rahman90/public-issue-reporting-system-client

- GitHub Server Repository Link: https://github.com/sajib-rahman90/public-issue-reporting-system-server

---

## 🔐 Admin Credentials

- Email: admin@gmail.com
- Password: Admin1234

---

## 👥 Demo Accounts

### Citizen User

- Email: citizen@gmail.com
- Password: Citizen1234

### Staff User

- Email: staff@gmail.com
- Password: Staff1234

---

## 🧩 Core Features

### 🧑 Citizen Features

- Register and login securely
- Report infrastructure issues with:
  - Title
  - Description
  - Category
  - Image upload
  - Location
- View and track reported issues
- Update or delete own issues (only if status is pending)
- Upvote issues (only once per issue)
- Cannot upvote own issues
- Boost issues using payment system (priority feature)
- Free users can report maximum 3 issues
- Premium users can report unlimited issues
- View issue timeline and progress
- Receive real-time status updates

---

### 🧑‍🔧 Staff Features

- View only assigned issues
- Update issue status:
  - Pending → In Progress → Working → Resolved → Closed
- Add progress updates to issues
- Mark issues as resolved
- View assigned task dashboard
- Profile management (update personal info)
- All status changes are recorded in issue timeline automatically

---

### 🧑‍💼 Admin Features

- Full system control
- View all issues in the system
- Assign issues to staff members
- Reject or approve issues
- Manage users (block/unblock citizens)
- Manage staff accounts (create, update, delete)
- Monitor all payments (subscriptions & boosts)
- View system analytics:
  - Total issues
  - Resolved issues
  - Pending issues
  - Rejected issues
  - Total revenue
- Access full system dashboard with charts and stats

---

## 💰 Payment System

- Users can boost issues for priority handling (100 TK per boost)
- Premium subscription available (1000 TK)
- Premium users get:
  - Unlimited issue reporting
  - Priority support

Payment data is stored and tracked for admin review.

---

## 📊 Core Pages

### Public Pages

- Home Page (banner, latest issues, features)
- All Issues Page (filter, search, pagination)
- Issue Details Page
- Login / Register Pages
- 404 Not Found Page

---

### Citizen Dashboard

- Overview dashboard with statistics
- My Issues page
- Report Issue form
- Profile page with subscription option

---

### Staff Dashboard

- Assigned issues list
- Status update panel
- Profile management
- Task tracking dashboard

---

### Admin Dashboard

- System analytics dashboard
- All issues management
- User management (block/unblock)
- Staff management (CRUD)
- Payments overview

---

## 🔍 Advanced Features

- Role-based authentication system
- JWT secure API protection
- Firebase authentication integration
- Persistent login (no logout on refresh)
- Server-side search and filtering
- Pagination for large datasets
- Toast notifications for all actions
- Prevent multiple upvotes per user per issue
- Prevent users from upvoting their own issues
- Responsive UI (mobile, tablet, desktop)
- Secure environment variables for all secrets

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Tailwind CSS
- React Router
- TanStack Query
- Axios

### Backend

- Node.js
- Express.js
- MongoDB

### Authentication

- Firebase Authentication
- JWT (JSON Web Token)

### Payments

- Stripe Integration (or equivalent)

---

## Notes

- Environment variables used for all sensitive data
- Role-based access control implemented for security
- All updates reflect instantly in UI
- Fully responsive and production-ready system
