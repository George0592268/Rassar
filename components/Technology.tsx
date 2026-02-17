import React from 'react';
import { Layers, Cpu, FileCheck, ArrowRight, BarChart2, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Technology: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="technology" className="py-24 bg-industrial-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-industrial-800/20 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-industrial-accent/30 bg-industrial-accent/10 rounded-sm">
                <Layers size={14} className="text-industrial-accent" />
                <span className="text-industrial-accent font-mono text-xs tracking-widest uppercase font-bold">
                  Модуль E1.1 / E2.1
                </span>
              </div>
              <span className="text-industrial-500 text-xs uppercase tracking-widest">
                Категория: Энергоэффективность
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              ИТН: Интегратор Токов и Напряжений
            </h2>
            <p className="text-industrial-400 leading-relaxed mb-8 text-justify border-l-2 border-industrial-700 pl-4">
              Это <b>флагманский аппаратный модуль</b> системы ГИГТ. Модернизированный
              фильтрующий конденсатор сборный с токодемпфирующими функциями (ФКТФ). Решает
              физические проблемы электросети, которые невозможно устранить программными
              методами.
            </p>

            <div className="space-y-6">
              <div className="relative bg-industrial-800/50 p-4 rounded border border-industrial-700/50">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <Cpu size={18} className="text-industrial-500" />
                  Принцип действия
                </h4>
                <p className="text-sm text-industrial-400">
                  Шунтирование импульсов тока нагрузки и компенсация реактивной энергии.
                  Ограничивает токи зарядки конденсаторов, позволяя обойтись без специальной
                  коммутационной аппаратуры.
                </p>
              </div>

              <div className="relative bg-industrial-800/50 p-4 rounded border border-industrial-700/50">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <FileCheck size={18} className="text-industrial-500" />
                  Патентная база
                </h4>
                <p className="text-sm text-industrial-400">
                  Защищено патентами РФ на полезную модель <br />
                  <span className="text-white font-mono">№165904</span>,{' '}
                  <span className="text-white font-mono">№184462</span>.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('audit')}
                className="inline-flex items-center gap-2 text-industrial-accent hover:text-white transition-colors font-medium text-sm group cursor-pointer"
              >
                <span>Необходим предварительный аудит сети</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('comparison')}
                className="inline-flex items-center gap-2 text-industrial-300 hover:text-white transition-colors font-medium text-sm group cursor-pointer"
              >
                <BarChart2 size={16} />
                <span>Сравнить с аналогами</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-industrial-950 border border-industrial-800 p-1 rounded-sm shadow-2xl relative">
              <div className="absolute -top-2 -right-2 bg-industrial-700 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                Hardware Solution
              </div>
              <div className="bg-industrial-900/50 border border-industrial-800/50 p-8">
                <div className="flex justify-between items-start border-b-2 border-industrial-800 pb-6 mb-8">
                  <div>
                    <h3 className="text-xl font-mono text-industrial-200 font-bold uppercase">
                      Спецификация ФКТФ
                    </h3>
                    <span className="text-xs text-industrial-600 font-mono">
                      REF: ITN-2025-PRO
                    </span>
                  </div>
                  <Zap className="text-industrial-700" size={32} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                  <div className="group">
                    <div className="text-xs text-industrial-500 font-mono uppercase mb-1 group-hover:text-industrial-accent transition-colors">
                      Коэффициент мощности (cos φ)
                    </div>
                    <div className="text-2xl text-white font-bold font-mono border-b border-industrial-800 pb-2">
                      0,99 ÷ 1.0
                    </div>
                    <div className="text-[10px] text-industrial-600 mt-1">
                      Полная компенсация реактивной энергии
                    </div>
                  </div>

                  <div className="group">
                    <div className="text-xs text-industrial-500 font-mono uppercase mb-1 group-hover:text-industrial-accent transition-colors">
                      Тангенс потерь
                    </div>
                    <div className="text-2xl text-white font-bold font-mono border-b border-industrial-800 pb-2">
                      ≤ 0,003
                    </div>
                    <div className="text-[10px] text-industrial-600 mt-1">
                      Собственные потери LC-цепи
                    </div>
                  </div>

                  <div className="group">
                    <div className="text-xs text-industrial-500 font-mono uppercase mb-1 group-hover:text-industrial-accent transition-colors">
                      Снижение пусковых токов
                    </div>
                    <div className="text-2xl text-white font-bold font-mono border-b border-industrial-800 pb-2">
                      в 3 раза
                    </div>
                    <div className="text-[10px] text-industrial-600 mt-1">
                      Для асинхронных двигателей
                    </div>
                  </div>

                  <div className="group">
                    <div className="text-xs text-industrial-500 font-mono uppercase mb-1 group-hover:text-industrial-accent transition-colors">
                      Время реагирования
                    </div>
                    <div className="text-2xl text-white font-bold font-mono border-b border-industrial-800 pb-2">
                      0.001 сек
                    </div>
                    <div className="text-[10px] text-industrial-600 mt-1">
                      Мгновенная реакция на нагрузку
                    </div>
                  </div>

                  <div className="group">
                    <div className="text-xs text-industrial-500 font-mono uppercase mb-1 group-hover:text-industrial-accent transition-colors">
                      Снижение температуры
                    </div>
                    <div className="text-2xl text-white font-bold font-mono border-b border-industrial-800 pb-2">
                      в 2-3 раза
                    </div>
                    <div className="text-[10px] text-industrial-600 mt-1">
                      Для проводников и обмоток
                    </div>
                  </div>

                  <div className="group">
                    <div className="text-xs text-industrial-500 font-mono uppercase mb-1 group-hover:text-industrial-accent transition-colors">
                      Срок окупаемости
                    </div>
                    <div className="text-2xl text-industrial-accent font-bold font-mono border-b border-industrial-800 pb-2">
                      6 - 36 мес
                    </div>
                    <div className="text-[10px] text-industrial-600 mt-1">
                      В зависимости от режима работы
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-dashed border-industrial-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-industrial-400 font-mono uppercase">
                      Статус: Готов к внедрению
                    </span>
                  </div>
                  <span className="text-xs text-industrial-700 font-mono">MADE IN RUSSIA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
