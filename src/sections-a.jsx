/* OSO Sections A — Nav, Hero, Proof Strip, Video, Problem, Positioning */

const IMG = {
  hero: "assets/touring-fireworks-crowd.jpg",
  hero2: "assets/touring-fireworks-crowd.jpg",
  tourFire: "assets/touring-fire-stage.jpg",
  crowd: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=2400&q=80&auto=format&fit=crop",
  crowd2: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=2400&q=80&auto=format&fit=crop",
  decks: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?w=1600&q=80&auto=format&fit=crop",
  studio: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=1400&q=80&auto=format&fit=crop",
  portrait: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=1400&q=80&auto=format&fit=crop",
  haze: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1600&q=80&auto=format&fit=crop",
  logo: "assets/oso-logo.png",
  m1: "assets/m1-identity-kaira.png",
  m2: "assets/m2-content-kairo.png",
  m3: "assets/m3-production-vessel.png",
  m4: "assets/m4-networking-saintivy.png",
  m5: "assets/m5-bookings-echopark.png"
};

window.OSO_IMG = IMG;

/* =========================================================
   NAV
========================================================= */
const Nav = () =>
<header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(10,10,10,0.78)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--line)' }}>
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <img src="assets/oso-logo.png" alt="OSO Academy" style={{ height: 26, width: 'auto', display: 'block' }} />
      </div>
      <nav style={{ display: 'flex', gap: 36 }}>
        {['CURRICULUM', 'PRICING', 'TESTIMONIALS', 'FAQ'].map((l) => {
          const href = l === 'CURRICULUM' ? '#curriculum'
                     : l === 'PRICING' ? '#pricing'
                     : l === 'TESTIMONIALS' ? '#proof'
                     : '#faq';
          return (
      <a key={l} href={href} className="meta-strong" style={{ fontSize: 11, opacity: 0.8, transition: 'opacity .15s', textDecoration:'none', color:'inherit' }}
      onMouseOver={(e) => e.currentTarget.style.opacity = 1} onMouseOut={(e) => e.currentTarget.style.opacity = 0.8}>
            {l}
          </a>
          );
        })}
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <button className="btn-primary" style={{ padding: '10px 16px', fontSize: 11 }}>JOIN <Arrow size={12} /></button>
      </div>
    </div>
  </header>;


/* =========================================================
   HERO
========================================================= */
const Hero = () => {
  return (
    <section data-screen-label="01 Hero" style={{ position: 'relative', minHeight: '92vh', overflow: 'hidden', background: '#0A0A0A' }}>
      {/* full-bleed touring photo — bright, alive */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src={IMG.hero} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'contrast(1.05) saturate(1.05) brightness(0.92)' }} />
        {/* directional gradient — softer now that there's no subject on the right; still keeps left text legible */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.78) 28%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.40) 80%, rgba(10,10,10,0.45) 100%)' }} />
        {/* subtle bottom fade for handoff to next section */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 180, background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)', pointerEvents: 'none' }} />
        {/* top dark band — frames the section */}
        <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 80, background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, transparent 100%)', pointerEvents: 'none' }} />
        {/* vignette */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)', pointerEvents: 'none' }} />
        {/* film grain */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.18, mixBlendMode: 'overlay', backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")", backgroundSize: '220px 220px' }} />
      </div>

      {/* main content */}
      <div className="container" style={{ position: 'relative', zIndex: 3, paddingTop: 140, paddingBottom: 120, minHeight: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ maxWidth: 1280 }}>
          <h1 className="display" style={{ fontSize: 'clamp(48px, 6.4vw, 104px)', letterSpacing: '-0.02em', lineHeight: 1.02, fontWeight: 400, textTransform: 'uppercase', margin: 0 }}>
            Helping local DJs<br />
            become <span style={{ color: 'var(--orange)' }}>touring DJs</span>
          </h1>
          {/* Marker-stripe supporting line */}
          <div style={{ marginTop: 36, lineHeight: 1.25 }}>
            <span
              className="display"
              style={{
                display: 'inline',
                background: '#F37021',
                color: '#0A0A0A',
                fontSize: 'clamp(28px, 3.6vw, 56px)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                padding: '0.1em 0.3em',
                boxDecorationBreak: 'clone',
                WebkitBoxDecorationBreak: 'clone',
                borderRadius: 0
              }}>
              Without needing a hit record or agency.
            </span>
          </div>

          {/* CTA row */}
          <div style={{ display: 'flex', gap: 28, alignItems: 'center', marginTop: 56 }}>
            <button className="btn-primary" style={{ padding: '22px 32px', fontSize: 15 }}>START MONDAY <Arrow size={14} /></button>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--bone)',
                padding: '8px 4px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 12,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                opacity: 0.85,
                transition: 'opacity .2s ease, color .2s ease'
              }}
              onMouseOver={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.color = 'var(--orange)'; }}
              onMouseOut={e => { e.currentTarget.style.opacity = 0.85; e.currentTarget.style.color = 'var(--bone)'; }}>
              <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(237,232,223,0.10)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="9" height="11" viewBox="0 0 9 11" fill="currentColor"><path d="M0 0 L9 5.5 L0 11 Z" /></svg>
              </span>
              <span style={{ borderBottom: '1px solid currentColor', paddingBottom: 2 }}>Watch film (2:14)</span>
            </button>
          </div>

          {/* Stats card — anchored under CTA */}
          <div className="card-floating" style={{ padding: '20px 28px', backdropFilter: 'blur(12px)', background: 'rgba(20,20,20,0.65)', marginTop: 40, display: 'inline-block' }}>
            <TicketMeta items={[
            { label: 'INVESTMENT', value: '$697 / $69 WK' },
            { label: 'TIME', value: '4–6 HRS / WK' },
            { label: 'NEXT START', value: 'THIS MONDAY' }]
            } />
            <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid rgba(237,232,223,0.08)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="dot" style={{ width: 6, height: 6, background: 'var(--orange)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px var(--orange)' }} />
              <span className="meta-strong" style={{ fontSize: 10 }}>ROLLING ENROLLMENT — LIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

