# Pastebin-Lite 📝

Pastebin-Lite is a lightweight web application that allows users to create, store, and share text pastes via a unique URL.  
It is designed as a minimal clone of Pastebin, focusing on simplicity, fast performance, and clean architecture.

The project is built with a modern **React + Tailwind CSS frontend** and a **Node.js + Express + MongoDB backend**, and is fully deployed on **Vercel**.

---

## 🚀 Live Demo

- **Frontend (Vercel):**  
  https://aganitha-frontend-fawn.vercel.app

- **Backend API (Vercel):**  
  https://aganitha-backend-delta.vercel.app

---

## 🧩 Features

- Create a text paste instantly
- Generate a unique shareable URL for each paste
- View pastes using the shared link
- Backend persistence using MongoDB
- Clean, responsive UI built with Tailwind CSS
- RESTful API design

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios (API communication)
- Vercel (Deployment)

### Backend
- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM)
- Vercel (Deployment)

---

## 📁 Repository Structure

├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── tailwind.config.js
│ └── package.json
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── server.js
│ └── package.json
│
└── README.md



---

## ⚙️ Running the Project Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/SandeepKumarSolanki/Aganitha.git
cd Aganitha

cd backend
npm install


PORT=5000
MONGODB_URI=your_mongodb_connection_string

npm start


cd frontend
npm install
npm run dev


👨‍💻 Author

Sandeep Kumar Solanki
GitHub: https://github.com/SandeepKumarSolanki


---

If you want, I can also:
- Optimize it for **automated test evaluators**
- Add **API examples with curl**
- Shorten it for **interview submission**
- Make a **FAANG-style README**

Just tell me 👍
