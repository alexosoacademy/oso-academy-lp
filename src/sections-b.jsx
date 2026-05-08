/* OSO Sections B — System Flow, Modules, Proof, How It Works */

const IMG = window.OSO_IMG;

/* =========================================================
   SYSTEM FLOW — visual module-to-module progression
========================================================= */
const SystemFlow = () => {
  const phases = [
    {n:'01', t:'IDENTITY',   img:IMG.m1, sub:'Define your sound'},
    {n:'02', t:'CONTENT',    img:IMG.m2, sub:'Grow your audience'},
    {n:'03', t:'PRODUCTION', img:IMG.m3, sub:'Finish real music'},
    {n:'04', t:'NETWORKING', img:IMG.m4, sub:'Open the doors'},
    {n:'05', t:'BOOKINGS',   img:IMG.m5, sub:'Get paid gigs'},
  ];
  return (
    <section data-screen-label="06 System Flow" style={{background:'var(--bg)', padding:'180px 0 160px', position:'relative', overflow:'hidden'}}>
      <div className="container">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid var(--line-strong)', paddingTop:18}}>
          <span className="meta-strong" style={{color:'var(--bone-dim)'}}>THE SYSTEM</span>
          <span className="meta">5 PHASES · IN ORDER · LIFETIME ACCESS</span>
        </div>

        <div style={{marginTop:48, maxWidth:1300}}>
          <h2 className="display" style={{fontSize:'clamp(64px, 9vw, 156px)', lineHeight:0.9}}>
            THE 5-PHASE<br/>
            <span style={{color:'var(--orange)'}}>TOURING DJ</span> SYSTEM.
          </h2>
          <p className="archivo" style={{fontSize:'clamp(18px, 1.5vw, 22px)', lineHeight:1.5, color:'var(--bone-dim)', marginTop:32, maxWidth:640, fontWeight:500}}>
            One path. The right order. Each phase unlocks the next — no skipping ahead.
          </p>
        </div>

        {/* MODULE-TO-MODULE FLOW */}
        <div style={{marginTop:120, position:'relative'}}>
          <div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr) ', gap:0, alignItems:'stretch'}}>
            {phases.map((p,i)=>{
              const isLast = i === phases.length-1;
              return (
                <React.Fragment key={i}>
                  <div style={{position:'relative', display:'flex', flexDirection:'column'}}>
                    {/* phase number above */}
                    <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:14}}>
                      <span className="mono" style={{fontSize:13, fontWeight:700, color:'var(--orange)', letterSpacing:'0.1em'}}>{p.n}</span>
                      <span style={{flex:1, height:1, background: isLast ? 'var(--orange)' : 'var(--line)'}}/>
                    </div>

                    {/* image card */}
                    <div className="img-surface" style={{
                      position:'relative',
                      aspectRatio:'3/4',
                      background:'#0A0A0A',
                      boxShadow: isLast ? 'var(--shadow-orange-glow)' : 'var(--shadow-raised)',
                      margin:'0 6px',
                    }}>
                      <img src={p.img} alt={p.t} loading="lazy" style={{
                        width:'100%', height:'100%', objectFit:'cover', display:'block',
                        filter: isLast ? 'none' : 'grayscale(40%) brightness(0.85)',
                        transition:'filter 0.3s ease',
                      }}/>
                      {/* dark gradient overlay for text legibility */}
                      <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.85) 100%)'}}/>
                      {/* phase title overlay */}
                      <div style={{position:'absolute', bottom:0, left:0, right:0, padding:'18px 16px'}}>
                        <h3 className="display" style={{
                          fontSize:'clamp(20px, 1.8vw, 28px)',
                          lineHeight:0.95,
                          color: isLast ? 'var(--orange)' : 'var(--bone)',
                          marginBottom:6,
                          letterSpacing:'-0.005em',
                        }}>
                          {p.t}
                        </h3>
                        <p className="archivo" style={{fontSize:12, color:'var(--bone-dim)', lineHeight:1.3, fontWeight:500}}>
                          {p.sub}
                        </p>
                      </div>
                      {/* "FINAL" badge on last */}
                      {isLast && (
                        <div style={{position:'absolute', top:12, right:12, background:'var(--orange)', color:'#0A0A0A', padding:'4px 8px'}}>
                          <span className="meta-strong" style={{fontSize:9, color:'#0A0A0A'}}>OUTCOME</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* connecting arrow between cards */}
                  {!isLast && (
                    <div aria-hidden="true" style={{
                      position:'absolute',
                      top:'calc(50% + 7px)',
                      left:`calc(${(i+1)*20}% - 12px)`,
                      transform:'translateY(-50%)',
                      zIndex:2,
                      width:24, height:24,
                      background:'var(--bg)',
                      display:'flex', alignItems:'center', justifyContent:'center',
                    }}>
                      <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                        <path d="M0 7 H17 M13 3 L17 7 L13 11" stroke="var(--orange)" strokeWidth="1.5" fill="none" strokeLinecap="square"/>
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* timeline footer */}
          <div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', marginTop:24, paddingTop:18, borderTop:'1px solid var(--line)'}}>
            {['SOUND','AUDIENCE','CATALOGUE','RELATIONSHIPS','BOOKINGS'].map((d,i)=>(
              <div key={i} style={{textAlign:'left', paddingLeft: i===0 ? 0 : 8}}>
                <span className="meta-strong" style={{color: i===4 ? 'var(--orange)' : 'var(--bone-dim)', fontSize:10}}>{d}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{marginTop:100, paddingTop:32, borderTop:'1px solid var(--line-strong)', textAlign:'center'}}>
          <p className="archivo" style={{fontSize:'clamp(22px, 2.4vw, 32px)', lineHeight:1.4, color:'var(--bone)', maxWidth:880, margin:'0 auto', fontWeight:500}}>
            Most DJs try to do everything at once and end up nowhere.<br/>
            <span style={{color:'var(--orange)', fontStyle:'italic', fontFamily:'Archivo Narrow', fontWeight:700}}>OSO gives you the order.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   MODULES — structured grid: image card + outcome + deliverables
========================================================= */
const Modules = () => {
  // Source: landing-copy.md → FiveModules. Codenames preserved from image filenames.
  const mods = [
    {
      n:'01', img:IMG.m1, title:'IDENTITY', codename:'KAIRA',
      heading:'DEVELOP YOUR DJ IDENTITY',
      outcome:'Build the brand promoters book on instinct.',
      bullets:[
        'Lock your name, sound and visual world',
        'Wordmark, palette and typography that travels',
        'Bio, EPK and press shots that get opened',
        'A positioning line you can pitch in one breath',
      ],
      layout:'left'
    },
    {
      n:'02', img:IMG.m2, title:'CONTENT', codename:'KAIRO',
      heading:'MASTER CONTENT CREATION',
      outcome:'Make content that drives bookings, not just likes.',
      bullets:[
        'Weekly content system you can actually keep up with',
        'Hooks, edits and captions that convert to DMs',
        'Set clips, behind-the-scenes and release rollouts',
        'Use analytics to double down on what gets you booked',
      ],
      layout:'right'
    },
    {
      n:'03', img:IMG.m3, title:'PRODUCTION', codename:'VESSEL',
      heading:'REFINE MUSIC PRODUCTION',
      outcome:'Finish tracks you can actually release.',
      bullets:[
        'Finish-first workflow — kill the unfinished projects folder',
        'Arrangement, mix and master that hold up on a club system',
        'Edit tools and bootlegs that make your sets unmistakable',
        'A release plan from demo to label or self-release',
      ],
      layout:'left'
    },
    {
      n:'04', img:IMG.m4, title:'NETWORKING', codename:'SAINT IVY',
      heading:'EXPAND YOUR NETWORK',
      outcome:'Build relationships that turn into gigs.',
      bullets:[
        'Map the promoters, agents and DJs in your scene',
        'Cold-DM and email scripts that actually get replies',
        'Show up on the right line-ups, in the right rooms',
        'Turn one connection into a chain of bookings',
      ],
      layout:'right'
    },
    {
      n:'05', img:IMG.m5, title:'BOOKINGS', codename:'ECHO PARK',
      heading:'SECURE BOOKINGS, PLAN TOURS',
      outcome:'Pitch and land the shows you want.',
      bullets:[
        'Pitch decks and rate cards that command real fees',
        'Negotiate riders, fees and travel without losing the gig',
        'Route a regional tour around your existing fanbase',
        'Build a year of bookings, not one-off lucky shows',
      ],
      layout:'left'
    },
  ];

  return (
    <section data-screen-label="07 Modules" id="curriculum" aria-label="Five modules · one system" style={{position:'relative', padding:'180px 0 200px', overflow:'hidden', background:'#0A0A0A'}}>
      {/* full-bleed touring photo backdrop */}
      <div aria-hidden="true" style={{position:'absolute', inset:0, zIndex:0}}>
        <img src={IMG.tourFire} alt="" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', filter:'contrast(1.05) brightness(0.55)'}}/>
        {/* heavy dark overlay for legibility */}
        <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.78) 30%, rgba(10,10,10,0.78) 70%, rgba(10,10,10,0.95) 100%)'}}/>
        {/* top + bottom dark bands to frame */}
        <div style={{position:'absolute', top:0, left:0, right:0, height:120, background:'linear-gradient(180deg, #0A0A0A 0%, transparent 100%)'}}/>
        <div style={{position:'absolute', bottom:0, left:0, right:0, height:160, background:'linear-gradient(0deg, #0A0A0A 0%, transparent 100%)'}}/>
        {/* film grain */}
        <div style={{position:'absolute', inset:0, opacity:0.12, mixBlendMode:'overlay', backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")", backgroundSize:'220px 220px'}}/>
      </div>

      <div className="container" style={{position:'relative'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid var(--line-strong)', paddingTop:18}}>
          <span className="meta-strong" style={{color:'var(--bone-dim)'}}>THE MODULES</span>
          <span className="meta">FIVE PHASES · IN ORDER</span>
        </div>
        <div style={{marginTop:48, maxWidth:1300}}>
          <h2 className="display" style={{fontSize:'clamp(56px, 7vw, 110px)', lineHeight:0.9}}>
            FIVE MODULES.<br/>
            <span style={{color:'var(--orange)'}}>ONE SYSTEM.</span>
          </h2>
        </div>

        <div style={{marginTop:120, display:'flex', flexDirection:'column', gap:64}}>
          {mods.map((m,i)=>(
            <article key={i} className="card-raised" style={{
              display:'grid',
              gridTemplateColumns: m.layout==='left' ? '1.05fr 1fr' : '1fr 1.05fr',
              gap:0, alignItems:'stretch',
              background:'rgba(15,15,15,0.78)',
              backdropFilter:'blur(12px)',
              WebkitBackdropFilter:'blur(12px)',
              border:'1px solid rgba(237,232,223,0.08)',
              boxShadow:'0 24px 60px rgba(0,0,0,0.55), 0 8px 20px rgba(0,0,0,0.35)',
              overflow:'hidden',
              position:'relative',
            }}>
              {/* IMAGE CARD — fills its grid cell cleanly */}
              <div style={{order: m.layout==='left' ? 1 : 2, position:'relative', minHeight:460, background:'#0A0A0A'}}>
                <img src={m.img} alt={m.title} loading="lazy" style={{
                  position:'absolute', inset:0,
                  width:'100%', height:'100%', objectFit:'cover', display:'block'
                }}/>
                {/* SEAM BLEND — pulls the image into the text card so the box feels like an extension of the photo */}
                <div aria-hidden="true" style={{
                  position:'absolute', top:0, bottom:0,
                  ...(m.layout==='left'
                    ? { right: 0, width: 180, background: 'linear-gradient(90deg, rgba(15,15,15,0) 0%, rgba(15,15,15,0.55) 60%, rgba(15,15,15,0.85) 100%)' }
                    : { left: 0,  width: 180, background: 'linear-gradient(270deg, rgba(15,15,15,0) 0%, rgba(15,15,15,0.55) 60%, rgba(15,15,15,0.85) 100%)' }
                  ),
                  pointerEvents:'none', zIndex:2,
                }}/>
                {/* bottom plate — flush, full width, image fades into card */}
                <div style={{position:'absolute', left:0, right:0, bottom:0, display:'flex', justifyContent:'space-between', alignItems:'center', padding:'14px 22px', background:'linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.85) 60%, rgba(15,15,15,0.95) 100%)', zIndex:3}}>
                  <span className="meta-strong" style={{color:'var(--orange)', fontSize:10}}>{m.codename}</span>
                  <span className="meta" style={{fontSize:10}}>PHASE {m.n} / 05</span>
                </div>
              </div>

              {/* TEXT BLOCK */}
              <div style={{order: m.layout==='left' ? 2 : 1, padding:'48px 52px', display:'flex', flexDirection:'column', justifyContent:'center', position:'relative', zIndex:1}}>
                <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:18}}>
                  <span className="mono" style={{fontSize:13, color:'var(--orange)', fontWeight:700}}>{m.n}</span>
                  <span style={{width:24, height:1, background:'var(--orange)'}}/>
                  <span className="meta-strong" style={{color:'var(--orange)'}}>PHASE {m.n}</span>
                </div>
                <h3 className="display" style={{fontSize:'clamp(34px, 3.6vw, 52px)', lineHeight:1.0, marginBottom:16, letterSpacing:'-0.005em', margin:'0 0 16px'}}>
                  {m.heading}
                </h3>
                <p className="archivo" style={{fontSize:'clamp(16px, 1.3vw, 19px)', lineHeight:1.45, color:'var(--bone)', maxWidth:520, fontWeight:500, margin:'0 0 24px'}}>
                  {m.outcome}
                </p>
                {/* Deliverables list */}
                <ul style={{listStyle:'none', display:'flex', flexDirection:'column', gap:11, paddingTop:20, borderTop:'1px solid rgba(237,232,223,0.12)', margin:0}}>
                  {m.bullets.map((b,bi)=>(
                    <li key={bi} style={{display:'grid', gridTemplateColumns:'auto 1fr', gap:16, alignItems:'baseline'}}>
                      <span style={{width:18, height:1, background:'var(--orange)', display:'inline-block', transform:'translateY(-4px)', flexShrink:0}}/>
                      <span className="archivo" style={{fontSize:14, lineHeight:1.5, color:'var(--bone-dim)', fontWeight:500}}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   PROOF — testimonials prominent name + result
========================================================= */
const Proof = () => {
  // Source: landing-copy.md → Proof (Section 08). Verbatim quotes.
  const lead = {
    name:'SPRINKK',
    loc:'OSO STUDENT',
    avatar:IMG.portrait,
    stat:'20,000',
    statLabel:'FOLLOWERS · 90 DAYS',
    phase:'STUDENT SPOTLIGHT',
    quote:"Joining OSO Academy was a game-changer for my DJ career, with the content and bookings modules proving to be incredibly valuable. They equipped me with the knowledge and skills to navigate the booking process effectively. The program's actionable insights and personalised worksheets helped me present myself authentically, making my outreach stand out. Two of the best things in music are three letters long: DNB and OSO.",
  };

  // Two profile cards (Dreww + Adrian) — full MD quotes
  const profiles = [
    {
      name:'DREWW',
      initials:'D',
      tagline:'Agency signing. $600 local to $2,500 touring shows.',
      quote:'OSO boosted my confidence in writing, pitching, networking, and marketing my brand.',
    },
    {
      name:'ADRIAN DAYNES',
      initials:'AD',
      tagline:'Signed Harder Industries. AHA Best Rising Talent 2025.',
      quote:'Going from having absolutely nobody within the Hardstyle scene acknowledging who I am to being one of the most requested locals in 2025 has been an unreal experience!',
    },
  ];

  // Four supporting testimonial cards — verbatim from MD
  const cards = [
    {
      name:'BULLO', initials:'B',
      quote:"In 90 days at OSO, I've mastered music production, improved my social media skills, and gained clarity on my career path. OSO is the ultimate fast-track course. For anyone looking to accelerate their DJ career, OSO is the way to go.",
    },
    {
      name:'GABRIELLA', initials:'G',
      quote:"OSO gave me clarity on my artist identity and boosted my skills and confidence. In 90 days I learned to simplify complex goals, thanks to Jake's guidance. OSO offers industry insights and tools that feel like a cheat code.",
    },
    {
      name:'WILL MIND', initials:'WM',
      quote:"OSO Academy boosted my DJ and production career. In 90 days my social media exploded, and I secured more Brisbane residencies. Jake's mentorship and the group calls made every session feel like a step forward.",
    },
    {
      name:'FAZZ', initials:'F',
      quote:"I've learned music production, music theory, and content creation, and have started networking for collaborations. Completing and releasing my own remix is something I couldn't have done without OSO.",
    },
  ];

  return (
    <section id="proof" data-screen-label="08 Proof" aria-label="Proof · real students, real outcomes" style={{background:'var(--bg)', padding:'180px 0 200px', position:'relative', overflow:'hidden'}}>
      {/* huge ghost type */}
      <div aria-hidden="true" className="display" style={{position:'absolute', right:'-2vw', top:60, fontSize:'clamp(160px, 22vw, 360px)', color:'rgba(243,112,33,0.05)', lineHeight:0.85, pointerEvents:'none'}}>
        BOOKED.
      </div>

      <div className="container" style={{position:'relative'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid var(--line-strong)', paddingTop:18}}>
          <span className="meta-strong" style={{color:'var(--bone-dim)'}}>PROOF</span>
          <span className="meta">REAL STUDENTS · REAL OUTCOMES</span>
        </div>

        {/* Headline — verbatim from MD */}
        <div style={{marginTop:48, maxWidth:1300}}>
          <h2 className="display" style={{fontSize:'clamp(56px, 7vw, 110px)', lineHeight:0.9}}>
            THIS IS WHAT HAPPENS<br/>
            WHEN YOU <span style={{color:'var(--orange)'}}>ACTUALLY DO THE WORK.</span>
          </h2>
        </div>

        {/* LEAD — Sprinkk spotlight */}
        <article className="card-raised" style={{marginTop:96, display:'grid', gridTemplateColumns:'auto 1fr', gap:0, overflow:'hidden'}}>
          <div style={{position:'relative', width:360, background:'#0A0A0A'}}>
            <div style={{position:'relative', width:360, height:'100%', minHeight:520}}>
              <EditorialImg src={lead.avatar} duotone halftone scanlines style={{position:'absolute', inset:0}}/>
              <div style={{position:'absolute', top:18, left:18, background:'var(--orange)', color:'#0A0A0A', padding:'6px 12px', zIndex:3}}>
                <span className="meta-strong" style={{fontSize:10, color:'#0A0A0A'}}>{lead.phase}</span>
              </div>
              <div style={{position:'absolute', bottom:0, left:0, right:0, padding:18, background:'linear-gradient(180deg, transparent, rgba(10,10,10,0.95))', zIndex:3}}>
                <div className="display" style={{fontSize:36, lineHeight:0.95, color:'var(--bone)'}}>{lead.name}</div>
                <div className="meta" style={{marginTop:6, fontSize:10, color:'var(--orange)'}}>· {lead.loc}</div>
              </div>
            </div>
          </div>

          <div style={{padding:'48px 56px 48px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
            {/* Orange display headline — "20,000 FOLLOWERS · 90 DAYS" */}
            <div style={{borderBottom:'1px solid var(--line)', paddingBottom:32, marginBottom:32}}>
              <div className="display" style={{fontSize:'clamp(48px, 5.4vw, 84px)', lineHeight:0.92, color:'var(--orange)', letterSpacing:'-0.01em'}}>
                {lead.stat} FOLLOWERS<br/>· 90 DAYS
              </div>
            </div>

            <blockquote>
              <div style={{color:'var(--orange)', fontSize:48, lineHeight:0.5, marginBottom:8, fontFamily:'Anton, sans-serif'}}>"</div>
              <p className="archivo" style={{fontSize:'clamp(17px, 1.35vw, 20px)', lineHeight:1.55, color:'var(--bone)', fontWeight:500}}>
                {lead.quote}
              </p>
            </blockquote>
          </div>
        </article>

        {/* PROFILE CARDS — Dreww + Adrian (full quotes, taglines preserved) */}
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, marginTop:24}}>
          {profiles.map((p,i)=>(
            <article key={i} className="card-raised" style={{padding:'40px 36px', display:'flex', flexDirection:'column'}}>
              {/* Header: avatar + name */}
              <div style={{display:'flex', alignItems:'center', gap:16, paddingBottom:20, borderBottom:'1px solid var(--line)', marginBottom:24}}>
                <div aria-label={`${p.name} headshot placeholder`} style={{width:56, height:56, flexShrink:0, borderRadius:'50%', border:'1px solid var(--orange)', background:'#0A0A0A', display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <span className="display" style={{fontSize:22, color:'var(--orange)', lineHeight:1}}>{p.initials}</span>
                </div>
                <div style={{flex:1}}>
                  <div className="display" style={{fontSize:'clamp(28px, 2.4vw, 36px)', lineHeight:0.95, color:'var(--bone)', textTransform:'lowercase', letterSpacing:'-0.005em'}}>{p.name.toLowerCase()}</div>
                </div>
              </div>

              {/* Tagline (mono orange caps) */}
              <div className="meta-strong" style={{color:'var(--orange)', fontSize:11, lineHeight:1.4, marginBottom:20}}>
                {p.tagline}
              </div>

              {/* Quote */}
              <p className="archivo" style={{fontSize:17, lineHeight:1.55, color:'var(--bone)', fontStyle:'italic', fontWeight:500}}>
                "{p.quote}"
              </p>
            </article>
          ))}
        </div>

        {/* 4 SUPPORTING TESTIMONIAL CARDS — BULLO · GABRIELLA · WILL MIND · FAZZ */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:24, marginTop:24}}>
          {cards.map((c,i)=>(
            <article key={i} className="card-flat" style={{padding:'32px 32px', display:'flex', flexDirection:'column'}}>
              {/* · NAME header — mono orange */}
              <div style={{display:'flex', alignItems:'center', gap:14, paddingBottom:18, borderBottom:'1px solid var(--line)', marginBottom:20}}>
                <div aria-label={`${c.name.split(' ').map(w => w[0]+w.slice(1).toLowerCase()).join(' ')} headshot placeholder`} style={{width:40, height:40, flexShrink:0, borderRadius:'50%', border:'1px solid var(--line-strong)', background:'#0A0A0A', display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <span className="mono" style={{fontSize:11, color:'var(--bone-dim)', fontWeight:700}}>{c.initials}</span>
                </div>
                <span className="meta-strong" style={{color:'var(--orange)', fontSize:11}}>· {c.name}</span>
              </div>
              <p className="archivo" style={{fontSize:15, lineHeight:1.55, color:'var(--bone)', fontWeight:500, fontStyle:'italic'}}>
                "{c.quote}"
              </p>
            </article>
          ))}
        </div>

        {/* Animated stat panel — counts up on scroll, large display type */}
        <ProofStatPanel/>
      </div>
    </section>
  );
};

/* =========================================================
   PROOF STAT PANEL — animated count-up stats with visual rhythm
========================================================= */
const ProofStatPanel = () => {
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);

  React.useEffect(()=>{
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      });
    }, { threshold: 0.25 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const stats = [
    { kind:'count',   target:200, suffix:'+',  label:'DJs coached',         duration:1800, sub:'since 2023' },
    { kind:'count',   target:14,  suffix:'+',  label:'years in music',      duration:1400, sub:'14 yrs · counting' },
    { kind:'count',   target:5,   suffix:'',   label:'phase system',        duration:900,  sub:'one path · in order' },
    { kind:'static',  text:'EVERY WEEK',       label:'live with jake',                    sub:'90 min workshop' },
  ];

  return (
    <div ref={ref} style={{
      marginTop:80, position:'relative',
      background: `
        radial-gradient(ellipse 60% 50% at 50% 0%, rgba(243,112,33,0.10) 0%, rgba(243,112,33,0) 60%),
        radial-gradient(ellipse 80% 100% at 50% 100%, rgba(180,60,12,0.08) 0%, rgba(0,0,0,0) 70%),
        linear-gradient(180deg, #1A1614 0%, #0E0B09 100%)
      `,
      border:'1px solid rgba(243,112,33,0.18)',
      borderRadius:'var(--r-card)',
      boxShadow:`
        0 32px 80px rgba(0,0,0,0.6),
        0 8px 24px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,200,160,0.08),
        inset 0 -1px 0 rgba(0,0,0,0.5)
      `,
      overflow:'hidden',
    }}>
      {/* DOT GRID TEXTURE — adds dimensional surface */}
      <div aria-hidden="true" style={{
        position:'absolute', inset:0,
        backgroundImage:'radial-gradient(circle, rgba(237,232,223,0.05) 1px, transparent 1px)',
        backgroundSize:'24px 24px',
        backgroundPosition:'12px 12px',
        pointerEvents:'none',
        maskImage:'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage:'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)',
      }}/>

      {/* TOP STAGE LIGHT — soft elliptical glow gives the panel a "lit" feel */}
      <div aria-hidden="true" style={{
        position:'absolute', top:-120, left:'50%', transform:'translateX(-50%)',
        width:'70%', height:240,
        background:'radial-gradient(ellipse at center, rgba(243,112,33,0.28) 0%, rgba(243,112,33,0) 70%)',
        filter:'blur(20px)',
        pointerEvents:'none',
      }}/>

      {/* corner ticks */}
      <CornerTicks/>

      {/* live status bar */}
      <div style={{position:'relative', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'14px 28px', borderBottom:'1px solid rgba(243,112,33,0.15)', background:'linear-gradient(180deg, rgba(243,112,33,0.06) 0%, rgba(0,0,0,0) 100%)', zIndex:2}}>
        <div style={{display:'flex', alignItems:'center', gap:10}}>
          <span className="pulse-dot" style={{width:7, height:7, background:'var(--orange)', borderRadius:'50%', boxShadow:'0 0 12px var(--orange), 0 0 4px var(--orange)', display:'inline-block'}}/>
          <span className="meta-strong" style={{fontSize:10, color:'var(--bone)', letterSpacing:'0.12em'}}>OSO ACADEMY · LIVE COUNT</span>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:14}}>
          <span className="meta" style={{fontSize:10, color:'var(--bone-dim)'}}>UPDATED</span>
          <span className="mono" style={{fontSize:10, color:'var(--orange)', fontWeight:700, letterSpacing:'0.08em'}}>
            {(()=>{
              const d = new Date();
              return d.toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' }).toUpperCase();
            })()}
          </span>
        </div>
      </div>

      <div style={{position:'relative', display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:0, zIndex:2}}>
        {stats.map((s,i)=>(
          <div key={i} className="proof-stat-cell" style={{
            position:'relative',
            padding:'68px 36px 44px',
            borderRight: i < stats.length-1 ? '1px solid rgba(237,232,223,0.06)' : 'none',
            display:'flex', flexDirection:'column', justifyContent:'space-between', minHeight:260,
            overflow:'hidden',
            transition:'background 0.4s ease',
          }}>
            {/* GHOST WATERMARK — giant outlined number behind each stat */}
            <span aria-hidden="true" className="display" style={{
              position:'absolute',
              top:'50%', left:'50%',
              transform:'translate(-50%, -45%)',
              fontSize:'clamp(160px, 18vw, 280px)',
              lineHeight:0.85,
              color:'transparent',
              WebkitTextStroke:'1px rgba(243,112,33,0.10)',
              fontWeight:700,
              letterSpacing:'-0.04em',
              pointerEvents:'none',
              zIndex:0,
              userSelect:'none',
              fontVariantNumeric:'tabular-nums',
            }}>
              {s.kind === 'count' ? `0${i+1}` : `0${i+1}`}
            </span>

            {/* number */}
            <div style={{position:'relative', display:'flex', alignItems:'baseline', gap:4, zIndex:2}}>
              {s.kind === 'count' ? (
                <>
                  <CountUp to={s.target} duration={s.duration} active={active}/>
                  {s.suffix && <span className="display" style={{fontSize:'clamp(40px, 4vw, 64px)', color:'var(--orange)', lineHeight:0.85, textShadow:'0 0 24px rgba(243,112,33,0.35)'}}>{s.suffix}</span>}
                </>
              ) : (
                <span className="display" style={{fontSize:'clamp(40px, 4vw, 60px)', color:'var(--orange)', lineHeight:0.95, letterSpacing:'-0.005em', textShadow:'0 0 24px rgba(243,112,33,0.35)'}}>
                  {s.text}
                </span>
              )}
            </div>

            {/* label + sub */}
            <div style={{position:'relative', marginTop:32, zIndex:2}}>
              <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:10}}>
                <span style={{width:24, height:2, background:'linear-gradient(90deg, var(--orange) 0%, rgba(243,112,33,0.3) 100%)', display:'inline-block', transform: active ? 'scaleX(1)' : 'scaleX(0)', transformOrigin:'left center', transition:'transform .9s cubic-bezier(.2,.8,.2,1)', transitionDelay:`${i*120 + 200}ms`, boxShadow:'0 0 8px rgba(243,112,33,0.5)'}}/>
                <span className="display" style={{fontSize:'clamp(14px, 1.05vw, 17px)', lineHeight:1.1, color:'var(--bone)', textTransform:'lowercase', letterSpacing:'-0.005em'}}>{s.label}</span>
              </div>
              <div className="meta" style={{fontSize:10, color:'var(--bone-dim)', paddingLeft:34}}>{s.sub}</div>
            </div>

            {/* corner index */}
            <span className="mono" style={{position:'absolute', top:18, right:18, fontSize:10, color:'rgba(243,112,33,0.7)', fontWeight:700, letterSpacing:'0.08em', zIndex:3}}>0{i+1} / 04</span>
          </div>
        ))}
      </div>

      {/* bottom marquee — feels alive */}
      <div style={{position:'relative', borderTop:'1px solid rgba(243,112,33,0.15)', background:'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(243,112,33,0.04) 100%)', padding:'14px 0', overflow:'hidden', zIndex:2}}>
        <Marquee speed={50} gap={48}>
          {Array.from({length:6}).flatMap((_,i)=>[
            <span key={`a-${i}`} className="meta-strong" style={{color:'var(--bone)', fontSize:11, whiteSpace:'nowrap'}}>STUDENTS PLAYING ULTRA</span>,
            <span key={`d1-${i}`} style={{color:'var(--orange)', fontSize:11}}>◆</span>,
            <span key={`b-${i}`} className="meta-strong" style={{color:'var(--bone)', fontSize:11, whiteSpace:'nowrap'}}>SIGNINGS · SPINNIN' · REVEALED · LUCKY AGENCY · HARDER INDUSTRIES</span>,
            <span key={`d2-${i}`} style={{color:'var(--orange)', fontSize:11}}>◆</span>,
            <span key={`c-${i}`} className="meta-strong" style={{color:'var(--bone)', fontSize:11, whiteSpace:'nowrap'}}>200+ DJs COACHED</span>,
            <span key={`d3-${i}`} style={{color:'var(--orange)', fontSize:11}}>◆</span>,
          ])}
        </Marquee>
      </div>

      <style>{`
        @keyframes osoStatPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(0.85); }
        }
        .pulse-dot { animation: osoStatPulse 1.6s ease-in-out infinite; }
        .proof-stat-cell:hover {
          background: radial-gradient(ellipse at center, rgba(243,112,33,0.06) 0%, rgba(243,112,33,0) 70%);
        }
      `}</style>
    </div>
  );
};

/* CountUp — eased number tween */
const CountUp = ({ to, duration = 1500, active }) => {
  const [n, setN] = React.useState(0);
  React.useEffect(()=>{
    if (!active) return;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setN(Math.round(to * ease(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to, duration]);
  return (
    <span className="display tabular" style={{
      fontSize:'clamp(64px, 7.5vw, 128px)',
      lineHeight:0.85,
      color:'var(--orange)',
      letterSpacing:'-0.02em',
      fontVariantNumeric:'tabular-nums',
    }}>
      {n}
    </span>
  );
};

/* CornerTicks — subtle bracketing on the stat panel */
const CornerTicks = () => (
  <>
    {['top-left','top-right','bottom-left','bottom-right'].map(pos => {
      const [v,h] = pos.split('-');
      return (
        <span key={pos} aria-hidden="true" style={{
          position:'absolute',
          [v]: 8,
          [h]: 8,
          width:14, height:14,
          borderTop: v==='top' ? '1px solid var(--orange)' : 'none',
          borderBottom: v==='bottom' ? '1px solid var(--orange)' : 'none',
          borderLeft: h==='left' ? '1px solid var(--orange)' : 'none',
          borderRight: h==='right' ? '1px solid var(--orange)' : 'none',
          opacity:0.6,
          pointerEvents:'none',
          zIndex:5,
        }}/>
      );
    })}
  </>
);

/* =========================================================
   HOW IT WORKS — light bone background, simplified
========================================================= */
const HowItWorks = () => {
  const steps = [
    {n:'01', t:'JOIN THE ACADEMY'},
    {n:'02', t:'FOLLOW THE SYSTEM'},
    {n:'03', t:'ATTEND WEEKLY LIVE SESSIONS'},
    {n:'04', t:'EXECUTE EVERY WEEK'},
  ];
  return (
    <section id="how-it-works" data-screen-label="09 How It Works" aria-label="How it works" style={{background:'var(--bone)', color:'#0A0A0A', padding:'160px 0', position:'relative'}}>
      <div className="container">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid rgba(10,10,10,0.2)', paddingTop:18}}>
          <span className="meta-strong" style={{color:'rgba(10,10,10,0.55)'}}>HOW IT WORKS</span>
          <span className="meta" style={{color:'rgba(10,10,10,0.55)'}}>JOIN ANY MONDAY</span>
        </div>

        <div style={{marginTop:60, maxWidth:1100}}>
          <h2 className="display" style={{fontSize:'clamp(64px, 9vw, 140px)', lineHeight:0.88, color:'#0A0A0A'}}>
            JOIN MONDAY.<br/>
            <span style={{color:'var(--orange)'}}>START ROLLING.</span>
          </h2>
          <p className="archivo" style={{fontSize:'clamp(18px, 1.5vw, 22px)', lineHeight:1.5, color:'rgba(10,10,10,0.7)', marginTop:32, maxWidth:640, fontWeight:500}}>
            Rolling enrollment. New cohorts every Monday — no waiting on a launch date.
          </p>
        </div>

        <div style={{marginTop:80}}>
          {steps.map((s,i)=>(
            <div key={i} style={{
              display:'grid', gridTemplateColumns:'auto 1fr', gap:60, alignItems:'center',
              padding:'42px 0', borderTop:'1px solid rgba(10,10,10,0.15)',
              borderBottom: i===steps.length-1 ? '1px solid rgba(10,10,10,0.15)' : 'none',
            }}>
              <div className="display" style={{
                fontSize:'clamp(96px, 14vw, 220px)', lineHeight:0.85,
                color:i%2===0 ? '#0A0A0A' : 'var(--orange)',
                width:'2.4ch'
              }}>{s.n}</div>
              <h3 className="display" style={{fontSize:'clamp(48px, 6vw, 92px)', lineHeight:0.9, color:'#0A0A0A'}}>
                {s.t}
              </h3>
            </div>
          ))}
        </div>

        <div style={{marginTop:60, textAlign:'center'}}>
          <p className="archivo" style={{fontSize:'clamp(20px, 2vw, 28px)', lineHeight:1.35, color:'#0A0A0A', fontWeight:500}}>
            <span style={{color:'var(--orange)', fontWeight:700}}>4 to 6 hours per week.</span> Real coaching, real feedback, real bookings.
          </p>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { SystemFlow, Modules, Proof, HowItWorks });
