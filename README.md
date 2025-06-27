Hiring Insights Dashboard

A modern, enterprise-grade hiring management dashboard built with Next.js 14, TypeScript, and React Query. It provides an intuitive interface for managing candidates, jobs, interviews, and hiring analytics.

Status: Production Ready

Next.js 14.1.0 | TypeScript 5.0 | React Query 5.17.15



Features
•	📊 Dashboard Analytics – Real-time hiring insights with interactive charts
•	📱 Responsive Design – Fully mobile-optimized layout


Tech Stack
• Next.js 14 + React 18 + TypeScript 5
• Tailwind CSS + shadcn/ui + radix ui
• Chart.js, Recharts, React Query, React Hook Form


Getting Started
1. Clone the repo
2. Install dependencies |  npm install  or npm i -f
3. Set up the environment file
4. Run the dev server

```bash
git clone https://github.com/MuhammadAkil/feller.git
cd feller
npm install
cp .env.example .env.local
npm run dev
```
Visit http://localhost:3000
Testing
Run Tests
```bash
npm run test           # Run all tests
npm run test:watch     # Watch mode
npm run test:coverage  # With coverage report
```
Test Summary (as of submission):
 
Project Structure
├── app/
├── components/
├── constant/
├── data/
├── hooks/
├── lib/
├── services/api/
├── types/
├── __tests__/

Build & Deploy
Build Commands
```bash
npm run build
npm run start
```
Deployment via Vercel is recommended. Connect the GitHub repo and auto-deploy on push.
License

This project is licensed under the MIT License.

Developer Note
This dashboard was built with clean code, component reusability, and testable architecture in mind. All test cases have passed successfully with coverage reports provided.
