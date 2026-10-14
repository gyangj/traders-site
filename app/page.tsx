const distribution = [0,1,2,3,4,5,6,7,8,9];

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat-chip">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="phone-frame">
        <div className="window-bar">
          <div className="window-actions">
            <span className="dot dot--left" />
            <span className="dot dot--middle" />
          </div>
          <div className="window-title">
            <span className="title-pill" />
          </div>
          <div className="window-close">×</div>
        </div>

        <header className="app-topbar">
          <div className="brand-inline">
            <div className="home-icon">⌂</div>
            <div className="site-badge">digitpilot.site/app/</div>
          </div>
          <div className="plus-icon">＋</div>
          <div className="notif-box">17</div>
          <div className="ellipsis">⋮</div>
        </header>

        <section className="device-ui">
          <div className="title-row">
            <h1>DigitPilot</h1>
            <button className="menu-button" aria-label="Menu">
              <span />
              <span />
              <span />
            </button>
          </div>

          <div className="stack-block">
            <label className="field-label">ANALYSIS MODE</label>
            <div className="select-box">
              <span>All Volatility Markets</span>
              <span className="chevron">⌄</span>
            </div>
          </div>

          <div className="stack-block">
            <label className="field-label">DATA POINTS</label>
            <div className="select-box">
              <span>50 Ticks</span>
              <span className="chevron">⌄</span>
            </div>
          </div>

          <div className="signal-panel">
            <div className="panel-header">
              <div className="signal-dot" />
              <span>MATCHES SIGNALS</span>
            </div>
            <div className="timer-badge">11s</div>
            <div className="signal-core">
              <div className="signal-number">8</div>
              <div className="signal-copy">
                <strong>Hot Markets:</strong>
                <span>1s Volatility 100</span>
              </div>
            </div>
          </div>
        </section>

        <div className="status-bar">
          <span className="status-icon" />
          Connected to Deriv API • Real-time Analysis
        </div>
      </div>

      <div className="traders-card">
        <div className="top-time-row">
          <div className="time">4:50</div>
          <div className="lte-pill">
            <span className="lte-bars"><i /><i /><i /></span>
            LTE <span className="pct">80</span>
          </div>
        </div>

        <div className="traders-header">
          <div>
            <h2>Traders</h2>
            <p>Powered by Brightex</p>
          </div>
          <div className="home-link">← Home</div>
        </div>

        <div className="mini-dashboard">
          <div className="section-title">ANALYSIS MODE</div>
          <div className="select-box large">
            <span>All Volatility Markets</span>
            <span className="chevron">⌃</span>
          </div>

          <div className="section-title">DATA POINTS</div>
          <div className="select-box large">
            <span>50 Ticks</span>
            <span className="chevron">⌃</span>
          </div>

          <div className="panel-header panel-header--compact">
            <div className="signal-dot signal-dot--purple" />
            <span>MATCHES SIGNALS</span>
            <div className="timer-badge timer-badge--soft">6s</div>
          </div>

          <div className="alert-box">
            Could not reach the Deriv API. Check your connection and reload.
          </div>

          <div className="panel-header panel-header--compact panel-header--space">
            <div className="signal-dot signal-dot--purple" />
            <span>DIGIT DISTRIBUTION</span>
            <div className="distribution-tag">Volatility 10</div>
          </div>

          <div className="distribution-grid">
            {distribution.map((value) => (
              <div key={value} className="digit-box">
                <div className="digit-box__value">{value}</div>
                <div className="digit-box__percent">0%</div>
              </div>
            ))}
          </div>

          <div className="legend-row">
            <span>Green: most frequent</span>
            <span>Red: least frequent</span>
          </div>

          <div className="bottom-toolbar">
            <button className="nav-arrow">‹</button>
            <div className="toolbar-middle">
              <span className="toolbar-icon">▣</span>
              <span className="toolbar-title">pilot-xi.vercel.app</span>
              <span className="refresh">↻</span>
            </div>
            <button className="nav-more">⋯</button>
          </div>
        </div>
      </div>

      <div className="split-layout">
        <div className="split-card split-card--left">
          <div className="upper-strip">
            <div className="brand-mini">◫</div>
            <div className="domain-pill">digitpilot.site/app/</div>
            <div className="plus-compact">＋</div>
            <div className="counter-bubble">17</div>
            <div className="kebab">⋮</div>
          </div>

          <div className="split-body">
            <div className="split-header">
              <div className="app-mark">◫</div>
              <h3>DigitPilot</h3>
              <button className="menu-button menu-button--solid" aria-label="Menu">
                <span />
                <span />
                <span />
              </button>
            </div>

            <div className="stack-block stack-block--tight">
              <label className="field-label">TRADE TYPE</label>
              <div className="trade-row selected">
                <div className="trade-bullet trade-bullet--even" />
                <span>Even/Odd</span>
                <span className="chevron">⌄</span>
              </div>
              <div className="trade-row">
                <div className="trade-bullet trade-bullet--match" />
                <span>Matches</span>
                <span className="chevron">⌄</span>
              </div>
              <div className="trade-row">
                <div className="trade-bullet trade-bullet--over" />
                <span>Over/Under</span>
                <span className="chevron">⌄</span>
              </div>
            </div>
          </div>
        </div>

        <div className="split-card split-card--right">
          <div className="live-badge">LIVE</div>
          <div className="graph-box" />
        </div>
      </div>
    </main>
  );
}
