"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import "./login.css";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { SignUpHandler } from "../API";
import Link from "next/link";

export default function AuthPage() {
    const handleGoogleLoginSuccess = (credentialResponse) => {
        if (credentialResponse.credential) {
            const decoded = jwtDecode(credentialResponse.credential);
            console.log("Google User Info:", decoded);
        }
    };

    const handleGoogleLoginError = () => {
        console.error("Google login failed");
    };
    const [isLogin, setIsLogin] = useState(true);
    const [signupData, setSignupData] = useState({
        email: "",
        ownerName: "",
        dob: "",
        password: "",
        confirmPassword: "",
    });
    const [loginData, setLoginData] = useState({ email: "", password: "" });

    const handleSignupChange = (e) =>
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    const handleLoginChange = (e) =>
        setLoginData({ ...loginData, [e.target.name]: e.target.value });

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        if (signupData.password !== signupData.confirmPassword) {
            console.error("Passwords do not match");
            return;
        }
        try {
            const res = await SignUpHandler(loginData);
            alert(res.msg);
        } catch (error) {
            alert(error);
        }


        console.log("Signup Data (local only):", {
            email: signupData.email,
            name: signupData.ownerName,
        });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data (local only):", { email: loginData.email });
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
                            <Link href="/otp"> <button type="submit" className="auth-button otp-button">
                                Otp
                            </button></Link>

                            <div className="social-row">
                                <GoogleLogin
                                    onSuccess={handleGoogleLoginSuccess}
                                    onError={handleGoogleLoginError}
                                />
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
                                placeholder="Full Name"
                                value={signupData.ownerName}
                                onChange={handleSignupChange}
                                required
                                className="auth-input"
                            />
                            <input
                                type="date"
                                name="dob"
                                placeholder="Date of Birth"
                                value={signupData.dob}
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
            </div >
        </>
    );
}
