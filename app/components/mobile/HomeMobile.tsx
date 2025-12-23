"use client";

import { useRef, useState } from "react";
import Lottie from "lottie-react";
import {
  motion,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import animationData from "../../../public/3D Medical.json";

export const HomeMobile = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menu items
  const menuItems = [
    { title: "خانه", href: "#" },
    { title: "محصولات", href: "#products" },
    { title: "خدمات", href: "#services" },
    { title: "درباره ما", href: "#about" },
    { title: "تماس", href: "#contact" },
  ];

  return (
    <>
      <div className="block md:hidden min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-x-hidden">
        {/* Mobile Header */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-emerald-500/20 px-4 py-3"
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-bold text-lg">تجهیزات پزشکی</span>
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            >
              <span
                className={`w-6 h-0.5 bg-emerald-400 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-emerald-400 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-emerald-400 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </motion.header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed top-16 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-xl border-b border-emerald-500/20 overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {menuItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-4 text-center text-emerald-100 hover:bg-emerald-500/10 rounded-lg transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
                <button className="w-full py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold mt-2">
                  تماس با ما
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section - موبایل */}
        <section className="pt-24 pb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-300 text-sm">
                  پیشرو در صنعت تجهیزات پزشکی
                </span>
              </div>
            </div>

            {/* Title */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold leading-tight">
                <span className="block text-gray-100">تجهیزات پزشکی</span>
                <span className="block bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  پیشرفته و مدرن
                </span>
              </h1>

              {/* Animated Underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1 }}
                className="h-1 w-32 mx-auto bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
              />
            </div>

            {/* Lottie Animation - مخصوص موبایل */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-emerald-500/20 p-4 shadow-xl">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Description */}
            <p className="text-gray-300 text-center leading-relaxed px-2">
              شرکت تجهیزات پزشکی پیشرفته با بیش از{" "}
              <span className="text-emerald-300 font-semibold">
                ۱۵ سال تجربه
              </span>
              ، ارائه‌دهنده تجهیزات پزشکی با کیفیت و استانداردهای بین‌المللی.
            </p>

            {/* Quick Features */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "✓", text: "استاندارد جهانی" },
                { icon: "⏰", text: "پشتیبانی ۲۴/۷" },
                { icon: "🛡️", text: "گارانتی" },
                { icon: "🚚", text: "ارسال سریع" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-3 text-center border border-emerald-500/10"
                >
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 mx-auto mb-2">
                    {feature.icon}
                  </div>
                  <span className="text-sm text-gray-300">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-semibold shadow-lg active:shadow-emerald-500/25"
              >
                مشاهده محصولات
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="py-3.5 bg-gray-800 text-emerald-300 border-2 border-emerald-500/30 rounded-xl font-semibold active:bg-gray-700/50"
              >
                دریافت مشاوره
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Stats Section - عمودی برای موبایل */}
        <section className="py-12 px-4 bg-gradient-to-b from-gray-900/50 to-transparent">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-center">
              <span className="block text-gray-100">ما در اعداد</span>
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                می‌درخشیم
              </span>
            </h2>

            <div className="space-y-4">
              {[
                { value: "۱۵+", label: "سال تجربه" },
                { value: "۵۰۰+", label: "محصول فعال" },
                { value: "۱۰۰۰+", label: "مشتری راضی" },
                { value: "۲۴/۷", label: "پشتیبانی" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between bg-gray-800/50 p-4 rounded-xl border border-emerald-500/10"
                >
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Products Section - کاروسل برای موبایل */}
        <section id="products" className="py-12 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">
                <span className="block text-gray-100">محصولات</span>
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  پزشکی
                </span>
              </h2>
              <p className="text-gray-400 text-sm">
                تجهیزات با کیفیت از برترین برندها
              </p>
            </div>

            <div className="overflow-x-auto pb-4 -mx-4 px-4">
              <div className="flex gap-4" style={{ width: "max-content" }}>
                {[
                  {
                    title: "دستگاه ECG",
                    category: "قلب و عروق",
                    description: "دستگاه نوار قلب دیجیتال",
                    color: "from-emerald-500/20 to-green-500/20",
                  },
                  {
                    title: "اولتراسوند",
                    category: "تصویربرداری",
                    description: "سونوگرافی پرتابل",
                    color: "from-emerald-600/20 to-green-600/20",
                  },
                  {
                    title: "ونتیلاتور",
                    category: "مراقبت ویژه",
                    description: "ونتیلاتور ICU",
                    color: "from-emerald-700/20 to-green-700/20",
                  },
                ].map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="w-72 flex-shrink-0"
                  >
                    <div
                      className={`h-48 rounded-2xl bg-gradient-to-br ${product.color} border border-emerald-500/30 relative overflow-hidden`}
                    >
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 text-right space-y-2">
                      <h3 className="text-lg font-bold text-gray-100">
                        {product.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {product.description}
                      </p>
                      <button className="text-emerald-400 text-sm font-medium">
                        اطلاعات بیشتر →
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 pt-2">
              {[1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className={`w-2 h-2 rounded-full ${
                    dot === 1 ? "bg-emerald-500" : "bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Services Section - لیست عمودی */}
        <section
          id="services"
          className="py-12 px-4 bg-gradient-to-b from-gray-900/50 to-transparent"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">
                <span className="block text-gray-100">خدمات</span>
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  ما
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "مشاوره تخصصی",
                  description: "مشاوره رایگان توسط متخصصان",
                  icon: (
                    <svg
                      className="w-6 h-6"
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
                      className="w-6 h-6"
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
                      className="w-6 h-6"
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
                      className="w-6 h-6"
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
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-emerald-500/10"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="text-right flex-1">
                    <h3 className="font-bold text-gray-100">{service.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* About Section - ساده و مختصر */}
        <section id="about" className="py-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-center"
          >
            <h2 className="text-2xl font-bold">
              <span className="block text-gray-100">درباره</span>
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                شرکت ما
              </span>
            </h2>

            <p className="text-gray-300 leading-relaxed px-2">
              با بیش از ۱۵ سال تجربه در زمینه واردات و توزیع تجهیزات پزشکی،
              همواره در تلاش بوده‌ایم تا با ارائه محصولات باکیفیت و خدمات مطلوب،
              نقش مؤثری در ارتقای سطح سلامت جامعه ایفا کنیم.
            </p>

            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl p-6 border border-emerald-500/20">
              <div className="text-4xl mb-2">🏥</div>
              <div className="text-emerald-300 font-semibold">تخصص و تجربه</div>
              <div className="text-gray-400 text-sm mt-2">
                از سال ۱۳۸۵ تاکنون
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section - برای موبایل */}
        <section
          id="contact"
          className="py-12 px-4 bg-gradient-to-br from-emerald-900/30 to-green-900/30"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold mb-3">
                <span className="block text-gray-100">برای مشاوره رایگان</span>
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  با ما تماس بگیرید
                </span>
              </h2>
              <p className="text-gray-300 text-sm">
                کارشناسان ما آماده پاسخگویی به سوالات شما هستند
              </p>
            </div>

            <div className="space-y-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-semibold shadow-lg active:shadow-emerald-500/25"
              >
                تماس تلفنی
              </motion.button>

              <div className="text-sm text-gray-400">
                یا شماره ما:{" "}
                <span className="text-emerald-300 font-semibold">
                  ۰۲۱-۱۲۳۴۵۶۷۸
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-6">
              {["📱", "📧", "📍"].map((icon, index) => (
                <motion.div
                  key={index}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400"
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-gray-900 border-t border-emerald-500/10">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-500 rounded flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
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
              <span className="font-bold">تجهیزات پزشکی پیشرفته</span>
            </div>

            <p className="text-gray-400 text-sm">
              © ۱۴۰۳ - تمامی حقوق محفوظ است
            </p>

            <div className="text-xs text-gray-500 space-y-1">
              <div>تهران، خیابان نمونه، پلاک ۱۲۳</div>
              <div>info@medical-equipment.ir | ۰۲۱-۱۲۳۴۵۶۷۸</div>
            </div>
          </div>
        </footer>

        {/* Floating Action Button */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 left-6 w-14 h-14 bg-gradient-to-br from-emerald-600 to-green-600 rounded-full shadow-lg flex items-center justify-center z-40"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </motion.button>

        {/* Back to Top Button */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gray-800/80 backdrop-blur-sm rounded-full border border-emerald-500/30 flex items-center justify-center z-40"
        >
          <svg
            className="w-6 h-6 text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </>
  );
};
