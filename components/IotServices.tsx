
import React from 'react';
import { 
  ArrowLeft, Wifi, Radio, Server, Activity, Thermometer, Zap, 
  Cpu, Share2, Tablet, CheckCircle2, Phone, Network
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../assets';

const IotServices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-industrial-950 pt-24 animate-fade-in pb-20 transition-colors duration-300">
      
      {/* Navigation */}
      <div className="container mx-auto px-4 mb-8">
        <button
          onClick={() => navigate('/services')}
          className="flex items-center gap-2 text-slate-500 dark:text-industrial-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Назад к услугам</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-500/50 bg-blue-500/10 rounded-full mb-6">
          <Wifi size={14} className="text-blue-500" />
          <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            Industrial IoT (IIoT)
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          Цифровая Нервная Система <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Вашего Предприятия
          </span>
        </h1>
        <p className="text-slate-600 dark:text-industrial-300 text-lg max-w-3xl leading-relaxed border-l-4 border-blue-500 pl-6">
          Вы не можете управлять тем, что не измеряете. Мы разворачиваем беспроводные сети сбора данных (LoRaWAN), которые позволяют «слышать» вибрацию двигателей, «видеть» перегрев кабелей и контролировать токи нагрузок в режиме реального времени.
        </p>
      </section>

      {/* Architecture Visual (New Image Placeholder) */}
      <section className="container mx-auto px-4 mb-20">
        <div className="relative rounded-3xl overflow-hidden bg-industrial-900 border border-industrial-800 h-[400px] group">
           {/* IMAGE PLACEHOLDER: Замените ссылку в assets.ts на реальную схему */}
           <img 
             src={ASSETS.services.iiot.architecture} 
             alt="Архитектура IIoT" 
             className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
           />
           <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-industrial-950 to-transparent w-full">
             <h3 className="text-2xl font-bold text-white mb-2">Архитектура сети LoRaWAN</h3>
             <p className="text-industrial-300 text-sm max-w-lg">
               Датчики передают данные на шлюз по защищенному радиоканалу (868 МГц), шлюз отправляет их на сервер по Ethernet/4G. Полная независимость от корпоративного Wi-Fi.
             </p>
           </div>
        </div>
      </section>

      {/* Technology Stack / Benefits */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Почему LoRaWAN, а не Wi-Fi?</h2>
            <p className="text-slate-600 dark:text-industrial-400 mb-6 leading-relaxed">
              На заводе много металла, бетона и помех. Обычный Wi-Fi там не работает стабильно. Мы используем промышленный стандарт <b>LoRaWAN</b>:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 p-4 bg-white dark:bg-industrial-900 rounded-xl border border-slate-200 dark:border-industrial-800 shadow-sm">
                <Radio className="text-blue-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Дальнобойность</h4>
                  <p className="text-sm text-slate-500 dark:text-industrial-400">Сигнал пробивает железобетонные перекрытия и передается на расстояние до 15 км.</p>
                </div>
              </li>
              <li className="flex gap-4 p-4 bg-white dark:bg-industrial-900 rounded-xl border border-slate-200 dark:border-industrial-800 shadow-sm">
                <Zap className="text-blue-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Автономность</h4>
                  <p className="text-sm text-slate-500 dark:text-industrial-400">Датчики работают от одной батарейки до 5 лет. Никаких проводов питания.</p>
                </div>
              </li>
              <li className="flex gap-4 p-4 bg-white dark:bg-industrial-900 rounded-xl border border-slate-200 dark:border-industrial-800 shadow-sm">
                <Share2 className="text-blue-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Масштабируемость</h4>
                  <p className="text-sm text-slate-500 dark:text-industrial-400">Один шлюз обслуживает до 1000 датчиков.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="order-1 md:order-2 bg-slate-100 dark:bg-industrial-900 p-8 rounded-3xl relative overflow-hidden min-h-[400px] flex items-center justify-center">
            {/* Visual Representation of Network */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
            
            <div className="relative z-10 w-full max-w-sm">
               <div className="flex flex-col items-center gap-8">
                  {/* Sensors Row */}
                  <div className="flex justify-center gap-4 w-full">
                     <div className="w-12 h-12 bg-white dark:bg-industrial-800 rounded-full flex items-center justify-center border border-blue-500 shadow-lg shadow-blue-500/20 animate-pulse">
                        <Activity size={20} className="text-blue-500" />
                     </div>
                     <div className="w-12 h-12 bg-white dark:bg-industrial-800 rounded-full flex items-center justify-center border border-blue-500 shadow-lg shadow-blue-500/20 animate-pulse" style={{ animationDelay: '0.5s' }}>
                        <Thermometer size={20} className="text-orange-500" />
                     </div>
                     <div className="w-12 h-12 bg-white dark:bg-industrial-800 rounded-full flex items-center justify-center border border-blue-500 shadow-lg shadow-blue-500/20 animate-pulse" style={{ animationDelay: '1s' }}>
                        <Zap size={20} className="text-yellow-500" />
                     </div>
                  </div>
                  
                  {/* Connection Lines */}
                  <div className="h-16 w-px bg-gradient-to-b from-blue-500/50 to-blue-500"></div>

                  {/* Gateway */}
                  <div className="w-24 h-24 bg-blue-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl relative">
                    <Radio size={32} className="mb-1" />
                    <span className="text-[10px] font-bold uppercase">Gateway</span>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-100 dark:border-industrial-900"></div>
                  </div>

                  {/* Connection Lines */}
                  <div className="h-16 w-px bg-gradient-to-b from-blue-500 to-slate-500"></div>

                  {/* Cloud/Server */}
                  <div className="bg-white dark:bg-industrial-800 px-6 py-3 rounded-lg border border-slate-200 dark:border-industrial-700 flex items-center gap-3 shadow-lg">
                    <Server size={20} className="text-slate-500" />
                    <div className="text-xs">
                      <div className="font-bold text-slate-900 dark:text-white">SCADA / Cloud</div>
                      <div className="text-slate-500">Обработка данных</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="bg-white dark:bg-industrial-900 py-20 border-y border-slate-200 dark:border-industrial-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
            Что мы измеряем?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-6 bg-slate-50 dark:bg-industrial-950 rounded-2xl border border-slate-200 dark:border-industrial-800 hover:border-blue-400 transition-colors group">
              <div className="w-14 h-14 bg-white dark:bg-industrial-900 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Activity className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Вибродиагностика</h3>
              <p className="text-sm text-slate-600 dark:text-industrial-400 mb-4">
                Беспроводные датчики на корпусах электродвигателей, насосов и редукторов.
              </p>
              <ul className="text-xs text-slate-500 dark:text-industrial-500 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={12} /> Предупреждение о разрушении подшипника.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={12} /> Контроль дисбаланса валов.</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-industrial-950 rounded-2xl border border-slate-200 dark:border-industrial-800 hover:border-orange-400 transition-colors group">
              <div className="w-14 h-14 bg-white dark:bg-industrial-900 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Thermometer className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Термоконтроль</h3>
              <p className="text-sm text-slate-600 dark:text-industrial-400 mb-4">
                Контроль температуры контактных соединений, шин, обмоток двигателей и кабельных муфт.
              </p>
              <ul className="text-xs text-slate-500 dark:text-industrial-500 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={12} /> Предотвращение пожаров в щитовых.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={12} /> Контроль перегрева оборудования.</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-industrial-950 rounded-2xl border border-slate-200 dark:border-industrial-800 hover:border-yellow-400 transition-colors group">
              <div className="w-14 h-14 bg-white dark:bg-industrial-900 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Zap className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Энергомониторинг</h3>
              <p className="text-sm text-slate-600 dark:text-industrial-400 mb-4">
                Установка "умных" счетчиков и трансформаторов тока на отходящих линиях.
              </p>
              <ul className="text-xs text-slate-500 dark:text-industrial-500 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={12} /> Поиск самых прожорливых потребителей.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={12} /> Расчет себестоимости продукции.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="container mx-auto px-4 py-20">
         <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                 Куда попадают данные?
               </h2>
               <p className="text-slate-600 dark:text-industrial-300 mb-8">
                 Сбор данных — это только половина дела. Мы интегрируем потоки данных в удобные интерфейсы для принятия решений.
               </p>
               <div className="space-y-4">
                 <div className="flex gap-4">
                    <Tablet className="text-slate-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Дашборд Главного Инженера</h4>
                      <p className="text-sm text-slate-500 dark:text-industrial-400">Веб-интерфейс с графиками и картой завода. Доступен с планшета.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <Activity className="text-slate-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Telegram-боты</h4>
                      <p className="text-sm text-slate-500 dark:text-industrial-400">Мгновенные оповещения об аварийных событиях (вибрация > нормы, нет напряжения).</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <Network className="text-slate-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Интеграция с 1С / ERP</h4>
                      <p className="text-sm text-slate-500 dark:text-industrial-400">Автоматическая передача данных о наработке часов для планирования ремонтов.</p>
                    </div>
                 </div>
               </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-slate-900 rounded-xl p-4 shadow-2xl border border-slate-700">
                 {/* Mockup of Dashboard */}
                 <div className="border-b border-slate-700 pb-2 mb-4 flex justify-between items-center">
                    <div className="text-xs text-slate-400">RASSAR IIoT Platform</div>
                    <div className="flex gap-1.5">
                       <div className="w-2 h-2 rounded-full bg-red-500"></div>
                       <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                       <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                 </div>
                 {/* Используем placeholder для скриншота дашборда */}
                 <div className="relative aspect-video bg-slate-800 rounded mb-4 overflow-hidden group">
                    <img 
                      src={ASSETS.services.iiot.dashboard_mockup} 
                      alt="Dashboard Interface" 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                       <div className="bg-black/50 px-4 py-2 rounded text-white text-xs font-mono backdrop-blur-sm">
                          Live Data Stream
                       </div>
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-800 p-3 rounded">
                       <div className="text-[10px] text-slate-400 uppercase">Цех №1 / Вибрация</div>
                       <div className="text-emerald-400 font-mono text-xl">2.4 мм/с</div>
                    </div>
                    <div className="bg-slate-800 p-3 rounded">
                       <div className="text-[10px] text-slate-400 uppercase">Цех №1 / Температура</div>
                       <div className="text-white font-mono text-xl">45 °C</div>
                    </div>
                 </div>
              </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 text-center">
        <div className="bg-blue-900/20 border border-blue-500/30 p-10 rounded-3xl">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Начните с "Пилота"
          </h2>
          <p className="text-slate-600 dark:text-industrial-300 max-w-2xl mx-auto mb-8">
            Мы готовы бесплатно развернуть тестовый контур (1 шлюз + 5 датчиков) на вашем самом проблемном узле на 2 недели.
          </p>
          <a
            href="tel:+79879176580"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:scale-105"
          >
            <Phone size={20} />
            <span>Заказать Пилотный Проект</span>
          </a>
        </div>
      </section>

    </div>
  );
};

export default IotServices;
