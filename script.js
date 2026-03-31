// Brutalist PromptVault - Navbar removed, cards fixed
const PROMPTS = [
  {
    id: 1,
    title: "1 View Ring Image Reconstruction",
    description: "prompt to create a perfect ring image for AI 3D modeling",
    prompt:
      "Reconstruct this ring image into a highly accurate, geometry-perfect reference specifically optimized for AI 3D model generation (Meshy AI). STRICT PRIORITY: 1. Preserve the EXACT original ring design (patterns, engravings, stone placement converted into settings, cuts, grooves) 2. Do NOT simplify, redesign, fill, or invent any detail under any condition GEOMETRY REQUIREMENTS: - The ring MUST form a mathematically perfect circular band - Inner and outer radius must be clearly visible and concentric - Maintain consistent thickness across the entire ring - Ensure symmetry and accurate proportions - No oval shape, no distortion, no warping POSITIONING (CRITICAL): - Align the ring in a clean 3/4 product angle - Ensure full visibility of design face and band curvature - Centered with no tilt or distortion STONE CONVERSION (VERY IMPORTANT): - If stones are present: • REMOVE all stones completely • Convert each stone into a precise hole/seat • Match original size, shape, and exact position SUPPORT STRUCTURE (UPGRADED - CRITICAL): - Add prongs/claws/bezel supports that are: • TALL (clearly extended upward for stone holding) • CLEAN (sharp edges, no blobby shapes) • PRECISELY ALIGNED with each hole • EVENLY SPACED and symmetrical - Each support must be structurally realistic and manufacturable - Do NOT make supports short, merged, or uneven STRUCTURAL ALIGNMENT & CONTROLLED REPAIR: - Fix misalignment or clustering ONLY - Maintain original design logic DETAIL RECONSTRUCTION: - Restore all engravings, edges, and micro details - Keep crisp separation between elements VISUAL CLARITY: - Ultra high resolution, no blur/noise LIGHTING & BACKGROUND: - Neutral lighting, plain white/gray background STRICT NEGATIVE RULES: - Do NOT keep stones - Do NOT distort supports - Do NOT make supports short or unclear - Do NOT redesign anything OUTPUT GOAL: A clean 3/4 view ring image where all stone positions are converted into precise holes with tall, sharp, well-aligned support structures, maintaining perfect geometry and design fidelity. FINAL INSTRUCTION: Supports must be tall, clean, evenly aligned, and clearly defined for accurate 3D reconstruction.",
  },
  {
    id: 2,
    title: "4 View Ring Image Reconstruction",
    description: "prompt to create a perfect ring image for AI 3D modeling",
    prompt:
      "Reconstruct this ring image into a highly accurate, geometry-perfect multi-view reference set optimized for AI 3D model generation (Meshy AI). STRICT PRIORITY: 1. Preserve the EXACT original ring design (converted into settings) 2. Do NOT redesign or invent details MULTI-VIEW REQUIREMENT: - Generate 4 consistent views: front (3/4), back, top, bottom - All views must match perfectly GEOMETRY: - Perfect circular band - Concentric inner/outer radius - Consistent thickness and symmetry STONE CONVERSION: - REMOVE all stones - Convert into precise holes matching original placement SUPPORT STRUCTURE (UPGRADED - CRITICAL): - Add prongs/claws/bezel supports that are: • TALL (extended and clearly visible in all views) • CLEAN and sharply defined • PERFECTLY ALIGNED with each hole • SYMMETRICAL and evenly spaced - Supports must remain consistent across all 4 views - No short, bent, merged, or uneven supports CONSISTENCY RULE: - All views must show identical support height, placement, and structure - No variation between angles STRUCTURAL ALIGNMENT: - Fix misalignment or clustering ONLY - Maintain original design logic DETAILS: - Preserve engravings and micro patterns - Keep clean separation VISUAL QUALITY: - High resolution, no blur/noise LIGHTING: - Consistent studio lighting across all views BACKGROUND: - Plain white/gray STRICT NEGATIVE RULES: - Do NOT keep stones - Do NOT shorten or distort supports - Do NOT create inconsistencies between views - Do NOT redesign pattern OUTPUT FORMAT: - 4-image set (front, back, top, bottom) OUTPUT GOAL: A complete multi-view ring reference where all stone positions are converted into precise holes with tall, clean, perfectly aligned support structures, consistent across all views and ready for accurate Meshy AI 3D modeling. FINAL INSTRUCTION: Ensure all supports are tall, sharp, symmetrical, and identical across all views, with perfect geometric alignment.",
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
