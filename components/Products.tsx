
import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, CheckCircle2, Wrench, Shield, Lock, Eye, 
  Settings, Box, Phone, Maximize2, X, PlayCircle, 
  Flame, Activity, Leaf, Zap, BarChart2, ArrowRight,
  LayoutGrid, Search, Filter
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../assets'; // Импортируем реестр

// --- T Y P E S ---

type MediaType = 'image' | 'video';

interface MediaItem {
  type: MediaType;
  url: string;
  thumbnail: string;
}

interface ProductData {
  id: string;
  categoryTitle: string;
  title: string;
  shortDescription: string; // Краткое описание для карточки в каталоге
  fullDescription: string;  // Полное описание для детальной страницы
  priceRange?: string;
  media: MediaItem[];
  features: string[]; // Список ключевых особенностей для карточки
  renderContent: () => React.ReactNode; // Уникальный контент (JSX)
}

// --- D A T A ---

const PRODUCTS_DATA: ProductData[] = [
  {
    id: 'gpu-station',
    categoryTitle: 'Собственная генерация',
    title: 'Газопоршневая электростанция (ГПУ)',
    shortDescription: 'Автономный источник энергии. Себестоимость кВт⋅ч от 2.5 руб.',
    fullDescription: 'Блочно-модульные газопоршневые установки (ГПУ) для выработки электрической и тепловой энергии (когенерация). Полная заводская готовность в контейнерном исполнении «Север». Идеальное решение для ухода от высоких тарифов сетевых компаний.',
    priceRange: 'от 15 млн ₽',
    features: ['Когенерация (КПД 88%)', 'Низкая себестоимость', 'Быстрый ввод (6 мес)'],
    media: [
      {
        type: 'image',
        url: ASSETS.products.gpu.main,
        thumbnail: ASSETS.products.gpu.main
      },
      {
        type: 'image',
        url: ASSETS.products.gpu.thumb1,
        thumbnail: ASSETS.products.gpu.thumb1
      },
      {
        type: 'image',
        url: ASSETS.products.gpu.thumb2,
        thumbnail: ASSETS.products.gpu.thumb2
      }
    ],
    renderContent: () => (
      <div className="space-y-10">
        <div className="bg-industrial-900/50 p-6 rounded-2xl border border-industrial-800">
          <h3 className="text-xl font-bold text-white mb-4">Технические характеристики</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-3">
                <div className="flex justify-between border-b border-industrial-800 pb-2">
                   <span className="text-industrial-400 text-sm">Мощность ед. блока</span>
                   <span className="text-white font-mono">0.5 — 4.5 МВт</span>
                </div>
                <div className="flex justify-between border-b border-industrial-800 pb-2">
                   <span className="text-industrial-400 text-sm">Напряжение</span>
                   <span className="text-white font-mono">0.4 / 6.3 / 10.5 кВ</span>
                </div>
                <div className="flex justify-between border-b border-industrial-800 pb-2">
                   <span className="text-industrial-400 text-sm">Топливо</span>
                   <span className="text-white font-mono">Природный газ / ПНГ</span>
                </div>
             </div>
             <div className="bg-industrial-950 p-4 rounded-xl">
                <h4 className="text-white text-sm font-bold mb-2">Двигатели</h4>
                <div className="flex flex-wrap gap-2">
                   <span className="px-2 py-1 bg-industrial-800 rounded text-xs text-industrial-300">Jenbacher</span>
                   <span className="px-2 py-1 bg-industrial-800 rounded text-xs text-industrial-300">MWM</span>
                   <span className="px-2 py-1 bg-industrial-800 rounded text-xs text-industrial-300">Yuchai</span>
                   <span className="px-2 py-1 bg-industrial-800 rounded text-xs text-industrial-300">Weichai</span>
                </div>
             </div>
          </div>
        </div>

        <div>
            <h3 className="text-xl font-bold text-white mb-6">Экономика проекта</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <div className="bg-industrial-950 p-5 rounded-xl border border-industrial-800 text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">2.5 ₽</div>
                  <div className="text-xs text-industrial-500 uppercase">Себестоимость кВт⋅ч</div>
               </div>
               <div className="bg-industrial-950 p-5 rounded-xl border border-industrial-800 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">0 ₽</div>
                  <div className="text-xs text-industrial-500 uppercase">Стоимость тепла</div>
                  <div className="text-[10px] text-industrial-600">(Побочный продукт)</div>
               </div>
               <div className="bg-industrial-950 p-5 rounded-xl border border-industrial-800 text-center">
                  <div className="text-3xl font-bold text-white mb-1">2-3 года</div>
                  <div className="text-xs text-industrial-500 uppercase">Окупаемость</div>
               </div>
            </div>
        </div>

        <div className="bg-blue-900/10 border border-blue-700/30 p-6 rounded-xl flex items-start gap-4">
           <Settings className="text-blue-500 shrink-0 mt-1" />
           <div>
             <h4 className="text-blue-400 font-bold mb-2">Опция: Тригенерация</h4>
             <p className="text-industrial-300 text-sm">
               Установка АБХМ (Абсорбционной холодильной машины) позволяет преобразовывать избыточное тепло летом в холод для кондиционирования цехов или технологических нужд.
             </p>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 'breaker',
    categoryTitle: 'Электротехника',
    title: 'Устройство выкатного подключения',
    shortDescription: 'Решение для безопасного обслуживания силовых автоматов в щитах 0.4кВ.',
    fullDescription: 'Профессиональное решение для обеспечения надежности, безопасности и удобства обслуживания силовых автоматических выключателей в промышленных распределительных щитах.',
    priceRange: 'по запросу',
    features: ['Видимый разрыв цепи', 'Быстрая замена', 'Защита от дуги'],
    media: [
      {
        type: 'video',
        url: ASSETS.products.breaker.video_url,
        thumbnail: ASSETS.products.breaker.video_preview
      },
      { type: 'image', url: ASSETS.products.breaker.view1, thumbnail: ASSETS.products.breaker.view1 },
      { type: 'image', url: ASSETS.products.breaker.view2, thumbnail: ASSETS.products.breaker.view2 },
      { type: 'image', url: ASSETS.products.breaker.view3, thumbnail: ASSETS.products.breaker.view3 },
    ],
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
    categoryTitle: 'Энергоэффективность',
    title: 'Модуль Оптимизации Горения',
    shortDescription: 'ТРИЗ-решение: снижение потребления газа до 50% без потери тепловой мощности.',
    fullDescription: 'Инновационный аэродинамический модуль на базе методики ТРИЗ. Обеспечивает снижение потребления природного газа до 2 раз при полном сохранении выработанного количества тепловой энергии.',
    priceRange: 'рассчитывается индивидуально',
    features: ['Экономия газа до 50%', 'Снижение NOx/CO', 'Рост ресурса котлов'],
    media: [
      {
        type: 'image',
        url: ASSETS.products.gasModule.main,
        thumbnail: ASSETS.products.gasModule.main
      },
      {
        type: 'image',
        url: ASSETS.products.gasModule.flame,
        thumbnail: ASSETS.products.gasModule.flame
      }
    ],
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
                  <BarChart2 size={24} />
                  <span className="font-bold">Экономический</span>
                </div>
                <ul className="text-sm text-industrial-300 space-y-2">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Окупаемость за 1 отопительный сезон.</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Снижение себестоимости Гкал тепла.</li>
                </ul>
              </div>

              <div className="bg-industrial-950 p-5 rounded-xl border border-industrial-800">
                <div className="flex items-center gap-3 mb-3 text-cyan-400">
                  <Activity size={24} />
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

// --- C O M P O N E N T S ---

const Products: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  // Find selected product
  const selectedProduct = useMemo(() => 
    PRODUCTS_DATA.find(p => p.id === selectedProductId), 
  [selectedProductId]);

  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);

  // When opening a product, set the first media item as active
  React.useEffect(() => {
    if (selectedProduct) {
      setActiveMedia(selectedProduct.media[0]);
    }
  }, [selectedProduct]);

  // --- CATALOG VIEW ---
  if (!selectedProductId || !selectedProduct) {
    return (
      <div className="min-h-screen bg-industrial-950 pt-24 animate-fade-in pb-20">
        <div className="container mx-auto px-4 mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-industrial-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Вернуться на главную</span>
          </button>
        </div>

        <section className="container mx-auto px-4 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Каталог Оборудования
          </h1>
          <p className="text-industrial-300 text-lg max-w-2xl mx-auto">
            Собственные разработки и партнерские решения для промышленности. <br/>
            От электрощитового оборудования до инновационных модулей энергоэффективности.
          </p>
        </section>

        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS_DATA.map((product) => (
              <div 
                key={product.id}
                onClick={() => setSelectedProductId(product.id)}
                className="group bg-industrial-900 border border-industrial-800 rounded-2xl overflow-hidden hover:border-industrial-500 transition-all cursor-pointer flex flex-col h-full hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]"
              >
                {/* Thumbnail Area */}
                <div className="relative aspect-video bg-industrial-950 overflow-hidden">
                  <img 
                    src={product.media[0].thumbnail} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.media[0].type === 'video' && (
                     <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                       <PlayCircle className="text-white drop-shadow-lg" size={40} />
                     </div>
                  )}
                  <div className="absolute top-4 left-4 bg-industrial-950/80 backdrop-blur px-3 py-1 rounded-full border border-industrial-800">
                    <span className="text-industrial-300 text-xs font-medium uppercase tracking-wider">
                      {product.categoryTitle}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-industrial-accent transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-industrial-400 mb-6 line-clamp-3">
                    {product.shortDescription}
                  </p>
                  
                  {/* Features pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="text-[10px] bg-industrial-800 text-industrial-300 px-2 py-1 rounded border border-industrial-700">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-industrial-800 flex justify-between items-center">
                    <span className="text-industrial-500 text-xs font-mono">
                      {product.priceRange || 'Цена по запросу'}
                    </span>
                    <span className="flex items-center gap-1 text-industrial-accent text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Подробнее <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Placeholder for "More coming soon" */}
            <div className="border-2 border-dashed border-industrial-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center opacity-50 min-h-[300px]">
              <Box size={40} className="text-industrial-600 mb-4" />
              <h3 className="text-lg font-bold text-industrial-500">Пополняется...</h3>
              <p className="text-xs text-industrial-600 mt-2 max-w-[200px]">
                Мы постоянно добавляем новые разработки в каталог.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // --- DETAIL VIEW ---
  
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
      {isLightboxOpen && activeMedia && (
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
            {selectedProduct.media.map((item, idx) => (
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

      {/* Detail Navigation */}
      <div className="container mx-auto px-4 mb-6">
        <button
          onClick={() => setSelectedProductId(null)}
          className="flex items-center gap-2 text-industrial-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Вернуться в каталог</span>
        </button>
      </div>

      {/* Header Info */}
      <section className="container mx-auto px-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-industrial-accent/50 bg-industrial-accent/10 rounded-full mb-6">
          <Box size={14} className="text-industrial-accent" />
          <span className="text-industrial-accent text-xs font-medium uppercase tracking-wider">
            {selectedProduct.categoryTitle}
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {selectedProduct.title}
        </h1>
        <p className="text-industrial-300 text-lg max-w-3xl leading-relaxed">
          {selectedProduct.fullDescription}
        </p>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Gallery */}
          <div className="space-y-4">
            {activeMedia && (
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
            )}

            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {selectedProduct.media.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMedia(item)}
                  className={`aspect-square rounded-lg border overflow-hidden transition-all relative group ${
                    activeMedia?.url === item.url 
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

          {/* Right Column: Unique Content & Call to Action */}
          <div className="animate-fade-in">
             {selectedProduct.renderContent()}

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
