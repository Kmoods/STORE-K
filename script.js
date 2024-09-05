// Produtos disponíveis
const products = [
    { id: 1, name: 'Bot Básico', price: 2 },
    { id: 2, name: 'Bot Intermediário', price: 5 },
    { id: 3, name: 'Bot Avançado', price: 9 },
    { id: 4, name: 'API', price: 15 }
];

// Carrinho de compras
let cart = [];

// Adiciona um produto ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Remove um produto do carrinho
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Atualiza a visualização do carrinho
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const itemElement = document.createElement('li');
        itemElement.innerText = `${item.name} - R$${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.innerHTML = '<i class="fas fa-times"></i>';
        removeButton.onclick = () => {
            removeFromCart(index);
        };
        itemElement.appendChild(removeButton);
        cartItems.appendChild(itemElement);
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.innerText = `Total: R$${total}`;
}

// Confirma a compra e envia os detalhes
function confirmPurchase() {
    const userName = document.getElementById('user-name').value;
    const userEmail = document.getElementById('user-email').value;
    const paymentMethod = document.getElementById('payment-method').value;
    const pixName = document.getElementById('pix-name').value;

    if (cart.length === 0) {
        alert('Seu carrinho está vazio.');
        return;
    }

    if (userName === '' || userEmail === '' || pixName === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    let purchaseDetails = `Usuário: ${userName}\nE-mail: ${userEmail}\nForma de Pagamento: ${paymentMethod}\nNome no PIX: ${pixName}\nProdutos:\n`;
    cart.forEach(item => {
        purchaseDetails += `${item.name} - R$${item.price}\n`;
    });
    purchaseDetails += `Total: R$${cart.reduce((sum, item) => sum + item.price, 0)}`;

    alert(`Compra confirmada!\n\n${purchaseDetails}`);

            // Enviar para o WhatsApp
            sendToWhatsApp(purchaseDetails);

            // Limpa o carrinho após a compra
            cart = [];
            updateCart();
        }

        // Função que envia a mensagem para o WhatsApp
        function sendToWhatsApp(message) {
            const phoneNumber = "556981134127"; // Número de WhatsApp em formato internacional
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            // Abre a URL do WhatsApp
            window.open(url, '_blank');
        }


console.log('Store kmoods!©')