
import React from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ModulesCatalog from './components/ModulesCatalog';
import AuditPlan from './components/AuditPlan';
import Technology from './components/Technology';
import Calculator from './components/Calculator';
import DigitalTwin from './components/DigitalTwin';
import Footer from './components/Footer';
import Services from './components/Services';
import Innovations from './components/Innovations';
import AIServices from './components/AIServices';
import ElectricalServices from './components/ElectricalServices';
import {
  LayoutGrid,
  ArrowRight,
  Minus,
  X,
  BarChart2,
  Zap,
  Check,
  ShieldCheck,
  Shield,
  Thermometer,
  XCircle,
  Activity,
  TrendingUp,
  MapPin,
  CheckCircle2,
  Factory,
  Settings,
  CheckCircle,
  Search,
  FileText,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  ClipboardList,
  TramFront,
  Droplets,
  Server,
  GraduationCap,
  Lightbulb,
  FlaskConical,
  Wrench,
  Flag,
} from 'lucide-react';
import { CASE_STUDIES, FAQ_DATA } from './constants';

const ModulesSection = () => {
  const nav = useNavigate();

  return (
    <section id="modules" className="py-20 bg-industrial-900 border-t border-industrial-800">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-industrial-500 rounded-full mb-6">
          <LayoutGrid size={14} className="text-industrial-300" />
          <span className="text-industrial-300 text-xs font-medium uppercase tracking-wider">
            Архитектура
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          75 Модулей Цифровизации
        </h2>
        <p className="text-industrial-400 max-w-2xl mx-auto mb-10 text-lg">
          Мы не предлагаем "коробочные" решения, которые не работают. Мы собрали библиотеку из
          75 проверенных модулей: от аппаратных решений (ИТН) до AI-аналитики. Соберите свою
          операционную систему завода.
        </p>
        <button
          onClick={() => nav('/services')}
          className="inline-flex items-center gap-3 bg-industrial-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-sky-400 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] group hover:scale-105"
        >
          <span>Перейти к услугам</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto opacity-50">
          <div className="p-4 border border-industrial-700 rounded">Энергоэффективность</div>
          <div className="p-4 border border-industrial-700 rounded">АСУТП и SCADA</div>
          <div className="p-4 border border-industrial-700 rounded">
            Предиктивная диагностика
          </div>
          <div className="p-4 border border-industrial-700 rounded">Безопасность (AI)</div>
        </div>
      </div>
    </section>
  );
};

