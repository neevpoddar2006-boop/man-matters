import { useState, type FormEvent } from 'react'
import { Seo } from '@/components/Seo'

const concerns = ['Hair fall', 'Thinning hair', 'Receding hairline', 'Dandruff', 'Other scalp concern']
const milestones = [1, 30, 60, 90, 100, 120, 150]

function Arrow() { return <span aria-hidden="true">↗</span> }

export default function Home() {
  const [selected, setSelected] = useState('Hair fall')
  const [day, setDay] = useState(30)
  const [submitted, setSubmitted] = useState(false)
  const [photo, setPhoto] = useState('')
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true) }

  return <>
    <Seo title="Man Matters | Hair growth, backed by science" description="Understand the science behind Minoxidil and get support for every step of your hair growth journey." />
    <section className="mm-hero" id="home">
      <div className="mm-hero-copy">
        <div className="mm-eyebrow"><span className="mm-dot" /> YOUR HAIR, UNDERSTOOD</div>
        <h1>Hair growth is<br />a <em>journey.</em><br />Let science lead.</h1>
        <p>Meet Minoxidil: one of the most studied ingredients for pattern hair loss. Know what it can do, what it takes, and what to expect.</p>
        <div className="mm-actions"><a className="mm-button mm-button-dark" href="#science">Understand the science <Arrow /></a><a href="#care" className="mm-text-link">Explore Man Matters Care <span>↓</span></a></div>
        <div className="mm-proof"><div className="mm-proof-icon">✳</div><span><b>Evidence-led care</b><small>Clear guidance at every stage</small></span><i>·</i><span><b>Made for your journey</b><small>Progress takes patience</small></span></div>
      </div>
      <div className="mm-hero-visual">
        <div className="mm-visual-backdrop" />
        <div className="mm-orbit orbit-one" /><div className="mm-orbit orbit-two" />
        <div className="mm-bottle"><div className="mm-bottle-cap"/><div className="mm-bottle-label"><b>MAN<br/>MATTERS</b><span>HAIR REGROWTH<br/>SOLUTION</span><strong>MINOXIDIL<br/><small>5% w/v</small></strong><i>SCIENTIFICALLY STUDIED</i></div></div>
        <div className="mm-callout callout-top"><span>01 / ACTIVE INGREDIENT</span><b>Minoxidil 5%</b></div>
        <div className="mm-callout callout-bottom"><span>CONSISTENCY IS KEY</span><b>Your routine, supported.</b></div>
        <div className="mm-vertical">A MORE INFORMED WAY TO GROW</div>
      </div>
      <div className="mm-hero-foot"><span>01 — THE SCIENCE OF HAIR GROWTH</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="mm-stats"><div><strong>01</strong><span>Understand<br/>the ingredient</span></div><div><strong>02</strong><span>Build a routine<br/>that works for you</span></div><div><strong>03</strong><span>Track progress<br/>over time</span></div><div className="mm-stats-note">A thoughtful approach to<br/><b>every stage of your journey.</b></div></section>

    <section className="mm-science" id="science">
      <div className="mm-section-head"><div><div className="mm-eyebrow">THE SCIENCE, SIMPLIFIED</div><h2>Small molecules.<br/><em>Long-term thinking.</em></h2></div><p>Hair growth takes time. Understanding how Minoxidil works can help you set realistic expectations and make informed choices.</p></div>
      <div className="mm-science-grid">
        <div className="mm-follicle-card"><div className="mm-card-top"><span>HOW MINOXIDIL WORKS</span><span>01 — 03</span></div><div className="mm-follicle-art"><div className="mm-scalp"/><div className="mm-hair"/><div className="mm-root"><i/><i/><i/><b/></div><div className="mm-particle p1">✦</div><div className="mm-particle p2">✦</div><div className="mm-particle p3">✦</div><div className="mm-label l1">Hair shaft</div><div className="mm-label l2">Follicle</div><div className="mm-label l3">Scalp</div></div><div className="mm-card-caption"><b>A closer look at the follicle</b><span>Illustrative diagram · not to scale</span></div></div>
        <div className="mm-steps"><article><span>01</span><div><h3>Supports the growth phase</h3><p>Topical Minoxidil is thought to help prolong the anagen, or active growth, phase of the hair cycle.</p></div></article><article><span>02</span><div><h3>Works where you apply it</h3><p>Applied to the scalp as directed, it supports follicles in areas affected by pattern hair loss.</p></div></article><article><span>03</span><div><h3>Consistency matters</h3><p>Results take time and continued use. Individual response varies, and stopping may reverse benefits.</p></div></article><a className="mm-text-link" href="#care">See what a realistic timeline looks like <Arrow /></a></div>
      </div>
      <div className="mm-notice"><span>ⓘ</span><p><b>A note on expectations</b> — Visible changes may take several months. Minoxidil is not suitable for everyone and can cause side effects. Follow product directions and speak with a qualified healthcare professional before starting, especially if you have a medical condition.</p><a href="#doctor">Safety & guidance <Arrow /></a></div>
    </section>

    <section className="mm-timeline" id="journey"><div className="mm-timeline-copy"><div className="mm-eyebrow">PROGRESS, NOT PERFECTION</div><h2>Give it time.<br/><em>See the journey.</em></h2><p>Hair grows in cycles. Changes can be gradual and different for everyone. Use the timeline to explore common milestones—not guarantees.</p><a className="mm-button mm-button-cream" href="#care">Start tracking your journey <Arrow /></a></div><div className="mm-timeline-panel"><div className="mm-panel-label">A TYPICAL JOURNEY <span>INDIVIDUAL RESULTS VARY</span></div><div className="mm-day-display"><b>Day {day}</b><span>{day < 60 ? 'Building your routine' : day < 100 ? 'Staying consistent' : 'Reviewing your progress'}</span></div><input aria-label="Explore journey day" type="range" min="1" max="150" value={day} onChange={e => setDay(Number(e.target.value))}/><div className="mm-milestones">{milestones.map(n=><button key={n} onClick={()=>setDay(n)} className={day===n?'active':''}>Day {n}</button>)}</div><div className="mm-track"><span style={{width:`${(day/150)*100}%`}}/><i style={{left:`${(day/150)*100}%`}}/></div><div className="mm-timeline-foot"><span>START</span><span>150 DAYS</span></div><div className="mm-journal"><span className="mm-journal-icon">✎</span><div><b>Your progress is personal.</b><small>Log photos and notes to spot changes over time.</small></div><a href="#care">Open journal →</a></div></div></section>

    <section className="mm-care" id="care"><div className="mm-care-head"><div><div className="mm-eyebrow">A PARTNER IN YOUR PROGRESS</div><h2>Introducing<br/><em>Man Matters Care.</em></h2></div><p>Your hair growth journey doesn’t end with a purchase. We’re with you every step of the way—with tools to track your progress and people to help you find your next step.</p></div>
      <div className="mm-care-grid"><div className="mm-care-card care-form-card"><div className="mm-care-card-head"><span>01 / TELL US WHAT’S ON YOUR MIND</span><span>PRIVATE BY DEFAULT ↗</span></div>{submitted ? <div className="mm-success"><div>✓</div><h3>We’ve got it from here.</h3><p>Your concern has been saved. A care guide will reach out with next steps. Your information stays private.</p><button onClick={()=>setSubmitted(false)}>Add another concern</button></div> : <form onSubmit={handleSubmit}><label className="mm-field-label">What would you like support with?</label><div className="mm-chips">{concerns.map(c=><button type="button" key={c} onClick={()=>setSelected(c)} className={selected===c?'selected':''}>{c}</button>)}</div><label className="mm-field-label" htmlFor="concern">Tell us a little more <span>OPTIONAL</span></label><textarea id="concern" placeholder="Share what you've noticed, your routine, or any questions…" rows={3}/><div className="mm-form-bottom"><label className="mm-upload">＋ <span>{photo || 'Add a photo (optional)'}</span><input type="file" accept="image/*" onChange={e=>setPhoto(e.target.files?.[0]?.name || '')}/></label><label className="mm-consent"><input type="checkbox"/> Keep my information private</label></div><button className="mm-button mm-button-dark" type="submit">Request support <Arrow /></button></form>}</div>
      <div className="mm-care-card mm-doctor-card" id="doctor"><div className="mm-care-card-head"><span>02 / DOCTOR CONNECT</span><span>PROFESSIONAL GUIDANCE</span></div><div className="mm-doctor-graphic"><div className="mm-doctor-avatar">MM</div><div className="mm-doctor-lines"><i/><i/><i/></div><div className="mm-doctor-badge">✓</div></div><h3>A real person<br/>to talk it through.</h3><p>Request a callback from a qualified healthcare professional for guidance tailored to your concerns.</p><a href="#care" className="mm-text-link">Request a consultation <Arrow /></a><small>Medical advice and treatment recommendations are provided by qualified professionals.</small></div>
      <div className="mm-care-card mm-tracker-card"><div className="mm-care-card-head"><span>03 / YOUR PRIVATE PROGRESS SPACE</span><span>DAY 01 — 150</span></div><div className="mm-mini-chart"><div className="mm-chart-title"><span>YOUR JOURNEY</span><b>Day 30 <i>↗</i></b></div><div className="mm-chart-lines"><span>HAIR FALL</span><span>DENSITY</span><span>HAIRLINE</span></div><div className="mm-chart-graph"><i/><i/><i/><svg viewBox="0 0 400 100" preserveAspectRatio="none"><path d="M0 72 C40 67 48 50 88 58 S140 71 180 45 S230 58 270 36 S330 42 400 15"/></svg><span className="chart-d1">DAY 01</span><span className="chart-d30">DAY 30</span><span className="chart-d90">DAY 90</span></div></div><div className="mm-tracker-bottom"><span>📷</span><div><b>Photos, notes, milestones.</b><small>Your journey stays yours to share—or not.</small></div><a href="#journey">Explore tracker →</a></div></div></div>
    </section>

    <section className="mm-stories" id="stories"><div className="mm-stories-top"><div><div className="mm-eyebrow">REAL PEOPLE, REAL ROUTINES</div><h2>Every journey<br/><em>looks different.</em></h2></div><p>Progress isn’t always linear. These sample stories show how a private journal can help you notice the small things. <b>Illustrative examples, not clinical outcomes.</b></p></div><div className="mm-story-row"><article className="mm-story-card story-one"><span className="mm-story-index">JOURNAL 001 · SAMPLE</span><div className="mm-story-silhouette">01</div><div className="mm-story-bottom"><span>“I focused on showing up consistently.”</span><b>Arjun, 29 <small>· Tracking since Day 01</small></b></div></article><article className="mm-story-card story-two"><span className="mm-story-index">JOURNAL 002 · SAMPLE</span><div className="mm-story-silhouette">02</div><div className="mm-story-bottom"><span>“The photos helped me see gradual changes.”</span><b>Rahul, 34 <small>· Tracking since Day 01</small></b></div></article><article className="mm-share-card"><div className="mm-share-mark">✳</div><div className="mm-eyebrow">YOUR STORY, YOUR CHOICE</div><h3>When you’re ready,<br/>share what matters.</h3><p>Every update is private by default. You decide if a progress card becomes part of #MyManMattersJourney.</p><a href="#care" className="mm-text-link">How sharing works <Arrow /></a><div className="mm-hash">#MYMANMATTERSJOURNEY</div></article></div></section>

    <section className="mm-final"><div className="mm-eyebrow">YOUR NEXT CHAPTER STARTS HERE</div><h2>Know more.<br/><em>Feel supported.</em></h2><p>Start with the science. Build a routine with the right guidance. Take your journey one day at a time.</p><div className="mm-actions"><a className="mm-button mm-button-cream" href="#science">Explore hair growth science <Arrow /></a><a className="mm-final-link" href="#care">Get started with Man Matters Care →</a></div><div className="mm-final-mark">MM</div></section>
  </>
}
