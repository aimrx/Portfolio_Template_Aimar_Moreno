I have used QWEN3-Max in order to make the nav-bar to change color wwhile scrolling to the about-section.

<!--------------------------------------------------------------- MY PROMT ------------------------------------------------------------------->

Volvemos a empezar desde 0. Quiero que la nav-bar cambie de color tras pasar la hero-section. Pero no quiero que las letras cambien de color, permanecerán en el color rojo. Te paso todo el código necesario.

HTML

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Grade 1 Demo: Vanilla CSS Scroll</title>
    <link rel="stylesheet" href="./assets/css/index.css" />
    <script src="./assets/js/main.js"></script>

    <!-- TYPOGRAPHY -->
     <style>@import url('https://fonts.googleapis.com/css2?family=Cormorant  :ital,wght@0,300..700;1,300..700&display=swap');</style>

  </head>

  <body>
    <!-- Skip link for accessibility -->
    <a href="#main" class="skip-link">Skip to main content</a>

    <!-- Navigation -->
    <div class="header-container">
      <nav class="nav">
        <div class="nav-container">
         <a href="#" class="nav-logo">Portfolio</a>
      <!-- Botón hamburguesa -->
      <button class="nav-toggle" aria-label="Abrir menú">
        <span></span>
        <span></span>
        <span></span>
      </button>
          <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#awards">Awards</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>

    <main id="main">
      <!-- Hero Section -->
      <section id="hero" class="hero">
        <div class="hero-bg parallax-bg"></div>
        <div class="hero-content">
          <h1 class="hero-title animate-on-scroll ">Name Surname</h1>
        </div>

        <!-- Trigger invisible -->
          <div id="hero-trigger"></div>

      </section>

            <!-- About Section -->
      <section id="about" class="section-about">
        <div class="container">
          <h2 class="section-title animate-on-scroll">About</h2>
            <div class="about-grid" data-reveal-stagger>
              <div class="left-column">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="skills-grid" data-reveal-stagger>
                <div class="skill-card">
                  <span class="skill-icon">
                    <img src="./assets/images/Photoshop.png" alt="Photoshop">
                  </span>
                  <h3>Photoshop</h3>
                  <div class="skill-bar">
                    <div class="skill-fill" style="--fill: 90%"></div>
                  </div>
                </div>
                <div class="skill-card">
                  <span class="skill-icon">
                    <img src="./assets/images/illustrator.png" alt="Illustrator">
                  </span>
                  <h3>Illustrator</h3>
                  <div class="skill-bar">
                    <div class="skill-fill" style="--fill: 100%"></div>
                  </div>
                </div>
                <div class="skill-card">
                  <span class="skill-icon">
                    <img src="./assets/images/Premiere.png" alt="Premiere">
                  </span>
                  <h3>Premiere</h3>
                  <div class="skill-bar">
                   <div class="skill-fill" style="--fill: 78%"></div>
                  </div>
                </div>
                <div class="skill-card">
                  <span class="skill-icon">
                    <img src="./assets/images/Lightroom.png" alt="Lightroom">
                  </span>
                  <h3>Lightroom</h3>
                  <div class="skill-bar">
                    <div class="skill-fill" style="--fill: 90%"></div>
                  </div>
                </div>
                <div class="skill-card">
                  <span class="skill-icon">
                    <img src="./assets/images/Indesign.png" alt="Indesign">
                  </span>
                  <h3>Indesign</h3>
                  <div class="skill-bar">
                   <div class="skill-fill" style="--fill: 95%"></div>
                  </div>
                </div>
                <div class="skill-card">
                  <span class="skill-icon">
                    <img src="./assets/images/Procreate.png" alt="Procreate">
                  </span>
                  <h3>Procreate</h3>
                  <div class="skill-bar">
                   <div class="skill-fill" style="--fill: 100%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="about-img-container">
              <img src="./assets/images/about-img.png" alt="myself">
            </div>
          </div>
        </div>

      <!-- Awards Section -->
      <section id="awards" class="section awards">
        <div class="container">
          <h2 class="section-title animate-on-scroll">Awards</h2>
            <div class="awards-text animate-on-scroll">
              <table style="width: 85%">
                <tr>
                  <th>A-1</th>
                  <th>Awards Name</th>
                  <th>Type of Award</th>
                  <th>My Work Name</th>
                  <th>2023</th>
                </tr>
                <tr>
                  <th>A-2</th>
                  <th>Awards Name</th>
                  <th>Type of award</th>
                  <th>My Work Name</th>
                  <th>2024</th>
                </tr>
                <tr>
                  <th>A-3</th>
                  <th>Awards Name</th>
                  <th>Type of award</th>
                  <th>My Work Name</th>
                  <th>2024</th>
                </tr>
                <tr>
                  <th>A-4</th>
                  <th>Awards Name</th>
                  <th>Type of award</th>
                  <th>My Work Name</th>
                  <th>2025</th>
                </tr>
                <tr>
                  <th>A-5</th>
                  <th>Awards Name</th>
                  <th>Type of award</th>
                  <th>My Work Name</th>
                  <th>2025</th>
                </tr>
                <tr>
                  <th>A-5</th>
                  <th>Awards Name</th>
                  <th>Type of award</th>
                  <th>My Work Name</th>
                  <th>2025</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- Work Section -->
      <section id="works" class="section works">
        <div class="container">
          <h2 class="section-title animate-on-scroll">Works</h2>
          <div class="works-grid" data-reveal-stagger>
            <div class="work-card">
              <img src="./assets/images/MOCK-UP 1.3.png" alt="work-1">
                <div class="bottom-left">MOON</div>
                <div class="top-left">Product</div>
                <div class="top-right">September 2024</div>
            </div>
            <div class="work-card">
              <img src="./assets/images/mock-up-2.png" alt="work-2">
                <div class="bottom-left">THE OTHER</div>
                <div class="top-left">Editorial</div>
                <div class="top-right">Abril 2025</div>
            </div>
                        <div class="work-card">
              <img src="./assets/images/mock-up-3.png" alt="work-3">
                <div class="bottom-left">ZARA</div>
                <div class="top-left">Photography</div>
                <div class="top-right">March 2025</div>
            </div>
            <div class="work-card">
              <img src="./assets/images/mock-up-4.png" alt="work-4">
                <div class="bottom-left">ECOALF</div>
                <div class="top-left">Branding</div>
                <div class="top-right">November 2024</div>
            </div>

          <!--
            <article class="project-card">
              <div class="project-image">
                <img
                  src="https://picsum.photos/400/300?random=1  "
                  alt="E-commerce Platform"
                  loading="lazy"
                />
              </div>
              <div class="project-content">
                <h3>E-commerce Platform</h3>
                <p>
                  A fully responsive online store with cart functionality and
                  payment integration.
                </p>
                <div class="project-tags">
                  <span>HTML</span><span>CSS</span><span>JS</span>
                </div>
              </div>
            </article>
            <article class="project-card">
              <div class="project-image">
                <img
                  src="https://picsum.photos/400/300?random=2  "
                  alt="Dashboard UI"
                  loading="lazy"
                />
              </div>
              <div class="project-content">
                <h3>Analytics Dashboard</h3>
                <p>
                  Real-time data visualization dashboard with dark mode support.
                </p>
                <div class="project-tags">
                  <span>CSS Grid</span><span>Charts</span><span>API</span>
                </div>
              </div>
            </article>
            <article class="project-card">
              <div class="project-image">
                <img
                  src="https://picsum.photos/400/300?random=3  "
                  alt="Mobile App Landing"
                  loading="lazy"
                />
              </div>
              <div class="project-content">
                <h3>App Landing Page</h3>
                <p>Conversion-optimized landing page with scroll animations.</p>
                <div class="project-tags">
                  <span>Animation</span><span>A/B Test</span><span>SEO</span>
                </div>
              </div>
            </article>
          -->
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="section contact">
        <div class="container">
          <h2 class="section-title animate-on-scroll">Get In Touch</h2>
          <div class="contact-content animate-on-scroll">
            <p>
              Interested in working together? Let's talk about your project.
            </p>
            <a href="mailto:hello@example.com" class="btn btn-primary"
              >Say Hello</a
            >
            <div class="social-links">
              <a href="#" aria-label="GitHub">GitHub</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 Jane Developer. Built with vanilla HTML, CSS & JS.</p>
        <a href="#hero" class="back-to-top" aria-label="Back to top">↑</a>
      </div>
    </footer>

  </body>