const ComparisonTable = () => (
  <section id="comparison" className="py-20 bg-industrial-950 border-b border-industrial-800">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Сравнение технологий</h2>
        <p className="text-industrial-400 max-w-2xl mx-auto">
          Почему инженеры выбирают ИТН (ФКТФ) вместо стандартных конденсаторных установок (АКУ)
          и дорогих частотных преобразователей (ЧРП).
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr>
              <th className="p-4 text-left text-industrial-400 font-mono text-sm uppercase tracking-wider border-b border-industrial-700 w-1/3">
                Параметр
              </th>
              <th className="p-4 text-center text-industrial-accent font-bold text-lg border-b-2 border-industrial-accent bg-industrial-900/50 w-1/5">
                ИТН (ФКТФ)
                <div className="text-[10px] text-industrial-500 font-normal mt-1">
                  Наша разработка
                </div>
              </th>
              <th className="p-4 text-center text-industrial-300 border-b border-industrial-700 w-1/5">
                АКУ / КРМ
                <div className="text-[10px] text-industrial-500 font-normal mt-1">
                  Конденсаторы
                </div>
              </th>
              <th className="p-4 text-center text-industrial-300 border-b border-industrial-700 w-1/5">
                ЧРП
                <div className="text-[10px] text-industrial-500 font-normal mt-1">
                  Частотники
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-industrial-800">
            <tr className="hover:bg-industrial-900/30 transition-colors">
              <td className="p-4 text-white font-medium">Снижение реактивной мощности</td>
              <td className="p-4 text-center text-green-400 font-bold bg-industrial-900/50">
                100%
              </td>
              <td className="p-4 text-center text-industrial-300">95%</td>
              <td className="p-4 text-center text-industrial-500">
                <Minus size={16} className="mx-auto" />
              </td>
            </tr>
            <tr className="hover:bg-industrial-900/30 transition-colors">
              <td className="p-4 text-white font-medium">Снижение высших гармоник</td>
              <td className="p-4 text-center text-green-400 font-bold bg-industrial-900/50">
                100%
              </td>
              <td className="p-4 text-center text-red-400">
                <X size={16} className="mx-auto" />
              </td>
              <td className="p-4 text-center text-industrial-300">90%</td>
            </tr>
            <tr className="hover:bg-industrial-900/30 transition-colors">
              <td className="p-4 text-white font-medium">Собственные потери (tg потерь)</td>
              <td className="p-4 text-center text-green-400 font-bold bg-industrial-900/50">
                3×10⁻⁴
              </td>
              <td className="p-4 text-center text-industrial-300">0,8</td>
              <td className="p-4 text-center text-industrial-300">1,0</td>
            </tr>
            <tr className="hover:bg-industrial-900/30 transition-colors">
              <td className="p-4 text-white font-medium">Время реагирования</td>
              <td className="p-4 text-center text-green-400 font-bold bg-industrial-900/50">
                0,001 сек
              </td>
              <td className="p-4 text-center text-industrial-300">1,0 сек</td>
              <td className="p-4 text-center text-industrial-300">1,0 сек</td>
            </tr>
            <tr className="hover:bg-industrial-900/30 transition-colors">
              <td className="p-4 text-white font-medium">Снижение нагрева оборудования</td>
              <td className="p-4 text-center text-green-400 font-bold bg-industrial-900/50">
                90%
              </td>
              <td className="p-4 text-center text-industrial-300">10%</td>
              <td className="p-4 text-center text-industrial-300">50%</td>
            </tr>
            <tr className="hover:bg-industrial-900/30 transition-colors">
              <td className="p-4 text-white font-medium">Окупаемость (лет)</td>
              <td className="p-4 text-center text-green-400 font-bold bg-industrial-900/50">
                0.5 - 2 года
              </td>
              <td className="p-4 text-center text-industrial-300">до 5 лет</td>
              <td className="p-4 text-center text-red-400">8 - 10 лет</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8 text-center">
        <p className="text-industrial-500 text-xs font-mono">
          *Данные на основе сравнительных испытаний и эксплуатации. ИТН не требует сложной
          настройки и не создает помех, в отличие от ЧРП.
        </p>
      </div>
    </div>
  </section>
);

