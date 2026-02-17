
import React from 'react';
import { 
  ArrowLeft, Brain, Cpu, Eye, LineChart, Truck, ShoppingCart, 
  ShieldAlert, CheckCircle2, ArrowRight, BarChart2, Shield, 
  AlertTriangle, Layers, Database, Factory, Settings, Users,
  FileText, GitBranch, Zap, Activity, X, Phone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AIServices: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-industrial-950 pt-24 animate-fade-in pb-20 font-sans text-slate-200">
      {/* Navigation Bar */}
      <div className="container mx-auto px-4 mb-8 flex justify-between items-center">
        <button
          onClick={() => navigate('/services')}
          className="flex items-center gap-2 text-industrial-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Назад к услугам</span>
        </button>
      </div>

      {/* 1. Hero Block */}
      <section className="container mx-auto px-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-purple-500/50 bg-purple-500/10 rounded-full mb-6">
          <Brain size={14} className="text-purple-400" />
          <span className="text-purple-400 text-xs font-bold uppercase tracking-wider">
            Industrial AI & ML
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Управление AI-проектами в промышленности
        </h1>
        <h2 className="text-xl md:text-2xl text-industrial-300 mb-8 font-light border-l-4 border-purple-500 pl-6 py-2 bg-industrial-900/50">
          От хаоса ML-экспериментов к управляемому портфелю с измеримым ROI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-950/20 border border-red-900/30 p-6 rounded-xl">
            <h3 className="text-red-400 font-bold mb-3 flex items-center gap-2">
              <AlertTriangle size={20} /> Проблема
            </h3>
            <p className="text-sm text-industrial-300 leading-relaxed">
              AI-проекты сжигают бюджет без измеримого эффекта. Data Scientists строят модели в вакууме, производство не доверяет предсказаниям, коммерция не понимает, как использовать, а руководство не видит возврата инвестиций.
            </p>
          </div>
          <div className="bg-emerald-950/20 border border-emerald-900/30 p-6 rounded-xl">
            <h3 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 size={20} /> Решение
            </h3>
            <p className="text-sm text-industrial-300 leading-relaxed">
              Управляемый портфель AI-инициатив с жёсткой привязкой к P&L. От стратегии данных и MLOps-инфраструктуры до промышленного развёртывания моделей с мониторингом бизнес-эффекта в реальном времени.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Portfolio Management */}
      <section className="bg-industrial-900 py-16 border-y border-industrial-800 mb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-industrial-800 rounded-full flex items-center justify-center text-white font-bold border border-industrial-600">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Управляемый портфель AI-проектов</h2>
          </div>
          <div className="ml-0 md:ml-14">
            <p className="text-industrial-400 mb-6 font-medium">Стратегия, приоритеты, инфраструктура</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="mb-4">
                  <span className="text-red-400 font-bold uppercase text-xs tracking-wider">Боль</span>
                  <p className="text-industrial-300 text-sm mt-1">В компании десятки идей «внедрить ML»: от прогноза спроса до распознавания дефектов. Data Scientists экспериментируют в Jupyter Notebook, DevOps не понимает, как это деплоить. Данные разрознены, модели не доходят до production.</p>
                </div>
                <div>
                  <span className="text-emerald-400 font-bold uppercase text-xs tracking-wider">Решение</span>
                  <ul className="text-sm text-industrial-300 mt-1 space-y-2">
                    <li className="flex gap-2 items-start"><span className="text-emerald-500">•</span> <b>AI-стратегия:</b> какие проблемы решаем ML, какие — автоматизацией.</li>
                    <li className="flex gap-2 items-start"><span className="text-emerald-500">•</span> <b>Диагностика данных:</b> качество и доступность для сценариев.</li>
                    <li className="flex gap-2 items-start"><span className="text-emerald-500">•</span> <b>MLOps:</b> версионирование, трекинг, CI/CD, мониторинг.</li>
                    <li className="flex gap-2 items-start"><span className="text-emerald-500">•</span> <b>Матрица:</b> бизнес-эффект vs сложность.</li>
                  </ul>
                </div>
              </div>
              <div className="bg-industrial-950 p-6 rounded-xl border border-industrial-800">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2"><FileText size={18} /> Результат внедрения</h4>
                <ul className="space-y-3 text-sm text-industrial-300">
                  <li className="flex gap-2">
                    <ArrowRight size={16} className="text-industrial-500 mt-0.5 shrink-0" />
                    <span>Дорожная карта AI-инициатив на 12–24 месяца.</span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight size={16} className="text-industrial-500 mt-0.5 shrink-0" />
                    <span>Единая платформа для разработки и развёртывания.</span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight size={16} className="text-industrial-500 mt-0.5 shrink-0" />
                    <span>Прозрачность: какие модели в production, какой эффект.</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-industrial-800">
                  <p className="text-xs text-industrial-400 italic">
                    <span className="text-white font-bold not-italic">Пример:</span> Предприятие с 8 площадками. Было 12 разрозненных инициатив. Через 6 месяцев: единая платформа, 5 моделей в production, экономия на инфраструктуре 40%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTION DOMAIN */}
      <section className="container mx-auto px-4 mb-16">
        <div className="mb-10">
          <span className="text-cyan-400 font-mono text-sm uppercase tracking-widest">Производство: AI для операционной эффективности</span>
          <div className="h-1 w-20 bg-cyan-500 mt-2"></div>
        </div>

        <div className="space-y-12">
          {/* 2. OEE */}
          <div className="bg-industrial-900 border border-industrial-800 p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Factory size={100} />
            </div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-8 h-8 bg-cyan-900/50 text-cyan-400 rounded flex items-center justify-center font-bold border border-cyan-800">2</div>
              <h3 className="text-2xl font-bold text-white">Управляемая производственная эффективность</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-4">
                <div>
                  <div className="text-red-400 font-bold text-xs uppercase mb-1">Боль</div>
                  <p className="text-sm text-industrial-300">Мощности загружены, но непонятно, где теряется время. Простои списывают на «технические причины». OEE считается вручную раз в месяц.</p>
                </div>
                <div>
                  <div className="text-emerald-400 font-bold text-xs uppercase mb-1">Решение</div>
                  <ul className="text-sm text-industrial-300 space-y-1 list-disc list-inside">
                    <li>CV + IoT: авто-учет простоев и микроостановок.</li>
                    <li>ML Root Cause Analysis: почему встали.</li>
                    <li>Предиктивное планирование переналадок.</li>
                    <li>Real-time OEE дашборды.</li>
                  </ul>
                </div>
              </div>
              <div className="bg-industrial-950/50 p-5 rounded-lg border border-industrial-800">
                <h4 className="text-white font-bold mb-3 text-sm">Результат</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">+10-25%</div>
                    <div className="text-xs text-industrial-500">Выпуск продукции</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">+8-15 п.п.</div>
                    <div className="text-xs text-industrial-500">Рост OEE</div>
                  </div>
                </div>
                <p className="text-xs text-industrial-400 border-t border-industrial-800 pt-3">
                  <span className="text-white font-bold">Пример:</span> Участок фасовки. CV-контроль простоев + прогноз переналадки. OEE 67% → 79% за 4 месяца. Эквивалент 4 операторов.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Predictive Maintenance */}
          <div className="bg-industrial-900 border border-industrial-800 p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Activity size={100} />
            </div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-8 h-8 bg-cyan-900/50 text-cyan-400 rounded flex items-center justify-center font-bold border border-cyan-800">3</div>
              <h3 className="text-2xl font-bold text-white">Предиктивное обслуживание (Predictive Maintenance)</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-4">
                <div>
                  <div className="text-red-400 font-bold text-xs uppercase mb-1">Боль</div>
                  <p className="text-sm text-industrial-300">Критичное оборудование стареет. Запчасти с лагом 3-6 месяцев. Ремонт по регламенту: либо рано (простой), либо поздно (авария).</p>
                </div>
                <div>
                  <div className="text-emerald-400 font-bold text-xs uppercase mb-1">Решение</div>
                  <ul className="text-sm text-industrial-300 space-y-1 list-disc list-inside">
                    <li>AI-анализ телеметрии (вибрация, ток, Т°).</li>
                    <li>CV-дефектоскопия (трещины, износ, тепловизоры).</li>
                    <li>Оптимизация графиков ТОиР с учетом плана.</li>
                    <li>Цифровые двойники.</li>
                  </ul>
                </div>
              </div>
              <div className="bg-industrial-950/50 p-5 rounded-lg border border-industrial-800">
                <h4 className="text-white font-bold mb-3 text-sm">Результат</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">-40-60%</div>
                    <div className="text-xs text-industrial-500">Внеплановые остановки</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">-15-25%</div>
                    <div className="text-xs text-industrial-500">Затраты на ТОиР</div>
                  </div>
                </div>
                <p className="text-xs text-industrial-400 border-t border-industrial-800 pt-3">
                  <span className="text-white font-bold">Пример:</span> Линия розлива. Система на основе вибрации. За 18 месяцев: 0 аварий (было 3), экономия 8.5 млн ₽ на ремонтах.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Quality & Safety */}
          <div className="bg-industrial-900 border border-industrial-800 p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye size={100} />
            </div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-8 h-8 bg-cyan-900/50 text-cyan-400 rounded flex items-center justify-center font-bold border border-cyan-800">4</div>
              <h3 className="text-2xl font-bold text-white">AI для контроля качества и безопасности</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-4">
                <div>
                  <div className="text-red-400 font-bold text-xs uppercase mb-1">Боль</div>
                  <p className="text-sm text-industrial-300">Операторы пропускают дефекты. Штрафы за ПБ растут. Непонятно, кто нарушает СИЗ и заходит в опасные зоны.</p>
                </div>
                <div>
                  <div className="text-emerald-400 font-bold text-xs uppercase mb-1">Решение</div>
                  <ul className="text-sm text-industrial-300 space-y-1 list-disc list-inside">
                    <li>CV контроль качества (дефекты, геометрия).</li>
                    <li>AI-контроль СИЗ и опасных зон.</li>
                    <li>NLP анализ отчетов об инцидентах.</li>
                    <li>Сквозной трекинг продукции.</li>
                  </ul>
                </div>
              </div>
              <div className="bg-industrial-950/50 p-5 rounded-lg border border-industrial-800">
                <h4 className="text-white font-bold mb-3 text-sm">Результат</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">-60-80%</div>
                    <div className="text-xs text-industrial-500">Пропуск дефектов</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">-50-70%</div>
                    <div className="text-xs text-industrial-500">Нарушения ПБ</div>
                  </div>
                </div>
                <p className="text-xs text-industrial-400 border-t border-industrial-800 pt-3">
                  <span className="text-white font-bold">Пример:</span> Металлопрокат. CV (6 камер). Пропуск дефектов 8% → 1.2%. Претензии -65%. Эффект 4.2 млн ₽/год.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Risks */}
          <div className="bg-industrial-900 border border-industrial-800 p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Shield size={100} />
            </div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-8 h-8 bg-cyan-900/50 text-cyan-400 rounded flex items-center justify-center font-bold border border-cyan-800">5</div>
              <h3 className="text-2xl font-bold text-white">Управляемые риски и устойчивость</h3>
            </div>
            
            <div className="relative z-10 space-y-4">
               <p className="text-sm text-industrial-300">
                 <span className="text-red-400 font-bold">Боль:</span> Санкционные риски, старение оборудования, кадры. Любое событие может остановить производство.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="bg-industrial-950 p-4 rounded border border-industrial-800">
                   <div className="text-emerald-400 font-bold text-xs uppercase mb-1">Решение</div>
                   <ul className="text-sm text-industrial-300 space-y-1">
                     <li>• Карта критичных рисков.</li>
                     <li>• AI-мониторинг индикаторов (кадры, сбои).</li>
                     <li>• Сценарное моделирование.</li>
                     <li>• <b>Тех. независимость:</b> Open-source стек.</li>
                   </ul>
                 </div>
                 <div className="bg-industrial-950 p-4 rounded border border-industrial-800">
                   <div className="text-white font-bold text-xs uppercase mb-1">Результат</div>
                   <ul className="text-sm text-industrial-300 space-y-1">
                     <li>• Раннее предупреждение (2-6 недель).</li>
                     <li>• Снижение ущерба на 50-70%.</li>
                     <li>• Независимость от облаков (On-premise).</li>
                   </ul>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* COMMERCE & SUPPLY CHAIN DOMAIN */}
      <section className="container mx-auto px-4 mb-16">
        <div className="mb-10">
          <span className="text-orange-400 font-mono text-sm uppercase tracking-widest">Коммерция и обеспечение: Рост выручки, снижение затрат</span>
          <div className="h-1 w-20 bg-orange-500 mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* 6. Sales */}
          <div className="bg-industrial-900 border border-industrial-800 p-6 rounded-2xl group hover:border-orange-500/30 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="w-8 h-8 bg-orange-900/50 text-orange-400 rounded flex items-center justify-center font-bold border border-orange-800">6</div>
              <ShoppingCart className="text-orange-500 opacity-50" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Продажи и Цены</h3>
            <p className="text-xs text-industrial-400 mb-3 min-h-[3rem]">Менеджеры дают скидки бессистемно. Отток клиентов.</p>
            <ul className="text-sm text-industrial-300 space-y-2 mb-4">
              <li>• <b>Segmentation:</b> кластеризация.</li>
              <li>• <b>Dynamic Pricing:</b> цена от спроса.</li>
              <li>• <b>Churn Prediction:</b> прогноз оттока.</li>
              <li>• <b>Next Best Offer:</b> cross-sell.</li>
            </ul>
            <div className="mt-auto pt-4 border-t border-industrial-800">
              <div className="text-orange-400 font-bold text-xl">+5-15%</div>
              <div className="text-[10px] text-industrial-500 uppercase">Рост маржи</div>
            </div>
          </div>

          {/* 7. Procurement */}
          <div className="bg-industrial-900 border border-industrial-800 p-6 rounded-2xl group hover:border-orange-500/30 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="w-8 h-8 bg-orange-900/50 text-orange-400 rounded flex items-center justify-center font-bold border border-orange-800">7</div>
              <Settings className="text-orange-500 opacity-50" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Закупки и Цепочки</h3>
            <p className="text-xs text-industrial-400 mb-3 min-h-[3rem]">Срывы поставок, скачки цен. Избыток или дефицит на складе.</p>
            <ul className="text-sm text-industrial-300 space-y-2 mb-4">
              <li>• <b>Forecast:</b> прогноз потребления.</li>
              <li>• <b>Inventory Opt:</b> баланс запасов.</li>
              <li>• <b>Risk Monitor:</b> мониторинг поставщиков.</li>
              <li>• <b>Early Warning:</b> предупреждение срывов.</li>
            </ul>
            <div className="mt-auto pt-4 border-t border-industrial-800">
              <div className="text-orange-400 font-bold text-xl">-8-20%</div>
              <div className="text-[10px] text-industrial-500 uppercase">Снижение затрат на закупку</div>
            </div>
          </div>

          {/* 8. Logistics */}
          <div className="bg-industrial-900 border border-industrial-800 p-6 rounded-2xl group hover:border-orange-500/30 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="w-8 h-8 bg-orange-900/50 text-orange-400 rounded flex items-center justify-center font-bold border border-orange-800">8</div>
              <Truck className="text-orange-500 opacity-50" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Логистика и Склад</h3>
            <p className="text-xs text-industrial-400 mb-3 min-h-[3rem]">Склад неэффективен, маршруты «на глазок», возвраты.</p>
            <ul className="text-sm text-industrial-300 space-y-2 mb-4">
              <li>• <b>Demand SKU:</b> прогноз спроса.</li>
              <li>• <b>Route Opt:</b> умная маршрутизация.</li>
              <li>• <b>CV Acceptance:</b> авто-приемка.</li>
              <li>• <b>Returns:</b> анализ причин.</li>
            </ul>
            <div className="mt-auto pt-4 border-t border-industrial-800">
              <div className="text-orange-400 font-bold text-xl">-10-25%</div>
              <div className="text-[10px] text-industrial-500 uppercase">Затраты на логистику</div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. ECONOMICS */}
      <section className="bg-industrial-900 py-20 border-y border-industrial-800 mb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
             <div className="w-10 h-10 bg-industrial-800 rounded-full flex items-center justify-center text-white font-bold border border-industrial-600">9</div>
             <h2 className="text-3xl font-bold text-white">P&L-фокус: управляемая экономика AI</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-industrial-300 mb-6 leading-relaxed">
                Каждая модель считается в рублях, а не в accuracy. Data Scientists часто хвастаются точностью 95%, но бизнес не видит денег. Мы строим Unit-экономику каждой модели.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-industrial-300">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2" />
                  <span><b>Unit-экономика:</b> затраты на разработку/инфраструктуру vs эффект.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-industrial-300">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2" />
                  <span><b>Связка метрик:</b> точность модели → снижение брака → рубли.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-industrial-300">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2" />
                  <span><b>Мониторинг ROI в production:</b> какие модели деградировали.</span>
                </li>
              </ul>
            </div>

            <div className="bg-industrial-950 p-6 rounded-xl border border-industrial-800">
              <h4 className="text-white font-bold mb-4 border-b border-industrial-800 pb-2 flex items-center gap-2">
                <LineChart size={18} className="text-industrial-500" /> Фреймворк оценки
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-industrial-900 rounded">
                  <span className="text-industrial-400 text-sm">Технические</span>
                  <span className="text-white font-mono text-xs">Accuracy, Precision, Recall, F1</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-industrial-900 rounded">
                  <span className="text-industrial-400 text-sm">Операционные</span>
                  <span className="text-white font-mono text-xs">Latency, Throughput, Uptime</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-industrial-900/50 border border-emerald-900/30 rounded">
                  <span className="text-emerald-400 font-bold text-sm">Бизнес-метрики</span>
                  <span className="text-emerald-400 font-mono text-xs font-bold">ΔRevenue, ΔCost, ROI, Payback</span>
                </div>
              </div>
              <div className="mt-4 text-[10px] text-industrial-500 italic">
                Пример: CV контроль качества. Разработка 2.1 млн. Инфраструктура 0.45 млн/год. Эффект 3.8 млн/год. ROI 245%.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ROADMAP */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Как начать: управляемый запуск</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <div className="bg-industrial-900 border-t-4 border-purple-500 p-6 rounded-b-xl relative">
            <div className="text-purple-500 font-bold uppercase text-xs mb-2">Фаза 1 (3-4 недели)</div>
            <h3 className="text-xl font-bold text-white mb-4">Диагностика и Стратегия</h3>
            <ul className="space-y-3 text-sm text-industrial-300">
              <li>• <b>Неделя 1:</b> Аудит AI-зрелости (данные, команда).</li>
              <li>• <b>Неделя 2:</b> Сбор бизнес-гипотез, интервью.</li>
              <li>• <b>Неделя 3:</b> Приоритизация, расчет черновой экономики.</li>
              <li>• <b>Неделя 4:</b> Дорожная карта на 12-24 мес.</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-industrial-900 border-t-4 border-cyan-500 p-6 rounded-b-xl relative">
            <div className="text-cyan-500 font-bold uppercase text-xs mb-2">Фаза 2 (3-6 месяцев)</div>
            <h3 className="text-xl font-bold text-white mb-4">Пилотные проекты</h3>
            <ul className="space-y-3 text-sm text-industrial-300">
              <li>• Выбор 2-3 кейсов с быстрым результатом.</li>
              <li>• MVP моделей, обучение, валидация.</li>
              <li>• Измерение бизнес-эффекта (факт, не гипотеза).</li>
              <li>• Обкатка MLOps процессов.</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="bg-industrial-900 border-t-4 border-emerald-500 p-6 rounded-b-xl relative">
            <div className="text-emerald-500 font-bold uppercase text-xs mb-2">Фаза 3 (6-18 месяцев)</div>
            <h3 className="text-xl font-bold text-white mb-4">Масштабирование</h3>
            <ul className="space-y-3 text-sm text-industrial-300">
              <li>• Тиражирование успешных кейсов.</li>
              <li>• Построение единой ML-платформы.</li>
              <li>• Формализация процессов (Idea to Prod за 8-12 нед).</li>
              <li>• Непрерывный мониторинг экономики.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 11 & 12. Competencies & Context */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Почему AI — отдельная компетенция?</h3>
            <div className="bg-industrial-900 p-6 rounded-xl border border-industrial-800">
               <ul className="space-y-3 text-sm text-industrial-300">
                 <li className="flex gap-2"><X size={16} className="text-red-500 shrink-0" /> <b>AI ≠ Классическая разработка.</b> Код детерминирован, ML вероятностен.</li>
                 <li className="flex gap-2"><GitBranch size={16} className="text-industrial-500 shrink-0" /> <b>Деградация:</b> обычный код не портится, модели — да.</li>
                 <li className="flex gap-2"><Settings size={16} className="text-industrial-500 shrink-0" /> <b>Специфичные практики:</b> Feature Store, Model Registry, Drift Detection.</li>
                 <li className="flex gap-2"><Users size={16} className="text-industrial-500 shrink-0" /> <b>Дорогие люди:</b> Data Scientists, ML Engineers.</li>
               </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Почему работает для РФ</h3>
            <div className="bg-industrial-900 p-6 rounded-xl border border-industrial-800">
               <ul className="space-y-3 text-sm text-industrial-300">
                 <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <b>Фокус на деньгах:</b> рубли важнее accuracy.</li>
                 <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <b>Сквозной подход:</b> единые данные для всех отделов.</li>
                 <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <b>Реалистичность:</b> санкции, Open Source, грязные данные.</li>
                 <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <b>Технологическая независимость:</b> On-premise.</li>
               </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 border border-purple-500/30 rounded-2xl p-12 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold text-white mb-6 relative z-10">
            Готовы превратить AI-хаос в управляемый рост?
          </h2>
          <p className="text-white/80 mb-8 relative z-10 max-w-2xl mx-auto">
            Начните с бесплатной диагностической сессии (90 минут).<br />
            Аудит зрелости, 3-5 приоритетных кейсов, оценка эффекта в рублях.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a 
              href="tel:+79879176580"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:scale-105"
            >
              <Phone size={20} />
              Позвонить +7 (987) 917 65 80
            </a>
          </div>
          
          <p className="text-xs text-purple-200 mt-6 relative z-10">
            Без обязательств. Вы получите чек-лист возможностей, даже если не пойдете дальше.
          </p>
        </div>
      </section>

    </div>
  );
};

export default AIServices;
