import { useState } from "react";
import { MotionConfig } from "framer-motion";
import useTheme from "./hooks/useTheme";
import ScrollProgress from "./components/animation/ScrollProgress";
import ScrollBackground from "./components/animation/ScrollBackground";
import CustomCursor from "./components/animation/CustomCursor";
import Marquee from "./components/animation/Marquee";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Rankings from "./components/sections/Rankings";
import Sports from "./components/sections/Sports";
import Personalities from "./components/sections/Personalities";
import Parents from "./components/sections/Parents";
import Enquiry from "./components/sections/Enquiry";
import History from "./components/sections/History";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import {
  VisionMission,
  Awards,
  Principal,
  Management,
  VirtualTour,
  Scholarship,
  FeeStructure,
  Facilities,
  FoodNutrition,
  PastoralCare,
  Curriculum,
  Pedagogy,
  InternationalTieUps,
  MandatoryDisclosure,
  ProminentPersonalities,
  SportsAchievements,
  NationalGames,
} from "./components/sections/AboutSections";

export default function App() {
  const { theme, toggle } = useTheme();
  const [activeSection, setActiveSection] = useState(null);

  const show = (name) => setActiveSection(name);
  const close = () => setActiveSection(null);

  return (
    <MotionConfig reducedMotion="user">
      <ScrollBackground />
      <ScrollProgress />
      <CustomCursor />
      <Navbar
        theme={theme}
        onToggle={toggle}
        onShowHistory={() => show("history")}
        onShowWhy={() => show("why")}
        onShowVision={() => show("vision")}
        onShowAwards={() => show("awards")}
        onShowPrincipal={() => show("principal")}
        onShowManagement={() => show("management")}
        onShowTour={() => show("tour")}
        onShowScholarship={() => show("scholarship")}
        onShowFeeStructure={() => show("fee")}
        onShowFacilities={() => show("facilities")}
        onShowFoodNutrition={() => show("food")}
        onShowPastoralCare={() => show("pastoral")}
        onShowCurriculum={() => show("curriculum")}
        onShowPedagogy={() => show("pedagogy")}
        onShowInternationalTieUps={() => show("international")}
        onShowMandatoryDisclosure={() => show("disclosure")}
        onShowProminentPersonalities={() => show("personalities")}
        onShowSportsAchievements={() => show("sports-achievements")}
        onShowNationalGames={() => show("national-games")}
      />
      <main>
        <Hero />
        <Marquee />

        {activeSection === "history" && <History onClose={close} />}
        {activeSection === "why" && <WhyChooseUs onClose={close} />}
        {activeSection === "vision" && <VisionMission onClose={close} />}
        {activeSection === "awards" && <Awards onClose={close} />}
        {activeSection === "principal" && <Principal onClose={close} />}
        {activeSection === "management" && <Management onClose={close} />}
        {activeSection === "tour" && <VirtualTour onClose={close} />}
        {activeSection === "scholarship" && <Scholarship onClose={close} />}
        {activeSection === "fee" && <FeeStructure onClose={close} />}
        {activeSection === "facilities" && <Facilities onClose={close} />}
        {activeSection === "food" && <FoodNutrition onClose={close} />}
        {activeSection === "pastoral" && <PastoralCare onClose={close} />}
        {activeSection === "curriculum" && <Curriculum onClose={close} />}
        {activeSection === "pedagogy" && <Pedagogy onClose={close} />}
        {activeSection === "international" && <InternationalTieUps onClose={close} />}
        {activeSection === "disclosure" && <MandatoryDisclosure onClose={close} />}
        {activeSection === "personalities" && <ProminentPersonalities onClose={close} />}
        {activeSection === "sports-achievements" && <SportsAchievements onClose={close} />}
        {activeSection === "national-games" && <NationalGames onClose={close} />}

        <Stats />
        <Rankings />
        <Sports />
        <Personalities />
        <Parents />
        <Enquiry />
      </main>
      <Footer />
    </MotionConfig>
  );
}