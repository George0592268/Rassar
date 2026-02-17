import React from 'react';
import { ResponsiveContainer, ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Cpu, Server, Activity } from 'lucide-react';

const LIVE_DATA = [
  { time: '09:00', current: 420, temp: 65 },
  { time: '10:00', current: 432, temp: 68 },
  { time: '11:00', current: 415, temp: 67 },
  { time: '12:00', current: 280, temp: 55 },
  { time: '13:00', current: 425, temp: 66 },
  { time: '14:00', current: 430, temp: 69 },
  { time: '15:00', current: 410, temp: 65 },
];

const DigitalTwin: React.FC = () => {
  return (
    <section className="py-20 bg-industrial-950 border-y border-industrial-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-emerald-500/30 bg-emerald-500/10 rounded-full mb-6">
              <Cpu size={14} className="text-emerald-500" />
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Digital Twin
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Мы — программисты.<br />
              Ваше производство — это код.
            </h2>
            <p className="text-industrial-300 text-lg mb-8 leading-relaxed">
              Мы не просто ставим "железо". Мы внедряем <b>цифровых двойников</b> энергосистемы. Наши нейросети анализируют гармоники, предсказывают отказы двигателей и автоматически оптимизируют режимы работы.<br /><br />
              Вы видите пульс своего завода в реальном времени.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-industrial-400">
                <div className="w-8 h-8 bg-industrial-800 rounded flex items-center justify-center text-industrial-accent">
                  <Server size={18} />
                </div>
                <span>Сбор данных с 10 000+ точек (IoT)</span>
              </li>
              <li className="flex items-center gap-3 text-industrial-400">
                <div className="w-8 h-8 bg-industrial-800 rounded flex items-center justify-center text-orange-500">
                  <Activity size={18} />
                </div>
                <span>Предиктивная аналитика отказов</span>
              </li>
              <li className="flex items-center gap-3 text-industrial-400">
                <div className="w-8 h-8 bg-industrial-800 rounded flex items-center justify-center text-emerald-500">
                  <Activity size={18} />
                </div>
                <span>Удаленный мониторинг 24/7</span>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-industrial-900 border border-industrial-700 rounded-xl p-1 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-xl" />
              
              <div className="bg-industrial-800 px-4 py-2 flex items-center gap-2 rounded-t-lg border-b border-industrial-700">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="ml-4 text-[10px] text-industrial-400 font-mono bg-industrial-900 px-2 py-0.5 rounded">
                  RASSAR_SCADA_v2.4.exe
                </div>
              </div>

              <div className="p-6 bg-industrial-950 rounded-b-lg font-mono">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-industrial-900/50 p-3 rounded border border-industrial-800">
                    <div className="text-[10px] text-industrial-500 uppercase">Нагрузка сети</div>
                    <div className="text-emerald-400 font-bold text-lg">84%</div>
                  </div>
                  <div className="bg-industrial-900/50 p-3 rounded border border-industrial-800">
                    <div className="text-[10px] text-industrial-500 uppercase">Cos φ (avg)</div>
                    <div className="text-industrial-accent font-bold text-lg">0.99</div>
                  </div>
                  <div className="bg-industrial-900/50 p-3 rounded border border-industrial-800">
                    <div className="text-[10px] text-industrial-500 uppercase">Экономия (ч)</div>
                    <div className="text-white font-bold text-lg">+12 кВт</div>
                  </div>
                </div>

                <div className="h-48 w-full bg-industrial-900/30 rounded border border-industrial-800/50 p-2 mb-4 relative">
                  <div className="absolute top-2 left-4 text-[10px] text-industrial-500">
                    Двигатель №4 (Компрессор) - Ток / Температура
                  </div>
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={LIVE_DATA}>
                      <defs>
                        <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                      <XAxis
                        dataKey="time"
                        stroke="#475569"
                        fontSize={10}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', fontSize: '10px' }}
                        itemStyle={{ padding: 0 }}
                      />
                      <Area
                        type="monotone"
                        dataKey="current"
                        stroke="#0ea5e9"
                        fillOpacity={1}
                        fill="url(#colorCurrent)"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="temp"
                        stroke="#f97316"
                        strokeWidth={2}
                        dot={false}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>

                <div className="text-[10px] text-industrial-400 h-24 overflow-hidden border-t border-industrial-800 pt-2">
                  <div className="flex gap-2">
                    <span className="text-industrial-600">14:02:05</span> <span className="text-emerald-500">[INFO]</span> ИТН модуль #4 активен. Компенсация 100%.
                  </div>
                  <div className="flex gap-2">
                    <span className="text-industrial-600">14:05:12</span> <span className="text-emerald-500">[INFO]</span> Вибрация подшипника в норме (2.1 мм/с).
                  </div>
                  <div className="flex gap-2">
                    <span className="text-industrial-600">14:10:00</span> <span className="text-yellow-500">[WARN]</span> Пиковая нагрузка на вводе 2. Подключение резерва...
                  </div>
                  <div className="flex gap-2">
                    <span className="text-industrial-600">14:10:01</span> <span className="text-emerald-500">[OK]</span> Резерв подключен. Просадки нет.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTwin;
