const product = [
  {
    name: "TV SAMSUNG QE55Q68BAUXXC (QLED - 55'' - 140 cm - 4K Ultra HD - Smart TV)",
    brand: "Samsung",
    price: 679.99,
    imageUrl: "https://www.worten.pt/i/9d5445cc13f940214bdf768d55ea3959a91a8d2f.jpg",
    discount: 15,
  },
  {
    name: "iPad APPLE (10.2'' - 256 GB - Wi-Fi - Cinzento Sideral)",
    brand: "Apple",
    price: 499.99,
    imageUrl: "https://www.worten.pt/i/c08feb7e3d390b41436d07808321e2fbc3589d1b.jpg",
    discount: 12,
  },
  {
    name: "Máquina Fotográfica Reflex CANON EOS 6D Mark II (Full-Frame)",
    brand: "Canon",
    price: 999.99,
    imageUrl: "https://www.worten.pt/i/7a5b793f6e55cffdff66f496685a77c35bb3210d.jpg",
    discount: 30,
  },
  {
    name: "Impressora EPSON EcoTank ET-2810 (Multifunções - Jato de Tinta - Wi-Fi)",
    brand: "Epson",
    price: 179.99,
    imageUrl: "https://www.worten.pt/i/9ea4c9c1bd2cb3ad2c381b4f59d2d8364555fdce.jpg",
    discount: 10,
  },
];

const cart = {
  total: 0,
  products: [],
};

function displayTotal() {
  const total = document.querySelector(".total-js span");
  total.innerHTML = cart.total;
}

function displayCart(name) {
  let listItem = document.createElement("li");
  listItem.setAttribute("class", "mx-3");
  listItem.style.fontSize = "10px";

  listItem.innerHTML = `
    <h2 class="fs-5">${name}</h2>
    `;

  document.querySelector(".list-cart-js").appendChild(listItem);
}

function addToCart(event) {
  product.forEach((element) => {
    if (event.target.id === element.name) {
      let productExist = false;
      let result = calcDiscount(element.price, element.discount);

      cart.products.find(function (prod) {
        if (prod.name === element.name) {
          productExist = true;
          prod.quantity += 1;
        }
      });

      if (!productExist) {
        cart.products.push({ name: element.name, quantity: 1 });
        displayCart(element.name);
      }

      cart.total += result;
    }
  });
  displayTotal();
}

function calcDiscount(price, discount) {
  let result = Math.floor(price * (1 - discount / 100));
  return result;
}

function displayProduct() {
  product.forEach((element) => {
    let listItem = document.createElement("li");
    listItem.setAttribute("class", "mx-3");

    let result = calcDiscount(element.price, element.discount);

    listItem.innerHTML = `
      <img src="${element.imageUrl}" class="img-fluid" alt="" />
      <h2 class="fs-5">${element.name}</h2>
      <p>Brand: ${element.brand}</p>
      <p>Price: ${element.price}</p>
      <p>Discount: ${element.discount}%</p>
      <p>Total: ${result}€</p>
      `;

    let button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    button.setAttribute("id", element.name);
    button.setAttribute("onClick", "addToCart(event)");

    listItem.appendChild(button);

    document.querySelector("ul").appendChild(listItem);
  });
}

displayProduct();
displayTotal();
