
import React from 'react';
import { ArrowLeft, Zap, Scale, Settings, Activity, Brain, ArrowRight, Lightbulb, ClipboardList, FlaskConical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
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

      <section className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Наши Услуги
        </h1>
        <p className="text-industrial-300 text-lg max-w-3xl border-l-2 border-industrial-accent pl-6">
          Экосистема решений для промышленности: от классического электромонтажа до передовых нейросетей и юридической поддержки.
        </p>
      </section>

      {/* Service Hub Grid */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Electrical Services */}
          <div 
            onClick={() => navigate('/services/electrical')}
            className="group bg-industrial-900 border border-industrial-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap size={100} />
            </div>
            <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Settings size={32} className="text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Электромонтаж</h3>
            <p className="text-industrial-400 mb-6 leading-relaxed">
              Проектирование и монтаж под ключ. Высоковольтные работы (до 110 кВ), собственная генерация (ГПУ), сборка шкафов управления.
            </p>
            <div className="flex items-center text-yellow-500 font-medium text-sm mt-auto">
              <span>Подробнее</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: AI Services */}
          <div 
            onClick={() => navigate('/ai-services')}
            className="group bg-industrial-900 border border-industrial-800 p-8 rounded-2xl hover:border-purple-500/50 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Brain size={100} />
            </div>
            <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Brain size={32} className="text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              Industrial AI
            </h3>
            <p className="text-industrial-400 mb-6 leading-relaxed">
              Цифровая трансформация. Предиктивная диагностика, Computer Vision для контроля качества, оптимизация процессов через ML.
            </p>
            <div className="flex items-center text-purple-500 font-medium text-sm mt-auto">
              <span>Подробнее</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Audit */}
          <div 
            onClick={() => navigate('/audit')}
            className="group bg-industrial-900 border border-industrial-800 p-8 rounded-2xl hover:border-industrial-accent/50 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <ClipboardList size={100} />
            </div>
            <div className="w-14 h-14 bg-industrial-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Activity size={32} className="text-industrial-accent" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Технический Аудит</h3>
            <p className="text-industrial-400 mb-6 leading-relaxed">
              Глубокое обследование энергосистемы и технологии. Поиск потерь, "узких мест" и разработка плана с расчетом ROI.
            </p>
            <div className="flex items-center text-industrial-accent font-medium text-sm mt-auto">
              <span>Подробнее</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card: TRIZ & DoE (New) */}
          <div 
            onClick={() => navigate('/services/triz')}
            className="group bg-industrial-900 border border-industrial-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <FlaskConical size={100} />
            </div>
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FlaskConical size={32} className="text-cyan-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">ТРИЗ + DoE Оптимизация</h3>
            <p className="text-industrial-400 mb-6 leading-relaxed">
              Математическое планирование эксперимента для систем типа "Черный ящик". Разрешение противоречий в составах смесей и режимах горения.
            </p>
            <div className="flex items-center text-cyan-500 font-medium text-sm mt-auto">
              <span>Подробнее</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Innovations */}
          <div 
            onClick={() => navigate('/innovations')}
            className="group bg-industrial-900 border border-industrial-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Lightbulb size={100} />
            </div>
            <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Lightbulb size={32} className="text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">R&D и Инновации</h3>
            <p className="text-industrial-400 mb-6 leading-relaxed">
              Собственные разработки: ИТН, композитные материалы, уникальные редукторы. Решения для нестандартных задач.
            </p>
            <div className="flex items-center text-emerald-500 font-medium text-sm mt-auto">
              <span>Подробнее</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Legal (Info Only) */}
          <div className="group bg-industrial-900 border border-industrial-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Scale size={100} />
            </div>
            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Scale size={32} className="text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Юридический консалтинг</h3>
            <p className="text-industrial-400 mb-6 leading-relaxed">
              Анализ тарифов, аудит договоров электроснабжения. Возврат переплат за последние 3 года.
            </p>
            <div className="text-industrial-500 text-sm mt-auto italic">
              В составе комплексного аудита
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;
