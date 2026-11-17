# 📧 Automated Email Dispatcher & Newsletter REST API

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.21-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![REST API](https://img.shields.io/badge/Architecture-RESTful%20API-6366F1?style=for-the-badge)](https://restfulapi.net/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An enterprise-grade **Automated Email Dispatcher & Newsletter REST API** engineered with **Node.js**, **Express.js**, and a responsive dark-mode **Tailwind CSS** marketing dashboard. Designed for SaaS platforms, content publishers, and digital agencies, the engine features secure subscriber list management, duplicate email prevention, broadcast campaign dispatching, and real-time delivery audit logging.

---

## 📋 Table of Contents
1. [System Overview & Business Value](#-system-overview--business-value)
2. [Core Features & Highlights](#-core-features--highlights)
3. [Tech Stack & Architecture](#-tech-stack--architecture)
4. [Project Folder Structure](#-project-folder-structure)
5. [Complete API Endpoints Reference](#-complete-api-endpoints-reference)
6. [Request & Response Payloads (JSON Examples)](#-request--response-payloads-json-examples)
7. [HTTP Status & Error Handling](#-http-status--error-handling)
8. [Local Installation & Testing](#-local-installation--testing)
9. [Production Scaling & Roadmap](#-production-scaling--roadmap)
10. [Author & Developer](#-author--developer)

---

## 🎯 System Overview & Business Value

Email marketing automation is essential for nurturing user engagement and driving recurring revenue. **MailPulse Engine (`email-newsletter-api`)** provides a robust backend REST API combined with an intuitive administrative operator console:

* **Secure Subscriber Collection:** Validates incoming email formats and enforces unique constraints (`409 Conflict`) to keep mailing lists clean and spam-free.
* **Mass Campaign Dispatching:** Instantly broadcasts announcements, newsletters, and digests to the entire active subscriber database with tracked recipient counts.
* **Complete Audit Trails:** Maintains immutable delivery logs recording campaign subjects, timestamps, and recipient volumes.

---

## 🌟 Core Features & Highlights

* **🛡️ Duplicate Prevention & Email Validation:** Intercepts invalid strings and duplicate addresses before database insertion.
* **📤 Broadcast Campaign Engine:** Dispatches targeted emails to all registered subscribers with a single REST request.
* **🎨 Modern Dark-Mode UI:** Responsive two-column dashboard styled with Tailwind CSS (`slate-950` palette) featuring live subscriber counts and campaign logs.
* **🧩 Modular Architecture:** Clean separation across routing controllers (`newsletterRoutes.js`), data store (`store.js`), and server bootstrap (`server.js`).

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Role & Responsibility |
| :--- | :--- | :--- |
| **Frontend UI** | HTML5, Vanilla JS (ES6+), Tailwind CSS | Subscription form, campaign broadcast form, and live tables |
| **Backend Runtime** | Node.js (v18+) | Non-blocking asynchronous server execution |
| **Web Framework** | Express.js (v4.21) | REST routing, middleware parsing, and static file delivery |
| **Configuration** | Dotenv & CORS | Environment variable binding and cross-origin resource sharing |

---

## 📂 Project Folder Structure

```text
email-newsletter-api/
├── public/
│   └── index.html               # Tailwind CSS newsletter dashboard & operator UI
├── src/
│   ├── routes/
│   │   └── newsletterRoutes.js  # REST controllers for subscriptions, removal & campaigns
│   └── data/
│       └── store.js             # In-memory database store for subscribers and campaign logs
├── server.js                    # Express server initialization & static middleware
├── package.json                 # Project dependencies and scripts manifest
├── .env                         # Environment configuration (PORT=5010)
├── .gitignore                   # Excludes node_modules and .env files
└── README.md                    # Comprehensive technical & API documentation
