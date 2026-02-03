"use client";

import { motion } from "framer-motion";
import { Bus, Menu, X, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

import logo from "@/assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/20 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="https://www.facebook.com/share/1FNWFMgGke/?mibextid=wwXIfr" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <div className="relative w-10 h-10 rounded-lg overflow-hidden group-hover:opacity-80 transition-opacity">
                <Image src={logo} alt="EU-BUS Logo" fill className="object-cover" />
              </div>
              <span className="text-gray-900 dark:text-white font-bold text-xl tracking-wider transition-colors">
                EU-BUS
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="#about"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                title={t("About Us", "عن الشركة")}
              >
                {t("About Us", "عن الشركة")}
              </Link>
              <Link
                href="#mission"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("Our Mission", "رسالتنا")}
              </Link>
              <Link
                href="#features"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("Why EU-BUS?", "لماذا EU-BUS؟")}
              </Link>
              <Link
                href="#team"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("Team", "فريق العمل")}
              </Link>
              <Link
                href="#contact"
                className="bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("Contact", "تواصل معنا")}
              </Link>
              
              <div className="flex items-center gap-2 border-l border-gray-200 dark:border-gray-700 pl-4 ml-4">
                <ThemeToggle />
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white border border-gray-200 dark:border-white/20 px-3 py-1 rounded-full text-xs font-semibold hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
                >
                  <Globe className="w-3 h-3" />
                  {language === "en" ? "AR" : "EN"}
                </button>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white border border-gray-200 dark:border-white/20 px-3 py-1 rounded-full text-xs font-semibold hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
              >
                {language === "en" ? "AR" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-white/10 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("About Us", "عن الشركة")}
            </Link>
            <Link
              href="#mission"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("Our Mission", "رسالتنا")}
            </Link>
            <Link
              href="#features"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("Why EU-BUS?", "لماذا EU-BUS؟")}
            </Link>
            <Link
              href="#team"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("Team", "فريق العمل")}
            </Link>
            <Link
              href="#contact"
              className="text-white bg-blue-600 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("Contact", "تواصل معنا")}
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
