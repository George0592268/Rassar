
import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Wrench, Shield, Lock, Eye, Settings, Box, Phone, Maximize2, X, PlayCircle, Flame, Gauge, Leaf, Zap, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Тип для медиа-контента (фото или видео)
type MediaType = 'image' | 'video';

interface MediaItem {
  type: MediaType;
  url: string;      // Ссылка на картинку или embed-ссылка на видео (iframe src)
  thumbnail: string; // Картинка для миниатюры
}

interface ProductData {
  id: string;
  categoryTitle: string;
  title: string;
  description: string;
  media: MediaItem[];
  renderContent: () => React.ReactNode; // Функция для рендера уникальной части описания
}

const Products: React.FC = () => {
  const navigate = useNavigate();
  const [activeProductId, setActiveProductId] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  // Данные для Устройства выкатного подключения (существующий продукт)
  const BREAKER_MEDIA: MediaItem[] = [
    {
      type: 'video',
      url: "https://rutube.ru/play/embed/088d8975945396656360341767222384",
      thumbnail: "https://pic.rutubelist.ru/video/cover/4d/52/4d528976724646464646464646464646.jpg"
    },
    { type: 'image', url: "https://i.ibb.co/3WCCywc/IMG-3408.jpg", thumbnail: "https://i.ibb.co/3WCCywc/IMG-3408.jpg" },
    { type: 'image', url: "https://i.ibb.co/6Wmrx2H/IMG-3409.jpg", thumbnail: "https://i.ibb.co/6Wmrx2H/IMG-3409.jpg" },
    { type: 'image', url: "https://i.ibb.co/ZWCwNqB/IMG-3413.jpg", thumbnail: "https://i.ibb.co/ZWCwNqB/IMG-3413.jpg" },
    { type: 'image', url: "https://i.ibb.co/601J20z/IMG-3416.jpg", thumbnail: "https://i.ibb.co/601J20z/IMG-3416.jpg" },
    { type: 'image', url: "https://i.ibb.co/VvzwtJc/IMG-3420.jpg", thumbnail: "https://i.ibb.co/VvzwtJc/IMG-3420.jpg" },
    { type: 'image', url: "https://i.ibb.co/2Z5008n/IMG-3432.jpg", thumbnail: "https://i.ibb.co/2Z5008n/IMG-3432.jpg" },
  ];

  // Данные для Модуля Энергоэффективности (новый продукт)
  const GAS_MODULE_MEDIA: MediaItem[] = [
    {
      type: 'image',
      url: "https://images.unsplash.com/photo-1542336391-ae2936d8efe4?auto=format&fit=crop&q=80&w=1000",
      thumbnail: "https://images.unsplash.com/photo-1542336391-ae2936d8efe4?auto=format&fit=crop&q=80&w=200"
    },
    {
      type: 'image',
      url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000",
      thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=200"
    },
     {
      type: 'image',
      url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000",
      thumbnail: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const PRODUCTS: ProductData[] = [
    {
      id: 'breaker',
      categoryTitle: 'Электротехника',
      title: 'Устройство выкатного подключения',
      description: 'Профессиональное решение для обеспечения надежности, безопасности и удобства обслуживания силовых автоматических выключателей в промышленных распределительных щитах.',
      media: BREAKER_MEDIA,
      renderContent: () => (
        <div className="space-y-10">
          <div className="bg-industrial-900/50 p-6 rounded-2xl border border-industrial-800">
            <h3 className="text-xl font-bold text-white mb-4">Конструкция</h3>
            <p className="text-industrial-300 leading-relaxed mb-4">Устройство состоит из двух основных частей:</p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-industrial-300">
                <div className="w-1.5 h-1.5 bg-industrial-accent rounded-full mt-2 shrink-0" />
                <span><b className="text-white">Подвижное устройство (выкатная корзина):</b> предназначено для надежного удержания автоматического выключателя.</span>
              </li>
              <li className="flex gap-3 text-industrial-300">
                <div className="w-1.5 h-1.5 bg-industrial-accent rounded-full mt-2 shrink-0" />
                <span><b className="text-white">Неподвижное устройство (стационарный блок):</b> включает в себя устройство втычного подключения и механизм вката/выката.</span>
              </li>
            </ul>
          </div>

          <div>
             <h3 className="text-xl font-bold text-white mb-6">Преимущества внедрения</h3>
             <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0 border border-blue-500/20">
                    <Wrench className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">При монтаже</h4>
                    <ul className="text-sm text-industrial-400 space-y-2">
                      <li className="flex gap-2"><CheckCircle2 size={16} className="text-blue-500 shrink-0" /> Облегченный монтаж неподвижной части.</li>
                      <li className="flex gap-2"><CheckCircle2 size={16} className="text-blue-500 shrink-0" /> Исключение манипуляций с тяжелым выключателем внутри шкафа.</li>
                    </ul>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Settings className="text-emerald-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">При эксплуатации</h4>
                    <ul className="text-sm text-industrial-400 space-y-2">
                      <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Быстрая замена выключателя.</li>
                      <li className="flex gap-2"><Eye size={16} className="text-emerald-500 shrink-0" /> <b>Видимый разрыв цепи</b> (безопасность).</li>
                      <li className="flex gap-2"><Lock size={16} className="text-emerald-500 shrink-0" /> Блокировка корзины замком.</li>
                    </ul>
                  </div>
               </div>
             </div>
          </div>

          <div className="bg-yellow-900/10 border border-yellow-700/30 p-6 rounded-xl">
            <h4 className="text-yellow-500 font-bold mb-2 flex items-center gap-2">
              <Settings size={18} /> Техническое требование
            </h4>
            <p className="text-industrial-300 text-sm">
              Перед установкой выключателя необходимо предварительно смонтировать специальные присоединительные выводы (адаптеры).
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'gas-module',
      categoryTitle: 'Энергоэффективность (ТРИЗ)',
      title: 'Модуль Оптимизации Горения',
      description: 'Инновационный аэродинамический модуль на базе методики ТРИЗ. Обеспечивает снижение потребления природного газа до 2 раз при полном сохранении выработанного количества тепловой энергии.',
      media: GAS_MODULE_MEDIA,
      renderContent: () => (
        <div className="space-y-10">
          
          {/* Key Stat Box */}
          <div className="bg-gradient-to-r from-industrial-900 to-industrial-800 p-8 rounded-2xl border border-industrial-700 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10">
                <Flame size={120} />
             </div>
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div>
                 <div className="text-emerald-400 font-bold text-6xl mb-2">-50%</div>
                 <div className="text-white font-medium text-lg">Потребление газа</div>
                 <p className="text-industrial-400 text-sm mt-2">
                   Снижение расхода топлива в 2 раза подтверждено натурными испытаниями на котлах средней мощности.
                 </p>
               </div>
               <div className="flex flex-col justify-center border-l border-industrial-700 pl-8">
                 <div className="text-white font-bold text-3xl mb-1">100%</div>
                 <div className="text-industrial-300 text-sm mb-4">Сохранение тепловой мощности</div>
                 
                 <div className="text-white font-bold text-3xl mb-1">NOx / CO</div>
                 <div className="text-industrial-300 text-sm">Минимальные выбросы</div>
               </div>
             </div>
          </div>

          <div className="bg-industrial-900/50 p-6 rounded-2xl border border-industrial-800">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Settings className="text-industrial-accent" />
              Принцип действия
            </h3>
            <p className="text-industrial-300 leading-relaxed mb-4">
              Устройство оптимизирует аэродинамику факела и смесеобразование внутри топки, используя принципы ТРИЗ (разрешение противоречия между полнотой сгорания и избытком воздуха).
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-industrial-300">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                <span><b>Стехиометрическая оптимизация:</b> Идеальное соотношение газ/воздух в каждой точке горения.</span>
              </li>
              <li className="flex gap-3 text-industrial-300">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                <span><b>Лучистый теплообмен:</b> Повышение светимости факела для лучшей передачи тепла стенкам котла.</span>
              </li>
              <li className="flex gap-3 text-industrial-300">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                <span><b>Дожигание:</b> Полное отсутствие химнедожога (CO).</span>
              </li>
            </ul>
          </div>

          <div>
             <h3 className="text-xl font-bold text-white mb-6">Эффекты от внедрения</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-industrial-950 p-5 rounded-xl border border-industrial-800">
                  <div className="flex items-center gap-3 mb-3 text-emerald-400">
                    <BarChart3 size={24} />
                    <span className="font-bold">Экономический</span>
                  </div>
                  <ul className="text-sm text-industrial-300 space-y-2">
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Окупаемость за 1 отопительный сезон.</li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Снижение себестоимости Гкал тепла.</li>
                  </ul>
               </div>

               <div className="bg-industrial-950 p-5 rounded-xl border border-industrial-800">
                  <div className="flex items-center gap-3 mb-3 text-cyan-400">
                    <Gauge size={24} />
                    <span className="font-bold">Технологический</span>
                  </div>
                  <ul className="text-sm text-industrial-300 space-y-2">
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-cyan-500 shrink-0" /> Увеличение ресурса горелок.</li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-cyan-500 shrink-0" /> Снижение нагара и отложений на трубах.</li>
                  </ul>
               </div>

               <div className="bg-industrial-950 p-5 rounded-xl border border-industrial-800 md:col-span-2">
                  <div className="flex items-center gap-3 mb-3 text-green-400">
                    <Leaf size={24} />
                    <span className="font-bold">Экологический</span>
                  </div>
                  <p className="text-sm text-industrial-300">
                    Резкое снижение выбросов парниковых газов и оксидов азота. Предприятие переходит в категорию "зеленых" производств, снижая экологические платежи.
                  </p>
               </div>
             </div>
          </div>
        </div>
      )
    }
  ];

  const currentProduct = PRODUCTS[activeProductId];
  const [activeMedia, setActiveMedia] = useState<MediaItem>(currentProduct.media[0]);

  // Сброс медиа при переключении продукта
  const handleProductChange = (index: number) => {
    setActiveProductId(index);
    setActiveMedia(PRODUCTS[index].media[0]);
  };

  const MediaViewer = ({ item, className, onClick }: { item: MediaItem, className?: string, onClick?: React.MouseEventHandler }) => {
    if (item.type === 'video') {
      return (
        <iframe 
          src={item.url} 
          title="Video player"
          frameBorder="0" 
          allow="clipboard-write; autoplay" 
          webkitAllowFullScreen 
          mozallowfullscreen 
          allowFullScreen 
          className={`w-full h-full bg-black ${className}`}
        />
      );
    }
    return (
      <img 
        src={item.url} 
        alt="Product view" 
        className={`w-full h-full object-contain ${className}`}
        onClick={onClick}
      />
    );
  };

  return (
    <div className="min-h-screen bg-industrial-950 pt-24 animate-fade-in pb-20">
      {/* Lightbox Overlay */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-industrial-400 hover:text-white transition-colors z-[110]"
            onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
          >
            <X size={40} />
          </button>
          
          <div className="w-full max-w-6xl max-h-[80vh] aspect-video flex items-center justify-center">
             <MediaViewer item={activeMedia} className="rounded-lg shadow-2xl max-h-full" onClick={(e) => e?.stopPropagation()} />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto p-2 no-scrollbar z-[110]">
            {currentProduct.media.map((item, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setActiveMedia(item); }}
                className={`w-16 h-16 rounded border-2 shrink-0 transition-all overflow-hidden relative ${
                  activeMedia.url === item.url ? 'border-industrial-accent opacity-100' : 'border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                <img src={item.thumbnail || item.url} className="w-full h-full object-cover" alt="thumbnail" />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <PlayCircle size={20} className="text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 mb-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-industrial-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Вернуться на главную</span>
        </button>
      </div>

      {/* Product Selector Tabs */}
      <section className="container mx-auto px-4 mb-8">
        <div className="flex flex-wrap gap-2 border-b border-industrial-800 pb-1">
          {PRODUCTS.map((prod, idx) => (
            <button
              key={prod.id}
              onClick={() => handleProductChange(idx)}
              className={`px-6 py-3 text-sm font-medium rounded-t-lg transition-all relative top-px border-t border-x ${
                activeProductId === idx
                  ? 'bg-industrial-900 border-industrial-700 text-white'
                  : 'bg-transparent border-transparent text-industrial-400 hover:text-industrial-200 hover:bg-industrial-900/50'
              }`}
            >
              {prod.title}
            </button>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-industrial-accent/50 bg-industrial-accent/10 rounded-full mb-6">
          <Box size={14} className="text-industrial-accent" />
          <span className="text-industrial-accent text-xs font-medium uppercase tracking-wider">
            {currentProduct.categoryTitle}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {currentProduct.title}
        </h1>
        <p className="text-industrial-300 text-lg max-w-3xl leading-relaxed">
          {currentProduct.description}
        </p>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Gallery Section */}
          <div className="space-y-4">
            <div 
              className={`aspect-[4/3] bg-industrial-900 border border-industrial-800 rounded-2xl overflow-hidden relative group ${activeMedia.type === 'image' ? 'cursor-zoom-in' : ''}`}
              onClick={() => setIsLightboxOpen(true)}
            >
              <MediaViewer item={activeMedia} className="p-0 lg:p-4 group-hover:scale-105 transition-transform duration-500" />
              
              {activeMedia.type === 'image' && (
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <Maximize2 size={20} />
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {currentProduct.media.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMedia(item)}
                  className={`aspect-square rounded-lg border overflow-hidden transition-all relative group ${
                    activeMedia.url === item.url 
                      ? 'border-industrial-accent opacity-100 ring-2 ring-industrial-accent/20' 
                      : 'border-industrial-800 opacity-60 hover:opacity-100 hover:border-industrial-600'
                  }`}
                >
                  <img src={item.thumbnail || item.url} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                      <PlayCircle size={24} className="text-white drop-shadow-md" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section (Dynamic Content) */}
          <div className="animate-fade-in">
             {currentProduct.renderContent()}

             <div className="pt-6 border-t border-industrial-800 mt-10">
               <a
                 href="tel:+79879176580"
                 className="w-full bg-industrial-accent hover:bg-sky-400 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02]"
               >
                 <Phone size={20} />
                 Заказать консультацию инженера
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
