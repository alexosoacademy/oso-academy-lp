/* OSO primitives — asterisk mark, marquee, arrows, plus */
const { useState, useEffect, useRef } = React;

// OSO asterisk mark — slightly off-square sparkle
const Asterisk = ({size=20, color="currentColor", style}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style} aria-hidden="true">
    <path d="M12 2 L12 22 M2 12 L22 12 M4.5 4.5 L19.5 19.5 M19.5 4.5 L4.5 19.5"
          stroke={color} strokeWidth="1.6" strokeLinecap="square"/>
  </svg>
);

// thicker brand mark for header
const OsoMark = ({size=28, color="currentColor"}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M16 2 L16 30 M2 16 L30 16 M5.8 5.8 L26.2 26.2 M26.2 5.8 L5.8 26.2"
          stroke={color} strokeWidth="2.2" strokeLinecap="square"/>
  </svg>
);

const Arrow = ({size=14, color="currentColor"}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 8 H13 M9 4 L13 8 L9 12" stroke={color} strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter"/>
  </svg>
);

const ArrowDown = ({size=14, color="currentColor"}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 2 V13 M4 9 L8 13 L12 9" stroke={color} strokeWidth="1.6" strokeLinecap="square"/>
  </svg>
);

const Plus = ({size=12, color="currentColor"}) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M6 1 V11 M1 6 H11" stroke={color} strokeWidth="1.4"/>
  </svg>
);

// Section header with index number, label, and divider
const SectionMeta = ({ idx, label, right }) => (
  <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', borderTop:'1px solid var(--line-strong)', padding:'18px 0 0'}}>
    <div style={{display:'flex', alignItems:'baseline', gap:18}}>
      <span className="mono" style={{fontSize:11, letterSpacing:'0.1em', color:'var(--bone-dim)'}}>{idx}</span>
      <span className="meta-strong">{label}</span>
    </div>
    {right && <div className="meta">{right}</div>}
  </div>
);

// Marquee — duplicates children inline so loop is seamless
const Marquee = ({ children, className="", speed=40, gap=64, style }) => {
  const items = React.Children.toArray(children);
  return (
    <div className={"marquee "+className} style={{overflow:'hidden', width:'100%', ...style}}>
      <div className="marquee-track" style={{ animationDuration: speed+'s'}}>
        {[0,1].map(k => (
          <div key={k} style={{display:'flex', alignItems:'center', gap, paddingRight:gap, flexShrink:0}}>
            {items.map((c,i)=> <React.Fragment key={i}>{c}</React.Fragment>)}
          </div>
        ))}
      </div>
    </div>
  );
};

// Halftone overlay using radial-gradient dots — for adding texture to image blocks
const Halftone = ({ size=4, opacity=0.45, color="#000" }) => (
  <div style={{
    position:'absolute', inset:0, pointerEvents:'none',
    backgroundImage:`radial-gradient(${color} ${size*0.45}px, transparent ${size*0.55}px)`,
    backgroundSize:`${size}px ${size}px`,
    opacity, mixBlendMode:'multiply'
  }}/>
);

// Image with editorial overlays: scanline, noise, optional duotone
const EditorialImg = ({ src, alt="", duotone=false, halftone=false, scanlines=false, style, className="" }) => (
  <div style={{position:'relative', overflow:'hidden', background:'#0A0A0A', ...style}} className={className}>
    <img src={src} alt={alt} loading="lazy" style={{
      width:'100%', height:'100%', objectFit:'cover', display:'block',
      filter: duotone ? 'grayscale(1) contrast(1.15) brightness(0.78)' : 'contrast(1.05)',
    }}/>
    {duotone && <div style={{position:'absolute', inset:0, background:'rgba(243,112,33,0.42)', mixBlendMode:'multiply'}}/>}
    {duotone && <div style={{position:'absolute', inset:0, background:'rgba(10,10,10,0.32)', mixBlendMode:'multiply'}}/>}
    {halftone && <Halftone size={3.5} opacity={0.5} />}
    {scanlines && (
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:'repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0 1px, transparent 1px 3px)'
      }}/>
    )}
  </div>
);

// Ticket-strip style metadata block — like the Ego Lab footer
const TicketMeta = ({ items, style }) => (
  <div style={{display:'grid', gridTemplateColumns:`repeat(${items.length}, 1fr)`, gap:24, ...style}}>
    {items.map((it,i)=>(
      <div key={i}>
        <div className="meta" style={{marginBottom:6}}>{it.label}</div>
        <div className="meta-strong" style={{fontSize:12}}>{it.value}</div>
      </div>
    ))}
  </div>
);

Object.assign(window, { Asterisk, OsoMark, Arrow, ArrowDown, Plus, SectionMeta, Marquee, Halftone, EditorialImg, TicketMeta });
