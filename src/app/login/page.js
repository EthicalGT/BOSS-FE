"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import "./login.css";

/**
 * Client-only Google Sign-In (OAuth2 token client) demo.
 * - Requires: NEXT_PUBLIC_GOOGLE_CLIENT_ID in .env.local
 * - No backend required.
 * - Opens a real Google account chooser and logs real name & email to console.
 *
 * Notes:
 * - Make sure your origin is added in Google Cloud Console (Authorized JS origins).
 * - Scopes: 'profile email' -> we fetch userinfo from https://www.googleapis.com/oauth2/v3/userinfo
 */

export default function AuthPage() {
    const tokenClientRef = useRef(null);
    const [gisLoaded, setGisLoaded] = useState(false);
    const [loading, setLoading] = useState(false);

    const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const SCOPES = "openid profile email";

    useEffect(() => {
        // dynamically add GIS script
        const existing = document.getElementById("google-identity");
        if (!existing) {
            const script = document.createElement("script");
            script.src = "https://accounts.google.com/gsi/client";
            script.id = "google-identity";
            script.async = true;
            script.defer = true;
            script.onload = () => {
                setGisLoaded(true);
            };
            script.onerror = () => {
                console.error("Failed to load Google Identity Services script.");
            };
            document.body.appendChild(script);
        } else {
            setGisLoaded(true);
        }

        return () => {
            // optional cleanup (don't remove script to avoid reloading on route change)
        };
    }, []);

    useEffect(() => {
        if (!gisLoaded) return;
        if (!CLIENT_ID) {
            console.error(
                "Missing NEXT_PUBLIC_GOOGLE_CLIENT_ID. Add it to .env.local and restart dev server."
            );
            return;
        }

        // init token client
        /* global google */
        try {
            tokenClientRef.current = window.google.accounts.oauth2.initTokenClient({
                client_id: CLIENT_ID,
                scope: SCOPES,
                // callback will be replaced when requestAccessToken is called, see below
                callback: (resp) => {
                    // placeholder
                    console.log("token callback", resp);
                },
            });
        } catch (err) {
            console.error("Failed to initialize google token client:", err);
        }
    }, [gisLoaded, CLIENT_ID]);

    const handleGoogleSignIn = async () => {
        if (!tokenClientRef.current) {
            console.error("Google token client not initialized yet.");
            return;
        }

        setLoading(true);

        try {
            // Replace the callback dynamically to capture access token
            tokenClientRef.current.callback = async (tokenResponse) => {
                if (tokenResponse.error) {
                    console.error("Token error:", tokenResponse);
                    setLoading(false);
                    return;
                }

                const accessToken = tokenResponse.access_token;
                if (!accessToken) {
                    console.error("No access token received:", tokenResponse);
                    setLoading(false);
                    return;
                }

                // Fetch user info using the access token
                try {
                    const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    });

                    if (!res.ok) {
                        const text = await res.text();
                        console.error("Failed fetching userinfo:", res.status, text);
                        setLoading(false);
                        return;
                    }

                    const profile = await res.json();
                    // profile contains: sub, name, given_name, family_name, picture, email, email_verified, locale
                    console.log("✅ Google user profile (real):", {
                        name: profile.name,
                        email: profile.email,
                        // other available fields if you want:
                        // picture: profile.picture,
                        // locale: profile.locale,
                    });

                    setLoading(false);
                } catch (fetchErr) {
                    console.error("Error fetching userinfo:", fetchErr);
                    setLoading(false);
                }
            };

            // This opens the consent/account chooser popup.
            // If the user has already granted the scopes, popup may be skipped, but usually shows chooser.
            tokenClientRef.current.requestAccessToken({ prompt: "select_account" });
        } catch (err) {
            console.error("Error requesting access token:", err);
            setLoading(false);
        }
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
                                <button
                                    type="button"
                                    className="google-button"
                                    onClick={handleGoogleSignIn}
                                    disabled={!gisLoaded || loading}
                                >
                                    <svg
                                        className="google-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 48 48"
                                        width="18"
                                        height="18"
                                        aria-hidden="true"
                                    >
                                        <path fill="#fbc02d" d="M43.6 20.5H42V20H24v8h11.3C34.2..." />
                                    </svg>
                                    <span>
                                        {loading ? "Opening Google..." : "Sign in with Google"}
                                    </span>
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