</html>

CSS-navigation
/_ --------------------------------------------------------------------------
Navigation
-------------------------------------------------------------------------- _/
.nav {
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 100;
background: var(--white);
padding: var(--space-md) 0;
transition: background 0.3s ease;
}

/_ Navbar cuando ha salido de la hero _/
.nav.scrolled {
background: var(--black);
}

/_ Asegura que el texto cambia a blanco _/
.nav.scrolled .nav-logo,
.nav.scrolled .nav-links a {
color: var(--white) !important;
}

.nav.scrolled .nav-toggle span {
background: var(--white) !important;
}

.nav-container {
display: flex;
justify-content: space-between;
align-items: center;
width: min(90%, 1200px);
margin-inline: auto;
}

.nav-logo {
font-size: var(--text-xl);
font-weight: 500;
color: var(--main-color);
}

/_ Links desktop _/
.nav-links {
display: flex;
gap: var(--space-lg);
list-style: none;
}

.nav-links a {
color: rgb(187, 11, 11);
transition: color 0.3s;
}

.nav-links a:hover,
.nav-links a:focus {
color: #1a1a1a;
}

/_ --------------------------------------------------------------------------
Botón hamburguesa
-------------------------------------------------------------------------- _/
.nav-toggle {
display: none;
flex-direction: column;
gap: 6px;
background: none;
border: none;
cursor: pointer;
padding-right: 1rem;
}

