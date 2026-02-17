import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine
} from 'recharts';
import { Calculator as CalculatorIcon, Activity, DollarSign, Clock, Leaf, Zap } from 'lucide-react';
import { CalculatorResult, ProjectionData } from '../types';

const Calculator: React.FC = () => {
  const [avgBill, setAvgBill] = useState(3000000);
  const [tariff, setTariff] = useState(7.5);
  const [motorLoadPct, setMotorLoadPct] = useState(60);
  const [shifts, setShifts] = useState(2);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<CalculatorResult | null>(null);

  const calculate = () => {
    const energyKw = avgBill / tariff;
    // Weighted savings based on motor load percentage
    // If higher motor load, savings potential is slightly higher due to efficiency gains
    const weightedEnergySavingsPct = 0.05 * (1 - motorLoadPct / 100) + 0.25 * (motorLoadPct / 100);
    const maintenanceSavingsPct = 0.2; // 20% maintenance savings

    const monthlyEnergySavings = avgBill * weightedEnergySavingsPct;
    const monthlyMaintenanceSavings = monthlyEnergySavings * maintenanceSavingsPct;
    const totalMonthlySavings = monthlyEnergySavings + monthlyMaintenanceSavings;
    const annualSavings = totalMonthlySavings * 12;

    // Approx implementation cost logic
    const implementationCost = (energyKw / (shifts * 8 * 30)) * 15000 * 0.8;
    const roiMonths = implementationCost / totalMonthlySavings;
    const co2Monthly = (energyKw * weightedEnergySavingsPct * 0.4) / 1000; // tons

    const projectionData: ProjectionData[] = [];
    let cumulativeCashflow = -implementationCost;

    for (let year = 0; year <= 5; year++) {
      projectionData.push({
        year: `Год ${year}`,
        cashflow: Math.round(cumulativeCashflow / 1000), // in thousands
        pureProfit: year === 0 ? 0 : Math.round((cumulativeCashflow + implementationCost) / 1000),
      });
      cumulativeCashflow += annualSavings;
    }

    setResult({
      monthlyEnergySavings,
      monthlyMaintenanceSavings,
      annualSavings,
      implementationCost,
      roiMonths,
      co2Monthly,
      projectionData,
      weightedEnergySavingsPct,
    });
    setShowResult(true);
  };

  return (
    <section id="calculator" className="py-20 bg-industrial-900 border-t border-industrial-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3 bg-industrial-950 p-8 rounded-2xl border border-industrial-800 h-fit sticky top-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-industrial-accent/10 rounded-lg text-industrial-accent">
                <CalculatorIcon size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Калькулятор Эффекта</h2>
                <p className="text-xs text-industrial-500">Точный расчет ROI</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="flex justify-between text-sm text-industrial-300 mb-2">
                  <span>Средний счет за Э/Э (мес)</span>
                  <span className="text-white font-mono">{avgBill.toLocaleString()} ₽</span>
                </label>
                <input
                  type="range"
                  min="100000"
                  max="20000000"
                  step="100000"
                  value={avgBill}
                  onChange={(e) => setAvgBill(Number(e.target.value))}
                  className="w-full h-2 bg-industrial-800 rounded-lg appearance-none cursor-pointer accent-industrial-accent"
                />
              </div>

              <div>
                <label className="flex justify-between text-sm text-industrial-300 mb-2">
                  <span>Тариф (с НДС)</span>
                  <span className="text-white font-mono">{tariff} ₽/кВт·ч</span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="15"
                  step="0.1"
                  value={tariff}
                  onChange={(e) => setTariff(Number(e.target.value))}
                  className="w-full h-2 bg-industrial-800 rounded-lg appearance-none cursor-pointer accent-industrial-accent"
                />
              </div>

              <div>
                <label className="flex justify-between text-sm text-industrial-300 mb-2">
                  <span>Доля двигательной нагрузки</span>
                  <span className="text-industrial-accent font-mono font-bold">{motorLoadPct}%</span>
                </label>
                <p className="text-[10px] text-industrial-500 mb-2">
                  Насосы, вентиляция, компрессоры, станки (индуктивная нагрузка)
                </p>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={motorLoadPct}
                  onChange={(e) => setMotorLoadPct(Number(e.target.value))}
                  className="w-full h-2 bg-industrial-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm text-industrial-300 mb-3">
                  Режим работы предприятия
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((s) => (
                    <button
                      key={s}
                      onClick={() => setShifts(s)}
                      className={`py-2 rounded border text-sm font-medium transition-all ${
                        shifts === s
                          ? 'bg-industrial-accent text-white border-industrial-accent'
                          : 'bg-transparent text-industrial-500 border-industrial-700 hover:text-white'
                      }`}
                    >
                      {s * 8} ч/сут
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={calculate}
                className="w-full bg-white text-industrial-900 hover:bg-industrial-200 font-bold py-4 rounded-lg transition-all shadow-lg mt-4 flex items-center justify-center gap-2"
              >
                <Activity size={18} />
                Рассчитать экономию
              </button>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            {showResult && result ? (
              <div className="animate-fade-in space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-industrial-800 p-5 rounded-xl border border-industrial-700 relative overflow-hidden group">
                    <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                      <DollarSign size={40} />
                    </div>
                    <div className="text-industrial-400 text-xs uppercase tracking-wider mb-1">
                      Годовая выгода
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-400">
                      {(result.annualSavings / 1000000).toFixed(1)} млн ₽
                    </div>
                    <div className="text-[10px] text-industrial-500 mt-2">
                      Прямая экономия + Ресурс
                    </div>
                  </div>

                  <div className="bg-industrial-800 p-5 rounded-xl border border-industrial-700 relative overflow-hidden group">
                    <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Clock size={40} />
                    </div>
                    <div className="text-industrial-400 text-xs uppercase tracking-wider mb-1">
                      Окупаемость
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-industrial-accent">
                      {result.roiMonths.toFixed(1)} мес
                    </div>
                    <div className="text-[10px] text-industrial-500 mt-2">
                      Высокая рентабельность
                    </div>
                  </div>

                  <div className="bg-industrial-800 p-5 rounded-xl border border-industrial-700 relative overflow-hidden group">
                    <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Leaf size={40} />
                    </div>
                    <div className="text-industrial-400 text-xs uppercase tracking-wider mb-1">
                      CO₂ Footprint
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-white">
                      -{result.co2Monthly.toFixed(1)} т
                    </div>
                    <div className="text-[10px] text-industrial-500 mt-2">
                      Ежемесячное снижение
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-industrial-800 p-6 rounded-xl border border-industrial-700">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Zap size={16} className="text-yellow-400" /> Структура экономии
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-industrial-300">Снижение энергопотребления</span>
                          <span className="text-white font-mono">
                            {Math.round(result.monthlyEnergySavings).toLocaleString()} ₽/мес
                          </span>
                        </div>
                        <div className="w-full bg-industrial-900 h-2 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-industrial-accent"
                            style={{ width: '100%' }}
                          ></div>
                        </div>
                        <p className="text-[10px] text-industrial-500 mt-1">
                          Снижение активной мощности, компенсация реактива, уход от штрафов.
                        </p>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-industrial-300">Продление ресурса (ТОиР)</span>
                          <span className="text-white font-mono">
                            {Math.round(result.monthlyMaintenanceSavings).toLocaleString()} ₽/мес
                          </span>
                        </div>
                        <div className="w-full bg-industrial-900 h-2 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500"
                            style={{ width: '35%' }}
                          ></div>
                        </div>
                        <p className="text-[10px] text-industrial-500 mt-1">
                          Снижение вибраций, температуры двигателей, увеличение межремонтных
                          интервалов.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-industrial-800 to-industrial-900 p-6 rounded-xl border border-industrial-700 flex flex-col justify-center">
                    <h4 className="text-white font-bold mb-4">Рекомендация системы</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex gap-2">
                        <span className="text-industrial-accent font-bold">ITN (E1.1):</span>
                        <span className="text-industrial-300">
                          Критически рекомендован ({(result.weightedEnergySavingsPct * 100).toFixed(1)}% потенциал).
                        </span>
                      </li>
                      {motorLoadPct > 50 && (
                        <li className="flex gap-2">
                          <span className="text-orange-400 font-bold">P1.1:</span>
                          <span className="text-industrial-300">
                            Рекомендуем вибродиагностику для оценки износа парка.
                          </span>
                        </li>
                      )}
                      {shifts === 3 && (
                        <li className="flex gap-2">
                          <span className="text-purple-400 font-bold">M2.1:</span>
                          <span className="text-industrial-300">
                            АСУТП для контроля ночных смен.
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="bg-industrial-800 p-6 rounded-xl border border-industrial-700 h-80">
                  <h4 className="text-white font-bold mb-2">
                    Накопительный денежный поток (5 лет)
                  </h4>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={result.projectionData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                      <XAxis dataKey="year" stroke="#64748b" fontSize={12} />
                      <YAxis stroke="#64748b" fontSize={12} tickFormatter={(val) => `${val}к`} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0f172a',
                          borderColor: '#334155',
                          color: '#fff',
                        }}
                        itemStyle={{ color: '#fff' }}
                        formatter={(value: number) => [
                          `${value.toLocaleString()} тыс. ₽`,
                          'Сальдо',
                        ]}
                      />
                      <ReferenceLine y={0} stroke="#94a3b8" />
                      <Area
                        type="monotone"
                        dataKey="cashflow"
                        stroke="#10b981"
                        fillOpacity={1}
                        fill="url(#colorProfit)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex justify-center mt-6">
                  <a
                    href="tel:+79879176580"
                    className="inline-flex items-center gap-2 text-white bg-industrial-accent hover:bg-sky-500 px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:scale-105"
                  >
                    Обсудить этот расчет с инженером
                  </a>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-industrial-600 border-2 border-dashed border-industrial-800 rounded-2xl p-12 bg-industrial-900/50">
                <Activity size={64} className="mb-6 opacity-20" />
                <p className="text-xl font-light text-center">
                  Введите параметры вашего производства <br /> для формирования финансовой модели
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
