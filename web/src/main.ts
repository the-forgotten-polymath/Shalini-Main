import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const app = document.querySelector<HTMLDivElement>('#app')!

const tickerText = "Ajrakh Sarees | Unstitched Suits | Ethnic Outfits | Handcrafted Cotton Clothes | Ready-made Suits | Chikankari Kurti | Plazo Set | Hand Embroidery Dupatta "
const repeatedTicker = (tickerText).repeat(8)

app.innerHTML = `
  <div class="custom-cursor"></div>
  
  <nav>
    <a href="#" class="logo">वस्त्रम् By Shalini</a>
    <div class="nav-links">
      <a href="#collection">Collection</a>
      <a href="#about">Our Story</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <section class="hero-section">
    <div class="hero-bg">
      <img src="/hero.png" alt="वस्त्रम् By Shalini" />
    </div>
    <div class="hero-content">
      <h1 class="split-text">
        <span>Handcrafted</span>
        <span>Lucknowi Chikankari</span>
      </h1>
      <p class="fade-in">हर धागे में परंपरा, हर डिजाइन में नज़ाकत</p>
      <div class="cta-group">
        <button class="btn btn-primary">View Collection</button>
        <a href="https://wa.me/918755930008" target="_blank" class="btn btn-secondary" style="text-decoration: none; display: inline-flex; align-items: center; justify-content: center;">Order on WhatsApp</a>
      </div>
    </div>
  </section>

  <section class="story-section">
    <div class="section-header">
      <span class="gold-text">Craftsmanship</span>
      <h2>From Thread to Tradition</h2>
    </div>
    <div class="story-container">
      <div class="story-item">
        <div class="story-image reveal">
          <img src="/step1.png" alt="Raw Fabric" />
        </div>
        <div class="story-text">
          <span>1.</span>
          <h2>यहीं से शुरू होती है हर कारीगरी…</h2>
          <p>बेहतरीन fabrics से बनती है हर कहानी। We source the finest silks and cottons as our canvas for delicate embroidery.</p>
        </div>
      </div>

      <div class="story-item reverse">
        <div class="story-image reveal">
          <img src="/step2.png" alt="Embroidery" />
        </div>
        <div class="story-text">
          <span>2.</span>
          <h2>हाथों से उभरती कला…</h2>
          <p>हर stitch में छुपी है मेहनत और हुनर। Each piece is hand-embroidered by master artisans in the heart of Lucknow.</p>
        </div>
      </div>

      <div class="story-item">
        <div class="story-image reveal">
          <img src="/step3.png" alt="Final Product" />
        </div>
        <div class="story-text">
          <span>3.</span>
          <h2>तैयार होती है एक पहचान</h2>
          <p>एक ऐसा outfit जो आपको सबसे अलग बनाता है। A masterpiece that blends heritage with modern elegance.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="features-strip">
    <div class="feature-item">
      <h4>Handmade</h4>
      <p>Artisanal Mastery</p>
    </div>
    <div class="feature-item">
      <h4>Lucknow</h4>
      <p>Direct Essence</p>
    </div>
    <div class="feature-item">
      <h4>Premium</h4>
      <p>Luxury Fabrics</p>
    </div>
    <div class="feature-item">
      <h4>Custom</h4>
      <p>Personalized Style</p>
    </div>
  </div>

  <div class="ticker-wrapper">
    <div class="ticker-content">
      <span>${repeatedTicker}</span>
    </div>
  </div>

  <section id="collection" class="collection-section">
    <div class="section-header">
      <span class="gold-text">The Gallery</span>
      <h2>Curated Collections</h2>
      <p style="color: var(--text-secondary); margin-top: 10px;">Explore our diverse range of handcrafted elegance, from daily wear to festive masterpieces.</p>
    </div>
    <div class="collection-grid">
      <div class="collection-card">
        <div class="card-image">
          <img src="/ajrakh_saree.png" alt="Ajrakh Sarees" />
        </div>
        <div class="card-content">
          <h3>Premium Ajrakh Sarees</h3>
          <p>परंपरा और कला का अद्भुत संगम। Hand-block printed with natural dyes.</p>
          <a href="https://wa.me/918755930008?text=I'm%20interested%20in%20Ajrakh%20Sarees" target="_blank" class="card-btn">Enquire Now →</a>
        </div>
      </div>

      <div class="collection-card">
        <div class="card-image">
          <img src="/unstitched_suit.png" alt="Unstitched Suits" />
        </div>
        <div class="card-content">
          <h3>Unstitched Suits</h3>
          <p>बेहतरीन fabrics आपकी पसंद के अनुसार design करने के लिए। Create your own legacy.</p>
          <a href="https://wa.me/918755930008?text=I'm%20interested%20in%20Unstitched%20Suits" target="_blank" class="card-btn">Enquire Now →</a>
        </div>
      </div>

      <div class="collection-card">
        <div class="card-image">
          <img src="/ethnic_outfit.png" alt="Designer Ethnic Outfits" />
        </div>
        <div class="card-content">
          <h3>Designer Ethnic Outfits</h3>
          <p>आधुनिक और पारंपरिक का संगम। Modern silhouettes with traditional soul.</p>
          <a href="https://wa.me/918755930008?text=I'm%20interested%20in%20Designer%20Ethnic%20Outfits" target="_blank" class="card-btn">Enquire Now →</a>
        </div>
      </div>

      <div class="collection-card">
        <div class="card-image">
          <img src="/collection1.png" alt="Everyday Wear" />
        </div>
        <div class="card-content">
          <h3>Everyday Cotton Wear</h3>
          <p>हल्के और आरामदायक कपड़े, रोज़ पहनने के लिए परफेक्ट। Durable beauty for your daily life.</p>
          <a href="https://wa.me/918755930008?text=I'm%20interested%20in%20Everyday%20Cotton%20Wear" target="_blank" class="card-btn">Enquire Now →</a>
        </div>
      </div>

      <div class="collection-card">
        <div class="card-image">
          <img src="/collection5.png" alt="Sarees" />
        </div>
        <div class="card-content">
          <h3>Handcrafted Chikankari Sarees</h3>
          <p>एक ऐसी पहचान जो आपको सबसे अलग बनाती है। Draped in heritage and grace.</p>
          <a href="https://wa.me/918755930008?text=I'm%20interested%20in%20Chikankari%20Sarees" target="_blank" class="card-btn">Enquire Now →</a>
        </div>
      </div>

      <div class="collection-card">
        <div class="card-image">
          <img src="/collection6.png" alt="Dupatta" />
        </div>
        <div class="card-content">
          <h3>Signature Dupattas</h3>
          <p>हाथों से बनी नाजुक कढ़ाई, हर outfit की जान। The crowning jewel of your ensemble.</p>
          <a href="https://wa.me/918755930008?text=I'm%20interested%20in%20Signature%20Dupattas" target="_blank" class="card-btn">Enquire Now →</a>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="about-section">
    <div class="about-image">
      <div class="image-reveal-container">
        <img src="/about2.png" alt="वस्त्रम् By Shalini" />
      </div>
    </div>
    <div class="about-text">
      <span class="gold-text">Our Heritage</span>
      <h2>The Heritage</h2>
      <p>घर से शुरू हुआ एक छोटा सा प्रयास, आज हर piece में है मेहनत, हुनर और लखनऊ की परंपरा।</p>
      <p>हमारा उद्देश्य है आपको ऐसे outfits देना जो comfortable होने के साथ-साथ elegant भी हों। From our humble beginnings to becoming a destination for authentic Chikankari.</p>
      <button class="btn btn-secondary">Learn Our Story</button>
    </div>
  </section>

  <section class="testimonial-section">
    <div class="testimonial-card">
      <p>"बहुत ही सुंदर finishing और quality है, पहनने में बहुत comfortable है। The attention to detail is truly world-class."</p>
      <span class="customer-name">— Megha S., Verified Customer</span>
    </div>
  </section>

  <section class="final-cta-section" style="padding: 15vh 5%; text-align: center; background: #000;">
    <h2 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 20px;">Order Your Chikankari Today</h2>
    <p style="color: var(--text-secondary); margin-bottom: 40px; font-style: italic;">Discover the beauty of handcrafted elegance and join our community of fashion lovers.</p>
    <a href="https://wa.me/918755930008" target="_blank" class="btn btn-primary" style="padding: 20px 50px; text-decoration: none; display: inline-flex;">Connect on WhatsApp</a>
  </section>

  <footer style="padding: 40px 5%; border-top: 1px solid var(--glass-border); display: flex; justify-content: center; align-items: center; color: var(--text-secondary); font-size: 0.8rem;">
    <p>&copy; 2026 वस्त्रम् By Shalini. All rights reserved.</p>
  </footer>

  <a href="https://wa.me/918755930008" target="_blank" class="whatsapp-float">
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.892-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.417 0 6.556-5.333 11.891-11.893 11.891-2.01 0-3.987-.512-5.747-1.487l-6.345 1.692zm6.208-4.086l.361.215c1.455.867 3.133 1.326 4.869 1.326 5.179 0 9.395-4.215 9.395-9.394 0-2.508-.976-4.865-2.748-6.639-1.773-1.773-4.131-2.749-6.647-2.749-5.178 0-9.394 4.218-9.394 9.397 0 1.83.535 3.619 1.545 5.163l.236.362-.993 3.626 3.732-.977zm9.905-6.321c-.274-.137-1.62-.799-1.871-.891-.252-.091-.435-.137-.617.137-.182.274-.707.891-.868 1.074-.16.182-.32.205-.594.069-.274-.137-1.157-.426-2.204-1.36-.815-.727-1.365-1.624-1.524-1.899-.16-.274-.017-.423.12-.559.124-.122.274-.32.411-.479.137-.16.182-.274.274-.457.091-.182.046-.342-.023-.479-.069-.137-.617-1.485-.845-2.033-.222-.534-.446-.462-.617-.471-.159-.009-.342-.01-.525-.01-.182 0-.479.069-.731.342-.252.274-.959.937-.959 2.285 0 1.348.982 2.651 1.119 2.834.137.182 1.933 2.951 4.68 4.142.654.283 1.165.452 1.564.578.657.208 1.255.179 1.728.109.526-.077 1.62-.662 1.848-1.299.229-.637.229-1.187.16-1.299-.069-.114-.251-.205-.526-.341z"/>
    </svg>
  </a>
`

