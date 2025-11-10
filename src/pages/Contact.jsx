import "./Contact.css";


export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p className="contact-info">
        Menerima layanan <strong>Dine In</strong>, <strong>Take Away</strong>,{" "}
        <strong>Delivery Order</strong>, dan <strong>Catering</strong>.
      </p>
      <p>📍 Alamat: Taman Sentosa D3 No 26, Cikarang, Kab. Bekasi</p>
      <p>📞 Telepon: 0852-8300-5472</p>
      <a href="https://wa.me/6285233005472" className="btn-yellow">
        Chat via WhatsApp
      </a>
    </section>
  );
}
