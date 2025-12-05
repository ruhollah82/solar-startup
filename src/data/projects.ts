import type { Project } from "../types/index";

export const projectsData: Project[] = [
  {
    id: "solar-farm-shiraz",
    title: "مزرعه خورشیدی شیراز",
    description:
      "پروژه ۲۰ مگاواتی در منطقه گویم شیراز که با استفاده از پنل‌های نسل جدید، انرژی پاک مورد نیاز ۱۰,۰۰۰ خانوار را تامین می‌کند.",
    shortDescription: "مزرعه خورشیدی متوسط در شیراز",
    location: "شیراز، فارس، ایران",
    capacity: "۲۰ مگاوات",
    installationDate: "۱۴۰۲-۰۵-۱۲",
    images: {
      main: "https://justenergy.com/wp-content/uploads/2024/04/solar-panels-on-roof-of-house.jpg",
      gallery: [
        "https://solarnaturally.com.au/wp-content/uploads/2018/01/how-do-solar-panels-work.jpg",
        "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
        "https://group.met.com/media/4uvnuufu/pros-and-cons-of-solar-panels.jpg",
      ],
      thumbnails: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kIWgvRaKC16WuWJBnJQjun7jIzlfRObV_A&s",
        "https://justenergy.com/wp-content/uploads/2024/04/solar-panels-on-roof-of-house.jpg",
      ],
    },
    stats: {
      energyProduced: "۳۴,۰۰۰ مگاوات ساعت/سال",
      co2Saved: "۲۵,۰۰۰ تن",
      homesPowered: 10000,
    },
    features: [
      "سیستم کنترل هوشمند",
      "باتری ذخیره‌سازی لیتیومی",
      "نظارت ۲۴ ساعته",
    ],
    status: "completed",
  },
  {
    id: "solar-farm-kerman",
    title: "نیروگاه خورشیدی کرمان",
    description:
      "مزرعه ۳۰ مگاواتی در رفسنجان که بخشی از برق صنایع منطقه را با انرژی پاک تامین می‌کند.",
    shortDescription: "مزرعه خورشیدی بزرگ در رفسنجان",
    location: "رفسنجان، کرمان، ایران",
    capacity: "۳۰ مگاوات",
    installationDate: "۱۴۰۳-۰۱-۲۰",
    images: {
      main: "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
      gallery: [
        "https://solarnaturally.com.au/wp-content/uploads/2018/01/how-do-solar-panels-work.jpg",
        "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
        "https://group.met.com/media/4uvnuufu/pros-and-cons-of-solar-panels.jpg",
      ],
      thumbnails: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kIWgvRaKC16WuWJBnJQjun7jIzlfRObV_A&s",
        "https://justenergy.com/wp-content/uploads/2024/04/solar-panels-on-roof-of-house.jpg",
      ],
    },
    stats: {
      energyProduced: "۵۰,۰۰۰ مگاوات ساعت/سال",
      co2Saved: "۴۰,۰۰۰ تن",
      homesPowered: 15000,
    },
    features: [
      "مقاوم در برابر گرد و خاک",
      "سیستم مانیتورینگ صنعتی",
      "باتری پشتیبان",
    ],
    status: "completed",
  },
  {
    id: "solar-farm-yazd",
    title: "پروژه خورشیدی یزد",
    description:
      "نیروگاه ۱۵ مگاواتی در اردکان که به دلیل تابش شدید خورشید در منطقه، راندمان بسیار بالایی دارد.",
    shortDescription: "نیروگاه خورشیدی کم‌مصرف در اردکان",
    location: "اردکان، یزد، ایران",
    capacity: "۱۵ مگاوات",
    installationDate: "۱۴۰۳-۰۶-۰۵",
    images: {
      main: "https://solarnaturally.com.au/wp-content/uploads/2018/01/how-do-solar-panels-work.jpg",
      gallery: [
        "https://solarnaturally.com.au/wp-content/uploads/2018/01/how-do-solar-panels-work.jpg",
        "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
        "https://group.met.com/media/4uvnuufu/pros-and-cons-of-solar-panels.jpg",
      ],
      thumbnails: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kIWgvRaKC16WuWJBnJQjun7jIzlfRObV_A&s",
        "https://justenergy.com/wp-content/uploads/2024/04/solar-panels-on-roof-of-house.jpg",
      ],
    },
    stats: {
      energyProduced: "۲۰,۰۰۰ مگاوات ساعت/سال",
      co2Saved: "۱۵,۰۰۰ تن",
      homesPowered: 7000,
    },
    features: ["سیستم ضد گرد و خاک", "مانیتورینگ آنلاین", "پنل‌های نسل سوم"],
    status: "completed",
  },
  {
    id: "solar-farm-mashhad",
    title: "نیروگاه خورشیدی مشهد",
    description:
      "این نیروگاه ۱۰ مگاواتی در منطقه طرقبه، بخشی از انرژی مراکز گردشگری و هتل‌های منطقه را تامین می‌کند.",
    shortDescription: "نیروگاه خورشیدی گردشگری",
    location: "مشهد، خراسان رضوی، ایران",
    capacity: "۱۰ مگاوات",
    installationDate: "۱۴۰۱-۱۰-۱۸",
    images: {
      main: "https://techsunsanat.ir/wp-content/uploads/2024/06/image1-9-1068x601-1-1024x576.jpg",
      gallery: [
        "https://solarnaturally.com.au/wp-content/uploads/2018/01/how-do-solar-panels-work.jpg",
        "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
        "https://group.met.com/media/4uvnuufu/pros-and-cons-of-solar-panels.jpg",
      ],
      thumbnails: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kIWgvRaKC16WuWJBnJQjun7jIzlfRObV_A&s",
        "https://justenergy.com/wp-content/uploads/2024/04/solar-panels-on-roof-of-house.jpg",
      ],
    },
    stats: {
      energyProduced: "۱۳,۰۰۰ مگاوات ساعت/سال",
      co2Saved: "۹,۰۰۰ تن",
      homesPowered: 4500,
    },
    features: ["سیستم خنک‌کننده طبیعی", "پایش لحظه‌ای", "پنل‌های کم‌حرارت"],
    status: "completed",
  },
  {
    id: "solar-farm-tabas",
    title: "مزرعه خورشیدی طبس",
    description:
      "یکی از بزرگ‌ترین پروژه‌های خورشیدی شرق کشور با ظرفیت ۴۵ مگاوات که انرژی مورد نیاز بخشی از صنایع معدنی را تامین می‌کند.",
    shortDescription: "پروژه بزرگ مقیاس",
    location: "طبس، خراسان جنوبی، ایران",
    capacity: "۴۵ مگاوات",
    installationDate: "۱۴۰۲-۰۹-۱۰",
    images: {
      main: "https://justenergy.com/wp-content/uploads/2024/04/solar-panels-on-roof-of-house.jpg",
      gallery: [
        "https://solarnaturally.com.au/wp-content/uploads/2018/01/how-do-solar-panels-work.jpg",
        "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
        "https://group.met.com/media/4uvnuufu/pros-and-cons-of-solar-panels.jpg",
      ],
      thumbnails: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kIWgvRaKC16WuWJBnJQjun7jIzlfRObV_A&s",
        "https://justenergy.com/wp-content/uploads/2024/04/solar-panels-on-roof-of-house.jpg",
      ],
    },
    stats: {
      energyProduced: "۷۵,۰۰۰ مگاوات ساعت/سال",
      co2Saved: "۵۵,۰۰۰ تن",
      homesPowered: 20000,
    },
    features: ["سیستم پایش هوشمند", "پنل‌های مقاوم در گرما", "باتری صنعتی"],
    status: "completed",
  },
  {
    id: "solar-farm-qeshm",
    title: "نیروگاه خورشیدی قشم",
    description:
      "نیروگاه ۵ مگاواتی که بخشی از انرژی پایدار جزیره را تامین می‌کند و برای مناطق ساحلی طراحی شده است.",
    shortDescription: "نیروگاه خورشیدی جزیره‌ای",
    location: "قشم، هرمزگان، ایران",
    capacity: "۵ مگاوات",
    installationDate: "۱۴۰۱-۰۳-۲۲",
    images: {
      main: "https://solarnaturally.com.au/wp-content/uploads/2018/01/how-do-solar-panels-work.jpg",
      gallery: [
        "https://solarnaturally.com.au/wp-content/uploads/2018/01/how-do-solar-panels-work.jpg",
        "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
        "https://group.met.com/media/4uvnuufu/pros-and-cons-of-solar-panels.jpg",
      ],
      thumbnails: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kIWgvRaKC16WuWJBnJQjun7jIzlfRObV_A&s",
        "https://justenergy.com/wp-content/uploads/2024/04/solar-panels-on-roof-of-house.jpg",
      ],
    },
    stats: {
      energyProduced: "۷,۵۰۰ مگاوات ساعت/سال",
      co2Saved: "۴,۰۰۰ تن",
      homesPowered: 2500,
    },
    features: ["سیستم مقاوم در رطوبت", "پنل‌های ضد خوردگی", "مانیتورینگ ساحلی"],
    status: "completed",
  },
  {
    id: "solar-farm-zanjan",
    title: "مزرعه خورشیدی زنجان",
    description:
      "پروژه ۱۲ مگاواتی که انرژی مورد نیاز بخشی از صنایع غذایی و کارخانجات منطقه را تامین می‌کند.",
    shortDescription: "نیروگاه صنعتی",
    location: "زنجان، ایران",
    capacity: "۱۲ مگاوات",
    installationDate: "۱۴۰۲-۰۷-۱۵",
    images: {
      main: "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
      gallery: [
        "https://solarnaturally.com.au/wp-content/uploads/2018/01/how-do-solar-panels-work.jpg",
        "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
        "https://group.met.com/media/4uvnuufu/pros-and-cons-of-solar-panels.jpg",
      ],
      thumbnails: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kIWgvRaKC16WuWJBnJQjun7jIzlfRObV_A&s",
        "https://justenergy.com/wp-content/uploads/2024/04/solar-panels-on-roof-of-house.jpg",
      ],
    },
    stats: {
      energyProduced: "۱۸,۰۰۰ مگاوات ساعت/سال",
      co2Saved: "۱۱,۰۰۰ تن",
      homesPowered: 5000,
    },
    features: ["ادغام صنعتی", "پایش خودکار", "باتری امن"],
    status: "completed",
  },
  {
    id: "solar-farm-isfahan",
    title: "نیروگاه خورشیدی اصفهان",
    description:
      "نیروگاه ۲۵ مگاواتی واقع در ورزنه که به دلیل آب‌وهوای پایدار، یکی از بالاترین نرخ‌های بهره‌وری را دارد.",
    shortDescription: "نیروگاه خورشیدی منطقه مرکزی",
    location: "ورزنه، اصفهان، ایران",
    capacity: "۲۵ مگاوات",
    installationDate: "۱۴۰۳-۰۲-۳۰",
    images: {
      main: "https://group.met.com/media/4uvnuufu/pros-and-cons-of-solar-panels.jpg",
      gallery: [
        "https://solarnaturally.com.au/wp-content/uploads/2018/01/how-do-solar-panels-work.jpg",
        "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
        "https://group.met.com/media/4uvnuufu/pros-and-cons-of-solar-panels.jpg",
      ],
      thumbnails: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kIWgvRaKC16WuWJBnJQjun7jIzlfRObV_A&s",
        "https://justenergy.com/wp-content/uploads/2024/04/solar-panels-on-roof-of-house.jpg",
      ],
    },
    stats: {
      energyProduced: "۴۰,۰۰۰ مگاوات ساعت/سال",
      co2Saved: "۳۰,۰۰۰ تن",
      homesPowered: 13000,
    },
    features: ["سیستم خنک‌کننده هوا", "کنترل هوشمند", "پنل‌های راندمان بالا"],
    status: "completed",
  },
  {
    id: "solar-farm-birjand",
    title: "مزرعه خورشیدی بیرجند",
    description:
      "پروژه ۸ مگاواتی در بیرجند که با استفاده از پنل‌های مقاوم در باد و طوفان طراحی شده است.",
    shortDescription: "پروژه خورشیدی مقاوم",
    location: "بیرجند، خراسان جنوبی، ایران",
    capacity: "۸ مگاوات",
    installationDate: "۱۴۰۱-۱۱-۰۵",
    images: {
      main: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kIWgvRaKC16WuWJBnJQjun7jIzlfRObV_A&s",
      gallery: [
        "https://solarnaturally.com.au/wp-content/uploads/2018/01/how-do-solar-panels-work.jpg",
        "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
        "https://group.met.com/media/4uvnuufu/pros-and-cons-of-solar-panels.jpg",
      ],
      thumbnails: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kIWgvRaKC16WuWJBnJQjun7jIzlfRObV_A&s",
        "https://justenergy.com/wp-content/uploads/2024/04/solar-panels-on-roof-of-house.jpg",
      ],
    },
    stats: {
      energyProduced: "۱۰,۰۰۰ مگاوات ساعت/سال",
      co2Saved: "۷,۰۰۰ تن",
      homesPowered: 3500,
    },
    features: ["پنل‌های مقاوم", "سیستم ضد طوفان", "باتری ایمن"],
    status: "completed",
  },
  {
    id: "solar-farm-qazvin",
    title: "نیروگاه خورشیدی قزوین",
    description:
      "این پروژه ۱۸ مگاواتی در تاکستان، انرژی پایدار برای بخشی از کارخانجات و گلخانه‌های منطقه را فراهم می‌کند.",
    shortDescription: "نیروگاه خورشیدی کشاورزی",
    location: "تاکستان، قزوین، ایران",
    capacity: "۱۸ مگاوات",
    installationDate: "۱۴۰۲-۰۴-۲۸",
    images: {
      main: "https://justenergy.com/wp-content/uploads/2024/04/solar-panels-on-roof-of-house.jpg",
      gallery: [
        "https://solarnaturally.com.au/wp-content/uploads/2018/01/how-do-solar-panels-work.jpg",
        "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
        "https://group.met.com/media/4uvnuufu/pros-and-cons-of-solar-panels.jpg",
      ],
      thumbnails: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kIWgvRaKC16WuWJBnJQjun7jIzlfRObV_A&s",
        "https://justenergy.com/wp-content/uploads/2024/04/solar-panels-on-roof-of-house.jpg",
      ],
    },
    stats: {
      energyProduced: "۲۶,۰۰۰ مگاوات ساعت/سال",
      co2Saved: "۲۰,۰۰۰ تن",
      homesPowered: 9000,
    },
    features: [
      "پشتیبانی از گلخانه‌ها",
      "سیستم ذخیره‌سازی هیبریدی",
      "پایش هوشمند",
    ],
    status: "completed",
  },
];
