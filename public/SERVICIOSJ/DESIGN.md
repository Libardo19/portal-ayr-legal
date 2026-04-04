# Design System Document: Institutional Technical

## 1. Overview & Creative North Star

### The Creative North Star: "The Cartographic Ledger"
This design system is built upon the intersection of legal authority and engineering precision. It moves away from the "friendly SaaS" aesthetic, embracing an atmosphere of high-stakes expertise. We treat the digital interface as a living document—a "Cartographic Ledger"—where every pixel feels as intentional as a property deed and as precise as a topographic survey.

The system breaks the "template" look by utilizing **intentional asymmetry** and **tonal layering**. Instead of centered, predictable layouts, we use wide margins and "technical sidebars" that mimic blueprint annotations. This creates a signature experience that conveys both the weight of the law and the technical rigor of engineering.

---

## 2. Colors & Surface Philosophy

The palette is grounded in a "Deep Navy" and "Forest Green" core, supported by a sophisticated range of cool grays.

### Surface Hierarchy & Nesting
We reject the flat web. We treat the UI as a series of physical layers—like stacked vellum or fine bond paper.
*   **The Layering Principle:** Depth is achieved by "stacking" surface tiers. Place a `surface-container-lowest` (#ffffff) card onto a `surface-container-low` (#f2f4f6) section. This creates a soft, natural lift that mimics physical documents.
*   **The "No-Line" Rule:** Do not use 1px solid borders to define sections. Boundaries must be defined solely through background color shifts. For example, a `surface-container` sidebar should sit against a `surface` background without a stroke.

### Glass & Gradients
To avoid a "clinical" or "stale" feel, we introduce "Institutional Glass."
*   **Glassmorphism:** For floating panels (modals, dropdowns), use `surface-container` with a 90% opacity and a `20px` backdrop-blur. This ensures the technical grid underneath remains visible, maintaining a sense of transparency and "open-book" legal ethics.
*   **Signature Textures:** Use subtle linear gradients for CTAs, transitioning from `primary` (#0c1427) to `primary-container` (#21283c). This adds "soul" and depth to buttons, moving them away from flat, generic blocks.

---

## 3. Typography

The typography strategy pairs the intellectual authority of a structured serif with the modern clarity of a technical sans-serif.

*   **Display & Headlines (Newsreader):** Used for primary messaging. The serif's architectural structure conveys legal heritage and historical permanence.
*   **Body & Titles (Public Sans):** A neutral, highly legible sans-serif for long-form case studies and engineering reports. It stays out of the way to let the data speak.
*   **Technical Labels (Space Grotesk):** Used for metadata, coordinates, and "blueprint-style" annotations. This monospaced-adjacent font provides the "Engineering" half of the visual equation.

| Role | Font Family | Size | Intent |
| :--- | :--- | :--- | :--- |
| **Display-lg** | Newsreader | 3.5rem | High-impact editorial statements. |
| **Headline-md** | Newsreader | 1.75rem | Section headers in legal briefs. |
| **Body-lg** | Public Sans | 1.0rem | Primary narrative and report text. |
| **Label-md** | Space Grotesk | 0.75rem | Technical data, figure numbers, and map labels. |

---

## 4. Elevation & Depth

In this design system, we do not "drop shadows"; we "ambiently illuminate."

*   **Ambient Shadows:** When a floating effect is required (e.g., a primary map overlay), use an extra-diffused shadow.
    *   *Value:* `0px 12px 32px rgba(25, 28, 30, 0.06)`
    *   *Rule:* The shadow color must be a tinted version of `on-surface` (#191c1e) to mimic natural light.
*   **The "Ghost Border" Fallback:** If a container requires definition against an identical background color, use a "Ghost Border."
    *   *Specification:* `outline-variant` (#c5c6cd) at **15% opacity**.
    *   *Forbidden:* 100% opaque, high-contrast borders are strictly prohibited.
*   **The Sharp Edge:** All containers, buttons, and inputs must use a **0px border-radius**. Sharp corners are non-negotiable—they represent the precision of a surveyor’s instruments and the "black and white" nature of the law.

---

## 5. Components

### Buttons (The "Precision Toggle")
*   **Primary:** `primary` background, `on-primary` text. No rounded corners. A subtle `0.5px` inset stroke of `primary-fixed-dim` provides a "beveled" technical look.
*   **Secondary:** `surface-container-highest` background. Sharp edges.
*   **Tertiary:** No background. `primary` text. Accompanied by a `1px` underline that only spans the width of the text, resembling a signature line.

### Input Fields (The "Ledger Entry")
*   **Style:** No 4-sided boxes. Use a "Bottom-only" border of 1px `outline`. When active, the border transitions to `primary`. 
*   **Technical Labels:** Use `Label-sm` (Space Grotesk) positioned strictly above the input, aligned left, in `on-surface-variant`.

### Cards & Lists
*   **Constraint:** Forbid the use of divider lines. 
*   **Execution:** Separate list items using the spacing scale (e.g., 16px vertical gap). Use a `surface-container-low` background on hover to indicate interactivity.
*   **The Technical Overlay:** Each card should have a `Label-sm` ID or coordinate in the top right corner (e.g., "REF: 402-A") to reinforce the "Institutional Technical" theme.

### Technical Accents (Blueprint Elements)
*   **The "Surveyor's Grid":** Use a subtle background grid (visible at 5% opacity) in `outline-variant` behind hero sections.
*   **Hairlines:** Use `0.5px` lines (`outline-variant` at 40% opacity) for decorative structural accents to guide the eye vertically, mimicking margins on legal paper.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical margins. Large sections of content should often be offset to one side, leaving room for "technical annotations."
*   **Do** use tonal shifts to create hierarchy. A darker gray section represents a "closed file," while a white section represents an "active document."
*   **Do** prioritize vertical rhythm. Use the spacing scale consistently to ensure the "Technical Ledger" feel.

### Don't
*   **Don't** use any border-radius. Rounded corners diminish the "Precision" brand pillar.
*   **Don't** use standard blue for links. Use `primary` or `tertiary` (Deep Forest Green) to maintain a grounded, professional tone.
*   **Don't** use traditional "Drop Shadows." They feel like generic web UI. Use tonal layering or Glassmorphism instead.
*   **Don't** use 1px solid dividers. They clutter the architectural clarity of the layout.