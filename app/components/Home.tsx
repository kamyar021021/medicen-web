"use client";

import React, { useRef, useState } from "react";
import Lottie from "lottie-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import animationData from "../../public/3D Medical.json";

import { HomeMobile } from "./mobile/HomeMobile";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menu items
  const menuItems = [
    { title: "خانه", href: "#" },
    { title: "محصولات", href: "#products" },
    { title: "خدمات", href: "#services" },
    { title: "درباره ما", href: "#about" },
    { title: "تماس", href: "#contact" },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // انیمیشن‌های ساده و مؤثر
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const section1Y = useTransform(scrollYProgress, [0.1, 0.3], [60, 0]);
  const section1Opacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);

  const section2Y = useTransform(scrollYProgress, [0.3, 0.5], [60, 0]);
  const section2Opacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);

  const section3Y = useTransform(scrollYProgress, [0.5, 0.7], [60, 0]);
  const section3Opacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);

  const progressBarScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const isHeroInView = useInView(heroRef, { once: true });
  const isSection1InView = useInView(section1Ref, { once: true, amount: 0.3 });
  const isSection2InView = useInView(section2Ref, { once: true, amount: 0.3 });
  const isSection3InView = useInView(section3Ref, { once: true, amount: 0.3 });

  return (
    <>
      <div
        ref={containerRef}
        className="hidden md:block sm:hidden relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
      >
        {/* Floating Background Elements */}
        <div className="fixed inset-0 -z-10 opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, opacity: 0.3 }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className="absolute w-32 h-32 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full blur-3xl"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
              }}
            />
          ))}
        </div>

        {/* Hero Section - تم دارک با سبز */}
        <motion.section
          ref={heroRef}
          style={{
            opacity: heroOpacity,
            scale: heroScale,
          }}
          className="min-h-screen flex items-center justify-center px-4 py-8 md:py-0 sticky top-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-6xl mx-auto">
            {/* Lottie Animation */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isHeroInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, type: "spring" }}
              className="col-span-1 md:col-span-1 order-2 md:order-1"
            >
              <div className="relative">
                {/* Glow Effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute -inset-6 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur-xl -z-10"
                />

                {/* Main Container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-emerald-500/20 p-4 md:p-6 shadow-2xl"
                >
                  <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    className="w-full h-auto"
                  />
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
                  className="absolute -top-3 -right-3"
                >
                  <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    انیمیشن 3D
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isHeroInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="col-span-1 md:col-span-1 order-1 md:order-2 text-right flex flex-col justify-center space-y-8"
            >
              {/* Elegant Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isHeroInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-flex items-center gap-3 px-5 py-2.5 bg-emerald-500/10 backdrop-blur-sm rounded-full self-end border border-emerald-500/30"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"
                />
                <span className="text-emerald-300 font-medium text-sm">
                  پیشرو در صنعت تجهیزات پزشکی
                </span>
              </motion.div>

              {/* Title with Animation */}
              <div className="space-y-6">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  <span className="block text-gray-100">تجهیزات پزشکی</span>
                  <motion.span
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(52, 211, 153, 0.5)",
                        "0 0 20px rgba(52, 211, 153, 0.8)",
                        "0 0 0px rgba(52, 211, 153, 0.5)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 bg-clip-text text-transparent"
                  >
                    پیشرفته و مدرن
                  </motion.span>
                </motion.h1>

                {/* Animated Underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isHeroInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full ml-auto overflow-hidden"
                >
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isHeroInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="text-gray-300 text-lg leading-relaxed"
              >
                شرکت تجهیزات پزشکی پیشرفته با بیش از{" "}
                <span className="text-emerald-300 font-semibold">
                  ۱۵ سال تجربه
                </span>
                ، ارائه‌دهنده تجهیزات پزشکی با کیفیت و استانداردهای بین‌المللی.
                همکاری با برترین برندهای جهانی در خدمت سلامت جامعه.
              </motion.p>

              {/* Features */}
              <div className="space-y-4">
                {[
                  "تجهیزات با استاندارد CE و FDA",
                  "پشتیبانی فنی ۲۴ ساعته",
                  "گارانتی و خدمات پس از فروش",
                  "آموزش و نصب توسط متخصصان",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 30, opacity: 0 }}
                    animate={isHeroInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 justify-end group cursor-pointer"
                  >
                    <span className="text-gray-300 group-hover:text-emerald-300 transition-colors">
                      {feature}
                    </span>
                    <motion.div
                      whileHover={{ rotate: 180, scale: 1.1 }}
                      className="w-7 h-7 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-lg flex items-center justify-center border border-emerald-500/30"
                    >
                      <svg
                        className="w-4 h-4 text-emerald-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-end pt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-emerald-500/25 transition-shadow"
                >
                  مشاهده محصولات
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-gray-800 text-emerald-300 border-2 border-emerald-500/30 rounded-xl font-semibold hover:bg-gray-700/50 transition-colors"
                >
                  دریافت مشاوره
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Content Sections */}
        <div className="relative z-10">
          {/* Section 1: درباره شرکت */}
          <motion.section
            ref={section1Ref}
            style={{
              y: section1Y,
              opacity: section1Opacity,
            }}
            className="min-h-screen flex items-center justify-center px-4 py-20"
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="space-y-10 text-right">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={isSection1InView ? { y: 0, opacity: 1 } : {}}
                    className="space-y-6"
                  >
                    <h2 className="text-4xl md:text-5xl font-bold">
                      <span className="block text-gray-100">درباره</span>
                      <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                        شرکت ما
                      </span>
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      با بیش از ۱۵ سال تجربه در زمینه واردات و توزیع تجهیزات
                      پزشکی، همواره در تلاش بوده‌ایم تا با ارائه محصولات باکیفیت
                      و خدمات مطلوب، نقش مؤثری در ارتقای سطح سلامت جامعه ایفا
                      کنیم.
                    </p>
                  </motion.div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: "۱۵+", label: "سال تجربه", delay: 0 },
                      { value: "۵۰۰+", label: "محصول فعال", delay: 0.1 },
                      { value: "۱۰۰۰+", label: "مشتری راضی", delay: 0.2 },
                      { value: "۲۴/۷", label: "پشتیبانی", delay: 0.3 },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ y: 50, opacity: 0, scale: 0.8 }}
                        animate={
                          isSection1InView ? { y: 0, opacity: 1, scale: 1 } : {}
                        }
                        transition={{ delay: stat.delay, type: "spring" }}
                        whileHover={{ y: -10 }}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-emerald-500/20 text-center shadow-xl"
                      >
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">
                          {stat.value}
                        </div>
                        <div className="text-emerald-200/80">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Graphic */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                  animate={
                    isSection1InView ? { scale: 1, opacity: 1, rotate: 0 } : {}
                  }
                  transition={{ type: "spring" }}
                  className="relative"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -ins-6"
                  >
                    <div className="w-full h-full border-2 border-emerald-500/20 rounded-3xl" />
                  </motion.div>

                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-emerald-500/30 shadow-2xl">
                    <div className="aspect-square bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl flex items-center justify-center">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-center"
                      >
                        <svg
                          className="w-32 h-32 text-emerald-400 opacity-80"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="mt-4 text-emerald-300 font-semibold">
                          تخصص و تجربه
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Section 2: محصولات */}
          <motion.section
            ref={section2Ref}
            style={{
              y: section2Y,
              opacity: section2Opacity,
            }}
            className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-900/50 to-transparent"
          >
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={isSection2InView ? { y: 0, opacity: 1 } : {}}
                className="text-center mb-20"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="block text-gray-100">محصولات</span>
                  <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                    پزشکی
                  </span>
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  تجهیزات پزشکی با کیفیت از برترین برندهای جهانی
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "دستگاه ECG",
                    category: "قلب و عروق",
                    description: "دستگاه نوار قلب دیجیتال با دقت بالا",
                    color: "from-emerald-500/20 to-green-500/20",
                  },
                  {
                    title: "اولتراسوند",
                    category: "تصویربرداری",
                    description: "دستگاه سونوگرافی پرتابل",
                    color: "from-emerald-600/20 to-green-600/20",
                  },
                  {
                    title: "ونتیلاتور",
                    category: "مراقبت ویژه",
                    description: "ونتیلاتور پیشرفته ICU",
                    color: "from-emerald-700/20 to-green-700/20",
                  },
                ].map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 80, opacity: 0, rotateX: 20 }}
                    animate={
                      isSection2InView ? { y: 0, opacity: 1, rotateX: 0 } : {}
                    }
                    transition={{ delay: index * 0.15, type: "spring" }}
                    whileHover={{
                      y: -15,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    className="group"
                  >
                    <div
                      className={`h-64 rounded-3xl bg-gradient-to-br ${product.color} border border-emerald-500/30 flex items-center justify-center relative overflow-hidden`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full backdrop-blur-sm"
                      />
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <div className="mt-8 text-right space-y-3">
                      <h3 className="text-2xl font-bold text-gray-100">
                        {product.title}
                      </h3>
                      <p className="text-gray-400">{product.description}</p>
                      <motion.button
                        whileHover={{ x: -5 }}
                        className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center gap-2 justify-end"
                      >
                        <span>اطلاعات بیشتر</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Section 3: خدمات */}
          <motion.section
            ref={section3Ref}
            style={{
              y: section3Y,
              opacity: section3Opacity,
            }}
            className="min-h-screen flex items-center justify-center px-4 py-20"
          >
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isSection3InView ? { scale: 1, opacity: 1 } : {}}
                transition={{ type: "spring" }}
                className="text-center mb-20"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="block text-gray-100">خدمات</span>
                  <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                    ما
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "مشاوره تخصصی",
                    description: "مشاوره رایگان توسط متخصصان",
                    icon: (
                      <svg
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "نصب و راه‌اندازی",
                    description: "نصب حرفه‌ای توسط مهندسان",
                    icon: (
                      <svg
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "آموزش پرسنل",
                    description: "آموزش کامل استفاده از دستگاه‌ها",
                    icon: (
                      <svg
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "پشتیبانی",
                    description: "پشتیبانی ۲۴ ساعته",
                    icon: (
                      <svg
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0, rotateY: 90 }}
                    animate={
                      isSection3InView ? { y: 0, opacity: 1, rotateY: 0 } : {}
                    }
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(52, 211, 153, 0.5)",
                    }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-emerald-500/20 text-center shadow-xl hover:shadow-2xl transition-all"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      className="w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-100 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Section 4: تماس */}
          <section className="min-h-[60vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-emerald-900/30 to-green-900/30 border-t border-emerald-500/20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-8"
              >
                <span className="block text-gray-100">برای مشاوره رایگان</span>
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  با ما تماس بگیرید
                </span>
              </motion.h2>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                کارشناسان ما آماده پاسخگویی به سوالات شما هستند
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-emerald-500/25 text-lg"
              >
                تماس با ما
              </motion.button>
            </div>
          </section>
        </div>

        {/* Progress Indicator */}
        <motion.div
          style={{ scaleY: progressBarScale }}
          className="fixed top-0 right-6 w-2 h-screen origin-top z-50 hidden md:block"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500 via-green-500 to-emerald-500 rounded-full" />
          <motion.div
            animate={{
              boxShadow: [
                "0 0 10px rgba(52, 211, 153, 0.5)",
                "0 0 20px rgba(52, 211, 153, 0.8)",
                "0 0 10px rgba(52, 211, 153, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
          />
        </motion.div>

        {/* Floating Medical Icon */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="fixed bottom-8 left-8 w-16 h-16 z-40 hidden md:block"
        >
          <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-emerald-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      <div className="block md:hidden">
        <HomeMobile />
      </div>
    </>
  );
};

export default Home;
