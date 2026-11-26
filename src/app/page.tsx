import Hero from "@/components/Hero";
import { CTASection, ExperienceSection, FeaturedDishes, GalleryPreview, HoursLocation, ReviewsSection } from "@/components/home";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <FeaturedDishes />
      <ExperienceSection />
      <ReviewsSection />
      <GalleryPreview />
      <HoursLocation />
      <CTASection />
    </main>
  );
}
