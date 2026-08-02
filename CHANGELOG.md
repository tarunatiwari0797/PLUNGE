# CHANGELOG

All notable changes to the PLUNGE E-Commerce Website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### Added
- Created PROJECT_AUDIT.md documenting current project status, completed features, pending tasks, bugs, improvements, and recommendations
- Search modal with backdrop blur, ESC/click-outside close, focus trap, and auto-focus
- Client-side product search functionality with 10 indexed products
- Search modal keyboard navigation (arrow keys, Enter to select)
- Search modal added to all 17 main HTML pages
- FORM_SETUP_GUIDE.md with 7 form integration options
- TODO.md with categorized task list
- IMAGE_MAPPING.md with placeholder to real image mappings
- generate_images.py script for automated image replacement
- OPTIMIZATION_REPORT.md with performance and accessibility analysis
- **search.html** - Full standalone search page with client-side search, filter tags, product grid, highlight matching text
- **thank-you.html** - Thank you page for form submissions with "What Happens Next" steps
- **robots.txt** - Search engine crawler directives
- **sitemap.xml** - XML sitemap with all 17 pages, priorities, and change frequencies
- SEO meta tags added to all 18 HTML pages (Open Graph, Twitter Cards, canonical URLs)
- Schema.org structured data (JSON-LD) for Organization, Product, ItemList, LocalBusiness, FAQPage
- Skip navigation links on all 21 HTML pages for keyboard accessibility
- Focus indicator styles (focus-visible) for all interactive elements
- Reduced motion support (prefers-reduced-motion media query)
- Screen reader utility class (sr-only)
- High contrast mode support (forced-colors media query)
- Sticky add-to-cart bar on product-details page (appears when main Add to Cart scrolls out of view)
- Toast notification system in main.js for cart/wishlist feedback
- Lazy loading (loading="lazy") on all non-hero images across all pages

### Fixed
- **Grid Card Button Alignment:** Fixed button positioning in product grid cards across index.html (Featured Categories, Product Highlights), collections.html, cart.html (You May Also Like), product-details.html (Related Products), and wishlist.html. Changed card layout to `flex flex-col h-full` with `mt-auto` on price/button elements so buttons always align at bottom regardless of content length.
- **Product Data Corrections:** Cross-checked all product data against official Plunge_Product_List.xlsx. Fixed incorrect product codes, names, and prices across 8 pages (collections.html, index.html, cart.html, checkout.html, wishlist.html, product-details.html, search.html, plunge_collections.html, plunge_luxury_faucets.html). Major corrections include:
  - Collections page: All 8 category tabs updated (Diamond, Opal Prime, Cosmo, Quba, Topaz, Vignet, Mini Opal, Accessories) with correct codes (TOP-, VIP-, MIP- prefixes), accurate prices, and proper product names
  - Product Highlights: Corrected Opal Prime Bib Cock ₹820→₹780, Diamond Long Body ₹850→₹840, Cosmo Bib Cock CO-FS-01 ₹950
  - Cart/Checkout subtotals recalculated to match corrected prices
  - Search JS product array rewritten with accurate data
- **Quantity Minus Character:** Fixed corrupted `ˆ’` character to proper minus sign `−` in product-details.html quantity button
- **Meta Title Separator:** Changed `|` to `-` in og:title and twitter:title for consistency with `<title>` tag
- **Mobile Menu Bug (cart.html):** Added missing `fixed` positioning and sizing classes to `#mobile-menu` and `#mobile-overlay` elements
- **Search Modal JS Bug:** Fixed broken template literals in performSearch() - the entire search results HTML was rendering as empty `<p>` tags due to missing backtick delimiters. Rewrote template to use string concatenation.
- **Mobile Menu ID Inconsistency:** main.js now checks for both `hamburger-btn` and `mobile-menu-btn` IDs, fixing mobile menu on product-details.html
- **Double-Encoded UTF-8 Characters:** Fixed triple-encoded rupee symbol (₹) across 10 HTML files (63 total replacements). Characters like `â‚¹` (C3 A2 E2 80 9A C2 B9) were corrected to proper UTF-8 `₹` (E2 82 B9). Also fixed em-dash (`—`), en-dash, checkmark, and other mojibake characters.
- **Variable Name Conflict:** Renamed `searchInput` in search modal scope to `searchModalInput` to avoid conflict with `searchInput` in collections sidebar scope
- **Form Submission:** Contact and enquiry forms now redirect to thank-you.html instead of showing fake inline success messages

