import { useState } from "react";
import Icon from "@/components/ui/icon";

const COMPRESSOR_IMAGE = "https://cdn.poehali.dev/projects/bdbde96d-93ee-4e3d-97ff-b968edcde26e/bucket/146c0cdd-ffd8-4a47-a396-316cfdcffee2.jpg";

const NAV_LINKS = [
  { href: "#products", label: "Продукция" },
  { href: "#parts", label: "Запчасти" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#delivery", label: "Сроки" },
  { href: "#contacts", label: "Контакты" },
];

const PRODUCTS = [
  {
    series: "HSL",
    type: "Полугерметичные",
    temp: "Низкотемпературные",
    range: "от −40°C до −10°C",
    desc: "Применяются в системах глубокого охлаждения, заморозки и низкотемпературного хранения.",
  },
  {
    series: "HSM",
    type: "Полугерметичные",
    temp: "Среднетемпературные",
    range: "от −10°C до +5°C",
    desc: "Оптимальны для холодильных камер, систем кондиционирования McQuay и Daikin.",
  },
  {
    series: "HSM HT",
    type: "Полугерметичные",
    temp: "Высокотемпературные",
    range: "от +5°C до +15°C",
    desc: "Используются в чиллерах и системах охлаждения технологических процессов.",
  },
  {
    series: "HSO",
    type: "Открытого типа",
    temp: "Универсальные",
    range: "широкий диапазон",
    desc: "Компрессоры с внешним электродвигателем для интеграции в любые промышленные установки.",
  },
];

const PARTS_LIST = [
  "Роторные пары (мужской / женский ротор)",
  "Подшипники — радиальные и упорные",
  "Уплотнения вала — торцевые и механические",
  "Маслоотделители и масляные фильтры",
  "Клапаны всасывания и нагнетания",
  "Золотниковые клапаны регулирования",
  "Корпуса компрессора и крышки",
  "Запасные части для систем смазки",
  "Электрические компоненты защиты",
  "Монтажные комплекты и прокладки",
];

const ADVANTAGES = [
  {
    icon: "FileText",
    title: "Договор с фиксацией сроков",
    desc: "Работаем только по официальным договорам поставки с чётко прописанными датами и ответственностью сторон.",
  },
  {
    icon: "Truck",
    title: "Доставка по всей России",
    desc: "Организуем доставку в любой регион РФ. Опыт логистики крупногабаритного промышленного оборудования.",
  },
  {
    icon: "ReceiptText",
    title: "Работаем с НДС 20%",
    desc: "Все поставки оформляются официально с полным пакетом бухгалтерских документов.",
  },
  {
    icon: "ShieldCheck",
    title: "Более 10 лет опыта",
    desc: "Специализированный опыт поставок оборудования J&E Hall на российский рынок с 2014 года.",
  },
];

export default function Index() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold leading-none">А3</span>
            </div>
            <span className="font-semibold text-sm tracking-wide text-foreground uppercase">А3 Инжиниринг</span>
          </div>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacts"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded hover:bg-primary/90 transition-colors"
          >
            Оставить заявку
          </a>

          <button
            className="md:hidden p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacts"
              className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded text-center"
              onClick={() => setMenuOpen(false)}
            >
              Оставить заявку
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded mb-5">
              J&amp;E Hall · HallScrew · Великобритания
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
              Промышленные винтовые<br />компрессоры и запасные части
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              ООО «А3 Инжиниринг» — официальные поставки компрессоров серий{" "}
              <strong className="text-foreground">HSL, HSM, HSO</strong> производства J&amp;E Hall
              для систем промышленного холодоснабжения и кондиционирования.
              Опыт работы на российском рынке — более 10 лет.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contacts"
                className="bg-primary text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded hover:bg-primary/90 transition-colors"
              >
                Запросить коммерческое предложение
              </a>
              <a
                href="#products"
                className="border border-border text-foreground text-sm font-medium px-6 py-2.5 rounded hover:bg-secondary transition-colors"
              >
                Каталог компрессоров
              </a>
            </div>
          </div>

          <div className="animate-fade-in [animation-delay:150ms]">
            <img
              src={COMPRESSOR_IMAGE}
              alt="Промышленный винтовой компрессор J&E Hall HallScrew"
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-border bg-secondary">
          <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "10+", label: "лет поставок J&E Hall" },
              { value: "4", label: "серии компрессоров" },
              { value: "12–16", label: "недель — срок поставки" },
              { value: "НДС 20%", label: "полный пакет документов" },
            ].map((s) => (
              <div key={s.value} className="text-center">
                <div className="text-xl font-bold text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="border-b border-border bg-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6 text-center">
            Оборудование применяется в системах
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {/* J&E Hall */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 border border-border rounded px-5 py-3">
                <div className="w-3 h-3 rounded-full bg-[#003087]" />
                <span className="font-black text-lg tracking-tight text-[#003087]">J&amp;E HALL</span>
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Производитель</span>
            </div>

            <div className="w-px h-10 bg-border hidden md:block" />

            {/* McQuay */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 border border-border rounded px-5 py-3">
                <div className="w-3 h-3 rounded-sm bg-[#E31837]" />
                <span className="font-black text-lg tracking-tight text-[#1a1a1a]">McQUAY</span>
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Чиллеры</span>
            </div>

            <div className="w-px h-10 bg-border hidden md:block" />

            {/* Daikin */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 border border-border rounded px-5 py-3">
                <div className="w-3 h-3 rounded-full bg-[#0067B0]" />
                <span className="font-black text-lg tracking-tight text-[#0067B0]">DAIKIN</span>
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Чиллеры</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-16 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">Продукция</div>
            <h2 className="text-2xl font-bold text-foreground">Компрессоры J&amp;E Hall HallScrew</h2>
            <p className="text-muted-foreground mt-2 text-sm max-w-xl">
              Все компрессоры поставляются под заказ. Срок поставки — <strong className="text-foreground">12–16 недель</strong>.
              Применяются в промышленных системах холодоснабжения, чиллерах McQuay и Daikin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {PRODUCTS.map((p) => (
              <div
                key={p.series}
                className="border border-border rounded p-6 hover:border-accent/50 transition-colors bg-white"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-2xl font-bold text-primary">Серия {p.series}</span>
                  </div>
                  <span className="text-xs font-medium bg-secondary text-muted-foreground px-2 py-1 rounded">
                    {p.temp}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Thermometer" size={14} className="text-accent" />
                  <span className="text-xs text-muted-foreground">{p.type} · {p.range}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <a
                    href="#contacts"
                    className="text-xs font-semibold text-accent hover:underline flex items-center gap-1"
                  >
                    Запросить стоимость
                    <Icon name="ArrowRight" size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTS */}
      <section id="parts" className="py-16 bg-secondary border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">Запасные части</div>
            <h2 className="text-2xl font-bold text-foreground">Запчасти к компрессорам J&amp;E Hall</h2>
            <p className="text-muted-foreground mt-2 text-sm max-w-xl">
              Поставляем оригинальные запасные части для всех серий HallScrew.
              Срок поставки — <strong className="text-foreground">6–8 недель</strong> под заказ.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12">
            <ul className="space-y-0">
              {PARTS_LIST.slice(0, 5).map((part, i) => (
                <li key={i} className="flex items-center gap-3 py-3 border-b border-border text-sm text-foreground">
                  <span className="w-5 h-5 flex-shrink-0 rounded-full bg-white border border-border flex items-center justify-center">
                    <Icon name="Check" size={11} className="text-accent" />
                  </span>
                  {part}
                </li>
              ))}
            </ul>
            <ul className="space-y-0">
              {PARTS_LIST.slice(5).map((part, i) => (
                <li key={i} className="flex items-center gap-3 py-3 border-b border-border text-sm text-foreground">
                  <span className="w-5 h-5 flex-shrink-0 rounded-full bg-white border border-border flex items-center justify-center">
                    <Icon name="Check" size={11} className="text-accent" />
                  </span>
                  {part}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 bg-white border border-border rounded p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-foreground text-sm">Не нашли нужную запчасть?</div>
              <div className="text-muted-foreground text-sm mt-0.5">
                Отправьте запрос с серийным номером компрессора — подберём и поставим под заказ.
              </div>
            </div>
            <a
              href="#contacts"
              className="flex-shrink-0 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded hover:bg-primary/90 transition-colors"
            >
              Отправить запрос
            </a>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-16 border-b border-border bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">Почему А3 Инжиниринг</div>
            <h2 className="text-2xl font-bold text-foreground">Преимущества работы с нами</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((a) => (
              <div key={a.title} className="p-5 border border-border rounded bg-white hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded flex items-center justify-center mb-4" style={{background: "hsl(215 60% 18% / 0.08)"}}>
                  <Icon name={a.icon} size={20} className="text-primary" />
                </div>
                <div className="font-semibold text-foreground text-sm mb-2">{a.title}</div>
                <div className="text-muted-foreground text-xs leading-relaxed">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="py-16 border-b border-border" style={{background: "#333333"}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">Сроки поставки</div>
            <h2 className="text-2xl font-bold text-white">Сроки поставки оборудования</h2>
            <p className="text-white/60 mt-2 text-sm">
              Оборудование поставляется под заказ. Сроки фиксируются в договоре.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/15 rounded p-8">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Package" size={22} className="text-accent" />
                <span className="text-white font-semibold">Компрессоры</span>
              </div>
              <div className="text-5xl font-black text-white mb-1">12–16</div>
              <div className="text-white/60 text-sm mb-4">недель с момента подтверждения заказа</div>
              <ul className="space-y-2">
                {["Серия HSL — низкотемпературные", "Серия HSM — средне- и высокотемпературные", "Серия HSO — открытого типа"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-white/70">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/15 rounded p-8">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Wrench" size={22} className="text-accent" />
                <span className="text-white font-semibold">Запасные части</span>
              </div>
              <div className="text-5xl font-black text-white mb-1">6–8</div>
              <div className="text-white/60 text-sm mb-4">недель с момента подтверждения заказа</div>
              <ul className="space-y-2">
                {["Роторы, подшипники, уплотнения", "Клапаны, фильтры, масляные системы", "Любые оригинальные запасные части"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-white/70">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">Контакты</div>
            <h2 className="text-2xl font-bold text-foreground">Оставить заявку</h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Опишите вашу задачу — мы подготовим коммерческое предложение.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-10">
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">Организация</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="ООО «Название»"
                    className="w-full border border-border rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">Контактное лицо</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иванов Иван Иванович"
                    className="w-full border border-border rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">Телефон</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-border rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="mail@company.ru"
                    className="w-full border border-border rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">Описание задачи / запрос</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Укажите серию компрессора, необходимые запчасти или опишите задачу"
                  className="w-full border border-border rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-semibold text-sm py-3 rounded hover:bg-primary/90 transition-colors"
              >
                Отправить заявку
              </button>
            </form>

            <div className="md:col-span-2 space-y-6">
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Реквизиты</div>
                <div className="text-sm font-semibold text-foreground mb-1">ООО «А3 Инжиниринг»</div>
                <div className="text-sm text-muted-foreground">Продажа, ремонт и сервисное обслуживание промышленного холодильного оборудования</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={15} className="text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Телефон</div>
                    <a href="tel:+78123868586" className="text-sm text-foreground font-medium hover:text-accent transition-colors">+7 (812) 386-85-86</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={15} className="text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">E-mail</div>
                    <a href="mailto:jehall@a3eng.ru" className="text-sm text-foreground font-medium hover:text-accent transition-colors">jehall@a3eng.ru</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Globe" size={15} className="text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Сайт</div>
                    <a href="https://www.a3eng.ru" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground font-medium hover:text-accent transition-colors">www.a3eng.ru</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={15} className="text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Регион работы</div>
                    <div className="text-sm text-foreground font-medium">Вся Россия</div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-secondary py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white text-[9px] font-bold">А3</span>
            </div>
            <span className="text-sm text-muted-foreground">ООО «А3 Инжиниринг»</span>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            Поставка промышленных компрессоров J&amp;E Hall HallScrew и запасных частей
          </div>
          <div className="text-xs text-muted-foreground">© 2024</div>
        </div>
      </footer>
    </div>
  );
}