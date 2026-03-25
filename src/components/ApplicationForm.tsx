import { useState } from "react";

const vacancyOptions = [
  "Пекарь",
  "Повар",
  "Официант",
  "Администратор",
  "Стажёр (оплачиваемая стажировка)",
  "Уборщик",
];

const categoryOptions = [
  "Подросток 14–18 лет",
  "Человек с инвалидностью (ОВЗ)",
  "Выпускник детского дома",
  "Другое",
];

export default function ApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vacancy: "",
    category: "",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="apply" className="section-padding">
        <div className="apply-success">
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
          <h3 className="apply-success-title">Заявка отправлена!</h3>
          <p className="apply-success-text">
            Мы получили вашу заявку и свяжемся с вами в течение 1–2 рабочих дней.<br />
            Спасибо, что выбрали «Набережную добра»!
          </p>
          <button
            className="apply-btn"
            onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", vacancy: "", category: "", comment: "" }); }}
          >
            Отправить ещё одну заявку
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="section-padding">
      <div className="section-header">
        <h2 className="section-title">ПОДАТЬ ЗАЯВКУ</h2>
      </div>

      <div className="apply-wrap">
        <div className="apply-info">
          <p className="apply-info-text">
            Заполните форму — и мы свяжемся с вами, чтобы обсудить подходящую вакансию и график. Опыт не нужен: мы обучаем с нуля.
          </p>
          <div className="apply-points">
            <div className="apply-point">
              <span>🤝</span>
              <span>Официальное трудоустройство по ТК РФ</span>
            </div>
            <div className="apply-point">
              <span>🎓</span>
              <span>Обучение с наставником — бесплатно</span>
            </div>
            <div className="apply-point">
              <span>📋</span>
              <span>Запись в трудовой книжке</span>
            </div>
            <div className="apply-point">
              <span>💛</span>
              <span>Гибкий график для особых категорий</span>
            </div>
          </div>
          <div className="apply-contact">
            Или позвоните нам:<br />
            <a href="tel:+79940183543" className="apply-phone">+7 994 018-35-43</a>
          </div>
        </div>

        <form className="apply-form" onSubmit={handleSubmit}>
          <div className="apply-field">
            <label className="apply-label">Ваше имя *</label>
            <input
              className="apply-input"
              type="text"
              name="name"
              placeholder="Иван Иванов"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="apply-field">
            <label className="apply-label">Номер телефона *</label>
            <input
              className="apply-input"
              type="tel"
              name="phone"
              placeholder="+7 ___ ___-__-__"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="apply-field">
            <label className="apply-label">Желаемая вакансия *</label>
            <select
              className="apply-input apply-select"
              name="vacancy"
              value={form.vacancy}
              onChange={handleChange}
              required
            >
              <option value="">Выберите вакансию...</option>
              {vacancyOptions.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          <div className="apply-field">
            <label className="apply-label">Категория (необязательно)</label>
            <select
              className="apply-input apply-select"
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option value="">Выберите категорию...</option>
              {categoryOptions.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="apply-field">
            <label className="apply-label">Комментарий (необязательно)</label>
            <textarea
              className="apply-input apply-textarea"
              name="comment"
              placeholder="Расскажите о себе, удобном графике или пожеланиях..."
              value={form.comment}
              onChange={handleChange}
              rows={3}
            />
          </div>

          <button className="apply-btn" type="submit" disabled={loading}>
            {loading ? "Отправляем..." : "Отправить заявку →"}
          </button>

          <p className="apply-privacy">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных
          </p>
        </form>
      </div>
    </section>
  );
}