### Improved
- **main.js** - Complete rewrite for robustness: null checks on all DOM queries, safer event binding, modular toast notification system
- **style.css** - Added accessibility CSS section with skip-nav, focus indicators, reduced motion, sr-only, and high contrast support

### Changed
- Contact form and enquiry form now redirect to thank-you.html on submission
- Wishlist/cart icon badges updated to brand green (`bg-brand text-white`) on about.html and contact.html for consistent branding
- Hero and section image overlays softened for a lighter, more premium look: index.html hero gradient reduced to `/30 /10 /40`, manufacturing backgrounds changed from `bg-ivory/60` to `bg-ivory/30`, about.html "Our Promise" image opacity raised to 80 with a softer gradient overlay
- Gallery filter and FAQ category tabs: removed `hover:bg-gray-200` on inactive tabs and changed the active tab state from `bg-charcoal` to `bg-gray-800` (styles updated in both HTML and main.js)
- about.html "Our Promise" quote text color changed to charcoal for better readability
- Manufacturing/R&D content on about.html and the Manufacturing section on index.html now sit inside a frosted ivory panel (`bg-ivory/90 backdrop-blur-sm rounded-2xl px-6 py-12 shadow-lg`) for a cleaner, premium look
- index.html hero paragraph text color changed to charcoal; "Explore Collection" button now has a gold border (`border-gold/60`) and a deeper navy hover state
- Section spacing tuned: faq.html and contact.html reduced top padding from `pt-24` to `pt-20`; the FAQ page header shadow/border removed; horizontal padding (`px-4 sm:px-6`) added to manufacturing and promise sections for better mobile presentation
- index.html "Where Craftsmanship Meets Innovation" section: `reveal-left`/`reveal-right` slide animations disabled below 1024px via a new media query in style.css, and the text centers on small screens for readability
- Home page "Our Gallery" preview links now render as block elements (`display: block`) so the entire tile is clickable

### Improved
- **Gallery Layout:** Replaced the masonry layout with a uniform responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`), refined card styling (`rounded-lg`, white background, subtle border/shadow), and consistent `aspect-[4/3] object-cover` images with full width and height
- **Hero Readability on Small Screens:** index.html hero text container now receives a frosted ivory background with backdrop blur, rounded corners, and padding below 1100px so text remains legible over imagery
- **Gallery Lightbox Redesign:** Professional lightbox with a dark backdrop, white framed image container, smooth zoom-in animation, and clearly visible circular close/previous/next controls (keyboard shortcuts preserved)

### Fixed
- **Gallery Lightbox Not Opening:** The zoom icon on gallery cards did not open the lightbox because the hover overlay intercepted click events and the `hidden` utility kept the lightbox at `display: none` (the `.lightbox.active` rule never overrode it). Fixed by attaching the click handler to each `.gallery-item` card in addition to the image, and adding `display: flex` to `.lightbox.active` so it properly overrides the `hidden` class
- **Contact Form Focus Border:** Restored the green focus border (`#01773D`) on form inputs with `outline: none` for a cleaner focus state

### Removed
- Two gallery items removed from gallery.html: "9. Opal wall mixer.png" and "9. Cosmo wall mixer.png"

---

## [0.1.0] - 2026-07-28

### Initial Project State
- 20 HTML pages created
- Shared CSS stylesheet (style.css - 304 lines)
- Shared JavaScript (main.js - 315 lines)
- 15 SVG placeholder images
- PLUNGE brand identity and design system
- Product catalog with Diamond, Opal Prime, and Cosmo collections
- Shopping cart with localStorage persistence
- Wishlist functionality
- Checkout flow (3-step)
- Account dashboard with tabs
- Order tracking with timeline
- FAQ with accordion
- Gallery with lightbox
- Contact and Product Inquiry forms (UI only)
- Privacy Policy and Terms & Conditions
- Custom 404 error page
- Mobile-responsive design
- Scroll-reveal animations
- Header transparency effect on scroll
- Alternate homepage, about, and collections pages (using external images)

---

## Version History

| Version | Date | Description |
|---------|------|-------------|
| 1.0.0 | 2026-07-28 | Production-ready release: bug fixes, SEO, accessibility, performance, search, documentation |
| Unreleased | 2026-07-28 | Bug fix: mobile menu, search modal, documentation files |
| 0.1.0 | 2026-07-28 | Initial project state - all pages created with placeholder images |

---

## Change Categories

- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** for vulnerability fixes
- **Improved** for UI/UX improvements
- **Optimized** for performance improvements
- **Documentation** for documentation changes
