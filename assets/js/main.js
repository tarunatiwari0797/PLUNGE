/* ========================================
   PLUNGE - Shared JavaScript
   Premium E-Commerce Website
   ======================================== */

/* ---- Page Status & Client Preview Controller ---- */
(function() {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    var ready = ['index.html', 'product-details.html', 'collections.html', 'cart.html', 'wishlist.html'];

    // Redirect incomplete pages to homepage
    if (ready.indexOf(page) === -1 && page.indexOf('.html') !== -1) {
        window.location.replace('index.html');
        return;
    }

    // Show preview badge on completed pages
    document.addEventListener('DOMContentLoaded', function() {
        var badge = document.createElement('div');
        badge.id = 'preview-badge';
        Object.assign(badge.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '9999',
            background: 'rgba(15,23,42,0.92)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            color: '#fff',
            fontSize: '11px',
            padding: '10px 16px',
            borderRadius: '10px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
            maxWidth: '280px',
            lineHeight: '1.5',
            cursor: 'pointer',
            transition: 'all 0.3s',
            border: '1px solid rgba(255,255,255,0.06)',
            fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'
        });
        badge.innerHTML = '<div style="display:flex;align-items:center;gap:6px;margin-bottom:3px"><span style="width:5px;height:5px;border-radius:50%;background:#22c55e;flex-shrink:0;animation:badge-pulse 1.5s infinite"></span><span style="font-weight:600;font-size:10px;letter-spacing:1px;opacity:0.6">UNDER DEVELOPMENT</span></div><div style="font-size:11px;color:rgba(255,255,255,0.75)">Progress preview &mdash; QA and finishing touches underway. Your feedback is welcome!</div>';
        document.body.appendChild(badge);

        badge.addEventListener('click', function() {
            badge.style.opacity = '0';
            badge.style.transform = 'translateY(8px) scale(0.96)';
            setTimeout(function() { badge.remove(); }, 300);
        });

        // Inject keyframe if not already present
        if (!document.getElementById('badge-keyframes')) {
            var s = document.createElement('style');
            s.id = 'badge-keyframes';
            s.textContent = '@keyframes badge-pulse{0%,100%{opacity:1}50%{opacity:0.3}}';
            document.head.appendChild(s);
        }
    });
})();

