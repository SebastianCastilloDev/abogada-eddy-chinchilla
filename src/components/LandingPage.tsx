"use client";

import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import ServicesSection from "./ServicesSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";
import { LAWYER } from "./lawyerData";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer name={LAWYER.name} />
      <WhatsAppFloatingButton />
    </div>
  );
}