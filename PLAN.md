# PLUNGE Premium E-Commerce Website - Complete Build Plan

## Project Overview
**Brand:** PLUNGE by F.S. Enterprises
**Type:** Static front-end luxury e-commerce website (UI/UX demo only)
**Tech Stack:** HTML5 + Tailwind CSS CDN + Vanilla JavaScript
**Design Language:** Premium, minimal, luxury - inspired by Apple/Dyson/Grohe aesthetics

---

## Existing Design System (Preserved from 3 Reference Files)

### Typography
- **Sans:** Inter (weights: 300, 400, 500, 600)
- **Serif:** Playfair Display (weights: 400, 500, 600, 700, italic 400)

### Color Palette
- **Navy 800:** `#1a2235`
- **Navy 900:** `#0f1423`
- **Navy 950:** `#080b14`
- **Chrome 300:** `#e2e8f0`
- **Chrome 400:** `#cbd5e1`
- **Chrome 500:** `#94a3b8`

### Custom CSS Classes
- `.text-chrome` - Chrome gradient text effect
- `.bg-chrome` - Chrome gradient background
- `.glass-panel` - Glassmorphism dark panel
- `.pattern-overlay` - Dot pattern background
- `.no-scrollbar` - Hidden scrollbar utility
- `.product-card:hover .product-img` - Image zoom on hover
- `.product-card:hover .quick-action` - Quick action reveal on hover
- `.sidebar-link.active` - Active sidebar link styling

### Brand Assets
- **Logo:** SVG water drop icon + "PLUNGE" in Playfair Display
- **Tagline:** "Enroute to Service and Eminence"
- **Parent Company:** F.S. Enterprises
- **Location:** Industrial Estate, New Delhi, India
- **Contact:** info@plungefaucets.in, +91 1800 123 4567
- **Social:** Instagram, Facebook

---

## Directory Structure

```
html files/
├── PLAN.md                          (This file)
├── index.html                       (Homepage)
├── collections.html                 (Product collections/catalog)
├── product-details.html             (Single product page)
├── about.html                       (About Us)
├── contact.html                     (Contact page)
├── gallery.html                     (Image gallery with lightbox)
├── faq.html                         (FAQ accordion)
├── cart.html                        (Shopping cart - static)
├── checkout.html                    (Checkout page - static)
├── login.html                       (Login page - static)
├── register.html                    (Register page - static)
├── my-account.html                  (My Account dashboard - static)
├── order-tracking.html              (Order tracking - static)
├── wishlist.html                    (Wishlist - static)
├── privacy-policy.html              (Privacy policy)
├── terms.html                       (Terms & conditions)
├── 404.html                         (404 error page)
└── assets/
    ├── css/
    │   └── style.css                (Shared custom styles)
    └── js/
        └── main.js                  (Shared JavaScript)
```

---

## Page-by-Page Plan

### 1. Shared Components (assets/css/style.css + assets/js/main.js)

#### Header (shared across all pages)
- Sticky navigation bar
- Transparent on hero section (homepage only), solid after scroll
- Logo (SVG water drop + "PLUNGE")
- Desktop nav links: Home, Collections, Gallery, About, FAQ, Contact, Enquire
- Search icon
- Wishlist icon (heart) with static badge
- Shopping cart icon (bag) with static count badge
- Mobile hamburger menu with slide-in drawer
- Smooth scroll-triggered background transition (transparent -> solid navy)

#### Footer (shared across all pages)
- Brand info column (logo, description, "Discover Our Story" link)
- Quick Links column
- Collections column
- Support column
- Company column
- Newsletter signup form (static)
- Social media links (Instagram, Facebook)
- Copyright bar with Privacy Policy & Terms links

