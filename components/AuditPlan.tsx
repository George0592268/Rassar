import React from 'react';
import { ArrowLeft, Calendar, FileText, AlertCircle, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuditPlan: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-industrial-950 pt-10 animate-fade-in">
      <div className="container mx-auto px-4 mb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-industrial-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Вернуться на главную</span>
        </button>
      </div>

      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-industrial-500 rounded-full mb-4">
            <span className="w-2 h-2 bg-industrial-accent rounded-full"></span>
            <span className="text-industrial-300 text-xs font-medium uppercase tracking-wider">
              Приложение №1
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            План мероприятий по обследованию производства
          </h1>
          <p className="text-lg text-industrial-300 max-w-3xl leading-relaxed border-l-4 border-industrial-accent pl-6 bg-industrial-900/50 py-4 pr-4">
            Цель обследования — разработка Плана-графика внедрения Системы ГИГТ. Мы не
            продаем оборудование, пока не поймем вашу экономику и технологию.
          </p>
        </div>
      </div>

      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <Calendar className="text-industrial-accent" />
          График работ (5-7 дней на объекте)
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-industrial-900 border border-industrial-800 p-6 rounded-xl">
            <div className="text-industrial-500 font-mono text-sm mb-2">Этап 1</div>
            <h3 className="text-xl font-bold text-white mb-4">Технология (3 дня)</h3>
            <ul className="space-y-3 text-sm text-industrial-300">
              <li className="flex gap-2 items-start">
                <span className="text-industrial-600">•</span> Обследование трубопроводов и
                приводов
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-industrial-600">•</span> Анализ систем автоматики
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-industrial-600">•</span> Заполнение опросных листов
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-industrial-600">•</span> Изучение графика замены
                оснастки
              </li>
            </ul>
          </div>

          <div className="bg-industrial-900 border border-industrial-800 p-6 rounded-xl">
            <div className="text-industrial-500 font-mono text-sm mb-2">Этап 2</div>
            <h3 className="text-xl font-bold text-white mb-4">
              Вспомогательные системы (2 дня)
            </h3>
            <ul className="space-y-3 text-sm text-industrial-300">
              <li className="flex gap-2 items-start">
                <span className="text-industrial-600">•</span> Водоснабжение и водооборот
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-industrial-600">•</span> Система сжатого воздуха (поиск
                утечек)
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-industrial-600">•</span> Принципиальная схема
                электроснабжения
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-industrial-600">•</span> Магистральные трубопроводы
              </li>
            </ul>
          </div>

          <div className="bg-industrial-900 border border-industrial-800 p-6 rounded-xl">
            <div className="text-industrial-500 font-mono text-sm mb-2">Этап 3</div>
            <h3 className="text-xl font-bold text-white mb-4">
              Энергетика и Котельная (2 дня)
            </h3>
            <ul className="space-y-3 text-sm text-industrial-300">
              <li className="flex gap-2 items-start">
                <span className="text-industrial-600">•</span> Обследование ПКС и
                паропроводов
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-industrial-600">•</span> Режимные карты котлов
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-industrial-600">•</span> Отчет по расходу газа/топлива
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-industrial-600">•</span> Анализ входящей воды и стоков
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-industrial-900 py-16 border-y border-industrial-800 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FileText className="text-purple-500" />
            Результат (через 4 недели)
          </h2>
          <p className="text-industrial-400 mb-8">
            По результатам работы формируется пакет из 8 документов, который остается у
            Заказчика:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Отчет по обследованию (дефектовка)',
              'Техническое задание на внедрение Системы ГИГТ',
              'План-график внедрения с ROI',
              'База данных технической документации',
              'Баланс сырья и ТЭР с указанием «Узких мест»',
              'Концептуальная схема производства (To-Be)',
              'Программа мероприятий по модернизации оборудования',
              'График обслуживания для служб ОГМ, ОГЭ, КИПиА',
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-industrial-950 p-4 rounded-lg border border-industrial-800"
              >
                <div className="w-8 h-8 bg-industrial-800 rounded-full flex items-center justify-center text-industrial-500 font-mono text-xs shrink-0">
                  0{idx + 1}
                </div>
                <span className="text-industrial-200 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-20">
        <div className="bg-yellow-900/20 border border-yellow-600/30 p-6 rounded-xl flex gap-4 items-start">
          <AlertCircle className="text-yellow-500 shrink-0 mt-1" />
          <div>
            <h4 className="text-yellow-500 font-bold mb-2">Требования к Заказчику</h4>
            <p className="text-industrial-400 text-sm">
              Для успешного проведения аудита необходимо предоставить проектную
              документацию, паспорта на оборудование, схемы производств и обеспечить допуск
              специалистов на объекты.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Готовы начать?</h2>
        <p className="text-industrial-400 max-w-xl mx-auto mb-8">
          Мы готовы обсудить детали выезда и стоимость работ по телефону.
        </p>
        <a
          href="tel:+79879176580"
          className="inline-flex items-center gap-3 bg-industrial-accent hover:bg-sky-400 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:scale-105"
        >
          <Phone size={20} />
          <span>Позвонить +7 (987) 917 65 80</span>
        </a>
      </section>
    </div>
  );
};

export default AuditPlan;