document.addEventListener('DOMContentLoaded', () => {

    /* ---- Scroll Reveal Animations ---- */
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-up');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        revealElements.forEach(el => revealObserver.observe(el));
    }

    /* ---- Header Scroll Effect ---- */
    const header = document.getElementById('main-header');
    if (header && header.dataset.scrollEffect === 'true') {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    /* ---- Mobile Menu ---- */
    const hamburger = document.getElementById('hamburger-btn') || document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileClose = document.getElementById('mobile-close');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    function openMobileMenu() {
        if (!mobileMenu || !mobileOverlay) return;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.style.paddingRight = scrollbarWidth + 'px';
        mobileMenu.classList.add('open', 'active');
        mobileOverlay.classList.add('open', 'active');
        document.body.style.overflow = 'hidden';
    }
    function closeMobileMenu() {
        if (!mobileMenu || !mobileOverlay) return;
        mobileMenu.classList.remove('open', 'active');
        mobileOverlay.classList.remove('open', 'active');
        document.body.style.overflow = '';
        document.documentElement.style.paddingRight = '';
    }

    if (hamburger) hamburger.addEventListener('click', openMobileMenu);
    if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
    if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

    /* ---- Search Modal ---- */
    const searchModal = document.getElementById('search-modal');
    const searchBackdrop = document.getElementById('search-backdrop');
    const searchModalInput = document.getElementById('search-input');
    const searchClose = document.getElementById('search-close');
    const searchDefault = document.getElementById('search-default');
    const searchLoading = document.getElementById('search-loading');
    const searchNoResults = document.getElementById('search-no-results');
    const searchResultsList = document.getElementById('search-results-list');
    const searchButtons = document.querySelectorAll('[aria-label="Search"]');

    // Product index for search
    const productIndex = [
        { name: 'Diamond Bib Cock', collection: 'Diamond', code: 'DI-FS-01', price: '\u20B9780', url: 'product-details.html', category: 'Bathroom Faucets', description: 'Premium single-lever bib cock with chrome finish' },
        { name: 'Diamond Long Body', collection: 'Diamond', code: 'DI-FS-02', price: '\u20B9850', url: 'product-details.html', category: 'Bathroom Faucets', description: 'Extended body design for deeper basins' },
        { name: 'Diamond Angle Cock', collection: 'Diamond', code: 'DI-FS-03', price: '\u20B9550', url: 'product-details.html', category: 'Bathroom Faucets', description: 'Quarter-turn angle cock for water supply' },
        { name: 'Diamond Wall Mixer', collection: 'Diamond', code: 'DI-FS-04', price: '\u20B91,990', url: 'product-details.html', category: 'Bathroom Faucets', description: 'Dual-control wall-mounted mixer' },
        { name: 'Opal Prime Bib Cock', collection: 'Opal Prime', code: 'OP-FS-01', price: '\u20B9820', url: 'product-details.html', category: 'Bathroom Faucets', description: 'Contemporary design with ergonomic handle' },
        { name: 'Opal Prime Sink Mixer', collection: 'Opal Prime', code: 'OP-FS-02', price: '\u20B91,850', url: 'product-details.html', category: 'Kitchen Faucets', description: 'High-arc kitchen sink mixer' },
        { name: 'Opal Prime Wall Mixer', collection: 'Opal Prime', code: 'OP-FS-03', price: '\u20B92,200', url: 'product-details.html', category: 'Bathroom Faucets', description: 'Premium wall-mounted mixer with diverter' },
        { name: 'Cosmo Sink Mixer', collection: 'Cosmo', code: 'CO-FS-01', price: '\u20B92,500', url: 'product-details.html', category: 'Kitchen Faucets', description: 'Modern pull-out kitchen faucet' },
        { name: 'Cosmo Bib Cock', collection: 'Cosmo', code: 'CO-FS-02', price: '\u20B9690', url: 'product-details.html', category: 'Bathroom Faucets', description: 'Compact design for small spaces' },
        { name: 'Cosmo Wall Mixer', collection: 'Cosmo', code: 'CO-FS-03', price: '\u20B92,100', url: 'product-details.html', category: 'Bathroom Faucets', description: 'Minimalist wall mixer with clean lines' },
    ];

    function openSearchModal() {
        if (!searchModal) return;
        searchModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (searchModalInput) {
            setTimeout(() => searchModalInput.focus(), 100);
        }
    }

    function closeSearchModal() {
        if (!searchModal) return;
        searchModal.classList.remove('active');
        document.body.style.overflow = '';
        if (searchModalInput) {
            searchModalInput.value = '';
        }
        if (searchDefault) searchDefault.classList.remove('hidden');
        if (searchNoResults) searchNoResults.classList.add('hidden');
        if (searchResultsList) {
            searchResultsList.classList.add('hidden');
            searchResultsList.innerHTML = '';
        }
    }

    function performSearch(query) {
        if (!searchDefault || !searchLoading || !searchNoResults || !searchResultsList) return;
        if (!query || query.length < 2) {
            searchDefault.classList.remove('hidden');
            searchLoading.classList.add('hidden');
            searchNoResults.classList.add('hidden');
            searchResultsList.classList.add('hidden');
            return;
        }

        searchDefault.classList.add('hidden');
        searchLoading.classList.remove('hidden');
        searchNoResults.classList.add('hidden');
        searchResultsList.classList.add('hidden');

        setTimeout(() => {
            const q = query.toLowerCase();
            const results = productIndex.filter(product => {
                const searchStr = (product.name + ' ' + product.collection + ' ' + product.category + ' ' + product.description + ' ' + product.code).toLowerCase();
                return searchStr.includes(q);
            });

            searchLoading.classList.add('hidden');

            if (results.length === 0) {
                searchNoResults.classList.remove('hidden');
                searchResultsList.classList.add('hidden');
            } else {
                searchNoResults.classList.add('hidden');
                searchResultsList.classList.remove('hidden');
                searchResultsList.innerHTML = results.map(product =>
                    '<a href="' + product.url + '" class="search-result-item flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group">' +
                        '<div class="w-14 h-14 bg-navy-800 rounded-lg flex items-center justify-center flex-shrink-0">' +
                            '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-chrome-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>' +
                        '</div>' +
                        '<div class="flex-1 min-w-0">' +
                            '<p class="text-sm font-medium text-white group-hover:text-chrome-300 transition-colors truncate">' + product.name + '</p>' +
                            '<p class="text-xs text-chrome-500 truncate">' + product.collection + ' Collection &middot; ' + product.category + '</p>' +
                        '</div>' +
                        '<div class="text-right flex-shrink-0">' +
                            '<p class="text-sm font-semibold text-chrome-300">' + product.price + '</p>' +
                            '<p class="text-[10px] text-chrome-500">' + product.code + '</p>' +
                        '</div>' +
                    '</a>'
                ).join('');
            }
        }, 200);
    }

    // Bind search buttons
    searchButtons.forEach(btn => {
        btn.addEventListener('click', openSearchModal);
    });

    if (searchBackdrop) searchBackdrop.addEventListener('click', closeSearchModal);
    if (searchClose) searchClose.addEventListener('click', closeSearchModal);

    if (searchModalInput) {
        searchModalInput.addEventListener('input', (e) => {
            performSearch(e.target.value.trim());
        });
    }

    // ESC to close search
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal && searchModal.classList.contains('active')) {
            closeSearchModal();
        }
    });

    // Keyboard navigation in search results
    if (searchModalInput) {
        searchModalInput.addEventListener('keydown', (e) => {
            const results = searchResultsList ? searchResultsList.querySelectorAll('a') : [];
            const activeItem = searchResultsList ? searchResultsList.querySelector('.search-result-item-focused') : null;
            let currentIndex = -1;

            if (activeItem) {
                currentIndex = Array.from(results).indexOf(activeItem);
            }

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                results.forEach(r => r.classList.remove('search-result-item-focused', 'bg-white/5'));
                const nextIndex = currentIndex < results.length - 1 ? currentIndex + 1 : 0;
                if (results[nextIndex]) {
                    results[nextIndex].classList.add('search-result-item-focused', 'bg-white/5');
                    results[nextIndex].scrollIntoView({ block: 'nearest' });
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                results.forEach(r => r.classList.remove('search-result-item-focused', 'bg-white/5'));
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : results.length - 1;
                if (results[prevIndex]) {
                    results[prevIndex].classList.add('search-result-item-focused', 'bg-white/5');
                    results[prevIndex].scrollIntoView({ block: 'nearest' });
                }
            } else if (e.key === 'Enter') {
                if (activeItem) {
                    e.preventDefault();
                    activeItem.click();
                }
            }
        });
    }

    /* ---- Toast Notifications ---- */
    function showToast(message, type) {
        type = type || 'success';
        const toast = document.createElement('div');
        var bgColor = type === 'success' ? 'bg-emerald-600' : type === 'error' ? 'bg-red-600' : 'bg-navy-900';
        toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-3 px-6 py-3 rounded-xl shadow-2xl text-white text-sm font-medium transition-all duration-500 translate-y-20 opacity-0 ' + bgColor;
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'polite');

        var iconSvg = type === 'success'
            ? '<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
            : '<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/></svg>';

        toast.innerHTML = iconSvg + '<span>' + message + '</span>';
        document.body.appendChild(toast);

        requestAnimationFrame(function() {
            requestAnimationFrame(function() {
                toast.classList.remove('translate-y-20', 'opacity-0');
                toast.classList.add('translate-y-0', 'opacity-100');
            });
        });

        setTimeout(function() {
            toast.classList.remove('translate-y-0', 'opacity-100');
            toast.classList.add('translate-y-20', 'opacity-0');
            setTimeout(function() { toast.remove(); }, 500);
        }, 3000);
    }

    // Bind add-to-cart buttons with toast
    document.querySelectorAll('.add-to-cart-btn, [data-action="add-to-cart"]').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            showToast('Added to cart successfully!', 'success');
        });
    });

    // Bind add-to-wishlist buttons with toast
    document.querySelectorAll('.add-to-wishlist-btn, [data-action="add-to-wishlist"]').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            showToast('Added to wishlist!', 'success');
        });
    });

    /* ---- Back to Top ---- */
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 600) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, { passive: true });
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---- FAQ Accordion ---- */
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    accordionBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.accordion-icon');
            const isOpen = content && content.classList.contains('open');

            /* Close all others */
            document.querySelectorAll('.accordion-content.open').forEach(function(c) { c.classList.remove('open'); });
            document.querySelectorAll('.accordion-icon.rotated').forEach(function(i) { i.classList.remove('rotated'); });

            if (!isOpen && content) {
                content.classList.add('open');
                if (icon) icon.classList.add('rotated');
            }
        });
    });

    /* ---- Product Gallery Thumbnails ---- */
    const thumbs = document.querySelectorAll('.gallery-thumb');
    const mainImage = document.getElementById('gallery-main-img');
    if (thumbs.length > 0 && mainImage) {
        thumbs.forEach(function(thumb) {
            thumb.addEventListener('click', function() {
                thumbs.forEach(function(t) { t.classList.remove('thumb-active', 'border-navy-900'); t.classList.add('border-gray-200'); });
                thumb.classList.add('thumb-active', 'border-navy-900');
                thumb.classList.remove('border-gray-200');
                if (thumb.dataset.src) mainImage.src = thumb.dataset.src;
            });
        });
    }

    /* ---- Product Detail Tabs ---- */
    const tabBtns = document.querySelectorAll('.product-tab-btn');
    const tabContents = document.querySelectorAll('.product-tab-content');
    tabBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const target = btn.dataset.tab;
            tabBtns.forEach(function(b) { b.classList.remove('border-navy-900', 'text-navy-900'); b.classList.add('border-transparent', 'text-gray-500'); });
            btn.classList.add('border-navy-900', 'text-navy-900');
            btn.classList.remove('border-transparent', 'text-gray-500');
            tabContents.forEach(function(tc) { tc.classList.remove('active'); tc.style.display = 'none'; });
            const targetEl = document.getElementById(target);
            if (targetEl) { targetEl.classList.add('active'); targetEl.style.display = 'block'; }
        });
    });

    /* ---- Collections Sidebar Tabs ---- */
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const tabPanes = document.querySelectorAll('.tab-pane');
    if (sidebarLinks.length > 0 && tabPanes.length > 0) {
        sidebarLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                sidebarLinks.forEach(function(l) {
                    l.classList.remove('active', 'text-navy-900', 'border-navy-900', 'bg-gray-50', 'font-semibold');
                    l.classList.add('text-gray-500', 'border-transparent', 'font-medium');
                });
                link.classList.add('active', 'text-navy-900', 'border-navy-900', 'bg-gray-50', 'font-semibold');
                link.classList.remove('text-gray-500', 'border-transparent', 'font-medium');
                const targetId = link.dataset.tab;
                tabPanes.forEach(function(pane) {
                    if (pane.id === targetId) {
                        pane.classList.add('active');
                        pane.classList.remove('opacity-0');
                        pane.classList.add('opacity-100');
                    } else {
                        pane.classList.remove('active');
                        pane.classList.add('opacity-0');
                        pane.classList.remove('opacity-100');
                    }
                });
                var collectionSearchInput = document.getElementById('searchInput');
                if (collectionSearchInput) { collectionSearchInput.value = ''; }
            });
        });
    }

    /* ---- Product Search (Collections) ---- */
    var collectionSearchInput = document.getElementById('searchInput');
    if (collectionSearchInput) {
        collectionSearchInput.addEventListener('input', function(e) {
            var term = e.target.value.toLowerCase().trim();
            var activePane = document.querySelector('.tab-pane:not(.hidden)');
            if (!activePane) return;
            activePane.querySelectorAll('.product-card').forEach(function(card) {
                var title = (card.querySelector('h3') ? card.querySelector('h3').textContent : '').toLowerCase();
                var code = (card.querySelector('.product-code') ? card.querySelector('.product-code').textContent : '').toLowerCase();
                card.style.display = (title.includes(term) || code.includes(term)) ? '' : 'none';
            });
        });
    }

    /* ---- Gallery Lightbox ---- */
    const galleryImages = document.querySelectorAll('.gallery-lightbox-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    let currentLightboxIndex = 0;

    function closeLightbox() {
        if (lightbox) lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (galleryImages.length > 0 && lightbox) {
        galleryImages.forEach(function(img, i) {
            img.addEventListener('click', function() {
                currentLightboxIndex = i;
                if (lightboxImg) lightboxImg.src = img.dataset.full || img.src;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        if (lightbox) lightbox.addEventListener('click', function(e) { if (e.target === lightbox) closeLightbox(); });
        if (lightboxPrev) lightboxPrev.addEventListener('click', function(e) {
            e.stopPropagation();
            currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
            if (lightboxImg) lightboxImg.src = galleryImages[currentLightboxIndex].dataset.full || galleryImages[currentLightboxIndex].src;
        });
        if (lightboxNext) lightboxNext.addEventListener('click', function(e) {
            e.stopPropagation();
            currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
            if (lightboxImg) lightboxImg.src = galleryImages[currentLightboxIndex].dataset.full || galleryImages[currentLightboxIndex].src;
        });
        document.addEventListener('keydown', function(e) {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft' && lightboxPrev) lightboxPrev.click();
            if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
        });
    }

    /* ---- FAQ Category Tabs ---- */
    const faqTabs = document.querySelectorAll('.faq-tab');
    const faqSections = document.querySelectorAll('.faq-section');
    if (faqTabs.length > 0 && faqSections.length > 0) {
        faqTabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                faqTabs.forEach(function(t) {
                    t.classList.remove('bg-navy-900', 'text-white');
                    t.classList.add('bg-gray-100', 'text-gray-600');
                });
                tab.classList.add('bg-navy-900', 'text-white');
                tab.classList.remove('bg-gray-100', 'text-gray-600');
                var category = tab.dataset.category;
                faqSections.forEach(function(section) {
                    if (category === 'all' || section.dataset.category === category) {
                        section.style.display = '';
                    } else {
                        section.style.display = 'none';
                    }
                });
            });
        });
    }

    /* ---- Gallery Filter Tabs ---- */
    const filterTabs = document.querySelectorAll('.gallery-filter-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (filterTabs.length > 0) {
        filterTabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                filterTabs.forEach(function(t) {
                    t.classList.remove('bg-navy-900', 'text-white');
                    t.classList.add('bg-gray-100', 'text-gray-600');
                });
                tab.classList.add('bg-navy-900', 'text-white');
                tab.classList.remove('bg-gray-100', 'text-gray-600');
                var filter = tab.dataset.filter;
                galleryItems.forEach(function(item) {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    /* ---- Quantity Selector ---- */
    document.querySelectorAll('.qty-btn-minus').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var input = btn.parentElement.querySelector('input[type="number"]');
            if (input && parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
            }
        });
    });
    document.querySelectorAll('.qty-btn-plus').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var input = btn.parentElement.querySelector('input[type="number"]');
            if (input) {
                input.value = parseInt(input.value) + 1;
            }
        });
    });

    /* ---- Color/Finish Swatch Selection ---- */
    const swatches = document.querySelectorAll('.finish-swatch');
    swatches.forEach(function(swatch) {
        swatch.addEventListener('click', function() {
            swatches.forEach(function(s) { s.classList.remove('ring-2', 'ring-offset-2', 'ring-navy-900'); s.classList.add('ring-transparent'); });
            swatch.classList.add('ring-2', 'ring-offset-2', 'ring-navy-900');
            swatch.classList.remove('ring-transparent');
        });
    });

    /* ---- Tracking Form Toggle ---- */
    const trackingForm = document.getElementById('tracking-form');
    const trackingResult = document.getElementById('tracking-result');
    if (trackingForm && trackingResult) {
        trackingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            trackingForm.classList.add('hidden');
            trackingResult.classList.remove('hidden');
        });
    }

    /* ---- Smooth Scroll for Anchor Links ---- */
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