#### JavaScript Features
- Scroll-triggered header background change
- Mobile hamburger menu toggle
- Mobile menu overlay close
- Scroll-triggered fade-in animations (IntersectionObserver)
- Smooth scroll for anchor links
- Gallery lightbox functionality
- FAQ accordion toggle
- Quantity selector (static increment/decrement)
- Image thumbnail gallery switcher
- Back to top button
- Collections sidebar tab switching
- Product search filtering (UI only)

---

### 2. index.html (Homepage)

**Sections:**
1. **Hero Banner** - Full-screen luxury image, "Discover Innovation in Every Drop" headline, chrome gradient text, Explore Collection button, F.S. Enterprises Presents subtitle
2. **Features Bar** - Glass panel with 4 features: Smooth Operation, Premium Chrome, Higher Longevity, 100% Guarantee (overlapping hero)
3. **About Preview** - Brand story intro with image, link to About page
4. **Featured Categories** - 3 category cards (Bathroom Faucets, Kitchen Fixtures, Shower Systems) with hover effects
5. **Best Collections** - 3 flagship products (Diamond, Opal Prime, Cosmo) with prices, Quick View overlay, "View All" link
6. **Why Choose Us** - 6-card grid (Value Brand, Highly Durable, Premium Brass, High Quality, Wide Range, Trusted Service)
7. **Brand Story/Statistics** - Dark section with stats: 10+ Years, 50+ Products, 1000+ Customers, 100% Satisfaction
8. **Manufacturing Process** - Parallax-style section with "State-of-the-art Manufacturing and R&D Setup"
9. **Product Highlights** - Featured products carousel/grid
10. **Gallery Preview** - 4-6 images from gallery with hover zoom
11. **Customer Testimonials** - 3 testimonial cards with ratings
12. **FAQ Preview** - Top 3-4 FAQs with accordion preview
13. **Call to Action** - Full-width CTA section
14. **Google Map Preview** - Embedded map placeholder
15. **Newsletter Section** - Email signup form
16. **Trust Badges** - Made in India, 100% Satisfaction badges
17. **Footer** - Full luxury footer

---

### 3. collections.html (Product Catalog)

**Enhancements from existing:**
- Add wishlist icon on product cards
- Add "View Details" button alongside "Enquire"
- Improved responsive grid
- Breadcrumb navigation
- Active product count display
- Mobile filter drawer toggle
- Sort dropdown with additional options
- Better empty state design for upcoming collections

**Sections:**
1. Page header with breadcrumb
2. Search & filter bar
3. Sidebar categories (Diamond, Opal Prime, Cosmo, Quba, Topaz, Vignet, Mini Opal, Accessories)
4. Product grid with cards (product code, image, title, short description, price, View Details, Enquire)
5. Pagination (static)
6. Footer

---

### 4. product-details.html (Single Product Page)

**Sections:**
1. Breadcrumb navigation
2. **Image Gallery** - Large main image + 4-5 thumbnails, zoom on hover, thumbnail click to switch
3. **Product Info** - Product code, title, rating stars (4.8/5), review count, price, short description
4. **Available Finishes** - 3-4 finish swatches (Chrome, Matte Black, Brushed Gold, Gun Metal) - static selection
5. **Quantity Selector** - Minus/Plus buttons with number input (static)
6. **Action Buttons** - Add to Cart (static), Buy Now (static), Wishlist heart icon (static)
7. **Share Buttons** - Facebook, Twitter, Pinterest, Email (static)
8. **Availability** - "In Stock" badge, delivery info, estimated delivery time
9. **Tabs Section:**
   - Description tab
   - Specifications tab (table format)
   - Features & Benefits tab
   - Dimensions tab (with diagram placeholder)
   - Materials & Finishes tab
   - Downloads tab (PDF icons, static)
10. **Customer Reviews** - Rating breakdown bar chart, 3-4 individual reviews with stars, dates
11. **Write a Review Form** (static) - Name, email, rating selector, review text, submit button
12. **Product FAQ** - 3-4 product-specific FAQs
13. **Return Policy** - 30-day return info
14. **Related Products** - 4 product cards
15. **Coupon Field** - Input + Apply button (static)
16. **Shipping Information** - Shipping details, methods
17. **Footer**

