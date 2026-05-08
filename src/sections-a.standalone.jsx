/* OSO Sections A — Nav, Hero, Proof Strip, Video, Problem, Positioning */

const __R = window.__resources || {};
const IMG = {
  hero:     __R.heroImg     || "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=2400&q=80&auto=format&fit=crop",
  hero2:    __R.heroImg     || "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=2400&q=80&auto=format&fit=crop",
  crowd:    __R.crowdImg    || "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=2400&q=80&auto=format&fit=crop",
  crowd2:   __R.crowd2Img   || "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=2400&q=80&auto=format&fit=crop",
  decks:    __R.decksImg    || "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?w=1600&q=80&auto=format&fit=crop",
  studio:   __R.studioImg   || "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=1400&q=80&auto=format&fit=crop",
  portrait: __R.portraitImg || "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=1400&q=80&auto=format&fit=crop",
  haze:     __R.hazeImg     || "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1600&q=80&auto=format&fit=crop",
  logo:     __R.logoImg     || "assets/oso-logo.png",
  m1:       __R.m1Img       || "assets/m1-identity-kaira.png",
  m2:       __R.m2Img       || "assets/m2-content-kairo.png",
  m3:       __R.m3Img       || "assets/m3-production-vessel.png",
  m4:       __R.m4Img       || "assets/m4-networking-saintivy.png",
  m5:       __R.m5Img       || "assets/m5-bookings-echopark.png",
};

window.OSO_IMG = IMG;

/* =========================================================
   NAV
========================================================= */
const Nav = () => (
  <header style={{position:'sticky', top:0, zIndex:100, background:'rgba(10,10,10,0.78)', backdropFilter:'blur(8px)', borderBottom:'1px solid var(--line)'}}>
    <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', height:64}}>
      <div style={{display:'flex', alignItems:'center', gap:14}}>
        <img src={IMG.logo} alt="OSO Academy" style={{height:26, width:'auto', display:'block'}}/>
      </div>
      <nav style={{display:'flex', gap:36}}>
        {['SYSTEM','MODULES','PROOF','PRICING','FAQ'].map(l=>(
          <a key={l} className="meta-strong" style={{fontSize:11, opacity:0.8, transition:'opacity .15s'}}
             onMouseOver={e=>e.currentTarget.style.opacity=1} onMouseOut={e=>e.currentTarget.style.opacity=0.8}>
            {l}
          </a>
        ))}
      </nav>
      <div style={{display:'flex', alignItems:'center', gap:14}}>
        <span className="meta">{new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}).toUpperCase()}</span>
        <button className="btn-primary" style={{padding:'10px 16px', fontSize:11}}>JOIN <Arrow size={12}/></button>
      </div>
    </div>
  </header>
);

