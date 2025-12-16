# SmokeRise Restaurant Reservation System 🍽️

A full-stack MERN restaurant reservation application that allows customers to book tables at SmokeRise restaurant.

## 📋 Features

- Real-time table reservation system
- Form validation (client and server-side)
- Email validation using validator.js
- Phone number validation (10 digits)
- Date and time slot selection
- Toast notifications for user feedback
- Responsive design with Tailwind CSS
- MongoDB data persistence

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **React Router** - Navigation
- **Axios** - HTTP requests
- **React Hot Toast** - Notifications
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **CORS** - Cross-origin resource sharing
- **Validator** - Email validation
- **dotenv** - Environment variables

## 📁 Project Structure

```
SphesihleBookingSystem/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images, fonts, etc.
│   │
│   ├── backend/                 # Backend API
│   │   ├── config/
│   │   │   └── config.env       # Environment variables
│   │   ├── controller/
│   │   │   └── reservation.js   # Reservation controller logic
│   │   ├── database/
│   │   │   └── dbConnection.js  # MongoDB connection
│   │   ├── error/
│   │   │   └── error.js         # Error handler & middleware
│   │   ├── models/
│   │   │   └── reservationSchema.js # Mongoose schema
│   │   ├── routes/
│   │   │   └── reservationRoute.js  # API routes
│   │   ├── node_modules/        # Backend dependencies
│   │   ├── app.js               # Express app configuration
│   │   ├── server.js            # Server entry point
│   │   ├── package.json         # Backend dependencies
│   │   └── package-lock.json
│   │
│   ├── components/              # React components
│   │   ├── functions/
│   │   │   └── timeslots.jsx    # Time slot generator
│   │   ├── bookings.jsx         # Reservation form
│   │   ├── navbar.jsx           # Navigation bar
│   │   └── welcome.jsx          # Welcome component
│   │
│   ├── pages/                   # Page components
│   │   ├── bookingspage.jsx     # Booking page
│   │   ├── home.jsx             # Home page
│   │   ├── notfound.jsx         # 404 page
│   │   └── successful.jsx       # Success page
│   │
│   ├── App.jsx                  # Main App component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
│
├── .gitignore
├── package.json                 # Frontend dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB
- npm or yarn

### Backend Setup

1. **Navigate to backend directory:**
```bash
cd src/backend
```

2. **Install dependencies:**
```bash
npm install express mongoose cors dotenv validator
```

3. **Create/Update config.env file in src/backend/config/:**
```env
PORT = 4000
FRONTEND_URL = http://localhost:5173
MONGO_URI = your_mongodb_connection_string
```

4. **Start the server (from src/backend directory):**
```bash
node server.js
# or with nodemon
nodemon server.js
```

Server should run on `http://localhost:4000`

### Frontend Setup

1. **Navigate to project root directory:**
```bash
cd ../..  # Go back to project root
```

2. **Install dependencies:**
```bash
npm install
```

This will install:
- axios
- react-hot-toast
- react-router-dom
- lucide-react
- And other dependencies from package.json

3. **Start the development server:**
```bash
npm run dev
```

Frontend should run on `http://localhost:5173`

### Running Both Servers

You'll need **two terminal windows**:

**Terminal 1 (Backend):**
```bash
cd src/backend
nodemon server.js
```

**Terminal 2 (Frontend):**
```bash
# From project root
npm run dev
```

## 🔌 API Endpoints

### POST `/api/v1/reservation/send`
Creates a new reservation

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "phone": "1234567890",
  "email": "john@example.com",
  "guests": "4",
  "date": "2024-12-25",
  "time": "6:00 PM - 7:00 PM"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Successfully created Reservation!"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Please fill full reservation form!"
}
```

## ✅ Validation Rules

- **First Name:** 3-30 characters
- **Last Name:** 3-30 characters
- **Phone:** Exactly 10 digits
- **Email:** Valid email format
- **Guests:** Required
- **Date:** Required
- **Time:** Required (selected from available slots)

## 🧪 Testing with Postman

1. **Method:** POST
2. **URL:** `http://localhost:4000/api/v1/reservation/send`
3. **Headers:**
    - Content-Type: `application/json`
4. **Body (raw JSON):**
```json
{
  "firstName": "Test",
  "lastName": "User",
  "phone": "1234567890",
  "email": "test@example.com",
  "guests": "2",
  "date": "2024-12-25",
  "time": "7:00 PM - 8:00 PM"
}
```

## 🐛 Common Issues & Solutions

### Issue: `ECONNREFUSED`
**Solution:** Make sure backend server is running on port 4000

### Issue: `ERR_NETWORK` or CORS Error
**Solution:** Ensure CORS is configured correctly in `app.js`:
```javascript
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "OPTIONS"],
    credentials: true,
}))
```

### Issue: Environment variables not loading
**Solution:** Check that `config.env` path is correct in `app.js`

### Issue: MongoDB connection failed
**Solution:** Verify your MONGO_URI is correct and MongoDB Atlas allows connections from your IP

## 🔐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Backend server port | 4000 |
| FRONTEND_URL | Frontend application URL | http://localhost:5173 |
| MONGO_URI | MongoDB connection string | mongodb+srv://... |

## 📝 Database Schema

**Collection:** reservations

```javascript
{
  firstName: String (3-30 chars),
  lastName: String (3-30 chars),
  phone: String (10 digits),
  email: String (valid email),
  guests: String,
  date: String,
  time: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 📦 Repository

**GitHub:** [https://github.com/Sphesihle118/SphesihleBookingSystem.git](https://github.com/Sphesihle118/SphesihleBookingSystem.git)

### Clone the Repository

```bash
git clone https://github.com/Sphesihle118/SphesihleBookingSystem.git
cd SphesihleBookingSystem
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Sphesihle118**
- GitHub: [@Sphesihle118](https://github.com/Sphesihle118)

## 🙏 Acknowledgments

- React team for the amazing library
- MongoDB for the database solution
- Express.js for the backend framework
- All contributors and testers


```gitignore
# .gitignore
node_modules/
src/backend/node_modules/
.env
config.env
src/backend/config/config.env
.DS_Store
dist/
build/
```