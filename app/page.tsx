import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <WhatWeDo />
      <WhoWeWorkWith />
      <Footer />
    </main>
  );
}
