export const product = {
  name: "Aurum Edge",
  supportEmail: "support@example.com",
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
  ["Is this a trading signal service?", "No. Aurum Edge is chart-analysis software designed to provide additional market context. It does not manage trades or guarantee outcomes."],
  ["Do I need TradingView?", "Yes. The indicator runs on TradingView, which is a separate third-party platform."],
  ["Is it only for Gold?", "The current development and testing focus is XAUUSD. We would rather optimise for one market properly before claiming broad market support."],
  ["Is access a subscription?", "The planned offer is a one-time purchase for access to this version of the indicator and its updates."],
  ["Does it guarantee profitable trades?", "No. No indicator can guarantee profitable trades. Trading involves risk and users remain responsible for their own trading decisions."],
] as const;
