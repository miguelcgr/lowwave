const products = [
  {
    id: 1,
    title: "Auriculares Hi-fi K240 tipo diadema diseño minimalista",
    image: "https://1197437599.rsc.cdn77.org/front-a/product_1.png",
    description:
      "Auriculares de diseño minimalista tipo diadema de la marca AKG. Lo último para escuchar música sin renunciar al estilo.",
    price: "199",
    discounted: "149€",
    new: "New",
    promo: "",
    currency: "€",
  },
  {
    id: 2,
    title: "Auriculares running de tipo botón B&O",
    image: "https://1197437599.rsc.cdn77.org/front-a/product_2.jpg",
    description:
      "Bang & Olufsen Beoplay E8 2.0 - Auriculares Inalámbricos con Bluetooth, Color Beige (Limestone), Talla única",
    price: "249",
    discounted: "",
    new: "",
    promo: "%",
    currency: "€",
  },
  {
    id: 3,
    title: "Auriculares de estudio Bang & Olufsen",
    image: "https://1197437599.rsc.cdn77.org/front-a/product_4.jpg",
    description:
      "Auriculares de estudio de HiFi que ofrecen todo lo que esperas y algunas cosas que jamás creíste posibles.",
    price: "599",
    discounted: "449€",
    new: "New",
    promo: "%",
    currency: "€",
  },
  {
    id: 4,
    title: "Monitores logitech clásicos para PC",
    image: "https://1197437599.rsc.cdn77.org/front-a/poduct_3.jpeg",
    description:
      "Monitores clásicos y básicos en cualquier casa. Escucha música o revive la emoción de tus juegos preferidos con el sonido de estos altavoces. Producto con una gran relación calidad-precio",
    price: "99",
    discounted: "49€",
    new: "",
    promo: "",
    currency: "€",
  },
];

const cards = document.getElementById("products");

products.forEach((element) => {
  const content = `
    <article class= "product-card">
      <div class= "images">
        <div class="promos">
          <span class="promo">${element.promo}</span>
          <span class="new">${element.new}</span>
        </div>
        <img class="product-pic" src=${element.image} alt="imagen">
      </div>
          
      <div class= "product-info">
        <h5 class="title">${element.title}</h5>
        <div class="prices">
          <h5 class="price">${element.price}${element.currency}</h5>  
          <h5 class="discounted">${element.discounted}</h5>
        </div>
        <p>${element.description}</p>
      </div>
    </article>
  `;

  cards.innerHTML += content;
});
