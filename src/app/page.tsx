import Hero from '@/app/components/Hero';
import AboutMe from '@/app/components/AboutMe';
import MagnaOpera from '@/app/components/MagnaOpera';
import ContactSocials from '@/app/components/ContactSocials';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <MagnaOpera />
      <ContactSocials />
      {/* Footer can be added here later */}
    </main>
  );
}
