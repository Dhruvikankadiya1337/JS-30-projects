const cartItems = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
const cart = [];


function addToCart(name, price, imageUrl) {
  cart.push({ name, price, imageUrl });
  displayCart();
}

function displayCart() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';

    itemDiv.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p>₹${item.price}</p>
      </div>
    `;

    cartItems.appendChild(itemDiv);
    total += item.price;
  });

  totalElement.textContent = `Total: ₹${total}`;
}
