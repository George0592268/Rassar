
import React from 'react';
import { ArrowLeft, Cpu, Settings, Zap, Droplets, Lightbulb, Box } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Innovations: React.FC = () => {
  const navigate = useNavigate();

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

      <section className="container mx-auto px-4 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-industrial-accent/50 rounded-full mb-6">
          <Cpu size={14} className="text-industrial-accent" />
          <span className="text-industrial-accent text-xs font-medium uppercase tracking-wider">
            R&D Center
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Научные разработки и Инновации
        </h1>
        <p className="text-industrial-300 text-lg max-w-3xl mx-auto">
          Группа компаний «ЭкоФорвард» совместно с ООО «НИИ Точной механики» ведет непрерывные разработки по повышению энергоэффективности на стыке механики, гидравлики и электротехники.
        </p>
      </section>

      {/* High Efficiency Motors & Mechanics */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Settings className="text-orange-500" />
              Механика и Трибология
            </h2>
            <div className="space-y-6">
              <div className="bg-industrial-900 p-6 rounded-xl border border-industrial-800">
                <h3 className="text-lg font-bold text-white mb-2">Высокоэффективные редукторы</h3>
                <p className="text-industrial-400 text-sm leading-relaxed mb-4">
                  Ведутся разработки по уменьшению потерь энергии в механических агрегатах. Потери в механической передаче переходят в потери электрической энергии. Созданы редукторы с уникальным зацеплением.
                </p>
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs">
                  <Zap size={14} />
                  <span>Снижение потерь на 20-25%</span>
                </div>
              </div>

              <div className="bg-industrial-900 p-6 rounded-xl border border-industrial-800">
                <h3 className="text-lg font-bold text-white mb-2">Ревитализанты для масла</h3>
                <p className="text-industrial-400 text-sm leading-relaxed mb-4">
                  Специальные присадки для редукторов и механизмов, снижающие трение и восстанавливающие поверхности.
                </p>
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs">
                  <Zap size={14} />
                  <span>Дополнительное снижение потерь на 8-10%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full min-h-[300px] bg-gradient-to-br from-industrial-900 to-industrial-800 rounded-2xl border border-industrial-700 p-8 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, #f97316 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
            <div className="text-center relative z-10">
              <div className="text-6xl font-bold text-white mb-2">4</div>
              <div className="text-industrial-300 font-medium">Ступени повышения<br />эффективности</div>
              <p className="text-industrial-500 text-sm mt-4 max-w-xs mx-auto">
                Комплексный подход: Двигатель + Редуктор + Масло + Управление
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* High Voltage ITN-V */}
      <section className="bg-industrial-900 py-20 border-y border-industrial-800 mb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Zap className="text-purple-500" />
                Высоковольтные системы (ИТН-В)
              </h2>
              <p className="text-industrial-400 mb-6">
                Уникальные разработки для напряжения 6-10 кВ. Решения для энергоемких производств, НПЗ и Водоканалов.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                  <span className="text-industrial-300 text-sm">Внедрение на приводах насосов 6-10 кВ (Водоканал г. Салават).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                  <span className="text-industrial-300 text-sm">Станции пожаротушения НПЗ.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                  <span className="text-industrial-300 text-sm">Доведение характеристик для массового внедрения.</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-industrial-950 p-6 rounded-xl border border-industrial-800">
                <h4 className="text-white font-bold mb-2">На входные шины</h4>
                <p className="text-industrial-500 text-sm">Инновационные устройства для общей компенсации и фильтрации гармоник на вводе предприятия.</p>
              </div>
              <div className="bg-industrial-950 p-6 rounded-xl border border-industrial-800">
                <h4 className="text-white font-bold mb-2">На нагрузку</h4>
                <p className="text-industrial-500 text-sm">Уникальные устройства для параллельного подключения непосредственно к клеммам высоковольтных двигателей.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pumps & TRIZ */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-industrial-900 border border-industrial-800 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Droplets size={64} />
            </div>
            <div className="flex items-center gap-2 mb-4 text-blue-400">
              <Droplets size={20} />
              <span className="font-mono text-sm uppercase font-bold">Гидродинамика</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Высокоэффективные насосы</h3>
            <p className="text-industrial-300 text-sm leading-relaxed mb-6">
              Совместно с ООО "НИИ Точной механики" разработаны насосы для перекачки больших объемов жидкости.
            </p>
            <ul className="space-y-2 text-sm text-industrial-400 mb-6">
              <li>• Высокая надежность и долговечность.</li>
              <li>• В разы энергоэффективнее стандартных центробежных.</li>
              <li>• Возможность исполнения из нержавеющей стали.</li>
            </ul>
          </div>

          <div className="bg-industrial-900 border border-industrial-800 rounded-2xl p-8 relative overflow-hidden group hover:border-yellow-500/50 transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Lightbulb size={64} />
            </div>
            <div className="flex items-center gap-2 mb-4 text-yellow-500">
              <Lightbulb size={20} />
              <span className="font-mono text-sm uppercase font-bold">Методология ТРИЗ</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Композитные колеса</h3>
            <p className="text-industrial-300 text-sm leading-relaxed mb-6">
              Решение технического противоречия на цементных заводах. Налипание материала вызывало дисбаланс и разрушение подшипников.
            </p>
            <div className="bg-industrial-950 p-4 rounded-lg border border-industrial-800">
              <p className="text-industrial-400 text-xs italic">
                "Разработано рабочее колесо из комбинированных композитных материалов, которое не позволяет налипать технологическим порошкам. Исключено множество ремонтов."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment List */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <Box className="text-industrial-500" />
          Номенклатура производимого оборудования
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "УКРМ (0.4…0.69 кВ)",
              desc: "Контакторные, тиристорные и с антирезонансными дросселями (АКУ, УКМ58).",
              tag: "Низкое напряжение"
            },
            {
              title: "КРМ (6.3…35 кВ)",
              desc: "Высоковольтные установки (УККРМ, УКЛ56, БСК).",
              tag: "Высокое напряжение"
            },
            {
              title: "БСК (6.3…110 кВ)",
              desc: "Батареи статических компенсаторов мощностью 1..52 Мвар.",
              tag: "Сверхмощные"
            },
            {
              title: "Фильтры гармоник",
              desc: "ФКУ и Активные фильтры для очистки сети.",
              tag: "Качество сети"
            },
            {
              title: "Косинусные конденсаторы",
              desc: "1…1000 квар, 0.4…35 кВ.",
              tag: "Комплектующие"
            },
            {
              title: "Реакторы и Дроссели",
              desc: "Антирезонансные дроссели и токоограничивающие реакторы.",
              tag: "Защита"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-industrial-900 border border-industrial-800 p-5 rounded-lg">
              <div className="text-[10px] text-industrial-500 uppercase tracking-widest mb-2">{item.tag}</div>
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-industrial-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Innovations;
