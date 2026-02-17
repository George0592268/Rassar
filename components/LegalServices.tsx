
import React from 'react';
import { 
  ArrowLeft, Scale, FileText, Briefcase, Gavel, 
  ShieldAlert, BookOpen, Calculator, CheckCircle2,
  AlertTriangle, Phone, Search
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LegalServices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-industrial-950 pt-24 animate-fade-in pb-20 transition-colors duration-300">
      {/* Navigation */}
      <div className="container mx-auto px-4 mb-8">
        <button
          onClick={() => navigate('/services')}
          className="flex items-center gap-2 text-slate-500 dark:text-industrial-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Назад к услугам</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-slate-300 dark:border-industrial-700 bg-slate-200/50 dark:bg-industrial-900/50 rounded-full mb-6">
          <Scale size={14} className="text-slate-600 dark:text-industrial-300" />
          <span className="text-slate-700 dark:text-industrial-300 text-xs font-bold uppercase tracking-wider">
            Энергетический Арбитраж
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          Юридическая защита <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400 dark:from-slate-200 dark:to-industrial-400">
            интересов производства
          </span>
        </h1>
        <p className="text-slate-600 dark:text-industrial-300 text-lg max-w-3xl border-l-4 border-slate-400 dark:border-industrial-600 pl-6 py-2 leading-relaxed">
          Мы не просто юристы общего профиля. Мы специализируемся исключительно на спорах с монополистами (Энергосбыт, Сетевые компании) и возврате переплат за электроэнергию.
        </p>
      </section>

      {/* Core Services */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white dark:bg-industrial-900 p-8 rounded-2xl border border-slate-200 dark:border-industrial-800 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-slate-100 dark:bg-industrial-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-200 dark:group-hover:bg-industrial-700 transition-colors">
              <AlertTriangle className="text-orange-500" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Безучетное потребление</h3>
            <p className="text-sm text-slate-600 dark:text-industrial-400 mb-4">
              Оспаривание актов о неучтенном потреблении. Сетевые компании часто формально подходят к проверкам, выставляя миллионные штрафы за сорванную пломбу.
            </p>
            <div className="text-xs font-bold text-slate-500 dark:text-industrial-500 uppercase tracking-wider">
              Экономия: до 100% штрафа
            </div>
          </div>

          <div className="bg-white dark:bg-industrial-900 p-8 rounded-2xl border border-slate-200 dark:border-industrial-800 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-slate-100 dark:bg-industrial-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-200 dark:group-hover:bg-industrial-700 transition-colors">
              <Calculator className="text-blue-500" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Оптимизация тарифа</h3>
            <p className="text-sm text-slate-600 dark:text-industrial-400 mb-4">
              Анализ текущей ценовой категории (ЦК). Переход на более выгодную категорию (с 3 на 4 или наоборот) с учетом профиля мощности.
            </p>
            <div className="text-xs font-bold text-slate-500 dark:text-industrial-500 uppercase tracking-wider">
              Экономия: 10-25% ежемесячно
            </div>
          </div>

          <div className="bg-white dark:bg-industrial-900 p-8 rounded-2xl border border-slate-200 dark:border-industrial-800 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-slate-100 dark:bg-industrial-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-200 dark:group-hover:bg-industrial-700 transition-colors">
              <Gavel className="text-purple-500" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Неосновательное обогащение</h3>
            <p className="text-sm text-slate-600 dark:text-industrial-400 mb-4">
              Взыскание с сетевых компаний переплат, возникших из-за неверного применения тарифов или расчетных коэффициентов за прошлые периоды (до 3 лет).
            </p>
            <div className="text-xs font-bold text-slate-500 dark:text-industrial-500 uppercase tracking-wider">
              Возврат "живых" денег
            </div>
          </div>

        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="bg-slate-100 dark:bg-industrial-900/50 py-20 border-y border-slate-200 dark:border-industrial-800 mb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Аудит договорных отношений
              </h2>
              <p className="text-slate-600 dark:text-industrial-300 mb-6 leading-relaxed">
                Договор энергоснабжения часто содержит условия, навязанные поставщиком и невыгодные потребителю. Мы проводим полную вычитку документов.
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-emerald-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Технологическое присоединение (Техприс)</h4>
                    <p className="text-sm text-slate-600 dark:text-industrial-400">Проверка стоимости ТУ, навязанных мероприятий по "усилению сети", защита интересов в ФАС.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-emerald-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Границы балансовой принадлежности</h4>
                    <p className="text-sm text-slate-600 dark:text-industrial-400">Исключение из расчетов потерь в кабельных линиях и трансформаторах, не принадлежащих вам.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-emerald-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Качество электроэнергии</h4>
                    <p className="text-sm text-slate-600 dark:text-industrial-400">Фиксация просадок напряжения и выставление претензий за порчу оборудования.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="lg:w-1/2">
               <div className="bg-white dark:bg-industrial-950 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-industrial-800 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-slate-200 dark:bg-industrial-800 rounded-full blur-3xl -mr-10 -mt-10"></div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">Кейс: Металлургический завод</h3>
                 <div className="space-y-4 relative z-10">
                   <div className="flex justify-between items-center border-b border-slate-100 dark:border-industrial-800 pb-2">
                      <span className="text-sm text-slate-500 dark:text-industrial-400">Проблема</span>
                      <span className="text-sm text-slate-900 dark:text-white font-medium text-right">Штраф за безучетное потребление (срыв пломбы)</span>
                   </div>
                   <div className="flex justify-between items-center border-b border-slate-100 dark:border-industrial-800 pb-2">
                      <span className="text-sm text-slate-500 dark:text-industrial-400">Сумма иска</span>
                      <span className="text-sm text-red-500 font-bold">12.5 млн ₽</span>
                   </div>
                   <div className="flex justify-between items-center border-b border-slate-100 dark:border-industrial-800 pb-2">
                      <span className="text-sm text-slate-500 dark:text-industrial-400">Решение</span>
                      <span className="text-sm text-slate-900 dark:text-white text-right">Доказали отсутствие вмешательства в работу прибора учета</span>
                   </div>
                   <div className="flex justify-between items-center pt-2">
                      <span className="text-sm text-slate-500 dark:text-industrial-400">Результат</span>
                      <span className="text-lg text-emerald-500 font-bold">Иск отменен полностью</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 text-center">
        <div className="bg-slate-900 dark:bg-industrial-900 text-white rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
           
           <h2 className="text-3xl font-bold mb-6 relative z-10">Бесплатный экспресс-анализ договора</h2>
           <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
             Пришлите нам последние счета-фактуры и договор энергоснабжения. Мы проверим корректность начислений и найдем точки для оптимизации.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
             <a 
               href="mailto:safari966@mail.ru"
               className="bg-white text-slate-900 hover:bg-slate-100 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"
             >
               <FileText size={20} />
               Отправить документы
             </a>
             <a 
               href="tel:+79879176580"
               className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"
             >
               <Phone size={20} />
               Консультация юриста
             </a>
           </div>
        </div>
      </section>
    </div>
  );
};

export default LegalServices;