const Patents = () => (
  <section className="py-16 bg-industrial-900 border-b border-industrial-800">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-industrial-800 to-industrial-900 p-8 rounded-2xl border border-industrial-700">
        <div className="md:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <Flag size={24} className="text-red-500" />
            <span className="text-white font-bold uppercase tracking-widest text-sm">
              Технологический Суверенитет
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Разработано и запатентовано в РФ
          </h2>
          <p className="text-industrial-400 text-sm leading-relaxed mb-6">
            Система ГИГТ и модули ИТН являются 100% российской разработкой. Мы не зависим от
            западных лицензий, облачных сервисов или иностранных комплектующих. Это гарантирует
            безопасность для стратегических предприятий (ОПК, Энергетика).
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-industrial-300 text-xs font-mono border border-industrial-600 px-3 py-1 rounded">
              <FileText size={14} />
              Патент №165904
            </div>
            <div className="flex items-center gap-2 text-industrial-300 text-xs font-mono border border-industrial-600 px-3 py-1 rounded">
              <FileText size={14} />
              Патент №184462
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center gap-4 relative">
          <div className="w-32 h-44 bg-white rounded shadow-xl flex flex-col items-center justify-center p-4 transform -rotate-6 border-4 border-industrial-200">
            <div className="w-full h-1/2 border-b border-gray-200 mb-2 flex items-center justify-center">
              <ShieldCheck size={32} className="text-industrial-800" />
            </div>
            <div className="text-[8px] text-center text-gray-800 leading-tight">
              РОССИЙСКАЯ ФЕДЕРАЦИЯ<br />
              <br />
              <b>ПАТЕНТ</b>
              <br />
              НА ПОЛЕЗНУЮ МОДЕЛЬ<br />
              <br />№ 165904
            </div>
          </div>
          <div className="w-32 h-44 bg-white rounded shadow-xl flex flex-col items-center justify-center p-4 transform rotate-6 border-4 border-industrial-200 absolute md:relative left-10 md:left-auto top-2 md:top-auto z-10">
            <div className="w-full h-1/2 border-b border-gray-200 mb-2 flex items-center justify-center">
              <ShieldCheck size={32} className="text-industrial-800" />
            </div>
            <div className="text-[8px] text-center text-gray-800 leading-tight">
              РОССИЙСКАЯ ФЕДЕРАЦИЯ<br />
              <br />
              <b>ПАТЕНТ</b>
              <br />
              НА ПОЛЕЗНУЮ МОДЕЛЬ<br />
              <br />№ 184462
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AuditSection = () => {
  const nav = useNavigate();
  
  return (
    <section id="audit" className="py-20 bg-industrial-900 border-t border-industrial-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-industrial-500 rounded-full mb-4">
            <span className="w-2 h-2 bg-industrial-accent rounded-full animate-pulse"></span>
            <span className="text-industrial-300 text-xs font-medium uppercase tracking-wider">
              Первый этап работы
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Комплексное обследование производства
          </h2>
          <p className="text-industrial-400 text-lg leading-relaxed">
            Невозможно оптимизировать то, что не измерено. Мы проводим глубокий технический
            аудит для разработки Плана-графика внедрения.
          </p>
        </div>

        <div className="mb-16 bg-gradient-to-r from-industrial-900 to-industrial-800 border border-industrial-700 rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-industrial-accent/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="bg-industrial-950 p-4 rounded-full border-2 border-industrial-accent shadow-[0_0_20px_rgba(14,165,233,0.3)]">
              <Zap size={48} className="text-industrial-accent" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Наглядный «Тест-драйв»
              </h3>
              <p className="text-industrial-300">
                Мы не просто обещаем. Мы привозим мобильный стенд, подключаем его к вашей
                машине (до 160 кВт) и в режиме реального времени демонстрируем результат.
              </p>
            </div>
            <a
              href="tel:+79879176580"
              className="bg-industrial-accent hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg whitespace-nowrap"
            >
              Заказать демонстрацию
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 opacity-80">
          <div className="bg-industrial-900 border border-industrial-800 p-6 rounded text-center">
            <ClipboardList size={40} className="mx-auto text-industrial-500 mb-3" />
            <h3 className="text-white font-bold">1. До приезда</h3>
          </div>
          <div className="bg-industrial-800 border border-industrial-600 p-6 rounded text-center shadow-lg scale-105">
            <Search size={40} className="mx-auto text-industrial-accent mb-3" />
            <h3 className="text-white font-bold">2. На площадке (5-7 дней)</h3>
          </div>
          <div className="bg-industrial-900 border border-industrial-800 p-6 rounded text-center">
            <BarChart2 size={40} className="mx-auto text-industrial-500 mb-3" />
            <h3 className="text-white font-bold">3. Отчетность (4 недели)</h3>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => nav('/audit')}
            className="inline-flex items-center gap-2 text-industrial-accent hover:text-white font-bold text-lg transition-colors"
          >
            <span>Изучить подробный план и список документов</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const RealExperience = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'metro':
        return <TramFront size={24} />;
      case 'oil':
        return <Droplets size={24} />;
      case 'server':
        return <Server size={24} />;
      default:
        return <Factory size={24} />;
    }
  };

  return (
    <section className="py-24 bg-industrial-950 border-b border-industrial-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Реальный опыт, а не теория
          </h2>
          <p className="text-industrial-400 max-w-2xl mx-auto">
            Наши решения работают годами на стратегически важных объектах инфраструктуры и
            промышленности.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="group bg-industrial-900 border border-industrial-800 p-8 rounded-xl hover:border-industrial-600 transition-all relative overflow-hidden"
            >
              <div className="absolute -bottom-4 -right-4 text-industrial-800 opacity-20 group-hover:scale-110 transition-transform duration-500">
                {React.cloneElement(getIcon(study.iconName), { size: 120 })}
              </div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-industrial-800 rounded-lg text-industrial-accent border border-industrial-700">
                    {getIcon(study.iconName)}
                  </div>
                  <div className="flex items-center gap-1 text-industrial-500 text-xs font-mono uppercase">
                    <MapPin size={12} />
                    {study.location}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-industrial-accent transition-colors">
                  {study.title}
                </h3>
                <p className="text-industrial-400 text-sm leading-relaxed mb-6 border-l-2 border-industrial-700 pl-4">
                  {study.description}
                </p>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="text-white text-sm font-medium">{study.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImplementationPlan = () => {
  const steps = [
    {
      icon: Search,
      title: 'Обследование',
      duration: '5-7 дней',
      desc: 'Сбор общей информации, анализ документации, выявление «узких мест». Подготовка плана.',
      color: 'text-blue-400',
      border: 'border-blue-400',
    },
    {
      icon: FileText,
      title: 'Отчет и План',
      duration: '4 недели',
      desc: 'Формирование ТЗ на внедрение системы ГИГТ, баланс сырья и ТЭР, расчет ROI, график мероприятий.',
      color: 'text-purple-400',
      border: 'border-purple-400',
    },
    {
      icon: Settings,
      title: 'Внедрение',
      duration: '6-12 месяцев',
      desc: 'Поставка оборудования (ИТН, шкафы), монтаж, наладка, обучение персонала, запуск модулей.',
      color: 'text-orange-400',
      border: 'border-orange-400',
    },
    {
      icon: CheckCircle,
      title: 'Результат',
      duration: 'Постоянно',
      desc: 'Снижение себестоимости, рост производительности, поддержка системы.',
      color: 'text-emerald-400',
      border: 'border-emerald-400',
    },
  ];

  return (
    <section id="process" className="py-20 bg-industrial-900 border-t border-industrial-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            План Внедрения
          </h2>
          <p className="text-industrial-400 max-w-2xl mx-auto mb-8">
            Четкий и прозрачный алгоритм работы от первого аудита до гарантированного
            результата.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-industrial-700 -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="group">
                  <div
                    className={`bg-industrial-800 p-6 rounded-xl border ${step.border} border-opacity-30 hover:border-opacity-100 transition-all h-full flex flex-col shadow-lg relative`}
                  >
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-industrial-700 rounded-full flex items-center justify-center text-sm font-bold text-white border border-industrial-600">
                      {index + 1}
                    </div>
                    <div
                      className={`w-14 h-14 rounded-lg bg-industrial-900 flex items-center justify-center mb-4 ${step.color}`}
                    >
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                    <div className="text-xs font-mono text-industrial-400 uppercase tracking-wider mb-4">
                      {step.duration}
                    </div>
                    <p className="text-sm text-industrial-300 leading-relaxed flex-grow">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

  return (
    <section className="py-20 bg-industrial-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <HelpCircle className="text-industrial-500" />
            Вопросы технических специалистов
          </h2>
          <p className="text-industrial-400">
            Ответы на частые вопросы главных инженеров и энергетиков.
          </p>
        </div>
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div
              key={index}
              className="bg-industrial-950 border border-industrial-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-industrial-800 transition-colors"
              >
                <span className="font-bold text-white pr-4">{item.q}</span>
                {activeIndex === index ? (
                  <ChevronUp className="text-industrial-accent" />
                ) : (
                  <ChevronDown className="text-industrial-500" />
                )}
              </button>
              {activeIndex === index && (
                <div className="p-5 pt-0 text-industrial-300 text-sm leading-relaxed border-t border-industrial-800/50 mt-2">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  const problems = [
    {
      id: 'reactive',
      icon: Zap,
      pain: 'Штрафы за реактивную мощность',
      desc: 'Счета за электроэнергию содержат огромные суммы за реактив. Трансформаторы работают на пределе.',
      solution: 'Модуль E1.1 (ИТН)',
      result:
        'Полная компенсация реактивной энергии (cos φ = 0.99). Снижение платежей и разгрузка трансформаторов на 30%.',
    },
    {
      id: 'heat',
      icon: Thermometer,
      pain: 'Перегрев кабелей и двигателей',
      desc: 'Оборудование горячее, изоляция сохнет, частые пробои. Летом чиллера не справляются.',
      solution: 'Токодемпфирование (ФКТФ)',
      result:
        'Снижение температуры токоведущих частей в 2-3 раза. Уменьшение потерь на нагрев. Продление жизни изоляции.',
    },
    {
      id: 'downtime',
      icon: XCircle,
      pain: 'Аварийные остановки линии',
      desc: 'При запуске мощного двигателя проседает сеть, отключается автоматика или встает весь цех.',
      solution: 'Мягкий пуск и ИТН',
      result:
        'Снижение пусковых токов в 3 раза. Стабильное напряжение сети даже при старте двигателей 400+ кВт.',
    },
    {
      id: 'blind',
      icon: Activity,
      pain: '«Слепое» управление',
      desc: 'Нет понимания, почему вырос расход или когда сломается станок. Ремонтируем только когда уже сломалось.',
      solution: 'Цифровой двойник и Предиктив',
      result:
        'Мониторинг 24/7. Система сама предупреждает об износе подшипника за 2 месяца до аварии.',
    },
  ];

  const [activeProblem, setActiveProblem] = React.useState(problems[0].id);
  const currentProblem = problems.find((p) => p.id === activeProblem) || problems[0];

  return (
    <section className="py-20 bg-industrial-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Какая проблема у вас сейчас?
          </h2>
          <p className="text-industrial-400 max-w-2xl mx-auto">
            В текущих условиях это вопрос выживания. Выберите вашу "боль", чтобы увидеть
            инженерное решение.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex flex-col gap-3">
            {problems.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveProblem(p.id)}
                className={`text-left p-4 rounded-xl border transition-all flex items-center gap-4 group ${
                  activeProblem === p.id
                    ? 'bg-red-900/20 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                    : 'bg-industrial-800 border-industrial-700 hover:bg-industrial-700'
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    activeProblem === p.id
                      ? 'bg-red-500 text-white'
                      : 'bg-industrial-900 text-industrial-500 group-hover:text-white'
                  }`}
                >
                  <p.icon size={20} />
                </div>
                <span
                  className={`font-medium ${
                    activeProblem === p.id
                      ? 'text-white'
                      : 'text-industrial-300 group-hover:text-white'
                  }`}
                >
                  {p.pain}
                </span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <div className="h-full bg-industrial-950 border border-industrial-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-industrial-accent/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 text-red-400 mb-4 font-mono text-sm uppercase tracking-wider">
                  <AlertCircle size={16} />
                  Диагностика проблемы
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{currentProblem.desc}</h3>

                <div className="my-8 border-t border-industrial-800"></div>

                <div className="flex items-center gap-3 text-emerald-400 mb-4 font-mono text-sm uppercase tracking-wider">
                  <CheckCircle size={16} />
                  Решение ГИГТ
                </div>
                <div className="bg-industrial-900/50 border border-industrial-700 p-6 rounded-xl mb-6">
                  <h4 className="text-white font-bold text-lg mb-2">{currentProblem.solution}</h4>
                  <p className="text-industrial-300">{currentProblem.result}</p>
                </div>

                <div className="mt-auto">
                  <a
                    href="#audit"
                    className="inline-flex items-center gap-2 text-white hover:text-industrial-accent transition-colors font-medium"
                  >
                    <span>Рассчитать эффективность для моего случая</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ScientificValues = () => (
  <section className="py-20 bg-industrial-900 relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    />
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-industrial-accent/30 bg-industrial-accent/10 rounded-full mb-6">
            <TrendingUp size={14} className="text-industrial-accent" />
            <span className="text-industrial-accent text-xs font-bold uppercase tracking-wider">
              Синергия Опыта и IT
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Советская научная школа + <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-accent to-purple-500">
              Современный IT-инжиниринг
            </span>
          </h2>
          <p className="text-industrial-300 text-lg mb-8 leading-relaxed">
            Мы — не просто монтажники. Мы — команда программистов и инженеров. В наш научный
            совет входят академики и профессора (химия, теплотехника) с опытом более 50 лет. Мы
            используем методологию <b>ТРИЗ (Теория Решения Изобретательских Задач)</b>,
            усиленную современным ИИ, для поиска нестандартных решений.
          </p>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-industrial-800/80 backdrop-blur p-6 rounded-lg border border-industrial-700 hover:border-industrial-500 transition-colors">
            <GraduationCap size={32} className="text-yellow-500 mb-4" />
            <h3 className="text-white font-bold mb-2">Научный Совет</h3>
            <p className="text-sm text-industrial-400">
              Эксперты старой школы: академики, профессора. Глубокие знания физики процессов,
              химии и теплотехники.
            </p>
          </div>
          <div className="bg-industrial-800/80 backdrop-blur p-6 rounded-lg border border-industrial-700 hover:border-industrial-500 transition-colors">
            <Lightbulb size={32} className="text-industrial-accent mb-4" />
            <h3 className="text-white font-bold mb-2">Методология ТРИЗ</h3>
            <p className="text-sm text-industrial-400">
              Используем алгоритмы Альтшуллера для разрешения технических противоречий, где
              стандартные методы бессильны.
            </p>
          </div>
          <div className="bg-industrial-800/80 backdrop-blur p-6 rounded-lg border border-industrial-700 hover:border-industrial-500 transition-colors">
            <FlaskConical size={32} className="text-emerald-500 mb-4" />
            <h3 className="text-white font-bold mb-2">R&D Лаборатория</h3>
            <p className="text-sm text-industrial-400">
              Разработка уникальных изделий: композитные колеса, ревитализанты, специальные
              редукторы с КПД +25%.
            </p>
          </div>
          <div className="bg-industrial-800/80 backdrop-blur p-6 rounded-lg border border-industrial-700 hover:border-industrial-500 transition-colors">
            <TrendingUp size={32} className="text-purple-500 mb-4" />
            <h3 className="text-white font-bold mb-2">IT & AI Ядро</h3>
            <p className="text-sm text-industrial-400">
              Собственная команда разработчиков. Нейросети для анализа данных, SCADA, цифровые
              двойники.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Production = () => (
  <section
    id="production"
    className="py-20 bg-industrial-950 border-b border-industrial-800 relative overflow-hidden"
  >
    <div
      className="absolute left-0 top-20 w-32 h-full border-l border-industrial-800 opacity-20 pointer-events-none"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, transparent, transparent 49px, #334155 50px)',
      }}
    />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-orange-500/30 bg-orange-500/10 rounded-full mb-4">
          <Factory size={14} className="text-orange-500" />
          <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">
            Реальный сектор
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Собственное производство
        </h2>
        <p className="text-industrial-400 max-w-2xl mx-auto text-lg">
          Мы не перекупаем решения. У нас собственная группа заводов (г. Казань). Мы
          контролируем качество от чертежа до шеф-монтажа.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-industrial-900 p-8 rounded-xl border border-industrial-800 hover:border-industrial-600 transition-all group">
          <div className="w-12 h-12 bg-industrial-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-industrial-700 transition-colors">
            <Zap size={28} className="text-industrial-accent" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Сборка Шкафов Управления</h3>
          <p className="text-industrial-400 text-sm leading-relaxed">
            Серийное производство шкафов с модулями ИТН. Сборка под конкретные задачи
            (метрополитен, насосные станции, вентиляция). Полный цикл испытаний перед
            отгрузкой.
          </p>
        </div>

        <div className="bg-industrial-900 p-8 rounded-xl border border-industrial-800 hover:border-industrial-600 transition-all group">
          <div className="w-12 h-12 bg-industrial-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-industrial-700 transition-colors">
            <Settings size={28} className="text-orange-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Генерация (ГПУ)</h3>
          <p className="text-industrial-400 text-sm leading-relaxed">
            Сборка газопоршневых установок любой мощности (до 3 МВт). Интеграция с нашими
            системами плавного пуска для снижения нагрузки на генератор при старте тяжелых
            двигателей.
          </p>
        </div>

        <div className="bg-industrial-900 p-8 rounded-xl border border-industrial-800 hover:border-industrial-600 transition-all group">
          <div className="w-12 h-12 bg-industrial-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-industrial-700 transition-colors">
            <Wrench size={28} className="text-emerald-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Механика и Трибология</h3>
          <p className="text-industrial-400 text-sm leading-relaxed">
            Производство уникальных редукторов с КПД выше стандартных на 25%. Изготовление
            композитных колес (не требуют чистки). Собственные присадки-ревитализанты.
          </p>
        </div>
      </div>

      <div className="mt-12 p-6 bg-industrial-800/50 rounded-xl border border-dashed border-industrial-700 text-center">
        <p className="text-industrial-300 font-mono text-sm">
          <span className="text-white font-bold">ОТК:</span> Каждое изделие проходит
          стендовые испытания. Мы приглашаем Заказчиков на приемку оборудования на завод.
        </p>
      </div>
    </div>
  </section>
);

const HomePage = () => (
  <>
    <Hero />
    <ProblemSolution />
    <ScientificValues />
    <DigitalTwin />
    <RealExperience />
    <Technology />
    <ComparisonTable />
    <Patents />
    <AuditSection />
    <ModulesSection />
    <Production />
    <ImplementationPlan />
    <Calculator />
    <FAQ />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-industrial-950 min-h-screen text-slate-200 selection:bg-industrial-accent selection:text-white font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/modules" element={<ModulesCatalog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/electrical" element={<ElectricalServices />} />
            <Route path="/innovations" element={<Innovations />} />
            <Route path="/audit" element={<AuditPlan />} />
            <Route path="/ai-services" element={<AIServices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
