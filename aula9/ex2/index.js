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
  {
    sku: 5,
    name: "Máquina de Café KRUPS Nespresso Essenza Mini XN1108P2 Preto",
    brand: "Krups",
    price: 116.99,
    imageUrl: "https://www.worten.pt/i/4335b07165234775db12e671b2b68fc808b71938.jpg",
    discount: 70,
  },
  {
    sku: 6,
    name: "Jogo de Tabuleiro DEVIR Catan (Idade Mínima: 10 - Nível Dificuldade: Intermédio)",
    brand: "Devir",
    price: 44.99,
    imageUrl: "https://www.worten.pt/i/11f53174c49538f910f48724b604328f4ca1be5c.jpg",
    discount: 36,
  },
  {
    sku: 7,
    name: "Monitor Gaming Curvo AOC C27G2ZE/BK (27'' - 0.5 ms - 240 Hz - FreeSync Premium)",
    brand: "AOC",
    price: 189.99,
    imageUrl: "https://www.worten.pt/i/053ba04142bad0d3c05659eb8b034c8f5a9596d4.jpg",
    discount: 0,
  },
  {
    sku: 8,
    name: "Aspirador Robô IROBOT Roomba i7158 (Autonomia 75 min - Cinza Carvão)",
    brand: "IROBOT",
    price: 679.99,
    imageUrl: "https://www.worten.pt/i/6a180cbe24919a5ee46b0532d1d07ede8aa5d40e.jpg",
    discount: 41,
  },
];

let cart = {
  total: 0,
  products: [],
};

function displayProduct(product) {
  const htmlString = product
    .map((product) => {
      let result = calcDiscount(product.price, product.discount);

      return `
        <div class="col-2 m-3"> 
          <div class="w-100 h-100 d-flex flex-column justify-content-between align-items-start">
            <div class="img-box mb-2">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </div>
            <h2 class="fs-5">${product.name}</h2>
            <div class="prod-desc">
              <p>Brand: ${product.brand}</p>
              <p>Discount: ${product.discount}%</p>
              <p>Price: <span>€${result}</span> <sup><s>€${product.price}</s></sup></p>
              <button class="px-2" onclick="addToCart(${product.sku})">Adicionar</button>
            </div>
          </div>
        </div>
        `;
    })
    .join("");

  document.querySelector("#product-list").innerHTML = htmlString;
  displayTotal();
}

function displayTotal(isAddSubtract) {
  let result = calcDiscount(element.price, element.discount);

  if (isAddSubtract === "subtract") {
    cart.total = parseFloat((cart.total - result).toFixed(2));
  } else {
    cart.total = parseFloat((cart.total + result).toFixed(2));
  }

  const total = document.querySelector(".total-js");
  total.innerHTML = `Total: €${cart.total}`;
}

function addToCart(btnId) {
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

function displayCart(sku, productExist) {
  if (!productExist) {
    cart.products.find(function (prod) {
      if (prod.sku === sku) {
        displayCartHtml(prod, sku);
      }
    });
  } else {
    updateQuantityAndPrice(sku);
  }
}

function removeProdCart(sku) {
  const removedProduct = cart.products.find(function (prod) {
    return prod.sku === sku;
  });

  const indexProd = cart.products.indexOf(removedProduct);

  cart.products.splice(indexProd, 1);

  document.querySelector("#cart").innerHTML = "";

  cart.products.forEach((prod) => {
    displayCartHtml(prod, sku);
  });

  displayTotal("subtract");
}

function displayCartHtml(prod, sku) {
  const cartDiv = document.createElement("div");
  cartDiv.setAttribute("class", "row");

  cartDiv.innerHTML = `
      <div class="col-2">
        <img src="${prod.imageUrl}" class="img-fluid" alt="" />
      </div>
      <div class="col-10">
        <h2 class="fs-custom">${prod.name}</h2>
        <div class="prod-desc">
          <p class="m-0" id="prod-quantity-${sku}">Quantity: ${prod.quantity}</p>
          <p class="m-0" id="prod-price-${sku}">Price: <span>€${prod.price}</span></p>
          <button onclick="removeProdCart(${sku})">Remove</button>
        </div>
      </div>
  `;

  document.querySelector("#cart").appendChild(cartDiv);
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

function calcDiscount(price, discount) {
  let result = price * (1 - discount / 100);
  return parseFloat(result.toFixed(2));
}

function resetCart() {
  cart.total = 0;
  cart.products = [];
  document.querySelector("#cart").innerHTML = "";
  document.querySelector(".total-js").innerHTML = `Total: €${cart.total}`;
}

const searchBar = document.querySelector("#search-bar");

searchBar.addEventListener("keyup", () => {
  const searchStr = searchBar.value.toLowerCase();

  const filteredProducts = product.filter((product) => {
    return product.name.toLowerCase().includes(searchStr) || product.brand.toLowerCase().includes(searchStr);
  });

  displayProduct(filteredProducts);
});

displayProduct(product);
