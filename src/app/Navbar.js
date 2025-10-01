"use client";
import Link from "next/link";
import Image from "next/image";
import boss from "../app/assets/img/boss.png";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="logo">
                <Image src={boss} alt="BOSS Logo" className="logo-icon" width={70} height={70} />
                <span className="logo-text">
                    BOSS <small>Browser Security</small>
                </span>
            </div>

            <nav>
                <ul className="nav-links">
                    <li><Link href="/features">Features</Link></li>
                    <li><Link href="/#how-it-works">How It Works</Link></li>
                    <li><Link href="/#modules">Modules ▾</Link></li>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                </ul>
            </nav>

            <div className="nav-actions">
                <Link href="/login">
                    <button className="btn-outline">Login</button>
                </Link>
                <Link href="/signup">
                    <button className="btn-primary">Get Started</button>
                </Link>
            </div>
        </header>
    );
}
