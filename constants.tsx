
import {
  Activity,
  Shield,
  Factory,
  Cpu,
  Zap,
} from 'lucide-react';
import { ModuleCategory, ModuleLevel, CategoryConfig, LevelConfig, ModuleItem, CaseStudy, FaqItem } from './types';

export const CATEGORY_CONFIG: Record<ModuleCategory, CategoryConfig> = {
  [ModuleCategory.ENERGY]: {
    label: "Энергоэффективность",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    icon: Zap,
  },
  [ModuleCategory.SAFETY]: {
    label: "Безопасность труда",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    icon: Shield,
  },
  [ModuleCategory.MANAGEMENT]: {
    label: "Управление производством",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    icon: Factory,
  },
  [ModuleCategory.PREDICTIVE]: {
    label: "Предиктивная диагностика",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    icon: Activity,
  },
  [ModuleCategory.DIGITAL]: {
    label: "Цифровизация & AI",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    icon: Cpu,
  },
};

export const LEVEL_CONFIG: Record<ModuleLevel, LevelConfig> = {
  [ModuleLevel.BASIC]: { label: "Базовый (Quick Win)", color: "text-green-400" },
  [ModuleLevel.STANDARD]: { label: "Стандартный", color: "text-yellow-400" },
  [ModuleLevel.EXPERT]: { label: "Экспертный", color: "text-red-400" },
};