---

### 5. about.html (About Us)

**Enhancements from existing:**
- Add Timeline section
- Add Team section
- Add Awards/Certificates section
- Add Infrastructure section
- Better visual hierarchy

**Sections:**
1. Hero/Banner with parallax
2. Brand Story
3. Our Promise (Built on Trust and Honesty)
4. Mission, Vision, Values
5. Timeline (Company milestones)
6. Why Choose Us (6 cards)
7. Manufacturing Excellence (parallax)
8. Quality Assurance
9. Infrastructure & Factory
10. Awards & Certificates
11. Statistics
12. Trust Badges
13. CTA
14. Footer

---

### 6. contact.html (Contact Page)

**Sections:**
1. Page header with breadcrumb
2. Google Maps embed (iframe placeholder)
3. Contact Form (Name, Email, Phone, Subject, Message, Submit)
4. Contact Information cards (Address, Phone, Email, Working Hours)
5. Social Media links
6. FAQ section (common questions)
7. Footer

---

### 7. gallery.html (Image Gallery)

**Sections:**
1. Page header with breadcrumb
2. Category filter tabs (All, Factory, Products, Showroom, Installation, Projects)
3. Masonry grid layout (varying image sizes)
4. Lightbox overlay (click to zoom, prev/next navigation, close button)
5. Images from Unsplash (bathroom, fixtures, manufacturing, showroom)
6. Footer

---

### 8. faq.html (FAQ Page)

**Sections:**
1. Page header with breadcrumb
2. FAQ category tabs (General, Products, Ordering, Shipping, Returns, Warranty)
3. 15-20 FAQs with smooth accordion animation
4. Still have questions? CTA with link to contact
5. Footer

---

### 9. cart.html (Shopping Cart - Static)

**Sections:**
1. Page header with breadcrumb
2. Cart items table (3 items)
   - Product image, name, code, price, quantity selector (static), subtotal, remove button (static)
3. Cart summary sidebar
   - Subtotal
   - Coupon code field + Apply button
   - Shipping estimate
   - Total
   - Proceed to Checkout button -> checkout.html
   - Continue Shopping button -> collections.html
4. Footer

---

### 10. checkout.html (Checkout - Static)

**Sections:**
1. Page header with breadcrumb
2. Two-column layout:
   - **Left:** Checkout form
     - Shipping Information (First Name, Last Name, Email, Phone, Address, City, State, Pin Code, Country)
     - Shipping Method (Standard, Express, Overnight - radio buttons)
     - Payment Method (Credit Card, Debit Card, UPI, Net Banking - radio buttons with card form UI)
   - **Right:** Order Summary
     - Product list with images, names, prices
     - Subtotal
     - Shipping cost
     - Coupon field
     - Tax
     - Total
     - Place Order button (static)
3. Footer

---

### 11. login.html (Login - Static)

**Sections:**
1. Centered card layout
2. PLUNGE logo
3. Email field
4. Password field
5. Remember me checkbox
6. Forgot password link
7. Login button (static)
8. "Don't have an account? Register" link -> register.html
9. Footer

---

### 12. register.html (Register - Static)

**Sections:**
1. Centered card layout
2. PLUNGE logo
3. First Name, Last Name fields
4. Email field
5. Phone field
6. Password field
7. Confirm Password field
8. Terms checkbox
9. Register button (static)
10. "Already have an account? Login" link -> login.html
11. Footer

---

### 13. my-account.html (My Account Dashboard - Static)

**Sections:**
1. Page header
2. Two-column layout:
   - **Left sidebar:** Account menu (Dashboard, Orders, Wishlist, Addresses, Account Details, Logout)
   - **Right content:** Dashboard view with:
     - Welcome message
     - Recent orders table
     - Account info summary
     - Default address display
3. Footer

---

### 14. order-tracking.html (Order Tracking - Static)

