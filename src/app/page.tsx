import Hero37 from '@/components/originkit/hero-37';
import { AboutSection } from '@/components/sections/about-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <Hero37 />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