.nav-toggle span {
width: 24px;
height: 2px;
background: var(--black);
display: block;
}

/_ --------------------------------------------------------------------------
Responsive (pantalla vertical / móvil)
-------------------------------------------------------------------------- _/
@media (max-width: 768px) {
.nav-container {
position: relative;
}

.nav-toggle {
display: flex;
}

.nav-links {
display: none;
position: absolute;
top: 100%;
right: 0;
width: auto;
min-width: 150px;
background: var(--white);
text-align: right;
padding: 2rem;
padding-right: 3rem;
}

.nav-links.active {
display: block;
}

.nav-links li {
padding: 12px 0;
}
}

@media (max-width: 770px) {
.nav-links {
padding-right: 1rem;
padding-top: 0.5rem;
}
}

/_ Scroll indicator for testing _/
.scroll-indicator {
position: fixed;
bottom: 20px;
right: 20px;
background: rgba(0, 0, 0, 0.7);
color: white;
padding: 10px 15px;
border-radius: 5px;
font-size: 0.9rem;
z-index: 1000;
}

CSS-layout
/_ -------------------------------------------------------------------------- 3. Layout Components
-------------------------------------------------------------------------- _/
.container {
width: min(90%, 1200px);
margin-inline: auto;
}

.section {
padding: var(--space-2xl) 0;
}

.section-title {
font-family: var(--font-family-titles);
font-size: var(--text-5xl); /_ Uses our fluid typography variable _/
font-style: italic;
font-optical-sizing: auto;
font-weight: 600;
margin-bottom: var(--space-lg);
color: var(--main-color);
padding-top: 5rem;
}

/_ -------------------------------------------------------------------------- 5. Hero Section
-------------------------------------------------------------------------- _/
.hero {
position: relative;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: left;
text-align: left;
overflow-x: hidden;
}

.hero-bg {
position: absolute;
inset: 0;
background: var(--white);
z-index: -1;
}

.hero-title {
color: var(--main-color);
font-size: var(--text-7xl);
letter-spacing: -0.02em;
padding-left: 5rem;
padding-top: 30rem;
}

/\* --------------------------------------------------------------------------
CSS SCROLL-DRIVEN ANIMATIONS (MODERN PARALLAX)

🎓 THE FUTURE OF SCROLL ANIMATIONS:
CSS scroll-driven animations let you tie animations directly to scroll
position — NO JAVASCRIPT REQUIRED! This is more performant than JS-based
solutions because the browser handles everything on the compositor thread.

📐 HOW IT WORKS:

1.  animation-timeline: scroll(root) — links animation to scroll progress
2.  animation-range: 0% 100% — animation plays from 0% to 100% scroll
3.  The @keyframes define what happens at start (0%) and end (100%) of scroll

⚠️ BROWSER SUPPORT:
This only works in Chrome 115+, Edge 115+. We use @supports to detect it
and provide a fallback for other browsers.

🔗 LEARN MORE: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline  
 -------------------------------------------------------------------------- _/
@supports (animation-timeline: scroll()) {
.parallax-bg {
/_
_ SCROLL-LINKED ANIMATION
_
_ - animation: parallaxShift — name of keyframes to use
_ - linear — no easing, direct 1:1 scroll mapping
_ - both — applies styles before and after animation
_/
animation: parallaxShift linear both;

    /*
    	 * SCROLL TIMELINE
    	 *
    	 * scroll(root) = scroll progress of the root scroller (usually <html>)
    	 * Could also use scroll(nearest) for a scrollable container
    	 */
    animation-timeline: scroll(root);

    /*
    	 * ANIMATION RANGE
    	 *
    	 * 0% 100% = animation runs from top of page to bottom
    	 * You could use "entry 0% entry 100%" for element-specific triggers
    	 */
    animation-range: 0% 100%;

}

@keyframes parallaxShift {
/\*
_ PARALLAX EFFECT
_
_ As user scrolls down:
_ - Background moves UP (negative translateY) — creates depth illusion
_ - Background scales UP slightly — adds visual interest
_
_ -15% is subtle; -30% would be more dramatic but potentially nauseating
_/
from {
transform: translateY(0) scale(1);
}
to {
transform: translateY(-15%) scale(1.1);
}
}
}

