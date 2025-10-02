markdown
# 🔰 BOSS — Browser-side Oversight & Security Sentinel

**A new layer of browser-side security for web applications.**  
BOSS actively monitors service workers — the hidden background scripts that power offline caching, notifications, and request handling — to detect suspicious activity that traditional firewalls, WAFs, and antivirus miss.  

[![Status](https://img.shields.io/badge/status-MVP-orange)]() [![License: MIT](https://img.shields.io/badge/license-MIT-blue)]()

---

## 🚀 Why BOSS?

Service Workers are powerful — but if compromised, they can:
- Steal sensitive data (cookies, tokens)
- Inject malicious scripts into responses
- Persist even after page reloads
- Poison caches or abuse offline features

⚠ **Current tools do not monitor Service Workers.**  
BOSS fills this critical blind spot by acting as a **browser-side sentinel**.

---

## 🛡 Features

- **Threat detection in SW**  
  - Suspicious JS patterns (`eval`, `document.cookie`, `new Function`)  
  - Malicious or blacklisted domains  
  - Abnormal cached entries (too large, injected code)  
  - SW runtime errors & unhandled promise rejections  

- **Page agent (boss.js)**  
  - Registers `boss-sw.js`  
  - Relays alerts from SW to backend  
  - Captures page-level errors/unhandled rejections  
  - Provides `BOSS.triggerScan()` API  

- **Reporting & integration**  
  - Logs to browser console (demo)  
  - Forwards findings to backend (`/api/boss/log`)  
  - Privacy-first (snippets truncated, hashes instead of raw data)  

---

## 🧩 Project structure


boss/
├─ index.html    # Demo page with simulate buttons
├─ boss.js       # Page agent
└─ boss-sw.js    # Service Worker scanner

`

---

## ▶ Quick start

1. Clone repo  
2. Serve locally (SWs need `http://localhost` or HTTPS):
   bash
   python -m http.server 8000
`

3. Open [http://localhost:8000](http://localhost:8000) in Chrome/Firefox
4. Open DevTools → Console
5. Test:

   * Click **Simulate malicious payload** in `index.html`
   * Run `fetch("https://malicious.com/fake.js")` in console
   * Observe alerts in console + logs sent to backend

---

## 📡 Backend contract

Findings are sent to `/api/boss/log` as JSON:

json
{
  "timestamp": "2025-09-26T12:00:00Z",
  "kind": "SUSPICIOUS_CACHE",
  "detail": "Suspicious cached entry",
  "url": "https://example.com/malicious.js",
  "severity": "high",
  "snippet": "eval(...)[truncated]",
  "bodyHash": "<sha256-base64>"
}


**Rust Rocket example handler:**

rust
#[derive(Debug, Deserialize)]
pub struct BossLog {
    pub timestamp: Option<String>,
    pub kind: String,
    pub detail: Option<String>,
    pub url: Option<String>,
    pub severity: Option<String>,
    pub snippet: Option<String>,
    pub bodyHash: Option<String>,
}

#[post("/api/boss/log", data = "<log>")]
async fn boss_log(log: Json<BossLog>) -> Status {
    println!("BOSS log received: {:?}", log.into_inner());
    Status::Accepted
}
```

---

## ⚠ Limitations

* No DOM access (cannot directly detect DOM-based XSS)
* Cannot read localStorage/sessionStorage contents from SW
* Opaque cross-origin responses (no-cors) cannot be inspected
* Service Workers can be suspended; scans are best-effort
* Regex-based detection may miss highly obfuscated payloads

Use boss.js (page agent) + backend correlation to fill these gaps.

---

## 🔮 Roadmap

* Rust backend with DB logging & signed remediation policies
* ML/anomaly-based detection across aggregated logs
* Config dashboard (sensitivity tuning, whitelists)
* Integration with SIEM/IR pipelines (Splunk, ELK)

---

## 👨‍💻 Contributing

PRs and issues are welcome! Ideas to improve:

* New detection rules
* Optimized scanning logic
* Privacy-preserving telemetry
* Dashboard & backend integrations

---

## 📜 License

MIT License © 2025 Ganesh Telore

---

⭐ If you like this project, *star the repo* — feedback and contributions are always welcome!