// Delayed initialization to fix visibility issues
const runAnimations = () => {
  // Custom Cursor
  const cursor = document.querySelector('.custom-cursor') as HTMLElement
  window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: 'none'
    })
  })

  // Hero Animations
  const tl = gsap.timeline()
  tl.from('.hero-content h1 span', {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 1.2,
    ease: 'power4.out'
  })
  .from('.hero-content p', {
    opacity: 0,
    y: 20,
    duration: 0.8
  }, '-=0.8')
  .from('.cta-group', {
    opacity: 0,
    y: 20,
    duration: 0.8
  }, '-=0.6')

  // Scroll Story
  document.querySelectorAll('.story-item').forEach((item) => {
    gsap.from(item.querySelector('.story-image'), {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 1
    })
  })

  // Collection Grid - FORCED VISIBILITY
  // We remove the opacity: 0 from the animation to ensure they are visible if GSAP fails
  gsap.from('.collection-card', {
    scrollTrigger: {
      trigger: '.collection-grid',
      start: 'top 95%',
    },
    y: 50,
    stagger: 0.1,
    duration: 1,
    ease: 'power3.out'
  })

  // Hero Parallax
  gsap.to('.hero-bg img', {
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    y: 100,
    scale: 1.1
  })
}

// Ensure execution after lead
if (document.readyState === 'complete') {
  runAnimations()
} else {
  window.addEventListener('load', runAnimations)
}