/\*

- FALLBACK FOR OLDER BROWSERS
-
- @supports not (animation-timeline: scroll()) targets browsers that DON'T
- support scroll-timeline. We give them a simpler parallax effect using
- background-attachment: fixed (works everywhere but has performance costs).
  _/
  @supports not (animation-timeline: scroll()) {
  .parallax-bg {
  background-attachment: fixed; /_ Classic parallax technique \*/
  }
  }

@keyframes bounce {
0%,
20%,
50%,
80%,
100% {
transform: rotate(45deg) translateY(0);
}
40% {
transform: rotate(45deg) translateY(10px);
}
60% {
transform: rotate(45deg) translateY(5px);
}
}

/_ -------------------------------------------------------------------------- 6. Button
-------------------------------------------------------------------------- _/
.btn {
display: inline-block;
padding: var(--space-sm) var(--space-lg);
background: var(--main-color);
color: white;
font-weight: 600;
border-radius: 8px;
transition: background 0.3s, transform 0.3s;
}

.btn:hover,
.btn:focus {
background: var(--main-color);
transform: translateY(-2px);
}
/_ -------------------------------------------------------------------------- 7. About Section
-------------------------------------------------------------------------- _/
.about-img-container {
width: 100%;
height: 80vh;
overflow: hidden; /_ Oculta lo que se salga _/
border-radius: 15px;
}
.about img {
width: 100%;
height: 100%;
object-fit: cover;
}

.about-grid {
display: grid;
gap: var(--space-lg);
}

@media (min-width: 900px) {
.about-grid {
grid-template-columns: repeat(2, 1fr);
}
}

.left-column p {
padding-bottom: 4rem;
}
/_ -------------
Skill-bars
------------ _/

.skills-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: var(--space-md);
}

.skill-card {
background: var(--black);
padding: var(--space-md);
border-radius: 12px;
text-align: center;
}

.skill-icon {
margin-bottom: var(--space-sm);
display: block;
margin-left: auto;
margin-right: auto;
max-width: 35%;
}

.skill-card h3 {
font-size: var(--text-sm);
margin-bottom: var(--space-sm);
}

.skill-bar {
height: 6px;
background: var(--skill-bar);
border-radius: 3px;
overflow: hidden;
}

.skill-fill {
height: 100%;
width: 0;
background: var(--main-color);
border-radius: 3px;
transition: width 1s var(--ease-out) 0.3s;
}

/_ Animate skill bars when revealed _/
[data-reveal-stagger].revealed .skill-fill {
width: var(--fill);
}

/_ -------------------------------------------------------------------------- 8. Awards Section
-------------------------------------------------------------------------- _/
.awards {
background: var(--black);
}

.awards-grid {
display: grid;
gap: var(--space-xl);
}

table,
th,
td {
text-align: left;
padding: 1rem;
}

table {
margin-left: 2rem;
}

/_ -------------------------------------------------------------------------- 9. Work Section
-------------------------------------------------------------------------- _/

/_ Container holding the image and the text _/
.work-card {
position: relative;
text-align: center;
color: var(--white);
}

.work-card img {
border-radius: 15px;
}

/_ Bottom left text _/
.bottom-left {
position: absolute;
bottom: 8px;
left: 16px;
padding: var(--space-sm);
font-size: var(--text-2xl);
font-weight: 500;
}

/_ Top left text _/
.top-left {
position: absolute;
top: 8px;
left: 16px;
padding: var(--space-sm);
font-size: var(--text-sm);
}

/_ Top right text _/
.top-right {
position: absolute;
top: 8px;
right: 16px;
padding: var(--space-sm);
font-size: var(--text-sm);
}

.works-grid {
display: grid;
gap: var(--space-lg);
}

@media (min-width: 640px) {
.works-grid {
grid-template-columns: repeat(1, 1fr);
}
}

@media (min-width: 650px) {
.works-grid {
grid-template-columns: repeat(2, 1fr);
}
}