**Sections:**
1. Page header with breadcrumb
2. Order tracking form (Order ID + Email)
3. Tracking result display:
   - Order status timeline (Order Placed -> Processing -> Shipped -> Out for Delivery -> Delivered)
   - Current status highlighted
   - Order details
   - Shipping address
4. Footer

---

### 15. wishlist.html (Wishlist - Static)

**Sections:**
1. Page header with breadcrumb
2. Wishlist items grid (4 products)
   - Product image, name, code, price, "Add to Cart" button (static), remove button (static)
3. Empty state message
4. Continue Shopping link
5. Footer

---

### 16. privacy-policy.html

**Sections:**
1. Page header with breadcrumb
2. Table of contents
3. Privacy policy content sections (Information Collection, Use of Data, Cookies, Third Parties, Security, User Rights, Changes, Contact)
4. Last updated date
5. Footer

---

### 17. terms.html

**Sections:**
1. Page header with breadcrumb
2. Terms content sections (Acceptance, Products, Pricing, Orders, Shipping, Returns, Warranty, Limitation, Governing Law)
3. Last updated date
4. Footer

---

### 18. 404.html

**Sections:**
1. Centered 404 content
2. Large "404" number
3. "Page Not Found" message
4. Description text
5. Back to Home button
6. Search bar
7. Footer

---

## Animations & Interactions

| Animation | Location | Type |
|-----------|----------|------|
| Fade In Up | All sections on scroll | IntersectionObserver |
| Image Scale | Product cards, gallery | CSS hover transform |
| Quick View Reveal | Product cards | CSS hover opacity + translate |
| Header Background | Scroll transition | JS class toggle |
| Accordion Open/Close | FAQ, Product tabs | JS class toggle + CSS transition |
| Lightbox Open/Close | Gallery | JS class toggle |
| Mobile Menu Slide | Header hamburger | JS class toggle |
| Thumbnail Switch | Product gallery | JS click handler |
| Quantity +/- | Product page, Cart | JS click handler |
| Smooth Scroll | Anchor links | CSS scroll-behavior |
| Back to Top | Global | JS scroll position + click |
| Tab Switch | Collections sidebar | JS click handler |

---

## Responsiveness Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, hamburger menu, stacked layout |
| Tablet | 640px - 1023px | 2-column grids, sidebar becomes dropdown |
| Desktop | 1024px - 1279px | Full layout, sidebar visible |
| Large Desktop | >= 1280px | Max-width container, extra spacing |

---

## Image Sources (Unsplash - Royalty Free)

- Hero: Luxury bathroom/faucet images
- Product: Faucet close-ups, bathroom fixtures
- About: Manufacturing, engineering, precision
- Gallery: Factory, showroom, installations, products
- Map: Embedded Google Maps iframe
- All images use Unsplash CDN URLs with optimized sizing

---

## Build Progress

| # | Task | Status |
|---|------|--------|
| 1 | PLAN.md created | DONE |
| 2 | Directory structure | PENDING |
| 3 | assets/css/style.css | PENDING |
| 4 | assets/js/main.js | PENDING |
| 5 | index.html | PENDING |
| 6 | collections.html | PENDING |
| 7 | product-details.html | PENDING |
| 8 | about.html | PENDING |
| 9 | contact.html | PENDING |
| 10 | gallery.html | PENDING |
| 11 | faq.html | PENDING |
| 12 | cart.html | PENDING |
| 13 | checkout.html | PENDING |
| 14 | login.html | PENDING |
| 15 | register.html | PENDING |
| 16 | my-account.html | PENDING |
| 17 | order-tracking.html | PENDING |
| 18 | wishlist.html | PENDING |
| 19 | privacy-policy.html | PENDING |
| 20 | terms.html | PENDING |
| 21 | 404.html | PENDING |

---

*Plan created: July 27, 2026*
*All pages will be production-ready, fully responsive, and visually interconnected.*
