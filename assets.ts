
/**
 * ЦЕНТРАЛЬНЫЙ РЕЕСТР ИЗОБРАЖЕНИЙ (ASSET REGISTRY)
 * 
 * Инструкция для публикации:
 * 1. Создайте папку 'images' в публичной директории вашего хостинга или в папке 'public' проекта.
 * 2. Загрузите туда ваши реальные фото (например, gpu-main.jpg).
 * 3. Замените ссылки ниже на локальные пути (например: '/images/gpu-main.jpg').
 */

export const ASSETS = {
  // --- ПРОДУКЦИЯ (Для каталога) ---
  products: {
    gpu: {
      // Газопоршневые установки
      main: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&q=80&w=1000",
      thumb1: "https://images.unsplash.com/photo-1565514020176-88d92983705e?auto=format&fit=crop&q=80&w=1000",
      thumb2: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    },
    breaker: {
      // Выкатное устройство
      video_preview: "https://pic.rutubelist.ru/video/cover/4d/52/4d528976724646464646464646464646.jpg",
      video_url: "https://rutube.ru/play/embed/088d8975945396656360341767222384",
      view1: "https://i.ibb.co/3WCCywc/IMG-3408.jpg",
      view2: "https://i.ibb.co/6Wmrx2H/IMG-3409.jpg",
      view3: "https://i.ibb.co/ZWCwNqB/IMG-3413.jpg",
    },
    gasModule: {
      // Модуль горения
      main: "https://images.unsplash.com/photo-1542336391-ae2936d8efe4?auto=format&fit=crop&q=80&w=1000",
      flame: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000",
    },
  },

  // --- УСЛУГИ (Баннеры и Схемы) ---
  services: {
    iiot: {
      // Схема архитектуры LoRaWAN (замените на вашу схему)
      architecture: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1000", 
      dashboard_mockup: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    },
    ai: {
      // Демонстрация компьютерного зрения
      vision_demo: "https://images.unsplash.com/photo-1535378437327-b71494663f80?auto=format&fit=crop&q=80&w=1000",
    },
    fireSafety: {
      // Пример установки пожаротушения
      suppression: "https://images.unsplash.com/photo-1621801306768-30c4fa47df94?auto=format&fit=crop&q=80&w=1000",
    }
  },

  // --- ОБЩЕЕ ---
  hero: {
    // Фон главной страницы (сейчас используется CSS паттерн, но можно включить фото)
    bg: "https://images.unsplash.com/photo-1565514020176-88d92983705e?auto=format&fit=crop&q=80&w=2000",
  }
};
