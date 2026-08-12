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
    const header = document.querySelector('header[data-scroll-effect="true"]');
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
        { name: 'Diamond Bib Cock', collection: 'Diamond', code: 'DI-FS-01', price: '₹780', url: 'product-details.html', category: 'Bathroom', description: 'Premium Diamond Bib Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Diamond Long Body', collection: 'Diamond', code: 'DI-FS-02', price: '₹840', url: 'product-details.html', category: 'Bathroom', description: 'Premium Diamond Long Body by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Diamond Sink Cock', collection: 'Diamond', code: 'DI-FS-03', price: '₹1,205', url: 'product-details.html', category: 'Kitchen Fixture', description: 'Premium Diamond Sink Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Diamond Swan Neck', collection: 'Diamond', code: 'DI-FS-04', price: '₹1,300', url: 'product-details.html', category: 'Bathroom', description: 'Premium Diamond Swan Neck by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Diamond Pillar Cock', collection: 'Diamond', code: 'DI-FS-05', price: '₹1,047', url: 'product-details.html', category: 'Bathroom', description: 'Premium Diamond Pillar Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Diamond Angle Cock', collection: 'Diamond', code: 'DI-FS-06', price: '₹562', url: 'product-details.html', category: 'Bathroom', description: 'Premium Diamond Angle Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Diamond 2 in 1 Bib Cock', collection: 'Diamond', code: 'DI-FS-07', price: '₹1,205', url: 'product-details.html', category: 'Bathroom', description: 'Premium Diamond 2 in 1 Bib Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Diamond 2 in 1 Angle Cock', collection: 'Diamond', code: 'DI-FS-08', price: '₹1,205', url: 'product-details.html', category: 'Bathroom', description: 'Premium Diamond 2 in 1 Angle Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Diamond Wall Mixer', collection: 'Diamond', code: 'DI-FS-09', price: '₹4,037', url: 'product-details.html', category: 'Bathroom', description: 'Premium Diamond Wall Mixer by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Diamond Sink Mixer', collection: 'Diamond', code: 'DI-FS-10', price: '₹2,650', url: 'product-details.html', category: 'Kitchen Fixture', description: 'Premium Diamond Sink Mixer by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Diamond Concealed Valve', collection: 'Diamond', code: 'DI-FS-11', price: '₹1,000', url: 'product-details.html', category: 'Bathroom', description: 'Premium Diamond Concealed Valve by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Opal Prime Bib Cock', collection: 'Opal Prime', code: 'OP-FS-01', price: '₹780', url: 'product-details.html', category: 'Bathroom', description: 'Premium Opal Prime Bib Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Opal Prime Long Body', collection: 'Opal Prime', code: 'OP-FS-02', price: '₹840', url: 'product-details.html', category: 'Bathroom', description: 'Premium Opal Prime Long Body by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Opal Prime Sink Cock', collection: 'Opal Prime', code: 'OP-FS-03', price: '₹1,205', url: 'product-details.html', category: 'Kitchen Fixture', description: 'Premium Opal Prime Sink Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Opal Prime Swan Neck', collection: 'Opal Prime', code: 'OP-FS-04', price: '₹1,300', url: 'product-details.html', category: 'Bathroom', description: 'Premium Opal Prime Swan Neck by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Opal Prime Pillar Cock', collection: 'Opal Prime', code: 'OP-FS-05', price: '₹1,063', url: 'product-details.html', category: 'Bathroom', description: 'Premium Opal Prime Pillar Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Opal Prime Angle Cock', collection: 'Opal Prime', code: 'OP-FS-06', price: '₹562', url: 'product-details.html', category: 'Bathroom', description: 'Premium Opal Prime Angle Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Opal Prime 2 in 1 Bib Cock', collection: 'Opal Prime', code: 'OP-FS-07', price: '₹1,265', url: 'product-details.html', category: 'Bathroom', description: 'Premium Opal Prime 2 in 1 Bib Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Opal Prime 2 in 1 Angle Cock', collection: 'Opal Prime', code: 'OP-FS-08', price: '₹1,175', url: 'product-details.html', category: 'Bathroom', description: 'Premium Opal Prime 2 in 1 Angle Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Opal Prime Wall Mixer', collection: 'Opal Prime', code: 'OP-FS-09', price: '₹4,125', url: 'product-details.html', category: 'Bathroom', description: 'Premium Opal Prime Wall Mixer by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Opal Prime Sink Mixer', collection: 'Opal Prime', code: 'OP-FS-10', price: '₹2,650', url: 'product-details.html', category: 'Kitchen Fixture', description: 'Premium Opal Prime Sink Mixer by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Opal Prime Concealed Valve', collection: 'Opal Prime', code: 'OP-FS-11', price: '₹1,000', url: 'product-details.html', category: 'Bathroom', description: 'Premium Opal Prime Concealed Valve by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Opal Prime Table Top', collection: 'Opal Prime', code: 'OP-FS-12', price: '₹2,375', url: 'product-details.html', category: 'Bathroom', description: 'Premium Opal Prime Table Top by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Opal Prime Diverter', collection: 'Opal Prime', code: 'OP-FS-13', price: '₹6,125', url: 'product-details.html', category: 'Bathroom', description: 'Premium Opal Prime Diverter by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Opal Prime Single Lever', collection: 'Opal Prime', code: 'OP-FS-14', price: '₹4,125', url: 'product-details.html', category: 'Bathroom', description: 'Premium Opal Prime Single Lever by PLUNGE — high-grade brass with mirror chrome finish, concealed single-lever shower mixer' },
        { name: 'Cosmo Bib Cock', collection: 'Cosmo', code: 'CO-FS-01', price: '₹950', url: 'product-details.html', category: 'Bathroom', description: 'Premium Cosmo Bib Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Cosmo Long Body', collection: 'Cosmo', code: 'CO-FS-02', price: '₹1,065', url: 'product-details.html', category: 'Bathroom', description: 'Premium Cosmo Long Body by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Cosmo Sink Cock (U)', collection: 'Cosmo', code: 'CO-FS-03', price: '₹1,237', url: 'product-details.html', category: 'Kitchen Fixture', description: 'Premium Cosmo Sink Cock (U) by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Cosmo Swan Neck (U)', collection: 'Cosmo', code: 'CO-FS-04', price: '₹1,337', url: 'product-details.html', category: 'Bathroom', description: 'Premium Cosmo Swan Neck (U) by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Cosmo Pillar Cock', collection: 'Cosmo', code: 'CO-FS-05', price: '₹1,175', url: 'product-details.html', category: 'Bathroom', description: 'Premium Cosmo Pillar Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Cosmo Angle Cock', collection: 'Cosmo', code: 'CO-FS-06', price: '₹575', url: 'product-details.html', category: 'Bathroom', description: 'Premium Cosmo Angle Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Cosmo 2 in 1 Bib Cock', collection: 'Cosmo', code: 'CO-FS-07', price: '₹1,287', url: 'product-details.html', category: 'Bathroom', description: 'Premium Cosmo 2 in 1 Bib Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Cosmo 2 in 1 Angle Cock', collection: 'Cosmo', code: 'CO-FS-08', price: '₹1,212', url: 'product-details.html', category: 'Bathroom', description: 'Premium Cosmo 2 in 1 Angle Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Cosmo Wall Mixer', collection: 'Cosmo', code: 'CO-FS-09', price: '₹4,250', url: 'product-details.html', category: 'Bathroom', description: 'Premium Cosmo Wall Mixer by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Cosmo Sink Mixer', collection: 'Cosmo', code: 'CO-FS-10', price: '₹2,650', url: 'product-details.html', category: 'Kitchen Fixture', description: 'Premium Cosmo Sink Mixer by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Cosmo Concealed Valve', collection: 'Cosmo', code: 'CO-FS-11', price: '₹1,025', url: 'product-details.html', category: 'Bathroom', description: 'Premium Cosmo Concealed Valve by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Cosmo Swan Neck', collection: 'Cosmo', code: 'CO-FS-12', price: '₹1,300', url: 'product-details.html', category: 'Bathroom', description: 'Premium Cosmo Swan Neck by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Cosmo Sink Cock', collection: 'Cosmo', code: 'CO-FS-13', price: '₹1,205', url: 'product-details.html', category: 'Kitchen Fixture', description: 'Premium Cosmo Sink Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Quba Bib Cock', collection: 'Quba', code: 'QU-FS-01', price: '₹1,000', url: 'product-details.html', category: 'Bathroom', description: 'Premium Quba Bib Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Quba Long Body', collection: 'Quba', code: 'QU-FS-02', price: '₹1,100', url: 'product-details.html', category: 'Bathroom', description: 'Premium Quba Long Body by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Quba Sink Cock', collection: 'Quba', code: 'QU-FS-03', price: '₹1,512', url: 'product-details.html', category: 'Kitchen Fixture', description: 'Premium Quba Sink Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Quba Swan Neck', collection: 'Quba', code: 'QU-FS-04', price: '₹1,425', url: 'product-details.html', category: 'Bathroom', description: 'Premium Quba Swan Neck by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Quba Pillar Cock', collection: 'Quba', code: 'QU-FS-05', price: '₹1,300', url: 'product-details.html', category: 'Bathroom', description: 'Premium Quba Pillar Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Quba Angle Cock', collection: 'Quba', code: 'QU-FS-06', price: '₹787', url: 'product-details.html', category: 'Bathroom', description: 'Premium Quba Angle Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Quba 2 in 1 Bib Cock', collection: 'Quba', code: 'QU-FS-07', price: '₹1,537', url: 'product-details.html', category: 'Bathroom', description: 'Premium Quba 2 in 1 Bib Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Quba 2 in 1 Angle Cock', collection: 'Quba', code: 'QU-FS-08', price: '₹1,425', url: 'product-details.html', category: 'Bathroom', description: 'Premium Quba 2 in 1 Angle Cock by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Quba Wall Mixer', collection: 'Quba', code: 'QU-FS-09', price: '₹4,487', url: 'product-details.html', category: 'Bathroom', description: 'Premium Quba Wall Mixer by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Quba Sink Mixer', collection: 'Quba', code: 'QU-FS-10', price: '₹2,937', url: 'product-details.html', category: 'Kitchen Fixture', description: 'Premium Quba Sink Mixer by PLUNGE — high-grade brass with mirror chrome finish' },
        { name: 'Aria Flush Valve', collection: 'Accessories', code: 'AR-FS-1', price: '₹1,862', url: 'product-details.html', category: 'Accessories', description: 'Aria Flush Valve by PLUNGE — premium finish bathroom accessory' },
        { name: 'Conti Concealed Valve', collection: 'Accessories', code: 'CON-FS-1', price: '₹1,437', url: 'product-details.html', category: 'Accessories', description: 'Conti Concealed Valve by PLUNGE — premium finish bathroom accessory' },
        { name: 'Flush Valve (M)', collection: 'Accessories', code: 'FW-FS-1', price: '₹962', url: 'product-details.html', category: 'Accessories', description: 'Flush Valve (M) by PLUNGE — premium finish bathroom accessory' },
        { name: 'Flush Valve (H)', collection: 'Accessories', code: 'FW-FS-2', price: '₹1,250', url: 'product-details.html', category: 'Accessories', description: 'Flush Valve (H) by PLUNGE — premium finish bathroom accessory' },
        { name: 'Grohe Health Faucet Black With 1.5 Mtr shower tube', collection: 'Accessories', code: 'GR-FS-1', price: '₹750', url: 'product-details.html', category: 'Accessories', description: 'Grohe Health Faucet Black With 1.5 Mtr shower tube by PLUNGE — premium finish bathroom accessory' },
        { name: 'Grohe Health Faucet Chrome With 1.5 Mtr shower tube', collection: 'Accessories', code: 'GR-FS-2', price: '₹670', url: 'product-details.html', category: 'Accessories', description: 'Grohe Health Faucet Chrome With 1.5 Mtr shower tube by PLUNGE — premium finish bathroom accessory' },
        { name: 'Mahendra Health Faucet With 1.5 Mtr shower tube', collection: 'Accessories', code: 'MA-FS-3', price: '₹940', url: 'product-details.html', category: 'Accessories', description: 'Mahendra Health Faucet With 1.5 Mtr shower tube by PLUNGE — premium finish bathroom accessory' },
        { name: 'Neno Health Faucet With 1.5 Mtr shower tube', collection: 'Accessories', code: 'NE-FS-4', price: '₹850', url: 'product-details.html', category: 'Accessories', description: 'Neno Health Faucet With 1.5 Mtr shower tube by PLUNGE — premium finish bathroom accessory' },
        { name: 'Dolphin Health Faucet With 1.5 Mtr shower tube', collection: 'Accessories', code: 'DE-FS-5', price: '₹1,065', url: 'product-details.html', category: 'Accessories', description: 'Dolphin Health Faucet With 1.5 Mtr shower tube by PLUNGE — premium finish bathroom accessory' },
        { name: 'Plunge Jet Spray with brass Nut & brass Inner', collection: 'Accessories', code: 'JS-FS-1', price: '₹365', url: 'product-details.html', category: 'Accessories', description: 'Plunge Jet Spray with brass Nut & brass Inner by PLUNGE — premium finish bathroom accessory' },
        { name: 'Plunge Waste Coupling', collection: 'Accessories', code: 'CO-FS-1', price: '₹187', url: 'product-details.html', category: 'Accessories', description: 'Plunge Waste Coupling by PLUNGE — premium finish bathroom accessory' },
        { name: 'PVC Sink Coupling Bowl', collection: 'Accessories', code: 'SCP-FS-01', price: '₹138', url: 'product-details.html', category: 'Accessories', description: 'PVC Sink Coupling Bowl by PLUNGE — premium finish bathroom accessory' },
        { name: 'SS Sink Coupling Bowl', collection: 'Accessories', code: 'SCS-FS-02', price: '₹220', url: 'product-details.html', category: 'Accessories', description: 'SS Sink Coupling Bowl by PLUNGE — premium finish bathroom accessory' },
        { name: 'SS Bucket Sink Coupling Round', collection: 'Accessories', code: 'SCB-FS-03', price: '₹225', url: 'product-details.html', category: 'Accessories', description: 'SS Bucket Sink Coupling Round by PLUNGE — premium finish bathroom accessory' },
        { name: 'Square Sink Coupling', collection: 'Accessories', code: 'SCSQ-FS-4', price: '₹238', url: 'product-details.html', category: 'Accessories', description: 'Square Sink Coupling by PLUNGE — premium finish bathroom accessory' },
        { name: 'Plunge PVC Shower Max', collection: 'Accessories', code: 'SMA-FS-1', price: '₹400', url: 'product-details.html', category: 'Accessories', description: 'Plunge PVC Shower Max by PLUNGE — premium finish bathroom accessory' },
        { name: 'Plunge PVC Shower Galaxy', collection: 'Accessories', code: 'SGL-FS-2', price: '₹400', url: 'product-details.html', category: 'Accessories', description: 'Plunge PVC Shower Galaxy by PLUNGE — premium finish bathroom accessory' },
        { name: 'Plunge PVC Shower Prince Round', collection: 'Accessories', code: 'SRO-FS-3', price: '₹400', url: 'product-details.html', category: 'Accessories', description: 'Plunge PVC Shower Prince Round by PLUNGE — premium finish bathroom accessory' },
        { name: 'Plunge PVC Shower Prince Square', collection: 'Accessories', code: 'SSQ-FS-4', price: '₹400', url: 'product-details.html', category: 'Accessories', description: 'Plunge PVC Shower Prince Square by PLUNGE — premium finish bathroom accessory' },
        { name: '18" Connection PTMT', collection: 'Accessories', code: 'CP1-FS-1', price: '₹90', url: 'product-details.html', category: 'Accessories', description: '18" Connection PTMT by PLUNGE — premium finish bathroom accessory' },
        { name: '24" Connection PTMT', collection: 'Accessories', code: 'CP2-FS-2', price: '₹103', url: 'product-details.html', category: 'Accessories', description: '24" Connection PTMT by PLUNGE — premium finish bathroom accessory' },
        { name: '30" Connection PTMT', collection: 'Accessories', code: 'CP3-FS-3', price: '₹115', url: 'product-details.html', category: 'Accessories', description: '30" Connection PTMT by PLUNGE — premium finish bathroom accessory' },
        { name: '36" Connection PTMT', collection: 'Accessories', code: 'CP4-FS-4', price: '₹128', url: 'product-details.html', category: 'Accessories', description: '36" Connection PTMT by PLUNGE — premium finish bathroom accessory' },
        { name: '42" Connection PTMT', collection: 'Accessories', code: 'CP5-FS-5', price: '₹142', url: 'product-details.html', category: 'Accessories', description: '42" Connection PTMT by PLUNGE — premium finish bathroom accessory' },
        { name: '48" Connection PTMT', collection: 'Accessories', code: 'CP6-FS-6', price: '₹158', url: 'product-details.html', category: 'Accessories', description: '48" Connection PTMT by PLUNGE — premium finish bathroom accessory' },
        { name: 'Waste Pipe (M)', collection: 'Accessories', code: 'WPL-FS-1', price: '₹40', url: 'product-details.html', category: 'Accessories', description: 'Waste Pipe (M) by PLUNGE — premium finish bathroom accessory' },
        { name: 'Waste Pipe (H)', collection: 'Accessories', code: 'WPH-FS-2', price: '₹70', url: 'product-details.html', category: 'Accessories', description: 'Waste Pipe (H) by PLUNGE — premium finish bathroom accessory' },
        { name: 'Waste Pipe Black', collection: 'Accessories', code: 'WPB-FS-3', price: '₹95', url: 'product-details.html', category: 'Accessories', description: 'Waste Pipe Black by PLUNGE — premium finish bathroom accessory' },
        { name: '1.5 Mtr Shower Tube With Brass Nut & Brass Inner', collection: 'Accessories', code: 'ST-FS-1', price: '₹340', url: 'product-details.html', category: 'Accessories', description: '1.5 Mtr Shower Tube With Brass Nut & Brass Inner by PLUNGE — premium finish bathroom accessory' },
        { name: '1 Mtr Shower Tube With Brass Nut & Brass Inner', collection: 'Accessories', code: 'ST-FS-2', price: '₹310', url: 'product-details.html', category: 'Accessories', description: '1 Mtr Shower Tube With Brass Nut & Brass Inner by PLUNGE — premium finish bathroom accessory' },
        { name: 'Lock Round Floor Drain', collection: 'Accessories', code: 'LRP-FS-1', price: '₹88', url: 'product-details.html', category: 'Accessories', description: 'Lock Round Floor Drain by PLUNGE — premium finish bathroom accessory' },
        { name: 'Lock Round Floor Drain With Hole', collection: 'Accessories', code: 'LRH-FS-2', price: '₹88', url: 'product-details.html', category: 'Accessories', description: 'Lock Round Floor Drain With Hole by PLUNGE — premium finish bathroom accessory' },
        { name: 'Lock Square Floor Drain', collection: 'Accessories', code: 'LSP-FS-5', price: '₹125', url: 'product-details.html', category: 'Accessories', description: 'Lock Square Floor Drain by PLUNGE — premium finish bathroom accessory' },
        { name: 'Lock Square Floor Drain With Hole', collection: 'Accessories', code: 'LSH-FS-5', price: '₹125', url: 'product-details.html', category: 'Accessories', description: 'Lock Square Floor Drain With Hole by PLUNGE — premium finish bathroom accessory' },
        { name: 'Cockroach Round Floor Drain', collection: 'Accessories', code: 'CRP-FS-3', price: '₹208', url: 'product-details.html', category: 'Accessories', description: 'Cockroach Round Floor Drain by PLUNGE — premium finish bathroom accessory' },
        { name: 'Cockroach Round Floor Drain With Hole', collection: 'Accessories', code: 'CRH-FS-4', price: '₹208', url: 'product-details.html', category: 'Accessories', description: 'Cockroach Round Floor Drain With Hole by PLUNGE — premium finish bathroom accessory' },
        { name: 'Cockroach Square Floor Drain', collection: 'Accessories', code: 'CSP-FS-7', price: '₹248', url: 'product-details.html', category: 'Accessories', description: 'Cockroach Square Floor Drain by PLUNGE — premium finish bathroom accessory' },
        { name: 'Cockroach Square Hole Floor Drain', collection: 'Accessories', code: 'CSH-FS-8', price: '₹248', url: 'product-details.html', category: 'Accessories', description: 'Cockroach Square Hole Floor Drain by PLUNGE — premium finish bathroom accessory' },
        { name: '3" Floor Drain (Per DZ)', collection: 'Accessories', code: 'JB3-FS-9', price: '₹438', url: 'product-details.html', category: 'Accessories', description: '3" Floor Drain (Per DZ) by PLUNGE — premium finish bathroom accessory' },
        { name: '4" Floor Drain (Per DZ)', collection: 'Accessories', code: 'JB4-FS-10', price: '₹588', url: 'product-details.html', category: 'Accessories', description: '4" Floor Drain (Per DZ) by PLUNGE — premium finish bathroom accessory' },
        { name: '5" Floor Drain (Per DZ)', collection: 'Accessories', code: 'JB5-FS-11', price: '₹688', url: 'product-details.html', category: 'Accessories', description: '5" Floor Drain (Per DZ) by PLUNGE — premium finish bathroom accessory' },
        { name: '3" Hole Jali (Per DZ)', collection: 'Accessories', code: 'JH3-FS-12', price: '₹438', url: 'product-details.html', category: 'Accessories', description: '3" Hole Jali (Per DZ) by PLUNGE — premium finish bathroom accessory' },
        { name: '4" Hole Jali (Per DZ)', collection: 'Accessories', code: 'JH4-FS-13', price: '₹588', url: 'product-details.html', category: 'Accessories', description: '4" Hole Jali (Per DZ) by PLUNGE — premium finish bathroom accessory' },
        { name: '5" Hole Jali (Per DZ)', collection: 'Accessories', code: 'JH5-FS-14', price: '₹688', url: 'product-details.html', category: 'Accessories', description: '5" Hole Jali (Per DZ) by PLUNGE — premium finish bathroom accessory' },
        { name: '3" Slice Jali', collection: 'Accessories', code: 'SL3-FS-15', price: '₹75', url: 'product-details.html', category: 'Accessories', description: '3" Slice Jali by PLUNGE — premium finish bathroom accessory' },
        { name: '4" Slice Jali', collection: 'Accessories', code: 'SL4-FS-16', price: '₹93', url: 'product-details.html', category: 'Accessories', description: '4" Slice Jali by PLUNGE — premium finish bathroom accessory' },
        { name: '5" Slice Jali', collection: 'Accessories', code: 'SL5-FS-17', price: '₹113', url: 'product-details.html', category: 'Accessories', description: '5" Slice Jali by PLUNGE — premium finish bathroom accessory' },
        { name: 'Long Spendal', collection: 'Accessories', code: 'LS-FS-01', price: '₹178', url: 'product-details.html', category: 'Accessories', description: 'Long Spendal by PLUNGE — premium finish bathroom accessory' },
        { name: 'Short Spendal', collection: 'Accessories', code: 'LS-FS-02', price: '₹120', url: 'product-details.html', category: 'Accessories', description: 'Short Spendal by PLUNGE — premium finish bathroom accessory' },
        { name: 'Jaquar Flange (Per DZ)', collection: 'Accessories', code: 'JFL-FS-01', price: '₹213', url: 'product-details.html', category: 'Accessories', description: 'Jaquar Flange (Per DZ) by PLUNGE — premium finish bathroom accessory' },
        { name: 'Thread Seal Tape 12mm x 0.1mm x 10mtr (M)', collection: 'Accessories', code: 'TF-FS-01', price: '₹17', url: 'product-details.html', category: 'Accessories', description: 'Thread Seal Tape 12mm x 0.1mm x 10mtr (M) by PLUNGE — premium finish bathroom accessory' },
        { name: 'Thread Seal Tape 12mm x 0.1mm x 10mtr (H)', collection: 'Accessories', code: 'TF-FS-01', price: '₹25', url: 'product-details.html', category: 'Accessories', description: 'Thread Seal Tape 12mm x 0.1mm x 10mtr (H) by PLUNGE — premium finish bathroom accessory' },
        { name: 'Thread Seal Tape 12mm x 0.1mm x 15mtr', collection: 'Accessories', code: 'TF-FS-01', price: '₹30', url: 'product-details.html', category: 'Accessories', description: 'Thread Seal Tape 12mm x 0.1mm x 15mtr by PLUNGE — premium finish bathroom accessory' },
        { name: 'Thread Seal Tape 19mm x 0.1mm x 10mtr', collection: 'Accessories', code: 'TF-FS-01', price: '₹34', url: 'product-details.html', category: 'Accessories', description: 'Thread Seal Tape 19mm x 0.1mm x 10mtr by PLUNGE — premium finish bathroom accessory' },
        { name: 'Single Soap Dish', collection: 'Accessories', code: 'SSDM-FS-01', price: '₹86.25', url: 'product-details.html', category: 'Accessories', description: 'Single Soap Dish by PLUNGE — premium finish bathroom accessory' },
        { name: 'Double Soap Dish', collection: 'Accessories', code: 'DSDM-FS-02', price: '₹157.5', url: 'product-details.html', category: 'Accessories', description: 'Double Soap Dish by PLUNGE — premium finish bathroom accessory' },
        { name: '2x1 With Tumbler', collection: 'Accessories', code: '2WTM-FS-03', price: '₹137.5', url: 'product-details.html', category: 'Accessories', description: '2x1 With Tumbler by PLUNGE — premium finish bathroom accessory' },
        { name: '3x1 With Tumbler', collection: 'Accessories', code: '3WTM-FS-04', price: '₹195', url: 'product-details.html', category: 'Accessories', description: '3x1 With Tumbler by PLUNGE — premium finish bathroom accessory' },
        { name: '4x1 With Tumbler', collection: 'Accessories', code: '4WTM-FS-05', price: '₹257.5', url: 'product-details.html', category: 'Accessories', description: '4x1 With Tumbler by PLUNGE — premium finish bathroom accessory' },
        { name: '5x1 With Tumbler', collection: 'Accessories', code: '5WTM-FS-06', price: '₹300', url: 'product-details.html', category: 'Accessories', description: '5x1 With Tumbler by PLUNGE — premium finish bathroom accessory' },
        { name: 'Set Up Box Stand', collection: 'Accessories', code: 'SBSM-FS-07', price: '₹275', url: 'product-details.html', category: 'Accessories', description: 'Set Up Box Stand by PLUNGE — premium finish bathroom accessory' },
        { name: '16" Shelf', collection: 'Accessories', code: 'SHFM-FS-08', price: '₹300', url: 'product-details.html', category: 'Accessories', description: '16" Shelf by PLUNGE — premium finish bathroom accessory' },
        { name: 'P.P. Corner Set', collection: 'Accessories', code: 'PPCS-FS-09', price: '₹312.5', url: 'product-details.html', category: 'Accessories', description: 'P.P. Corner Set by PLUNGE — premium finish bathroom accessory' },
        { name: 'Unbreakable Corner Set', collection: 'Accessories', code: 'UBCS-FS-10', price: '₹587.5', url: 'product-details.html', category: 'Accessories', description: 'Unbreakable Corner Set by PLUNGE — premium finish bathroom accessory' },
        { name: 'Mirror Cabinet Full Size', collection: 'Accessories', code: 'MIRC-FS-11', price: '₹2,750', url: 'product-details.html', category: 'Accessories', description: 'Mirror Cabinet Full Size by PLUNGE — premium finish bathroom accessory' }
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
                    '<a href="' + product.url + '" class="search-result-item flex items-center gap-4 p-3 rounded-lg hover:bg-beige transition-colors group">' +
                        '<div class="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0">' +
                            '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>' +
                        '</div>' +
                        '<div class="flex-1 min-w-0">' +
                            '<p class="text-sm font-medium text-charcoal group-hover:text-charcoal transition-colors truncate">' + product.name + '</p>' +
                            '<p class="text-xs text-gray-500 truncate">' + product.collection + ' Collection &middot; ' + product.category + '</p>' +
                        '</div>' +
                        '<div class="text-right flex-shrink-0">' +
                            '<p class="text-sm font-semibold text-gray-700">' + product.price + '</p>' +
                            '<p class="text-[10px] text-gray-500">' + product.code + '</p>' +
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
                results.forEach(r => r.classList.remove('search-result-item-focused', 'bg-beige'));
                const nextIndex = currentIndex < results.length - 1 ? currentIndex + 1 : 0;
                if (results[nextIndex]) {
                    results[nextIndex].classList.add('search-result-item-focused', 'bg-beige');
                    results[nextIndex].scrollIntoView({ block: 'nearest' });
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                results.forEach(r => r.classList.remove('search-result-item-focused', 'bg-beige'));
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : results.length - 1;
                if (results[prevIndex]) {
                    results[prevIndex].classList.add('search-result-item-focused', 'bg-beige');
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
                thumbs.forEach(function(t) { t.classList.remove('thumb-active', 'border-gray-300'); t.classList.add('border-gray-200'); });
                thumb.classList.add('thumb-active', 'border-gray-300');
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
            tabBtns.forEach(function(b) { b.classList.remove('border-gray-300', 'text-charcoal'); b.classList.add('border-transparent', 'text-gray-500'); });
            btn.classList.add('border-gray-300', 'text-charcoal');
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
                    l.classList.remove('active', 'text-charcoal', 'border-gray-300', 'bg-gray-50', 'font-semibold');
                    l.classList.add('text-gray-500', 'border-transparent', 'font-medium');
                });
                link.classList.add('active', 'text-charcoal', 'border-gray-300', 'bg-gray-50', 'font-semibold');
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
            function openLightbox() {
                currentLightboxIndex = i;
                if (lightboxImg) lightboxImg.src = img.dataset.full || img.src;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            img.addEventListener('click', openLightbox);
            var item = img.closest('.gallery-item');
            if (item) item.addEventListener('click', openLightbox);
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
                    t.classList.remove('bg-gray-800', 'text-white');
                    t.classList.add('bg-gray-100', 'text-gray-600');
                });
                tab.classList.add('bg-gray-800', 'text-white');
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
                    t.classList.remove('bg-gray-800', 'text-white');
                    t.classList.add('bg-gray-100', 'text-gray-600');
                });
                tab.classList.add('bg-gray-800', 'text-white');
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
            swatches.forEach(function(s) { s.classList.remove('ring-2', 'ring-offset-2', 'ring-brand'); s.classList.add('ring-transparent'); });
            swatch.classList.add('ring-2', 'ring-offset-2', 'ring-brand');
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
