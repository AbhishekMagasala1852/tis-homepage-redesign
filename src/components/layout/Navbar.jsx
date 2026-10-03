import { useState, useEffect } from "react";
import { nav, applyUrl } from "../../data/content";
import ThemeToggle from "../ui/ThemeToggle";
import LogoModal from "../ui/LogoModal";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar({
  theme,
  onToggle,
  onShowHistory,
  onShowWhy,
  onShowVision,
  onShowAwards,
  onShowPrincipal,
  onShowManagement,
  onShowTour,
  onShowScholarship,
  onShowFeeStructure,
  onShowFacilities,
  onShowFoodNutrition,
  onShowPastoralCare,
  onShowCurriculum,
  onShowPedagogy,
  onShowInternationalTieUps,
  onShowMandatoryDisclosure,
  onShowProminentPersonalities,
  onShowSportsAchievements,
  onShowNationalGames,
}) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [beyondOpen, setBeyondOpen] = useState(false);
  const [boardingOpen, setBoardingOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const closeAll = () => {
    setAboutOpen(false);
    setAdmissionOpen(false);
    setAcademicsOpen(false);
    setBeyondOpen(false);
    setBoardingOpen(false);
    setEventsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", closeAll);
    return () => window.removeEventListener("click", closeAll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const aboutItems = [
    { label: "Our History", handler: onShowHistory, target: "history" },
    { label: "Why Choose Us?", handler: onShowWhy, target: "why-choose-us" },
    { label: "Vision & Mission", handler: onShowVision, target: "vision-mission" },
    { label: "Awards & Achievements", handler: onShowAwards, target: "awards" },
    { label: "Headmaster's Profile", handler: onShowPrincipal, target: "principal" },
    { label: "Our Management", handler: onShowManagement, target: "management" },
    { label: "Virtual Tour", handler: onShowTour, target: "virtual-tour" },
  ];

  const admissionItems = [
    { label: "Scholarship Programmes", handler: onShowScholarship, target: "scholarship" },
    { label: "Fee Structure", handler: onShowFeeStructure, target: "fee-structure" },
  ];

  const academicsItems = [
    { label: "Curriculum", handler: onShowCurriculum, target: "curriculum" },
    { label: "Pedagogy", handler: onShowPedagogy, target: "pedagogy" },
    { label: "International Tie-Ups", handler: onShowInternationalTieUps, target: "international-tieups" },
  ];

  const beyondItems = [{ label: "Sports", target: "beyond" }];

  const boardingItems = [
    { label: "Facilities", handler: onShowFacilities, target: "facilities" },
    { label: "Food & Nutrition", handler: onShowFoodNutrition, target: "food-nutrition" },
    { label: "Pastoral Care", handler: onShowPastoralCare, target: "pastoral-care" },
  ];

  const eventsItems = [
    { label: "Prominent Personalities", handler: onShowProminentPersonalities, target: "prominent-personalities" },
    { label: "Sports Achievements", handler: onShowSportsAchievements, target: "sports-achievements" },
    { label: "38th National Games", handler: onShowNationalGames, target: "national-games" },
  ];

  const renderDropdown = (items, closeFn) => (
    <div
      className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-accent/20 p-2 shadow-xl z-50 backdrop-blur-lg"
      style={{ backgroundColor: "color-mix(in srgb, var(--bg) 75%, transparent)" }}
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={`#${item.target}`}
          onClick={(e) => {
            e.preventDefault();
            if (item.handler) item.handler();
            closeFn(false);
            setTimeout(() => {
              document.getElementById(item.target)?.scrollIntoView({ behavior: "smooth" });
            }, 250);
          }}
          className="block rounded-lg px-4 py-2 text-xs text-muted transition-colors hover:bg-accent/10 hover:text-accent"
        >
          {item.label}
        </a>
      ))}
    </div>
  );

  // Mobile: handle click on a dropdown group
  const handleMobileSubmenu = (key) => {
    setMobileSubmenu(mobileSubmenu === key ? null : key);
  };

  const handleMobileNav = (item) => {
    if (item.handler) item.handler();
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
    setTimeout(() => {
      document.getElementById(item.target)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const groups = [
    { key: "about", label: "About TIS", items: aboutItems },
    { key: "academics", label: "Academics", items: academicsItems },
    { key: "admission", label: "Admission", items: admissionItems },
    { key: "beyond", label: "Beyond Academics", items: beyondItems },
    { key: "boarding", label: "Boarding Life", items: boardingItems },
    { key: "events", label: "Events", items: eventsItems },
  ];

  return (
    <>
      {/* Admissions bar — transparent + blur */}
      <div
        className="border-b border-accent/20 text-center text-sm font-medium text-fg py-2 backdrop-blur-lg"
        style={{ backgroundColor: "color-mix(in srgb, var(--bg) 45%, transparent)" }}
      >
        <span className="mr-2">📞</span> ADMISSIONS HELPLINE NO. +91-9837983791
        <a
          href={applyUrl}
          className="ml-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-bg"
        >
          Enquire Now
        </a>
      </div>

      {/* Main header — more transparent */}
      <header
        className="sticky top-0 z-40 border-b border-accent/20 backdrop-blur-lg"
        style={{ backgroundColor: "color-mix(in srgb, var(--bg) 45%, transparent)" }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLogoOpen(true)}
              aria-label="View logo in full size"
              className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95"
            >
              <div className="h-12 w-12 rounded-full bg-white overflow-hidden border-2 border-accent/40 shadow-lg flex-shrink-0">
                <img src="/logo.png" alt="TIS Logo" className="h-full w-full object-contain p-1" />
              </div>
              <span className="font-display text-xl font-extrabold hidden sm:block">TIS</span>
            </button>
          </div>

          {/* Desktop menu */}
          <ul className="hidden lg:flex gap-6 text-xs font-medium uppercase tracking-wider">
            <li className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeAll();
                  setAboutOpen(!aboutOpen);
                }}
                className="flex items-center gap-1 text-muted hover:text-accent transition-colors uppercase"
              >
                About TIS
                <ChevronDown
                  size={14}
                  className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                />
              </button>
              {aboutOpen && renderDropdown(aboutItems, setAboutOpen)}
            </li>

            <li className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeAll();
                  setAcademicsOpen(!academicsOpen);
                }}
                className="flex items-center gap-1 text-muted hover:text-accent transition-colors uppercase"
              >
                Academics
                <ChevronDown
                  size={14}
                  className={`transition-transform ${academicsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {academicsOpen && renderDropdown(academicsItems, setAcademicsOpen)}
            </li>

            <li className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeAll();
                  setAdmissionOpen(!admissionOpen);
                }}
                className="flex items-center gap-1 text-muted hover:text-accent transition-colors uppercase"
              >
                Admission
                <ChevronDown
                  size={14}
                  className={`transition-transform ${admissionOpen ? "rotate-180" : ""}`}
                />
              </button>
              {admissionOpen && renderDropdown(admissionItems, setAdmissionOpen)}
            </li>

            <li className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeAll();
                  setBeyondOpen(!beyondOpen);
                }}
                className="flex items-center gap-1 text-muted hover:text-accent transition-colors uppercase"
              >
                Beyond Academics
                <ChevronDown
                  size={14}
                  className={`transition-transform ${beyondOpen ? "rotate-180" : ""}`}
                />
              </button>
              {beyondOpen && renderDropdown(beyondItems, setBeyondOpen)}
            </li>

            <li className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeAll();
                  setBoardingOpen(!boardingOpen);
                }}
                className="flex items-center gap-1 text-muted hover:text-accent transition-colors uppercase"
              >
                Boarding Life
                <ChevronDown
                  size={14}
                  className={`transition-transform ${boardingOpen ? "rotate-180" : ""}`}
                />
              </button>
              {boardingOpen && renderDropdown(boardingItems, setBoardingOpen)}
            </li>

            <li className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeAll();
                  setEventsOpen(!eventsOpen);
                }}
                className="flex items-center gap-1 text-muted hover:text-accent transition-colors uppercase"
              >
                Events
                <ChevronDown
                  size={14}
                  className={`transition-transform ${eventsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {eventsOpen && renderDropdown(eventsItems, setEventsOpen)}
            </li>

            {nav
              .filter(
                (n) =>
                  ![
                    "About TIS",
                    "Academics",
                    "Admission",
                    "Beyond Academics",
                    "Boarding Life",
                    "Events",
                  ].includes(n.label)
              )
              .map((n) => {
                if (n.label === "Mandatory Disclosure") {
                  return (
                    <li key={n.href}>
                      <a
                        href="#mandatory-disclosure"
                        onClick={(e) => {
                          e.preventDefault();
                          onShowMandatoryDisclosure();
                          setTimeout(() => {
                            document
                              .getElementById("mandatory-disclosure")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }, 250);
                        }}
                        className="text-muted transition-colors hover:text-accent"
                      >
                        {n.label}
                      </a>
                    </li>
                  );
                }
                if (n.external) {
                  return (
                    <li key={n.href}>
                      <a
                        href={n.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted transition-colors hover:text-accent"
                      >
                        {n.label}
                      </a>
                    </li>
                  );
                }
                if (n.label === "Quick Links") {
                  return (
                    <li key={n.href}>
                      <a
                        href="#enquire"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById("enquire")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-muted transition-colors hover:text-accent"
                      >
                        {n.label}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      className="text-muted transition-colors hover:text-accent"
                    >
                      {n.label}
                    </a>
                  </li>
                );
              })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={applyUrl}
              className="hidden sm:block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-bg"
            >
              Apply Now
            </a>
            <ThemeToggle theme={theme} onToggle={onToggle} />
            {/* Hamburger — only on mobile/tablet */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-accent/30 text-fg transition-colors hover:bg-accent hover:text-bg"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden border-t border-accent/20 backdrop-blur-lg max-h-[80vh] overflow-y-auto"
            style={{ backgroundColor: "color-mix(in srgb, var(--bg) 75%, transparent)" }}
          >
            <ul className="mx-auto max-w-7xl px-5 py-4 space-y-1">
              {groups.map((g) => (
                <li key={g.key} className="border-b border-accent/10">
                  <button
                    onClick={() => handleMobileSubmenu(g.key)}
                    className="flex w-full items-center justify-between px-2 py-3 text-sm font-medium uppercase tracking-wider text-muted hover:text-accent"
                  >
                    {g.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        mobileSubmenu === g.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileSubmenu === g.key && (
                    <div className="pb-2 pl-4">
                      {g.items.map((item) => (
                        <a
                          key={item.label}
                          href={`#${item.target}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleMobileNav(item);
                          }}
                          className="block rounded-lg px-3 py-2 text-xs text-muted transition-colors hover:bg-accent/10 hover:text-accent"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}

              {nav
                .filter(
                  (n) =>
                    ![
                      "About TIS",
                      "Academics",
                      "Admission",
                      "Beyond Academics",
                      "Boarding Life",
                      "Events",
                    ].includes(n.label)
                )
                .map((n) => {
                  if (n.label === "Mandatory Disclosure") {
                    return (
                      <li key={n.href} className="border-b border-accent/10">
                        <a
                          href="#mandatory-disclosure"
                          onClick={(e) => {
                            e.preventDefault();
                            onShowMandatoryDisclosure();
                            setMobileMenuOpen(false);
                            setTimeout(() => {
                              document
                                .getElementById("mandatory-disclosure")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 300);
                          }}
                          className="block px-2 py-3 text-sm font-medium uppercase tracking-wider text-muted hover:text-accent"
                        >
                          {n.label}
                        </a>
                      </li>
                    );
                  }
                  if (n.external) {
                    return (
                      <li key={n.href} className="border-b border-accent/10">
                        <a
                          href={n.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-2 py-3 text-sm font-medium uppercase tracking-wider text-muted hover:text-accent"
                        >
                          {n.label}
                        </a>
                      </li>
                    );
                  }
                  if (n.label === "Quick Links") {
                    return (
                      <li key={n.href} className="border-b border-accent/10">
                        <a
                          href="#enquire"
                          onClick={(e) => {
                            e.preventDefault();
                            setMobileMenuOpen(false);
                            setTimeout(() => {
                              document
                                .getElementById("enquire")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 300);
                          }}
                          className="block px-2 py-3 text-sm font-medium uppercase tracking-wider text-muted hover:text-accent"
                        >
                          {n.label}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={n.href} className="border-b border-accent/10">
                      <a
                        href={n.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-2 py-3 text-sm font-medium uppercase tracking-wider text-muted hover:text-accent"
                      >
                        {n.label}
                      </a>
                    </li>
                  );
                })}

              <li className="pt-4">
                <a
                  href={applyUrl}
                  className="block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-bg"
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <LogoModal isOpen={logoOpen} onClose={() => setLogoOpen(false)} />
    </>
  );
}
