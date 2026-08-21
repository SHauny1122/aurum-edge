export const product = {
  name: "Aurum Edge",
  supportEmail: "support@example.com",
  whopUrl: "https://whop.com/aurum-edge-six/aurum-edge-trading-indicator",
  title: "Aurum Edge — XAUUSD TradingView Analysis Tool",
  description:
    "A TradingView analysis tool built for XAUUSD traders, combining market regime, momentum, exhaustion and setup context directly on the chart.",
} as const;

export const navigation = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
] as const;

export const principles = [
  {
    number: "01",
    title: "Market Regime",
    description:
      "Identify whether current price conditions favour bullish, bearish or neutral behaviour before narrowing in on a setup.",
    tone: "gold",
  },
  {
    number: "02",
    title: "Momentum Context",
    description:
      "See whether momentum is strengthening, weakening or becoming stretched across the move you are analysing.",
    tone: "blue",
  },
  {
    number: "03",
    title: "Exhaustion Awareness",
    description:
      "Bring attention to extended moves that may be losing strength, without treating exhaustion as a guaranteed reversal.",
    tone: "violet",
  },
  {
    number: "04",
    title: "Session Awareness",
    description:
      "Keep market-session context visible while analysing how Gold is behaving throughout the trading week.",
    tone: "green",
  },
] as const;

export const features = [
  ["Setup indications", "Buy and sell outputs framed as areas for review, never commands to trade."],
  ["Trend context", "A clearer read on the broader direction behind the candles on your chart."],
  ["Momentum analysis", "A compact view of whether current momentum is building or fading."],
  ["Exhaustion detection", "Visual awareness for moves that may be becoming extended."],
  ["Session awareness", "A visible reminder of the market session around your analysis."],
  ["On-chart dashboard", "The information you need, organised without covering the chart in noise."],
  ["TradingView alerts", "Optional alerts to help you stay aware of conditions you define."],
  ["Ongoing improvements", "An actively refined product shaped by real chart behaviour and feedback."],
] as const;

export const faqs = [
  ["How do I receive Aurum Edge?", "During checkout you will be asked for your TradingView username. After your purchase is confirmed, access will be granted directly to that TradingView account. Once activated, Aurum Edge will appear under your Invite-Only Scripts in TradingView."],
  ["Will I receive the Pine Script source code?", "No. Aurum Edge is provided through TradingView's invite-only indicator system. Customers receive access to use the indicator, while the underlying source code remains private."],
  ["Is this a subscription?", "No. The current Aurum Edge offer is a one-time $49 purchase for lifetime access to this version and its updates."],
  ["Do I need TradingView?", "Yes. Aurum Edge runs inside TradingView. TradingView is a separate third-party service."],
  ["Is this a signal service?", "No. Aurum Edge is analytical software designed to provide additional market context. It does not manage trades and does not guarantee profitable outcomes."],
] as const;