/* =========================================================
   HERO
========================================================= */
const Hero = () => {
  return (
    <section data-screen-label="01 Hero" style={{position:'relative', minHeight:'92vh', overflow:'hidden', background:'#0A0A0A'}}>
      {/* full-bleed image */}
      <div style={{position:'absolute', inset:0}}>
        <EditorialImg src={IMG.hero2} duotone scanlines style={{width:'100%', height:'100%'}}/>
        {/* vertical darken: bottom heavy */}
        <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.45) 30%, rgba(10,10,10,0.65) 70%, rgba(10,10,10,0.95) 100%)'}}/>
        {/* horizontal darken: left heavy for headline */}
        <div style={{position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.55) 35%, rgba(10,10,10,0.25) 65%, rgba(10,10,10,0.5) 100%)'}}/>
        {/* subtle vignette */}
        <div style={{position:'absolute', inset:0, background:'radial-gradient(ellipse at 30% 50%, transparent 0%, rgba(10,10,10,0.4) 80%)'}}/>
      </div>

      {/* top thin strip — minimal */}
      <div style={{position:'absolute', top:0, left:0, right:0, padding:'14px 48px', display:'flex', justifyContent:'space-between', borderBottom:'1px solid rgba(237,232,223,0.12)', zIndex:3}}>
        <div className="meta">THE TOURING SYSTEM</div>
        <div className="meta">90 DAYS · 5 PHASES</div>
      </div>

      {/* main content */}
      <div className="container" style={{position:'relative', zIndex:3, paddingTop:120, paddingBottom:80, minHeight:'92vh', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <div style={{display:'flex', alignItems:'flex-start', gap:48, marginTop:40}}>
          <div style={{flex:1, maxWidth:1100}}>
            <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:36}}>
              <span style={{width:48, height:1, background:'var(--orange)'}}/>
              <span className="meta-strong" style={{color:'var(--orange)'}}>OSO ACADEMY · EST 2023 · GOLD COAST AU</span>
            </div>

            <h1 className="display" style={{fontSize:'clamp(72px, 11.4vw, 200px)', letterSpacing:'-0.015em', lineHeight:0.86, textShadow:'0 2px 24px rgba(0,0,0,0.5)'}}>
              BECOME A<br/>
              TOURING <span style={{color:'var(--orange)', textShadow:'0 2px 24px rgba(243,112,33,0.35), 0 2px 24px rgba(0,0,0,0.5)'}}>DJ</span><br/>
              IN 90 DAYS
            </h1>

            <div style={{marginTop:48, maxWidth:760}}>
              <p className="meta-strong" style={{fontSize:'clamp(13px, 1vw, 15px)', lineHeight:1.6, color:'var(--bone)', letterSpacing:'0.05em'}}>
                THE 5-PHASE TOURING DJ SYSTEM · 12-WEEK LIVE WORKSHOP CYCLE · JOIN ANY WEEK
              </p>
              <div style={{display:'flex', gap:14, marginTop:36, alignItems:'center', flexWrap:'wrap'}}>
                <button className="btn-primary">JOIN NOW <Arrow size={14}/></button>
                <button className="btn-ghost">▶ WATCH FILM (2:14)</button>
              </div>
            </div>
          </div>
        </div>

        {/* bottom strip — minimal */}
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid var(--line-strong)', paddingTop:18}}>
          <div style={{display:'flex', alignItems:'center', gap:10}}>
            <span style={{width:6, height:6, background:'var(--orange)', borderRadius:'50%', boxShadow:'0 0 8px var(--orange)'}}/>
            <span className="meta-strong">COHORT 04 · ENROLLING NOW</span>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:8}}>
            <span className="meta">SCROLL</span>
            <ArrowDown size={12} color="var(--orange)"/>
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
  const items = [
    "STUDENTS HAVE PLAYED",
    "★",
    "ULTRA",
    "★",
    "SPINNIN' RECORDS",
    "★",
    "REVEALED",
    "★",
    "LUCKY AGENCY",
    "★",
    "HARDER INDUSTRIES",
    "★",
    "STUDENTS HAVE SIGNED",
    "★",
    "ULTRA",
    "★",
    "SPINNIN' RECORDS",
    "★",
    "REVEALED",
    "★",
    "LUCKY AGENCY",
    "★",
    "HARDER INDUSTRIES",
    "★",
  ];
  return (
    <section data-screen-label="02 Proof Strip" style={{position:'relative', borderTop:'1px solid var(--line-strong)', borderBottom:'1px solid var(--line-strong)', background:'#0A0A0A', padding:'22px 0'}}>
      {/* perforated edges */}
      <div style={{position:'absolute', top:-1, left:0, right:0, height:1, backgroundImage:'repeating-linear-gradient(90deg, var(--bone) 0 8px, transparent 8px 16px)', opacity:0.18}}/>
      <Marquee speed={55} gap={48}>
        {items.map((t,i)=> (
          <span key={i} className="display" style={{
            fontSize:32,
            color: t==="★" ? 'var(--orange)' : 'var(--bone)',
            opacity: t==="★" ? 1 : 0.85,
            whiteSpace:'nowrap'
          }}>{t}</span>
        ))}
      </Marquee>
    </section>
  );
};

