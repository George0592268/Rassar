
import React from 'react';
import { ArrowLeft, Zap, Settings, Server, CheckCircle2, Phone, Box } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ElectricalServices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-industrial-950 pt-24 animate-fade-in pb-20">
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
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-yellow-500/50 bg-yellow-500/10 rounded-full mb-6">
          <Zap size={14} className="text-yellow-500" />
          <span className="text-yellow-500 text-xs font-bold uppercase tracking-wider">
            EPC & Engineering
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Электромонтажные <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            работы под ключ
          </span>
        </h1>
        <p className="text-industrial-300 text-lg max-w-3xl border-l-2 border-yellow-500 pl-6 mb-8 leading-relaxed">
          Полный цикл работ: от проектирования до пусконаладки. Мы специализируемся на сложных промышленных объектах, высоковольтных сетях и собственной генерации.
        </p>
      </section>

      {/* Main Services Grid */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-industrial-900 border border-industrial-800 p-8 rounded-2xl relative overflow-hidden group hover:border-yellow-500/30 transition-all">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Settings size={80} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Settings className="text-yellow-500" />
              Монтаж и Пусконаладка
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-yellow-500/10 rounded-lg">
                  <CheckCircle2 size={20} className="text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Собственная генерация</h4>
                  <p className="text-industrial-400 text-sm mt-1">
                    Монтаж "под ключ" газопоршневых (ГПУ) и дизельных электростанций. Обвязка, автоматика, синхронизация с сетью.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-yellow-500/10 rounded-lg">
                  <CheckCircle2 size={20} className="text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Высоковольтные работы</h4>
                  <p className="text-industrial-400 text-sm mt-1">
                    Монтаж кабельных линий, муфт и оборудования классов напряжения 6.3 кВ, 10.5 кВ, 35 кВ и 110 кВ.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-yellow-500/10 rounded-lg">
                  <CheckCircle2 size={20} className="text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Шкафное оборудование</h4>
                  <p className="text-industrial-400 text-sm mt-1">
                    Сборка и установка конденсаторных установок (УКРМ), АВР, ВРУ, шкафов автоматики и управления двигателями.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-industrial-900 border border-industrial-800 p-8 rounded-2xl relative overflow-hidden group hover:border-purple-500/30 transition-all">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Server size={80} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Server className="text-purple-500" />
              Поставка оборудования
            </h3>
            <p className="text-industrial-300 mb-6">
              Мы являемся производителями и прямыми поставщиками ключевых узлов энергосистемы.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: "Регуляторы реактивной мощности", desc: "Микропроцессорные блоки управления" },
                { name: "Контакторы (0.4...35 кВ)", desc: "Электромеханические и вакуумные" },
                { name: "Косинусные конденсаторы", desc: "1...1000 квар, для сетей 0.4...35 кВ" },
                { name: "Антирезонансные дроссели", desc: "Защита от гармоник (134, 189, 210 Гц)" },
                { name: "Токоограничивающие реакторы", desc: "Для сетей 6-10 кВ" }
              ].map((item, idx) => (
                <div key={idx} className="bg-industrial-950 p-4 rounded-lg border border-industrial-800 flex justify-between items-center group/item hover:border-industrial-600 transition-colors">
                  <div>
                    <div className="text-white font-medium">{item.name}</div>
                    <div className="text-industrial-500 text-xs">{item.desc}</div>
                  </div>
                  <Box size={16} className="text-industrial-600 group-hover/item:text-white transition-colors" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Capabilities Strip */}
      <section className="bg-industrial-900 py-16 border-y border-industrial-800 mb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">0.4 - 110</div>
              <div className="text-industrial-400 text-xs font-mono uppercase">Классы напряжения (кВ)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">12+</div>
              <div className="text-industrial-400 text-xs font-mono uppercase">Лет опыта монтажа</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">ГОСТ</div>
              <div className="text-industrial-400 text-xs font-mono uppercase">Соблюдение стандартов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">СРО</div>
              <div className="text-industrial-400 text-xs font-mono uppercase">Все допуски</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-industrial-800 to-industrial-900 p-8 rounded-2xl border border-industrial-700 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">Нужен расчет проекта?</h2>
          <p className="text-industrial-300 mb-8">
            Наши инженеры готовы выехать на объект для оценки объемов работ и составления сметы.
          </p>
          <a href="tel:+79879176580" className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-industrial-950 font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:scale-105">
            <Phone size={20} />
            <span>Вызвать инженера</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ElectricalServices;
