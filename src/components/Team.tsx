"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { User, Code2, ShieldCheck, Database, Laptop, Bot, LineChart, Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

import mohamedImg from "@/assets/mohamed.jpeg";
import ahmedImg from "@/assets/ahmed.jpg";
import gamalImg from "@/assets/gamal.jpeg";
import kareemImg from "@/assets/kareem.jpeg";
import omarImg from "@/assets/omar.jpeg";
import mahmoudImg from "@/assets/mahmoud.jpeg";

const teamData = [
  {
    name: { en: "Mohmed Ramadan", ar: "محمد رمضان" },
    role: { en: "Founder & CEO", ar: "المؤسس والرئيس التنفيذي" },
    image: mohamedImg,
    bio: { 
      en: "Founder of EU-BUS. Visionary leader transforming student transportation.",
      ar: "مؤسس EU-BUS. قائد صاحب رؤية يعمل على تحويل نقل الطلاب من خلال التكنولوجيا."
    },
    skills: [],
    icon: <User className="w-5 h-5" />,
    linkedin: "https://www.linkedin.com/in/mohamed-ramadan-khader-47b929341"
  },
  {
    name: { en: "Ahmed Yousef", ar: "أحمد يوسف" },
    role: { en: "CDO - Data & Analytics Lead", ar: "الرئيس التنفيذي للبيانات - قائد البيانات والتحليلات" },
    image: ahmedImg,
    bio: {
      en: "Data Analyst | DTU ICPC Instructor | ECPC 2024 Participant. Certified: DataCamp Python Data Associate.",
      ar: "Data Analyst | مدرب DTU ICPC | مشارك في ECPC 2024. معتمد: مساعد بيانات Python من DataCamp."
    },
    skills: ["Python", "SQL", "Power BI", "Data Visualization"],
    icon: <LineChart className="w-5 h-5" />,
    linkedin: "https://www.linkedin.com/in/ahmed-yousef-273050350/"
  },
  {
    name: { en: "Gamal Abdelnasser", ar: "جمال عبد الناصر" },
    role: { en: "Mobile Dev & AI Integration Lead", ar: "قائد تطوير الهاتف وتكامل الذكاء الاصطناعي" },
    image: gamalImg,
    bio: {
      en: "Flutter & Android Native Developer. AI-Augmented Development Expert (Cursor, Windsurf, n8n). Delivered 100% automated systems.",
      ar: "مطور Flutter و Android Native. خبير التطوير المعزز بالذكاء الاصطناعي. سلم أنظمة آلية بنسبة 100٪."
    },
    skills: ["Clean Architecture", "State Management", "AI Automation"],
    icon: <Bot className="w-5 h-5" />,
    linkedin: "https://www.linkedin.com/in/gamal-abd-elnaser-01a24a249/",
  },
  {
    name: { en: "Karim Mohamed", ar: "كريم محمد" },
    role: { en: "CISO - Tech Infrastructure Lead", ar: "مسؤول أمن المعلومات - قائد البنية التحتية التقنية" },
    image: kareemImg,
    bio: {
      en: "Huawei Student Ambassador. Network & Cybersecurity Specialist.",
      ar: "سفير طلاب Huawei. أخصائي الشبكات والأمن السيبراني."
    },
    skills: ["CCNA", "MCSA", "Cybersecurity", "Penetration Testing"],
    icon: <ShieldCheck className="w-5 h-5" />,
    linkedin: "https://www.linkedin.com/in/kareem-mohamed-61a47b369"
  },
  {
    name: { en: "Omar", ar: "عمر" },
    role: { en: "App Security & Risk Specialist", ar: "أخصائي أمن التطبيقات وإدارة المخاطر" },
    image: omarImg,
    bio: {
      en: "Cybersecurity & Vulnerability Assessment Expert. Focus: Secure Application Development & Risk Mitigation.",
      ar: "خبير الأمن السيبراني وتقييم الثغرات. التركيز: تطوير التطبيقات الآمنة وتخفيف المخاطر."
    },
    skills: ["Security Best Practices", "Threat Analysis", "Compliance", "SOC Analysis"],
    icon: <Lock className="w-5 h-5" />,
    linkedin: "https://www.linkedin.com/in/omar-essam-3838563a3"
  },
  {
    name: { en: "Mahmoud Mohammed", ar: "محمود محمد" },
    role: { en: "Backend Dev & System Admin", ar: "مطور واجهة خلفية ومسؤول نظام" },
    image: mahmoudImg,
    bio: {
      en: "Ex-Student at DEPI. Works at German hospital as IT specialist. Freelance Backend Developer.",
      ar: "طالب سابق في DEPI. يعمل في المستشفى الألماني كأخصائي تكنولوجيا المعلومات. مطور مستقل."
    },
    skills: ["System Admin", "Comparative Programming"],
    icon: <Database className="w-5 h-5" />,
    linkedin: "https://www.linkedin.com/in/mahmoud-muhammad-a71ab7318"
  },
];


const TeamCard = ({ member, index, language, t }: { member: any, index: number, language: string, t: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6, once: false });

  return (
    <motion.a
      ref={ref}
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white dark:bg-zinc-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-zinc-700/50 hover:border-blue-500 dark:hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 group overflow-hidden hover:bg-white dark:hover:bg-zinc-800 block cursor-pointer"
    >
      <div className="flex flex-col items-center text-center p-6">
        <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-gray-100 dark:border-zinc-700 group-hover:border-blue-500 transition-colors shadow-lg shrink-0">
          {member.image ? (
            <Image 
              src={member.image} 
              alt={language === 'en' ? member.name.en : member.name.ar}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-400 dark:text-zinc-500">
              <User className="w-12 h-12" />
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-arabic transition-colors duration-300">
            {language === 'en' ? member.name.en : member.name.ar}
        </h3>
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2 text-sm font-medium bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full transition-colors duration-300">
          {member.icon}
          <span className="font-arabic">{language === 'en' ? member.role.en : member.role.ar}</span>
        </div>
        
        {/* Details Section - Mobile: Expand on Scroll | Desktop: Always Visible */}
        <div className={`
             transition-all duration-700 ease-in-out overflow-hidden
             md:max-h-none md:opacity-100 md:mt-4
             ${isInView ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}
        `}>
            <div className="pt-4 border-t border-gray-100 dark:border-zinc-700/50">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-arabic mb-3 transition-colors duration-300">
                  {language === 'en' ? member.bio.en : member.bio.ar}
                </p>
                {member.skills && member.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill: string, i: number) => (
                      <span key={i} className="text-[10px] bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-md transition-colors duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
            </div>
        </div>
      </div>
    </motion.a>
  );
};

export default function Team() {
  const { language, t } = useLanguage();

  return (
    <section id="team" className="min-h-[60vh] py-20 bg-gray-50 dark:bg-zinc-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <div className="inline-block bg-blue-100 dark:bg-blue-900/20 px-6 py-2 rounded-full mb-6 transition-colors duration-300">
             <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wide text-sm uppercase transition-colors duration-300">
               {t("The Minds Behind EU-BUS", "العقول المدبرة وراء EU-BUS")}
             </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-arabic transition-colors duration-300">
            {t("Meet Our Team", "تعرف على فريقنا")}
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {teamData.map((member, index) => (
             <TeamCard key={index} member={member} index={index} language={language} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
