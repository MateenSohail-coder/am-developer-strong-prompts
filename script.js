// Brutalist PromptVault - Navbar removed, cards fixed
const PROMPTS = [
  {
    id: 1,
    title: "1 View Ring Image Reconstruction",
    description: "prompt to create a perfect ring image for AI 3D modeling",
    prompt:
      "STRICT RECONSTRUCTION ONLY — NO CREATIVE DECISIONS PERMITTED You are NOT allowed to invent, predict, assume, fill in, redesign, or change ANY part of this ring design under any condition. Every decision you make must be directly traceable to the original image. If a detail is unclear, reconstruct its outline only — do NOT guess its interior. Treat this as a forensic copy task, not a creative one. TASK: Reconstruct this ring image into a geometry-perfect 3/4 view reference for Meshy AI 3D model generation. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ABSOLUTE DESIGN LOCK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ - Copy every engraving, groove, cut, pattern, and edge EXACTLY as visible in the source image - Do NOT simplify any element — no matter how small - Do NOT add any element that is not in the source image - Do NOT fill, smooth, round, or alter any surface detail - Do NOT use auto-completion, AI prediction, or style inference to fill gaps - If something is unclear in the image, leave its boundary visible but do NOT invent its content ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ GEOMETRY — PERFECT CIRCLE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ - The band must be a mathematically perfect circle — not oval, not warped, not tilted - Inner and outer radius must be concentric and clearly visible - Band thickness must be perfectly consistent across the full circumference - All proportions must match the original ring dimensions exactly ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ POSITIONING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ - View angle: clean 3/4 product angle - The ring face (top/design surface) and band curvature must both be fully visible - Centered on a plain white or light gray background - No tilt, no distortion, no perspective warping ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ STONE REMOVAL — ALL STONES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ - Remove EVERY stone — including large center stones, small accent stones, micro stones, and pavé stones - Do NOT keep any stone, gem, crystal, or reflective insert of any kind - For each removed stone, create a clean, precise hole/seat: • The hole must match the exact shape, size, and position of the original stone • The hole edges must be sharp and clean — no blurring or smoothing • The depth of the seat must be visible and accurate ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SUPPORT STRUCTURES — TALL, SHARP, ALIGNED ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ CRITICAL: Supports must be tall, individually distinct, and precisely placed. You are NOT allowed to shorten, merge, bend, blob, or distort any support structure. For each stone hole: - Add prongs, claws, or bezel supports appropriate to the original setting style - Each support must be: • TALL — clearly extended upward, visibly taller than the ring surface • SHARP — clean, defined edges with no soft or blobby geometry • INDIVIDUALLY SEPARATED — no merging between adjacent supports • PRECISELY ALIGNED — centered exactly on the edges of each hole • EVENLY SPACED — symmetrically distributed around each setting - Support height, thickness, and shape must be identical across matching setting types - Supports must look structurally realistic and manufacturable — not decorative or stylized - Do NOT place supports that were not in the original setting style - Do NOT make any support shorter than clearly visible and extended ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ STRUCTURAL CORRECTION — LIMITED SCOPE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ You are ONLY permitted to correct: - Misalignment or clustering caused by photographic distortion - Symmetry errors that are clearly artifacts, not design choices You are NOT permitted to redesign, reinterpret, or improve any structural element ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ DETAIL PRESERVATION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ - Preserve all engravings, micro-textures, edge cuts, and surface patterns exactly - Maintain crisp, visible separation between all design elements - No blurring, feathering, or anti-aliasing that obscures detail ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ OUTPUT REQUIREMENTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ - Ultra-high resolution - No blur, noise, or compression artifacts - Neutral studio lighting — no dramatic shadows or highlights - Plain white or light gray background - Single clean image ready for Meshy AI import FINAL ENFORCEMENT: If you are uncertain about any detail, reproduce only what is visible. Do NOT predict. Do NOT complete. Do NOT improve.",
  },
  {
    id: 2,
    title: "4 View Ring Image Reconstruction",
    description: "prompt to create a perfect ring image for AI 3D modeling",
    prompt:
      "STRICT RECONSTRUCTION ONLY — NO CREATIVE DECISIONS PERMITTED You are NOT allowed to invent, predict, assume, fill in, redesign, or change ANY part of this ring design under any condition. Every decision must be directly traceable to the original source image. Do NOT use auto-completion, style prediction, or AI inference to fill in any detail. If a detail is unclear, reproduce only its visible boundary — never guess its interior. TASK: Reconstruct this ring into a complete 4-view multi-angle reference set for Meshy AI 3D model generation. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ABSOLUTE DESIGN LOCK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ - Every engraving, groove, cut, pattern, edge, and surface detail must be copied EXACTLY from the source image - Do NOT simplify, smooth, round, redesign, or alter ANY element — no matter how small or micro - Do NOT add any element not present in the source - Do NOT auto-complete or predict any obscured or unclear area - This is a forensic copy task — zero creative latitude is permitted ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ MULTI-VIEW OUTPUT — 4 CONSISTENT VIEWS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Generate exactly 4 views in a single image set: 1. FRONT (3/4 angle) — design face and band curvature fully visible 2. BACK — full reverse side, band visible, any back engravings preserved 3. TOP (plan view) — looking straight down into the ring opening 4. BOTTOM — looking straight up at the ring base CONSISTENCY LAW: All 4 views must show identical: - Design patterns and engravings - Support structure height, thickness, and placement - Stone hole size, shape, and position - Band geometry and proportions Any inconsistency between views is a failure. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ GEOMETRY — PERFECT CIRCLE IN ALL VIEWS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ - The band must be a mathematically perfect circle in every view - No oval, no warping, no distortion in any view - Inner and outer radius must be concentric and clearly visible - Band thickness must be perfectly consistent across the full circumference - All proportions must match the original ring dimensions exactly ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ STONE REMOVAL — ALL STONES, ALL VIEWS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ - Remove EVERY stone from EVERY view — large center stones, accent stones, micro stones, pavé stones, any reflective insert - For each removed stone in each view, create a precise hole/seat: • Exact shape, size, and position matching the original stone footprint • Sharp, clean edges — no blur or rounding of hole boundaries • The seat depth must be visible and consistent across all views - The same hole must appear at the same position in every view it is visible from ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SUPPORT STRUCTURES — MANDATORY IN ALL VIEWS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ CRITICAL: Supports must be tall, sharp, and individually defined in every single view. You are NOT allowed to shorten, merge, omit, bend, blob, or distort any support in any view. For each stone hole in each view: - Add prongs, claws, or bezel supports matching the original setting type - Every support must be: • TALL — clearly extended above the ring surface, same height in all views • SHARP — clean, defined geometry with hard edges • INDIVIDUALLY SEPARATED — no touching or merging with adjacent supports • PRECISELY ALIGNED — centered on each hole edge in every view • EVENLY SPACED — symmetrically distributed, identical spacing in all views - Support dimensions (height, width, thickness) must be pixel-consistent across all 4 views - Supports must appear structurally realistic and manufacturable ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ STRUCTURAL CORRECTION — LIMITED SCOPE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ You are ONLY permitted to correct: - Misalignment or clustering caused by photographic distortion - Symmetry errors that are clearly photographic artifacts You are NOT permitted to redesign or reinterpret any structural element ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ DETAIL PRESERVATION — ALL VIEWS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ - All engravings, micro-textures, surface patterns, and edge cuts must appear in every relevant view - Maintain crisp visible separation between all design elements in all 4 views - No blurring, feathering, or anti-aliasing that obscures detail ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ OUTPUT REQUIREMENTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ - 4-image set: front (3/4), back, top, bottom — all in one output - Ultra-high resolution across all views - Consistent neutral studio lighting in all views — no dramatic shadows - Plain white or light gray background for all views - All views labeled clearly: FRONT / BACK / TOP / BOTTOM - Ready for direct Meshy AI import FINAL ENFORCEMENT: Reproduce only what is visible in the source. Do NOT predict. Do NOT complete. Do NOT improve. Zero creative latitude.",
  },
  {
    id: 3,
    title: "Jewelry Design Reconstruction",
    description:
      "prompt to create a perfect gold design piece image for AI 3D modeling",
    prompt:
      "Reconstruct this jewelry design piece into a highly precise, geometry-accurate module optimized for AI 3D modeling (Meshy AI). STRICT PRIORITY: 1. Preserve the EXACT original design structure (patterns, curves, engravings, layout) 2. Do NOT simplify, redesign, or invent any new elements STONE CONVERSION (CRITICAL): - If stones are present in the design: • REMOVE the stones • Convert each stone into a clearly defined hole/seat • Add accurate support structures (prongs, claws, or bezels) to hold the stone - Each hole must match the original stone's: • size • shape (round, oval, square, etc.) • position - Supports must be clean, evenly spaced, and structurally realistic - Do NOT merge holes or remove any stone positions STRUCTURE & GEOMETRY: - The design piece must be complete, clean, and fully visible - Maintain perfect symmetry (if applicable) - Ensure consistent thickness and proportions - All edges must be sharp and clearly defined - No distortion, no warping MODULAR DESIGN (VERY IMPORTANT): - The piece must act as a repeatable unit/module - Clearly define start and end boundaries - Ensure it can be seamlessly repeated (for bangles, chains, etc.) - Maintain proper spacing between elements DETAIL RECONSTRUCTION: - Sharpen all engravings, filigree, and micro-patterns - Maintain clean separation between all small elements - Reconstruct only based on visible structure (no guessing new design) STRUCTURAL ALIGNMENT: - Fix any misaligned or clustered elements - Ensure proper spacing and symmetry - Do NOT change design logic, only improve clarity and alignment VISUAL CLARITY: - Ultra high resolution - No blur, noise, or artifacts - High clarity for micro details (especially holes and supports) LIGHTING & MATERIAL: - Neutral studio lighting - Preserve realistic metal texture (gold/silver) - Avoid reflections hiding details BACKGROUND: - Plain white or light gray - Clean and distraction-free STRICT NEGATIVE RULES: - Do NOT keep stones (convert them into holes only) - Do NOT add/remove design elements - Do NOT merge small details - Do NOT stylize or beautify beyond original design OUTPUT GOAL: A clean, sharp, fully defined jewelry design module where all stone positions are converted into precise holes with proper support structures, maintaining exact design fidelity and ready for accurate Meshy AI 3D reconstruction. FINAL INSTRUCTION: Prioritize structural accuracy and manufacturable design. Every hole and support must be clearly defined, geometrically correct, and aligned with the original design layout.",
  },
];

