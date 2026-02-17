
import React, { useState } from 'react';
import { ArrowLeft, X, Phone, ShieldCheck, Banknote, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MODULES_DATA, CATEGORY_CONFIG, LEVEL_CONFIG } from '../constants';
import { ModuleCategory, ModuleItem } from '../types';

const ModulesCatalog: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<ModuleCategory | 'ALL'>('ALL');
  const [selectedModule, setSelectedModule] = useState<ModuleItem | null>(null);

  const filteredModules = MODULES_DATA.filter(
    (m) => filter === 'ALL' || m.category === filter
  );

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

      <section className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Каталог Модулей ГИГТ
        </h1>
        <p className="text-industrial-300 text-lg max-w-2xl">
          Выберите категорию для фильтрации или нажмите на модуль для подробностей.
        </p>
      </section>

      <section className="container mx-auto px-4 mb-10">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setFilter('ALL')}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === 'ALL'
                ? 'bg-white text-industrial-900'
                : 'bg-industrial-800 text-industrial-400 hover:text-white hover:bg-industrial-700'
            }`}
          >
            Все
          </button>
          {Object.keys(CATEGORY_CONFIG).map((cat) => {
            const category = cat as ModuleCategory;
            const config = CATEGORY_CONFIG[category];
            return (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all border ${
                  filter === category
                    ? `${config.bg} ${config.color} ${config.border}`
                    : 'bg-industrial-800 border-transparent text-industrial-400 hover:text-white hover:bg-industrial-700'
                }`}
              >
                {config.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => {
            const catConfig = CATEGORY_CONFIG[module.category];
            const Icon = catConfig.icon;
            const levelConfig = LEVEL_CONFIG[module.level];

            return (
              <div
                key={module.id}
                onClick={() => setSelectedModule(module)}
                className="bg-industrial-900 border border-industrial-800 rounded-xl p-6 hover:border-industrial-500 hover:bg-industrial-800 transition-all cursor-pointer flex flex-col group h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded ${catConfig.bg} ${catConfig.color}`}>
                    <Icon size={20} />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-1 rounded border border-current opacity-70 ${levelConfig.color}`}>
                    {levelConfig.label}
                  </span>
                </div>
                <div className="text-xs font-mono text-industrial-500 mb-1">
                  {module.code}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-industrial-accent transition-colors">
                  {module.name}
                </h3>
                <p className="text-sm text-industrial-400 mb-6 flex-grow line-clamp-3">
                  {module.description}
                </p>
                <div className="pt-4 border-t border-industrial-800 flex justify-between items-center mt-auto">
                  <div className="text-xs text-industrial-500">
                    Узнать цену <ArrowRight size={12} className="inline ml-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {selectedModule && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-industrial-900 border border-industrial-700 rounded-2xl max-w-lg w-full shadow-2xl relative overflow-hidden">
            <div className="p-6 border-b border-industrial-800 relative">
              <button
                onClick={() => setSelectedModule(null)}
                className="absolute top-4 right-4 text-industrial-400 hover:text-white"
              >
                <X size={24} />
              </button>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-bold px-2 py-1 rounded ${CATEGORY_CONFIG[selectedModule.category].bg} ${CATEGORY_CONFIG[selectedModule.category].color}`}>
                  {CATEGORY_CONFIG[selectedModule.category].label}
                </span>
                <span className="text-industrial-500 text-xs font-mono">
                  {selectedModule.code}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white">{selectedModule.name}</h2>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-industrial-300 uppercase tracking-wider mb-2">
                  Описание
                </h4>
                <p className="text-industrial-400 leading-relaxed">
                  {selectedModule.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-industrial-300 uppercase tracking-wider mb-2">
                  Результат внедрения
                </h4>
                <ul className="space-y-2">
                  {selectedModule.impact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-white">
                      <ShieldCheck size={16} className="text-green-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-industrial-950 p-4 rounded-lg">
                <div>
                  <div className="text-xs text-industrial-500 mb-1 flex items-center gap-1">
                    <Banknote size={12} /> Стоимость
                  </div>
                  <div className="text-lg font-bold text-white">
                    {selectedModule.costRange}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-industrial-500 mb-1">Окупаемость</div>
                  <div className="text-lg font-bold text-industrial-accent">
                    {selectedModule.paybackPeriod}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-industrial-950 border-t border-industrial-800">
              <a
                href="tel:+79879176580"
                className="w-full bg-industrial-accent hover:bg-sky-400 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02]"
              >
                <Phone size={20} />
                Позвонить и обсудить
              </a>
              <p className="text-center text-[10px] text-industrial-600 mt-3">
                Прямая линия с экспертом: +7 (987) 917 65 80
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModulesCatalog;
