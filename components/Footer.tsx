
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Loader2, Check } from 'lucide-react';

const Footer: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const subject = encodeURIComponent('Заявка на аудит с сайта RASSAR');
    const body = encodeURIComponent(`Здравствуйте!\n\nМеня зовут: ${name}\nМой телефон: ${phone}\n\nХочу заказать аудит производства.`);
    const mailtoLink = `mailto:safari966@mail.ru?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus('success');
      setName('');
      setPhone('');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <footer id="contact" className="bg-industrial-950 pt-20 pb-10 border-t border-industrial-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-industrial-accent rounded flex items-center justify-center">
                <span className="font-mono text-white font-bold">R</span>
              </div>
              <span className="text-2xl font-bold text-white">РАССАР</span>
            </div>
            <p className="text-industrial-400 text-sm leading-relaxed mb-6">
              ООО «РАССАР» / ГК «ЭкоФорвард».<br />
              Уникальные решения в экологии и энергетике. Комплексная цифровая трансформация промышленных предприятий.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-industrial-400">
                <MapPin size={20} className="text-industrial-accent shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="font-medium text-white">Головной офис:</span>
                  <span>г. Москва, Москва-Сити</span>
                  <span>Башня Федераций</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-industrial-400">
                <Phone size={20} className="text-industrial-accent shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+79879176580" className="hover:text-white transition-colors">
                    +7 (987) 917 65 80
                  </a>
                  <a href="tel:+79371824959" className="hover:text-white transition-colors">
                    +7 (937) 182 49 59
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-industrial-400">
                <Mail size={20} className="text-industrial-accent shrink-0" />
                <a href="mailto:safari966@mail.ru" className="hover:text-white transition-colors">
                  safari966@mail.ru
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Заказать аудит</h3>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                required
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status !== 'idle'}
                className="w-full bg-industrial-900 border border-industrial-700 rounded px-4 py-3 text-white text-sm focus:border-industrial-accent outline-none disabled:opacity-50"
              />
              <input
                type="tel"
                required
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={status !== 'idle'}
                className="w-full bg-industrial-900 border border-industrial-700 rounded px-4 py-3 text-white text-sm focus:border-industrial-accent outline-none disabled:opacity-50"
              />
              <button
                disabled={status !== 'idle'}
                className={`w-full font-bold py-3 rounded transition-all flex items-center justify-center gap-2 ${
                  status === 'success'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-industrial-900 hover:bg-industrial-200 disabled:opacity-70'
                }`}
              >
                {status === 'idle' && 'Отправить заявку'}
                {status === 'submitting' && (
                  <>
                    <Loader2 className="animate-spin" size={18} /> Формирование письма...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <Check size={18} /> Готово (проверьте почту)
                  </>
                )}
              </button>
              {status === 'success' && (
                <p className="text-green-400 text-xs text-center animate-fade-in">
                  Открываем ваш почтовый клиент для отправки...
                </p>
              )}
              <p className="text-[10px] text-industrial-600 mt-2">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных (152-ФЗ).
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-industrial-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-industrial-600">
          <p>© 2025 ГК «ЭкоФорвард» / ООО «РАССАР». Все права защищены.</p>
          <p>Директор: Р.Р. Сафин</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
