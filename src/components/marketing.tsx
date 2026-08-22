import Image from "next/image";
import { faqs, features, navigation, principles, product } from "@/lib/config";

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>;
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label={`${product.name} home`}>
      <span className="logo-mark" aria-hidden="true"><i /><i /></span>
      <span>{product.name}</span>
    </a>
  );
}

export function Navbar() {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="nav-cta" href={product.whopUrl} target="_blank" rel="noreferrer">Get access <ArrowUpRight /></a>
      </div>
    </header>
  );
}

const chartScreenshots = [
  {
    src: "/images/tradingview/Screenshot 2026-08-21 120350.png",
    title: "Market context at a glance",
    description: "See the dashboard and chart working together inside the TradingView workflow.",
    size: "wide",
  },
  {
    src: "/images/tradingview/Screenshot 2026-08-20 171823.png",
    title: "Read the move",
    description: "Use price structure and momentum as additional context for your own analysis.",
    size: "standard",
  },
  {
    src: "/images/tradingview/Screenshot 2026-08-21 120334.png",
    title: "Keep the chart clean",
    description: "A focused view designed to add useful information without adding noise.",
    size: "standard",
  },
] as const;

function ChartPreview() {
  return (
    <div className="chart-frame" aria-label="Illustrated Aurum Edge interface preview">
      <div className="chart-topbar">
        <div className="chart-symbol"><span className="symbol-dot" /> XAUUSD <span className="muted">·</span> 15m</div>
        <div className="chart-actions"><span /><span /><span /></div>
      </div>
      <div className="chart-body">
        <div className="chart-sidebar">
          <span className="sidebar-active" /><span /><span /><span /><span />
        </div>
        <div className="chart-canvas">
          <div className="chart-labels"><span>2,652.40</span><span>2,648.00</span><span>2,643.60</span><span>2,639.20</span><span>2,634.80</span></div>
          <div className="grid-lines" />
          <svg className="trend-svg" viewBox="0 0 680 330" preserveAspectRatio="none" aria-hidden="true">
            <defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#d8b56a" stopOpacity=".18" /><stop offset="1" stopColor="#d8b56a" stopOpacity="0" /></linearGradient></defs>
            <path d="M0,259 C38,245 38,267 67,236 S111,250 143,206 S182,219 209,188 S246,192 273,145 S310,171 345,125 S377,143 408,100 S443,118 473,76 S510,99 538,53 S577,83 611,47 S648,53 680,24 L680,330 L0,330Z" fill="url(#area)" />
            <path d="M0,259 C38,245 38,267 67,236 S111,250 143,206 S182,219 209,188 S246,192 273,145 S310,171 345,125 S377,143 408,100 S443,118 473,76 S510,99 538,53 S577,83 611,47 S648,53 680,24" fill="none" stroke="#e5bd6d" strokeWidth="2.5" />
            <path d="M0,278 C105,270 147,252 228,229 S357,172 447,141 S578,108 680,83" fill="none" stroke="#718098" strokeDasharray="7 8" strokeWidth="1.5" opacity=".7" />
            <circle cx="539" cy="53" r="5" fill="#e5bd6d" stroke="#f8e4b4" strokeWidth="2" />
          </svg>
          <div className="candle-row"><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
          <div className="setup-tag buy">BUY SETUP <b>2,648.20</b></div>
          <div className="setup-tag sell">EXHAUSTION <b>2,651.80</b></div>
          <div className="time-labels"><span>08:00</span><span>10:00</span><span>12:00</span><span>14:00</span><span>16:00</span></div>
        </div>
        <aside className="dashboard">
          <div className="dashboard-title">AURUM EDGE <span>● LIVE VIEW</span></div>
          <div className="regime-box"><small>MARKET REGIME</small><strong><em /> Bullish</strong><span>Trend is holding</span></div>
          <div className="metric"><div><small>MOMENTUM</small><strong>Building <span className="positive">+14.8</span></strong></div><div className="meter"><i /></div></div>
          <div className="metric"><div><small>SESSION</small><strong>New York</strong></div><span className="session-status">ACTIVE</span></div>
          <div className="metric"><div><small>EXHAUSTION</small><strong>Low pressure</strong></div><span className="neutral">—</span></div>
        </aside>
      </div>
      <div className="preview-note"><span className="preview-dot" /> Interface preview — final charts coming soon</div>
    </div>
  );
}

