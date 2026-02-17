
import React from 'react';
import { 
  ArrowLeft, Zap, Activity, Brain, MoveUpRight, Lightbulb, 
  ClipboardList, FlaskConical, Scale, Eye, Server, Cpu,
  Network, Share2, Database, Wifi, Layers, Settings, Box, Factory,
  Flame
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const ServiceCard = ({ 
    title, desc, icon: Icon, path, colorClass, delay, size = "normal", badge
  }: { 
    title: string; desc: string; icon: any; path: string; colorClass: string; delay: string; size?: "normal" | "large" | "wide", badge?: string
  }) => (
    <div 
      onClick={() => navigate(path)}
      className={`
        group relative overflow-hidden rounded-3xl p-8 cursor-pointer transition-all duration-500
        bg-white dark:bg-industrial-900 
        border border-slate-200 dark:border-industrial-800 
        hover:shadow-2xl hover:shadow-${colorClass}-500/10 dark:hover:shadow-${colorClass}-500/20
        hover:scale-[1.01] hover:border-${colorClass}-500/30
        flex flex-col justify-between
        ${size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
        ${size === 'wide' ? 'md:col-span-2' : ''}
        animate-fade-in
      `}
      style={{ animationDelay: delay }}
    >
      {/* Background Gradient Blob */}
      <div className={`absolute -right-10 -top-10 w-64 h-64 bg-${colorClass}-500/5 rounded-full blur-3xl group-hover:bg-${colorClass}-500/10 transition-all duration-500`} />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className={`
            w-14 h-14 rounded-2xl flex items-center justify-center 
            bg-${colorClass}-500/10 text-${colorClass}-600 dark:text-${colorClass}-400
            group-hover:scale-110 transition-transform duration-500
          `}>
            <Icon size={32} strokeWidth={1.5} />
          </div>
          <div className="flex gap-2">
            {badge && (
               <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-${colorClass}-100 dark:bg-${colorClass}-900/30 text-${colorClass}-600 dark:text-${colorClass}-400`}>
                 {badge}
               </span>
            )}
            <div className={`
              p-2 rounded-full border border-slate-200 dark:border-industrial-700 
              text-slate-400 dark:text-industrial-500 
              group-hover:text-${colorClass}-500 group-hover:border-${colorClass}-500/50 
              transition-all duration-300
            `}>
              <MoveUpRight size={20} />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className={`
            font-bold text-slate-900 dark:text-white mb-3 
            ${size === 'large' ? 'text-3xl md:text-4xl' : 'text-xl'}
          `}>
            {title}
          </h3>
          
          <p className={`
            text-slate-500 dark:text-industrial-400 leading-relaxed
            ${size === 'large' ? 'text-lg max-w-md' : 'text-sm'}
          `}>
            {desc}
          </p>
        </div>

        {size === 'large' && (
          <div className="mt-auto pt-8 flex gap-3 flex-wrap">
             <div className="flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-industrial-500">
               <Zap size={14} /> Энергетика
             </div>
             <div className="w-px h-4 bg-slate-300 dark:bg-industrial-700"></div>
             <div className="flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-industrial-500">
               <Settings size={14} /> Инжиниринг
             </div>
             <div className="w-px h-4 bg-slate-300 dark:bg-industrial-700"></div>
             <div className="flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-industrial-500">
               <Box size={14} /> Производство
             </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-industrial-950 pt-24 pb-20 transition-colors duration-300">
      <div className="container mx-auto px-4 mb-8 flex justify-between items-center">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-500 dark:text-industrial-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>На главную</span>
        </button>
      </div>

      <section className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Операционная Система <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            Вашего Завода
          </span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-industrial-300 max-w-3xl leading-relaxed mb-12">
          Мы не продаем разрозненные услуги. Мы строим <b>единую экосистему</b>, где физическое оборудование (L1), потоки данных (L2) и искусственный интеллект (L3) работают как единый организм.
        </p>

        {/* Architecture Visualization */}
        <div className="bg-slate-100 dark:bg-industrial-900 rounded-3xl p-1 border border-slate-200 dark:border-industrial-800 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-industrial-800">
            
            {/* Layer 1 */}
            <div className="p-8 relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-slate-900 dark:text-white font-black text-6xl group-hover:opacity-20 transition-opacity">L1</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-600 dark:text-yellow-500">
                  <Factory size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Физический Уровень</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-industrial-400 mb-4">
                Фундамент. Энергетика, приводы, механика. Модули ИТН, ГПУ, Шкафы управления.
              </p>
              <div className="h-1 w-full bg-slate-200 dark:bg-industrial-800 rounded overflow-hidden">
                 <div className="h-full bg-yellow-500 w-full animate-pulse-slow"></div>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="p-8 relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-slate-900 dark:text-white font-black text-6xl group-hover:opacity-20 transition-opacity">L2</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-500">
                  <Network size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Цифровой Уровень</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-industrial-400 mb-4">
                Нервная система. IIoT датчики, SCADA, LoRaWAN. Сбор данных с "железа" в реальном времени.
              </p>
              <div className="h-1 w-full bg-slate-200 dark:bg-industrial-800 rounded overflow-hidden">
                 <div className="h-full bg-blue-500 w-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="p-8 relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-slate-900 dark:text-white font-black text-6xl group-hover:opacity-20 transition-opacity">L3</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-600 dark:text-purple-500">
                  <Brain size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Когнитивный Уровень</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-industrial-400 mb-4">
                Мозг. Нейросети, Предиктив, ТРИЗ-алгоритмы. Принятие решений и авто-коррекция.
              </p>
              <div className="h-1 w-full bg-slate-200 dark:bg-industrial-800 rounded overflow-hidden">
                 <div className="h-full bg-purple-500 w-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[minmax(280px,auto)]">
          
          {/* L1: Electrical (Core) */}
          <ServiceCard 
            title="Электромонтаж & EPC"
            desc="L1 Foundation. Проектирование и монтаж под ключ. ГПУ, Высоковольтные сети, ИТН-модули."
            icon={Zap}
            path="/services/electrical"
            colorClass="yellow"
            delay="0ms"
            size="large"
            badge="Physical Layer"
          />

          {/* L2: IIoT & SCADA */}
          <ServiceCard 
            title="IIoT & Телеметрия"
            desc="L2 Connectivity. Развертывание промышленных сетей (LoRaWAN, Private LTE). Установка датчиков вибрации, тока и температуры."
            icon={Wifi}
            path="/services/iiot"
            colorClass="blue"
            delay="50ms"
            badge="Data Layer"
          />

          {/* L3: Video AI */}
          <ServiceCard 
            title="Видеоаналитика (ПАК)"
            desc="Услуга индивидуальной разработки. ПАК «под ключ»: Камеры + Сервер + Обучение нейросети под ваши задачи."
            icon={Eye}
            path="/ai-services"
            colorClass="purple"
            delay="100ms"
            badge="Custom R&D"
          />

          {/* L3: Custom AI */}
          <ServiceCard 
            title="Разработка AI / ML"
            desc="L3 Intelligence. Кастомные нейросети для предиктивной диагностики и оптимизации рецептур."
            icon={Brain}
            path="/ai-services"
            colorClass="pink"
            delay="150ms"
            badge="Cognitive Layer"
          />

          {/* Methodology: Audit */}
          <ServiceCard 
            title="Технический Аудит"
            desc="Входная точка. Оцифровка текущего состояния ('As-Is') и проектирование целевого ('To-Be')."
            icon={ClipboardList}
            path="/audit"
            colorClass="slate"
            delay="200ms"
          />

          {/* New Fire Safety Service */}
          <ServiceCard 
            title="Пожарная безопасность"
            desc="Сигнализация (АПС) и Тушение (АУПТ). Лицензия МЧС. Проектирование и монтаж."
            icon={Flame}
            path="/services/fire-safety"
            colorClass="red"
            delay="250ms"
          />

          {/* Methodology: TRIZ */}
          <ServiceCard 
            title="ТРИЗ + DoE"
            desc="Алгоритм оптимизации. Решение неразрешимых технических противоречий."
            icon={FlaskConical}
            path="/services/triz"
            colorClass="cyan"
            delay="300ms"
          />

          {/* L1: R&D (Hardware) */}
          <ServiceCard 
            title="R&D Центр"
            desc="Hardware Innovation. Создание уникальных механических и гидравлических узлов."
            icon={Lightbulb}
            path="/innovations"
            colorClass="emerald"
            delay="400ms"
            size="wide"
          />

          {/* Legal Services */}
          <ServiceCard 
            title="Юридический консалтинг"
            desc="Энергетический арбитраж. Возврат переплат, смена тарифа, защита в ФАС."
            icon={Scale}
            path="/services/legal"
            colorClass="indigo"
            delay="450ms"
          />

        </div>
      </section>

      {/* Connection CTA */}
      <section className="container mx-auto px-4 mt-10">
         <div className="flex flex-col items-center justify-center text-center opacity-70">
            <Share2 size={32} className="text-industrial-500 mb-4 animate-pulse" />
            <p className="text-sm text-slate-500 dark:text-industrial-500 max-w-lg">
               Все модули интегрируются в единую цифровую платформу (Digital Twin).<br/>
               Данные с L1 (Датчики) напрямую влияют на работу L3 (ИИ).
            </p>
         </div>
      </section>

      {/* CTA Strip */}
      <section className="container mx-auto px-4 mt-20">
        <div className="
           rounded-3xl p-8 md:p-12
           bg-white dark:bg-industrial-900
           border border-slate-200 dark:border-industrial-800
           shadow-xl dark:shadow-none
           flex flex-col md:flex-row items-center justify-between gap-8
        ">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              С чего начать построение экосистемы?
            </h2>
            <p className="text-slate-600 dark:text-industrial-400">
              Мы рекомендуем начать с аудита базового слоя (L1) и установки первичных датчиков (L2).
            </p>
          </div>
          <button 
             onClick={() => navigate('/audit')}
             className="
               whitespace-nowrap px-8 py-4 rounded-xl font-bold text-lg transition-all
               bg-blue-600 hover:bg-blue-500 text-white
               shadow-lg shadow-blue-500/20 hover:scale-105
               flex items-center gap-3
             "
          >
            <Activity size={20} />
            Заказать Аудит L1
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
