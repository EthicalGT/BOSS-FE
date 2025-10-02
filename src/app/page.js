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
                  <i className="fa fa-heartbeat" aria-hidden="true"></i>
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
                  <i className="fa-solid fa-brain" ></i>
                </div>
                <div className="step-content">
                  <h3 className="step-title">Central Inteligence</h3>
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



        <section className="section">
          <h2>Core<span className="security_modules"> Security Modules</span></h2>
          <p>Six powerful modules working together to provide comprehensive browser-side security coverage.</p>
        </section>


        <div className="grid">
          <div className="card">
            <span className="status">● Active</span>
            <div className="step-icon">
              <i className="fa fa-eye " aria-hidden="true"></i>
            </div>
            <h3>Service Worker Monitor</h3>
            <p>Continuous monitoring of service worker activities and background processes.</p>
          </div>
          <div className="card">
            <span className="status">● Active</span>
            <div className="step-icon">
              <i className="fa fa-database" aria-hidden="true"></i>
            </div>
            <h3>Storage Guardian</h3>
            <p>Real-time protection against localStorage, sessionStorage, and IndexedDB abuse.</p>
          </div>
          <div className="card">
            <span className="status">● Active</span>
            <div className="step-icon">
              <i className="fa fa-shield" aria-hidden="true"></i>
            </div>
            <h3>Request Shield</h3>
            <p>Intercepts and analyzes all outgoing requests for suspicious patterns.</p>
          </div>
          <div className="card">
            <span className="status">● Active</span>
            <div className="step-icon">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
            </div>
            <h3>Response Integrity Checker</h3>
            <p>Validates response integrity and detects tampering attempts.</p>
          </div>
          <div className="card">
            <span className="status">● Active</span>
            <div className="step-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h3>Auto-Defense Engine</h3>
            <p>Automated threat response system with configurable action policies.</p>
          </div>
          <div className="card">
            <span className="status">● Active</span>
            <div className="step-icon">
              <i className="fa fa-bar-chart" aria-hidden="true"></i>
            </div>
            <h3>Analytics Dashboard</h3>
            <p>Comprehensive threat analytics and real-time security monitoring.</p>
          </div>
        </div>


        <div className="step-card2">
          <h3>Technical Specifications</h3>
          <div className="spec-item">
            <span className="highlight">&lt;1ms</span>
            <p>Average Response Time</p>
          </div>
          <div className="spec-item">
            <span className="highlight">99.9%</span>
            <p>Threat Detection Rate</p>
          </div>
          <div className="spec-item">
            <span className="highlight">24/7</span>
            <p>Continuous Monitoring</p>
          </div>
        </div>

      </main >
    </>
  );
}