/* =========================================================
   VIDEO SECTION — off-centre
========================================================= */
const VideoSection = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <section data-screen-label="03 Video" style={{position:'relative', padding:'140px 0', background:'#0A0A0A', overflow:'hidden'}}>
      {/* huge transparent type behind */}
      <div aria-hidden="true" style={{position:'absolute', left:'-3vw', top:60, fontSize:'clamp(140px, 20vw, 320px)', color:'rgba(237,232,223,0.04)', fontFamily:'Anton', lineHeight:0.85, letterSpacing:'-0.02em', whiteSpace:'nowrap', pointerEvents:'none', textTransform:'uppercase'}}>
        TWO MINUTES.
      </div>

      <div className="container" style={{position:'relative', zIndex:2}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 2.2fr', gap:60, alignItems:'center'}}>
          <div>
            <div className="meta" style={{marginBottom:14}}>FROM JAKE · FOUNDER</div>
            <h2 className="display" style={{fontSize:'clamp(72px, 9vw, 140px)', lineHeight:0.85}}>
              TWO<br/>
              MINUTES.<br/>
              <span style={{color:'var(--orange)'}}>STRAIGHT</span><br/>
              FROM ME.
            </h2>
          </div>

          <div style={{position:'relative', alignSelf:'flex-start', transform:'translateY(40px)'}}>
            {/* offset frame */}
            <div style={{position:'absolute', inset:'-14px -14px 14px 14px', border:'1px solid var(--orange)', pointerEvents:'none'}}/>
            <div style={{position:'relative', aspectRatio:'16/10'}}>
              <EditorialImg src={IMG.decks} style={{position:'absolute', inset:0}} duotone scanlines/>
              <div style={{position:'absolute', inset:0, background:'rgba(10,10,10,0.35)'}}/>
              {/* play button */}
              <button onClick={()=>setPlaying(!playing)} style={{
                position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)',
                width:96, height:96, borderRadius:'50%', background:'var(--orange)', border:'none', cursor:'pointer',
                display:'flex', alignItems:'center', justifyContent:'center', zIndex:3,
                boxShadow:'0 0 0 8px rgba(243,112,33,0.18), 0 0 0 24px rgba(243,112,33,0.08)'
              }}>
                <svg width="28" height="32" viewBox="0 0 28 32" fill="#0A0A0A"><path d="M0 0 L28 16 L0 32 Z"/></svg>
              </button>
              {/* corner timestamps */}
              <div style={{position:'absolute', top:14, left:14, display:'flex', gap:10, zIndex:3}}>
                <span className="meta-strong" style={{background:'var(--bg)', padding:'4px 8px', fontSize:10}}>● REC</span>
                <span className="meta" style={{background:'rgba(0,0,0,0.6)', padding:'4px 8px', fontSize:10}}>00:00 / 02:14</span>
              </div>
              <div style={{position:'absolute', bottom:14, left:14, right:14, display:'flex', justifyContent:'space-between', zIndex:3}}>
                <span className="meta-strong" style={{fontSize:10}}>OSO/FILM/01 — "THE LETTER"</span>
                <span className="meta" style={{fontSize:10}}>4K · 25FPS</span>
              </div>
            </div>
            <TicketMeta style={{marginTop:24, paddingTop:14, borderTop:'1px solid var(--line-strong)'}} items={[
              {label:'RUNTIME', value:'2:14'},
              {label:'BY', value:'M. ARELLANO'},
            ]}/>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   PROBLEM SECTION
