// Dark Cloudy Prompt Viewer - FIXED Safe Copy + 5-Line Truncate
const PROMPTS = [
  {
    id: 1,
    title: "1 View Ring Image Reconstruction",
    description: "prompt to create a perfect ring image for AI 3D modeling",
    prompt:
      "Reconstruct this ring image into a highly accurate, geometry-perfect reference specifically optimized for AI 3D model generation (Meshy AI). STRICT PRIORITY: 1. Preserve the EXACT original ring design (patterns, engravings, stone placement converted into settings, cuts, grooves) 2. Do NOT simplify, redesign, fill, or invent any detail under any condition GEOMETRY REQUIREMENTS: - The ring MUST form a mathematically perfect circular band - Inner and outer radius must be clearly visible and concentric - Maintain consistent thickness across the entire ring - Ensure symmetry and accurate proportions - No oval shape, no distortion, no warping POSITIONING (CRITICAL): - Align the ring in a clean 3/4 product angle (like a jewelry catalog shot) - The front/top design must be fully visible and facing slightly forward - The band must be rotated so both: • inner hole (finger space) is clearly visible • outer curvature is clearly defined - No flat top view and no extreme side view - No random tilt or distortion - Center the ring with balanced spacing ANGLE GOAL: A balanced perspective where: - design face = clearly readable - circular structure = clearly understandable - depth and thickness = clearly visible STONE CONVERSION (VERY IMPORTANT): - If stones are present: • REMOVE all stones completely • Convert each stone position into a precise hole/seat • Match the original stone’s size, shape, and exact position • Add realistic support structures (prongs, claws, or bezels) to hold the stone - Each hole must be clean, geometrically accurate, and properly aligned - Maintain equal spacing and symmetry between all holes and supports - Do NOT merge or skip any stone positions STRUCTURAL ALIGNMENT & CONTROLLED REPAIR (CRITICAL): - Detect any misaligned, tilted, clustered, or uneven elements - Correct alignment ONLY to restore proper symmetry and spacing - Maintain original design logic, count, and placement - Do NOT change pattern style, only improve positioning and clarity DETAIL RECONSTRUCTION: - Sharpen and restore all engravings, carvings, prongs, and edges - Maintain crisp separation between all elements - Reconstruct only based on visible structure (no guessing new design) VISUAL CLARITY: - Ultra high resolution - No blur, noise, or artifacts - High clarity for micro details (especially holes and supports) LIGHTING & MATERIAL: - Soft neutral studio lighting - Preserve realistic metal texture - Avoid reflections hiding fine details BACKGROUND: - Pure white or light gray - Clean and distraction-free STRICT NEGATIVE RULES: - Do NOT keep or add stones - Do NOT fill holes or settings - Do NOT redesign or reinterpret the pattern - Do NOT add/remove elements - Do NOT distort geometry - Do NOT merge or over-smooth fine details OUTPUT GOAL: A high-resolution ring image in a perfect 3/4 angle where all original stone positions are converted into precise holes with accurate support structures, while maintaining exact design fidelity and perfect geometry for Meshy AI 3D reconstruction. FINAL INSTRUCTION: Prioritize structural accuracy and manufacturable design. Every former stone position must be clearly represented as a hole with proper supports, aligned perfectly with the original design layout.",
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
      "Reconstruct this jewelry design piece into a highly precise, geometry-accurate module optimized for AI 3D modeling (Meshy AI).\n\nSTRICT PRIORITY:\n1. Preserve the EXACT original design structure (patterns, curves, engravings, layout)\n2. Do NOT simplify, redesign, or invent any new elements\n\nSTONE CONVERSION (CRITICAL):\n- If stones are present in the design:\n  • REMOVE the stones\n  • Convert each stone into a clearly defined hole/seat\n  • Add accurate support structures (prongs, claws, or bezels) to hold the stone\n- Each hole must match the original stone's:\n  • size\n  • shape (round, oval, square, etc.)\n  • position\n- Supports must be clean, evenly spaced, and structurally realistic\n- Do NOT merge holes or remove any stone positions\n\nSTRUCTURE & GEOMETRY:\n- The design piece must be complete, clean, and fully visible\n- Maintain perfect symmetry (if applicable)\n- Ensure consistent thickness and proportions\n- All edges must be sharp and clearly defined\n- No distortion, no warping\n\nMODULAR DESIGN (VERY IMPORTANT):\n- The piece must act as a repeatable unit/module\n- Clearly define start and end boundaries\n- Ensure it can be seamlessly repeated (for bangles, chains, etc.)\n- Maintain proper spacing between elements\n\nDETAIL RECONSTRUCTION:\n- Sharpen all engravings, filigree, and micro-patterns\n- Maintain clean separation between all small elements\n- Reconstruct only based on visible structure (no guessing new design)\n\nSTRUCTURAL ALIGNMENT:\n- Fix any misaligned or clustered elements\n- Ensure proper spacing and symmetry\n- Do NOT change design logic, only improve clarity and alignment\n\nVISUAL CLARITY:\n- Ultra high resolution\n- No blur, noise, or artifacts\n- High clarity for micro details (especially holes and supports)\n\nLIGHTING & MATERIAL:\n- Neutral studio lighting\n- Preserve realistic metal texture (gold/silver)\n- Avoid reflections hiding details\n\nBACKGROUND:\n- Plain white or light gray\n- Clean and distraction-free\n\nSTRICT NEGATIVE RULES:\n- Do NOT keep stones (convert them into holes only)\n- Do NOT add/remove design elements\n- Do NOT merge small details\n- Do NOT stylize or beautify beyond original design\n\nOUTPUT GOAL:\nA clean, sharp, fully defined jewelry design module where all stone positions are converted into precise holes with proper support structures, maintaining exact design fidelity and ready for accurate Meshy AI 3D reconstruction.\n\nFINAL INSTRUCTION:\nPrioritize structural accuracy and manufacturable design. Every hole and support must be clearly defined, geometrically correct, and aligned with the original design layout.",
  },
];

