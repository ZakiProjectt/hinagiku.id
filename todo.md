# Website Toko Online - Todo List

## Skema Warna
- Primary: #986734 (Coklat)
- Background: #EFE6CF (Cream)
- Accent 1: #50779A (Biru)
- Accent 2: #53665B (Hijau)
- Accent 3: #EAA8AF (Pink)
- Accent 4: #E09D25 (Orange)

## Style Visual
- Minimalis, elegant, modern
- Responsif untuk semua perangkat

## File Structure

### 1. index.html
- Navigation bar responsif dengan menu: Home, Tentang Kami, Produk, Kontak
- Hero banner dengan headline dan CTA
- Section fitur/keunggulan (3-4 fitur utama)
- Katalog produk (60 item) dengan kategori Best Seller
- Footer lengkap dengan social media links (Instagram, TikTok, Shopee, WhatsApp)

### 2. about.html
- Halaman Tentang Kami
- Informasi tentang toko
- Navigation dan footer yang sama

### 3. products.html
- Display semua produk (60 items)
- Filter/kategori produk
- Grid layout responsif

### 4. product-detail.html
- Detail produk individual
- Pilihan warna (color variants)
- Tombol "Pesan Sekarang" yang link ke toko online
- Gambar produk
- Deskripsi produk

### 5. contact.html
- Informasi kontak
- Form kontak
- Integrasi social media
- Maps (optional)

### 6. style.css
- Implementasi skema warna
- Responsive design
- Modern, minimalis, elegant styling
- Animations dan transitions

### 7. script.js
- Navigation toggle untuk mobile
- Product data management
- Dynamic product loading
- Smooth scrolling
- Modal/popup functionality
- Color variant selection

### 8. products-data.js
- Data 60 produk
- Struktur: id, name, category, price, image, colors, shopeeLink, etc.

## Komponen UI
✓ Navigation bar responsif
✓ Hero banner dengan headline dan CTA
✓ Section fitur/keunggulan
✓ Katalog produk (60 items)
✓ Product cards dengan link ke detail
✓ Product detail page dengan color variants
✓ Tombol "Pesan Sekarang" ke toko online
✓ Footer dengan social media
✓ Responsive design

## Implementation Notes
- Gunakan localStorage untuk menyimpan data produk yang dipilih
- Implementasi lazy loading untuk gambar produk
- Smooth transitions antar halaman
- Mobile-first approach