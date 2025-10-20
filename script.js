 // ==================== INISIALISASI AOS ====================
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });

        // ==================== NAVBAR SCROLL EFFECT ====================
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.padding = '10px 0';
            } else {
                navbar.style.padding = '15px 0';
            }
        });

        // ==================== SMOOTH SCROLL FOR NAVIGATION ====================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu after click
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        navbarCollapse.classList.remove('show');
                    }
                }
            });
        });

        // ==================== ACTIVE NAVIGATION ON SCROLL ====================
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // ==================== FORM SUBMISSION ====================
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ambil data form
            const formData = new FormData(this);
            
            // Tampilkan alert sukses
            alert('Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.');
            
            // Reset form
            this.reset();
            
            // Note: Untuk implementasi real, Anda perlu menghubungkan dengan backend
            // atau layanan email seperti EmailJS, Formspree, atau API email lainnya
        });

        // ==================== SKILL PROGRESS BAR ANIMATION ====================
        const skillsSection = document.getElementById('skills');
        let animated = false;

        window.addEventListener('scroll', () => {
            const sectionPos = skillsSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight;

            if (sectionPos < screenPos && !animated) {
                animated = true;
                document.querySelectorAll('.progress-bar').forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
            }
        });

        // ==================== TYPING EFFECT (OPTIONAL) ====================
        
        const typedText = document.querySelector('.home-content h1');
        const text = typedText.textContent;
        typedText.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                typedText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        window.addEventListener('load', typeWriter);

        // ==================== CONSOLE MESSAGE ====================
        console.log('%c👋 Halo Developer!', 'color: #3498db; font-size: 20px; font-weight: bold;');
        console.log('%cTerima kasih telah mengunjungi website saya!', 'color: #2c3e50; font-size: 14px;');
        console.log('%cJika Anda tertarik untuk berkolaborasi, jangan ragu untuk menghubungi saya 😊', 'color: #27ae60; font-size: 12px;');