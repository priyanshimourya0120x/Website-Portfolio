// -------------------------------
// NAVBAR SHADOW ON SCROLL
// -------------------------------
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {
        navbar.style.boxShadow = "0px 3px 10px rgba(0,0,0,0.2)";
        navbar.style.background = "#ffffff";
    } else {
        navbar.style.boxShadow = "none";
        navbar.style.background = "linear-gradient(90deg, #f7f7f7, #efefef)";
    }
});
// Select all navbar links
  let navLinks = document.querySelectorAll(".navbar .nav-link");

  // Loop through each link and add click event
  navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      alert("🎉  Welcome in Sparks world 🎆");
    });
  });



// -------------------------------
// BANNER TEXT ANIMATION
// -------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector(".animate-text");
    const subText = document.querySelector(".animate-sub");

    heading.style.opacity = "0";
    subText.style.opacity = "0";

    setTimeout(() => {
        heading.style.transition = "0.8s";
        heading.style.opacity = "1";
        heading.style.transform = "translateY(0px)";
    }, 300);

    setTimeout(() => {
        subText.style.transition = "0.8s";
        subText.style.opacity = "1";
        subText.style.transform = "translateY(0px)";
    }, 600);
});


// -------------------------------
// CARD HOVER ANIMATION
// -------------------------------
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
        card.style.transition = "0.3s";
        card.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.2)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px)";
        card.style.boxShadow = "none";
    });
});


// -------------------------------
// CHOOSE US CARDS HOVER EFFECT
// -------------------------------
const chooseCards = document.querySelectorAll(".choose-card");

chooseCards.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.05)";
        box.style.transition = "0.3s";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
    });
});

// WhatsApp Learn More Button Click
document.querySelectorAll(".learn-more-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    
    // Get card title (Fast Service, Trusted Experts, etc.)
    let serviceName = this.parentElement.querySelector("h3").innerText;

    // Create WhatsApp message
    let message = `Hello! I want to know more about: ${serviceName}`;

    // WhatsApp number (change if needed)
    let whatsappNumber = "918178822905";

    // Open WhatsApp
    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
});


// -------------------------------
// PROCESS CARDS POPUP ANIMATION
// -------------------------------
const processCards = document.querySelectorAll(".process-card");

processCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.06)";
        card.style.transition = "0.3s";
        card.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.2)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "none";
    });
});


// -------------------------------
// TRIAL BOX HOVER EFFECT
// -------------------------------
const trialBoxes = document.querySelectorAll(".trial-box");

trialBoxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.transform = "translateY(-8px)";
        box.style.transition = "0.3s";
        box.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.2)";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "translateY(0)";
        box.style.boxShadow = "none";
    });
});

