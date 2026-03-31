// Brutalist PromptVault - Navbar removed, cards fixed
const PROMPTS = [
  {
    id: 1,
    title: "1 View Ring Image Reconstruction",
    description: "prompt to create a perfect ring image for AI 3D modeling",
    prompt:
      "Reconstruct this ring image into a highly accurate, geometry-perfect reference specifically optimized for AI 3D model generation (Meshy AI). STRICT PRIORITY: 1. Preserve the EXACT original ring design (patterns, engravings, stone placement converted into settings, cuts, grooves) 2. Do NOT simplify, redesign, fill, or invent any detail under any condition GEOMETRY REQUIREMENTS: - The ring MUST form a mathematically perfect circular band - Inner and outer radius must be clearly visible and concentric - Maintain consistent thickness across the entire ring - Ensure symmetry and accurate proportions - No oval shape, no distortion, no warping POSITIONING (CRITICAL): - Align the ring in a clean 3/4 product angle (like a jewelry catalog shot) - The front/top design must be fully visible and facing slightly forward - The band must be rotated so both: • inner hole (finger space) is clearly visible • outer curvature is clearly defined - No flat top view and no extreme side view - No random tilt or distortion - Center the ring with balanced spacing ANGLE GOAL: A balanced perspective where: - design face = clearly readable - circular structure = clearly understandable - depth and thickness = clearly visible STONE CONVERSION (VERY IMPORTANT): - If stones are present: • REMOVE all stones completely • Convert each stone position into a precise hole/seat • Match the original stone's size, shape, and exact position • Add realistic support structures (prongs, claws, or bezels) to hold the stone - Each hole must be clean, geometrically accurate, and properly aligned - Maintain equal spacing and symmetry between all holes and supports - Do NOT merge or skip any stone positions STRUCTURAL ALIGNMENT & CONTROLLED REPAIR (CRITICAL): - Detect any misaligned, tilted, clustered, or uneven elements - Correct alignment ONLY to restore proper symmetry and spacing - Maintain original design logic, count, and placement - Do NOT change pattern style, only improve positioning and clarity DETAIL RECONSTRUCTION: - Sharpen and restore all engravings, carvings, prongs, and edges - Maintain crisp separation between all elements - Reconstruct only based on visible structure (no guessing new design) VISUAL CLARITY: - Ultra high resolution - No blur, noise, or artifacts - High clarity for micro details (especially holes and supports) LIGHTING & MATERIAL: - Soft neutral studio lighting - Preserve realistic metal texture - Avoid reflections hiding fine details BACKGROUND: - Pure white or light gray - Clean and distraction-free STRICT NEGATIVE RULES: - Do NOT keep or add stones - Do NOT fill holes or settings - Do NOT redesign or reinterpret the pattern - Do NOT add/remove elements - Do NOT distort geometry - Do NOT merge or over-smooth fine details OUTPUT GOAL: A high-resolution ring image in a perfect 3/4 angle where all original stone positions are converted into precise holes with accurate support structures, while maintaining exact design fidelity and perfect geometry for Meshy AI 3D reconstruction. FINAL INSTRUCTION: Prioritize structural accuracy and manufacturable design. Every former stone position must be clearly represented as a hole with proper supports, aligned perfectly with the original design layout.",
  },
  {
    id: 2,
    title: "4 View Ring Image Reconstruction",
    description: "prompt to create a perfect ring image for AI 3D modeling",
    prompt:
      "Reconstruct this ring image into a highly accurate, geometry-perfect multi-view reference set specifically optimized for AI 3D model generation (Meshy AI). STRICT PRIORITY: 1. Preserve the EXACT original ring design (patterns, engravings, stone placement converted into settings, cuts, grooves) 2. Do NOT simplify, redesign, fill, or invent any detail under any condition MULTI-VIEW REQUIREMENT (CRITICAL): - Generate exactly 4 consistent views of the SAME ring - Each view must represent identical design, proportions, and structure REQUIRED VIEWS: 1. FRONT VIEW (3/4 ANGLE): - Main product angle - Top design clearly visible - Inner radius and band curvature visible 2. BACK VIEW: - Opposite side of the ring - Rear band structure and design clearly visible 3. TOP VIEW (UPPER): - Perfect circular shape - Inner and outer radius clearly visible and concentric - Full symmetry must be mathematically accurate 4. BOTTOM VIEW (LOWER): - Underside of the ring band - Inner structure and thickness clearly visible GEOMETRY REQUIREMENTS: - The ring MUST form a mathematically perfect circular band - Inner and outer radius must be concentric in all applicable views - Maintain consistent thickness across all views - Ensure symmetry and accurate proportions - No oval shape, no distortion, no warping CONSISTENCY RULE (VERY IMPORTANT): - All 4 views must match perfectly (same design, same proportions) - No variation, no missing elements, no added details - Features must align logically across all angles STONE CONVERSION (VERY IMPORTANT): - If stones are present: • REMOVE all stones completely • Convert each stone position into a precise hole/seat • Match original size, shape, and exact placement • Add realistic support structures (prongs, claws, or bezels) - Each hole must be clean, geometrically accurate, and properly aligned - Maintain equal spacing and symmetry between all holes and supports - Do NOT merge or skip any stone positions STRUCTURAL ALIGNMENT & CONTROLLED REPAIR: - Detect misaligned, tilted, or clustered elements - Correct ONLY alignment and spacing (not design) - Ensure clean, symmetrical, and consistent arrangement DETAIL RECONSTRUCTION: - Sharpen and restore all engravings, carvings, prongs, and edges - Maintain crisp separation between all elements - No guessing or invention of new design parts VISUAL CLARITY: - Ultra high resolution - No blur, noise, or artifacts - High clarity for micro details (especially holes and supports) LIGHTING & MATERIAL: - Neutral studio lighting - Consistent lighting across all 4 views - Preserve realistic metal texture BACKGROUND: - Pure white or light gray - Same background for all views STRICT NEGATIVE RULES: - Do NOT keep or add stones - Do NOT fill holes or settings - Do NOT redesign or reinterpret the pattern - Do NOT add/remove elements - Do NOT distort geometry - Do NOT create inconsistencies between views OUTPUT FORMAT: - Provide a clean 4-image set (grid or separate images) - Each image must clearly represent one defined view (front, back, top, bottom) OUTPUT GOAL: A complete 4-view reference set where all stone positions are converted into precise holes with accurate support structures, and the ring is represented with perfect geometric accuracy and full design consistency for Meshy AI 3D reconstruction. FINAL INSTRUCTION: Maintain absolute consistency across all views. Prioritize exact design fidelity, structural accuracy, and perfect circular geometry over artistic appearance.",
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
