'use client';

import { useState } from 'react';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
import {
  Star,
  Link2,
  RefreshCw,
  Zap,
  Lock,
  Globe,
  ChevronDown,
  Check,
  Shield,
  Smartphone,
  ArrowRight,
} from 'lucide-react';

export default function PortionPalLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  const freeFeatures = [
    {
      icon: <Zap size={22} color="#7A9A55" />,
      title: 'Dynamic Scaling Engine',
      desc: 'Enter original servings, your target, and ingredient amounts — get instant, accurate results.',
    },
    {
      icon: <span style={{ fontSize: 20 }}>&#189;</span>,
      title: 'Smart Fraction Display',
      desc: 'See 1/2 cup and 1-1/3 tbsp, not 0.5 or 1.333. Real cooking fractions, every time.',
    },
    {
      icon: <Star size={22} color="#C3A93A" fill="#C3A93A" />,
      title: 'Bidirectional Anchoring',
      desc: 'Star any ingredient, edit its quantity, and watch the whole recipe — and serving count — update around it.',
    },
    {
      icon: <span style={{ fontSize: 20, color: '#C3D09A' }}>&#9680;</span>,
      title: 'Live Yellow Highlights',
      desc: 'Scaled values glow in pastel yellow as you type, so nothing slips past you.',
    },
    {
      icon: <Globe size={22} color="#7A9A55" />,
      title: 'Unit Intelligence',
      desc: 'Toggle between Weighted US (cups, oz, lb) and Metric (ml, g, kg) instantly.',
    },
    {
      icon: <RefreshCw size={22} color="#888" />,
      title: 'One-Tap Reset',
      desc: 'Start fresh with a single tap — with a confirmation so you never lose work by accident.',
    },
  ];

  const proFeatures = [
    {
      icon: <Link2 size={20} color="#7A9A55" />,
      title: 'Recipe URL Import',
      desc: 'Paste any recipe link and PortionPal auto-extracts ingredients and serving count via JSON-LD.',
    },
    {
      icon: <Globe size={20} color="#7A9A55" />,
      title: 'US Unit Handling',
      desc: 'Imported oz/lb/fl oz convert automatically for scaling, then display back in their original units.',
    },
    {
      icon: <span style={{ fontSize: 18 }}>&#8651;</span>,
      title: 'Dual-Unit Display',
      desc: 'See "11 oz beef (312 g)" side by side — switch between metric and US without losing context.',
    },
    {
      icon: <span style={{ fontSize: 18 }}>&#128681;</span>,
      title: 'Needs-Review Flags',
      desc: 'Non-scalable items like "2 eggs" or "salt to taste" are flagged automatically for your attention.',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Enter your recipe',
      desc: 'Type in the original serving count and each ingredient with its amount and unit.',
      warm: true,
    },
    {
      num: '02',
      title: 'Set your target',
      desc: 'Change "Serves 4" to "Cooking for 3" — or tap the star on any ingredient to anchor from there.',
      warm: false,
    },
    {
      num: '03',
      title: 'Cook with confidence',
      desc: 'Every ingredient updates instantly in clean cooking fractions. No math, no guesswork.',
      warm: true,
    },
  ];

  const faqs = [
    {
      q: 'Does PortionPal work offline?',
      a: 'Yes — all calculations happen entirely on your device. No account, no internet, no data sent anywhere. Your recipes stay private.',
    },
    {
      q: 'What is the star/anchor feature?',
      a: 'Star any ingredient (like 300g rice) and edit its amount. PortionPal treats that as the fixed quantity and recalculates every other ingredient — plus the serving count — automatically.',
    },
    {
      q: 'Is the Pro upgrade a subscription?',
      a: "No. It's a one-time $4.99 purchase — buy once, use forever. No recurring charges, ever.",
    },
    {
      q: 'Which units does PortionPal support?',
      a: 'Volume: cups, tbsp, tsp, ml, L. Weight: g, kg, oz, lb. All via a clean picker — no free-text confusion.',
    },
    {
      q: 'Where can I download it?',
      a: 'PortionPal is launching on Android (Google Play) first, with iOS coming soon. Tap the button above to get notified.',
    },
  ];

  const trustItems = [
    {
      icon: <Shield size={26} color="#7A9A55" />,
      title: 'Privacy first',
      desc: 'All calculations happen on your device. No recipe data ever leaves your phone.',
    },
    {
      icon: <Lock size={26} color="#C3A93A" />,
      title: 'No account needed',
      desc: 'Open the app and start scaling. No sign-up, no email, no password.',
    },
    {
      icon: <Smartphone size={26} color="#7A9A55" />,
      title: 'Offline always',
      desc: 'No internet required for manual entry. Works on a plane, in a cabin, anywhere.',
    },
    {
      icon: <Star size={26} color="#C3A93A" fill="#C3A93A" />,
      title: 'One-time Pro',
      desc: 'Verified via RevenueCat. Buy once, own it forever — no recurring charges.',
    },
  ];

  const audienceItems = [
    { emoji: '🧑‍🍳', label: 'Home cooks scaling recipes up or down for the night' },
    { emoji: '📦', label: 'Meal preppers adjusting batch sizes by the week' },
    { emoji: '🌾', label: 'Cooks working with what is already in the pantry' },
    { emoji: '📱', label: 'Anyone importing US recipes and needing metric conversions' },
  ];

  const proChecklist = [
    'Recipe URL import',
    'US to Metric dual display',
    'Needs-review flags',
    'All free features included',
  ];

  return (
    <main
      style={{
        backgroundColor: '#FBF9F5',
        fontFamily: 'Inter, sans-serif',
        color: '#2D2D2D',
        overflowX: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');

        .pp-manrope { font-family: 'Manrope', sans-serif; }
        .pp-inter { font-family: 'Inter', sans-serif; }

        .pp-glass {
          background: rgba(255,255,255,0.62);
          border: 1.5px solid rgba(255,255,255,0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 20px;
        }

        .pp-sage-btn {
          background: #C3D09A;
          color: #2D2D2D;
          border: none;
          border-radius: 14px;
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 16px;
          padding: 14px 32px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: filter 0.2s, transform 0.15s;
        }
        .pp-sage-btn:hover { filter: brightness(0.93); transform: translateY(-1px); }

        .pp-outline-btn {
          background: transparent;
          color: #2D2D2D;
          border: 1.5px solid rgba(0,0,0,0.18);
          border-radius: 14px;
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          font-size: 16px;
          padding: 13px 28px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s;
        }
        .pp-outline-btn:hover { background: rgba(0,0,0,0.04); }

        .pp-feature-card {
          background: rgba(255,255,255,0.55);
          border: 1.5px solid rgba(255,255,255,0.72);
          border-radius: 18px;
          padding: 28px 24px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .pp-feature-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.07); }

        .pp-faq-item {
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding: 20px 0;
          cursor: pointer;
        }

        .pp-nav-link {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #555;
          text-decoration: none;
          transition: color 0.15s;
        }
        .pp-nav-link:hover { color: #2D2D2D; }

        .pp-pro-badge {
          display: inline-block;
          background: linear-gradient(135deg, #C3A93A 0%, #C3D09A 100%);
          color: #fff;
          border-radius: 8px;
          padding: 4px 14px;
          font-size: 13px;
          font-weight: 700;
          font-family: 'Manrope', sans-serif;
          letter-spacing: 0.5px;
          margin-bottom: 18px;
        }

        @media (max-width: 600px) {
          .pp-hero-btns { flex-direction: column; align-items: center; }
          .pp-nav-links { display: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(251,249,245,0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          padding: '0 24px',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 64,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img
              src={`${BASE}/android-chrome-512x512.png`}
              alt="PortionPal"
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                objectFit: 'cover',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              }}
            />
            <span
              className="pp-manrope"
              style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.3px' }}
            >
              PortionPal
            </span>
          </div>
          <div className="pp-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <a href="#how-it-works" className="pp-nav-link">
              How it works
            </a>
            <a href="#pro" className="pp-nav-link">
              Pro
            </a>
            <a href="#faq" className="pp-nav-link">
              FAQ
            </a>
            <button className="pp-sage-btn" style={{ padding: '9px 20px', fontSize: 14 }}>
              Download <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          padding: '80px 24px 72px',
          background: 'linear-gradient(170deg, #FBF9F5 0%, #F0EDD6 55%, #E8F0D8 100%)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#EEF4E1',
              border: '1px solid rgba(195,208,154,0.6)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 28,
            }}
          >
            <span className="pp-inter" style={{ fontSize: 13, color: '#558A2A', fontWeight: 600 }}>
              🚀 Android launch — available on Google Play now
            </span>
          </div>

          <h1
            className="pp-manrope"
            style={{
              fontSize: 'clamp(36px, 6vw, 62px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              marginBottom: 24,
              color: '#1A1A1A',
            }}
          >
            Stop doing
            <br />
            <span style={{ color: '#6A8A3C' }}>recipe math</span> in your head.
          </h1>

          <p
            className="pp-inter"
            style={{
              fontSize: 'clamp(17px, 2.2vw, 21px)',
              color: '#555',
              lineHeight: 1.65,
              marginBottom: 40,
              maxWidth: 600,
              margin: '0 auto 40px',
            }}
          >
            PortionPal scales any recipe to your exact serving count.
          </p>

          <div
            className="pp-hero-btns"
            style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <button className="pp-sage-btn" style={{ fontSize: 17, padding: '16px 36px' }}>
              <Smartphone size={18} /> Download Free
            </button>
          </div>

          <p className="pp-inter" style={{ fontSize: 13, color: '#999', marginTop: 18 }}>
            Free to use &nbsp;·&nbsp; No account needed &nbsp;·&nbsp; Pro unlocks for $4.99 one-time
          </p>
        </div>

        <div style={{ maxWidth: 300, margin: '60px auto 0', position: 'relative' }}>
          {/* Outer glow */}
          <div
            style={{
              position: 'absolute',
              inset: -24,
              background:
                'radial-gradient(ellipse at center, rgba(195,208,154,0.35) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />
          {/* Phone frame */}
          <div
            style={{
              background: '#111',
              borderRadius: 48,
              padding: '10px',
              boxShadow:
                '0 40px 100px rgba(0,0,0,0.28), 0 0 0 1.5px #2A2A2A, inset 0 0 0 1px #3A3A3A',
              position: 'relative',
            }}
          >
            {/* Side buttons left */}
            <div
              style={{
                position: 'absolute',
                left: -3,
                top: 100,
                width: 3,
                height: 32,
                background: '#2A2A2A',
                borderRadius: '2px 0 0 2px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: -3,
                top: 144,
                width: 3,
                height: 56,
                background: '#2A2A2A',
                borderRadius: '2px 0 0 2px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: -3,
                top: 210,
                width: 3,
                height: 56,
                background: '#2A2A2A',
                borderRadius: '2px 0 0 2px',
              }}
            />
            {/* Side button right */}
            <div
              style={{
                position: 'absolute',
                right: -3,
                top: 160,
                width: 3,
                height: 72,
                background: '#2A2A2A',
                borderRadius: '0 2px 2px 0',
              }}
            />
            {/* Screen area */}
            <div
              style={{
                borderRadius: 40,
                overflow: 'hidden',
                background: '#000',
                position: 'relative',
                minHeight: 580,
              }}
            >
              <img
                src={`${BASE}/HomeScreen.jpg`}
                alt="PortionPal app screenshot"
                style={{
                  width: '100%',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2
            className="pp-manrope"
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-0.8px',
              marginBottom: 20,
            }}
          >
            We have all been there.
          </h2>
          <p
            className="pp-inter"
            style={{ fontSize: 18, color: '#666', lineHeight: 1.7, marginBottom: 40 }}
          >
            "This serves 4... but I am cooking for 3." So you grab your phone, open the calculator,
            start dividing, multiply again — and still second-guess whether 2/3 cup is right. There
            has to be a better way.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 16,
            }}
          >
            {audienceItems.map((item, i) => (
              <div
                key={i}
                className="pp-glass"
                style={{ padding: '22px 18px', textAlign: 'center' }}
              >
                <div style={{ fontSize: 30, marginBottom: 10 }}>{item.emoji}</div>
                <p className="pp-inter" style={{ fontSize: 14, color: '#555', lineHeight: 1.55 }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE FEATURES */}
      <section
        id="features"
        style={{
          padding: '80px 24px',
          background: 'linear-gradient(180deg, #FBF9F5 0%, #F4F9ED 100%)',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span
              className="pp-inter"
              style={{
                display: 'inline-block',
                background: '#EEF4E1',
                color: '#558A2A',
                borderRadius: 100,
                padding: '5px 16px',
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Free tier
            </span>
            <h2
              className="pp-manrope"
              style={{
                fontSize: 'clamp(26px, 4vw, 42px)',
                fontWeight: 800,
                letterSpacing: '-0.8px',
                marginBottom: 14,
              }}
            >
              Everything you need, free.
            </h2>
            <p
              className="pp-inter"
              style={{ fontSize: 17, color: '#666', maxWidth: 540, margin: '0 auto' }}
            >
              The core PortionPal experience costs nothing — no account, no ads, no catch.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 18,
            }}
          >
            {freeFeatures.map((f, i) => (
              <div key={i} className="pp-feature-card">
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: '#FDF3D6',
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                    fontSize: 22,
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 700,
                    color: '#8B6A00',
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  className="pp-manrope"
                  style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}
                >
                  {f.title}
                </h3>
                <p className="pp-inter" style={{ fontSize: 14, color: '#666', lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2
              className="pp-manrope"
              style={{
                fontSize: 'clamp(26px, 4vw, 42px)',
                fontWeight: 800,
                letterSpacing: '-0.8px',
                marginBottom: 14,
              }}
            >
              Done in three steps.
            </h2>
            <p className="pp-inter" style={{ fontSize: 17, color: '#666' }}>
              Open app. Enter recipe. Cook.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {steps.map((s, i) => (
              <div
                key={i}
                className="pp-glass"
                style={{
                  background: s.warm ? 'rgba(253,243,214,0.70)' : 'rgba(238,244,225,0.70)',
                  padding: '30px 36px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 28,
                }}
              >
                <div
                  className="pp-manrope"
                  style={{
                    fontSize: 40,
                    fontWeight: 800,
                    color: 'rgba(0,0,0,0.08)',
                    minWidth: 56,
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div>
                  <h3
                    className="pp-manrope"
                    style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}
                  >
                    {s.title}
                  </h3>
                  <p className="pp-inter" style={{ fontSize: 15, color: '#666', lineHeight: 1.6 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Star callout */}
          <div
            style={{
              marginTop: 32,
              background: '#FEEABC',
              borderRadius: 20,
              padding: '28px 32px',
              display: 'flex',
              gap: 20,
              alignItems: 'flex-start',
            }}
          >
            <Star
              size={28}
              color="#C3A93A"
              fill="#C3A93A"
              style={{ flexShrink: 0, marginTop: 3 }}
            />
            <div>
              <h3 className="pp-manrope" style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>
                The star ingredient trick
              </h3>
              <p className="pp-inter" style={{ fontSize: 15, color: '#7A5A00', lineHeight: 1.65 }}>
                Have exactly 300g of rice in the bag? Star it. Change the amount to 300g. PortionPal
                recalculates every other ingredient <em>and</em> updates the serving count to match.
                No more wasted food or short-changing yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRO TIER */}
      <section
        id="pro"
        style={{
          padding: '80px 24px',
          background: 'linear-gradient(160deg, #F0EDD6 0%, #E8F0D8 100%)',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="pp-pro-badge">PRO — $4.99 ONE-TIME</div>
            <h2
              className="pp-manrope"
              style={{
                fontSize: 'clamp(26px, 4vw, 42px)',
                fontWeight: 800,
                letterSpacing: '-0.8px',
                marginBottom: 14,
              }}
            >
              Import any recipe URL.
              <br />
              We handle the rest.
            </h2>
            <p
              className="pp-inter"
              style={{ fontSize: 17, color: '#666', maxWidth: 520, margin: '0 auto' }}
            >
              Unlock once. Use forever. Pro adds URL import and dual-unit display on top of
              everything free already gives you.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 18,
              marginBottom: 40,
            }}
          >
            {proFeatures.map((f, i) => (
              <div
                key={i}
                className="pp-glass"
                style={{ padding: '26px 22px', background: 'rgba(255,255,255,0.65)' }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    background: '#EEF4E1',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 14,
                    fontSize: 20,
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  className="pp-manrope"
                  style={{ fontWeight: 700, fontSize: 16, marginBottom: 7 }}
                >
                  {f.title}
                </h3>
                <p className="pp-inter" style={{ fontSize: 14, color: '#666', lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <div
              className="pp-glass"
              style={{
                display: 'inline-block',
                padding: '36px 52px',
                background: 'rgba(255,255,255,0.72)',
                textAlign: 'center',
              }}
            >
              <p
                className="pp-manrope"
                style={{ fontSize: 38, fontWeight: 800, marginBottom: 4, color: '#2D2D2D' }}
              >
                $4.99
              </p>
              <p className="pp-inter" style={{ fontSize: 14, color: '#888', marginBottom: 24 }}>
                One-time purchase. No subscription. Ever.
              </p>
              {proChecklist.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 12,
                    textAlign: 'left',
                  }}
                >
                  <Check size={16} color="#7A9A55" />
                  <span className="pp-inter" style={{ fontSize: 14, color: '#444' }}>
                    {item}
                  </span>
                </div>
              ))}
              <button
                className="pp-sage-btn"
                style={{ marginTop: 22, width: '100%', justifyContent: 'center' }}
              >
                Unlock Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2
            className="pp-manrope"
            style={{
              fontSize: 'clamp(24px, 3.5vw, 38px)',
              fontWeight: 800,
              letterSpacing: '-0.6px',
              marginBottom: 14,
            }}
          >
            Built for cooks, not data collectors.
          </h2>
          <p
            className="pp-inter"
            style={{
              fontSize: 16,
              color: '#666',
              marginBottom: 48,
              maxWidth: 500,
              margin: '0 auto 48px',
            }}
          >
            PortionPal is refreshingly simple: it runs entirely on your phone and never touches a
            server.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 20,
            }}
          >
            {trustItems.map((t, i) => (
              <div
                key={i}
                className="pp-glass"
                style={{ padding: '26px 20px', background: 'rgba(255,255,255,0.55)' }}
              >
                <div style={{ marginBottom: 14 }}>{t.icon}</div>
                <h3
                  className="pp-manrope"
                  style={{ fontWeight: 700, fontSize: 16, marginBottom: 7 }}
                >
                  {t.title}
                </h3>
                <p className="pp-inter" style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '80px 24px', background: '#F4F9ED' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2
            className="pp-manrope"
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-0.8px',
              marginBottom: 40,
              textAlign: 'center',
            }}
          >
            Questions answered.
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} className="pp-faq-item" onClick={() => toggleFaq(i)}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                }}
              >
                <h3 className="pp-manrope" style={{ fontWeight: 700, fontSize: 16, flex: 1 }}>
                  {faq.q}
                </h3>
                <ChevronDown
                  size={18}
                  color="#888"
                  style={{
                    transform: openFaq === i ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s',
                    flexShrink: 0,
                  }}
                />
              </div>
              {openFaq === i && (
                <p
                  className="pp-inter"
                  style={{ fontSize: 15, color: '#666', lineHeight: 1.7, marginTop: 12 }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '88px 24px 80px',
          background: 'linear-gradient(160deg, #2D3A1E 0%, #3A4C24 100%)',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ fontSize: 44, marginBottom: 20 }}>🥧</div>
          <h2
            className="pp-manrope"
            style={{
              fontSize: 'clamp(28px, 4.5vw, 46px)',
              fontWeight: 800,
              letterSpacing: '-1px',
              marginBottom: 18,
              color: '#fff',
            }}
          >
            Ready to scale your
            <br />
            next recipe?
          </h2>
          <p
            className="pp-inter"
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.7)',
              marginBottom: 38,
              lineHeight: 1.65,
            }}
          >
            Free on Android. No account. No math.
          </p>
          <button
            className="pp-sage-btn"
            style={{ fontSize: 18, padding: '18px 40px', borderRadius: 16 }}
          >
            <Smartphone size={20} /> Download on Google Play
          </button>
          <p
            className="pp-inter"
            style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 20 }}
          >
            iOS coming soon &nbsp;·&nbsp; Pro unlocks from $4.99
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '20px 24px', background: '#1A1A1A', textAlign: 'center' }}>
        <p className="pp-inter" style={{ fontSize: 13, color: '#555' }}>
          © 2026 PortionPal &nbsp;·&nbsp; Built by QuantApps &nbsp;·&nbsp;{' '}
          <a href="https://gist.github.com/quantapps8-max/b71e872d88b980991ac04219783d5eed" target="_blank" rel="noopener noreferrer" style={{ color: '#777', textDecoration: 'none' }}>
            Privacy Policy
          </a>
        </p>
      </footer>
    </main>
  );
}
