import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {HomePage} from "./pages/home.jsx";
import {NotFoundPage} from "./pages/notfound.jsx";
import {BookingsPage} from "./pages/bookingspage.jsx";
import {Toaster} from "react-hot-toast";
import {SuccessPage} from "./pages/successful.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="*" element={<NotFoundPage/>} />
            <Route path="/bookings" element={<BookingsPage/>} />
            <Route path="/success" element={<SuccessPage/>} />
        </Routes>
        <Toaster/>
    </BrowserRouter>
  )
}

export default App