const grid = document.getElementById("promptsGrid");
const count = document.getElementById("promptCount");
const empty = document.getElementById("emptyState");

// Word-based truncate (for single-line prompts)
function truncatePreview(fullPrompt, maxWords = 120) {
  const words = fullPrompt.split(/\s+/);
  const preview = words.slice(0, maxWords).join(" ");
  return preview.length < fullPrompt.length ? preview + "..." : preview;
}

function createBrutalistCard(p) {
  const card = document.createElement("div");
  card.className = "brutalist brutalist-card";
  card.dataset.fullPrompt = p.prompt;
  card.innerHTML = `
    <div class="card-title">${p.title}</div>
    <div class="card-desc">${p.description}</div>
    <div class="card-preview">${truncatePreview(p.prompt)}</div>
    <button class="card-button">COPY FULL</button>
  `;
  const btn = card.querySelector(".card-button");
  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(p.prompt).then(() => {
      btn.textContent = "COPIED!";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = "COPY FULL";
        btn.classList.remove("copied");
      }, 1500);
    });
  });
  card.addEventListener("mouseenter", () => card.classList.add("glitch"));
  card.addEventListener("mouseleave", () => card.classList.remove("glitch"));
  return card;
}

function toast(msg) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  document.getElementById("toastContainer").appendChild(t);
  setTimeout(() => t.remove(), 2000);
}

function render() {
  grid.innerHTML = "";
  count.textContent = PROMPTS.length;
  empty.style.display = "none";
  PROMPTS.forEach((p) => grid.appendChild(createBrutalistCard(p)));
}

// Load all prompts (no search)
render();