function ChartScreenshots() {
  return (
    <div className="chart-screenshots">
      <div className="screenshots-heading">
        <div>
          <span className="screenshots-kicker">Interface examples</span>
          <h3>See the tool in its natural environment.</h3>
        </div>
        <p>Real chart views from the current development build. These examples show workflow and context, not trading performance.</p>
      </div>
      <div className="screenshot-grid">
        {chartScreenshots.map((screenshot, index) => (
          <figure className={`screenshot-card ${screenshot.size}`} key={screenshot.src}>
            <div className="screenshot-image">
              <Image src={screenshot.src} alt={screenshot.title} fill sizes={index === 0 ? "(max-width: 800px) 100vw, 70vw" : "(max-width: 800px) 100vw, 35vw"} />
              <span className="screenshot-index">0{index + 1}</span>
            </div>
            <figcaption><strong>{screenshot.title}</strong><span>{screenshot.description}</span></figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero section-wrap" id="top">
      <div className="eyebrow"><span className="eyebrow-line" /> Trading context, without the noise.</div>
      <h1>Read the market.<br /><span>Not the noise.</span></h1>
      <p className="hero-copy">A TradingView analysis tool built to help XAUUSD traders understand momentum, market regime, exhaustion and potential scalp setups directly on the chart.</p>
      <div className="hero-actions"><a className="button button-primary" href="#product">View the tool <ArrowUpRight /></a><a className="button button-quiet" href="#how-it-works">See how it works <span className="play">›</span></a></div>
      <div className="hero-meta"><span><i /> Currently in private testing</span><span>Designed for XAUUSD</span><span>TradingView required</span></div>
      <ChartPreview />
    </section>
  );
}

export function ProductSections() {
  return <>
    <section className="section-wrap intro-section" id="product">
      <div className="section-kicker">01 / Product philosophy</div>
      <div className="two-col"><h2>One clear view of<br /><span>what is happening.</span></h2><p>Markets are complex enough without forcing you to stack five separate indicators across your screen. Aurum Edge is being developed to bring several pieces of market context into one considered interface — so you can spend less time decoding your chart and more time making your own informed decisions.</p></div>
      <div className="principle-grid">{principles.map((item) => <article className={`principle-card ${item.tone}`} key={item.number}><span className="card-number">{item.number}</span><div className="principle-icon">{item.number === "01" ? "◒" : item.number === "02" ? "⌁" : item.number === "03" ? "◌" : "◫"}</div><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
    </section>
    <section className="section-wrap how-section" id="how-it-works"><div className="section-kicker">02 / How it works</div><div className="two-col"><h2>A calmer workflow<br /><span>inside TradingView.</span></h2><p>You already know your charting platform. Aurum Edge is designed to fit into that workflow, giving you extra context without asking you to leave the chart or follow someone else&apos;s calls.</p></div><div className="steps">{[["01", "Add it to TradingView", "Access is provided to the TradingView indicator after purchase."], ["02", "Open your XAUUSD chart", "Use the tool directly inside your normal TradingView workflow."], ["03", "Analyse the setup", "Use regime, momentum, exhaustion and setup information as additional context for your own decisions."]].map(([number, title, description]) => <article className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div><p className="platform-note"><span>i</span> TradingView is required and is a separate service.</p><ChartScreenshots /></section>
    <section className="gold-section" id="gold"><div className="gold-orb orb-one" /><div className="gold-orb orb-two" /><div className="section-wrap gold-inner"><div className="section-kicker">03 / Built for Gold</div><div className="gold-copy"><h2>Focused on the<br /><span>metal that moves.</span></h2><p>Instead of trying to be another indicator for every asset on TradingView, Aurum Edge is being developed and tested around the behaviour of Gold.</p><div className="tag-row"><span>XAUUSD</span><span>Scalping</span><span>Intraday</span><span>TradingView</span></div></div><div className="quote-mark">“</div><p className="gold-quote">A focused tool for traders who want more context, not more clutter.</p></div></section>
    <section className="section-wrap feature-section" id="features"><div className="section-kicker">04 / The toolkit</div><div className="feature-heading"><h2>Signal less.<br /><span>Understand more.</span></h2><p>Purposeful features for reading the chart. Nothing designed to make a promise it cannot keep.</p></div><div className="feature-grid">{features.map(([title, description], index) => <article className="feature-item" key={title}><span className="feature-icon">{["↗", "◒", "⌁", "◌", "◫", "⊞", "◉", "＋"][index]}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="transparency-section"><div className="section-wrap transparency-inner"><div className="transparency-badge"><span className="status-pulse" /> Current status <strong>Private testing</strong></div><div><div className="section-kicker">05 / Development transparency</div><h2>Built in the open.<br /><span>Tested before hype.</span></h2><p>Aurum Edge is currently undergoing active real-market testing. Features and logic are being refined using live chart behaviour before wider release. We are prioritising reliability and useful market context before promoting it heavily.</p></div></div></section>
  </>;
}

export function AccessAndFooter() {
  return <><section className="section-wrap access-section" id="access"><div className="section-kicker">06 / Early access</div><div className="access-grid"><div><h2>Get closer to<br /><span>the chart.</span></h2><p>Join the early access list for launch updates and first access to Aurum Edge.</p></div><div className="pricing-card"><div className="pricing-top"><span>Lifetime Access</span><span className="price-label">ONE-TIME PAYMENT</span></div><div className="price">$100 <span>USD</span></div><ul><li>Aurum Edge TradingView indicator access</li><li>Future updates to this version</li><li>Setup instructions</li><li>Support</li></ul><a className="button button-primary full-button" href={product.whopUrl} target="_blank" rel="noreferrer">Get lifetime access <ArrowUpRight /></a><p className="delivery-note">TradingView username required. Indicator access is manually activated on your TradingView account after purchase.</p></div></div></section><section className="faq-section" id="faq"><div className="section-wrap"><div className="section-kicker">07 / Questions</div><div className="faq-grid"><h2>Worth asking.</h2><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></div></section><footer className="site-footer"><div className="section-wrap"><div className="footer-top"><Logo /><p>Market context for a clearer chart. <a className="social-link" href="https://x.com/poweroverthink" target="_blank" rel="noreferrer">Follow me on X ↗</a></p></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {product.name}</span><nav><a href="#product">Product</a><a href="#faq">FAQ</a><a href="#risk">Risk Disclosure</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href={`mailto:${product.supportEmail}`}>Contact</a></nav></div><div className="disclaimer" id="risk"><strong>Risk disclosure</strong><p>Trading involves substantial risk and may not be suitable for everyone. Aurum Edge is an analytical software tool and does not provide financial advice, investment recommendations, managed trading, or guaranteed trading signals. Past market behaviour does not guarantee future results. Users are solely responsible for their own trading decisions.</p><p>Aurum Edge is not affiliated with or endorsed by TradingView.</p></div></div></footer></>;
}
