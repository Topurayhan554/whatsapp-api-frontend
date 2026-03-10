# WhatsApp API Frontend 🚀

A modern React frontend for the WhatsApp API Backend.
Built with Vite, Tailwind CSS, and Socket.IO for real-time QR authentication.

---

## Features ✅

- 📱 Real-time QR Code display via Socket.IO
- 🔄 Auto-redirect after WhatsApp authentication
- 📨 Send WhatsApp messages via REST API
- 📋 Persistent message log (localStorage)
- 📊 Message statistics (Sent, Failed, Total)
- 🟢 Live connection status indicator
- 🔔 Toast notifications for success/error
- 📱 Fully responsive UI

---

## Tech Stack 🛠️

| Technology       | Purpose       |
| ---------------- | ------------- |
| React 18         | UI Framework  |
| Vite             | Build Tool    |
| Tailwind CSS     | Styling       |
| Socket.IO Client | Real-time QR  |
| Axios            | API Calls     |
| React Router v6  | Navigation    |
| React Hot Toast  | Notifications |
| React Icons      | Icons         |

---

## Project Structure 📁

```
whatsapp-frontend/
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── Button.jsx
│   │   ├── QRCode/
│   │   │   └── QRDisplay.jsx
│   │   ├── Dashboard/
│   │   │   └── ConnectionStatus.jsx
│   │   └── Message/
│   │       ├── MessageForm.jsx
│   │       └── MessageLog.jsx
│   ├── context/
│   │   └── AuthContext.js
│   ├── hooks/
│   │   └── useWhatsApp.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── DashboardPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── services/
│   │   ├── api.service.js
│   │   └── socket.service.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## Getting Started 🚀

### Requirements

- Node.js v18 or higher
- npm v8 or higher
- WhatsApp API Backend running on port 3000

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/your-username/whatsapp-frontend.git
cd whatsapp-frontend
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Setup environment variables

```bash
cp .env
```

#### 4. Run the frontend

```bash
# Development
npm run dev

# Production Build
npm run build
```

#### 5. Open browser

```
http://localhost:5173
```

---

## Environment Variables 📝

| Variable          | Description        | Default                     |
| ----------------- | ------------------ | --------------------------- |
| `VITE_API_URL`    | Backend API URL    | `http://localhost:3000/api` |
| `VITE_SOCKET_URL` | Backend Socket URL | `http://localhost:3000`     |

---

## Pages 📄

### Home Page `/`

- QR Code দেখায়
- WhatsApp দিয়ে Scan করার নির্দেশনা
- Scan হলে Dashboard এ redirect করে

### Dashboard Page `/dashboard`

- WhatsApp connection status দেখায়
- Message পাঠানোর form
- Message log with statistics
- Disconnect হলে Home এ redirect করে

### 404 Page `*`

- Page not found দেখায়
- Home এ ফিরে যাওয়ার button

---

## Socket.IO Events 🔌

| Event    | Direction       | Description                |
| -------- | --------------- | -------------------------- |
| `qr`     | Server → Client | QR code image (base64)     |
| `status` | Server → Client | WhatsApp connection status |

---

## How It Works 🔄

```
Browser খুললো
      ↓
Socket.IO connect হলো
      ↓
QR Code দেখালো
      ↓
WhatsApp দিয়ে Scan করলো
      ↓
Dashboard এ গেলো
      ↓
Phone + Message দিলো
      ↓
API call হলো
      ↓
Message গেলো ✅
```

---

## Backend Repository 🔗

> Make sure the backend is running before starting the frontend.

👉 [WhatsApp API Backend](https://github.com/Topurayhan554/whatsapp-api-backend)

---

## License

MIT License © 2024
