import { useState } from "react";

const menuData = {
  "Супы": [
    { name: "Суп куриный с лапшой (домашний)", weight: "320 г", price: "250 ₽" },
    { name: "Борщ с говядиной и сметаной", weight: "350 г", price: "320 ₽" },
    { name: "Суп рыбный с лососем и укропом", weight: "320 г", price: "290 ₽" },
    { name: "Суп-пюре из тыквы с семечками", weight: "300 г", price: "220 ₽" },
  ],
  "Вторые": [
    { name: "Картофельное пюре с котлетой по-домашнему", weight: "300 г", price: "350 ₽" },
    { name: "Гречка с печенью по-строгановски", weight: "280 г", price: "380 ₽" },
    { name: "Паста с курицей в сливочном соусе", weight: "320 г", price: "420 ₽" },
    { name: "Рис с запечённым лососем и овощами", weight: "280 г", price: "550 ₽" },
    { name: "Треска, запечённая с лимонником и сливочным маслом", weight: "270 г", price: "530 ₽" },
  ],
  "Салаты": [
    { name: "Цезарь с курицей и сухариками", weight: "180 г", price: "380 ₽" },
    { name: "Салат с тунцом, яйцом и свежими огурцами", weight: "170 г", price: "420 ₽" },
    { name: "Греческий с фетой и оливками", weight: "200 г", price: "350 ₽" },
    { name: "Салат из сезонных овощей с домашней заправкой", weight: "150 г", price: "250 ₽" },
    { name: "Салат с кальмаром и авокадо", weight: "180 г", price: "450 ₽" },
  ],
  "Выпечка": [
    { name: "Круассан классический", weight: "70 г", price: "150 ₽" },
    { name: "Круассан с шоколадом", weight: "80 г", price: "180 ₽" },
    { name: "Пирожок с картошкой и грибами", weight: "100 г", price: "120 ₽" },
    { name: "Пирожок с капустой", weight: "100 г", price: "100 ₽" },
    { name: "Булочка с корицей (синабон)", weight: "90 г", price: "180 ₽" },
    { name: "Блины с творогом и сметаной", weight: "120 г", price: "220 ₽" },
    { name: "Блины с мёдом", weight: "110 г", price: "200 ₽" },
    { name: "Бриошь с камчатским крабом и авокадо", weight: "110 г", price: "380 ₽" },
  ],
  "Напитки": [
    { name: "Американо", weight: "200 мл", price: "150 ₽" },
    { name: "Капучино", weight: "200 мл", price: "180 ₽" },
    { name: "Латте", weight: "250 мл", price: "190 ₽" },
    { name: "Раф", weight: "220 мл", price: "210 ₽" },
    { name: "Кофе с корицей или сиропом (добавка)", weight: "—", price: "+30 ₽" },
    { name: "Чай чёрный / зелёный", weight: "300 мл", price: "100 ₽" },
    { name: "Какао", weight: "200 мл", price: "160 ₽" },
    { name: "Авторский лимонад (домашний)", weight: "300 мл", price: "220 ₽" },
    { name: "Морс клюквенный", weight: "250 мл", price: "180 ₽" },
  ],
  "Десерты": [
    { name: "Медовик (домашний)", weight: "120 г", price: "280 ₽" },
    { name: "Чизкейк классический", weight: "130 г", price: "290 ₽" },
    { name: "Наполеон", weight: "130 г", price: "300 ₽" },
    { name: "Панкейки с фруктами и мёдом", weight: "150 г", price: "350 ₽" },
    { name: "Жареное мороженое", weight: "120 г", price: "290 ₽" },
    { name: "Десерт дня (от пекаря)", weight: "100–120 г", price: "200–250 ₽" },
  ],
  "Комбо": [
    { name: "Бизнес-ланч", weight: "Суп + второе + салат + компот/чай", price: "550–650 ₽" },
    { name: "Обед + кофе", weight: "Бизнес-ланч + капучино/латте", price: "750–850 ₽" },
    { name: "Кофе + десерт", weight: "Любой кофе + десерт на выбор", price: "350–450 ₽" },
    { name: "Семейный завтрак", weight: "Блины + круассан + 2 кофе + морс", price: "890 ₽" },
  ],
};

