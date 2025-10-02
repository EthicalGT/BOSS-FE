import Navbar from "./Navbar";
import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-left">
            <div className="tag">Browser Offense Surveillance & Shield</div>
            <h1>
              <span className="detect">Detect.</span>
              <span className="report">Report.</span>
              <span className="neutralize">Neutralize.</span>
            </h1>
            <p>BOSS protects your web apps from browser-side threats with real-time detection and automated defense.</p>
            <div className="hero-buttons">
              <Link href="/login"><button className="btn-primary">Get Started Free →</button></Link>
              <button className="btn-outline">Request Demo</button>
            </div>
          </div>


          <div className="hero-right">
            <div className="card">
              <h3>BOSS Architecture Flow</h3>
              <div className="flow">
                <div className="flow-step">👁 boss.js + ⚡ boss-sw.js</div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step backend">🛡 Rust Backend <br /><small>Intelligence & Analysis</small></div>
                <div className="flow-arrow">↓</div>
                <div className="flow-actions">
                  <span className="action">WIPE</span>
                  <span className="action">BLOCK</span>
                  <span className="action">INVALIDATE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <div className="container">
            <h2 className="section-title">Enterprise-Grade <span className="browser_security">Browser Security</span></h2>
            <p className="section-subtitle">
              Follow these simple steps to integrate and secure your browser environment with BOSS.
            </p>


            <div className="steps-grid">

              <div className="step-card">
                <div className="step-number">
                  <p>1</p>
                </div>
                <div className="step-icon">
                  <i className="fas fa-download"></i>
                </div>
                <div className="step-content">
                  <h3 className="step-title">Real-Time Monitoring</h3>
                  <p className="step-description">
                    Serivce worker + JS agent analyze browser activity continuously,
                    detecting threats as they emerge.
                  </p>
                  <p className="step-state">ENTERPRISE READY</p>
                </div>
              </div>


              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-icon">
                  <i className="fas fa-bug"></i>
                </div>
                <div className="step-content">
                  <h3 className="step-title">Automated Defense</h3>
                  <p className="step-description">
                    Instantly blocks threats, wipes compromised storage, and
                    kills sessions before damage occurs.
                  </p><br />
                  <p className="step-state">ENTERPRISE READY</p>
                </div>
              </div>


              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="step-content">
                  <h3 className="step-title">Centra Inteligence</h3>
                  <p className="step-description">
                    Rust backend aggregates threat data and applies intelligent rules
                    for comprehensive protection.
                  </p><br />
                  <p className="step-state">ENTERPRISE READY</p>
                </div>
              </div>
            </div>


            <div className="section-cta">
              <p className="cta-text">Ready to secure your browser today?</p>
              <a href="#get-started" className="cta-link">
                <i className="fas fa-arrow-right"></i>
                Get Started
              </a>
            </div>
          </div>
        </section>


        <section id="how-it-works" className="how-it-works">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                How <span className="boss">BOSS</span> Works
              </h2>
              <p className="section-description">
                Three simple steps to bulletproof browser security. Deploy, monitor, and neutralize threats
                automatically.
              </p>
            </div><br />


            <div className="steps-grid">
              <div className="step-card">
                <div className="step-connection"></div>
                <div className="step-number">01</div>
                <div className="step-content">
                  <div className="step-icon">
                    <i className="fas fa-download"></i>
                  </div>
                  <h3 className="step-title">Step 01: Deploy</h3>
                  <p className="step-subtitle">boss.js & boss-sw.js in minutes</p>
                  <p className="step-description">
                    Simple integration with your existing web application. No complex configuration required.
                  </p>
                  <div className="step-code">
                    <code>npm install @boss/security</code>
                  </div>
                </div>
              </div>

              <div className="step-card">
                <div className="step-connection"></div>
                <div className="step-number">02</div>
                <div className="step-content">
                  <div className="step-icon">
                    <i className="fas fa-search"></i>
                  </div>
                  <h3 className="step-title">Step 02: Monitor & Detect</h3>
                  <p className="step-subtitle">Storage abuse, fake requests, injections</p>
                  <p className="step-description">
                    Advanced algorithms continuously scan for suspicious browser activity and potential threats.
                  </p>
                  <div className="step-code">
                    <code> Auto-detects threats</code>
                  </div>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">03</div>
                <div className="step-content">
                  <div className="step-icon">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <h3 className="step-title">Step 03: Neutralize & Visualize</h3>
                  <p className="step-subtitle">Auto-defenses + live dashboard</p>
                  <p className="step-description">
                    Instant threat response with comprehensive reporting and real-time security dashboard.
                  </p>
                  <div className="step-code">
                    <code> Automated response</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-cta">
              <p className="cta-text">Ready to get started?</p>
              <div className="cta-link">
                <span>View Integration Guide</span>
                <i className="fas fa-download"></i>
              </div>
            </div>
          </div>
        </section>



        <section id="core-security-module" className="core-security-module">
          <div className="container">
            <section className="section-header">
              <h2 className="section-title">
                Core <span className="security">Security</span>Modules
              </h2>
              <p className="section-description">
                Six powerfull modules working together to provide comprehensive
                Browser-side security coverage.
              </p>
            </section><br />

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-connection"></div>
                <div className="step-content">
                  <div className="step-icon">
                    <i className="fas fa-search"></i>
                  </div>
                  <h3 className="step-title">Service Worker Monitor</h3>

                  <p className="step-description">
                    Continuous monitoring of service worker activities and
                    background processe.
                  </p>
                  <p className="step-module-number">
                    Module_01
                  </p>

                </div>
              </div>

              <div className="step-card">
                <div className="step-connection"></div>
                <div className="step-content">
                  <div className="step-icon">
                    <i className="fas fa-search"></i>
                  </div>
                  <h3 className="step-title">Storage Guardian</h3>

                  <p className="step-description">
                    Real-time protection against localStorage, sessionStorage, and indexedDB
                    abuse.
                  </p>
                  <p className="step-module-number">
                    Module_02
                  </p>

                </div>
              </div>

              <div className="step-card">
                <div className="step-connection"></div>
                <div className="step-content">
                  <div className="step-icon">
                    <i className="fas fa-search"></i>
                  </div>
                  <h3 className="step-title">Request Shield</h3>

                  <p className="step-description">
                    Intercepts and analyzes all outgoing requests for suspicious patterns.
                  </p>
                  <p className="step-module-number">
                    Module_03
                  </p>
                </div>
              </div>
            </div><br />

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-connection"></div>
                <div className="step-content">
                  <div className="step-icon">
                    <i className="fas fa-search"></i>
                  </div>
                  <h3 className="step-title">Response Integrity Checker</h3>

                  <p className="step-description">
                    Validates response integrity and detects tempering attempts.
                  </p>
                  <p className="step-module-number">
                    Module_04
                  </p>

                </div>
              </div>

              <div className="step-card">
                <div className="step-connection"></div>
                <div className="step-content">
                  <div className="step-icon">
                    <i className="fas fa-search"></i>
                  </div>
                  <h3 className="step-title">Auto-Defense Engine</h3>

                  <p className="step-description">
                    Automated threat response system with configurable action policies.
                  </p>
                  <p className="step-module-number">
                    Module_05
                  </p>

                </div>
              </div>

              <div className="step-card">
                <div className="step-connection"></div>
                <div className="step-content">
                  <div className="step-icon">
                    <i className="fas fa-search"></i>
                  </div>
                  <h3 className="step-title">Analytics Dashboard</h3>

                  <p className="step-description">
                    Comprehensive threat analytics and real-time security monitoring.
                  </p>
                  <p className="step-module-number">
                    Module_06
                  </p>
                </div>
              </div>

              <div className="step-card2">
                <div className="step-connection"></div>
                <div className="step-content">

                  <h3 className="step-title">Analytics Dashboard</h3>

                  <p className="step-description">
                    Comprehensive threat analytics and real-time security monitoring.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
