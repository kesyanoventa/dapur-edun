import "./Products.css";
import menuImage from "../assets/menu.jpg";
import ayamgoreng from "../assets/ayamgoreng.jpg";
import gepuk from "../assets/gepuk.jpg";
import taichan from "../assets/taichan.jpg";

export default function Products() {
  const favorites = [
    {
      name: "Ayam Goreng",
      desc: "Ayam goreng dengan bumbu penuh rempah.",
      price: "Rp17.000",
      img: ayamgoreng,
    },
    {
      name: "Sate Taichan",
      desc: "Sate ayam dengan bumbu taichan pedas dan segar.",
      price: "Rp20.000",
      img: taichan,
    },
    {
      name: "Gepuk",
      desc: "Daging sapi gepuk dengan bumbu khas.",
      price: "Rp22.000",
      img: gepuk,
    },
  ];

  return (
    <section className="products">
      <h2>Daftar Menu Lengkap</h2>

      <div className="menu-banner">
        <img src={menuImage} alt="Daftar Menu Dapur Edun" />
      </div>

      <h2>Favorit Pelanggan</h2>
      <div className="product-list">
        {favorites.map((item, i) => (
          <div className="card" key={i}>
            <img src={item.img} alt={item.name} />
            <div className="card-content">
              <h3>{item.name}</h3>
              <span className="price">{item.price}</span>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
