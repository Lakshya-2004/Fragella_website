import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <div className="home">

      {/* ================= COVER ================= */}
      <section className="cover-section">
        <div className="cover-overlay">
          <h1>Discover Your Signature Scent</h1>
          <p>
            Luxury perfumes for men, women, and unisex.
            Find your perfect fragrance today.
          </p>
          <NavLink to ="/products">
          
          <button className="shop-now-btn">Shop Now</button>
          </NavLink>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features-cards">
          <div className="feature-card">
            <img src="/public/giftcard.jpg" alt="Gift Card" />
            <h3>Gift Cards</h3>
            <p>Give the perfect fragrance gift for your loved ones.</p>
          </div>

          <div className="feature-card">
            <img src="/public/shipping.jpg" alt="Free Shipping" />
            <h3>Free Shipping</h3>
            <p>On all orders over $50, delivered fast and safe.</p>
          </div>

          <div className="feature-card">
            <img src="/public/payment.jpg" alt="Secure Payment" />
            <h3>Secure Payment</h3>
            <p>Safe, encrypted, and reliable checkout process.</p>
          </div>

          <div className="feature-card">
            <img src="/public/authentic.jpg" alt="Authentic" />
            <h3>100% Authentic</h3>
            <p>All perfumes are original and brand-certified.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
<section className="features-section">
  <h2>Why Choose Perfecto</h2>
  <div className="features-cards">
    <div className="feature-card">
      <h3>Curated Luxury</h3>
      <p>
        Each fragrance is handpicked by experts to ensure premium quality,
        lasting aroma, and unforgettable impressions.
      </p>
    </div>

    <div className="feature-card">
      <h3>Global Brands</h3>
      <p>
        We partner with internationally recognized perfume houses
        to bring authentic fragrances directly to you.
      </p>
    </div>

    <div className="feature-card">
      <h3>Customer First</h3>
      <p>
        Easy returns, responsive support, and secure payments —
        your satisfaction is our priority.
      </p>
    </div>
  </div>
</section>


      {/* ================= PERFUME CATEGORIES ================= */}
      <section className="perfume-section">
        <h2>Our Collections</h2>

        {/* MEN */}
        <section>
          <h3>Men's Perfumes</h3>
          <img src="/public/man.jpg" alt="Men Perfume" />
          <div className="perfume-grid">
            <div className="perfume-card">
              <h3>Ocean Rush</h3>
              <p>Fresh & Aquatic</p>
              <h4>$89</h4>
            </div>
            <div className="perfume-card">
              <h3>Woody Noir</h3>
              <p>Bold & Elegant</p>
              <h4>$99</h4>
            </div>
            <div className="perfume-card">
              <h3>Citrus Edge</h3>
              <p>Daily Wear</p>
              <h4>$79</h4>
            </div>
          </div>
        </section>

        {/* WOMEN */}
        <section>
          <h3>Women's Perfumes</h3>
          <img src="/public/woman.jpg" alt="Women Perfume" />
          <div className="perfume-grid">
            <div className="perfume-card">
              <h3>Floral Bliss</h3>
              <p>Soft & Feminine</p>
              <h4>$95</h4>
            </div>
            <div className="perfume-card">
              <h3>Sweet Aura</h3>
              <p>Fruity & Fresh</p>
              <h4>$85</h4>
            </div>
            <div className="perfume-card">
              <h3>Velvet Rose</h3>
              <p>Luxury Wear</p>
              <h4>$110</h4>
            </div>
          </div>
        </section>

        {/* UNISEX */}
        <section>
          <h3>Unisex Perfumes</h3>
          <img src="/public/unisex.jpg" alt="Unisex Perfume" />
          <div className="perfume-grid">
            <div className="perfume-card">
              <h3>Pure Balance</h3>
              <p>Everyday Fresh</p>
              <h4>$90</h4>
            </div>
            <div className="perfume-card">
              <h3>Urban Musk</h3>
              <p>Modern Aroma</p>
              <h4>$105</h4>
            </div>
            <div className="perfume-card">
              <h3>Soft Breeze</h3>
              <p>Light & Calm</p>
              <h4>$75</h4>
            </div>
          </div>
        </section>

        <section>
          <h3>All Category Perfumes</h3>
          <img src="/public/allperfume.jpg" alt="All Perfume" />

          <div className="perfume-grid">
            <div className="perfume-card">
              <h3>Amber Drift</h3>
              <p>Warm Amber • Woody Notes</p>
              <h4>$98</h4>
            </div>

            <div className="perfume-card">
              <h3>Silver Haze</h3>
              <p>Fresh Musk • Soft Citrus</p>
              <h4>$110</h4>
            </div>

            <div className="perfume-card">
              <h3>Velvet Air</h3>
              <p>Clean Floral • Powdery Finish</p>
              <h4>$85</h4>
            </div>

          </div>
        </section>


      </section>



      {/* ================= PEOPLE ARTICLES ================= */}
      <section className="features-section">
        <h2>Fragrance Stories</h2>
        <div className="features-cards">
          <div className="feature-card">
            <h3>Emma Johnson</h3>
            <p>
              “A fragrance is a personal identity. Choosing the right scent
              boosts confidence and creates lasting impressions.”
            </p>
          </div>

          <div className="feature-card">
            <h3>Daniel Smith</h3>
            <p>
              “Perfumes tell stories. Each note reflects mood, emotion,
              and lifestyle.”
            </p>
          </div>

          <div className="feature-card">
            <h3>Sophia Lee</h3>
            <p>
              “Unisex fragrances are redefining modern luxury with balance
              and elegance.”
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURED BRANDS ================= */}
      <section className="features-section">
        <h2>Featured Brands</h2>
        <div className="features-cards">
          <div className="feature-card">
            <h3>Dior</h3>
            <p>Luxury French perfumes with iconic elegance.</p>
          </div>
          <div className="feature-card">
            <h3>Chanel</h3>
            <p>Timeless fragrances crafted with sophistication.</p>
          </div>
          <div className="feature-card">
            <h3>Tom Ford</h3>
            <p>Bold, modern scents for confident personalities.</p>
          </div>
          <div className="feature-card">
            <h3>Yves Saint Laurent</h3>
            <p>Fashion-inspired perfumes with deep character.</p>
          </div>
        </div>
      </section>


