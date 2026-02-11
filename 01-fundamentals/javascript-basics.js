
        const lessons = [
            {
                title: "index.html",
                lang: "html",
                code: `<span class="tag">&lt;article</span> <span class="attr">class</span>=<span class="string">"card"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;header&gt;</span>
    <span class="tag">&lt;h2&gt;</span>Hello World<span class="tag">&lt;/h2&gt;</span>
    <span class="tag">&lt;time</span> <span class="attr">datetime</span>=<span class="string">"2026-02-20"</span><span class="tag">&gt;</span>Today<span class="tag">&lt;/time&gt;</span>
  <span class="tag">&lt;/header&gt;</span>
  <span class="tag">&lt;p&gt;</span>
    Semantic HTML ensures your content is 
    accessible to screen readers and SEO.
  <span class="tag">&lt;/p&gt;</span>
  <span class="tag">&lt;button&gt;</span>Learn More<span class="tag">&lt;/button&gt;</span>
<span class="tag">&lt;/article&gt;</span>`,
                render: `<article style="border:1px solid #ddd; padding:15px; border-radius:8px; background:#fafafa;">
    <header style="border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:10px;">
        <h2 style="font-size:1.2rem; margin:0;">Hello World</h2>
        <time style="font-size:0.8rem; color:#888;">Today</time>
    </header>
    <p style="font-size:0.9rem; color:#555;">Semantic HTML ensures your content is accessible.</p>
    <button style="background:#3182CE; color:white; border:none; padding:5px 10px; border-radius:4px; margin-top:10px; cursor:default;">Learn More</button>
</article>`
            },
            {
                title: "styles.css",
                lang: "css",
                code: `<span class="tag">.container</span> {
  <span class="attr">display</span>: flex;
  <span class="attr">justify-content</span>: center;
  <span class="attr">align-items</span>: center;
  <span class="attr">gap</span>: 20px;
  <span class="attr">height</span>: 100vh;
  <span class="attr">background</span>: <span class="string">linear-gradient(to right, #fff, #f0f4f8)</span>;
}`,
                render: `<div style="display:flex; justify-content:center; align-items:center; gap:20px; height:100%; width:100%;">
    <div style="width:40px; height:40px; background:#3182CE; border-radius:8px;"></div>
    <div style="width:40px; height:40px; background:#38A169; border-radius:50%;"></div>
    <div style="width:40px; height:40px; background:#D69E2E; border-radius:4px;"></div>
</div>`
            },
            {
                title: "script.js",
                lang: "js",
                code: `<span class="keyword">const</span> btn = document.querySelector(<span class="string">'button'</span>);

btn.addEventListener(<span class="string">'click'</span>, () => {
  <span class="comment">// Direct DOM Manipulation</span>
  btn.textContent = <span class="string">'Clicked!'</span>;
  btn.style.transform = <span class="string">'scale(0.95)'</span>;
  
  <span class="comment">// Async State Simulation</span>
  setTimeout(() => {
    btn.textContent = <span class="string">'Reset'</span>;
  }, 1000);
});`,
                render: `<button id="demo-btn" style="padding:10px 20px; border:1px solid #ccc; background:white; border-radius:6px; cursor:default;">Click Me</button>`
            }
        ];

        /**
         * LOGIC: Load Lesson
         * Updates both the code syntax highlight and the live preview
         */
        function loadLesson(index) {
            const data = lessons[index];
            
            // 1. Update Code View
            document.getElementById('current-file-name').textContent = data.title;
            document.getElementById('code-view').innerHTML = data.code;
            
            // 2. Update Live Render
            document.getElementById('live-render').innerHTML = data.render;
            
            // 3. Handle Button Active State (Visual Feedback)
            const buttons = document.querySelectorAll('.lesson-btn');
            buttons.forEach((btn, i) => {
                if(i === index) btn.classList.add('active');
                else btn.classList.remove('active');
            });

            // 4. Re-attach event listeners if JS lesson is loaded
            if(index === 2) {
                const demoBtn = document.getElementById('demo-btn');
                demoBtn.onclick = function() {
                    this.textContent = "Clicked!";
                    this.style.transform = "scale(0.95)";
                    setTimeout(() => {
                        this.textContent = "Click Me";
                        this.style.transform = "scale(1)";
                    }, 1000);
                };
            }
        }

        /**
         * LOGIC: Tilt Effect for Cards (3D Physics)
         * Calculates mouse position relative to card center and rotates
         */
        const cards = document.querySelectorAll('[data-tilt]');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left; // x position within the element.
                const y = e.clientY - rect.top;  // y position within the element.
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
                const rotateY = ((x - centerX) / centerX) * 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            });
        });

        /**
         * LOGIC: Scroll Reveal Animation (Intersection Observer)
         * High performance way to trigger animations when elements enter viewport
         */
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        /**
         * LOGIC: Navbar Scroll Effect
         */
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Initialize first lesson
        window.addEventListener('DOMContentLoaded', () => {
            loadLesson(0);
        });