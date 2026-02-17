
import React from 'react';
import { 
  ArrowLeft, Brain, Cpu, Eye, LineChart, Truck, ShoppingCart, 
  ShieldAlert, CheckCircle2, ArrowRight, BarChart2, Shield, 
  AlertTriangle, Layers, Database, Factory, Settings, Users,
  FileText, GitBranch, Zap, Activity, X, Phone, Server, Video,
  ScanFace, HardHat, Flame, Lock, MonitorPlay, Code2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../assets';

const AIServices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-industrial-950 pt-24 animate-fade-in pb-20 font-sans transition-colors duration-300">
      {/* Navigation Bar */}
      <div className="container mx-auto px-4 mb-8 flex justify-between items-center">
        <button
          onClick={() => navigate('/services')}
          className="flex items-center gap-2 text-slate-500 dark:text-industrial-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Назад к услугам</span>
        </button>
      </div>

      {/* Hero Block */}
      <section className="container mx-auto px-4 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-purple-500/50 bg-purple-500/10 rounded-full mb-6">
          <Brain size={14} className="text-purple-500" />
          <span className="text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
            Промышленный Интеллект (Industrial AI)
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          Глаза и Мозг <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            Современного Завода
          </span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-industrial-300 max-w-3xl mx-auto leading-relaxed">
          Мы предлагаем два пути цифровизации: <b>готовые ПАК</b> для видеоаналитики «под ключ» и <b>кастомную разработку</b> нейросетей под уникальные задачи производства.
        </p>
      </section>

      {/* --- PRODUCT 1: SENTINEL VISION (TURNKEY VIDEO) --- */}
      <section className="container mx-auto px-4 mb-24">
        <div className="bg-white dark:bg-industrial-900 border border-slate-200 dark:border-industrial-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12 border-b border-slate-200 dark:border-industrial-800 relative">
            
            {/* Background Image Placeholder for Vision Demo */}
            <div className="absolute inset-0 z-0">
               <img 
                 src={ASSETS.services.ai.vision_demo} 
                 alt="Computer Vision Demo" 
                 className="w-full h-full object-cover opacity-10"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-industrial-900 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                  <Video size={24} />
                </div>
                <div>
                   <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                     ПАК «Страж»: Видеоаналитика
                   </h2>
                   <div className="inline-block mt-2 px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-[10px] font-bold uppercase rounded">
                     Услуга индивидуальной разработки
                   </div>
                </div>
              </div>
              <p className="text-lg text-slate-600 dark:text-industrial-300 max-w-2xl mb-8">
                Полноценный программно-аппаратный комплекс. Это не коробочное решение, а индивидуальный проект внедрения. Мы проектируем сеть камер, монтируем серверное оборудование и дообучаем нейросеть распознавать именно ваши объекты (каски, продукцию, погрузчики).
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-slate-100 dark:bg-industrial-800 rounded-full text-sm font-medium text-slate-700 dark:text-industrial-300 flex items-center gap-2">
                  <Server size={16} /> Edge-сервер в комплекте
                </div>
                <div className="px-4 py-2 bg-slate-100 dark:bg-industrial-800 rounded-full text-sm font-medium text-slate-700 dark:text-industrial-300 flex items-center gap-2">
                  <Lock size={16} /> Локальный контур (On-Premise)
                </div>
                <div className="px-4 py-2 bg-slate-100 dark:bg-industrial-800 rounded-full text-sm font-medium text-slate-700 dark:text-industrial-300 flex items-center gap-2">
                  <Zap size={16} /> Мгновенные алерты в Telegram/SCADA
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-industrial-800">
            {/* Feature 1: Safety */}
            <div className="p-8 hover:bg-slate-50 dark:hover:bg-industrial-800/50 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <HardHat className="text-orange-500" />
                Охрана Труда (HSE)
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-industrial-300">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Детекция наличия каски, жилета, перчаток.</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Контроль опасных зон (Виртуальный забор).</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Человек под грузом / на путях.</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Детекция падения человека.</li>
              </ul>
            </div>

            {/* Feature 2: Process */}
            <div className="p-8 hover:bg-slate-50 dark:hover:bg-industrial-800/50 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Activity className="text-blue-500" />
                Технологический процесс
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-industrial-300">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Остановка/затор конвейера.</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Подсчет продукции на ленте.</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Контроль задымления / огня.</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Трекинг погрузчиков и техники.</li>
              </ul>
            </div>

            {/* Feature 3: Hardware */}
            <div className="p-8 bg-slate-50 dark:bg-industrial-950/50">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Server className="text-industrial-500" />
                Состав Комплекса
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-white dark:bg-industrial-900 rounded border border-slate-200 dark:border-industrial-700">
                  <div className="text-xs font-bold text-slate-500 dark:text-industrial-400 uppercase">Оборудование</div>
                  <div className="text-slate-900 dark:text-white text-sm font-medium">IP-камеры (4MP+) + Edge Server (GPU NVIDIA)</div>
                </div>
                <div className="p-3 bg-white dark:bg-industrial-900 rounded border border-slate-200 dark:border-industrial-700">
                  <div className="text-xs font-bold text-slate-500 dark:text-industrial-400 uppercase">Софт</div>
                  <div className="text-slate-900 dark:text-white text-sm font-medium">Ядро системы + Мобильное приложение + Веб-панель</div>
                </div>
                <div className="p-3 bg-white dark:bg-industrial-900 rounded border border-slate-200 dark:border-industrial-700">
                  <div className="text-xs font-bold text-slate-500 dark:text-industrial-400 uppercase">Интеграция</div>
                  <div className="text-slate-900 dark:text-white text-sm font-medium">REST API, MQTT, Telegram Alerts, SCADA</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-slate-100 dark:bg-industrial-800/30 border-t border-slate-200 dark:border-industrial-800 text-center">
             <p className="text-slate-600 dark:text-industrial-400 text-sm">
               <span className="font-bold text-slate-900 dark:text-white">ROI:</span> Снижение штрафов за нарушения ТБ на 90% в первый месяц. Исключение простоя конвейера (экономия от 5 млн ₽/год).
             </p>
          </div>
        </div>
      </section>

      {/* --- PRODUCT 2: CUSTOM AI DEVELOPMENT --- */}
      <section className="container mx-auto px-4 mb-24">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
           <div className="h-px flex-1 bg-slate-200 dark:bg-industrial-800"></div>
           <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center uppercase tracking-widest">
             R&D и Кастомная Разработка
           </h2>
           <div className="h-px flex-1 bg-slate-200 dark:bg-industrial-800"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Philosophy */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Решаем задачи, где <br />
              <span className="text-purple-600 dark:text-purple-400">коробочные решения бессильны</span>
            </h3>
            <p className="text-lg text-slate-600 dark:text-industrial-300 mb-8 leading-relaxed">
              У каждого производства своя специфика: уникальный состав сырья, редкое оборудование, особые дефекты. Мы создаем нейросети (Computer Vision, Predictive Analytics), обученные именно на <b>ваших данных</b>.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center shrink-0">
                  <ScanFace size={24} className="text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Визуальный контроль качества</h4>
                  <p className="text-sm text-slate-600 dark:text-industrial-400">
                    Поиск микротрещин, сколов, дефектов покраски, геометрии. Точность выше человеческого глаза (до 99.8%).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center shrink-0">
                  <LineChart size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Предиктивная аналитика</h4>
                  <p className="text-sm text-slate-600 dark:text-industrial-400">
                    Прогноз выхода из строя оборудования на основе вибрации, токов и температуры. Планирование ремонтов.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center shrink-0">
                  <Database size={24} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Оптимизация рецептур</h4>
                  <p className="text-sm text-slate-600 dark:text-industrial-400">
                    Использование ML для подбора оптимальных параметров смеси (бетон, химия, металлургия) для снижения себестоимости.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Process Card */}
          <div className="bg-slate-900 dark:bg-industrial-900 p-8 rounded-3xl text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
             
             <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
               <Code2 className="text-purple-400" />
               Процесс разработки (MLOps)
             </h3>

             <div className="space-y-8 relative z-10 border-l border-slate-700 ml-3 pl-8">
               <div className="relative">
                 <span className="absolute -left-[41px] top-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-[10px] font-bold">1</span>
                 <h4 className="font-bold text-purple-300">Аудит данных</h4>
                 <p className="text-sm text-slate-400 mt-1">
                   Анализ доступности датасетов. Разметка данных силами наших асессоров.
                 </p>
               </div>
               <div className="relative">
                 <span className="absolute -left-[41px] top-1 w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-[10px] font-bold">2</span>
                 <h4 className="font-bold text-white">MVP (Прототип)</h4>
                 <p className="text-sm text-slate-400 mt-1">
                   Создание прототипа модели за 3-4 недели. Тестирование гипотезы на реальном участке.
                 </p>
               </div>
               <div className="relative">
                 <span className="absolute -left-[41px] top-1 w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-[10px] font-bold">3</span>
                 <h4 className="font-bold text-white">Обучение и Дообучение</h4>
                 <p className="text-sm text-slate-400 mt-1">
                   Тренировка на мощностях нашего кластера. Fine-tuning под изменения условий.
                 </p>
               </div>
               <div className="relative">
                 <span className="absolute -left-[41px] top-1 w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-[10px] font-bold">4</span>
                 <h4 className="font-bold text-white">Интеграция</h4>
                 <p className="text-sm text-slate-400 mt-1">
                   Внедрение в SCADA, MES или ERP. Развертывание на Edge-устройствах.
                 </p>
               </div>
             </div>

             <div className="mt-8 pt-6 border-t border-slate-700">
               <div className="flex items-center gap-4">
                 <div className="flex -space-x-2">
                   <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-slate-800"></div>
                   <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-slate-800"></div>
                   <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-slate-800"></div>
                 </div>
                 <div className="text-xs text-slate-400">
                   Команда: Data Scientist, ML Engineer, Industry Expert
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 border border-purple-500/30 rounded-2xl p-12 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold text-white mb-6 relative z-10">
            Начните с пилотного проекта
          </h2>
          <p className="text-white/80 mb-8 relative z-10 max-w-2xl mx-auto">
            Мы готовы провести бесплатный аудит вашей инфраструктуры, чтобы оценить применимость AI-решений и рассчитать окупаемость.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a 
              href="tel:+79879176580"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:scale-105"
            >
              <Phone size={20} />
              Обсудить задачу с архитектором
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AIServices;