/_ -------------------------------------------------------------------------- 10. Contact Section
-------------------------------------------------------------------------- _/
.contact {
background: var(--black);
text-align: center;
}

.contact-content p {
font-size: var(--text-lg);
color: var(--black);
margin-bottom: var(--space-lg);
}

.social-links {
display: flex;
justify-content: center;
gap: var(--space-lg);
margin-top: var(--space-lg);
}

.social-links a {
color: var(--black);
transition: color 0.3s;
}

.social-links a:hover {
color: var(--main-color);
}

/_ -------------------------------------------------------------------------- 11. Footer
-------------------------------------------------------------------------- _/
.footer {
padding: var(--space-lg) 0;
text-align: center;
color: var(--black);
font-size: var(--text-sm);
}

.footer .container {
display: flex;
justify-content: space-between;
align-items: center;
}

.back-to-top {
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
background: var(--black);
border-radius: 50%;
transition: background 0.3s, transform 0.3s;
}

.back-to-top:hover {
background: var(--main-color);
transform: translateY(-3px);
}

/\* -------------------------------------------------------------------------- 12. SCROLL REVEAL ANIMATIONS (IntersectionObserver-driven)

🎓 THE CSS + JAVASCRIPT PARTNERSHIP:
The JavaScript IntersectionObserver (in main.js) adds classes when elements
enter the viewport. CSS handles the actual animation via transitions.

This separation of concerns is powerful:

- JS: "When should the animation start?" (viewport detection)
- CSS: "How should the animation look?" (visual effects)

📐 THE PATTERN:

1.  Elements start with opacity: 0 and transform: translateY(30px)
2.  JavaScript adds .visible class when element enters viewport
3.  CSS transitions smoothly animate to opacity: 1 and translateY(0)

⚡ PERFORMANCE NOTE:
We ONLY animate `transform` and `opacity` because these properties:

- Don't trigger layout recalculation (expensive!)
- Don't trigger repaint (also expensive!)
- Run on the GPU compositor thread (fast! 60fps!)

NEVER animate: width, height, margin, padding, top, left, etc.
These trigger layout and will cause jank (stuttering).
-------------------------------------------------------------------------- \*/

/\*

- SINGLE ELEMENT REVEAL
-
- Use class="animate-on-scroll" on any element you want to fade in.
- JavaScript will add .visible when it scrolls into view.
  _/
  .animate-on-scroll {
  opacity: 0; /_ Start invisible _/
  transform: translateY(30px); /_ Start 30px below final position \*/

/\*
_ TRANSITION SHORTHAND EXPANDED:
_
_ transition: [property] [duration] [timing-function]
_
_ We're transitioning TWO properties (opacity AND transform).
_ Both use var(--duration-normal) = 0.6s
_ Both use var(--ease-out) = our custom easing curve
_/
transition: opacity var(--duration-normal) var(--ease-out),
transform var(--duration-normal) var(--ease-out);
}

.animate-on-scroll.visible {
opacity: 1; /_ Fade in _/
transform: translateY(0); /_ Move to final position _/
}

/\* --------------------------------------------------------------------------
STAGGERED REVEAL ANIMATION

🎓 WHAT IS STAGGERING?
Staggering means animating children elements one after another instead of
all at once. This creates a "cascade" or "wave" effect that draws the eye
and feels more dynamic than everything appearing simultaneously.

📐 HOW IT WORKS:

1.  Parent has [data-reveal-stagger] attribute
2.  All children start invisible (opacity: 0, translateY)
3.  When parent gets .revealed class, children animate with increasing delays
4.  transition-delay creates the stagger: 0.1s, 0.2s, 0.3s, etc.

💡 DATA ATTRIBUTES:
We use data-\* attributes instead of classes because:

- They're semantic: "this element reveals with stagger"
- They can hold values: data-stagger-delay="0.2s" (future enhancement)
- They're easily queryable: [data-reveal-stagger]
  -------------------------------------------------------------------------- _/
  [data-reveal-stagger] > _ {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s var(--ease-out), transform 0.5s var(--ease-out);
  }

/\*

