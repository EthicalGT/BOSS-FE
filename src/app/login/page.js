"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import "./login.css";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";

export default function AuthPage() {
    const tokenClientRef = useRef(null);
    const [gisLoaded, setGisLoaded] = useState(false);
    const [loading, setLoading] = useState(false);

    const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const SCOPES = "openid profile email";

    const handleGoogleLoginSuccess = (credentialResponse) => {
        if (credentialResponse.credential) {
            const decoded = jwtDecode(credentialResponse.credential);
            console.log("Google User Info:", decoded);
        }
    };

    const handleGoogleLoginError = () => {
        console.error("Google login failed");
    };

    // -- simple login/signup UI (we only call google handler here) --
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

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        if (signupData.password !== signupData.confirmPassword) {
            console.error("Passwords do not match");
            return;
        }
        console.log("Signup Data (local only):", {
            email: signupData.email,
            name: signupData.ownerName,
            dob: signupData.dob,
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

                    <div style={{ marginTop: 12, color: "#666", fontSize: 13 }}>
                        <div>GIS script loaded: {gisLoaded ? "yes" : "no"}</div>
                        <div>
                            Client ID present: {CLIENT_ID ? "yes" : "no (set NEXT_PUBLIC_GOOGLE_CLIENT_ID)"}
                        </div>
                        <div>Open console to see name & email after Google sign-in.</div>
                    </div>
                </div>
            </div>
        </>
    );
}
