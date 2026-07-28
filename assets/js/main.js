/* ========================================
   PLUNGE - Shared JavaScript
   Premium E-Commerce Website
   ======================================== */

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
    const hamburger = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileClose = document.getElementById('mobile-close');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    function openMobileMenu() {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.style.paddingRight = scrollbarWidth + 'px';
        mobileMenu.classList.add('open');
        mobileMenu.classList.add('active');
        mobileOverlay.classList.add('open');
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeMobileMenu() {
        mobileMenu.classList.remove('open');
        mobileMenu.classList.remove('active');
        mobileOverlay.classList.remove('open');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
        document.documentElement.style.paddingRight = '';
    }

    if (hamburger) hamburger.addEventListener('click', openMobileMenu);
    if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
    if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

    /* ---- Back to Top ---- */
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 600) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, { passive: true });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---- FAQ Accordion ---- */
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.accordion-icon');
            const isOpen = content.classList.contains('open');

            /* Close all others */
            document.querySelectorAll('.accordion-content.open').forEach(c => c.classList.remove('open'));
            document.querySelectorAll('.accordion-icon.rotated').forEach(i => i.classList.remove('rotated'));

            if (!isOpen) {
                content.classList.add('open');
                if (icon) icon.classList.add('rotated');
            }
        });
    });

    /* ---- Product Gallery Thumbnails ---- */
    const thumbs = document.querySelectorAll('.gallery-thumb');
    const mainImage = document.getElementById('gallery-main-img');
    if (thumbs.length > 0 && mainImage) {
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                thumbs.forEach(t => t.classList.remove('thumb-active', 'border-navy-900'));
                thumb.classList.add('thumb-active', 'border-navy-900');
                mainImage.src = thumb.dataset.src;
            });
        });
    }

    /* ---- Product Detail Tabs ---- */
    const tabBtns = document.querySelectorAll('.product-tab-btn');
    const tabContents = document.querySelectorAll('.product-tab-content');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;
            tabBtns.forEach(b => b.classList.remove('border-navy-900', 'text-navy-900'));
            tabBtns.forEach(b => b.classList.add('border-transparent', 'text-gray-500'));
            btn.classList.add('border-navy-900', 'text-navy-900');
            btn.classList.remove('border-transparent', 'text-gray-500');
            tabContents.forEach(tc => tc.classList.remove('active'));
            const targetEl = document.getElementById(target);
            if (targetEl) targetEl.classList.add('active');
        });
    });

    /* ---- Collections Sidebar Tabs ---- */
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const tabPanes = document.querySelectorAll('.tab-pane');
    if (sidebarLinks.length > 0 && tabPanes.length > 0) {
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                sidebarLinks.forEach(l => {
                    l.classList.remove('active', 'text-navy-900', 'border-navy-900', 'bg-gray-50', 'font-semibold');
                    l.classList.add('text-gray-500', 'border-transparent', 'font-medium');
                });
                link.classList.add('active', 'text-navy-900', 'border-navy-900', 'bg-gray-50', 'font-semibold');
                link.classList.remove('text-gray-500', 'border-transparent', 'font-medium');
                const targetId = link.dataset.tab;
                tabPanes.forEach(pane => {
                    if (pane.id === targetId) {
                        pane.classList.remove('hidden');
                        void pane.offsetWidth;
                        pane.classList.remove('opacity-0');
                        pane.classList.add('opacity-100');
                    } else {
                        pane.classList.add('hidden', 'opacity-0');
                        pane.classList.remove('opacity-100');
                    }
                });
                const searchInput = document.getElementById('searchInput');
                if (searchInput) { searchInput.value = ''; }
            });
        });
    }

    /* ---- Product Search (Collections) ---- */
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();
            const activePane = document.querySelector('.tab-pane:not(.hidden)');
            if (!activePane) return;
            activePane.querySelectorAll('.product-card').forEach(card => {
                const title = (card.querySelector('h3')?.textContent || '').toLowerCase();
                const code = (card.querySelector('.product-code')?.textContent || '').toLowerCase();
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

    if (galleryImages.length > 0 && lightbox) {
        galleryImages.forEach((img, i) => {
            img.addEventListener('click', () => {
                currentLightboxIndex = i;
                lightboxImg.src = img.dataset.full || img.src;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        if (lightbox) lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
        if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
            lightboxImg.src = galleryImages[currentLightboxIndex].dataset.full || galleryImages[currentLightboxIndex].src;
        });
        if (lightboxNext) lightboxNext.addEventListener('click', (e) => {
            e.stopPropagation();
            currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
            lightboxImg.src = galleryImages[currentLightboxIndex].dataset.full || galleryImages[currentLightboxIndex].src;
        });
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') lightboxPrev?.click();
            if (e.key === 'ArrowRight') lightboxNext?.click();
        });
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    /* ---- FAQ Category Tabs ---- */
    const faqTabs = document.querySelectorAll('.faq-tab');
    const faqSections = document.querySelectorAll('.faq-section');
    if (faqTabs.length > 0 && faqSections.length > 0) {
        faqTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                faqTabs.forEach(t => {
                    t.classList.remove('bg-navy-900', 'text-white');
                    t.classList.add('bg-gray-100', 'text-gray-600');
                });
                tab.classList.add('bg-navy-900', 'text-white');
                tab.classList.remove('bg-gray-100', 'text-gray-600');
                const category = tab.dataset.category;
                faqSections.forEach(section => {
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
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                filterTabs.forEach(t => {
                    t.classList.remove('bg-navy-900', 'text-white');
                    t.classList.add('bg-gray-100', 'text-gray-600');
                });
                tab.classList.add('bg-navy-900', 'text-white');
                tab.classList.remove('bg-gray-100', 'text-gray-600');
                const filter = tab.dataset.filter;
                galleryItems.forEach(item => {
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
    document.querySelectorAll('.qty-btn-minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.parentElement.querySelector('input[type="number"]');
            if (input && parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
            }
        });
    });
    document.querySelectorAll('.qty-btn-plus').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.parentElement.querySelector('input[type="number"]');
            if (input) {
                input.value = parseInt(input.value) + 1;
            }
        });
    });

    /* ---- Color/Finish Swatch Selection ---- */
    const swatches = document.querySelectorAll('.finish-swatch');
    swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            swatches.forEach(s => s.classList.remove('ring-2', 'ring-offset-2', 'ring-navy-900'));
            swatch.classList.add('ring-2', 'ring-offset-2', 'ring-navy-900');
        });
    });

    /* ---- Tracking Form Toggle ---- */
    const trackingForm = document.getElementById('tracking-form');
    const trackingResult = document.getElementById('tracking-result');
    if (trackingForm && trackingResult) {
        trackingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            trackingForm.classList.add('hidden');
            trackingResult.classList.remove('hidden');
        });
    }

    /* ---- Smooth Scroll for Anchor Links ---- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