- STAGGER DELAYS USING :nth-child
-
- Each child gets a progressively longer delay.
- Child 1: 0.1s delay, Child 2: 0.2s delay, etc.
-
- This creates the "wave" effect as elements appear one by one.
-
- ⚠️ LIMITATION: This only works for up to 6 children. For dynamic
- content with unknown child count, you'd need JavaScript to set delays.
  _/
  [data-reveal-stagger].revealed > _:nth-child(1) {
  transition-delay: 0.1s;
  }
  [data-reveal-stagger].revealed > _:nth-child(2) {
  transition-delay: 0.2s;
  }
  [data-reveal-stagger].revealed > _:nth-child(3) {
  transition-delay: 0.3s;
  }
  [data-reveal-stagger].revealed > _:nth-child(4) {
  transition-delay: 0.4s;
  }
  [data-reveal-stagger].revealed > _:nth-child(5) {
  transition-delay: 0.5s;
  }
  [data-reveal-stagger].revealed > \*:nth-child(6) {
  transition-delay: 0.6s;
  }

[data-reveal-stagger].revealed > \* {
opacity: 1;
transform: translateY(0);
}

/\* -------------------------------------------------------------------------- 13. ACCESSIBILITY: REDUCED MOTION

🎓 WHY THIS MATTERS:
Some users experience motion sickness, vestibular disorders, or seizures
triggered by animations. Others simply find motion distracting.

The `prefers-reduced-motion` media query respects user preferences set in
their operating system settings:

- macOS: System Preferences → Accessibility → Display → Reduce motion
- Windows: Settings → Ease of Access → Display → Show animations
- iOS: Settings → Accessibility → Motion → Reduce Motion

⚖️ LEGAL REQUIREMENT:
WCAG 2.1 Success Criterion 2.3.3 requires respecting user motion preferences.
Ignoring this can expose you to accessibility lawsuits.

📐 OUR APPROACH:
When reduced motion is preferred, we:

1.  Disable ALL animations and transitions (near-instant 0.01ms)
2.  Make animated elements immediately visible (no waiting)
3.  Disable smooth scrolling (instant jumps instead)

💡 WHY 0.01ms INSTEAD OF 0ms?
Some browsers have bugs with 0ms duration. 0.01ms is effectively instant
but avoids those edge cases.

🔗 LEARN MORE: https://web.dev/prefers-reduced-motion/  
 -------------------------------------------------------------------------- _/
@media (prefers-reduced-motion: reduce) {
/_
_ NUCLEAR OPTION: Disable ALL animations/transitions globally
_
_ The !important ensures this overrides any other animation styles.
_ This is one of the few legitimate uses of !important.
_/
_,
_::before,
_::after {
animation-duration: 0.01ms !important;
animation-iteration-count: 1 !important;
transition-duration: 0.01ms !important;
scroll-behavior: auto !important; /_ Instant scroll, no smooth _/
}

/\*
_ ENSURE ANIMATED CONTENT IS VISIBLE
_
_ Without this, elements with opacity: 0 would stay invisible forever
_ since the animation that reveals them is now disabled.
_/
.animate-on-scroll,
[data-reveal-stagger] > _ {
opacity: 1; /_ Fully visible _/
transform: none; /_ No transform offset _/
}

/\*
_ SKILL BARS: Show at full width immediately
_/
.skill-fill {
width: var(--fill);
transition: none;
}
}

/_ -------------------------------------------------------------------------- 14. Mobile Adjustments
-------------------------------------------------------------------------- _/
@media (max-width: 640px) {
.nav-links {
display: none; /_ Would be hamburger menu in production _/
}

.footer .container {
flex-direction: column;
gap: var(--space-md);
}
}

CSS-theme
:root {
/\*
_ FLUID TYPOGRAPHY SCALE
_
_ This creates a harmonious type scale that smoothly adjusts between
_ mobile (320px) and desktop (1200px) viewports. \*
_ Scale ratio: ~1.125 (Major Second) — subtle but professional
_ Each step is roughly 12.5% larger than the previous
_/
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem); /_ 12px → 14px _/
--text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem); /_ 14px → 16px _/
--text-base: clamp(
1rem,
0.9rem + 0.5vw,
1.125rem
); /_ 16px → 18px (body text) _/
--text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem); /_ 18px → 20px _/
--text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem); /_ 20px → 24px _/
--text-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2rem); /_ 24px → 32px _/
--text-3xl: clamp(
2rem,
1.5rem + 2.5vw,
3rem
); /_ 32px → 48px (section titles) _/
--text-5xl: clamp(3rem, 2.25rem + 4vw, 6rem); /_ 48px → 82px _/
--text-7xl: clamp(
5rem,
3.5rem + 6vw,
8rem
); /_ 80px → 120px (hero headline) \*/

