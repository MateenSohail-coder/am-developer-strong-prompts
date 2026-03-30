// Dark Cloudy Prompt Viewer - FIXED Safe Copy + 5-Line Truncate
const PROMPTS = [
  {
    id: 1,
    title: "1 View Ring Image Reconstruction",
    description: "prompt to create a perfect ring image for AI 3D modeling",
    prompt:
      "Reconstruct this ring image into a highly accurate, geometry-perfect reference specifically optimized for AI 3D model generation (Meshy AI).\n\nSTRICT PRIORITY:\n1. Preserve the EXACT original ring design (patterns, engravings, stone placement or empty settings, cuts, grooves)\n2. Do NOT simplify, redesign, fill, or invent any detail under any condition\n\nGEOMETRY REQUIREMENTS:\n- The ring MUST form a mathematically perfect circular band\n- Inner and outer radius must be clearly visible and concentric\n- Maintain consistent thickness across the entire ring\n- Ensure symmetry and accurate proportions\n- No oval shape, no distortion, no warping\n\nPOSITIONING (CRITICAL):\n- Align the ring in a clean 3/4 product angle (like a jewelry catalog shot)\n- The front/top design must be fully visible and facing slightly forward\n- The band must be rotated so both:\n  • inner hole (finger space) is clearly visible\n  • outer curvature is clearly defined\n- No flat top view and no extreme side view\n- No random tilt or distortion\n- Center the ring with balanced spacing\n\nANGLE GOAL:\nA balanced perspective where:\n- design face = clearly readable\n- circular structure = clearly understandable\n- depth and thickness = clearly visible\n\nSTONE / SETTING HANDLING (VERY IMPORTANT):\n- If stones are present → preserve exact size, placement, and setting style\n- If stones are missing → DO NOT add stones\n- Clearly reconstruct empty stone seats/holes\n- Preserve prongs, claws, or holders exactly\n- Maintain clean spacing and separation\n\nSTRUCTURAL ALIGNMENT & CONTROLLED REPAIR (CRITICAL):\n- Detect any misaligned, tilted, clustered, or uneven design elements\n- Correct alignment ONLY to restore intended symmetry and spacing\n- Straighten patterns, equalize spacing, and organize clustered elements\n- Maintain original design logic, count, and placement\n- Do NOT change pattern style, only fix positioning and clarity\n- Ensure all repeated elements follow a consistent and clean arrangement\n\nDETAIL RECONSTRUCTION:\n- Sharpen and restore all engravings, carvings, prongs, and edges\n- Maintain crisp separation between all elements\n- Reconstruct only based on visible structure (no guessing new design)\n\nVISUAL CLARITY:\n- Ultra high resolution\n- No blur, noise, or artifacts\n- High clarity for micro details\n\nLIGHTING & MATERIAL:\n- Soft neutral studio lighting\n- Preserve realistic metal texture\n- Avoid reflections hiding details\n\nBACKGROUND:\n- Pure white or light gray\n- Clean and distraction-free\n\nSTRICT NEGATIVE RULES:\n- Do NOT redesign or reinterpret the pattern\n- Do NOT add/remove elements\n- Do NOT fill holes or alter stone logic\n- Do NOT distort geometry\n- Do NOT over-smooth or merge clustered details\n\nOUTPUT GOAL:\nA high-resolution ring image in a perfect 3/4 angle where all design elements are clearly visible, properly aligned, evenly spaced, and geometrically accurate, while strictly preserving the original design.\n\nFINAL INSTRUCTION:\nIf any element appears misaligned or clustered, correct ONLY its alignment and spacing while preserving the exact original design structure and intent.",
  },
  {
    id: 2,
    title: "4 View Ring Image Reconstruction",
    description: "prompt to create a perfect ring image for AI 3D modeling",
    prompt:
      "Reconstruct this ring image into a highly accurate, geometry-perfect multi-view reference set specifically optimized for AI 3D model generation (Meshy AI).\n\nSTRICT PRIORITY:\n1. Preserve the EXACT original ring design (patterns, engravings, stone placement or empty settings, cuts, grooves)\n2. Do NOT simplify, redesign, fill, or invent any detail under any condition\n\nMULTI-VIEW REQUIREMENT (CRITICAL):\n- Generate exactly 4 separate views of the SAME ring\n- Each view must represent the identical design and proportions\n\nREQUIRED VIEWS:\n1. FRONT 3/4 VIEW:\n   - Main product angle\n   - Top design clearly visible\n   - Inner radius and band curvature visible\n\n2. SIDE VIEW (LEFT/RIGHT PROFILE):\n   - Focus on band thickness and side engravings\n   - Clear visibility of grooves, prongs, and structure\n\n3. TOP VIEW:\n   - Perfect circular shape\n   - Inner and outer radius clearly visible and concentric\n   - Symmetry must be mathematically accurate\n\n4. BACK VIEW:\n   - Opposite side of the front\n   - Show rear band details and structure clearly\n\nGEOMETRY REQUIREMENTS:\n- The ring MUST be a perfect circle in all applicable views\n- Maintain consistent thickness and proportions across all views\n- Ensure full symmetry and alignment consistency between views\n- No distortion, no warping, no perspective errors\n\nCONSISTENCY RULE (VERY IMPORTANT):\n- All 4 images must represent the EXACT same ring\n- No variation in design, proportions, or details between views\n- Elements must align logically across all angles\n\nSTRUCTURAL ALIGNMENT & CONTROL:\n- Correct any misalignment or clustering of elements\n- Ensure spacing, symmetry, and pattern consistency\n- Do NOT change design, only fix clarity and alignment\n\nSTONE / SETTING HANDLING:\n- Preserve stones exactly if present\n- If empty settings → keep holes and prongs intact\n- Do NOT add or remove stones\n\nDETAIL RECONSTRUCTION:\n- Sharpen all engravings, edges, and micro-details\n- Maintain clean separation between elements\n- No merging or smoothing of small details\n\nVISUAL CLARITY:\n- Ultra high resolution\n- No blur, noise, or artifacts\n\nLIGHTING & MATERIAL:\n- Neutral studio lighting\n- Consistent lighting across all 4 views\n- Preserve realistic metal and stone appearance\n\nBACKGROUND:\n- Plain white or light gray\n- Same background for all 4 views\n\nSTRICT NEGATIVE RULES:\n- Do NOT redesign or stylize\n- Do NOT change proportions\n- Do NOT create inconsistent views\n- Do NOT distort circular geometry\n\nOUTPUT FORMAT:\n- Provide a clean 4-image set (grid or separate images)\n- Each image clearly represents one defined angle\n\nFINAL GOAL:\nA complete 4-view reference set (front, side, top, back) with perfect geometric accuracy and design fidelity, enabling highly precise Meshy AI 3D reconstruction.\n\nFINAL INSTRUCTION:\nMaintain absolute consistency across all views. If any conflict occurs, prioritize exact design preservation and geometric correctness.",
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
    const preview =
      prompt.prompt.length > 350
        ? prompt.prompt.slice(0, 350) + "..."
        : prompt.prompt;
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
