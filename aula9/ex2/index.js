const product = [
  {
    sku: 1,
    name: "TV SAMSUNG QE55Q68BAUXXC (QLED - 55'' - 140 cm - 4K Ultra HD - Smart TV)",
    brand: "Samsung",
    price: 679.99,
    imageUrl: "https://www.worten.pt/i/9d5445cc13f940214bdf768d55ea3959a91a8d2f.jpg",
    discount: 15,
  },
  {
    sku: 2,
    name: "iPad APPLE (10.2'' - 256 GB - Wi-Fi - Cinzento Sideral)",
    brand: "Apple",
    price: 499.99,
    imageUrl: "https://www.worten.pt/i/c08feb7e3d390b41436d07808321e2fbc3589d1b.jpg",
    discount: 12,
  },
  {
    sku: 3,
    name: "Máquina Fotográfica Reflex CANON EOS 6D Mark II (Full-Frame)",
    brand: "Canon",
    price: 999.99,
    imageUrl: "https://www.worten.pt/i/7a5b793f6e55cffdff66f496685a77c35bb3210d.jpg",
    discount: 30,
  },
  {
    sku: 4,
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

function displayCart(sku, productExist) {
  if (!productExist) {
    cart.products.find(function (prod) {
      if (prod.sku === sku) {
        const cartDiv = document.createElement("div");
        cartDiv.setAttribute("class", "col-2");

        cartDiv.innerHTML = `
        <div class="w-100 h-100 d-flex flex-column justify-content-between align-items-start">
        <div class="img-box mb-2">
          <img src="${prod.imageUrl}" class="img-fluid" alt="" />
        </div>
        <h2 class="fs-custom">${prod.name}</h2>
        <div class="prod-desc">
          <p id="prod-quantity-${sku}">Quantity: ${prod.quantity}</p>
          <p id="prod-price-${sku}">Price: <span>€${prod.price}</span></p>
        </div>
      </div>
        `;

        document.querySelector("#cart").appendChild(cartDiv);
      }
    });
  } else {
    updateQuantityAndPrice(sku);
  }
}

function updateQuantityAndPrice(sku) {
  cart.products.find(function (prod) {
    if (prod.sku === sku) {
      let prodQuantity = document.querySelector(`#prod-quantity-${sku}`);
      let prodPrice = document.querySelector(`#prod-price-${sku}`);

      prodQuantity.innerHTML = `Quantity: ${prod.quantity}`;
      prodPrice.innerHTML = `Price: <span>€${parseFloat((prod.price * prod.quantity).toFixed(2))}`;
    }
  });
}

function addToCart(event) {
  let btnId = parseInt(event.target.id);

  product.forEach((element) => {
    if (btnId === element.sku) {
      let productExist = false;
      let result = calcDiscount(element.price, element.discount);

      cart.products.find(function (prod) {
        if (prod.sku === element.sku) {
          productExist = true;
          prod.quantity += 1;
        }
      });

      if (!productExist) {
        cart.products.push({ sku: element.sku, name: element.name, imageUrl: element.imageUrl, price: result, quantity: 1 });
      }
      displayCart(element.sku, productExist);

      cart.total = parseFloat((cart.total + result).toFixed(2));
    }
  });
  displayTotal();
}

function calcDiscount(price, discount) {
  let result = price * (1 - discount / 100);
  return parseFloat(result.toFixed(2));
}

function displayProduct() {
  product.forEach((element) => {
    const productDiv = document.createElement("div");
    productDiv.setAttribute("class", "col-3");

    let result = calcDiscount(element.price, element.discount);

    productDiv.innerHTML = `
    <div class="w-100 h-100 d-flex flex-column justify-content-between align-items-start">
      <div class="img-box mb-2">
        <img src="${element.imageUrl}" class="img-fluid" alt="" />
      </div>
      <h2 class="fs-5">${element.name}</h2>
      <div class="prod-desc">
        <p>Brand: ${element.brand}</p>
        <p>Discount: ${element.discount}%</p>
        <p>Price: <span>€${result}</span> <sup><s>€${element.price}</s></sup></p>
        <button class="px-2" id="${element.sku}" onclick="addToCart(event)">Adicionar</button>
      </div>
    </div>
      `;

    document.querySelector("#product-list").appendChild(productDiv);
  });
}

displayProduct();
displayTotal();
