import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="overlay">
        <p> Open Hours 10.00 - 20.00</p>
        <h2>Selamat Datang di Dapur Edun</h2>
        <p>Rasakan kelezatan masakan rumahan khas nusantara dengan cita rasa yang edun banget!</p>
        <a href="/products" className="btn-yellow">Lihat Menu</a>
      </div>
    </section>
  );
}
