/* Lourde Matha Church, Thalayanadu — interactions */
(function () {
    'use strict';

    // Hero slider
    if (window.Swiper) {
        new Swiper('.hero-slider', {
            loop: true,
            speed: 900,
            autoplay: { delay: 6000, disableOnInteraction: false },
            pagination: { el: '.hero-slider .swiper-pagination', clickable: true },
            effect: 'fade',
            fadeEffect: { crossFade: true }
        });
    }

    // Scroll animations
    if (window.AOS) {
        AOS.init({ duration: 800, easing: 'ease-out', once: true, offset: 60 });
    }

    // Schedule tabs
    document.querySelectorAll('.schedule-tabs button').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.schedule-tabs button').forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            document.querySelectorAll('.schedule-body .tab-pane').forEach(function (p) { p.classList.add('d-none'); });
            var pane = document.getElementById('tab-' + btn.getAttribute('data-tab'));
            if (pane) pane.classList.remove('d-none');
        });
    });

    // Gallery lightbox
    var lb = document.getElementById('lightbox');
    var lbImg = document.getElementById('lbImg');
    document.querySelectorAll('.g-item[data-full]').forEach(function (item) {
        item.addEventListener('click', function () {
            lbImg.src = item.getAttribute('data-full');
            lb.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });
    function closeLb() {
        lb.classList.remove('open');
        lbImg.src = '';
        document.body.style.overflow = '';
    }
    document.getElementById('lbClose').addEventListener('click', closeLb);
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });

    // Back to top
    var backTop = document.getElementById('backTop');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 600) backTop.classList.add('show');
        else backTop.classList.remove('show');
    }, { passive: true });
    backTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    // Active nav link on scroll
    var sections = ['home', 'about', 'worship', 'ministries', 'gallery', 'contact'];
    var navLinks = document.querySelectorAll('.main-nav .nav-link');
    function setActive() {
        var current = 'home';
        sections.forEach(function (id) {
            var el = document.getElementById(id);
            if (el && window.scrollY >= el.offsetTop - 140) current = id;
        });
        navLinks.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + current);
        });
    }
    window.addEventListener('scroll', setActive, { passive: true });
    setActive();

    // Close mobile menu on link tap
    document.querySelectorAll('#navMenu .nav-link').forEach(function (a) {
        a.addEventListener('click', function () {
            var menu = document.getElementById('navMenu');
            if (menu.classList.contains('show') && window.bootstrap) {
                window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }
        });
    });
})();
