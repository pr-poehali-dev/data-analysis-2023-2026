import { useState } from "react";

const stages = [
  {
    id: 1,
    title: "Этап 1. Отбор и адаптация",
    icon: "🤝",
    content: (
      <div className="training-table-wrap">
        <table className="training-table">
          <thead>
            <tr>
              <th>Что происходит</th>
              <th>Срок</th>
              <th>Ответственные</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Направление кандидатов из Центра занятости, детских домов, школ</td>
              <td><span className="training-badge">Непрерывно</span></td>
              <td>Центр занятости, социальные педагоги</td>
            </tr>
            <tr>
              <td>Собеседование: выявление мотивации, графика, ограничений (для людей с ОВЗ)</td>
              <td><span className="training-badge">1 день</span></td>
              <td>Администратор кафе</td>
            </tr>
            <tr>
              <td>Подписание договора о стажировке (для несовершеннолетних — с согласия родителей)</td>
              <td><span className="training-badge">1 день</span></td>
              <td>Юрист, родители (для подростков)</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 2,
    title: "Этап 2. Обучение (2 недели)",
    icon: "📚",
    content: (
      <div>
        <div className="training-table-wrap">
          <table className="training-table">
            <thead>
              <tr>
                <th>Направление</th>
                <th>Что осваивает</th>
                <th>Кто обучает</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Пекарня</strong></td>
                <td>Замес теста, формовка, выпечка круассанов, булочек, пирожков</td>
                <td>Пекарь-наставник</td>
              </tr>
              <tr>
                <td><strong>Кухня</strong></td>
                <td>Приготовление супов, вторых блюд, салатов, работа с продуктами</td>
                <td>Шеф-повар</td>
              </tr>
              <tr>
                <td><strong>Зал и касса</strong></td>
                <td>Обслуживание гостей, приём заказов, работа с кассой, уборка столов</td>
                <td>Администратор, старший официант</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="training-note">
          <strong>График обучения:</strong> 3–4 часа в день (для подростков), 4–6 часов (для взрослых), 5 дней в неделю.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Этап 3. Стажировка (1–3 месяца)",
    icon: "⚙️",
    content: (
      <div className="training-table-wrap">
        <table className="training-table">
          <thead>
            <tr>
              <th>Условия</th>
              <th>Подростки 14–18 лет</th>
              <th>Люди с инвалидностью</th>
              <th>Выпускники детдомов</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>График</strong></td>
              <td>До 4 часов в день, только в светлое время</td>
              <td>Адаптированный, с учётом рекомендаций ИПРА</td>
              <td>4–6 часов в день, гибко</td>
            </tr>
            <tr>
              <td><strong>Задачи</strong></td>
              <td>Помощь в зале, подача выпечки, уборка</td>
              <td>Индивидуально подобранные (например, работа с тестом, упаковка)</td>
              <td>Полный цикл на одном участке (пекарня / кухня / зал)</td>
            </tr>
            <tr>
              <td><strong>Наставник</strong></td>
              <td>Закреплённый администратор</td>
              <td>Закреплённый наставник</td>
              <td>Закреплённый повар или пекарь</td>
            </tr>
            <tr>
              <td><strong>Оплата</strong></td>
              <td>Оплачиваемая стажировка (процент от ставки)</td>
              <td>Оплачиваемая стажировка</td>
              <td>Оплачиваемая стажировка</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 4,
    title: "Этап 4. Трудоустройство (после стажировки)",
    icon: "🎓",
    content: (
      <div className="training-table-wrap">
        <table className="training-table">
          <thead>
            <tr>
              <th>Что получает стажёр</th>
              <th>Как оформляется</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Запись в трудовой книжке</td>
              <td>Официальное оформление по ТК РФ (ИП или ООО)</td>
            </tr>
            <tr>
              <td>Постоянное рабочее место (при успешном прохождении)</td>
              <td>Вакансия: пекарь, повар, официант, администратор</td>
            </tr>
            <tr>
              <td>Рекомендательное письмо</td>
              <td>Для дальнейшего трудоустройства в другие заведения</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
];

export default function TrainingPlan() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="training" className="section-padding">
      <div className="section-header">
        <h2 className="section-title">ПЛАН ОБУЧЕНИЯ СТАЖЁРОВ</h2>
      </div>

      <div className="training-steps">
        {stages.map((stage, i) => (
          <button
            key={stage.id}
            className={`training-step-btn${activeStage === i ? " active" : ""}`}
            onClick={() => setActiveStage(i)}
          >
            <span className="training-step-num">{stage.id}</span>
            <span className="training-step-icon">{stage.icon}</span>
            <span className="training-step-title">{stage.title}</span>
          </button>
        ))}
      </div>

      <div className="training-content">
        {stages[activeStage].content}
      </div>
    </section>
  );
}
