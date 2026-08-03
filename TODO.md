# TODO

All pending tasks for the PLUNGE E-Commerce Website.

---

## Completed Tasks

### Phase 1: Critical Bug Fixes
- [x] Fix mobile menu bug on cart.html
- [x] Fix search modal JS template literal syntax errors
- [x] Fix mobile menu ID inconsistency (hamburger-btn vs mobile-menu-btn)
- [x] Fix double-encoded UTF-8 characters (rupee symbol and others) across 10 files
- [x] Fix variable name conflicts in main.js (searchInput collision)
- [x] Fix grid card button alignment (flex layout with mt-auto) across all pages
- [x] Fix corrupted minus sign character in quantity button (product-details.html)
- [x] Fix meta title separator consistency (| → -)

### Product Data Verification
- [x] Cross-check all product data against Plunge_Product_List.xlsx
- [x] Correct product codes, names, and prices on collections.html (all 8 category tabs)
- [x] Fix product data on index.html, cart.html, checkout.html, wishlist.html
- [x] Fix product data on product-details.html related products
- [x] Rewrite search.js product array with accurate data
- [x] Update plunge_collections.html and plunge_luxury_faucets.html with correct data

### Phase 2: Search
- [x] Create search modal with animations, backdrop blur, ESC close, focus trap
- [x] Add search modal to all 17 main HTML pages
- [x] Create client-side product search functionality (10 products indexed)
- [x] Create search.html - full standalone search page with filters and product grid

### Phase 3: SEO
- [x] Add Open Graph meta tags to all 18 HTML pages
- [x] Add Twitter Card meta tags to all 18 HTML pages
- [x] Add canonical URLs to all 18 HTML pages
- [x] Add Schema.org structured data (JSON-LD) to 5 key pages
- [x] Create robots.txt
- [x] Create sitemap.xml with all pages

### Phase 4: Accessibility
- [x] Add skip navigation links to all 21 HTML pages
- [x] Add focus-visible indicators for all interactive elements
- [x] Add prefers-reduced-motion support
- [x] Add sr-only utility class
- [x] Add high contrast mode (forced-colors) support

### Phase 5: UI/UX
- [x] Create thank-you.html for form submissions
- [x] Update contact/enquiry forms to redirect to thank-you.html
- [x] Add sticky add-to-cart bar on product-details page
- [x] Add toast notification system for cart/wishlist feedback
- [x] Create FORM_SETUP_GUIDE.md
- [x] Create IMAGE_MAPPING.md
- [x] Create OPTIMIZATION_REPORT.md

### Phase 6: CRO
- [x] Related products section (already present on product-details.html)
- [x] Trust badges on homepage
- [x] Newsletter section on homepage

### Phase 7: Performance
- [x] Add lazy loading (loading="lazy") to all non-hero images
- [x] Font preconnect hints already present

### Phase 8: Documentation
- [x] Create PROJECT_AUDIT.md
- [x] Create CHANGELOG.md
- [x] Create TODO.md (this file)
- [x] Create FORM_SETUP_GUIDE.md
- [x] Create IMAGE_MAPPING.md
- [x] Create OPTIMIZATION_REPORT.md

### Phase 9: Client Feedback Round (2026-08-03)
- [x] Convert all non-functional purchase CTAs (Add to Cart / Buy Now / Proceed to Checkout / Place Order) to Enquiry links (`contact.html#enquire`) on product-details, wishlist, cart, checkout
- [x] Remove "Buy Now" button on product-details.html
- [x] Remove dead toast/add-to-cart/add-to-wishlist handlers from main.js
- [x] Remove `preview-badge` client-preview controller from main.js
- [x] Unify header across all 19 main pages (tagline, scroll effect, mobile menu/overlay)
- [x] Remove Topaz / Vignet / Mini Opal from footers, collections tabs/panels, search page, plunge_collections
- [x] Expand product index to full catalog (112 products: Diamond 11, Opal Prime 13, Cosmo 13, Quba 10, Accessories 65) in main.js + search.html
- [x] Add real local product images + keywords + compare-at prices to search.html
- [x] Add meta descriptions to 16 pages missing them
- [x] Add footer + search modal + back-to-top to thank-you.html; search modal to search.html
- [x] Fix duplicate ids (faq.html `#mobile-overlay`, thank-you.html `id="main-content"`)
- [x] Replace dead `href="#"` policy links with real pages across 9 files
- [x] Update homepage/about stats to 150+; remove manufacturing/R&D sections on index + about
- [x] Correct collections.html per-tab product counts (11/13/13/10/65)
- [x] Full automated audit: no broken links / images / assets / duplicate ids / missing meta

---

## Remaining Tasks (Post-Launch / Future)

### Needs Client Input (Before Public Presentation)
- [ ] Provide real URLs for the 76 remaining `href="#"` placeholders: social icons (Facebook ~13, Instagram ~13, Pinterest ~8, Twitter ~3), my-account demo links (Dashboard, Account Details, Addresses, Orders, Logout), login "Forgot password?", product-details (Diamond Series, Email, Cookies), order-tracking (Shipping, Privacy, Terms), collections (Shipping Info)
- [ ] Decide fate of orphan legacy pages not linked in the nav: `plunge_about_us.html`, `plunge_collections.html`, `plunge_luxury_faucets.html`, `brand_color_palette_01773d.html`

### Low Priority
- [ ] Replace remaining placeholder SVG images with real photography
- [ ] Add WebP image format support
- [ ] Critical CSS inlining
- [ ] JavaScript minification and bundling
- [ ] Service worker for offline support
- [ ] Add breadcrumbs to all pages
- [ ] Product quick-view modal
- [ ] Recently viewed products section
- [ ] Newsletter exit-intent popup
- [ ] Free shipping threshold progress bar
- [ ] Backend integration (Firebase, Supabase, or Shopify)
- [ ] Real user authentication
- [ ] Payment processing integration
- [ ] Inventory management system
- [ ] Analytics integration (Google Analytics, Hotjar)
- [ ] A/B testing setup

---

## Priority Legend

- **Completed** - Done and verified
- **Low Priority** - Can be implemented post-launch
