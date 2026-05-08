/* OSO Sections C — Creator, For/Not For, Pricing, Final CTA, Footer */

const IMG = window.OSO_IMG;

/* =========================================================
   CREATOR — sharp, ~30-40% less text
========================================================= */
const Creator = () => (
  <section id="story" data-screen-label="10 Creator" aria-label="Why I built this" style={{background:'var(--surface-1)', padding:'180px 0 200px', position:'relative', overflow:'hidden'}}>
    {/* huge ghost type */}
    <div aria-hidden="true" className="display" style={{position:'absolute', right:'-2vw', top:60, fontSize:'clamp(160px, 22vw, 360px)', color:'rgba(237,232,223,0.04)', lineHeight:0.85, pointerEvents:'none'}}>
      FOUNDER.
    </div>

    <div className="container" style={{position:'relative'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid var(--line-strong)', paddingTop:18}}>
        <span className="meta-strong" style={{color:'var(--bone-dim)'}}>WHY I BUILT THIS</span>
        <span className="meta">JAKE LONG · 14+ YRS IN MUSIC</span>
      </div>

      {/* Big introduction headline — verbatim from MD */}
      <div style={{marginTop:48, maxWidth:1300}}>
        <h2 className="display" style={{fontSize:'clamp(56px, 7vw, 110px)', lineHeight:0.9, textTransform:'lowercase', letterSpacing:'-0.01em'}}>
          why i built <span style={{color:'var(--orange)'}}>this.</span>
        </h2>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'0.85fr 1.15fr', gap:80, marginTop:96, alignItems:'flex-start'}}>
        {/* PORTRAIT */}
        <div style={{position:'relative'}}>
          <div style={{position:'absolute', inset:'-12px 12px 12px -12px', borderRadius:'var(--r-card)', boxShadow:'0 0 0 1px var(--orange), 0 24px 60px rgba(243,112,33,0.18)'}}/>
          <div className="img-surface" style={{position:'relative', aspectRatio:'4/5'}}>
            <EditorialImg src={IMG.portrait} duotone halftone scanlines style={{position:'absolute', inset:0}}/>
            <div style={{position:'absolute', bottom:14, left:14, right:14, zIndex:3, display:'flex', justifyContent:'space-between'}}>
              <span className="meta-strong" style={{fontSize:10}}>OSO / FOUNDER</span>
              <span className="meta" style={{fontSize:10}}>PORTRAIT — 2026</span>
            </div>
          </div>
          <TicketMeta style={{marginTop:18, paddingTop:14, borderTop:'1px solid var(--line-strong)'}} items={[
            {label:'NAME',  value:'JAKE LONG'},
            {label:'BASE',  value:'GOLD COAST, AU'},
          ]}/>
        </div>

        {/* RIGHT: real story — verbatim from MD */}
        <div style={{paddingTop:8}}>
          <p className="archivo" style={{fontSize:'clamp(19px, 1.55vw, 24px)', lineHeight:1.55, color:'var(--bone)', fontWeight:500, marginBottom:32}}>
            Most DJ education online is either pure tech (here's how to mix two records) or pure fluff (here's a mindset reel). <strong style={{color:'var(--orange)', fontWeight:500}}>Neither gets you booked.</strong> The real work is the stuff nobody teaches: your identity, your content, your music, the people you know, and the pitch that turns all of that into a paid gig.
          </p>
          <p className="archivo" style={{fontSize:'clamp(18px, 1.45vw, 22px)', lineHeight:1.6, color:'var(--bone-dim)', fontWeight:500}}>
            OSO is me putting the whole system in one place. The five phases I run my own career on, a live workshop every week, and a room of DJs doing the work next to you. <strong style={{color:'var(--bone)', fontWeight:500}}>If you're serious about touring, this is the shortcut I didn't have.</strong>
          </p>

          {/* Hard credentials grid — corrected to MD numbers */}
          <div style={{marginTop:56, paddingTop:32, borderTop:'1px solid var(--line-strong)', display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:32}}>
            <div>
              <div className="display" style={{fontSize:'clamp(40px, 4vw, 60px)', lineHeight:0.9, color:'var(--orange)'}}>14+</div>
              <div className="meta-strong" style={{marginTop:10, color:'var(--bone-dim)'}}>YRS IN MUSIC</div>
            </div>
            <div>
              <div className="display" style={{fontSize:'clamp(40px, 4vw, 60px)', lineHeight:0.9, color:'var(--orange)'}}>200+</div>
              <div className="meta-strong" style={{marginTop:10, color:'var(--bone-dim)'}}>DJs COACHED</div>
            </div>
            <div>
              <div className="display" style={{fontSize:'clamp(40px, 4vw, 60px)', lineHeight:0.9, color:'var(--orange)'}}>2023</div>
              <div className="meta-strong" style={{marginTop:10, color:'var(--bone-dim)'}}>EST. GOLD COAST</div>
            </div>
          </div>

          {/* Industry line */}
          <div style={{marginTop:40, paddingTop:24, borderTop:'1px solid var(--line)'}}>
            <div className="meta-strong" style={{color:'var(--bone-dim)', marginBottom:14}}>STUDENTS HAVE PLAYED · SIGNED · WORKED WITH</div>
            <div className="display" style={{fontSize:'clamp(20px, 1.7vw, 28px)', lineHeight:1.2, color:'var(--bone)', letterSpacing:'-0.005em'}}>
              ULTRA <span style={{color:'var(--orange)'}}>·</span> SPINNIN' <span style={{color:'var(--orange)'}}>·</span> REVEALED <span style={{color:'var(--orange)'}}>·</span> LUCKY AGENCY <span style={{color:'var(--orange)'}}>·</span> HARDER INDUSTRIES
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   FOR / NOT FOR — bigger text, less decoration
========================================================= */
const ForNotFor = () => {
  // Source: landing-copy.md → ForWhom (Section 10b). Verbatim.
  const yes = [
    "DJs ready to take their career seriously",
    "Local DJs ready to break into touring",
    "Producers willing to be visible and post content",
    "People with 4 to 6 hours per week to commit",
    "Artists ready for structure, accountability and execution",
  ];
  const no = [
    "People looking for shortcuts",
    "People unwilling to post or network",
    "People who only want production tips",
    "People expecting someone else to do the work",
    "People not ready to be visible online",
  ];
  return (
    <section data-screen-label="11 For Not For" aria-label="Who this is for and not for" style={{background:'var(--bg)', padding:'180px 0 200px', position:'relative', overflow:'hidden'}}>
      {/* huge ghost type */}
      <div aria-hidden="true" className="display" style={{position:'absolute', left:'-2vw', top:80, fontSize:'clamp(160px, 22vw, 360px)', color:'rgba(237,232,223,0.04)', lineHeight:0.85, pointerEvents:'none'}}>
        ADMISSIONS.
      </div>

      <div className="container" style={{position:'relative'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid var(--line-strong)', paddingTop:18}}>
          <span className="meta-strong" style={{color:'var(--bone-dim)'}}>ADMISSIONS</span>
          <span className="meta">READ BEFORE YOU APPLY</span>
        </div>

        {/* Headline */}
        <div style={{marginTop:48, maxWidth:1300}}>
          <h2 className="display" style={{fontSize:'clamp(56px, 7vw, 110px)', lineHeight:0.9, textTransform:'lowercase', letterSpacing:'-0.01em'}}>
            this is for <span style={{color:'var(--orange)'}}>·</span> this <span style={{color:'var(--orange)'}}>isn't</span> for.
          </h2>
        </div>

        {/* Two columns */}
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, marginTop:96}}>
          {/* FOR */}
          <div className="card-raised" style={{padding:'56px 56px 64px', background:'var(--surface-2)'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid var(--line-strong)', paddingBottom:18, marginBottom:40}}>
              <span className="meta-strong" style={{color:'var(--orange)'}}>FOR.</span>
              <span className="meta" style={{color:'var(--bone-dim)'}}>5 / 5 REQUIRED</span>
            </div>
            <h3 className="display" style={{fontSize:'clamp(36px, 4vw, 60px)', lineHeight:0.95, marginBottom:48, color:'var(--bone)', textTransform:'lowercase', letterSpacing:'-0.005em'}}>
              join if you<br/>recognise<br/>yourself.
            </h3>
            <ul style={{listStyle:'none', display:'flex', flexDirection:'column'}}>
              {yes.map((t,i)=>(
                <li key={i} style={{padding:'18px 0', borderTop:'1px solid var(--line)', display:'grid', gridTemplateColumns:'auto 1fr', gap:24, alignItems:'baseline'}}>
                  <span className="mono" style={{fontSize:12, color:'var(--orange)', fontWeight:700, letterSpacing:'0.08em'}}>0{i+1}</span>
                  <span className="archivo" style={{fontSize:'clamp(17px, 1.3vw, 20px)', lineHeight:1.4, color:'var(--bone)', fontWeight:500}}>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NOT FOR */}
          <div className="card-flat" style={{padding:'56px 56px 64px'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid var(--line-strong)', paddingBottom:18, marginBottom:40}}>
              <span className="meta-strong" style={{color:'var(--bone-dim)'}}>NOT FOR.</span>
              <span className="meta" style={{color:'var(--bone-dim)'}}>SAVE YOUR MONEY</span>
            </div>
            <h3 className="display" style={{fontSize:'clamp(36px, 4vw, 60px)', lineHeight:0.95, marginBottom:48, color:'var(--bone-dim)', textTransform:'lowercase', letterSpacing:'-0.005em'}}>
              skip this if<br/>any of these<br/>are true.
            </h3>
            <ul style={{listStyle:'none', display:'flex', flexDirection:'column'}}>
              {no.map((t,i)=>(
                <li key={i} style={{padding:'18px 0', borderTop:'1px solid var(--line)', display:'grid', gridTemplateColumns:'auto 1fr', gap:24, alignItems:'baseline'}}>
                  <span className="mono" style={{fontSize:12, color:'var(--bone-dim)', fontWeight:700, letterSpacing:'0.08em'}}>0{i+1}</span>
                  <span className="archivo" style={{fontSize:'clamp(17px, 1.3vw, 20px)', lineHeight:1.4, color:'var(--bone-dim)', fontWeight:500, textDecoration:'line-through', textDecorationColor:'rgba(237,232,223,0.25)', textDecorationThickness:'1px'}}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer line */}
        <div style={{marginTop:48, paddingTop:24, borderTop:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16}}>
          <span className="meta" style={{color:'var(--bone-dim)'}}>NEW COHORTS START EVERY MONDAY · ROLLING ENROLLMENT</span>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   PRICING — simplified
========================================================= */
const Pricing = () => (
  <section id="pricing" data-screen-label="12 Pricing" aria-label="Pricing" style={{background:'var(--bone)', color:'#0A0A0A', padding:'160px 0', position:'relative', overflow:'hidden'}}>
    {/* huge ghost type */}
    <div aria-hidden="true" className="display" style={{position:'absolute', left:'-2vw', bottom:-40, fontSize:'clamp(180px, 26vw, 440px)', color:'rgba(243,112,33,0.12)', lineHeight:0.85, pointerEvents:'none', whiteSpace:'nowrap'}}>
      $697.
    </div>
    <div className="container" style={{position:'relative'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid rgba(10,10,10,0.2)', paddingTop:18}}>
        <span className="meta-strong" style={{color:'rgba(10,10,10,0.55)'}}>PRICING</span>
        <span className="meta" style={{color:'rgba(10,10,10,0.55)'}}>$697 · OR $69/WK</span>
      </div>

      <div style={{textAlign:'center', marginTop:80}}>
        <h2 className="display" style={{fontSize:'clamp(72px, 11vw, 200px)', lineHeight:0.86, color:'#0A0A0A', textTransform:'lowercase', letterSpacing:'-0.015em'}}>
          one price.<br/>
          <span style={{color:'var(--orange)'}}>full access.</span>
        </h2>
        <p className="archivo" style={{fontSize:'clamp(18px, 1.5vw, 22px)', lineHeight:1.5, color:'rgba(10,10,10,0.7)', marginTop:24, fontWeight:500}}>
          For artists ready to actually do the work.
        </p>
      </div>

      {/* TWO PRICE CARDS — verbatim from MD */}
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:32, maxWidth:1200, margin:'80px auto 0'}}>
        {/* CARD A — PAID IN FULL · BEST VALUE */}
        <div className="card-dark-on-light" style={{position:'relative', display:'flex', flexDirection:'column', overflow:'hidden'}}>
          <div style={{padding:'14px 24px', borderBottom:'1px solid var(--line-strong)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div className="meta-strong" style={{fontSize:10}}>PAID IN FULL</div>
            <div className="meta-strong" style={{fontSize:10, color:'var(--orange)'}}>· BEST VALUE</div>
          </div>
          <div style={{padding:'56px 40px 40px', flex:1, display:'flex', flexDirection:'column'}}>
            <div className="display" style={{fontSize:'clamp(88px, 11vw, 168px)', lineHeight:0.85, color:'var(--bone)'}}>
              $697
            </div>
            <div className="meta-strong" style={{marginTop:18, fontSize:11, color:'var(--bone-dim)'}}>ONE-TIME · 12 WEEKS LIVE ACCESS</div>
            <ul style={{listStyle:'none', marginTop:32, display:'flex', flexDirection:'column', gap:12, flex:1}}>
              {[
                '5-phase curriculum, day one',
                '12 weeks of live workshops',
                'Skool community access',
              ].map((f,i)=>(
                <li key={i} style={{display:'flex', gap:12, alignItems:'flex-start'}}>
                  <span style={{color:'var(--orange)', fontWeight:700, fontSize:14, paddingTop:2}}>—</span>
                  <span className="archivo" style={{fontSize:16, color:'var(--bone)', lineHeight:1.4}}>{f}</span>
                </li>
              ))}
            </ul>
            <a href="https://www.skool.com/oso-academy" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{padding:'20px 28px', fontSize:14, marginTop:32, alignSelf:'flex-start', textDecoration:'none'}}>
              JOIN NOW <Arrow size={14}/>
            </a>
          </div>
        </div>

        {/* CARD B — WEEKLY (with yellow anchor chip) */}
        <div style={{position:'relative', background:'#0A0A0A', color:'var(--bone)', display:'flex', flexDirection:'column', borderRadius:'var(--r-card)', overflow:'visible', boxShadow:'var(--shadow-orange-glow)'}}>
          {/* Yellow rotated anchor chip — counter-anchor */}
          <div style={{position:'absolute', top:-18, right:24, background:'#F5D547', color:'#0A0A0A', padding:'8px 14px', transform:'rotate(3deg)', boxShadow:'0 6px 16px rgba(0,0,0,0.35)', zIndex:5}}>
            <span className="meta-strong" style={{fontSize:11, color:'#0A0A0A', fontWeight:700}}>+$131 VS PAID-IN-FULL</span>
          </div>
          <div style={{padding:'14px 24px', display:'flex', justifyContent:'space-between', alignItems:'center', background:'var(--orange)', color:'#0A0A0A', borderRadius:'var(--r-card) var(--r-card) 0 0'}}>
            <div className="meta-strong" style={{fontSize:10, color:'#0A0A0A'}}>WEEKLY</div>
            <div className="meta-strong" style={{fontSize:10, color:'#0A0A0A'}}>SPLIT IT</div>
          </div>
          <div style={{padding:'56px 40px 40px', flex:1, display:'flex', flexDirection:'column'}}>
            <div className="display" style={{fontSize:'clamp(88px, 11vw, 168px)', lineHeight:0.85, color:'var(--orange)'}}>
              $69<span style={{fontSize:'0.4em', color:'var(--bone-dim)'}}>/wk</span>
            </div>
            <div className="meta-strong" style={{marginTop:18, fontSize:11, color:'var(--bone-dim)'}}>$69/WEEK · 12 WEEK MIN · MONTH-TO-MONTH AFTER</div>
            <ul style={{listStyle:'none', marginTop:32, display:'flex', flexDirection:'column', gap:12, flex:1}}>
              {[
                '5-phase curriculum, weekly drip',
                '12 weeks of live workshops',
                'Skool community access',
              ].map((f,i)=>(
                <li key={i} style={{display:'flex', gap:12, alignItems:'flex-start'}}>
                  <span style={{color:'var(--orange)', fontWeight:700, fontSize:14, paddingTop:2}}>—</span>
                  <span className="archivo" style={{fontSize:16, color:'var(--bone)', lineHeight:1.4}}>{f}</span>
                </li>
              ))}
            </ul>
            <a href="https://www.skool.com/oso-academy" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{padding:'20px 28px', fontSize:14, marginTop:32, alignSelf:'flex-start', textDecoration:'none'}}>
              JOIN NOW <Arrow size={14}/>
            </a>
          </div>
        </div>
      </div>

      <p className="meta" style={{fontSize:11, lineHeight:1.5, color:'rgba(10,10,10,0.55)', textAlign:'center', margin:'40px auto 0', letterSpacing:'0.08em'}}>
        12-WEEK MINIMUM ON WEEKLY · MANAGE BILLING THROUGH SKOOL AFTER WEEK 12
      </p>
    </div>
  </section>
);

/* =========================================================
   FAQ — accordion, MD verbatim
========================================================= */
const FAQ = () => {
  const items = [
    {
      q: "Can't I just learn this on YouTube or AI?",
      a: (
        <>
          <p>Yes, you can learn information anywhere. That's not the problem.</p>
          <p>The problem is knowing what to do first, what to ignore, what actually matters, and having accountability to execute it in the right order.</p>
          <p style={{color:'var(--bone)', fontWeight:600}}>YouTube gives you fragments. AI gives you answers. OSO gives you sequence, feedback, and accountability.</p>
        </>
      ),
    },
    {
      q: "I'm not sure I've got the talent.",
      a: <p>Talent is overrated. I've watched average technical DJs outbook incredible ones because they knew how to build a brand, pitch a promoter and show up consistently. If you've got taste and you're willing to do the work, the system handles the rest.</p>,
    },
    {
      q: "I don't have time for this.",
      a: <p>The live workshop is 90 minutes a week. Replays live in Skool so you can watch when it fits. 4 to 6 hours per week is the honest commitment. If you can't find that, the problem isn't OSO.</p>,
    },
    {
      q: "What happens after I join?",
      a: <p>You get Skool access the same day. You drop into this week's live workshop. The curriculum runs on a 12-week phase rotation, so you start at whatever phase the room is on and pick up the others as they come round again.</p>,
    },
    {
      q: "Why should I trust you?",
      a: <p>I've been in the music industry 14+ years, with an international residency at Sky Garden Bali under Lucky Entertainment, and years of touring nights across Australia and Asia. Since April 2023 I've coached 200+ DJs · students have played Ultra and signed to Spinnin', Revealed, Lucky Agency and Harder Industries. If that's not enough for you, it's probably not the right fit.</p>,
    },
  ];

  const [open, setOpen] = React.useState(0);

  return (
    <section id="faq" data-screen-label="13 FAQ" aria-label="Questions and honest answers" style={{background:'var(--bg)', padding:'180px 0 200px', position:'relative', overflow:'hidden'}}>
      {/* huge ghost type */}
      <div aria-hidden="true" className="display" style={{position:'absolute', right:'-2vw', top:60, fontSize:'clamp(160px, 22vw, 360px)', color:'rgba(243,112,33,0.04)', lineHeight:0.85, pointerEvents:'none'}}>
        Q+A.
      </div>

      <div className="container" style={{position:'relative'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid var(--line-strong)', paddingTop:18}}>
          <span className="meta-strong" style={{color:'var(--bone-dim)'}}>FAQ</span>
          <span className="meta">QUESTIONS · HONEST ANSWERS</span>
        </div>

        <div style={{marginTop:48, maxWidth:1300}}>
          <h2 className="display" style={{fontSize:'clamp(56px, 7vw, 110px)', lineHeight:0.9, textTransform:'lowercase', letterSpacing:'-0.01em'}}>
            the <span style={{color:'var(--orange)'}}>honest</span> answers.
          </h2>
        </div>

        <div style={{marginTop:80, maxWidth:1100}}>
          {items.map((it,i)=>{
            const isOpen = open === i;
            return (
              <div key={i} style={{borderTop:'1px solid var(--line)', borderBottom: i===items.length-1 ? '1px solid var(--line)' : 'none'}}>
                <button
                  onClick={()=>setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  style={{
                    width:'100%', textAlign:'left', background:'transparent', border:'none',
                    color:'inherit', cursor:'pointer', padding:'32px 0',
                    display:'grid', gridTemplateColumns:'auto 1fr auto', gap:32, alignItems:'baseline'
                  }}>
                  <span className="mono" style={{fontSize:13, color:'var(--orange)', fontWeight:700, letterSpacing:'0.08em'}}>0{i+1}</span>
                  <span className="display" style={{fontSize:'clamp(24px, 2.4vw, 36px)', lineHeight:1.15, color:'var(--bone)', textTransform:'lowercase', letterSpacing:'-0.005em'}}>
                    {it.q}
                  </span>
                  <span aria-hidden="true" style={{fontSize:28, color:'var(--orange)', fontFamily:'JetBrains Mono, monospace', lineHeight:1, transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition:'transform .25s ease', display:'inline-block'}}>+</span>
                </button>
                {isOpen && (
                  <div style={{padding:'4px 0 36px', display:'grid', gridTemplateColumns:'auto 1fr auto', gap:32}}>
                    <span/>
                    <div className="archivo" style={{fontSize:'clamp(17px, 1.35vw, 20px)', lineHeight:1.6, color:'var(--bone-dim)', display:'flex', flexDirection:'column', gap:16, maxWidth:760}}>
                      {it.a}
                    </div>
                    <span/>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   TICKER — looped key facts (between FinalCTA target and Footer)
========================================================= */
const Ticker = () => {
  const text = "JOIN ANY MONDAY · $697 PIF OR $69/WK · 12 WEEKS · LIVE WITH JAKE · SKOOL COMMUNITY · 200+ DJs COACHED · 14+ YRS IN MUSIC";
  const items = [];
  for (let i = 0; i < 4; i++) {
    items.push({ key: `t-${i}`, text });
  }
  return (
    <section aria-label="Key facts ticker" data-screen-label="14 Ticker" style={{position:'relative', borderTop:'1px solid var(--line-strong)', borderBottom:'1px solid var(--line-strong)', background:'#0A0A0A', padding:'24px 0', overflow:'hidden'}}>
      <Marquee speed={70} gap={56}>
        {items.flatMap((it, i) => [
          <span key={`${it.key}-t`} className="display" style={{fontSize:'clamp(28px, 3vw, 44px)', color:'var(--bone)', whiteSpace:'nowrap', letterSpacing:'-0.005em'}}>{it.text}</span>,
          <span key={`${it.key}-s`} className="display" style={{fontSize:'clamp(28px, 3vw, 44px)', color:'var(--orange)', whiteSpace:'nowrap'}}>★</span>,
        ])}
      </Marquee>
    </section>
  );
};
const FinalCTA = () => (
  <section id="final-cta" data-screen-label="15 Final CTA" aria-label="Stop scrolling. Start touring." style={{position:'relative', minHeight:'90vh', overflow:'hidden'}}>
    <div style={{position:'absolute', inset:0}}>
      <img src={IMG.tourFire} alt="" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', filter:'contrast(1.05) brightness(0.85)'}}/>
      <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.35) 45%, rgba(10,10,10,0.95) 100%)'}}/>
      <div style={{position:'absolute', top:0, left:0, right:0, height:120, background:'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)'}}/>
      <div style={{position:'absolute', inset:0, opacity:0.14, mixBlendMode:'overlay', backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")", backgroundSize:'220px 220px'}}/>
    </div>

    <div className="container" style={{position:'relative', zIndex:3, minHeight:'90vh', display:'flex', flexDirection:'column', justifyContent:'space-between', paddingTop:80, paddingBottom:60}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
        <div className="meta-strong" style={{display:'flex', alignItems:'center', gap:10}}>
          <span style={{width:6, height:6, background:'var(--orange)', borderRadius:'50%', boxShadow:'0 0 8px var(--orange)'}}/>
          ENROLLMENT OPEN
        </div>
        <div className="meta">JOIN ANY MONDAY</div>
      </div>

      <div style={{textAlign:'left', maxWidth:1500}}>
        {/* Headline — verbatim from MD */}
        <h2 className="display" style={{fontSize:'clamp(96px, 16vw, 280px)', lineHeight:0.84, letterSpacing:'-0.02em', textTransform:'lowercase'}}>
          stop scrolling.<br/>
          <span style={{color:'var(--orange)'}}>start touring.</span>
        </h2>
        {/* Body copy — MD verbatim */}
        <p className="archivo" style={{fontSize:'clamp(20px, 1.7vw, 26px)', lineHeight:1.5, color:'var(--bone)', maxWidth:680, marginTop:40, fontWeight:500}}>
          Every week you wait is another week your competition gets better. Join.
        </p>
        {/* Orange rule + microcopy */}
        <div style={{display:'flex', alignItems:'center', gap:16, marginTop:40, flexWrap:'wrap'}}>
          <span style={{width:80, height:2, background:'var(--orange)', display:'inline-block'}}/>
          <span className="meta-strong" style={{color:'var(--bone)', fontSize:11}}>$697 USD · OR 12 × $69/WEEK · NO HIDDEN COSTS</span>
        </div>
        <div style={{marginTop:40}}>
          <a href="https://www.skool.com/oso-academy" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{padding:'24px 36px', fontSize:16, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:12}}>
            JOIN NOW <Arrow size={18}/>
          </a>
        </div>
      </div>

      <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', borderTop:'1px solid rgba(237,232,223,0.3)', paddingTop:18}}>
        <div className="meta">OSO ACADEMY · EST 2023 · GOLD COAST AU</div>
        <div className="meta">12 WEEKS · 4–6 HRS / WEEK</div>
      </div>
    </div>
  </section>
);
/* =========================================================
   FOOTER — uses real logo
========================================================= */
const Footer = () => (
  <footer aria-label="Site footer" style={{background:'var(--bg)', borderTop:'1px solid var(--line-strong)', padding:'80px 0 40px', position:'relative', overflow:'hidden'}}>
    {/* subtle big logo background */}
    <div aria-hidden="true" style={{position:'absolute', right:-80, top:-40, opacity:0.04, pointerEvents:'none'}}>
      <img src={IMG.logo} alt="" style={{height:380, width:'auto', display:'block', filter:'brightness(2)'}}/>
    </div>
    <div className="container" style={{position:'relative'}}>
      {/* Main row: brand block · nav · price label */}
      <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', gap:60, marginBottom:60, alignItems:'flex-start'}}>
        {/* Brand */}
        <div>
          <img src={IMG.logo} alt="OSO Academy" style={{height:40, width:'auto', display:'block', marginBottom:20}}/>
          <div className="meta-strong" style={{color:'var(--bone-dim)', marginBottom:14, fontSize:11}}>OSO ACADEMY · EST 2023 · GOLD COAST AU</div>
          <p className="archivo" style={{fontSize:14, color:'var(--bone-dim)', maxWidth:340, lineHeight:1.55}}>
            A 5-phase touring DJ system. 12-week live workshop cycle. Built by a working DJ for serious DJs.
          </p>
        </div>
        {/* Nav — MD set: CURRICULUM · PRICING · TESTIMONIALS · FAQ */}
        <div>
          <div className="meta" style={{marginBottom:14, color:'var(--bone-dim)'}}>NAVIGATE</div>
          <div style={{display:'flex', flexDirection:'column', gap:8}}>
            {[
              {l:'CURRICULUM', h:'#curriculum'},
              {l:'PRICING', h:'#pricing'},
              {l:'TESTIMONIALS', h:'#proof'},
              {l:'FAQ', h:'#faq'},
            ].map(n => (
              <a key={n.l} href={n.h} className="meta-strong" style={{fontSize:12, color:'var(--bone)', textDecoration:'none', padding:'4px 0', transition:'color .15s'}}
                 onMouseOver={e=>e.currentTarget.style.color='var(--orange)'}
                 onMouseOut={e=>e.currentTarget.style.color='var(--bone)'}>{n.l}</a>
            ))}
          </div>
        </div>
        {/* Price label + CTA */}
        <div style={{textAlign:'left'}}>
          <div className="meta" style={{marginBottom:14, color:'var(--bone-dim)'}}>JOIN</div>
          <div className="meta-strong" style={{color:'var(--bone)', fontSize:12, marginBottom:18, lineHeight:1.5}}>
            $697 · $69/WK · JOIN ANY MONDAY
          </div>
          <a href="https://www.skool.com/oso-academy" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{padding:'14px 22px', fontSize:12, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:10}}>
            JOIN NOW <Arrow size={12}/>
          </a>
        </div>
      </div>
      {/* Copyright / legal — MD verbatim */}
      <div style={{borderTop:'1px solid var(--line-strong)', paddingTop:24, display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:16}}>
        <div className="meta" style={{color:'var(--bone-dim)'}}>© OSO ACADEMY 2026 · ONE SEVEN GROUP INVESTMENTS PTY LTD · ABN 59 957 631 268</div>
        <div className="meta" style={{color:'var(--bone-dim)'}}>GOLD COAST, AU</div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Creator, ForNotFor, Pricing, FAQ, Ticker, FinalCTA, Footer });
