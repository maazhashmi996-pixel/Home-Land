import BlogSection from "@/Components/Sections/BlogSection";
import Hero from "@/Components/Sections/hero";
import PropertySection from "@/Components/Sections/PropertySection";
import WhyChooseUs from "@/Components/Sections/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <PropertySection />
      <WhyChooseUs />
      <BlogSection />
    </div>
  );
}
