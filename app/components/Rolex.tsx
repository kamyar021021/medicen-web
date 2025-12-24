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
  Activity,
  Syringe,
  Thermometer,
  Pill,
  Eye,
} from "lucide-react";

import RolexMobile from "./mobile/RolexMobile";

gsap.registerPlugin(ScrollTrigger);

export default function MedicalHorizonScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const horizontalContainerRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const sectionsData = [
    {
      title: "CARDIAC CARE",
      subtitle: "Heart Monitoring Systems",
      description:
        "Advanced ECG and Holter monitoring devices with AI-powered arrhythmia detection for precise cardiac diagnostics.",
      icon: Heart,
      color: "#ef4444",
      gradient: "linear-gradient(135deg, #ef4444 0%, #7c2d12 100%)",
      products: [
        "Portable ECG Monitor",
        "Holter 24/7 System",
        "Cardiac Event Recorder",
      ],
      stats: { accuracy: "99.7%", speed: "Real-time", coverage: "Global" },
    },
    {
      title: "NEUROLOGY",
      subtitle: "Brain Imaging Tech",
      description:
        "High-resolution EEG and fNIRS systems for non-invasive brain activity monitoring and neurological disorder diagnosis.",
      icon: Brain,
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #4c1d95 100%)",
      products: [
        "EEG Headset Pro",
        "fNIRS Imaging System",
        "Neurofeedback Device",
      ],
      stats: {
        accuracy: "98.9%",
        speed: "5ms Latency",
        coverage: "75 Countries",
      },
    },
    {
      title: "DIAGNOSTICS",
      subtitle: "Lab Automation",
      description:
        "Fully automated laboratory systems with robotic sample handling and AI analysis for rapid diagnostic results.",
      icon: Microscope,
      color: "#06b6d4",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)",
      products: ["Auto-Analyzer X1", "Sample Processor", "AI Diagnostic Suite"],
      stats: { accuracy: "99.99%", speed: "60% Faster", coverage: "10k+ Labs" },
    },
    {
      title: "STERILIZATION",
      subtitle: "Infection Control",
      description:
        "Advanced autoclaves and UV-C sterilization systems ensuring maximum safety in surgical environments.",
      icon: Shield,
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #065f46 100%)",
      products: ["UV-C Sterilizer", "Autoclave System", "Portable Sterilizer"],
      stats: {
        accuracy: "99.999%",
        speed: "5min Cycle",
        coverage: "ISO Certified",
      },
    },
    {
      title: "EMERGENCY",
      subtitle: "Life Support",
      description:
        "Portable defibrillators and emergency ventilators designed for rapid deployment in critical situations.",
      icon: Zap,
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #92400e 100%)",
      products: [
        "AED Defibrillator",
        "Portable Ventilator",
        "Emergency Monitor",
      ],
      stats: { accuracy: "99.5%", speed: "30s Setup", coverage: "IP67 Rated" },
    },
    {
      title: "RECOGNITION",
      subtitle: "Award Winning",
      description:
        "Industry-recognized medical technology trusted by healthcare professionals worldwide for excellence.",
      icon: Award,
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
      products: ["FDA Approved", "CE Marked", "ISO 13485"],
      stats: { accuracy: "100+ Awards", speed: "30 Years", coverage: "Global" },
    },
  ];

  const floatingIcons = [
    { icon: Stethoscope, delay: 0, size: 24 },
    { icon: Activity, delay: 0.5, size: 20 },
    { icon: Syringe, delay: 1, size: 22 },
    { icon: Thermometer, delay: 1.5, size: 26 },
    { icon: Pill, delay: 2, size: 18 },
    { icon: Eye, delay: 2.5, size: 24 },
  ];

  useEffect(() => {
    if (!containerRef.current || !horizontalContainerRef.current) return;

    const ctx = gsap.context(() => {
      // تنظیمات اولیه برای افکت افقی
      const sections = slidesRef.current;
      const container = horizontalContainerRef.current;
      const totalWidth = sections.length * 100; // 100vw برای هر بخش

      // ایجاد افکت اسکرول افقی
      gsap.to(container, {
        x: () => -((sections.length - 1) * window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => "+=" + sections.length * window.innerWidth,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            setProgress(self.progress);
            const activeIndex = Math.floor(self.progress * sections.length);
            setActiveSection(activeIndex);
          },
        },
      });

      // انیمیشن‌های سه‌بعدی برای کارت‌ها
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // چرخش سه‌بعدی کارت
        gsap.to(card, {
          rotationY: 10,
          rotationX: -5,
          scale: 1.05,
          scrollTrigger: {
            trigger: card,
            start: "left center",
            end: "right center",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        });

        // انیمیشن ظهور محتوا
        const content = contentRefs.current[index];
        if (content) {
          gsap.fromTo(
            content.children,
            {
              y: 50,
              opacity: 0,
              scale: 0.8,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              stagger: 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "left 70%",
                end: "left 30%",
                scrub: 1,
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // افکت مورفینگ برای شکل‌های پس‌زمینه
      const shapes = gsap.utils.toArray(".morph-shape");
      shapes.forEach((shape: any, index) => {
        gsap.to(shape, {
          morphSVG: {
            shape: `M0,0 Q${50 + index * 10},${
              20 + index * 15
            } 100,0 T200,0 T300,${100 - index * 10} T400,0 T500,${
              50 + index * 5
            } T600,0`,
            type: "rotational",
          },
          scrollTrigger: {
            trigger: shape,
            start: "left center",
            end: "right center",
            scrub: true,
          },
        });
      });

      // افکت پارالاکس برای آیکون‌های شناور
      floatingIcons.forEach((icon, index) => {
        const iconElements = gsap.utils.toArray(`.floating-icon-${index}`);
        iconElements.forEach((el: any) => {
          gsap.to(el, {
            y: "-100vh",
            rotation: 360,
            duration: 20 + index * 2,
            repeat: -1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.5,
            },
          });
        });
      });

      // افکت موجی برای خطوط پس‌زمینه
      const waveLines = gsap.utils.toArray(".wave-line");
      waveLines.forEach((line: any, index) => {
        gsap.to(line, {
          attr: {
            d: `M0,${100 + index * 20} Q50,${80 + index * 20} 100,${
              120 + index * 20
            } T200,${100 + index * 20} T300,${130 + index * 20} T400,${
              90 + index * 20
            } T500,${110 + index * 20} T600,${100 + index * 20}`,
          },
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // انیمیشن برای نوار پیشرفت
      gsap.to(".progress-fill", {
        scaleX: progress,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // افکت نور متحرک
      const lightRay = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
      });

      lightRay
        .to(".light-ray", {
          x: "100vw",
          duration: 3,
          ease: "power2.inOut",
        })
        .to(".light-ray", {
          x: "-100vw",
          duration: 3,
          ease: "power2.inOut",
          delay: 1,
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* استایل‌های سفارشی */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes morph {
          0%,
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }

        /* استایل اسکرول بار مخفی */
        ::-webkit-scrollbar {
          display: none;
        }

        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* صفحه اصلی */}
      <section
        ref={containerRef}
        className="hidden md:block relative h-screen w-screen overflow-hidden bg-black"
      >
        {/* افکت نور متحرک */}
        <div className="light-ray absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-20 z-0 pointer-events-none" />

        {/* آیکون‌های شناور */}
        {floatingIcons.map((item, index) => {
          const Icon = item.icon;
          return Array.from({ length: 3 }).map((_, i) => (
            <div
              key={`${index}-${i}`}
              className={`floating-icon-${index} absolute text-white/10`}
              style={{
                left: `${20 + index * 15 + i * 10}%`,
                top: `${10 + i * 30}%`,
                animationDelay: `${item.delay + i * 0.5}s`,
              }}
            >
              <Icon size={item.size} />
            </div>
          ));
        })}

        {/* خطوط موجی پس‌زمینه */}
        <svg className="absolute inset-0 w-full h-full z-0 opacity-5">
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              className="wave-line"
              d={`M0,${100 + i * 20} Q50,${80 + i * 20} 100,${
                120 + i * 20
              } T200,${100 + i * 20} T300,${130 + i * 20} T400,${
                90 + i * 20
              } T500,${110 + i * 20} T600,${100 + i * 20}`}
              stroke="white"
              strokeWidth="0.5"
              fill="none"
            />
          ))}
        </svg>

        {/* کانتینر افقی */}
        <div
          ref={horizontalContainerRef}
          className="flex h-screen relative z-10"
          style={{ width: `${sectionsData.length * 100}vw` }}
        >
          {sectionsData.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) slidesRef.current[index] = el;
                }}
                className="relative h-screen w-screen flex items-center justify-center px-4"
              >
                {/* شکل مورفینگ پس‌زمینه */}
                <div
                  className="absolute inset-0 overflow-hidden opacity-20"
                  style={{ background: section.gradient }}
                >
                  <svg className="absolute w-full h-full">
                    <path
                      className="morph-shape"
                      d="M0,0 Q50,20 100,0 T200,0 T300,100 T400,0 T500,50 T600,0"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {/* کارت اصلی */}
                <div
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  className="relative w-full max-w-6xl mx-auto bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl transform-gpu"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* نوار کناری رنگی */}
                  <div
                    className="absolute left-0 top-0 h-full w-2"
                    style={{ backgroundColor: section.color }}
                  />

                  {/* هدر کارت */}
                  <div className="p-12 border-b border-white/10">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="relative">
                        <div
                          className="w-20 h-20 rounded-2xl flex items-center justify-center animate-morph"
                          style={{ background: section.gradient }}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div
                          className="absolute -inset-4 rounded-2xl border-2 opacity-20 animate-pulse"
                          style={{ borderColor: section.color }}
                        />
                      </div>

                      <div>
                        <div className="text-white/60 text-sm tracking-widest uppercase mb-2">
                          {section.subtitle}
                        </div>
                        <h2 className="text-5xl font-bold text-white mb-2">
                          {section.title}
                        </h2>
                        <div className="flex items-center gap-4">
                          <div
                            className="w-16 h-1 rounded-full"
                            style={{ background: section.gradient }}
                          />
                          <span className="text-white/40 text-sm">
                            Section {index + 1} of {sectionsData.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* محتوای کارت */}
                  <div className="p-12">
                    <div
                      ref={(el) => {
                        if (el) contentRefs.current[index] = el;
                      }}
                      className="grid lg:grid-cols-2 gap-12"
                    >
                      {/* توضیحات */}
                      <div>
                        <p className="text-2xl text-white/90 leading-relaxed mb-8">
                          {section.description}
                        </p>

                        {/* محصولات */}
                        <div className="mb-8">
                          <h3 className="text-white/60 text-sm tracking-widest uppercase mb-4">
                            Featured Products
                          </h3>
                          <div className="space-y-3">
                            {section.products.map((product, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                              >
                                <div
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: section.color }}
                                />
                                <span className="text-white group-hover:translate-x-2 transition-transform duration-300">
                                  {product}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* آمار */}
                      <div className="space-y-8">
                        {Object.entries(section.stats).map(
                          ([key, value], i) => (
                            <div key={key} className="relative">
                              <div
                                className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full animate-pulse-glow"
                                style={{ backgroundColor: section.color }}
                              />
                              <div className="pl-8">
                                <div className="text-white/60 text-sm uppercase tracking-widest mb-2">
                                  {key}
                                </div>
                                <div
                                  className="text-4xl font-bold"
                                  style={{ color: section.color }}
                                >
                                  {value}
                                </div>
                              </div>
                            </div>
                          )
                        )}

                        {/* دکمه CTA */}
                        <button
                          className="group relative mt-8 w-full py-4 rounded-xl overflow-hidden border-2 transition-all duration-500 hover:scale-105 active:scale-95"
                          style={{ borderColor: section.color }}
                        >
                          <span className="relative z-10 text-white font-medium tracking-wider">
                            EXPLORE TECHNOLOGY
                          </span>
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ background: section.gradient }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* افکت زیر کارت */}
                  <div
                    className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-1/2 h-20 blur-3xl opacity-30"
                    style={{ background: section.gradient }}
                  />
                </div>

                {/* شماره بخش */}
                <div className="absolute bottom-12 left-12">
                  <div className="text-white/10 text-[200px] font-bold leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ناوبری پایین */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-8">
          {/* نوار پیشرفت */}
          <div className="relative h-1 bg-white/10 rounded-full mb-4 overflow-hidden">
            <div
              className="progress-fill absolute inset-0 origin-left rounded-full"
              style={{
                background:
                  sectionsData[activeSection]?.gradient ||
                  sectionsData[0].gradient,
              }}
            />
          </div>

          {/* نقاط ناوبری */}
          <div className="flex items-center justify-between">
            <div className="text-white/60 text-sm">
              Scroll horizontally to explore
            </div>

            <div className="flex items-center gap-2">
              {sectionsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const targetX = -index * window.innerWidth;
                    gsap.to(horizontalContainerRef.current, {
                      x: targetX,
                      duration: 1.5,
                      ease: "power3.inOut",
                    });
                    setActiveSection(index);
                  }}
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSection === index
                      ? "scale-125"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  style={{
                    backgroundColor:
                      activeSection === index
                        ? sectionsData[index].color
                        : undefined,
                  }}
                >
                  {activeSection === index && (
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-30"
                      style={{ backgroundColor: sectionsData[index].color }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="text-white/60 text-sm">
              {activeSection + 1} / {sectionsData.length}
            </div>
          </div>
        </div>

        {/* دکمه‌های ناوبری */}
        <button
          onClick={() => {
            const newIndex = Math.max(0, activeSection - 1);
            const targetX = -newIndex * window.innerWidth;
            gsap.to(horizontalContainerRef.current, {
              x: targetX,
              duration: 1.5,
              ease: "power3.inOut",
            });
            setActiveSection(newIndex);
          }}
          className="fixed left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300 hover:scale-110"
        >
          ←
        </button>

        <button
          onClick={() => {
            const newIndex = Math.min(
              sectionsData.length - 1,
              activeSection + 1
            );
            const targetX = -newIndex * window.innerWidth;
            gsap.to(horizontalContainerRef.current, {
              x: targetX,
              duration: 1.5,
              ease: "power3.inOut",
            });
            setActiveSection(newIndex);
          }}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300 hover:scale-110"
        >
          →
        </button>

        {/* لوگو */}
        <div className="fixed top-8 left-8 z-50">
          <div className="flex items-center gap-3">
            <Stethoscope className="w-8 h-8 text-blue-400" />
            <div>
              <div className="text-white font-bold text-xl tracking-tighter">
                MEDTECH
              </div>
              <div className="text-white/60 text-xs tracking-widest">
                HORIZON
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="block md:hidden">
        <RolexMobile />
      </div>
    </>
  );
}