/\*
_ FLUID SPACING SCALE
_
_ Consistent spacing creates visual rhythm. These values scale
_ proportionally with the viewport, maintaining relationships. \*
_ Use these for margins, paddings, and gaps — NOT for widths!
_/
--space-xs: clamp(0.25rem, 0.2rem + 0.25vw, 0.5rem); /_ 4px → 8px _/
--space-sm: clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem); /_ 8px → 12px _/
--space-md: clamp(1rem, 0.8rem + 1vw, 1.5rem); /_ 16px → 24px _/
--space-lg: clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem); /_ 24px → 40px _/
--space-xl: clamp(2rem, 1.5rem + 2.5vw, 4rem); /_ 32px → 64px _/
--space-2xl: clamp(
3rem,
2rem + 5vw,
6rem
); /_ 48px → 96px (section padding) _/

/\*
_ COLOR PALETTE
_
_ Dark theme with indigo accent. Limited palette = cohesive design.
_ Semantic naming (bg, text, accent) makes colors self-documenting.
_/
--white: #f6eed4; /_ Off-white for readability (not pure white) \*/
--black: #1a1a1a;
--main-color: rgb(187, 11, 11);
--skill-bar: #f6eed47d;

/\*
_ ANIMATION TOKENS
_
_ Centralizing animation values ensures consistency and makes
_ global timing adjustments trivial. \*
_ The custom easing curve creates a "gentle landing" effect:
_ - Fast start (0.22, 1)
_ - Smooth deceleration (0.36, 1)
_/
--ease-out: cubic-bezier(0.22, 1, 0.36, 1); /_ "Power2.out" equivalent _/
--duration-normal: 0.6s; /_ Default animation duration _/
}

CSS-reset
/_ http://meyerweb.com/eric/tools/css/reset/
v2.0 | 20110126
License: none (public domain)
_/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}
/_ HTML5 display-role reset for older browsers _/
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
display: block;
}
body {
line-height: 1;
}
ol,
ul {
list-style: none;
}
blockquote,
q {
quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
content: "";
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}

JS

// ==========================================================================
// 1. INTERSECTIONOBSERVER CONFIGURATION
// ==========================================================================
const observerOptions = {
root: null, // Use the browser viewport
rootMargin: "0px 0px -10% 0px", // Trigger 10% before fully visible
threshold: 0.1, // Need 10% visibility to trigger
};

const revealOnScroll = (entries, observer) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
// Add class that triggers CSS transition (see style.css)
entry.target.classList.add("visible");

      // 🎯 PERFORMANCE OPTIMIZATION: Stop observing after reveal
      // Once an element is revealed, we don't need to watch it anymore.
      // This reduces work for the observer and prevents re-triggering.
      observer.unobserve(entry.target);
    }

});
};

const revealStaggered = (entries, observer) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("revealed");
observer.unobserve(entry.target);
}
});
};

const singleObserver = new IntersectionObserver(
revealOnScroll,
observerOptions
);
const staggerObserver = new IntersectionObserver(
revealStaggered,
observerOptions
);

// ==========================================================================
// 2. INITIALIZE OBSERVERS
// ==========================================================================

function initScrollAnimations() {

const prefersReducedMotion = window.matchMedia(
"(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      el.classList.add("visible");
    });
    document.querySelectorAll("[data-reveal-stagger]").forEach((el) => {
      el.classList.add("revealed");
    });
    return; // Exit early — no observers needed

}

// Single element reveals (e.g., headings, paragraphs)
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
singleObserver.observe(el);
});

// Staggered container reveals (e.g., skill grids, project cards)
document.querySelectorAll("[data-reveal-stagger]").forEach((el) => {
staggerObserver.observe(el);
});
}

// ==========================================================================
// 3. SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================================================

function initSmoothScroll() {
// Select all anchor links (href starts with "#")
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
anchor.addEventListener("click", (e) => {
const targetId = anchor.getAttribute("href");

      // Ignore links that are just "#" (often used for JavaScript triggers)
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        // Prevent the default "jump to anchor" behavior
        e.preventDefault();

        const navHeight = document.querySelector(".nav")?.offsetHeight || 0;
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - navHeight;


        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });


        history.pushState(null, "", targetId);
      }
    });

});
}

// ==========================================================================
// 4. ACTIVE NAVIGATION STATE
// ==========================================================================

function initActiveNav() {
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const observerOptions = {
root: null,
rootMargin: "-50% 0px -50% 0px", // Detect section in middle of viewport
threshold: 0, // Trigger as soon as ANY part enters
};

const navObserver = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
const id = entry.target.getAttribute("id");

        // Update all nav links: highlight matching, reset others
        navLinks.forEach((link) => {
          link.style.color =
            link.getAttribute("href") === `#${id}`
              ? "var(--main-color)" // Highlighted color
              : ""; // Reset to default (inherits from CSS)
        });
      }
    });

}, observerOptions);