export const MODULES_DATA: ModuleItem[] = [
  {
    id: "e1.1",
    code: "E1.1",
    name: "ИТН на приоритетные двигатели",
    category: ModuleCategory.ENERGY,
    level: ModuleLevel.BASIC,
    costRange: "0.8 - 1.5 млн ₽",
    paybackPeriod: "6-12 мес",
    description: "Установка ИТН на мощные синхронные/асинхронные двигатели (компрессоры, насосы, эскалаторы).",
    impact: ["Снижение реактивной мощности", "Снижение пусковых токов в 3 раза", "Холодные двигатели"],
  },
  {
    id: "d2.1",
    code: "D2.1",
    name: "IIoT Шлюз + LoRaWAN",
    category: ModuleCategory.DIGITAL,
    level: ModuleLevel.BASIC,
    costRange: "0.5 - 2.0 млн ₽",
    paybackPeriod: "Инфраструктура",
    description: "Развертывание сети сбора данных. Беспроводные датчики вибрации, температуры и тока. Передача данных в SCADA.",
    impact: ["Сбор данных с удаленных объектов", "Отсутствие кабельных трасс"],
  },
  {
    id: "e3.4",
    code: "E3.4",
    name: "Подавление гармоник (Data Centers)",
    category: ModuleCategory.ENERGY,
    level: ModuleLevel.EXPERT,
    costRange: "2 - 5 млн ₽",
    paybackPeriod: "20-30 мес",
    description: "Устранение 3-й, 5-й, 7-й гармоник, влияющих на работу серверов и чиллеров.",
    impact: ["Стабильность работы серверов", "Защита чиллеров от перегрева"],
  },
  {
    id: "e2.1",
    code: "E2.1",
    name: "Оптимизация приводов ГПУ",
    category: ModuleCategory.ENERGY,
    level: ModuleLevel.STANDARD,
    costRange: "3 - 8 млн ₽",
    paybackPeriod: "12-18 мес",
    description: "Снижение просадок сети при запуске мощных компрессоров (напр. 426-й двигатель).",
    impact: ["Исключение остановок линии", "Разгрузка генератора"],
  },
  {
    id: "m1.5",
    code: "M1.5",
    name: "Уникальные Редукторы",
    category: ModuleCategory.MANAGEMENT,
    level: ModuleLevel.STANDARD,
    costRange: "0.5 - 2 млн ₽",
    paybackPeriod: "8-14 мес",
    description: "Замена стандартных редукторов на модели с уникальным зацеплением (потери ниже на 25%).",
    impact: ["Снижение мех. потерь", "Рост КПД привода"],
  },
  {
    id: "s2.1",
    code: "S2.1",
    name: "AI-видеоаналитика (Sentinel)",
    category: ModuleCategory.SAFETY,
    level: ModuleLevel.STANDARD,
    costRange: "2 - 6 млн ₽",
    paybackPeriod: "15-24 мес",
    description: "Контроль нарушений ТБ и технологического процесса (не роботы, а умный мониторинг).",
    impact: ["Снижение травматизма", "Контроль регламентов"],
  },
  {
    id: "m1.2",
    code: "M1.2",
    name: "Аудит технологических цепочек",
    category: ModuleCategory.MANAGEMENT,
    level: ModuleLevel.BASIC,
    costRange: "0.3 - 0.8 млн ₽",
    paybackPeriod: "Быстрая окупаемость",
    description: "Поиск узких мест в технологии (пример: замена колес на композитные, редукторы).",
    impact: ["Рост отгрузки продукции", "Снижение простоев"],
  },
  {
    id: "m2.1",
    code: "M2.1",
    name: "АСУТП Интеграция",
    category: ModuleCategory.MANAGEMENT,
    level: ModuleLevel.STANDARD,
    costRange: "3 - 10 млн ₽",
    paybackPeriod: "18-30 мес",
    description: "Комплексная автоматизация производственных процессов и диспетчеризация.",
    impact: ["Прозрачность процессов", "Снижение человеческого фактора"],
  },
  {
    id: "d1.2",
    code: "D1.2",
    name: "Цифровой паспорт оборудования",
    category: ModuleCategory.DIGITAL,
    level: ModuleLevel.BASIC,
    costRange: "0.1 - 0.3 млн ₽",
    paybackPeriod: "8-12 мес",
    description: "QR-маркировка и оцифровка технической документации (паспорта, схемы).",
    impact: ["Мгновенный доступ к документам", "Упорядочивание архива"],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "c1",
    title: "Екатеринбургский Метрополитен",
    location: "Екатеринбург",
    description: "Оснащение всех станций метро шкафами управления двигателями эскалаторов и вентиляции.",
    result: "Безаварийная работа >10 лет. Экономия электроэнергии и ресурса двигателей.",
    iconName: "metro",
  },
  {
    id: "c2",
    title: "Нефтяные месторождения",
    location: "РФ",
    description: "Внедрение шкафов управления на 260 нефтяных качалках. Замена редукторов на уникальные с меньшими потерями.",
    result: "Снижение энергопотребления на 50% (комплекс), рост добычи.",
    iconName: "oil",
  },
  {
    id: "c3",
    title: "Чеченские Минеральные Воды",
    location: "Чеченская Республика",
    description: "Оптимизация работы компрессора (двигатель 426 кВт) на линии розлива.",
    result: "Исключены просадки сети при запуске, устранены остановки линии (экономия >3 млн руб/сутки простоя).",
    iconName: "factory",
  },
  {
    id: "c4",
    title: "Жигулевская ГЭС",
    location: "Жигулевск",
    description: "Работа целого этажа компрессоров и двигателей под управлением системы.",
    result: "Стабильная работа критически важной инфраструктуры.",
    iconName: "factory",
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    q: "Слетит ли гарантия на электродвигатель при установке ИТН?",
    a: "Нет. ИТН подключается параллельно и не вмешивается в конструкцию двигателя. Наоборот, он продлевает срок службы, снижая нагрев обмоток в 2-3 раза и убирая вредные вибрации.",
  },
  {
    q: "Почему не использовать частотный преобразователь (ЧРП)?",
    a: "ЧРП нужен для регулирования скорости. Если вам не нужно менять скорость (насос всегда качает, вентилятор всегда дует), ЧРП — это избыточные затраты (он дороже ИТН в 3-5 раз), потери КПД и гармонические искажения в сеть.",
  },
  {
    q: "Возможен ли резонанс в сети?",
    a: "Исключено. Конструкция ИТН (множество параллельных LC-цепей) специально спроектирована для подавления резонансных явлений, в отличие от обычных конденсаторных установок (КРМ), которые часто взрываются или вызывают резонанс.",
  },
  {
    q: "Какой реальный срок окупаемости?",
    a: "От 6 месяцев до 3 лет. Зависит от режима работы оборудования. Если двигатель работает 24/7 с переменной нагрузкой (например, компрессор), окупаемость максимальная.",
  },
];
