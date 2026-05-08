/* OSO App — assembles all sections + tweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#F37021",
  "headlineStyle": "bold",
  "showGrain": true,
  "showScanlines": true,
  "heroVariant": "duotone"
}/*EDITMODE-END*/;

const App = () => {
  const hasTweaks = typeof useTweaks === 'function';
  const [tweaks, setTweak] = hasTweaks ? useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, ()=>{}];

  // apply accent live
  React.useEffect(()=>{
    document.documentElement.style.setProperty('--orange', tweaks.accent);
  }, [tweaks.accent]);

  React.useEffect(()=>{
    document.body.style.setProperty('--show-grain', tweaks.showGrain ? '1' : '0');
    if (!tweaks.showGrain) {
      document.body.classList.add('no-grain');
    } else {
      document.body.classList.remove('no-grain');
    }
  }, [tweaks.showGrain]);

  return (
    <>
      <Nav/>
      <Hero/>
      <Pillars/>
      <ProofStrip/>
      <VideoSection/>
      <Problem/>
      <Positioning/>
      <SystemFlow/>
      <Modules/>
      <Proof/>
      <HowItWorks/>
      <Creator/>
      <ForNotFor/>
      <Pricing/>
      <FAQ/>
      <FinalCTA/>
      <Ticker/>
      <Footer/>

      {typeof TweaksPanel !== 'undefined' && (
        <TweaksPanel title="OSO TWEAKS">
          <TweakSection title="Accent">
            <TweakColor label="Orange accent" value={tweaks.accent} onChange={v=>setTweak('accent', v)} />
            <TweakRadio label="Headline weight" value={tweaks.headlineStyle}
              options={[{value:'bold',label:'Bold'},{value:'italic',label:'Italic'}]}
              onChange={v=>setTweak('headlineStyle', v)} />
          </TweakSection>
          <TweakSection title="Texture">
            <TweakToggle label="Grain overlay" value={tweaks.showGrain} onChange={v=>setTweak('showGrain', v)} />
            <TweakToggle label="Scanlines on imagery" value={tweaks.showScanlines} onChange={v=>setTweak('showScanlines', v)} />
            <TweakRadio label="Hero treatment" value={tweaks.heroVariant}
              options={[{value:'duotone',label:'Duotone'},{value:'mono',label:'Mono'},{value:'color',label:'Color'}]}
              onChange={v=>setTweak('heroVariant', v)} />
          </TweakSection>
        </TweaksPanel>
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
