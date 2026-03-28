# Design System Specification: Architectural Authority

## 1. Overview & Creative North Star
This design system is built to bridge the gap between the heavy, tangible world of construction and the fluid, sophisticated realm of high finance. We are moving away from the "generic corporate portal" and toward a **"Sovereign Blueprint"** aesthetic. 

**The Creative North Star: Sovereign Blueprint**
The system is defined by its architectural rigor and editorial luxury. We prioritize intentional asymmetry, expansive white space, and a high-contrast typographic scale that commands attention. Rather than using standard grid containers, we treat the screen as a canvas where "industrial excellence" meets "financial solidity." Expect overlapping elements, subtle grid-line motifs that mirror construction schematics, and a depth strategy that feels like stacked sheets of premium glass and heavy-gauge steel.

---

## 2. Colors
The palette is a high-contrast dialogue between deep, dark foundations and luminous, metallic highlights.

### The Palette (Material Design Tokens)
*   **Background / Surface:** `#111317` (Surface Dim) - A deep, obsidian navy that provides the foundation for our premium feel.
*   **Primary (Gold/Brass):** `#e9c176` (Primary) - Used sparingly for high-impact CTAs and key brand moments.
*   **Secondary (Cool Slate):** `#bfc7d7` (Secondary) - Bridges the gap between the deep background and the white text.
*   **On-Surface (Typography):** `#e2e2e6` (On-Surface) - A crisp, legible off-white to ensure readability against the dark background.

### The "No-Line" Rule
To achieve a world-class editorial look, **1px solid borders are strictly prohibited for sectioning.** We do not use lines to separate content. Instead, boundaries must be defined through:
1.  **Background Color Shifts:** Placing a `surface_container_low` (`#1a1c1f`) section against a `surface` (`#111317`) background.
2.  **Tonal Transitions:** Using the spacing scale to create wide "breathing zones" that naturally separate information.

### Signature Textures & Glass
*   **Glassmorphism:** Floating elements (like navigation bars or modal headers) should use semi-transparent surface colors with a `20px` to `40px` backdrop-blur. 
*   **The Golden Gradient:** For primary CTAs, use a linear gradient from `primary` (`#e9c176`) to `primary_container` (`#c5a059`) at a 135-degree angle. This adds a "brushed metal" soul to the UI that flat colors cannot achieve.

---

## 3. Typography
Our typography is our structural frame. We use a mix of technical precision and modern geometric clarity.

*   **Display & Headlines (Space Grotesk):** This typeface mirrors the architectural lines of the logo. Its technical, slightly eccentric terminals suggest "Modern Construction."
    *   *Usage:* Use `display-lg` (3.5rem) for hero statements with tight letter-spacing (-2%).
*   **Body & Titles (Manrope):** A high-end geometric sans-serif that feels approachable yet elite.
    *   *Usage:* `body-lg` (1rem) for general copy. Ensure a generous line-height (1.6) to maintain the editorial feel.
*   **Labeling:** `label-md` should always be uppercase with a +5% letter-spacing to mimic the "Inversiones Inmobiliarias" subtitle in the logo.

---

## 4. Elevation & Depth
We eschew traditional "drop shadows" in favor of **Tonal Layering**. The UI should feel like a physical model where light and shadow are subtle and integrated.

*   **The Layering Principle:** Depth is achieved by "stacking" the surface-container tiers. 
    *   *Level 0:* `surface` (The base floor).
    *   *Level 1:* `surface_container_low` (Sections, secondary areas).
    *   *Level 2:* `surface_container_high` (Cards, interactive zones).
*   **Ambient Shadows:** If an element must float (e.g., a primary modal), use an ultra-diffused shadow: `offset: 0 20px, blur: 50px, color: rgba(0, 0, 0, 0.4)`. The shadow must feel like ambient occlusion, not a "glow."
*   **The Ghost Border:** If accessibility requires a container edge, use the `outline_variant` (`#4e4639`) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** Sharp edges (`rounded-none` or `sm: 0.125rem`). Gradient background (Gold/Brass), `on_primary` text. Use a subtle inner-glow (top edge) to simulate a beveled metal edge.
*   **Secondary:** `outline` variant. Ghost border with `secondary` text. On hover, fill with `surface_container_highest` (`#333538`).

### Cards & Information Modules
*   **Strict Rule:** No dividers. Use `spacing-8` (2.75rem) to separate internal content.
*   **Visual Interest:** Incorporate subtle background grid lines (0.5px, 10% opacity) in the top-right corner of cards to reference architectural blueprints.

### Input Fields
*   **Style:** Minimalist. Only a bottom-weighted `outline_variant` line.
*   **State:** When active, the line transitions to the `primary` gold. Label text (Manrope) floats above in `label-sm` style.

### Structural Patterns
*   **The Grid:** Use a 12-column grid but intentionally "break" it by having images or display text bleed off-center. This creates a bespoke, non-template feeling.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Place a large headline on the left and leave the right 30% of the section empty to create "prestige."
*   **Use High Contrast:** Pair the deepest `surface_container_lowest` with the brightest `primary` gold for calls to action.
*   **Architectural Accents:** Use thin, vertical "gold wires" (1px lines) that only run for 40-60px to draw the eye toward specific headers.

### Don't:
*   **Don't use Rounded Corners:** Avoid the `xl` or `full` roundedness tokens for structural elements. We want the "sharp excellence" of a skyscraper, not the softness of a consumer app.
*   **Don't use Standard Shadows:** Never use the default "Drop Shadow" presets in your design tool. If it looks like a standard web shadow, it's wrong for this brand.
*   **Don't Clutter:** If a section feels "full," it is likely over-designed. Remove an element. High-end finance is about the luxury of space.