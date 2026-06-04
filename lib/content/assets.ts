/**
 * Centralised media registry — videos, posters and per-section imagery.
 *
 * Why this file exists
 * --------------------
 * Velnox should be able to swap branded footage (their own lab, their own
 * investigators) without hunting through JSX. Replace any URL below and the
 * corresponding section picks it up automatically.
 *
 * Sourcing rules
 * --------------
 *  - Hero video: short, looping (3–6 s), no audio, no sub-titled foreign faces.
 *    Lab macro shots, microscope close-ups, pipette work read as universal.
 *  - When a section calls for people imagery, prefer Indian / South-Asian
 *    medical professionals. The defaults below use abstract lab / equipment
 *    imagery so the site never looks misrepresentative until branded shots
 *    arrive.
 *  - Every image URL is from a free-to-use CDN (Unsplash / Pexels). Velnox can
 *    swap to self-hosted /public/<name>.{jpg,mp4} URLs at any time.
 */

export const HERO_VIDEO = {
  /**
   * Hero background video.
   *
   * Default points to /videos/hero.mp4 — drop your branded MP4 at
   * `public/videos/hero.mp4` and it will pick up automatically.
   *
   * Constraints for the file you drop in:
   *  - <= 6 MB compressed (the user is loading this on mobile)
   *  - 1080p H.264 MP4, muted, 8–15 s loop, no on-screen text
   *  - Soft, slow motion — pipetting / microscope work / cold-storage opens
   *  - If filming people, prefer Indian / South-Asian investigators / CRCs
   *
   * If you don't drop a video in, the poster image below renders instead
   * and the hero still looks intentional.
   */
  src: "/videos/hero.mp4",
  /**
   * Poster fallback (always visible until the video paints, and forever if no
   * video is supplied). Default is a culturally-neutral lab close-up (no
   * identifiable faces). Swap to a photo from the Velnox team or sites when
   * branded shots are ready — recommended: an Indian / South-Asian
   * investigator or CRC at work, framed waist-up at a lab bench.
   */
  poster:
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=2400&q=80",
};

export const SECTION_IMAGERY = {
  // Defaults are culturally-neutral lab / equipment / data imagery (no
  // identifiable faces). Swap to branded photography from the Velnox sites
  // when ready — Indian / South-Asian investigators and CRCs preferred.
  whoWeAre:
    "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1600&q=80", // pipetting close-up
  process:
    "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=1600&q=80", // microscopy
  audiences:
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1600&q=80", // DNA visualisation
  compliance:
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=80", // lab glassware
  experience:
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1600&q=80", // DNA visualisation
  careers:
    "https://images.unsplash.com/photo-1581093458791-9d09f8e4d6a3?auto=format&fit=crop&w=1600&q=80", // lab collaboration
};

/**
 * Per-capability imagery. Keyed by capability slug. Used as the small visual
 * on each capability card. Defaults map to neutral lab / equipment shots —
 * Velnox can swap to branded photography from their own sites.
 */
export const CAPABILITY_IMAGERY: Record<string, string> = {
  "site-readiness":
    "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=80",
  "study-feasibility":
    "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&w=1200&q=80",
  "budget-contracts":
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  "ec-interactions":
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
  "siv-and-startup":
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80",
  "isf-maintenance":
    "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
  "subject-recruitment":
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
  "informed-consent-av":
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
  "study-conduct-source-data":
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  "ip-storage-accountability":
    "https://images.unsplash.com/photo-1631563019676-dade0dbdb8fc?auto=format&fit=crop&w=1200&q=80",
  "specimen-handling-shipping":
    "https://images.unsplash.com/photo-1606206522398-de2c0a7adc81?auto=format&fit=crop&w=1200&q=80",
  "monitoring-closeout-archival":
    "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1200&q=80",
};

/** Therapeutic-area visuals shown on the Experience page. */
export const THERAPEUTIC_IMAGERY: Record<string, string> = {
  oncology:
    "https://images.unsplash.com/photo-1576670263888-a86e8c30e6e8?auto=format&fit=crop&w=1200&q=80",
  cardiology:
    "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=1200&q=80",
  cns:
    "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80",
  infectious:
    "https://images.unsplash.com/photo-1584036561584-d9c87afdb6f7?auto=format&fit=crop&w=1200&q=80",
  devices:
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
  ayush:
    "https://images.unsplash.com/photo-1611072337848-4cbed1f44c30?auto=format&fit=crop&w=1200&q=80",
};
