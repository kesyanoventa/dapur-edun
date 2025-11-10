import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container fade-in">
        <h2>Contact Us</h2>
        <p className="contact-info">
          Menerima layanan <strong>Dine In</strong>, <strong>Take Away</strong>,{" "}
          <strong>Delivery Order</strong>, dan <strong>Catering</strong>.
        </p>
        <div className="contact-details">
          <p>📍 Taman Sentosa D3 No 26, Cikarang, Kab. Bekasi</p>
          <p>📞 0852-8300-5472</p>
        </div>
        <a href="https://wa.me/6285283005472" className="btn-yellow fade-in delay-1">
          Chat via WhatsApp
        </a>
      </div>
    </section>
  );
}
