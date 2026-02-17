
import React from 'react';
import { 
  ArrowLeft, Brain, FlaskConical, GitBranch, 
  Target, TrendingUp, CheckCircle2, Factory, 
  Flame, Layers, BarChart2, Sigma, ArrowRight,
  Lightbulb, Microscope, Settings
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TrizServices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-industrial-950 pt-24 animate-fade-in pb-20 text-slate-200">
      {/* Navigation */}
      <div className="container mx-auto px-4 mb-8">
        <button
          onClick={() => navigate('/services')}
          className="flex items-center gap-2 text-industrial-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Назад к услугам</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan-500/50 bg-cyan-500/10 rounded-full mb-6">
          <Lightbulb size={14} className="text-cyan-400" />
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
            ТРИЗ + DoE (Design of Experiments)
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Повышение идеальности систем <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            с неявной структурой
          </span>
        </h1>
        <p className="text-industrial-300 text-lg max-w-4xl border-l-4 border-cyan-500 pl-6 py-2 bg-industrial-900/50 leading-relaxed">
          Уникальная методология, объединяющая <b>ТРИЗ</b> (Теорию Решения Изобретательских Задач) и <b>Математическое Планирование Эксперимента (МПЭ)</b>. Мы решаем «неразрешимые» противоречия в системах типа «Черный ящик» (смеси, горение, сложные техпроцессы).
        </p>
      </section>

      {/* Methodology Section */}
      <section className="bg-industrial-900 py-16 border-y border-industrial-800 mb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Системы «Черного Ящика»
              </h2>
              <p className="text-industrial-300 mb-6 leading-relaxed">
                Многие промышленные системы (химические реакторы, котлы, составы материалов) слишком сложны для прямого структурного анализа. Мы используем кибернетический подход:
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-industrial-950 rounded-lg border border-industrial-800">
                  <div className="mt-1 text-cyan-500 font-mono font-bold">X</div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase">Контролируемые факторы</h4>
                    <p className="text-xs text-industrial-400">Параметры, которые мы меняем (расход топлива, фракции щебня, давление).</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-industrial-950 rounded-lg border border-industrial-800">
                  <div className="mt-1 text-red-500 font-mono font-bold">Z</div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase">Помехи и Ограничения</h4>
                    <p className="text-xs text-industrial-400">Неподконтрольные факторы (погода, качество сырья, износ).</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-industrial-950 rounded-lg border border-industrial-800 border-l-4 border-l-emerald-500">
                  <div className="mt-1 text-emerald-500 font-mono font-bold">Y</div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase">Отклик (Целевая функция)</h4>
                    <p className="text-xs text-industrial-400">Параметр оптимизации (КПД, Прочность, Себестоимость), который нужно максимизировать.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-industrial-950 p-8 rounded-2xl border border-industrial-800 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
              <h3 className="text-xl font-bold text-white mb-6 text-center">Схема разрешения противоречий</h3>
              
              <div className="flex justify-between items-center mb-8 relative z-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-industrial-900 rounded-lg flex items-center justify-center border border-industrial-700 mx-auto mb-2">
                    <Settings className="text-cyan-500" />
                  </div>
                  <div className="text-xs font-mono text-industrial-300">Входы (X)</div>
                </div>
                
                <div className="flex-1 px-4 flex flex-col items-center">
                  <div className="w-full h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-industrial-950 px-2 text-xs text-industrial-500 uppercase font-bold">
                      Black Box
                    </div>
                  </div>
                  <div className="mt-2 text-[10px] text-industrial-500 text-center max-w-[150px]">
                    Нейросети + Симплекс-метод
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-industrial-900 rounded-lg flex items-center justify-center border border-industrial-700 mx-auto mb-2">
                    <Target className="text-emerald-500" />
                  </div>
                  <div className="text-xs font-mono text-industrial-300">Идеал (Y)</div>
                </div>
              </div>

              <div className="bg-industrial-900/50 p-4 rounded border border-industrial-800 text-sm text-industrial-300 italic">
                "Оптимизация с помощью МПЭ не противоречит ТРИЗ, а дополняет её, позволяя найти Идеальный Конечный Результат (ИКР) математически точно."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Cases Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex items-center gap-3 mb-10">
          <FlaskConical className="text-cyan-500" />
          <h2 className="text-3xl font-bold text-white">Реализованные проекты</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Case 1: Power Plant */}
          <div className="bg-industrial-900 border border-industrial-800 p-6 rounded-2xl group hover:border-cyan-500/30 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-orange-500/10 rounded-lg">
                <Flame size={24} className="text-orange-500" />
              </div>
              <div className="text-[10px] font-mono text-industrial-500 uppercase">Энергетика</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Оптимизация горения (ЮУрГУ)</h3>
            <p className="text-xs text-industrial-400 mb-4">
              Котельная установка (смесь газа и ВЭР). Задача: найти оптимум подачи воздуха и топлива.
            </p>
            
            <div className="space-y-3 bg-industrial-950 p-4 rounded-lg border border-industrial-800">
              <div className="flex justify-between items-end border-b border-industrial-800 pb-2">
                <span className="text-xs text-industrial-400">Экономия газа</span>
                <span className="text-emerald-400 font-bold font-mono">2.3%</span>
              </div>
              <div className="flex justify-between items-end border-b border-industrial-800 pb-2">
                <span className="text-xs text-industrial-400">Снижение CO</span>
                <span className="text-emerald-400 font-bold font-mono">-70%</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-xs text-industrial-400">Рост КПД</span>
                <span className="text-emerald-400 font-bold font-mono">+1.6%</span>
              </div>
            </div>
          </div>

          {/* Case 2: Hwange */}
          <div className="bg-industrial-900 border border-industrial-800 p-6 rounded-2xl group hover:border-cyan-500/30 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Factory size={24} className="text-purple-500" />
              </div>
              <div className="text-[10px] font-mono text-industrial-500 uppercase">ТЭС (Зимбабве)</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Hwange Power Station</h3>
            <p className="text-xs text-industrial-400 mb-4">
              Угольная ТЭС (300+ МВт). Нейросетевая оптимизация (Bayesian Regularization) режимов работы.
            </p>
            
            <div className="space-y-3 bg-industrial-950 p-4 rounded-lg border border-industrial-800">
              <div className="flex justify-between items-end border-b border-industrial-800 pb-2">
                <span className="text-xs text-industrial-400">Экономия угля</span>
                <span className="text-emerald-400 font-bold font-mono">5%</span>
              </div>
              <div className="flex justify-between items-end border-b border-industrial-800 pb-2">
                <span className="text-xs text-industrial-400">В тоннах/год</span>
                <span className="text-white font-bold font-mono">31 536 т</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-xs text-industrial-400">Эффект (USD)</span>
                <span className="text-emerald-400 font-bold font-mono">$2.2 млн</span>
              </div>
            </div>
          </div>

          {/* Case 3: Mixture Optimization */}
          <div className="bg-industrial-900 border border-industrial-800 p-6 rounded-2xl group hover:border-cyan-500/30 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Layers size={24} className="text-blue-500" />
              </div>
              <div className="text-[10px] font-mono text-industrial-500 uppercase">Материаловедение</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Оптимизация смесей</h3>
            <p className="text-xs text-industrial-400 mb-4">
              Подбор состава бетона (3 фракции щебня). Противоречие: Прочность vs Стоимость.
            </p>
            
            <div className="space-y-3 bg-industrial-950 p-4 rounded-lg border border-industrial-800">
              <div className="flex justify-between items-end border-b border-industrial-800 pb-2">
                <span className="text-xs text-industrial-400">Метод</span>
                <span className="text-white font-mono text-xs">Симплекс-центроид</span>
              </div>
              <div className="flex justify-between items-end border-b border-industrial-800 pb-2">
                <span className="text-xs text-industrial-400">Снижение цены</span>
                <span className="text-emerald-400 font-bold font-mono">10%</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-xs text-industrial-400">Качество</span>
                <span className="text-white font-bold font-mono">Сохранено (R=35МПа)</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Scientific Basis */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-industrial-900 to-industrial-950 p-8 rounded-2xl border border-industrial-800">
          <div className="flex flex-col lg:flex-row gap-8">
             <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Microscope className="text-cyan-500" />
                  Научный фундамент
                </h3>
                <p className="text-industrial-300 mb-6 text-sm leading-relaxed">
                  Мы опираемся на работы научной школы кафедр автоматизации ЮУрГУ, МЭИ и МГТУ им. Баумана. Используются методы:
                </p>
                <ul className="grid grid-cols-1 gap-3">
                  <li className="flex items-center gap-3 bg-industrial-800/50 p-3 rounded border border-industrial-700">
                    <Sigma size={18} className="text-cyan-500" />
                    <span className="text-sm text-white">Динамический факторный анализ</span>
                  </li>
                  <li className="flex items-center gap-3 bg-industrial-800/50 p-3 rounded border border-industrial-700">
                    <GitBranch size={18} className="text-purple-500" />
                    <span className="text-sm text-white">Нейронные сети (Levenberg-Marquardt, SCG)</span>
                  </li>
                  <li className="flex items-center gap-3 bg-industrial-800/50 p-3 rounded border border-industrial-700">
                    <BarChart2 size={18} className="text-emerald-500" />
                    <span className="text-sm text-white">Симплекс-планирование смесей</span>
                  </li>
                </ul>
             </div>
             <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-cyan-500/5 rounded-xl"></div>
                <div className="relative z-10 p-6">
                   <h4 className="text-white font-bold mb-4 text-sm uppercase">Этапы эксперимента (DoE)</h4>
                   <ol className="relative border-l border-industrial-700 space-y-6">
                      <li className="ml-6">
                         <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-industrial-800 rounded-full ring-4 ring-industrial-900 text-xs font-mono text-cyan-500">1</span>
                         <h5 className="font-bold text-white text-sm">Подготовка (Неделя 1)</h5>
                         <p className="text-xs text-industrial-400 mt-1">Калибровка приборов, выбор факторов (2-4), матрица планирования.</p>
                      </li>
                      <li className="ml-6">
                         <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-industrial-800 rounded-full ring-4 ring-industrial-900 text-xs font-mono text-cyan-500">2</span>
                         <h5 className="font-bold text-white text-sm">Эксперимент (Недели 2-3)</h5>
                         <p className="text-xs text-industrial-400 mt-1">Проведение серии опытов (ПФЭ 2^k или Симплекс). Минимум 3 повторения.</p>
                      </li>
                      <li className="ml-6">
                         <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-industrial-800 rounded-full ring-4 ring-industrial-900 text-xs font-mono text-cyan-500">3</span>
                         <h5 className="font-bold text-white text-sm">Обработка (Неделя 4)</h5>
                         <p className="text-xs text-industrial-400 mt-1">Расчет регрессии, проверка критерием Фишера, поиск экстремума.</p>
                      </li>
                   </ol>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">
          Есть неразрешимое техническое противоречие?
        </h2>
        <p className="text-industrial-400 mb-8 max-w-2xl mx-auto">
          Если вы хотите улучшить качество, но это ведет к удорожанию, или повысить мощность, но это ведет к авариям — это задача для ТРИЗ+DoE.
        </p>
        <a 
          href="mailto:safari966@mail.ru?subject=Заявка%20на%20ТРИЗ%20аудит" 
          className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:scale-105"
        >
          <Brain size={20} />
          <span>Обсудить задачу с методологом</span>
        </a>
      </section>

    </div>
  );
};

export default TrizServices;