document.querySelectorAll(".trial-box button").forEach(btn => {
    btn.addEventListener("click", function () {
        let service = this.parentElement.querySelector("h4").innerText;

        let message = `Hello! I want to start the trial for: ${service}`;
        let url = `https://wa.me/918178298205?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    });
});



// -------------------------------
// SMOOTH SCROLL FOR BUTTONS
// -------------------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// about js open 
// explore now button
document.querySelector(".banner-btn").addEventListener("click", function () {
    let phone = "918178298205";
    let message = "Hello! I want to explore your website services.";
    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
});

// explore now button
$(document).ready(function () {

    let counted = false;

    $(window).scroll(function () {
        let statsTop = $('.stats-section').offset().top - window.innerHeight;

        if (!counted && $(window).scrollTop() > statsTop) {
            $('.stats-box h2').each(function () {

                let $this = $(this);
                let target = parseInt($this.text());

                // counter animation
                $({ countNum: 0 }).animate(
                    { countNum: target },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum) + " +");
                        },
                        complete: function () {
                            $this.text(this.countNum + " +");
                        }
                    }
                );
            });

            counted = true;
        }
    });
});

// JQuery part clos
// Fade-in animation when call banner appears
document.addEventListener("DOMContentLoaded", () => {
    const callBanner = document.querySelector(".call-banner");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callBanner.classList.add("show-banner");
            }
        });
    });

    observer.observe(callBanner);
});


// last phone and email

// Click-to-copy phone & email
document.querySelectorAll('.right-part p').forEach(item => {
    item.addEventListener("click", () => {
        const text = item.innerText.replace("Mail - ", "").replace("Call - ", "");
        navigator.clipboard.writeText(text);
        alert(text + " copied!");
    });
});


// about js close 

// js for service page open
document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       1️⃣ FAQ ACCORDION OPEN/CLOSE
    =================================*/
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");

            let answer = item.querySelector(".faq-answer");
            if (item.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = "0px";
            }
        });
    });



    /* ================================
       2️⃣ FORM SUBMIT MESSAGE
    =================================*/
    const form = document.querySelector(".contact-form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            alert("Thank you! Your message has been received. We will contact you soon.");
            form.reset();
        });
    }



    /* ================================
       3️⃣ CALL BANNER FADE-IN
    =================================*/
    const callBanner = document.querySelector(".call-banner");

    const bannerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callBanner.classList.add("show-banner");
            }
        });
    });

    if (callBanner) bannerObserver.observe(callBanner);



    /* ================================
       4️⃣ CLICK-TO-COPY FOOTER CONTACT
    =================================*/
    const footerItems = document.querySelectorAll(".right-part p");

    footerItems.forEach(item => {
        item.addEventListener("click", () => {
            const copied = item.innerText.replace("Mail - ", "").replace("Call - ", "");
            navigator.clipboard.writeText(copied);

            alert(copied + " copied to clipboard!");
        });
    });



    /* ================================
       5️⃣ WHATSAPP AUTO OPEN (CALL-BANNER)
    =================================*/
    const whatsappLink = document.querySelector(".social-links a[href*='wa.me']");

    if (whatsappLink) {
        whatsappLink.addEventListener("click", () => {
            console.log("Opening WhatsApp...");
        });
    }



    /* ================================
       6️⃣ SMOOTH FADE-IN ON SCROLL
    =================================*/
    const fadeElements = document.querySelectorAll(".service-cards .card, .why-box, .service-heading");

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-show");
            }
        });
    });

    fadeElements.forEach(el => fadeObserver.observe(el));



    /* ================================
       7️⃣ NAVBAR SHADOW ON SCROLL
    =================================*/
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 30) navbar.classList.add("nav-shadow");
        else navbar.classList.remove("nav-shadow");
    });

});

// form  service open
// FAQ Toggle Animation


    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const answer = item.querySelector(".faq-answer");

        item.addEventListener("click", () => {

            // Toggle current FAQ
            if(item.classList.contains("active")) {
                answer.style.maxHeight = null;
                item.classList.remove("active");
            } else {
                // Close all others
                faqItems.forEach(f => {
                    f.classList.remove("active");
                    f.querySelector(".faq-answer").style.maxHeight = null;
                });

                // Open clicked FAQ
                answer.style.maxHeight = answer.scrollHeight + "px";
                item.classList.add("active");
            }
        });
    });


// form close service
// js for service page close


// contact us pageo pen

// ===== Smooth Scroll for internal links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// ===== Form Validation =====
const contactForm = document.querySelector(".contact-right form");

contactForm.addEventListener("submit", function(e){
    e.preventDefault(); // Prevent actual submission for demo
    const name = this.querySelector('input[type="text"]:nth-child(1)').value.trim();
    const phone = this.querySelector('input[type="text"]:nth-child(2)').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    if(!name || !phone || !email || !message){
        alert("Please fill in all fields!");
        return;
    }

    if(!validateEmail(email)){
        alert("Please enter a valid email!");
        return;
    }

    alert("Thank you! Your message has been sent.");
    contactForm.reset();
});

// Simple email validation function
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// ===== Input focus highlight =====
document.querySelectorAll(".contact-right input, .contact-right textarea").forEach(input => {
    input.addEventListener("focus", () => {
        input.style.borderColor = "#2f67ff";
        input.style.boxShadow = "0 0 8px rgba(47,103,255,0.4)";
    });
    input.addEventListener("blur", () => {
        input.style.borderColor = "#ccc";
        input.style.boxShadow = "none";
    });
});

// ===== Animate info boxes on scroll =====
const infoBoxes = document.querySelectorAll(".contact-left .info-box");

window.addEventListener("scroll", () => {
    infoBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(boxTop < windowHeight - 100){
            box.classList.add("animate-box");
        }
    });
});

// contact us page close