// Observe all sections with IDs
sections.forEach((section) => navObserver.observe(section));
}

// ==========================================================================
// 5. INITIALIZATION
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
initScrollAnimations();
initSmoothScroll();
initActiveNav();

console.log("🚀 Grade 1 Demo: Vanilla scroll animations initialized");
});

// ==========================================================================
// 6. CLEANUP (FOR SPA ENVIRONMENTS)
// ==========================================================================

window.cleanupScrollObservers = () => {
singleObserver.disconnect(); // Stop observing all elements
staggerObserver.disconnect();
console.log("🧹 Observers cleaned up");
};

// ==========================================================================
// 7. NAV-BAR
// ==========================================================================

// (Small screens)
document.addEventListener("DOMContentLoaded", () => {
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (!toggle || !navLinks) {
console.error("No se encuentra el menú");
return;
}

toggle.addEventListener("click", () => {
console.log("CLICK");
navLinks.classList.toggle("active");
});
});

## <!---------------------------------------------------------------QWEN RESPONSE------------------------------------------------------------------->

                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                body {
                  background-color: white; /* Ensure the iframe has a white background */
                }

                /* ❌ ELIMINA ESTO COMPLETAMENTE */

.nav.scrolled .nav-logo,
.nav.scrolled .nav-links a {
color: var(--white) !important;
}

.nav.scrolled .nav-toggle span {
background: var(--white) !important;
}

/_ --------------------------------------------------------------------------
Navigation
-------------------------------------------------------------------------- _/
.nav {
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 100;
background: var(--white);
padding: var(--space-md) 0;
transition: background 0.3s ease;
}

/_ Navbar cuando ha salido de la hero _/
.nav.scrolled {
background: var(--black);
}

.nav-container {
display: flex;
justify-content: space-between;
align-items: center;
width: min(90%, 1200px);
margin-inline: auto;
}

.nav-logo {
font-size: var(--text-xl);
font-weight: 500;
color: var(--main-color);
}

/_ Links desktop _/
.nav-links {
display: flex;
gap: var(--space-lg);
list-style: none;
}

.nav-links a {
color: rgb(187, 11, 11); /_ ← Este color se mantiene SIEMPRE _/
transition: color 0.3s;
}

.nav-links a:hover,
.nav-links a:focus {
color: #1a1a1a;
}

/_ --------------------------------------------------------------------------
Botón hamburguesa
-------------------------------------------------------------------------- _/
.nav-toggle {
display: none;
flex-direction: column;
gap: 6px;
background: none;
border: none;
cursor: pointer;
padding-right: 1rem;
}

.nav-toggle span {
width: 24px;
height: 2px;
background: var(--black); /_ ← color normal _/
display: block;
}

/_ En móvil, cuando el navbar es negro, el menú hamburguesa debe ser blanco _/
.nav.scrolled .nav-toggle span {
background: var(--white); /_ ← solo cambia el hamburger _/
}

@media (max-width: 768px) {
.nav-container {
position: relative;
}

.nav-toggle {
display: flex;
}

.nav-links {
display: none;
position: absolute;
top: 100%;
right: 0;
width: auto;
min-width: 150px;
background: var(--white);
text-align: right;
padding: 2rem;
padding-right: 3rem;
}

.nav.scrolled .nav-links {
background: var(--black);
}

.nav-links.active {
display: block;
}

.nav-links li {
padding: 12px 0;
}
}

              </style>
                        </head>
                        <body>


              <script>
                              // ==========================================================================

// 8. NAVBAR COLOR CHANGE (ONLY BACKGROUND)
// ==========================================================================

function initNavbarBackground() {
const navbar = document.querySelector('.nav');
const hero = document.querySelector('#hero');

if (!navbar || !hero) return;

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
navbar.classList.remove('scrolled'); // fondo blanco
} else {
navbar.classList.add('scrolled'); // fondo negro
}
});
}, {
root: null,
threshold: 0,
rootMargin: '0px 0px -100px 0px' // cambia cuando el hero casi desaparece
});

observer.observe(hero);
}

document.addEventListener("DOMContentLoaded", () => {
// Funciones existentes
initScrollAnimations();
initSmoothScroll();
initActiveNav();

// Nueva función
initNavbarBackground();

// Menú hamburguesa
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (toggle && navLinks) {
toggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});
}

console.log("🚀 Grade 1 Demo: Vanilla scroll animations initialized");
});

              </script>
                        </body>
                        </html>
