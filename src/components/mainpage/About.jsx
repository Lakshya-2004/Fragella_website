import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Fragella</h1>
          <p className="tagline">Where fragrance becomes an identity</p>
          <p className="hero-description">
            Fragella is more than a perfume store — it is a journey into timeless
            aromas, crafted to express individuality, confidence, and emotion.
            Every scent tells a story, and every story begins with you.
          </p>
          <div className="hero-highlights">
            <span>🌿 Premium Ingredients</span>
            <span>🧴 Handpicked Brands</span>
            <span>✨ Long-Lasting Scents</span>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Welcome to <strong>Fragella</strong> — where fragrance is more than
          just a scent; it is an emotion, a memory, and a powerful expression
          of individuality. Our mission is to bring luxury, long-lasting,
          and authentic perfumes to everyone.
        </p>
        <p>
          Each fragrance is carefully crafted using premium ingredients
          sourced from around the world, designed to suit men, women, and
          unisex preferences.
        </p>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="about-section">
        <h2>Our Philosophy</h2>
        <ul className="about-list">
          <li>Quality over quantity</li>
          <li>Authenticity over imitation</li>
          <li>Confidence through fragrance</li>
          <li>Luxury should be accessible</li>
        </ul>
      </section>

      {/* CRAFTSMANSHIP & QUALITY */}
      <section className="about-section">
        <h2>Craftsmanship & Quality</h2>
        <p>
          Our perfumes are developed by expert perfumers and undergo strict
          quality checks to ensure richness, longevity, and skin safety.
        </p>
        <ul className="about-list">
          <li>Long-lasting premium fragrances</li>
          <li>Skin-friendly formulations</li>
          <li>Perfect for daily wear and special occasions</li>
          <li>Inspired by international fragrance trends</li>
        </ul>
      </section>

      {/* SUSTAINABILITY */}
      <section className="about-section">
        <h2>Sustainability & Responsibility</h2>
        <p>
          Fragella is committed to ethical luxury. We use eco-conscious
          packaging, cruelty-free practices, and responsibly sourced
          ingredients. We aim to reduce environmental impact without
          compromising quality.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-section">
        <h2>Why Choose Fragella?</h2>
        <ul className="about-list">
          <li>Men, Women & Unisex collections</li>
          <li>Affordable luxury pricing</li>
          <li>Secure payments & fast delivery</li>
          <li>Trusted by fragrance lovers worldwide</li>
          <li>Expert guidance on scent selection</li>
        </ul>
      </section>

      {/* TEAM SECTION */}
      <section className="about-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="/public/team1.jpg" alt="Founder" />
            <h3>Alice Johnson</h3>
            <p>Founder & Chief Perfumer</p>
          </div>
          <div className="team-card">
            <img src="/public/team2.jpg" alt="Co-Founder" />
            <h3>Daniel Smith</h3>
            <p>Co-Founder & Brand Strategist</p>
          </div>
          <div className="team-card">
            <img src="/public/team3.jpg" alt="Lead Perfumer" />
            <h3>Maria Lopez</h3>
            <p>Lead Perfumer & Scent Specialist</p>
          </div>
        </div>
      </section>

      {/* TIMELINE / HISTORY */}
      <section className="about-section">
        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h4>2015</h4>
            <p>Fragella was founded with a vision to bring premium fragrances online.</p>
          </div>
          <div className="timeline-item">
            <h4>2017</h4>
            <p>Expanded our collection with international brands and signature scents.</p>
          </div>
          <div className="timeline-item">
            <h4>2020</h4>
            <p>Launched eco-friendly and cruelty-free perfume packaging.</p>
          </div>
          <div className="timeline-item">
            <h4>2026</h4>
            <p>Serving fragrance lovers worldwide with over 100+ authentic scents.</p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS / AWARDS */}
      <section className="about-section">
        <h2>Certifications & Awards</h2>
        <ul className="about-list">
          <li>ISO Certified for Quality Management</li>
          <li>Eco-Friendly Packaging Award 2022</li>
          <li>Top Online Perfume Store 2023</li>
          <li>Featured in Luxury Lifestyle Magazine</li>
        </ul>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="reviews-grid">
          {[...Array(10)].map((_, idx) => (
            <div key={idx} className="review-card">
              <p>
                "Amazing quality, luxurious scents, and fast delivery!"
              </p>
              <h4>- Customer {idx + 1}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="reviews-section">
        <h2>Join Our Fragrance Club</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 20px", color: "#555" }}>
          Subscribe for exclusive offers, new arrivals, and scent tips.
        </p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button className="shop-now-btn">Subscribe</button>
        </div>
      </section>

      {/* ABOUT FOOTER / PROMISE */}
      <section className="about-footer">
        <h2>Our Promise</h2>
        <p>
          Fragella is more than a perfume brand — it’s a lifestyle. We promise
          exceptional quality, honest pricing, and unforgettable fragrances.
        </p>
      </section>

    </div>
  );
};
