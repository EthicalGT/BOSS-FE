"use client";
import Navbar from "../Navbar";
import { useState } from "react";
import "./otp.css"; // import the css file

export default function OTPForm() {
    const [otp, setOtp] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Entered OTP: " + otp);
    };

    return (
        <>
            <Navbar />
            <div className="container3">
                <div className="main-form">
                    <form onSubmit={handleSubmit} className="otp-form">
                        <h2 className="otp_title">Enter OTP</h2>

                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            className="otp-input"
                        />

                        <button type="submit" className="otp-button">
                            Submit OTP
                        </button>
                    </form>
                </div></div>
        </>
    );
}
