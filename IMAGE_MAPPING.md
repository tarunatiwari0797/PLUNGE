# IMAGE_MAPPING

Mapping of images used across the PLUNGE website. Updated 2026-08-03.

---

## Current State

- **Product photography:** Real local PNGs under `assets/images/{diamond,opal,cosmos,quba}/` (37 files) are now used for product cards, search results, and the search modal.
- **Hero / section / gallery / story imagery:** Still Unsplash CDN URLs or 15 SVG placeholders (`assets/images/*.svg`).

---

## Product Images (Real Local PNGs)

| Folder | Count | Files |
|--------|-------|-------|
| `assets/images/diamond/` | 8 | bib cock, long body, sink cock, sink mixer, swan neck, 2-way bib cock, 2-way angle valve, wall mixture |
| `assets/images/opal/` | 11 | bib cock, long body, sink cock, swan neck, pillar cock, angle valve, 2-way bib cock, 2-way angle valve, wall mixer, concealed stop cock, table top |
| `assets/images/cosmos/` | 9 | bib cock, long body, sink cock, swan neck, pillar cock, angle valve, 2-way bib cock, wall mixer, concealed stop cock |
| `assets/images/quba/` | 9 | bib cock, long body, sink cock, swan neck, pillar cock, 2-in-1 bib cock, angle cock, wall mixer, sink mixer |

### Image Assignment Logic (search.html product array)

- Each product is mapped to the most representative image in its collection via keyword matching (e.g., "Sink Cock" -> sink cock image, "Wall Mixer" -> wall mixer image).
- If no specific match exists, the product falls back to the first image of its collection.
- Accessories (no dedicated folder) cycle through the existing collection images.
- **Topaz / Vignet / Mini Opal products are excluded from the public catalog and have no images.**

---

## SVG Placeholders (Hero / Section / Gallery)

Still used for non-product imagery. To be replaced with real photography (Unsplash recommended).

| Placeholder | Suggested Replacement URL | Reason |
|-------------|---------------------------|--------|
| hero-bathroom.svg | https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&h=900&fit=crop | Premium bathroom interior for hero section |
| faucet-bathroom.svg | https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop | Modern bathroom with luxury faucet |
| faucet-product.svg | https://images.unsplash.com/photo-1564540583246-934409427776?w=400&h=400&fit=crop | Close-up chrome faucet product |
| factory.svg | https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop | Modern manufacturing facility |
| shower-system.svg | https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=400&fit=crop | Luxury rainfall shower system |
| kitchen-fixture.svg | https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop | Modern kitchen faucet |
| showroom.svg | https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop | Premium bathroom showroom |
| water-texture.svg | https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=2000&h=800&fit=crop | Abstract water texture for backgrounds |
| quality-lab.svg | https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop | Quality control laboratory |
| bathroom-interior.svg | https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=600&fit=crop | Luxury bathroom interior |
| manufacturing.svg | https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=2000&h=800&fit=crop | Manufacturing process close-up |
| gallery-faucet.svg | https://images.unsplash.com/photo-1564540583246-934409427776?w=800&h=800&fit=crop | Large faucet product image |
| gallery-bathroom.svg | https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop | Bathroom gallery image |
| installation.svg | https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=600&fit=crop | Professional installation |
| craftsmanship.svg | https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop | Craftsmanship detail shot |

---

## Image Sources

- Local product PNGs: provided project assets (originals of the real product line).
- Suggested replacements for remaining placeholders: Unsplash (https://unsplash.com/) under the Unsplash License (free for commercial use, no attribution required).

---

## Recommendations

1. Replace the 15 SVG placeholders with real photography (Unsplash) or brand photos.
2. Optimize images to under 200KB each.
3. Convert to WebP for better compression.
4. Keep lazy loading for below-the-fold images.
5. Add `srcset` for responsive images.
6. Ensure alt text on all images.

---

## Notes

- Product search (header modal + search.html) references 36 of the 37 real PNGs (all verified to exist — zero broken images in the audit).
- Legacy pages (`plunge_*`) are orphans and not linked in the main navigation.
