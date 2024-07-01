import React from "react";
import { Inter } from "next/font/google";
import { HeroSection } from "../components/childComps/HeroSection";
import { SertifikalarSection } from "../components/childComps/SertifikalarSection";
import { Yorumlar } from "../components/childComps/Testimonials";
import { EgitimSection } from "../components/childComps/EgitimSection";
import { DeneyimSection } from "../components/childComps/DeneyimSection";
import { ProjelerSection } from "../components/childComps/ProjelerSection";
import { TeknolojilerSection } from "../components/childComps/TeknolojilerSection";
import { BenKimim } from "../components/childComps/BenKimim";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <BenKimim />
      <EgitimSection />
      <DeneyimSection />
      <ProjelerSection />
      <TeknolojilerSection />
      <SertifikalarSection />
      <Yorumlar />
    </main>
  );
}
