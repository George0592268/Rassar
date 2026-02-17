
import React from 'react';
import { Briefcase, FileText, Flag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-industrial-950">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-3 border-l-2 border-industrial-accent pl-4">
              <span className="text-industrial-400 font-mono text-sm tracking-widest uppercase">
                Инжиниринг + Программирование
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-900/20 border border-red-900/50 rounded">
              <Flag size={12} className="text-red-500" />
              <span className="text-red-400 font-mono text-[10px] tracking-widest uppercase">
                Made in Russia
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 font-sans">
            Стратегическое управление <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-industrial-500">
              производственным процессом
            </span>
          </h1>

          <p className="text-xl text-industrial-300 max-w-2xl mb-10 leading-relaxed font-light border-l border-industrial-800 pl-6">
            Мы — команда программистов и инженеров. Объединяем советскую научную школу и
            современные алгоритмы, чтобы снижать себестоимость и возвращать контроль над
            производством.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => navigate('/services')}
              className="group flex items-center justify-between px-6 py-4 bg-industrial-900 border border-industrial-700 hover:border-industrial-accent rounded-none min-w-[240px] transition-all cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <Briefcase size={20} className="text-industrial-accent" />
                <div className="flex flex-col text-left">
                  <span className="text-white font-bold text-sm uppercase tracking-wider">
                    Наши Услуги
                  </span>
                  <span className="text-industrial-500 text-xs">Электромонтаж и Генподряд</span>
                </div>
              </div>
            </button>

            <button
              onClick={() => scrollToSection('process')}
              className="group flex items-center justify-between px-6 py-4 bg-transparent border border-industrial-700 hover:bg-industrial-800 rounded-none min-w-[240px] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <FileText size={20} className="text-industrial-400 group-hover:text-white" />
                <div className="flex flex-col text-left">
                  <span className="text-industrial-300 group-hover:text-white font-bold text-sm uppercase tracking-wider transition-colors">
                    План обследования
                  </span>
                  <span className="text-industrial-600 text-xs">Регламент работ</span>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-industrial-800 border border-industrial-800 max-w-4xl">
          {[
            { label: 'Энергетика', value: 'E', sub: 'Оптимизация' },
            { label: 'Безопасность', value: 'S', sub: 'Охрана труда' },
            { label: 'Управление', value: 'M', sub: 'АСУТП & ERP' },
            { label: 'Цифра', value: 'D', sub: 'Software' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-industrial-950 p-6 group hover:bg-industrial-900 transition-colors cursor-default"
            >
              <div className="text-industrial-600 text-xs font-mono uppercase mb-2">
                {item.label}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white font-mono">{item.value}</span>
                <span className="h-px w-8 bg-industrial-800 group-hover:bg-industrial-accent transition-colors" />
              </div>
              <div className="text-industrial-500 text-sm mt-2">{item.sub}</div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2 text-industrial-600 font-mono text-xs">
          <span>ИСХ №06/11.1 ОТ 06.11.2025</span>
          <span>ООО «РАССАР» / ГК «ЭКОФОРВАРД»</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
