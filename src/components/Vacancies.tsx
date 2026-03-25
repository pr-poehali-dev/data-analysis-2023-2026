import { useState } from "react";

const vacancies = [
  {
    title: "Пекарь",
    count: 2,
    salary: "55 000 ₽",
    icon: "🥐",
    description: "Замес теста, формовка, выпечка круассанов, булочек, пирожков. Работа с наставником.",
    schedule: "5 дней в неделю, утренняя смена",
    requirements: "Опыт не обязателен — обучаем с нуля",
  },
  {
    title: "Повар",
    count: 2,
    salary: "60 000 ₽",
    icon: "🍳",
    description: "Приготовление супов, вторых блюд, салатов. Работа с продуктами, соблюдение рецептур.",
    schedule: "5 дней в неделю",
    requirements: "Желателен опыт на кухне, но не обязателен",
  },
  {
    title: "Официант",
    count: 2,
    salary: "40 000 ₽",
    icon: "🍽️",
    description: "Обслуживание гостей, приём заказов, работа с кассой, поддержание чистоты в зале.",
    schedule: "Гибкий график, 4–6 часов в день",
    requirements: "Коммуникабельность, аккуратность",
  },
  {
    title: "Администратор",
    count: 1,
    salary: "60 000 ₽",
    icon: "📋",
    description: "Управление сменой, работа с кассой и поставщиками, наставничество стажёров.",
    schedule: "5 дней в неделю",
    requirements: "Опыт в сфере общепита приветствуется",
  },
  {
    title: "Стажёр (оплачиваемая стажировка)",
    count: 4,
    salary: "20 000 ₽",
    icon: "🌱",
    description: "Работа на одном из участков: пекарня, кухня или зал. Полное обучение с наставником.",
    schedule: "3–6 часов в день, 5 дней в неделю",
    requirements: "Для подростков 14+, людей с ОВЗ, выпускников детдомов",
  },
  {
    title: "Уборщик",
    count: 1,
    salary: "35 000 ₽",
    icon: "🧹",
    description: "Поддержание чистоты в зале, кухне и пекарне. Официальное трудоустройство.",
    schedule: "Утренняя смена, 5 дней в неделю",
    requirements: "Ответственность, аккуратность",
  },
];

const fotRows = [
  { role: "Пекарь", count: 2, salary: "55 000", total: "110 000" },
  { role: "Официант", count: 2, salary: "40 000", total: "80 000" },
  { role: "Администратор", count: 1, salary: "60 000", total: "60 000" },
  { role: "Стажёры (оплачиваемая стажировка)", count: 4, salary: "20 000", total: "80 000" },
  { role: "Повар", count: 2, salary: "60 000", total: "120 000" },
  { role: "Уборщик", count: 1, salary: "35 000", total: "35 000" },
];

export default function Vacancies() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="vacancies" className="section-padding">
      <div className="section-header">
        <h2 className="section-title">ВАКАНСИИ</h2>
      </div>

      <div className="vac-grid">
        {vacancies.map((v) => (
          <div
            key={v.title}
            className={`vac-card${selected === v.title ? " vac-card--active" : ""}`}
            onClick={() => setSelected(selected === v.title ? null : v.title)}
          >
            <div className="vac-card-top">
              <span className="vac-icon">{v.icon}</span>
              <div className="vac-count">{v.count} {v.count === 1 ? "место" : "места"}</div>
            </div>
            <h3 className="vac-title">{v.title}</h3>
            <div className="vac-salary">{v.salary}<span>/мес</span></div>

            {selected === v.title && (
              <div className="vac-details">
                <p>{v.description}</p>
                <div className="vac-detail-row">
                  <span>📅 График:</span> {v.schedule}
                </div>
                <div className="vac-detail-row">
                  <span>✅ Требования:</span> {v.requirements}
                </div>
              </div>
            )}

            <div className="vac-cta">
              {selected === v.title ? "Скрыть ↑" : "Подробнее ↓"}
            </div>
          </div>
        ))}
      </div>

      {/* ФОТ таблица */}
      <div style={{ marginTop: "48px" }}>
        <h3 className="vac-fot-title">Фонд оплаты труда</h3>
        <div className="training-table-wrap">
          <table className="training-table">
            <thead>
              <tr>
                <th>Должность</th>
                <th style={{ textAlign: "center" }}>Кол-во</th>
                <th style={{ textAlign: "right" }}>Ставка, ₽</th>
                <th style={{ textAlign: "right" }}>Итого, ₽</th>
              </tr>
            </thead>
            <tbody>
              {fotRows.map((row) => (
                <tr key={row.role}>
                  <td>{row.role}</td>
                  <td style={{ textAlign: "center", fontWeight: 700 }}>{row.count}</td>
                  <td style={{ textAlign: "right" }}>{row.salary}</td>
                  <td style={{ textAlign: "right", fontWeight: 700 }}>{row.total}</td>
                </tr>
              ))}
              <tr className="fot-subtotal">
                <td><strong>ИТОГО ФОТ</strong></td>
                <td style={{ textAlign: "center" }}><strong>13</strong></td>
                <td></td>
                <td style={{ textAlign: "right" }}><strong>485 000</strong></td>
              </tr>
              <tr>
                <td colSpan={3}>Страховые взносы (30%)</td>
                <td style={{ textAlign: "right", fontWeight: 700 }}>145 500</td>
              </tr>
              <tr className="fot-total">
                <td colSpan={3}><strong>ВСЕГО С НАЛОГАМИ</strong></td>
                <td style={{ textAlign: "right" }}><strong>630 500</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