const categoryEmoji: Record<string, string> = {
  "Супы": "🍲",
  "Вторые": "🍽️",
  "Салаты": "🥗",
  "Выпечка": "🥐",
  "Напитки": "☕",
  "Десерты": "🍰",
  "Комбо": "⭐",
};

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Супы");

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">НАБЕРЕЖНАЯ*ДОБРА</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Миссия</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Как нас найти</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ЕШЬ
              <br />
              С <span>ДУШОЙ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Домашняя кухня и своя пекарня во Владивостоке. Каждый обед здесь — это чей-то первый рабочий опыт. Средний чек 850 ₽.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Смотреть меню
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Наша миссия
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/02f76ace-4da7-4dfe-9232-80d82d8f628a/files/55f6edf7-1590-4710-a5bf-0592d2e1627c.jpg')" }}>
            <div className="sticker">
              ОБЕД
              <br />
              ОТ 850 ₽
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ДОБРОЕДЕЛО
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ТЕПЛО
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ДОМАШНЯЯ КУХНЯ * СВОЯ ПЕКАРНЯ * КАЧЕСТВЕННЫЙ КОФЕ * ПЕРВЫЙ РАБОЧИЙ ОПЫТ * ВЛАДИВОСТОК *
            ДОМАШНЯЯ КУХНЯ * СВОЯ ПЕКАРНЯ * КАЧЕСТВЕННЫЙ КОФЕ * ПЕРВЫЙ РАБОЧИЙ ОПЫТ * ВЛАДИВОСТОК
          </div>
        </div>

        {/* МЕНЮ */}
        <section id="menu" className="section-padding">
          <div className="section-header">
            <h2 className="section-title">МЕНЮ</h2>
          </div>

          {/* Вкладки категорий */}
          <div style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}>
            {Object.keys(menuData).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "10px 18px",
                  border: "var(--border)",
                  fontWeight: 800,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "0.15s",
                  background: activeCategory === cat ? "var(--primary)" : "white",
                  color: activeCategory === cat ? "white" : "var(--dark)",
                  boxShadow: activeCategory === cat ? "4px 4px 0 var(--dark)" : "2px 2px 0 var(--dark)",
                  transform: activeCategory === cat ? "translate(-1px, -1px)" : "none",
                }}
              >
                {categoryEmoji[cat]} {cat}
              </button>
            ))}
          </div>

          {/* Таблица блюд */}
          <div style={{
            border: "var(--border)",
            boxShadow: "var(--shadow)",
            overflow: "hidden",
          }}>
            {/* Заголовок таблицы */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr auto auto",
              gap: "0",
              background: "var(--dark)",
              color: "white",
              padding: "12px 20px",
              fontWeight: 800,
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}>
              <span>Блюдо</span>
              <span style={{ textAlign: "right", paddingRight: "24px" }}>Вес / объём</span>
              <span style={{ textAlign: "right", minWidth: "80px" }}>Цена</span>
            </div>

            {/* Строки */}
            {menuData[activeCategory as keyof typeof menuData].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto auto",
                  gap: "0",
                  padding: "16px 20px",
                  borderTop: i === 0 ? "none" : "2px solid #e8e0d4",
                  background: i % 2 === 0 ? "white" : "var(--bg)",
                  alignItems: "center",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#fff3e0")}
                onMouseLeave={e => (e.currentTarget.style.background = i % 2 === 0 ? "white" : "var(--bg)")}
              >
                <span style={{ fontWeight: 600, fontSize: "15px" }}>{item.name}</span>
                <span style={{
                  fontSize: "13px",
                  color: "#888",
                  paddingRight: "24px",
                  textAlign: "right",
                  whiteSpace: "nowrap",
                }}>{item.weight}</span>
                <span style={{
                  fontFamily: "Unbounded, sans-serif",
                  fontWeight: 800,
                  fontSize: "15px",
                  color: "var(--primary)",
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  minWidth: "80px",
                }}>{item.price}</span>
              </div>
            ))}
          </div>

          {activeCategory === "Комбо" && (
            <p style={{
              marginTop: "16px",
              fontSize: "13px",
              color: "#888",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}>
              ⭐ Бизнес-ланч доступен с 11:00 до 15:00
            </p>
          )}
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ЕДА — ЭТО ТОЛЬКО НАЧАЛО.</h2>
            <p className="vibe-text">
              Мы единственное кафе во Владивостоке, где ваш обед меняет жизни. Мы трудоустраиваем выпускников детских домов, людей с ОВЗ и подростков от 14 лет. Они приходят без опыта — уходят с записью в трудовой и профессией в руках. Пекаря, официанта, помощника на кухне. Вы едите — они растут.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Узнать о миссии
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        {/* МИССИЯ */}
        <section id="mission" className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАША МИССИЯ</h2>
          </div>

          {/* Вводный текст */}
          <p style={{ fontSize: "18px", lineHeight: 1.7, maxWidth: "700px", marginBottom: "60px", color: "#444" }}>
            «Набережная добра» — это кафе, где каждый обед помогает кому-то сделать первый шаг в профессию. Мы не просто кормим — мы учим, поддерживаем и даём шанс тем, кому отказывают везде.
          </p>

          {/* Кому мы помогаем */}
          <h3 style={{
            fontFamily: "Unbounded, sans-serif",
            fontWeight: 800,
            fontSize: "22px",
            textTransform: "uppercase",
            marginBottom: "32px",
            letterSpacing: "-0.5px",
          }}>Кому мы помогаем</h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "64px" }}>
            {/* Карточка 1 */}
            <div style={{ border: "var(--border)", boxShadow: "var(--shadow)", padding: "32px", background: "white" }}>
              <div style={{
                width: "56px", height: "56px",
                background: "var(--primary)",
                border: "var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "26px",
                marginBottom: "20px",
                flexShrink: 0,
              }}>🏠</div>
              <h4 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "16px", textTransform: "uppercase", marginBottom: "12px" }}>
                Выпускники детских домов
              </h4>
              <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.7 }}>
                После 18 лет им некуда вернуться. Без опыта работы — нигде не берут. Мы даём первый шанс.
              </p>
            </div>

            {/* Карточка 2 */}
            <div style={{ border: "var(--border)", boxShadow: "var(--shadow)", padding: "32px", background: "white" }}>
              <div style={{
                width: "56px", height: "56px",
                background: "var(--secondary)",
                border: "var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "26px",
                marginBottom: "20px",
                flexShrink: 0,
              }}>🤝</div>
              <h4 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "16px", textTransform: "uppercase", marginBottom: "12px" }}>
                Люди с инвалидностью (ОВЗ)
              </h4>
              <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.7 }}>
                Работодатели отказывают из-за стереотипов. Мы адаптируем задачи под человека — не человека под задачи.
              </p>
            </div>

            {/* Карточка 3 */}
            <div style={{ border: "var(--border)", boxShadow: "var(--shadow)", padding: "32px", background: "white" }}>
              <div style={{
                width: "56px", height: "56px",
                background: "var(--accent)",
                border: "var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "26px",
                marginBottom: "20px",
                flexShrink: 0,
              }}>🌱</div>
              <h4 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "16px", textTransform: "uppercase", marginBottom: "12px" }}>
                Подростки 14–18 лет
              </h4>
              <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.7 }}>
                Хотят работать, но везде требуют опыт. У нас — гибкий график до 4 часов в день и первая запись в трудовой.
              </p>
            </div>
          </div>

          {/* Как это работает */}
          <h3 style={{
            fontFamily: "Unbounded, sans-serif",
            fontWeight: 800,
            fontSize: "22px",
            textTransform: "uppercase",
            marginBottom: "32px",
            letterSpacing: "-0.5px",
          }}>Как это работает</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { num: "01", title: "Отбор", text: "Кандидаты приходят через Центр занятости, детские дома, школы или по рекомендациям. Никаких требований к опыту — только желание учиться." },
              { num: "02", title: "Обучение с наставником", text: "Каждый стажёр закреплён за опытным пекарем, поваром или администратором. Наставник объясняет, показывает и помогает, пока навык не станет уверенным." },
              { num: "03", title: "Стажировка", text: "Гибкий график: подростки работают до 4 часов в день, для людей с ОВЗ — адаптированные задачи. Без спешки и давления." },
              { num: "04", title: "Результат", text: "Запись в трудовой книжке, первый опыт и уверенность: «я могу». Это открывает двери туда, где раньше отказывали." },
            ].map((step, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                borderTop: "var(--border)",
                padding: "28px 0",
                gap: "24px",
                alignItems: "start",
              }}>
                <span style={{
                  fontFamily: "Unbounded, sans-serif",
                  fontWeight: 800,
                  fontSize: "36px",
                  color: "var(--primary)",
                  lineHeight: 1,
                }}>{step.num}</span>
                <div>
                  <h4 style={{ fontWeight: 800, fontSize: "17px", textTransform: "uppercase", marginBottom: "8px" }}>{step.title}</h4>
                  <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.7 }}>{step.text}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: "var(--border)" }} />
          </div>

          {/* Итоговый призыв */}
          <div style={{
            marginTop: "56px",
            background: "var(--dark)",
            color: "white",
            padding: "40px",
            border: "var(--border)",
            boxShadow: "var(--shadow)",
            display: "flex",
            flexDirection: "column" as const,
            gap: "20px",
          }}>
            <p style={{ fontSize: "22px", fontFamily: "Unbounded, sans-serif", fontWeight: 800, lineHeight: 1.3, textTransform: "uppercase" }}>
              Вы едите —<br /><span style={{ color: "var(--accent)" }}>они растут.</span>
            </p>
            <p style={{ fontSize: "15px", color: "#aaa", lineHeight: 1.7, maxWidth: "560px" }}>
              Каждый ваш визит в кафе — это вклад в чью-то первую запись в трудовой. Без пожертвований, без фондов. Просто приходите обедать.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            МЫ В INSTAGRAM
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/02f76ace-4da7-4dfe-9232-80d82d8f628a/files/55f6edf7-1590-4710-a5bf-0592d2e1627c.jpg"
                alt="Атмосфера"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/02f76ace-4da7-4dfe-9232-80d82d8f628a/files/fc0eac55-5a0a-4192-bacf-6dfe62e7617b.jpg"
                alt="Обеды"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/02f76ace-4da7-4dfe-9232-80d82d8f628a/files/db9230d9-a417-479d-bc20-e3a2372c6bba.jpg"
                alt="Выпечка"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/02f76ace-4da7-4dfe-9232-80d82d8f628a/files/29c2026f-41f2-47da-9f48-78b5c9f8763d.jpg"
                alt="Кофе"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">НАБЕРЕЖНАЯ*ДОБРА</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Социальное кафе с домашней кухней и своей пекарней. Владивосток. Где каждый обед — это чей-то первый шаг.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Меню</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>О нас</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Миссия</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Контакты</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн-Пт: 08:00 - 20:00</li>
            <li>Сб: 09:00 - 18:00</li>
            <li>Вс: Выходной</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2024 НАБЕРЕЖНАЯ ДОБРА</span>
          <span>ВЛАДИВОСТОК</span>
          <span>VK / TG / IG</span>
        </div>
      </footer>
    </>
  );
}