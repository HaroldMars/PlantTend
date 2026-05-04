import { useState } from "react";
import { useNavigate } from "react-router-dom";

const farmers = [
  { name: "Philippines Farm Inc.", type: "Rice Supplier", rating: 4.9, emoji: "🌾" },
  { name: "Green Life", type: "Cabbage Supplier", rating: 4.7, emoji: "🥬" },
  { name: "SunGrow PH", type: "Fruit Supplier", rating: 4.8, emoji: "🍅" },
  { name: "EcoFarm Co.", type: "Herb Supplier", rating: 4.6, emoji: "🌿" },
];

const services = [
  { icon: "🌱", label: "Tutorial" },
  { icon: "🛒", label: "Shop" },
  { icon: "👨‍🌾", label: "Farmers" },
  { icon: "⚙️", label: "Settings" },
];

export default function Home() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("home");

  return (
    <>
      
      <div className="home-root">

        {/* HEADER */}
        <div className="home-header">
          <div className="home-header-row">
            <div className="home-logo">🌱 PlantTend</div>
            <button className="home-notif-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E843A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              <span className="home-notif-dot" />
            </button>
          </div>

          <div className="home-search-wrap">
            <input className="home-search" type="text" placeholder="Search..." />
            <span className="home-search-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </span>
          </div>
        </div>

        {/* HERO BANNER */}
        <div className="home-hero">
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #52b788 100%)',
          }} />
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.15,
            backgroundImage: 'radial-gradient(circle at 70% 50%, #9EEC7D 0%, transparent 60%)',
          }} />
          <div className="home-hero-overlay">
            <h2 className="home-hero-title">We need oxygen, plant now</h2>
            <p className="home-hero-sub">we will guide you how to maintain your plants healthy</p>
            <button className="home-hero-btn">Plant now</button>
          </div>
          <div style={{
            position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
            fontSize: '5rem', opacity: 0.3
          }}>🌿</div>
        </div>

        {/* MAIN CONTENT */}
        <div className="home-content">

          {/* SERVICES */}
          <div className="home-section-header">
            <span className="home-section-title">Our Services</span>
            <button className="home-see-all">See All</button>
          </div>

          <div className="home-services">
            {services.map(s => (
              <div className="home-service-item" key={s.label}>
                <div className="home-service-icon">{s.icon}</div>
                <span className="home-service-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* FARMERS */}
          <div className="home-section-header">
            <span className="home-section-title">Featured Farmers</span>
            <button className="home-see-all">See All</button>
          </div>

          <div className="home-cards-grid">
            {farmers.map(f => (
              <div className="home-card" key={f.name}>
                <div className="home-card-img-placeholder">{f.emoji}</div>
                <div className="home-card-body">
                  <div className="home-card-name">
                    {f.name.length > 14 ? f.name.slice(0, 14) + "…" : f.name}
                    <span className="home-card-verified">✔</span>
                  </div>
                  <div className="home-card-meta">
                    <span className="home-card-type">{f.type}</span>
                    <span className="home-card-rating">★ {f.rating}</span>
                  </div>
                  <button className="home-card-btn">See more Service</button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM NAV */}
        <nav className="home-bottom-nav">
          {[
            { id: "home", icon: "🏠", label: "Home" },
            { id: "shop", icon: "🛒", label: "Shop" },
            { id: "farmers", icon: "👨‍🌾", label: "Farmers" },
            { id: "profile", icon: "👤", label: "Profile" },
          ].map(n => (
            <button
              key={n.id}
              className={`home-nav-item ${activeNav === n.id ? "active" : ""}`}
              onClick={() => {
                setActiveNav(n.id);
                if (n.id === "profile") navigate("/");
              }}
            >
              <span className="home-nav-icon">{n.icon}</span>
              <span className="home-nav-label">{n.label}</span>
            </button>
          ))}
        </nav>

      </div>
    </>
  );
}
