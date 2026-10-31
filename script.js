AOS.init({
        duration: 900,
        once: true,
        offset: 80,
        easing: 'ease-out-cubic'
    });




document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".bg-hero-slide");
    const progressItems = document.querySelectorAll(".bg-progress-item");

    const nextBtn = document.querySelector(".bg-next");
    const prevBtn = document.querySelector(".bg-prev");

    let currentSlide = 0;
    let autoSlide;

    const slideDuration = 3000;


    /* =========================
       SHOW SLIDE
    ========================= */

    function showSlide(index) {

        // Remove active from all slides
        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        // Remove active from progress bars
        progressItems.forEach(function (item) {
            item.classList.remove("active");
        });


        // Add active to current slide
        slides[index].classList.add("active");

        // Add active to current progress
        if (progressItems[index]) {
            progressItems[index].classList.add("active");
        }

        currentSlide = index;
    }


    /* =========================
       NEXT SLIDE
    ========================= */

    function nextSlide() {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    }


    /* =========================
       PREVIOUS SLIDE
    ========================= */

    function previousSlide() {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);
    }


    /* =========================
       START AUTO SLIDER
    ========================= */

    function startAutoSlider() {

        clearInterval(autoSlide);

        autoSlide = setInterval(function () {
            nextSlide();
        }, slideDuration);
    }


    /* =========================
       NEXT BUTTON
    ========================= */

    if (nextBtn) {

        nextBtn.addEventListener("click", function () {

            nextSlide();
            startAutoSlider();

        });

    }


    /* =========================
       PREVIOUS BUTTON
    ========================= */

    if (prevBtn) {

        prevBtn.addEventListener("click", function () {

            previousSlide();
            startAutoSlider();

        });

    }


    /* =========================
       INITIAL SLIDE
    ========================= */

    showSlide(0);

    startAutoSlider();


    /* =========================
       MOBILE SWIPE
    ========================= */

    const hero =
        document.querySelector(".premium-bg-hero");

    let touchStartX = 0;
    let touchEndX = 0;


    if (hero) {

        hero.addEventListener("touchstart", function (e) {

            touchStartX =
                e.changedTouches[0].screenX;

        }, { passive: true });


        hero.addEventListener("touchend", function (e) {

            touchEndX =
                e.changedTouches[0].screenX;

            const swipeDistance =
                touchStartX - touchEndX;


            if (swipeDistance > 50) {

                // Swipe left
                nextSlide();
                startAutoSlider();

            }
            else if (swipeDistance < -50) {

                // Swipe right
                previousSlide();
                startAutoSlider();

            }

        }, { passive: true });

    }

});









document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".faq-new-item");

    faqItems.forEach(function (item) {

        const button = item.querySelector(".faq-new-question");

        button.addEventListener("click", function () {

            const alreadyOpen = item.classList.contains("active");

            faqItems.forEach(function (faq) {
                faq.classList.remove("active");
            });

            if (!alreadyOpen) {
                item.classList.add("active");
            }

        });

    });


    /* ==========================================
       SCROLL REVEAL ANIMATION
    ========================================== */

    const revealElements = document.querySelectorAll(
        ".faq-new-content, .faq-new-visual"
    );

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("faq-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(function (element) {

        element.classList.add("faq-hidden");

        revealObserver.observe(element);

    });

});






