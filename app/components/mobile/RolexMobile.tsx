"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Heart,
  Brain,
  Microscope,
  Shield,
  Zap,
  Award,
  Stethoscope,
  ChevronDown,
  Menu,
  X,
  Smartphone,
  ArrowUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function MobileMedicalScrollVertical() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sectionsData = [
    {
      id: 1,
      title: "Cardiac Care",
      subtitle: "Heart Monitoring",
      description:
        "Portable ECG monitors with AI-powered arrhythmia detection for accurate cardiac diagnostics anytime, anywhere.",
      icon: Heart,
      color: "bg-red-500",
      gradient: "from-red-500 to-pink-600",
      features: ["AI Analysis", "24/7 Monitoring", "Portable Design"],
      stats: "99.7% Accuracy",
      bgImage:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Neurology",
      subtitle: "Brain Imaging",
      description:
        "Mobile EEG headsets for non-invasive brain activity monitoring and neurological disorder diagnosis.",
      icon: Brain,
      color: "bg-purple-500",
      gradient: "from-purple-500 to-indigo-600",
      features: ["Wireless EEG", "Real-time Data", "Cloud Sync"],
      stats: "98.9% Precision",
      bgImage:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Diagnostics",
      subtitle: "Lab Automation",
      description:
        "Compact automated systems for rapid diagnostic results with robotic precision.",
      icon: Microscope,
      color: "bg-cyan-500",
      gradient: "from-cyan-500 to-teal-600",
      features: ["Auto-Analyzer", "Quick Results", "Compact Size"],
      stats: "60% Faster",
      bgImage:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Sterilization",
      subtitle: "Infection Control",
      description:
        "Portable UV-C sterilization devices ensuring maximum safety in medical environments.",
      icon: Shield,
      color: "bg-emerald-500",
      gradient: "from-emerald-500 to-green-600",
      features: ["UV-C Tech", "5min Cycle", "Portable"],
      stats: "99.999% Effective",
      bgImage:
        "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Emergency",
      subtitle: "Life Support",
      description:
        "Portable defibrillators and emergency ventilators for critical care situations.",
      icon: Zap,
      color: "bg-amber-500",
      gradient: "from-amber-500 to-orange-600",
      features: ["AED Ready", "30s Setup", "IP67 Rated"],
      stats: "Save Lives",
      bgImage:
        "https://images.unsplash.com/photo-1516549655669-df6654e435f6?w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Awards",
      subtitle: "Recognition",
      description:
        "Award-winning medical technology trusted by healthcare professionals globally.",
      icon: Award,
      color: "bg-blue-500",
      gradient: "from-blue-500 to-violet-600",
      features: ["FDA Approved", "CE Marked", "ISO Certified"],
      stats: "100+ Awards",
      bgImage:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop",
    },
  ];

  const goToSection = (index: number) => {
    if (index < 0 || index >= sectionsData.length) return;

    const section = sectionsRef.current[index];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(index);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      // تشخیص نمایش دکمه بازگشت به بالا
      setShowScrollTop(window.scrollY > 500);

      // تشخیص بخش فعلی
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const sections = sectionsRef.current;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (currentSection !== i) {
              setCurrentSection(i);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // انیمیشن پارالاکس برای تصاویر پس‌زمینه
      sectionsData.forEach((_, index) => {
        const section = sectionsRef.current[index];
        if (!section) return;

        const bgImage = section.querySelector(".bg-image-parallax");
        if (bgImage) {
          gsap.to(bgImage, {
            y: "-20%",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });

      // انیمیشن ورود محتوا برای هر بخش
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;

        // انیمیشن ورود کارت محتوا
        gsap.fromTo(
          section.querySelector(".content-card"),
          {
            y: 80,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // انیمیشن آیکون
        const icon = section.querySelector(".section-icon");
        if (icon) {
          gsap.fromTo(
            icon,
            {
              rotation: -45,
              scale: 0.8,
              opacity: 0,
            },
            {
              rotation: 0,
              scale: 1,
              opacity: 1,
              duration: 0.8,
              delay: 0.2,
              ease: "elastic.out(1, 0.5)",
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                end: "top 45%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // انیمیشن ویژگی‌ها (stagger)
        const features = section.querySelectorAll(".feature-item");
        features.forEach((feature, i) => {
          gsap.fromTo(
            feature,
            {
              x: -30,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              delay: 0.3 + i * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 65%",
                end: "top 35%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        // انیمیشن آمار
        const stats = section.querySelector(".stats-value");
        if (stats) {
          gsap.fromTo(
            stats,
            {
              scale: 0.5,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              delay: 0.5,
              ease: "bounce.out",
              scrollTrigger: {
                trigger: section,
                start: "top 60%",
                end: "top 30%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // انیمیشن برای نقاط راهنما
      const guideDots = gsap.utils.toArray(".guide-dot");
      guideDots.forEach((dot: any, index) => {
        gsap.to(dot, {
          scale: 1.2,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.3,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-black">
      {/* هدر موبایل */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-black/90 backdrop-blur-lg border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-blue-400" />
            <span className="text-white font-bold text-lg">MedTech</span>
            <span className="text-white/60 text-sm">Vertical</span>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors active:scale-95"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </header>

      {/* منو موبایل */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg pt-16 animate-fadeIn">
          <div className="p-4">
            <div className="text-white/60 text-sm mb-4 px-2">
              JUMP TO SECTION
            </div>
            <div className="space-y-2">
              {sectionsData.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => {
                    goToSection(index);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full p-3 rounded-xl text-left transition-all duration-200 ${
                    currentSection === index
                      ? "bg-gradient-to-r from-white/15 to-white/5 text-white"
                      : "hover:bg-white/5 text-white/70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${section.color} bg-opacity-20`}
                    >
                      <section.icon
                        className="w-5 h-5"
                        style={{ color: section.color.replace("bg-", "text-") }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-base">
                        {section.title}
                      </div>
                      <div className="text-xs opacity-60">
                        {section.subtitle}
                      </div>
                    </div>
                    {currentSection === index && (
                      <div className="w-2 h-2 rounded-full bg-blue-400 guide-dot" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-center gap-8">
                <button className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors active:scale-95">
                  <Smartphone className="w-5 h-5" />
                  <span className="text-xs">Mobile View</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors active:scale-95">
                  <span className="text-xs">Scroll</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* راهنمای اسکرول */}
      <div className="fixed top-16 left-0 right-0 z-30 p-4 flex justify-center">
        <div className="flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full border border-white/10">
          <ChevronDown className="w-4 h-4 text-white/60 animate-bounce" />
          <span className="text-white/80 text-sm">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 text-white/60 animate-bounce" />
        </div>
      </div>

      {/* بخش‌های عمودی */}
      <div className="relative">
        {sectionsData.map((section, index) => {
          const Icon = section.icon;
          const isEven = index % 2 === 0;

          return (
            <section
              key={section.id}
              ref={(el) => {
               if (el) sectionsRef.current[index] = el as HTMLDivElement;
              }}
              className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden"
            >
              {/* تصویر پس‌زمینه با پارالاکس */}
              <div
                className="bg-image-parallax absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${section.bgImage})` }}
              />

              {/* گرادیانت روی تصویر */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${
                  isEven
                    ? "from-black via-black/70 to-black"
                    : "from-black/90 via-black/60 to-black"
                }`}
              />

              {/* محتوای اصلی */}
              <div className="content-card relative z-10 w-full max-w-md">
                {/* آیکون بخش */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`section-icon p-4 rounded-3xl ${section.color} bg-opacity-20 border border-white/10`}
                  >
                    <Icon
                      className="w-12 h-12"
                      style={{ color: section.color.replace("bg-", "text-") }}
                    />
                  </div>
                </div>

                {/* عنوان و زیرعنوان */}
                <div className="text-center mb-6">
                  <div className="text-white/60 text-sm tracking-widest uppercase mb-2">
                    {section.subtitle}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {section.title}
                  </h2>
                  <div
                    className="w-16 h-1 rounded-full mx-auto mb-4"
                    style={{
                      background: `linear-gradient(90deg, ${section.color.replace(
                        "bg-",
                        ""
                      )}, transparent)`,
                    }}
                  />
                </div>

                {/* توضیحات */}
                <p className="text-white/80 text-base leading-relaxed text-center mb-8 px-4">
                  {section.description}
                </p>

                {/* ویژگی‌ها */}
                <div className="mb-8">
                  <div className="text-white/60 text-sm text-center mb-4">
                    KEY FEATURES
                  </div>
                  <div className="space-y-3">
                    {section.features.map((feature, i) => (
                      <div
                        key={i}
                        className="feature-item flex items-center justify-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${section.color}`}
                        />
                        <span className="text-white/90 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* آمار */}
                <div className="text-center mb-8">
                  <div className="text-white/60 text-sm mb-2">
                    PERFORMANCE METRIC
                  </div>
                  <div
                    className={`stats-value text-4xl font-bold ${section.color.replace(
                      "bg-",
                      "text-"
                    )}`}
                  >
                    {section.stats}
                  </div>
                </div>

                {/* دکمه CTA */}
                <div className="flex justify-center">
                  <button className="px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 active:scale-95">
                    <span className="text-white font-medium text-sm">
                      Learn More
                    </span>
                  </button>
                </div>

                {/* شماره بخش */}
                <div className="absolute bottom-4 right-4">
                  <div className="text-white/10 text-5xl font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* خط جداکننده (برای بخش‌های غیرآخرین) */}
                {index < sectionsData.length - 1 && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                    <ChevronDown className="w-6 h-6 text-white/20 animate-pulse" />
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* ناوبری سمت راست */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-3">
        {sectionsData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            className={`transition-all duration-300 ${
              currentSection === index
                ? "w-3 h-12 rounded-full bg-white"
                : "w-2 h-8 rounded-full bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* نوار پیشرفت */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden md:block">
        <div className="relative h-48 w-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-500"
            style={{
              height: `${((currentSection + 1) / sectionsData.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* دکمه بازگشت به بالا */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-black/70 backdrop-blur-md border border-white/10 hover:bg-black/80 transition-all duration-300 active:scale-95"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      )}

      {/* ناوبری پایین برای موبایل */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-black/90 backdrop-blur-lg border-t border-white/10 md:hidden">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => goToSection(currentSection - 1)}
              disabled={currentSection === 0}
              className={`p-3 rounded-full flex items-center justify-center transition-all ${
                currentSection === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "bg-white/10 hover:bg-white/20 active:scale-95"
              }`}
            >
              <ChevronDown className="w-5 h-5 text-white rotate-90" />
            </button>

            <div className="text-center">
              <div className="text-white text-sm mb-1 font-medium">
                {currentSection + 1} / {sectionsData.length}
              </div>
              <div className="text-white/60 text-xs">
                {sectionsData[currentSection]?.title}
              </div>
            </div>

            <button
              onClick={() => goToSection(currentSection + 1)}
              disabled={currentSection === sectionsData.length - 1}
              className={`p-3 rounded-full flex items-center justify-center transition-all ${
                currentSection === sectionsData.length - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "bg-white/10 hover:bg-white/20 active:scale-95"
              }`}
            >
              <ChevronDown className="w-5 h-5 text-white -rotate-90" />
            </button>
          </div>

          {/* نقاط ناوبری */}
          <div className="flex items-center justify-center gap-2">
            {sectionsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSection(index)}
                className={`transition-all duration-300 active:scale-125 ${
                  currentSection === index
                    ? "w-3 h-3 bg-white"
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                } rounded-full`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        /* بهبود عملکرد لمسی */
        * {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
        }

        /* اسکرول بار مخفی */
        ::-webkit-scrollbar {
          display: none;
        }

        /* انیمیشن ورود نرم */
        section {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
