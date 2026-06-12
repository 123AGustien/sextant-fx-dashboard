// Sextant FX Event Engine v7.2
// Event-driven SGD → IDR decision system

const FX_EVENTS = {
  PRE_WARNING: "PRE_WARNING_13_8",
  TRIGGER_14: "TRIGGER_14_0",
  PRESSURE_14_6: "PRESSURE_14_6",
  CRITICAL_15: "CRITICAL_15_0",
  RESET: "RESET_NORMAL"
};

const FX_STATE = {
  NORMAL: "NORMAL",
  WATCH: "WATCH_MODE",
  ACTIVE: "TRIGGER_ACTIVE",
  AGGRESSIVE: "ACCELERATE_MODE",
  EXIT: "EXIT_MODE"
};

// Detect market event based on rate
function detectFXEvent(rate) {
  if (rate >= 15000) return FX_EVENTS.CRITICAL_15;
  if (rate >= 14600) return FX_EVENTS.PRESSURE_14_6;
  if (rate >= 14000) return FX_EVENTS.TRIGGER_14;
  if (rate >= 13800) return FX_EVENTS.PRE_WARNING;
  return FX_EVENTS.RESET;
}

// Convert event → system state
function transitionState(event) {
  switch (event) {
    case FX_EVENTS.PRE_WARNING:
      return FX_STATE.WATCH;

    case FX_EVENTS.TRIGGER_14:
      return FX_STATE.ACTIVE;

    case FX_EVENTS.PRESSURE_14_6:
      return FX_STATE.AGGRESSIVE;

    case FX_EVENTS.CRITICAL_15:
      return FX_STATE.EXIT;

    default:
      return FX_STATE.NORMAL;
  }
}

// Convert state → action recommendation
function generateAction(state) {
  switch (state) {
    case FX_STATE.WATCH:
      return "Increase monitoring frequency";

    case FX_STATE.ACTIVE:
      return "Consider staged conversion (10–20%)";

    case FX_STATE.AGGRESSIVE:
      return "Accelerate conversion allocation";

    case FX_STATE.EXIT:
      return "Exit remaining exposure";

    default:
      return "Hold position";
  }
}

// MAIN ENGINE (single entry point)
function FXEventEngine(rate) {

  const event = detectFXEvent(rate);
  const state = transitionState(event);
  const action = generateAction(state);

  return {
    rate: rate,
    event: event,
    state: state,
    action: action,
    timestamp: new Date().toISOString()
  };
}

// Optional: batch simulation mode
function simulateFX(ratesArray) {
  return ratesArray.map(rate => FXEventEngine(rate));
}

// Export (for browser usage if needed)
if (typeof window !== "undefined") {
  window.FXEventEngine = FXEventEngine;
  window.simulateFX = simulateFX;
}
