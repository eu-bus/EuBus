"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Cpu, GraduationCap, Building2, Headphones } from "lucide-react";
import NetworkAnimation from "./NetworkAnimation";
import { useLanguage } from "@/context/LanguageContext";

export default function Mission() {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      title: { en: "Exclusive Specialization", ar: "تخصص حصري" },
      description: { 
        en: "Smart transportation solutions dedicated solely to university and institute students in Egypt.",
        ar: "حلول نقل ذكية مخصصة فقط لطلاب الجامعات والمعاهد في مصر"
      }
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: { en: "Smart System", ar: "منظومة ذكية" },
      description: {
        en: "Full reliance on technology and real-time GPS tracking for trip management.",
        ar: "اعتماد كلي على التكنولوجيا وتتبع لحظي GPS لإدارة الرحلات"
      }
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: { en: "Safety & Control", ar: "الأمان والرقابة" },
      description: {
        en: "Continuous monitoring and advanced alarm system to ensure highest safety levels.",
        ar: "مراقبة مستمرة ونظام إنذار متطور لضمان أعلى مستويات الأمان"
      }
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: { en: "Operational Efficiency", ar: "كفاءة التشغيل" },
      description: {
        en: "Precise organization to reduce congestion, waiting time, and eliminate delays.",
        ar: "تنظيم دقيق لتقليل الازدحام ووقت الانتظار والقضاء على التأخير"
      }
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-500" />,
      title: { en: "Institutional Service", ar: "خدمة المؤسسات" },
      description: {
        en: "Strategic partnerships with universities to facilitate their students' commuting experience.",
        ar: "شراكات استراتيجية مع الجامعات لتسهيل تجربة تنقل طلابهم"
      }
    },
    {
      icon: <Headphones className="w-8 h-8 text-blue-500" />,
      title: { en: "Support & Sustainability", ar: "الدعم والاستدامة" },
      description: {
        en: "24/7 technical support and a scalable, sustainable transportation system.",
        ar: "دعم فني متواصل 24/7 ومنظومة نقل قابلة للتوسع والاستدامة"
      }
    }
  ];

  return (
    <>
    <section id="mission">
      <div className="py-20 bg-white dark:bg-zinc-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-10 mb-16">
            <div className="inline-block bg-blue-50 dark:bg-blue-900/20 px-6 py-2 rounded-full transition-colors duration-300">
               <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wide text-lg uppercase block transition-colors duration-300">
                 {t("About Company", "عن الشركة")}
               </span>
            </div>
            
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white font-arabic relative z-10 pb-4 transition-colors duration-300">
                {t("A New Concept for Student Transportation", "مفهوم جديد للنقل الطلابي")}
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-2 bg-blue-600 absolute -bottom-1 left-0 rounded-full"
              />
            </div>
          </div>
          
          <div className="relative inline-block max-w-4xl mx-auto px-6 mb-16">
            <span className="text-6xl md:text-8xl text-blue-500/20 absolute -top-8 md:-top-10 -right-2 md:-right-4 select-none font-serif">"</span>
            <p className={`text-xl md:text-3xl leading-relaxed text-gray-700 dark:text-gray-300 font-arabic relative z-10 font-light transition-colors duration-300 ${language === 'en' ? 'font-sans' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {language === 'ar' ? (
                <>
                  تُعد <span className="font-bold text-blue-500">EU-BUS</span> شركة متخصصة ورائدة في مصر تهدف إلى إعادة تعريف مفهوم النقل الطلابي من خلال منظومة تكنولوجية ذكية. نسعى لحل مشكلات التنقل اليومي عبر الربط بين الأمان، التنظيم، والتكنولوجيا. رؤيتنا هي أن نصبح الحل الأول والأكثر موثوقية لنقل الطلاب، لنمكنهم من التركيز على بناء: <span className="font-extrabold text-blue-500">المستقبل</span>.
                </>
              ) : (
                <>
                  <span className="font-bold text-blue-500">EU-BUS</span> is a specialized leading company in Egypt aiming to redefine student transportation through a smart technological ecosystem. We strive to solve daily commuting problems by connecting safety, organization, and technology. Our vision is to become the first and most reliable solution for student transportation, enabling them to focus on building: <span className="font-extrabold text-blue-500">The Future</span>.
                </>
              )}
            </p>
            <span className="text-6xl md:text-8xl text-blue-500/20 absolute -bottom-10 md:-bottom-12 -left-2 md:-left-4 select-none font-serif">"</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-center max-w-4xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="space-y-4">
              <h3 className="font-bold text-2xl text-blue-600 dark:text-blue-400 transition-colors duration-300">{t("Our Mission", "رسالتنا")}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors duration-300">
                {t("Providing transport service based on modern technology to ensure discipline and facilitate daily student movement.", "تقديم خدمة نقل تعتمد على التكنولوجيا الحديثة لضمان الانضباط وتسهيل حركة الطلاب اليومية.")}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-2xl text-blue-600 dark:text-blue-400 transition-colors duration-300">{t("Our Values", "قيمنا")}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors duration-300">
                {t("We believe safety and organization are the foundation of success, and we are committed to providing a service that respects students' time.", "نؤمن بأن الأمان والتنظيم هما أساس النجاح، ونلتزم بتقديم خدمة تحترم وقت الطلاب.")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>

    <section id="features" className="py-20 bg-gray-50 dark:bg-zinc-800 transition-colors duration-500 relative overflow-hidden">
      <NetworkAnimation />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            {t("Why Choose EU-BUS?", "لماذا تختار EU-BUS؟")}
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 text-center group bg-white dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 rounded-2xl transition-all shadow-sm hover:shadow-xl border border-gray-200 dark:border-white/10"
            >
              <div className="bg-blue-50 dark:bg-zinc-900 w-16 h-16 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform flex items-center justify-center mx-auto mb-6 text-blue-500 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-arabic transition-colors duration-300">
                {language === 'en' ? feature.title.en : feature.title.ar}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-arabic leading-relaxed text-sm transition-colors duration-300">
                {language === 'en' ? feature.description.en : feature.description.ar}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
