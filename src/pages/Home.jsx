import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="overlay">
        <p className="fade-in">Open Hours 10.00 - 20.00</p>
        <h2 className="fade-in delay-1">Selamat Datang di Dapur Edun</h2>
        <p className="fade-in delay-2">
          Rasakan kelezatan masakan rumahan khas nusantara dengan cita rasa yang edun banget!
        </p>
        <a href="/products" className="btn-yellow fade-in delay-3">
          Lihat Menu
        </a>
      </div>
    </section>
  );
}