const promptsGrid = document.getElementById("promptsGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const promptCount = document.getElementById("promptCount");
const toastContainer = document.getElementById("toastContainer");

function showToast(msg) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

function copyFullPrompt(fullPrompt) {
  navigator.clipboard
    .writeText(fullPrompt)
    .then(() => {
      showToast("Full prompt copied! 📋");
    })
    .catch(() => {
      const ta = document.createElement("textarea");
      ta.value = fullPrompt;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast("Full prompt copied!");
    });
}

function renderPrompts(filter = "") {
  promptsGrid.innerHTML = "";
  const filtered = PROMPTS.filter(
    (p) =>
      p.title.toLowerCase().includes(filter.toLowerCase()) ||
      p.description.toLowerCase().includes(filter.toLowerCase()) ||
      p.prompt.toLowerCase().includes(filter.toLowerCase()),
  );

  promptCount.textContent = filtered.length;

  if (filtered.length === 0) {
    emptyState.style.display = "block";
    promptsGrid.style.display = "none";
    return;
  }

  emptyState.style.display = "none";
  promptsGrid.style.display = "grid";

  filtered.forEach((prompt) => {
    // Smart 5-line preview with preserved formatting
    const lines = prompt.prompt.split("\n");
    const previewLines = lines.slice(0, 5);
    const card = document.createElement("div");
    card.className = "prompt-card";
    card.dataset.prompt = encodeURIComponent(prompt.prompt);
    card.innerHTML = `
      <div class="card-header">
        <div>
          <h3 class="prompt-title">${prompt.title}</h3>
          <p class="prompt-desc">${prompt.description}</p>
        </div>
        <button class="copy-btn" aria-label="Copy full prompt">
          <i class="fas fa-copy"></i>
        </button>
      </div>
      <div class="prompt-preview">${preview}</div>
      <div class="prompt-footer">
        <span>Copy for full prompt</span>
      </div>
    `;
    promptsGrid.appendChild(card);
  });
}

// Event delegation for safe copy
promptsGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".copy-btn");
  if (btn) {
    const card = btn.closest(".prompt-card");
    const fullPrompt = decodeURIComponent(card.dataset.prompt);
    copyFullPrompt(fullPrompt);
  }
});

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderPrompts();
  searchInput.addEventListener("input", (e) => renderPrompts(e.target.value));
});
