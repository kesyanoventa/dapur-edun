import "./About.css";
import dapurImage from "../assets/warung.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text fade-in">
          <h2>About Dapur Edun</h2>
          <p>
            Dapur Edun adalah restoran yang menyajikan masakan khas dengan cita rasa rumahan namun
            dikemas secara modern. Kami berkomitmen memberikan pengalaman makan terbaik bagi pelanggan
            melalui layanan cepat, higienis, dan lezat.
          </p>
          <p>
            Dengan suasana hangat dan nyaman, Dapur Edun menjadi tempat sempurna untuk menikmati
            hidangan bersama keluarga dan teman-teman. Kami percaya bahwa setiap sajian memiliki cerita —
            dan kami ingin berbagi cerita rasa dengan Anda.
          </p>
        </div>

        <div className="about-image fade-in delay-1">
          <img src={dapurImage} alt="Dapur Edun" />
        </div>
      </div>
    </section>
  );
}
