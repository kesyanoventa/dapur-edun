import "./Products.css";
import menuImage from "../assets/menu.jpg";
import ayamgoreng from "../assets/ayamgoreng.jpg";
import gepuk from "../assets/gepuk.jpg";
import taichan from "../assets/taichan.jpg";

export default function Products() {
  const favorites = [
    {
      name: "Nasi Goreng Edun",
      desc: "Nasi goreng pedas gurih khas Dapur Edun.",
      price: "Rp20.000",
      img: ayamgoreng,
    },
    {
      name: "Mie Goreng Jawa",
      desc: "Mie goreng manis pedas khas tradisional.",
      price: "Rp18.000",
      img: taichan,
    },
    {
      name: "Ayam Geprek Sambal Matah",
      desc: "Ayam crispy dengan sambal matah segar.",
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
