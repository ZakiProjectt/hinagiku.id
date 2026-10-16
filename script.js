// Main JavaScript file

// ===== Navigation Toggle =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ===== Load Products on Home Page =====
    const bestSellerGrid = document.getElementById('bestSellerGrid');
    if (bestSellerGrid && typeof productsData !== 'undefined') {
        loadBestSellers();
    }

    // ===== Load All Products on Products Page =====
    const allProductsGrid = document.getElementById('allProductsGrid');
    if (allProductsGrid && typeof productsData !== 'undefined') {
        loadAllProducts();
        setupFilters();
    }

    // ===== Load Product Detail =====
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (productId && typeof productsData !== 'undefined') {
        loadProductDetail(productId);
    }

    // ===== Contact Form =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // ===== Smooth Scroll =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== Load Best Sellers =====
function loadBestSellers() {
    const bestSellerGrid = document.getElementById('bestSellerGrid');
    const bestSellers = productsData.filter(product => product.bestSeller).slice(0, 8);
    
    bestSellerGrid.innerHTML = bestSellers.map(product => createProductCard(product)).join('');
}

// ===== Load All Products =====
function loadAllProducts(filter = 'all') {
    const allProductsGrid = document.getElementById('allProductsGrid');
    let filteredProducts = productsData;

    if (filter !== 'all') {
        if (filter === 'best-seller') {
            filteredProducts = productsData.filter(product => product.bestSeller);
        } else {
            filteredProducts = productsData.filter(product => product.category === filter);
        }
    }

    allProductsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

// ===== Create Product Card =====
function createProductCard(product) {
    return `
        <div class="product-card" onclick="goToProductDetail(${product.id})">
           <div class="product-image">
              ${product.bestSeller ? '<span class="best-seller-badge">Best Seller</span>' : ''}
             <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${getCategoryName(product.category)}</p>

                <!-- Tombol Share atau Harga sebelumnya dihapus -->
            </div>
        </div>
    `;
}


// ===== Get Category Name =====
function getCategoryName(category) {
    const categories = {
        'kaos': 'Kaos',
        'kemeja': 'Kemeja',
        'celana': 'Celana',
        'dress': 'Dress',
        'jaket': 'Jaket'
    };
    return categories[category] || category;
}

// ===== Go to Product Detail =====
function goToProductDetail(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

// ===== Setup Filters =====
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Load filtered products
            const category = button.getAttribute('data-category');
            loadAllProducts(category);
        });
    });
}

// ===== Load Product Detail =====
function loadProductDetail(productId) {
    const product = productsData.find(p => p.id === parseInt(productId));
    
    if (!product) {
        window.location.href = 'products.html';
        return;
    }

    // Update product title
    document.getElementById('productTitle').textContent = product.name;
    
    // Update category
    document.getElementById('productCategory').innerHTML = `
        <span style="background-color: var(--accent-blue); color: white; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.9rem;">
            ${getCategoryName(product.category)}
        </span>
    `;
    
    // Update price
    // const formattedPrice = new Intl.NumberFormat('id-ID', {
    //    style: 'currency',
    //    currency: 'IDR',
    //    minimumFractionDigits: 0
    //}).format(product.price);
    //document.getElementById('productPrice').textContent = formattedPrice;
    
    // Update description
    document.getElementById('productDescription').innerHTML = `
        <h3>Deskripsi Produk</h3>
        <p>${product.name} adalah produk berkualitas tinggi dengan bahan premium dan desain modern. Cocok untuk berbagai acara dan aktivitas sehari-hari.</p>
        <ul style="margin-top: 1rem; padding-left: 1.5rem;">
            <li>Bahan berkualitas tinggi</li>
            <li>Nyaman dipakai seharian</li>
            <li>Tersedia berbagai pilihan warna</li>
            <li>Mudah dirawat</li>
        </ul>
    `;
    
    // Update color options
    const colorOptions = document.getElementById('colorOptions');
    colorOptions.innerHTML = product.colors.map((color, index) => `
        <div class="color-option ${index === 0 ? 'active' : ''}" 
             style="background-color: ${color};" 
             onclick="selectColor(this)"
             data-color="${color}">
        </div>
    `).join('');
    
    // Update order button
   // ===== Update Order Buttons =====
const shopeeBtn = document.getElementById('orderShopee');
const tokopediaBtn = document.getElementById('orderTokopedia');

// Shopee
if (product.shopeeLink) {
    shopeeBtn.href = product.shopeeLink;
    shopeeBtn.style.display = 'inline-flex';
} else {
    shopeeBtn.style.display = 'none';
}

// Tokopedia
if (product.tokopediaLink) {
    tokopediaBtn.href = product.tokopediaLink;
    tokopediaBtn.style.display = 'inline-flex';
} else {
    tokopediaBtn.style.display = 'none';
}


    // Update main image
    document.getElementById('productMainImage').innerHTML = `
        <img src="${product.image}" alt="${product.name}">
    `;
    
    // Load related products
    loadRelatedProducts(product.category, product.id);
}

// ===== Select Color =====
function selectColor(element) {
    // Remove active class from all color options
    document.querySelectorAll('.color-option').forEach(option => {
        option.classList.remove('active');
    });
    // Add active class to selected color
    element.classList.add('active');
}

// ===== Load Related Products =====
function loadRelatedProducts(category, currentProductId) {
    const relatedProductsGrid = document.getElementById('relatedProductsGrid');
    const relatedProducts = productsData
        .filter(p => p.category === category && p.id !== parseInt(currentProductId))
        .slice(0, 4);
    
    relatedProductsGrid.innerHTML = relatedProducts.map(product => createProductCard(product)).join('');
}

// ===== Handle Contact Form =====
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Create WhatsApp message
    const whatsappMessage = `Halo, saya ${formData.name}%0A%0AEmail: ${formData.email}%0ATelepon: ${formData.phone}%0ASubjek: ${formData.subject}%0A%0APesan: ${formData.message}`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    e.target.reset();
    
    // Show success message
    alert('Terima kasih! Pesan Anda akan dikirim melalui WhatsApp.');
}

// ===== Lazy Loading for Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}