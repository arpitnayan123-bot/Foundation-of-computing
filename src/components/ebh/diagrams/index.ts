/* ============================================================
   EBH diagrams barrel — every figure on shelf 04 is registered
   here, reusable across lectures. If a lecture needs a drawing,
   it imports from this barrel; nothing draws unregistered.
   ============================================================ */

export {
  EbhFigure, EbhFlow, EbhDataTable, EbhRule,
  EBH_STATE_COLOR, EBH_STATE_NAME,
  OX, GOLD, GOLD_LITE, GREY, INK, PAPER, EDGE,
  type EbhFlowStep, type EbhFlowState,
} from "./kit";

export {
  EbhCircularFlow, EbhOpenField, EbhEnclosed, EbhTimeStandardization,
  EbhThreeLenses, EbhModuleRibbon, EbhGuildLadder, EbhCharterErosion,
  EbhOpiumTriangle, EbhSwadeshiWheel, EbhSystemsSpectrum,
} from "./figures";
