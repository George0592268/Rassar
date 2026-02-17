
import React from 'react';
import { 
  ArrowLeft, Flame, Bell, Droplets, Wind, ShieldAlert, 
  FileText, Wrench, CheckCircle2, Phone, Siren, FireExtinguisher
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../assets';

const FireSafetyServices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-industrial-950 pt-24 animate-fade-in pb-20 transition-colors duration-300">
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
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-red-500/50 bg-red-500/10 rounded-full mb-6">
          <ShieldAlert size={14} className="text-red-500" />
          <span className="text-red-500 text-xs font-bold uppercase tracking-wider">
            Лицензия МЧС
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Комплексная <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Пожарная Безопасность
          </span>
        </h1>
        <p className="text-industrial-300 text-lg max-w-3xl border-l-4 border-red-600 pl-6 py-2 leading-relaxed bg-industrial-900/30 pr-4 rounded-r-lg">
          Проектирование, монтаж и обслуживание систем противопожарной защиты (АППЗ). Мы защищаем всё: от серверных стоек до производственных цехов площадью 10 000 м².
        </p>
      </section>

      {/* Hero Image / Diagram Placeholder */}
      <section className="container mx-auto px-4 mb-20">
         <div className="rounded-2xl overflow-hidden h-64 md:h-80 relative border border-industrial-800 group">
            <img 
              src={ASSETS.services.fireSafety.suppression} 
              alt="Системы пожаротушения" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-transparent to-transparent flex items-end p-8">
               <h3 className="text-xl font-bold text-white">Автоматические установки газового пожаротушения (АУГПТ)</h3>
            </div>
         </div>
      </section>

      {/* Core Systems Grid */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Fire Alarm (APS) */}
          <div className="bg-industrial-900 border border-industrial-800 p-8 rounded-2xl relative overflow-hidden group hover:border-red-500/30 transition-all">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Bell size={120} />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-500/10 rounded-xl">
                <Siren className="text-red-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Пожарная сигнализация (АПС)
              </h3>
            </div>
            <p className="text-industrial-300 mb-6 leading-relaxed">
              Раннее обнаружение возгорания. Мы работаем с адресными и аналоговыми системами (Болид, Рубеж, Esser).
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-industrial-400 text-sm">
                <CheckCircle2 size={16} className="text-red-500 shrink-0" />
                <span>Датчики дыма, тепла и пламени (ИК/УФ)</span>
              </li>
              <li className="flex items-center gap-3 text-industrial-400 text-sm">
                <CheckCircle2 size={16} className="text-red-500 shrink-0" />
                <span>Линейные извещатели для высоких цехов</span>
              </li>
              <li className="flex items-center gap-3 text-industrial-400 text-sm">
                <CheckCircle2 size={16} className="text-red-500 shrink-0" />
                <span>Системы оповещения и эвакуации (СОУЭ 1-5 тип)</span>
              </li>
            </ul>
          </div>

          {/* Fire Suppression (AUPT) */}
          <div className="bg-industrial-900 border border-industrial-800 p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-all">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <FireExtinguisher size={120} />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Droplets className="text-blue-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Пожаротушение (АУПТ)
              </h3>
            </div>
            <p className="text-industrial-300 mb-6 leading-relaxed">
              Автоматические установки для ликвидации очага возгорания без участия человека. Подбор огнетушащего вещества (ОТВ) под тип объекта.
            </p>
            
            <div className="space-y-4">
               <div className="flex gap-4">
                  <Droplets size={20} className="text-blue-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Водяное и Пенное</h4>
                    <p className="text-xs text-industrial-400">Спринклерные и дренчерные системы. Для складов, паркингов и торговых центров.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <Wind size={20} className="text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Газовое (GOTV)</h4>
                    <p className="text-xs text-industrial-400">Хладоны, Novec 1230. Для серверных, ЦОД, архивов и электрощитовых. Не повреждает оборудование.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <Flame size={20} className="text-orange-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Порошковое и Аэрозольное</h4>
                    <p className="text-xs text-industrial-400">Модульные установки (Буран, Тунгус). Для дизель-генераторных, подстанций и гаражей.</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* Process Section */}
      <section className="bg-industrial-900 py-16 border-y border-industrial-800 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-10 text-center">Этапы работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-industrial-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-industrial-700">
                <FileText size={32} className="text-industrial-400" />
              </div>
              <h3 className="text-white font-bold mb-2">Проектирование</h3>
              <p className="text-sm text-industrial-400">
                Разработка стадий «П» и «Р». Расчет категорий помещений, гидравлический расчет трубопроводов. Согласование в экспертизе.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-industrial-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-industrial-700">
                <Wrench size={32} className="text-industrial-400" />
              </div>
              <h3 className="text-white font-bold mb-2">Монтаж (СМР)</h3>
              <p className="text-sm text-industrial-400">
                Прокладка кабельных трасс (ОКЛ), сварка трубопроводов, установка модулей. Пусконаладочные работы.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-industrial-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-industrial-700">
                <ShieldAlert size={32} className="text-industrial-400" />
              </div>
              <h3 className="text-white font-bold mb-2">Техническое Обслуживание</h3>
              <p className="text-sm text-industrial-400">
                Регламентные работы (ТО-1, ТО-2). Проверка работоспособности, перемотка рукавов, испытание водопровода. Журнал эксплуатации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Note */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-r from-industrial-800 to-industrial-900 border border-industrial-700 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8">
           <div className="md:w-3/4">
             <h3 className="text-xl font-bold text-white mb-2">Интеграция с АСУТП</h3>
             <p className="text-industrial-300 text-sm">
               Мы не просто ставим датчики. Мы интегрируем пожарную автоматику в общую систему диспетчеризации здания. 
               При пожаре система автоматически:
             </p>
             <ul className="grid grid-cols-2 gap-2 mt-4 text-xs text-industrial-400 font-mono">
               <li>[x] Отключает вентиляцию (ОЗК)</li>
               <li>[x] Опускает лифты на 1 этаж</li>
               <li>[x] Разблокирует СКУД</li>
               <li>[x] Включает дымоудаление</li>
             </ul>
           </div>
           <div className="md:w-1/4 flex justify-center">
              <ShieldAlert size={64} className="text-red-500 animate-pulse-slow" />
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Нужен расчет системы?</h2>
          <p className="text-industrial-400 mb-8">
            Пришлите планировки помещений, и мы подготовим предварительное коммерческое предложение с подбором оборудования.
          </p>
          <a href="tel:+79879176580" className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:scale-105 shadow-red-900/20">
            <Phone size={20} />
            <span>Вызвать инженера на замер</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default FireSafetyServices;