========================================================= */
const Problem = () => {
  const bullets = [
    {n:'01', t:"You're technically good but gigs aren't scaling."},
    {n:'02', t:'You watch other DJs pass you with worse mixing — and no idea how.'},
    {n:'03', t:"You don't have a roadmap. You have YouTube tutorials."},
    {n:'04', t:"Your content isn't pulling bookings."},
    {n:'05', t:"You don't know who to pitch, how to pitch, or what to pitch."},
  ];
  return (
    <section data-screen-label="04 Problem" style={{position:'relative', padding:'160px 0 140px', background:'#0A0A0A'}}>
      <div className="container">
        <SectionMeta idx="§ 04" label="THE DIAGNOSIS"/>
        <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:80, marginTop:60, alignItems:'flex-start'}}>
          <div>
            <h2 className="display" style={{fontSize:'clamp(56px, 7.6vw, 124px)', lineHeight:0.88}}>
              YOUR CAREER<br/>
              PLATEAU<br/>
              <span style={{display:'inline-block', position:'relative'}}>
                ISN'T A
                <span style={{position:'absolute', left:0, right:0, top:'45%', height:'0.06em', background:'var(--orange)'}}/>
              </span>
              <br/>
              <span style={{color:'var(--orange)'}}>TALENT</span>
              <span style={{fontStyle:'italic', fontFamily:'Archivo Narrow', fontWeight:700, marginLeft:'0.15em'}}>problem.</span>
            </h2>
            <p className="archivo" style={{maxWidth:560, fontSize:18, color:'var(--bone-dim)', marginTop:32, lineHeight:1.5}}>
              You don't need more skill. You need a <strong style={{color:'var(--bone)'}}>system</strong> — identity, content, music, relationships, and the pitch that turns it all into a paid gig.
            </p>
          </div>
          <div style={{borderLeft:'1px solid var(--line-strong)', paddingLeft:32}}>
            <div className="meta" style={{marginBottom:24}}>SYMPTOMS</div>
            <div style={{display:'flex', flexDirection:'column', gap:0}}>
              {bullets.map((b,i)=>(
                <div key={i} style={{display:'flex', gap:18, padding:'18px 0', borderBottom:'1px solid var(--line)'}}>
                  <span className="mono" style={{color:'var(--orange)', fontSize:13, fontWeight:700, paddingTop:2}}>{b.n}</span>
                  <span className="archivo" style={{fontSize:18, lineHeight:1.4}}>{b.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   POSITIONING — light contrast
========================================================= */
const Positioning = () => (
  <section data-screen-label="05 Positioning" style={{position:'relative', background:'var(--bone)', color:'#0A0A0A', padding:'140px 0', overflow:'hidden'}}>
    {/* big asterisks at corners */}
    <div style={{position:'absolute', top:32, left:32}}><Asterisk size={28} color="#0A0A0A"/></div>
    <div style={{position:'absolute', top:32, right:32}}><Asterisk size={28} color="#0A0A0A"/></div>
    <div style={{position:'absolute', bottom:32, left:32}}><Asterisk size={28} color="#0A0A0A"/></div>
    <div style={{position:'absolute', bottom:32, right:32}}><Asterisk size={28} color="#0A0A0A"/></div>

      <div className="container" style={{textAlign:'center', position:'relative'}}>
        <h2 className="display" style={{fontSize:'clamp(64px, 9vw, 156px)', lineHeight:0.88, color:'#0A0A0A'}}>
          YOU ARE <span style={{color:'var(--orange)'}}>NOT</span> BEHIND.
        </h2>
        <h2 className="display" style={{fontSize:'clamp(64px, 9vw, 156px)', lineHeight:0.88, color:'#0A0A0A', marginTop:18}}>
          YOU ARE JUST<br/>
          <span style={{fontStyle:'italic', fontFamily:'Archivo Narrow', fontWeight:700}}>building </span>
          IN THE
          <br/>
          <span style={{textDecoration:'underline', textDecorationColor:'var(--orange)', textDecorationThickness:'10px', textUnderlineOffset:'6px'}}>WRONG ORDER</span>.
        </h2>
      </div>
  </section>
);

Object.assign(window, { Nav, Hero, ProofStrip, VideoSection, Problem, Positioning });