{/* HOW IT WORKS */}
<section className="features-section">
  <h2>How It Works</h2>
  <div className="features-cards">
    <div className="feature-card">
      <h3>1. Explore</h3>
      <p>
        Browse through curated collections for men, women, and unisex fragrances.
      </p>
    </div>

    <div className="feature-card">
      <h3>2. Choose</h3>
      <p>
        Read detailed descriptions, notes, and categories to find your perfect match.
      </p>
    </div>

    <div className="feature-card">
      <h3>3. Checkout</h3>
      <p>
        Add to cart, enjoy secure checkout, and get your fragrance delivered fast.
      </p>
    </div>
  </div>
</section>

      {/* ================= REVIEWS ================= */}
      <section className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <p>"Amazing website, perfumes arrived beautifully packed!"</p>
            <h4>- Alice</h4>
          </div>
          <div className="review-card">
            <p>"Descriptions helped me choose the perfect scent."</p>
            <h4>- John</h4>
          </div>
          <div className="review-card">
            <p>"Fast delivery and excellent customer service."</p>
            <h4>- Maria</h4>
          </div>
        </div>
      </section>


{/* NEWSLETTER */}
<section className="reviews-section">
  <h2>Stay Inspired</h2>
  <p style={{ maxWidth: "600px", margin: "0 auto 30px", color: "#ccc" }}>
    Subscribe to receive exclusive offers, new arrivals,
    and fragrance tips straight to your inbox.
  </p>

  <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
    <input
      type="email"
      placeholder="Enter your email"
      style={{
        padding: "12px 18px",
        borderRadius: "25px",
        border: "none",
        width: "260px",
      }}
    />
    <button className="shop-now-btn">Subscribe</button>
  </div>
</section>


{/* FOOTER */}
<footer className="features-section">
  <div className="features-cards">
    <div className="feature-card">
      <h3>Perfecto</h3>
      <p>
        Luxury fragrances crafted to express your personality and elevate every moment.
      </p>
    </div>

    <div className="feature-card">
      <h3>Quick Links</h3>
      <p>Home</p>
      <p>Products</p>
      <p>Cart</p>
      <p>Contact</p>
    </div>

    <div className="feature-card">
      <h3>Contact</h3>
      <p>Email: support@perfecto.com</p>
      <p>Phone: +1 234 567 890</p>
    </div>
  </div>

  <p style={{ marginTop: "30px", color: "#777" }}>
    © 2026 Perfecto. All rights reserved.
  </p>
</footer>

    </div>
  );
};
