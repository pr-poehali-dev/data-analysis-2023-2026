export default function Index() {
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

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШ ВЫБОР</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Полное меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит дня</span>
              <img
                src="https://cdn.poehali.dev/projects/02f76ace-4da7-4dfe-9232-80d82d8f628a/files/fc0eac55-5a0a-4192-bacf-6dfe62e7617b.jpg"
                alt="Обед дня"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Комплексный обед</h3>
                  <span className="price">490 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Суп дня, второе блюдо, салат и хлеб. Готовим как дома — с любовью и без спешки.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Пекарня
              </span>
              <img
                src="https://cdn.poehali.dev/projects/02f76ace-4da7-4dfe-9232-80d82d8f628a/files/db9230d9-a417-479d-bc20-e3a2372c6bba.jpg"
                alt="Выпечка"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Свежая выпечка</h3>
                  <span className="price">от 90 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Круассаны, пирожки, булочки с корицей и блины — всё печём сами каждое утро.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Кофе
              </span>
              <img
                src="https://cdn.poehali.dev/projects/02f76ace-4da7-4dfe-9232-80d82d8f628a/files/29c2026f-41f2-47da-9f48-78b5c9f8763d.jpg"
                alt="Кофе"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Авторский кофе</h3>
                  <span className="price">от 180 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Качественные зёрна, умелые руки. Просто хороший кофе без лишних слов.
                </p>
              </div>
            </div>
          </div>
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
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Миссия
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
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
