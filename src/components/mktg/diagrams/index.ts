/* ============================================================
   MKTG diagram registry — every registered figure of the
   Principles of Marketing rebuild, in one barrel. Figures are
   reusable components (never one-off inline markup); the
   audit scans this directory for coverage.
   ============================================================ */

export { Figure, FigSvg, Arrow, T, MK } from "./kit";
export { MktgStepper, type StepDef } from "./MktgStepper";
export { AuthoringNote } from "./AuthoringNote";

// foundations arc
export { EverydayOrbit, ValueEquation, SegmentBars, SafeGates, ErasFlow } from "./foundations";

// the decision journey
export { JourneyFive, MessyLoop } from "./journey";

// the consumer mind
export { MaslowPyramid, BiasGrid } from "./mind";

// product & portfolio arc
export {
  ProductLevelsTower,
  WidthDepthGrid,
  WidthDepthGrid11,
  WidthDepthGrid12,
  GrowthCurve,
  StretchMap,
  StrategyBridge,
  BucketSplit,
  AbcChain,
  TriadTriangle,
  CoBrandTypes,
} from "./product";

// pricing
export { PricingTriad, PricingLadder } from "./pricing";

// marketing communications
export { ThreeCsTriangle, AttentionFunnel, System1System2, ExamSplit } from "./marcom";
