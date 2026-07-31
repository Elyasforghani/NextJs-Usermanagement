# User Management App

A modern, visually stunning user management application built with **Next.js**, **Material UI**, **Framer Motion**, and **Three.js**. Features a dark glassmorphism UI with animated 3D background effects.

🔗 **Live Demo:** [https://next-js-usermanagement-dtaa.vercel.app/](https://next-js-usermanagement-dtaa.vercel.app/)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔍 **Live Search** | Search users by first name with real-time filtering |
| ➕ **Add Users** | Add new users via a clean form with validation |
| 🌌 **3D Background** | Animated starfield and floating particles using Three.js |
| 🎨 **Glassmorphism UI** | Frosted glass cards with cyan glow borders |
| ✨ **Framer Motion** | Smooth stagger animations and hover effects |
| 📱 **Responsive Design** | Fully responsive across all screen sizes |
| 🔗 **Social Links** | Interactive footer with GitHub, LinkedIn, and Email |

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + [Material UI v6](https://mui.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Icons:** [Material Icons](https://mui.com/material-ui/material-icons/)
- **API:** [MockAPI](https://mockapi.io/) (RESTful backend)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```
my-app/
├── app/
│   ├── components/
│   │   ├── Footer.jsx          # Animated footer with social links
│   │   ├── FriendSearch.jsx    # Search component with live filtering
│   │   └── ThreeJsBackground.jsx # 3D starfield background
│   ├── globals.css             # Tailwind v4 + custom styles
│   ├── layout.jsx              # Root layout with header
│   └── page.jsx                # Main page with form + search
├── public/
│   └── profile.jpg             # Avatar image
├── package.json
└── next.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Elyasforghani/nextjs-usermanagement.git
cd nextjs-usermanagement/my-app

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| **Background** | `#0a0f1a` | Page background |
| **Card BG** | `rgba(15, 23, 42, 0.7)` | Glassmorphism cards |
| **Primary** | `#38bdf8` | Cyan accent, borders, glows |
| **Secondary** | `#f87171` | Red accent, hearts, errors |
| **Text** | `#e2e8f0` | Primary text |
| **Muted** | `rgba(148, 163, 184, 0.8)` | Secondary text |
| **Border** | `rgba(56, 189, 248, 0.15)` | Subtle cyan borders |

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `https://6a3459d98248ee962fa55807.mockapi.io/project` | Fetch all users |
| `GET` | `?Firstname={query}` | Search users by name |
| `POST` | `/project` | Add new user |

---

## 📸 Screenshots

> *Add screenshots here*

---

## 🧑‍💻 Author

**Elyas Forghani**

- 🐙 [GitHub](https://github.com/Elyasforghani)
- 💼 [LinkedIn](https://www.linkedin.com/in/alireza-forghani-b4746b263/)
- 📧 [Email](mailto:elyasfgidev@example.com)
- 📧 [website](https://www.elyasforghani.com/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by Elyas Forghani
</p>
