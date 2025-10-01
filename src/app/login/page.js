"use client";
import Navbar from "../Navbar";
import "./login.css";

import { useState } from "react";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [signupData, setSignupData] = useState({
        email: "",
        ownerName: "",
        firmName: "",
        password: "",
        confirmPassword: "",
    });
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleSignupChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        console.log("Signup Data:", signupData);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", loginData);
    };

    return (
        <>
            <Navbar />
            <div className="auth-page">
                <div className="auth-container">
                    <h2 className="auth-title">{isLogin ? "Login" : "Signup"}</h2>

                    {isLogin ? (
                        <form onSubmit={handleLoginSubmit} className="auth-form">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={loginData.email}
                                onChange={handleLoginChange}
                                required
                                className="auth-input"
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={loginData.password}
                                onChange={handleLoginChange}
                                required
                                className="auth-input"
                            />
                            <button type="submit" className="auth-button login-button">
                                Login
                            </button>
                            <div className="social-row">
                                <button
                                    type="button"
                                    className="google-button"



                                >
                                    <svg
                                        className="google-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 48 48"
                                        width="18"
                                        height="18"
                                        aria-hidden="true"
                                    >
                                        <path fill="#fbc02d" d="M43.6 20.5H42V20H24v8h11.3C34.2 32.8 29.7 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.2l5.6-5.6C33.4 6.3 28.9 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.5-.4-3.5z" />
                                        <path fill="#e53935" d="M6.3 14.7l6.6 4.8C14.1 16.6 18.7 14 24 14c3.1 0 5.9 1.2 8 3.2l5.6-5.6C33.4 6.3 28.9 4 24 4 16.6 4 10.3 7.5 6.3 14.7z" />
                                        <path fill="#4caf50" d="M24 44c4.9 0 9.4-1.9 12.8-5.1l-6.1-5c-2 1.7-4.8 2.7-7.6 2.7-5.7 0-10.3-3.2-12.5-7.9L6.3 33.3C9 39.8 15.5 44 24 44z" />
                                        <path fill="#1565c0" d="M43.6 20.5H42V20H24v8h11.3c-1 2.8-2.9 5.1-5.3 6.6v.1c2.7-1.9 4.6-4.9 5.6-8.7z" />
                                    </svg>
                                    <span>Sign in with Google</span>
                                </button>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleSignupSubmit} className="auth-form">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={signupData.email}
                                onChange={handleSignupChange}
                                required
                                className="auth-input"
                            />
                            <input
                                type="text"
                                name="ownerName"
                                placeholder="Owner Name"
                                value={signupData.ownerName}
                                onChange={handleSignupChange}
                                required
                                className="auth-input"
                            />
                            <input
                                type="text"
                                name="firmName"
                                placeholder="Firm Name"
                                value={signupData.firmName}
                                onChange={handleSignupChange}
                                required
                                className="auth-input"
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={signupData.password}
                                onChange={handleSignupChange}
                                required
                                className="auth-input"
                            />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={signupData.confirmPassword}
                                onChange={handleSignupChange}
                                required
                                className="auth-input"
                            />

                            <button type="submit" className="auth-button signup-button">
                                Signup
                            </button>
                        </form>
                    )}

                    <p className="auth-toggle-text">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="auth-toggle-button"
                        >
                            {isLogin ? "Signup" : "Login"}
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
}
