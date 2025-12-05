import React, { createContext, useContext, ReactNode } from 'react';

interface Translations {
  // Navigation
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
    getQuote: string;
  };

  // Hero Section
  hero: {
    latestProject: string;
    viewProject: string;
    allProjects: string;
  };

  // Stats Section
  stats: {
    projectsCompleted: string;
    totalCapacity: string;
    happyCustomers: string;
    efficiencyRate: string;
  };

  // Featured Projects
  featuredProjects: {
    title: string;
    subtitle: string;
    viewAll: string;
  };

  // CTA Section
  cta: {
    title: string;
    subtitle: string;
    getConsultation: string;
    viewCaseStudies: string;
  };

  // Footer
  footer: {
    about: string;
    aboutText: string;
    quickLinks: string;
    contact: string;
    followUs: string;
    copyright: string;
  };

  // Project details
  project: {
    location: string;
    capacity: string;
    installationDate: string;
    energyProduced: string;
    co2Saved: string;
    homesPowered: string;
    features: string;
    viewGallery: string;
    contactUs: string;
  };

  // Common terms
  common: {
    loading: string;
    error: string;
    back: string;
    next: string;
    previous: string;
    close: string;
    submit: string;
    cancel: string;
  };
}

const persianTranslations: Translations = {
  // Navigation
  nav: {
    home: 'خانه',
    projects: 'پروژه‌ها',
    about: 'درباره ما',
    contact: 'تماس با ما',
    getQuote: 'دریافت قیمت',
  },

  // Hero Section
  hero: {
    latestProject: '✨ آخرین پروژه',
    viewProject: 'مشاهده پروژه',
    allProjects: 'همه پروژه‌ها',
  },

  // Stats Section
  stats: {
    projectsCompleted: 'پروژه تکمیل شده',
    totalCapacity: 'ظرفیت کل',
    happyCustomers: 'مشتری راضی',
    efficiencyRate: 'نرخ کارایی',
  },

  // Featured Projects
  featuredProjects: {
    title: 'پروژه‌های ویژه',
    subtitle: 'نصبations موفق خورشیدی ما را کاوش کنید',
    viewAll: 'مشاهده همه',
  },

  // CTA Section
  cta: {
    title: 'آماده‌اید آینده خود را با انرژی خورشیدی تأمین کنید؟',
    subtitle: 'هزاران مشتری راضی به انرژی پاک، تجدیدپذیر بپیوندید.',
    getConsultation: 'مشاوره رایگان دریافت کنید',
    viewCaseStudies: 'مطالعات موردی را مشاهده کنید',
  },

  // Footer
  footer: {
    about: 'درباره ما',
    aboutText: 'ما پیشرو در راه‌حل‌های انرژی خورشیدی هستیم و به مشتریان کمک می‌کنیم تا به سمت آینده پایدار حرکت کنند.',
    quickLinks: 'پیوندهای سریع',
    contact: 'تماس',
    followUs: 'ما را دنبال کنید',
    copyright: '© ۲۰۲۴ SolarStart. تمامی حقوق محفوظ است.',
  },

  // Project details
  project: {
    location: 'مکان',
    capacity: 'ظرفیت',
    installationDate: 'تاریخ نصب',
    energyProduced: 'انرژی تولید شده',
    co2Saved: 'CO2 ذخیره شده',
    homesPowered: 'خانه‌های تأمین شده',
    features: 'ویژگی‌ها',
    viewGallery: 'مشاهده گالری',
    contactUs: 'تماس با ما',
  },

  // Common terms
  common: {
    loading: 'بارگذاری...',
    error: 'خطا',
    back: 'بازگشت',
    next: 'بعدی',
    previous: 'قبلی',
    close: 'بستن',
    submit: 'ارسال',
    cancel: 'لغو',
  },
};

interface TranslationContextType {
  t: Translations;
  isRTL: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const value: TranslationContextType = {
    t: persianTranslations,
    isRTL: true,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
