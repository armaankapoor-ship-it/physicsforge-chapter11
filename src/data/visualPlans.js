export const visualPlans = [
  {
    "id": "photoelectric-graph-1",
    "title": "Dual Nature Idea Visual",
    "category": "Graph",
    "diagramType": "photoelectric-graph",
    "shows": "A self-made SVG visual for Dual Nature Idea showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "E",
      "hf",
      "lambda",
      "h",
      "p"
    ],
    "concept": "Radiation and matter can show wave and particle properties depending on experiment.",
    "removesConfusion": "Do not force one model for all experiments.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write E = hf, lambda = h/p below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"photoelectric-graph\" draws this with free SVG inside React."
  },
  {
    "id": "threshold-graph-2",
    "title": "Photoelectric Effect Visual",
    "category": "Graph",
    "diagramType": "threshold-graph",
    "shows": "A self-made SVG visual for Photoelectric Effect showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "Kmax",
      "hf",
      "phi"
    ],
    "concept": "Light can eject electrons from a metal surface above threshold frequency.",
    "removesConfusion": "No emission below threshold frequency.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write Kmax = hf - phi below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"threshold-graph\" draws this with free SVG inside React."
  },
  {
    "id": "stopping-potential-3",
    "title": "Work Function Visual",
    "category": "Diagram",
    "diagramType": "stopping-potential",
    "shows": "A self-made SVG visual for Work Function showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "phi",
      "h",
      "f0"
    ],
    "concept": "Work function is minimum energy needed to remove electron from metal.",
    "removesConfusion": "Different metals have different work functions.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write phi = h f0 below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"stopping-potential\" draws this with free SVG inside React."
  },
  {
    "id": "photocurrent-curve-4",
    "title": "Threshold Frequency Visual",
    "category": "Graph",
    "diagramType": "photocurrent-curve",
    "shows": "A self-made SVG visual for Threshold Frequency showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "f0",
      "phi",
      "h"
    ],
    "concept": "Threshold frequency is minimum frequency for photoemission.",
    "removesConfusion": "Increasing intensity below f0 does not eject electrons.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write f0 = phi/h below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"photocurrent-curve\" draws this with free SVG inside React."
  },
  {
    "id": "photon-energy-5",
    "title": "Einstein Equation Visual",
    "category": "Diagram",
    "diagramType": "photon-energy",
    "shows": "A self-made SVG visual for Einstein Equation showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "Kmax",
      "hf",
      "phi"
    ],
    "concept": "Maximum kinetic energy equals photon energy minus work function.",
    "removesConfusion": "Frequency controls Kmax.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write Kmax = hf - phi below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"photon-energy\" draws this with free SVG inside React."
  },
  {
    "id": "de-broglie-6",
    "title": "Stopping Potential Visual",
    "category": "Diagram",
    "diagramType": "de-broglie",
    "shows": "A self-made SVG visual for Stopping Potential showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "e",
      "V0",
      "Kmax"
    ],
    "concept": "Stopping potential stops even the fastest photoelectrons.",
    "removesConfusion": "Stopping potential is independent of intensity.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write e V0 = Kmax below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"de-broglie\" draws this with free SVG inside React."
  },
  {
    "id": "matter-wave-7",
    "title": "Photoelectric Current Visual",
    "category": "Diagram",
    "diagramType": "matter-wave",
    "shows": "A self-made SVG visual for Photoelectric Current showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "I_photo",
      "proportional",
      "intensity"
    ],
    "concept": "Photoelectric current depends on intensity when frequency is above threshold.",
    "removesConfusion": "Intensity changes number of electrons, not Kmax.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write I_photo proportional intensity below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"matter-wave\" draws this with free SVG inside React."
  },
  {
    "id": "davisson-germer-8",
    "title": "Saturation Current Visual",
    "category": "Diagram",
    "diagramType": "davisson-germer",
    "shows": "A self-made SVG visual for Saturation Current showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "I_sat",
      "proportional",
      "intensity"
    ],
    "concept": "Saturation current is maximum current when all emitted electrons are collected.",
    "removesConfusion": "Higher intensity means larger saturation current.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write I_sat proportional intensity below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"davisson-germer\" draws this with free SVG inside React."
  },
  {
    "id": "wave-particle-9",
    "title": "Effect of Frequency Visual",
    "category": "Diagram",
    "diagramType": "wave-particle",
    "shows": "A self-made SVG visual for Effect of Frequency showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "V0",
      "h",
      "e",
      "f",
      "phi",
      "e"
    ],
    "concept": "Increasing frequency increases stopping potential and Kmax.",
    "removesConfusion": "Slope of V0-f graph is h/e.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write V0 = (h/e)f - phi/e below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"wave-particle\" draws this with free SVG inside React."
  },
  {
    "id": "trap-map-10",
    "title": "Effect of Intensity Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A self-made SVG visual for Effect of Intensity showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "current",
      "proportional",
      "intensity"
    ],
    "concept": "Increasing intensity increases current but not stopping potential.",
    "removesConfusion": "Only if frequency exceeds threshold.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write current proportional intensity below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" draws this with free SVG inside React."
  },
  {
    "id": "photoelectric-graph-11",
    "title": "Photon Energy Visual",
    "category": "Graph",
    "diagramType": "photoelectric-graph",
    "shows": "A self-made SVG visual for Photon Energy showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "E",
      "hf",
      "hc",
      "lambda"
    ],
    "concept": "Each photon has energy proportional to frequency.",
    "removesConfusion": "Shorter wavelength means higher energy.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write E = hf = hc/lambda below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"photoelectric-graph\" draws this with free SVG inside React."
  },
  {
    "id": "threshold-graph-12",
    "title": "Photon Momentum Visual",
    "category": "Graph",
    "diagramType": "threshold-graph",
    "shows": "A self-made SVG visual for Photon Momentum showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "p",
      "h",
      "lambda"
    ],
    "concept": "Photon momentum is energy divided by speed of light.",
    "removesConfusion": "Photon has momentum despite zero rest mass.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write p = h/lambda below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"threshold-graph\" draws this with free SVG inside React."
  },
  {
    "id": "stopping-potential-13",
    "title": "Particle Nature of Light Visual",
    "category": "Diagram",
    "diagramType": "stopping-potential",
    "shows": "A self-made SVG visual for Particle Nature of Light showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "one",
      "photon",
      ">",
      "one",
      "electron",
      "idea"
    ],
    "concept": "Photoelectric effect supports particle nature of radiation.",
    "removesConfusion": "Energy is delivered in quanta.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write one photon -> one electron idea below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"stopping-potential\" draws this with free SVG inside React."
  },
  {
    "id": "photocurrent-curve-14",
    "title": "Wave Nature of Matter Visual",
    "category": "Graph",
    "diagramType": "photocurrent-curve",
    "shows": "A self-made SVG visual for Wave Nature of Matter showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "lambda",
      "h",
      "p"
    ],
    "concept": "Matter particles have de Broglie wavelength.",
    "removesConfusion": "Large objects have negligible wavelength.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write lambda = h/p below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"photocurrent-curve\" draws this with free SVG inside React."
  },
  {
    "id": "photon-energy-15",
    "title": "de Broglie Wavelength Visual",
    "category": "Diagram",
    "diagramType": "photon-energy",
    "shows": "A self-made SVG visual for de Broglie Wavelength showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "lambda",
      "h",
      "mv"
    ],
    "concept": "Wavelength of matter wave is inversely proportional to momentum.",
    "removesConfusion": "Use momentum, not just mass.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write lambda = h/(mv) below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"photon-energy\" draws this with free SVG inside React."
  },
  {
    "id": "de-broglie-16",
    "title": "Electron Wavelength by Voltage Visual",
    "category": "Diagram",
    "diagramType": "de-broglie",
    "shows": "A self-made SVG visual for Electron Wavelength by Voltage showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "lambda",
      "h",
      "sqrt",
      "2meV"
    ],
    "concept": "Accelerated electron has wavelength depending on voltage.",
    "removesConfusion": "Non-relativistic formula.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write lambda = h/sqrt(2meV) below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"de-broglie\" draws this with free SVG inside React."
  },
  {
    "id": "matter-wave-17",
    "title": "Davisson-Germer Experiment Visual",
    "category": "Diagram",
    "diagramType": "matter-wave",
    "shows": "A self-made SVG visual for Davisson-Germer Experiment showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "2d",
      "sin",
      "theta",
      "n",
      "lambda"
    ],
    "concept": "Electron diffraction by crystal confirms matter waves.",
    "removesConfusion": "It proves wave nature of electrons.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write 2d sin theta = n lambda below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"matter-wave\" draws this with free SVG inside React."
  },
  {
    "id": "davisson-germer-18",
    "title": "Heisenberg Foundation Visual",
    "category": "Diagram",
    "diagramType": "davisson-germer",
    "shows": "A self-made SVG visual for Heisenberg Foundation showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "Delta",
      "x",
      "Delta",
      "p",
      ">",
      "hbar"
    ],
    "concept": "Wave-particle duality leads toward uncertainty ideas.",
    "removesConfusion": "Beyond NCERT depth but useful foundation.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write Delta x Delta p >= hbar/2 below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"davisson-germer\" draws this with free SVG inside React."
  },
  {
    "id": "wave-particle-19",
    "title": "Photocell Visual",
    "category": "Diagram",
    "diagramType": "wave-particle",
    "shows": "A self-made SVG visual for Photocell showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "photoemission",
      "current"
    ],
    "concept": "Photocell converts light signal into electric current.",
    "removesConfusion": "Needs suitable frequency.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write photoemission current below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"wave-particle\" draws this with free SVG inside React."
  },
  {
    "id": "trap-map-20",
    "title": "Graphs of Photoelectric Effect Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A self-made SVG visual for Graphs of Photoelectric Effect showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "slope",
      "h",
      "e"
    ],
    "concept": "Graphs include current-voltage and stopping potential-frequency.",
    "removesConfusion": "Threshold appears as x-intercept.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write slope = h/e below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" draws this with free SVG inside React."
  },
  {
    "id": "photoelectric-graph-21",
    "title": "Threshold Graph Visual",
    "category": "Graph",
    "diagramType": "photoelectric-graph",
    "shows": "A self-made SVG visual for Threshold Graph showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "f",
      "f0"
    ],
    "concept": "Kmax or stopping potential is zero at threshold frequency.",
    "removesConfusion": "Below threshold graph has no emission.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write f = f0 below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"photoelectric-graph\" draws this with free SVG inside React."
  },
  {
    "id": "threshold-graph-22",
    "title": "Intensity Graph Visual",
    "category": "Graph",
    "diagramType": "threshold-graph",
    "shows": "A self-made SVG visual for Intensity Graph showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "I_sat",
      "proportional",
      "intensity"
    ],
    "concept": "Saturation current increases with intensity.",
    "removesConfusion": "Stopping potential stays same for same frequency.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write I_sat proportional intensity below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"threshold-graph\" draws this with free SVG inside React."
  },
  {
    "id": "stopping-potential-23",
    "title": "Frequency Graph Visual",
    "category": "Diagram",
    "diagramType": "stopping-potential",
    "shows": "A self-made SVG visual for Frequency Graph showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "V0",
      "hf",
      "e",
      "phi",
      "e"
    ],
    "concept": "Stopping potential varies linearly with frequency.",
    "removesConfusion": "Slope gives h/e.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write V0 = hf/e - phi/e below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"stopping-potential\" draws this with free SVG inside React."
  },
  {
    "id": "photocurrent-curve-24",
    "title": "Photon vs Wave Model Visual",
    "category": "Graph",
    "diagramType": "photocurrent-curve",
    "shows": "A self-made SVG visual for Photon vs Wave Model showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "duality"
    ],
    "concept": "Different experiments reveal different aspects.",
    "removesConfusion": "Interference is wave-like; photoelectric is particle-like.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write duality below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"photocurrent-curve\" draws this with free SVG inside React."
  },
  {
    "id": "photon-energy-25",
    "title": "Energy Unit eV Visual",
    "category": "Diagram",
    "diagramType": "photon-energy",
    "shows": "A self-made SVG visual for Energy Unit eV showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "1",
      "eV",
      "1.6",
      "x",
      "10",
      "19"
    ],
    "concept": "Electronvolt is energy gained by electron through 1 volt.",
    "removesConfusion": "Do not treat eV as voltage.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write 1 eV = 1.6 x 10^-19 J below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"photon-energy\" draws this with free SVG inside React."
  },
  {
    "id": "de-broglie-26",
    "title": "Formula Mastery Visual",
    "category": "Diagram",
    "diagramType": "de-broglie",
    "shows": "A self-made SVG visual for Formula Mastery showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "hf",
      "phi",
      "Kmax",
      "lambda"
    ],
    "concept": "Dual nature needs energy conservation and photon model.",
    "removesConfusion": "Keep J and eV consistent.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write hf, phi, Kmax, lambda below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"de-broglie\" draws this with free SVG inside React."
  },
  {
    "id": "matter-wave-27",
    "title": "Common Conceptual Traps Visual",
    "category": "Diagram",
    "diagramType": "matter-wave",
    "shows": "A self-made SVG visual for Common Conceptual Traps showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "check",
      "f>f0"
    ],
    "concept": "Traps involve intensity vs frequency and threshold condition.",
    "removesConfusion": "Intensity below threshold cannot cause emission.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write check f>f0 below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"matter-wave\" draws this with free SVG inside React."
  },
  {
    "id": "davisson-germer-28",
    "title": "Board Derivation Focus Visual",
    "category": "Diagram",
    "diagramType": "davisson-germer",
    "shows": "A self-made SVG visual for Board Derivation Focus showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "derive",
      "Kmax",
      "lambda"
    ],
    "concept": "Boards emphasize Einstein equation, graphs and de Broglie relation.",
    "removesConfusion": "Explain physical meaning after equation.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write derive Kmax, lambda below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"davisson-germer\" draws this with free SVG inside React."
  },
  {
    "id": "wave-particle-29",
    "title": "JEE and NEET Graph Focus Visual",
    "category": "Diagram",
    "diagramType": "wave-particle",
    "shows": "A self-made SVG visual for JEE and NEET Graph Focus showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "V0",
      "f",
      "I",
      "V"
    ],
    "concept": "Competitive questions use stopping potential graphs and wavelength-voltage numericals.",
    "removesConfusion": "Graph intercept gives work function.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write V0-f, I-V below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"wave-particle\" draws this with free SVG inside React."
  },
  {
    "id": "trap-map-30",
    "title": "Final Revision Section Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A self-made SVG visual for Final Revision Section showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "top",
      "formulas",
      "traps"
    ],
    "concept": "Final revision compresses photons, photoelectric effect and matter waves.",
    "removesConfusion": "Ask frequency or intensity? before solving.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write top formulas + traps below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" draws this with free SVG inside React."
  }
]
