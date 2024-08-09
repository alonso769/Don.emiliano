function filterProducts(country) {
    var products = document.getElementsByClassName('product-card');
    for (var i = 0; i < products.length; i++) {
        if (country === 'all') {
            products[i].style.display = 'flex'; // Cambiado a 'flex' para mantener el layout
        } else if (products[i].classList.contains(country)) {
            products[i].style.display = 'flex'; // Cambiado a 'flex' para mantener el layout
        } else {
            products[i].style.display = 'none';
        }
    }
}



