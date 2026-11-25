/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { JourneySection } from './components/JourneySection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WordPressSection } from './components/WordPressSection';
import { CustomCodeSection } from './components/CustomCodeSection';
import { WorkflowSection } from './components/WorkflowSection';
import { AchievementsSection } from './components/AchievementsSection';
import { WhyWorkWithMeSection } from './components/WhyWorkWithMeSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-clip bg-[#100707] text-[#F5EDED]">
        <CustomCursor />
        <Navbar />
        <main>
          {/* Section 01: Luxury Hero */}
          <HeroSection />
          {/* Section 02: About Me */}
          <AboutSection />
          {/* Section 03: My Journey */}
          <JourneySection />
          {/* Section 04: My Technical Skills */}
          <SkillsSection />
          {/* Section 05: My Services */}
          <ServicesSection />
          {/* Section 06: Selected Projects */}
          <ProjectsSection />
          {/* Section 07: WordPress & Elementor */}
          <WordPressSection />
          {/* Section 08: Built From Scratch */}
          <CustomCodeSection />
          {/* Section 09: My Work Process */}
          <WorkflowSection />
          {/* Section 10: Experience & Stats */}
          <AchievementsSection />
          {/* Section 11: Why Choose Me */}
          <WhyWorkWithMeSection />
          {/* Section 12: Testimonials */}
          <TestimonialsSection />
          {/* Section 13: Contact */}
          <ContactSection />
        </main>
        {/* Section 14: Luxury Footer */}
        <FooterSection />
      </div>
    </MotionConfig>
  );
}
