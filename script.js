// Product filtering (homepage only)
const filterBtns = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-card');

if (filterBtns.length && products.length) {
    function filterProducts(category) {
        products.forEach(product => {
            if (category === 'all' || product.getAttribute('data-category') === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProducts(btn.getAttribute('data-filter'));
        });
    });
}

// Full gallery population
const fullGrid = document.getElementById('fullGallery');
if (fullGrid) {
    const allProducts = [
        { name: "Keychain", category: "Gifts", price: "₹99 - ₹149" },
        { name: "Phone Case", category: "Accessories", price: "₹300 - ₹400" },
        { name: "Bookmark", category: "Gifts", price: "₹120 - ₹150" },
        { name: "Pen & Diary", category: "Gifts", price: "₹349" },
        { name: "Wall Hanging", category: "Wall Art", price: "₹149 - ₹299" },
        { name: "Car Hanging", category: "Accessories", price: "₹149 - ₹249" },
        { name: "Fridge Magnets", category: "Gifts", price: "₹149" },
        { name: "Puja Thali", category: "Religious", price: "₹450 - ₹2000" },
        { name: "Studs & Box", category: "Accessories", price: "₹650" },
        { name: "Car Frame", category: "Frames", price: "₹2250 - ₹8850" },
        { name: "Clock", category: "Clocks", price: "₹850 - ₹8850" },
        { name: "Photo Frame", category: "Frames", price: "₹850 - ₹2250" },
        { name: "Nikahanama Frame", category: "Frames", price: "₹1500 - ₹6500" },
        { name: "Heart Frame", category: "Frames", price: "₹3500 - ₹16500" },
        { name: "Wall Frame", category: "Wall Art", price: "₹2500 - ₹16500" },
        { name: "Varmala Preservation", category: "Special", price: "₹5500 - ₹12500" },
        { name: "Engagement Tray", category: "Trays", price: "₹2250 - ₹3250" },
        { name: "Rehal Combo", category: "Religious", price: "₹1850 - ₹6550" },
        { name: "Resin Utensils", category: "Utensils", price: "₹12500" }
    ];

    fullGrid.innerHTML = allProducts.map(p => `
        <div class="product-card">
            <div class="product-img"></div>
            <div class="product-title">${p.name}</div>
            <div class="product-category">${p.category}</div>
            <div class="price-tag">${p.price}</div>
        </div>
    `).join('');
}