document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       WHATSAPP FORM
    ========================================= */

    const form = document.getElementById("modernWhatsappForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("modernName").value.trim();

            const phone =
                document.getElementById("modernPhone").value.trim();

            const service =
                document.getElementById("modernService").value;

            const message =
                document.getElementById("modernMessage").value.trim();


            if (!name || !phone || !service) {

                alert("Please fill in your name, phone number and service.");

                return;
            }


            if (!/^[0-9]{10}$/.test(phone)) {

                alert("Please enter a valid 10-digit phone number.");

                return;
            }


            const whatsappMessage =
`Hello,

I would like to enquire about your services.

Name: ${name}
Phone: ${phone}
Service: ${service}
Requirement: ${message || "Please share the details."}

Thank you.`;


            const whatsappNumber = "919663377474";


            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(whatsappMessage);


            window.open(whatsappURL, "_blank");

        });

    }


    /* =========================================
       SCROLL ANIMATION
    ========================================= */

    const animatedElements =
        document.querySelectorAll(
            ".contact-visual, .contact-form-side"
        );


    const animationObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "contact-show"
                        );

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(function (element) {

        animationObserver.observe(element);

    });


    /* =========================================
       PHONE NUMBER - ONLY NUMBERS
    ========================================= */

    const phoneInput =
        document.getElementById("modernPhone");


    if (phoneInput) {

        phoneInput.addEventListener(
            "input",
            function () {

                this.value =
                    this.value
                    .replace(/\D/g, "")
                    .slice(0, 10);

            }
        );

    }

});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("Lasya-callback-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const phone = document.getElementById("customerPhone").value.trim();

    // Validate mobile number
    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Replace with your business WhatsApp number
    const businessWhatsApp = "919XXXXXXXXX";

    const message = `Hello Lasya Invisible Grills,

I would like to request a callback.

Customer Mobile Number: ${phone}`;

    const whatsappURL =
      `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    form.reset();
  });
});




document.addEventListener("DOMContentLoaded", function () {

    const gallery = document.querySelector(".dlr-gallery");
    const lightbox = document.getElementById("dlrLightbox");

    if (!gallery || !lightbox) return;

    const items = [...gallery.querySelectorAll(".dlr-gallery-item")];
    const filters = gallery.querySelectorAll(".dlr-filter");

    const lightboxImg = document.getElementById("dlrLightboxImg");
    const counter = lightbox.querySelector(".dlr-lightbox-counter");
    const closeBtn = lightbox.querySelector(".dlr-lightbox-close");
    const prevBtn = lightbox.querySelector(".dlr-lightbox-prev");
    const nextBtn = lightbox.querySelector(".dlr-lightbox-next");

    let visibleItems = [...items];
    let currentIndex = 0;
    let previousFocus = null;

    function showImage(index) {
        if (!visibleItems.length) return;

        currentIndex = (index + visibleItems.length) % visibleItems.length;

        const image = visibleItems[currentIndex].querySelector("img");

        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;

        counter.textContent =
            `${currentIndex + 1} / ${visibleItems.length}`;
    }

    function openLightbox(item) {
        visibleItems = items.filter(el => !el.hidden);
        currentIndex = visibleItems.indexOf(item);

        if (currentIndex === -1) return;

        previousFocus = document.activeElement;

        showImage(currentIndex);

        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        closeBtn.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        lightboxImg.removeAttribute("src");

        if (previousFocus && previousFocus.focus) {
            previousFocus.focus();
        }
    }

    items.forEach(item => {
        item.addEventListener("click", () => openLightbox(item));
    });

    closeBtn.addEventListener("click", closeLightbox);

    prevBtn.addEventListener("click", () => {
        showImage(currentIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
        showImage(currentIndex + 1);
    });

    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", e => {
        if (!lightbox.classList.contains("open")) return;

        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") showImage(currentIndex - 1);
        if (e.key === "ArrowRight") showImage(currentIndex + 1);

        if (e.key === "Tab") {
            const controls = [closeBtn, prevBtn, nextBtn];
            const index = controls.indexOf(document.activeElement);
            if (e.shiftKey && index === 0) {
                e.preventDefault();
                nextBtn.focus();
            } else if (!e.shiftKey && index === controls.length - 1) {
                e.preventDefault();
                closeBtn.focus();
            }
        }
    });

    filters.forEach(button => {
        button.addEventListener("click", function () {
            filters.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const category = this.dataset.filter;

            items.forEach(item => {
                const show =
                    category === "all" ||
                    item.dataset.category === category;

                item.hidden = !show;
            });

            if (typeof AOS !== "undefined") {
                AOS.refreshHard();
            }
        });
    });

});







document.querySelectorAll('.dlr-faq-item').forEach(item => {
    item.addEventListener('toggle', () => {
        if (item.open) {
            document.querySelectorAll('.dlr-faq-item').forEach(other => {
                if (other !== item) {
                    other.open = false;
                }
            });
        }
    });
});







document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("dlrEnquiryForm");

    if (!form) {
        console.error("Enquiry form not found!");
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const name = document.getElementById("dlrCustomerName").value.trim();
        const phone = document.getElementById("dlrCustomerPhone").value.trim();
        const service = document.getElementById("dlrCustomerService").value;
        const location = document.getElementById("dlrCustomerLocation").value.trim();
        const message = document.getElementById("dlrCustomerMessage").value.trim();

        const whatsappNumber = "917676020910";

        const whatsappMessage =
            "Hello DLR Safety Nets,\n\n" +
            "I would like to request a free installation quote.\n\n" +
            "*Name:* " + name + "\n" +
            "*Phone:* " + phone + "\n" +
            "*Service:* " + service + "\n" +
            "*Location:* " + location + "\n" +
            "*Requirements:* " + (message || "Please contact me for details.") + "\n\n" +
            "Please share the installation details and quotation. Thank you!";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.location.href = whatsappURL;

    });

});