/* =========================================================
   PILLARS — small section divider beneath hero
========================================================= */
const Pillars = () => {
  const items = ['IDENTITY', 'CONTENT', 'PRODUCTION', 'NETWORK', 'BOOKINGS'];
  return (
    <section data-screen-label="01b Pillars" style={{ position: 'relative', background: 'var(--bg)', padding: '40px 0 56px', borderBottom: '1px solid var(--line)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: 32, justifyContent: 'space-between' }}>
          <div className="meta-strong" style={{ color: 'var(--bone-dim)', flexShrink: 0 }}>
            WHAT WE BUILD WITH YOU
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
            {items.map((p, i) => (
              <React.Fragment key={p}>
                <span className="display" style={{ fontSize: 18, color: 'var(--bone)', letterSpacing: '0.02em' }}>
                  <span style={{ color: 'var(--orange)', marginRight: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 700, verticalAlign: 'middle' }}>0{i + 1}</span>
                  {p}
                </span>
                {i < items.length - 1 && (
                  <span style={{ color: 'var(--bone-dim)', opacity: 0.4 }}>—</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   PROOF STRIP / TICKET MARQUEE
========================================================= */
const ProofStrip = () => {
  // LogoMarquee — industry names students have played / signed / worked with
  const logos = ["ULTRA", "SPINNIN' RECORDS", "REVEALED", "LUCKY AGENCY", "HARDER INDUSTRIES"];
  const items = [];
  for (let pass = 0; pass < 3; pass++) {
    logos.forEach((l) => { items.push(l); items.push("·"); });
  }

  return (
    <>
      {/* LogoMarquee — STUDENTS HAVE PLAYED · SIGNED · WORKED WITH */}
      <section aria-label="Students have played, signed, or worked with" data-screen-label="02 Logo Marquee" style={{ position: 'relative', borderTop: '1px solid var(--line-strong)', borderBottom: '1px solid var(--line)', background: '#0A0A0A', padding: '20px 0 22px' }}>
        <div className="container" style={{ marginBottom: 14 }}>
          <span className="meta-strong" style={{ color: 'var(--bone-dim)' }}>STUDENTS HAVE PLAYED · SIGNED · WORKED WITH</span>
        </div>
        <Marquee speed={55} gap={48}>
          {items.map((t, i) =>
            <span key={i} className="display" style={{
              fontSize: 32,
              color: t === "·" ? 'var(--orange)' : 'var(--bone)',
              opacity: t === "·" ? 1 : 0.9,
              whiteSpace: 'nowrap'
            }}>{t}</span>
          )}
        </Marquee>
      </section>

      {/* TrustStrip — 200+ DJs COACHED · 5-PHASE SYSTEM · WEEKLY LIVE SESSIONS */}
      <section aria-label="Trust strip" data-screen-label="02b Trust Strip" style={{ position: 'relative', borderBottom: '1px solid var(--line-strong)', background: '#0A0A0A', padding: '18px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 28, flexWrap: 'wrap' }}>
          {['200+ DJs COACHED', '5-PHASE SYSTEM', 'WEEKLY LIVE SESSIONS'].map((t, i, arr) => (
            <React.Fragment key={t}>
              <span className="meta-strong" style={{ color: 'var(--bone)', fontSize: 12, letterSpacing: '0.14em' }}>{t}</span>
              {i < arr.length - 1 && <span className="meta-strong" style={{ color: 'var(--orange)', fontSize: 12 }}>·</span>}
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

/* =========================================================
   VIDEO SECTION — off-centre
========================================================= */
const VideoSection = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <section data-screen-label="03 Video" style={{ position: 'relative', padding: '160px 0', background: 'var(--bg)', overflow: 'hidden' }}>
      {/* huge transparent type behind */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-3vw', top: 60, fontSize: 'clamp(140px, 20vw, 320px)', color: 'rgba(237,232,223,0.04)', fontFamily: 'Anton', lineHeight: 0.85, letterSpacing: '-0.02em', whiteSpace: 'nowrap', pointerEvents: 'none', textTransform: 'uppercase' }}>
        TWO MINUTES.
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: 60, alignItems: 'flex-start' }}>
          <div style={{ paddingTop: 80 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <span style={{ width: 32, height: 1, background: 'var(--orange)' }} />
              <span className="meta-strong" style={{ color: 'var(--orange)' }}>FROM JAKE LONG</span>
            </div>
            <h2 className="display" style={{ fontSize: 'clamp(72px, 9vw, 140px)', lineHeight: 0.88 }}>
              TWO<br />
              MINUTES.<br />
              <span style={{ color: 'var(--orange)' }}>STRAIGHT</span><br />
              FROM ME.
            </h2>
            <p className="archivo" style={{ fontSize: 17, lineHeight: 1.5, color: 'var(--bone-dim)', marginTop: 32, maxWidth: 380, fontWeight: 500 }}>
              Why I built OSO, who it's for, and what the next 90 days actually look like.
            </p>
          </div>

          <div style={{ position: 'relative', alignSelf: 'flex-start', transform: 'translateY(40px)' }}>
            {/* offset frame */}
            <div style={{ position: 'absolute', inset: '-14px -14px 14px 14px', borderRadius: 'var(--r-card)', boxShadow: '0 0 0 1px var(--orange), 0 32px 80px rgba(243,112,33,0.18)', pointerEvents: 'none' }} />
            <div className="img-surface" style={{ position: 'relative', aspectRatio: '16/10' }}>
              <EditorialImg src={IMG.decks} style={{ position: 'absolute', inset: 0 }} duotone scanlines />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.35)' }} />
              {/* play button */}
              <button onClick={() => setPlaying(!playing)} style={{
                position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
                width: 96, height: 96, borderRadius: '50%', background: 'var(--orange)', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3,
                boxShadow: '0 0 0 8px rgba(243,112,33,0.18), 0 0 0 24px rgba(243,112,33,0.08)'
              }}>
                <svg width="28" height="32" viewBox="0 0 28 32" fill="#0A0A0A"><path d="M0 0 L28 16 L0 32 Z" /></svg>
              </button>
              {/* corner timestamps */}
              <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', gap: 10, zIndex: 3 }}>
                <span className="meta-strong" style={{ background: 'var(--bg)', padding: '4px 8px', fontSize: 10 }}>● REC</span>
                <span className="meta" style={{ background: 'rgba(0,0,0,0.6)', padding: '4px 8px', fontSize: 10 }}>00:00 / 02:14</span>
              </div>
              <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14, display: 'flex', justifyContent: 'space-between', zIndex: 3 }}>
                <span className="meta-strong" style={{ fontSize: 10 }}>JAKE LONG — FOUNDER, OSO ACADEMY</span>
                <span className="meta" style={{ fontSize: 10 }}>02:14</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>);

};

/* =========================================================
   PROBLEM SECTION
========================================================= */
const Problem = () => {
  // Source: landing-copy.md → PainPoints (Section 05)
  const bullets = [
  { n: '01', t: <>You're technically good but <strong style={{color:'var(--orange)', fontWeight:400, borderBottom:'2px solid var(--orange)'}}>gigs aren't scaling</strong>.</> },
  { n: '02', t: <>You watch other DJs pass you with <strong style={{color:'var(--orange)', fontWeight:400, borderBottom:'2px solid var(--orange)'}}>worse mixing</strong> and no idea how.</> },
  { n: '03', t: <>You don't have <strong style={{color:'var(--orange)', fontWeight:400, borderBottom:'2px solid var(--orange)'}}>a roadmap</strong>. You have YouTube tutorials.</> },
  { n: '04', t: <>Your content <strong style={{color:'var(--orange)', fontWeight:400, borderBottom:'2px solid var(--orange)'}}>isn't pulling bookings</strong>.</> },
  { n: '05', t: <>You don't know <strong style={{color:'var(--orange)', fontWeight:400, borderBottom:'2px solid var(--orange)'}}>who to pitch, how to pitch, or what to pitch</strong>.</> }];

  return (
    <section data-screen-label="04 Problem" style={{ position: 'relative', padding: '180px 0 160px', background: 'var(--surface-1)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--line-strong)', paddingTop: 18 }}>
          <span className="meta-strong" style={{ color: 'var(--bone-dim)' }}>THE DIAGNOSIS</span>
          <span className="meta">PHASE ZERO</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, marginTop: 60, alignItems: 'flex-start' }}>
          <div>
            <h2 className="display" style={{ fontSize: 'clamp(56px, 7.6vw, 124px)', lineHeight: 0.9 }}>
              YOUR CAREER<br />
              PLATEAU ISN'T A<br />
              <span style={{ color: 'var(--orange)' }}>TALENT PROBLEM.</span>
            </h2>
            <p className="archivo" style={{ maxWidth: 560, fontSize: 18, color: 'var(--bone-dim)', marginTop: 36, lineHeight: 1.55 }}>
              Talent gets you in the door once. A <strong style={{ color: 'var(--bone)' }}>system</strong> gets you booked again, and again, in cities you've never set foot in.
            </p>
          </div>
          <div className="card-raised" style={{ padding: '40px 36px' }}>
            <div className="meta-strong" style={{ color: 'var(--bone-dim)', marginBottom: 24 }}>SOUND FAMILIAR</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {bullets.map((b, i) =>
              <div key={i} style={{ display: 'flex', gap: 18, padding: '20px 0', borderBottom: '1px solid var(--line)' }}>
                  <span className="mono" style={{ color: 'var(--orange)', fontSize: 13, fontWeight: 700, paddingTop: 4 }}>{b.n}</span>
                  <span className="archivo" style={{ fontSize: 18, lineHeight: 1.4 }}>{b.t}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

/* =========================================================
   POSITIONING — light contrast
========================================================= */
const Positioning = () =>
<section data-screen-label="05 Positioning" style={{ position: 'relative', background: 'var(--bone)', color: '#0A0A0A', padding: '140px 0', overflow: 'hidden' }}>
    <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
      <h2 className="display" style={{ fontSize: 'clamp(64px, 9vw, 156px)', lineHeight: 0.9, color: '#0A0A0A' }}>
        YOU'RE <span style={{ color: 'var(--orange)' }}>NOT</span> BEHIND.
      </h2>
      <h2 className="display" style={{ fontSize: 'clamp(64px, 9vw, 156px)', lineHeight: 0.9, color: '#0A0A0A', marginTop: 24 }}>
        YOU'RE BUILDING<br />
        IN THE <span style={{ color: 'var(--orange)' }}>WRONG ORDER.</span>
      </h2>
      <p className="archivo" style={{ fontSize: 'clamp(20px, 1.7vw, 26px)', lineHeight: 1.45, color: 'rgba(10,10,10,0.7)', maxWidth: 720, margin: '48px auto 0', fontWeight: 500 }}>
        Talent isn't the problem. Effort isn't the problem. <strong style={{ color: '#0A0A0A' }}>Sequence is.</strong>
      </p>
    </div>
  </section>;


Object.assign(window, { Nav, Hero, Pillars, ProofStrip, VideoSection, Problem, Positioning });