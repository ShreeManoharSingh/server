import Hero from "@/components/hero/hero";
import Properties from "@/components/screens/properties/properties";
import Testimonials from "@/components/screens/properties/testimonials";
import Team from "@/components/screens/properties/team";


export default function HomePage() {
  return (
    <main>
      <Hero
        image="https://images.unsplash.com/photo-1501183638710-841dd1904471"
        title="Uday Real Estate Developers"
        subtitle="Building luxury lifestyles with trust, quality & innovation"
      />
      <Properties />
      <Testimonials />
      <Team />
    </main>
  );
}