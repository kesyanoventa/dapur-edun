import "./About.css";
import dapurImage from "../assets/warung.jpg"; 

export default function About() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Dapur Edun</h2>
          <p>
            Dapur Edun adalah restoran yang menyajikan masakan khas dengan cita
            rasa rumahan namun dikemas secara modern. Kami berkomitmen
            memberikan pengalaman makan terbaik bagi pelanggan melalui layanan
            cepat, higienis, dan lezat.
          </p>
        </div>
        <div className="about-image">
          <img src={dapurImage} alt="Dapur Edun" />
        </div>
      </div>
    </section>
  );
}
