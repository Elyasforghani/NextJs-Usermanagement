import Threebackground from "./components/Threebackground";
import "./globals.css";

export const metadata = {
  title: " User Management",
  description: "A modern user management application built with Next.js and MUI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="relative overflow-hidden bg-gradient-to-r from-slate-900/20 via-cyan-950/60 to-slate-900 text-4xl h-[100px] pb-1.5 capitalize flex justify-center items-center shadow-lg shadow-black/50 border-b border-cyan-500/10">

          <h1 className="relative z-10 text-center text-[20px] sm-3xl lg-4xl xl-5xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-cyan-300 drop-shadow-lg">
            Welcome,Be my guest and add your information
          </h1>
        </header>
        <main className="flex-1">
          <Threebackground />
          {children}
        </main>
      </body>
    </html>
  );
}