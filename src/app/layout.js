// ✅ DO NOT put "use client" here — this must remain a server component
import React from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Technile IT Solutions',
  description: 'AI-powered software development company in India',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
