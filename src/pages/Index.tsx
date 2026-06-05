import { useState } from "react";
import Icon from "@/components/ui/icon";

const COMPRESSOR_IMAGE = "https://cdn.poehali.dev/projects/bdbde96d-93ee-4e3d-97ff-b968edcde26e/bucket/146c0cdd-ffd8-4a47-a396-316cfdcffee2.jpg";
const JEHALL_LOGO = "https://cdn.poehali.dev/projects/bdbde96d-93ee-4e3d-97ff-b968edcde26e/bucket/36c05307-625a-444c-bbce-8b9751b2d8f9.jpg";
const A3_LOGO = "https://a3eng.ru/wp-content/themes/a3eng/images/logo.png";

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
    title: "Работаем с НДС 22%",
    desc: "Все поставки оформляются официально с полным пакетом бухгалтерских документов.",
  },
  {
    icon: "ShieldCheck",
    title: "Более 10 лет опыта",
    desc: "Специализированный опыт поставок оборудования J&E Hall на российский рынок с 2014 года.",
  },
];

const STATS = [
  { value: "10+", label: "лет поставок J&E Hall" },
  { value: "4", label: "серии компрессоров" },
  { value: "12–16", label: "недель срок поставки" },
  { value: "НДС 22%", label: "полный пакет документов" },
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
    <div className="min-h-screen bg-[#f8f8f8] text-foreground font-sans">

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <img src={A3_LOGO} alt="А3 Инжиниринг" className="h-10 object-contain" />

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all">
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#contacts"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all shadow-sm hover:shadow-md">
            Оставить заявку
          </a>

          <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-white px-6 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-foreground"
                onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <a href="#contacts"
              className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full text-center"
              onClick={() => setMenuOpen(false)}>
              Оставить заявку
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="bg-white border-b border-border overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              J&amp;E Hall · HallScrew · Великобритания
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.15] mb-6">
              Промышленные<br />
              <span className="text-primary">винтовые</span><br />
              компрессоры
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
              Компания «А3 Инжиниринг» осуществляет поставки компрессоров «J&amp;E Hall» HallScrew
              для систем промышленного холодоснабжения и кондиционирования,
              а также запасных частей к ним.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contacts"
                className="bg-primary text-primary-foreground text-sm font-bold px-7 py-3 rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Запросить КП
              </a>
              <a href="#products"
                className="border-2 border-border text-foreground text-sm font-semibold px-7 py-3 rounded-full hover:border-primary hover:text-primary transition-all">
                Каталог
              </a>
            </div>
          </div>

          <div className="animate-fade-in [animation-delay:150ms] flex flex-col items-start gap-6">
            <img src={JEHALL_LOGO} alt="J&E Hall International" className="w-44 object-contain" />
            <div className="relative w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
              <img src={COMPRESSOR_IMAGE} alt="Промышленный винтовой компрессор J&E Hall HallScrew"
                className="w-full object-contain drop-shadow-xl relative z-10" />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-border bg-[#f8f8f8]">
          <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {STATS.map((s) => (
              <div key={s.value} className="text-center px-4 py-2">
                <div className="text-2xl font-black text-[#1a5fa8]">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="border-b border-border bg-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-8 text-center">
            Оборудование применяется в системах
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
            <div className="flex flex-col items-center gap-2">
              <img src={JEHALL_LOGO} alt="J&E Hall International" className="h-11 object-contain grayscale hover:grayscale-0 transition-all" />
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Производитель</span>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:border-[#E31837]/40 transition-colors">
                <div className="w-2.5 h-2.5 rounded-sm bg-[#E31837]" />
                <span className="font-black text-xl tracking-tight text-[#1a1a1a]">McQUAY</span>
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Чиллеры</span>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:border-[#0067B0]/40 transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0067B0]" />
                <span className="font-black text-xl tracking-tight text-[#0067B0]">DAIKIN</span>
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Чиллеры</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-20 border-b border-border bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Продукция</div>
            <h2 className="text-3xl font-bold text-foreground">Компрессоры J&amp;E Hall HallScrew</h2>
            <p className="text-muted-foreground mt-3 text-sm max-w-xl">
              Все компрессоры поставляются под заказ. Срок поставки —{" "}
              <strong className="text-foreground">12–16 недель</strong>.
              Применяются в системах холодоснабжения, чиллерах McQuay и Daikin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {PRODUCTS.map((p) => (
              <div key={p.series}
                className="group border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-lg transition-all bg-white">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl font-black text-foreground">Серия <span className="text-primary">{p.series}</span></span>
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {p.temp}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="Thermometer" size={14} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{p.type} · {p.range}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <div className="pt-4 border-t border-border">
                  <a href="#contacts"
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Запросить стоимость
                    <Icon name="ArrowRight" size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTS */}
      <section id="parts" className="py-20 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Запасные части</div>
            <h2 className="text-3xl font-bold text-foreground">Запчасти к компрессорам J&amp;E Hall</h2>
            <p className="text-muted-foreground mt-3 text-sm max-w-xl">
              Поставляем оригинальные запасные части для всех серий HallScrew.
              Срок поставки — <strong className="text-foreground">6–8 недель</strong> под заказ.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 mb-10">
            <ul>
              {PARTS_LIST.slice(0, 5).map((part, i) => (
                <li key={i} className="flex items-center gap-3 py-3.5 border-b border-border text-sm text-foreground">
                  <span className="w-6 h-6 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-primary" />
                  </span>
                  {part}
                </li>
              ))}
            </ul>
            <ul>
              {PARTS_LIST.slice(5).map((part, i) => (
                <li key={i} className="flex items-center gap-3 py-3.5 border-b border-border text-sm text-foreground">
                  <span className="w-6 h-6 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-primary" />
                  </span>
                  {part}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div>
              <div className="font-bold text-foreground mb-1">Не нашли нужную запчасть?</div>
              <div className="text-muted-foreground text-sm">
                Отправьте запрос с серийным номером компрессора — подберём и поставим под заказ.
              </div>
            </div>
            <a href="#contacts"
              className="flex-shrink-0 bg-primary text-primary-foreground text-sm font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-all shadow-sm hover:shadow-md whitespace-nowrap">
              Отправить запрос
            </a>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-20 border-b border-border bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Почему А3 Инжиниринг</div>
            <h2 className="text-3xl font-bold text-foreground">Преимущества работы с нами</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ADVANTAGES.map((a, i) => (
              <div key={a.title}
                className="p-6 rounded-2xl bg-white border border-border hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon name={a.icon} size={22} className="text-primary" />
                </div>
                <div className="text-2xl font-black text-[#1a5fa8] mb-1">0{i + 1}</div>
                <div className="font-bold text-foreground text-sm mb-2">{a.title}</div>
                <div className="text-muted-foreground text-xs leading-relaxed">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="py-20 border-b border-border" style={{ background: "#222" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white">Сроки поставки оборудования</h2>
            <p className="text-white/50 mt-3 text-sm">
              Оборудование поставляется под заказ. Сроки фиксируются в договоре.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "Package",
                title: "Компрессоры",
                weeks: "12–16",
                items: ["Серия HSL — низкотемпературные", "Серия HSM — средне- и высокотемпературные", "Серия HSO — открытого типа"],
              },
              {
                icon: "Wrench",
                title: "Запасные части",
                weeks: "6–8",
                items: ["Роторы, подшипники, уплотнения", "Клапаны, фильтры, масляные системы", "Любые оригинальные запасные части"],
              },
            ].map((card) => (
              <div key={card.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon name={card.icon} size={20} className="text-primary" />
                  </div>
                  <span className="text-white font-bold">{card.title}</span>
                </div>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-6xl font-black text-white leading-none">{card.weeks}</span>
                  <span className="text-white/40 text-sm mb-2">недель</span>
                </div>
                <div className="text-white/40 text-xs mb-6">с момента подтверждения заказа</div>
                <ul className="space-y-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-xs text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Контакты</div>
            <h2 className="text-3xl font-bold text-foreground">Оставить заявку</h2>
            <p className="text-muted-foreground mt-3 text-sm">
              Опишите вашу задачу — мы подготовим коммерческое предложение.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-2">Организация</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange}
                    placeholder="ООО «Название»"
                    className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-[#f8f8f8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-2">Контактное лицо</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange}
                    placeholder="Иванов Иван Иванович"
                    className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-[#f8f8f8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-2">Телефон</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-[#f8f8f8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-2">E-mail</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="mail@company.ru"
                    className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-[#f8f8f8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground mb-2">Описание задачи / запрос</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                  placeholder="Укажите серию компрессора, необходимые запчасти или опишите задачу"
                  className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-[#f8f8f8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition resize-none" />
              </div>
              <button type="submit"
                className="w-full bg-primary text-primary-foreground font-bold text-sm py-3.5 rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Отправить заявку
              </button>
            </form>

            <div className="md:col-span-2 space-y-8">
              <div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Реквизиты</div>
                <div className="text-base font-bold text-foreground mb-1">ООО «А3 Инжиниринг»</div>
                <div className="text-sm text-muted-foreground leading-relaxed">Продажа, ремонт и сервисное обслуживание промышленного холодильного оборудования</div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: "Phone", label: "Телефон", content: <a href="tel:+78123868586" className="text-sm text-foreground font-semibold hover:text-primary transition-colors">+7 (812) 386-85-86</a> },
                  { icon: "Mail", label: "E-mail", content: <a href="mailto:jehall@a3eng.ru" className="text-sm text-foreground font-semibold hover:text-primary transition-colors">jehall@a3eng.ru</a> },
                  { icon: "Globe", label: "Сайт", content: <a href="https://www.a3eng.ru" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground font-semibold hover:text-primary transition-colors">www.a3eng.ru</a> },
                  { icon: "MapPin", label: "Регион работы", content: <div className="text-sm text-foreground font-semibold">Вся Россия</div> },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={row.icon} size={15} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">{row.label}</div>
                      {row.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-[#f8f8f8] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={A3_LOGO} alt="А3 Инжиниринг" className="h-8 object-contain" />
          <div className="text-xs text-muted-foreground text-center">
            Поставка промышленных компрессоров J&amp;E Hall HallScrew и запасных частей
          </div>
          <div className="text-xs text-muted-foreground">© 2024</div>
        </div>
      </footer>
    </div>
  );
}
