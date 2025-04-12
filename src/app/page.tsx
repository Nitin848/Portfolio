import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';
import VideoSection from '@/components/sections/VideoSection';
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <VideoSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
