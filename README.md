# 🚀 LeadGen Pro | High-Conversion Consulting Platform

**LeadGen Pro** is a production-ready, business-first platform built with **Next.js 14+**, designed specifically for local service providers and consultants. It prioritizes speed, SEO, and lead capture.

## 💎 Business Value
* **Performance:** 100/100 Lighthouse scores for maximum SEO ranking.
* **Lead Capture:** Custom API-integrated contact forms and automated booking.
* **Admin Access:** Private dashboard for business owners to manage inbound leads.
* **Responsive:** Optimized for mobile users (where 60%+ of local searches happen).

## 🛠️ The Tech Stack
| Tech | Why it was chosen |
| :--- | :--- |
| **Next.js** | Used Server Components for SEO and Client Components for interactivity. |
| **Tailwind CSS** | Ensured consistent branding and rapid, lightweight styling. |
| **TypeScript** | Catching bugs during development to ensure 99.9% uptime. |
| **GitHub Actions** | Automated CI/CD to prevent broken code from reaching production. |

---

## 🏗️ Technical Highlights

### ⚡ Incremental Static Regeneration (ISR)
The services page uses ISR, allowing the site to be statically served for near-instant load times, while automatically updating content in the background when data changes.

### 🛡️ Fail-Safe Deployment
Implemented a GitHub Actions pipeline that automatically lints and builds the project on every push, ensuring only "healthy" code is ever deployed.

### ⏳ Perceived Performance
Integrated Skeleton Screens and CSS fade-in animations to eliminate layout shift and keep users engaged during data fetching.