export const formulas = [
  {
    "id": "photon-energy",
    "title": "Photon Energy",
    "formula": "E = hf",
    "display": "E = hf",
    "symbols": [
      [
        "E",
        "photon energy",
        "J"
      ],
      [
        "h",
        "Planck constant",
        "J s"
      ],
      [
        "f",
        "frequency",
        "Hz"
      ]
    ],
    "meaning": "Energy of one photon.",
    "dimension": "J",
    "graph": "E grows with frequency.",
    "trap": "Intensity is number of photons, not energy per photon.",
    "easyExample": "Easy example: substitute correctly in E = hf after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Energy of one photon.\".",
    "jeeExample": "JEE Main pattern: combine E = hf with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Intensity is number of photons, not energy per photon."
  },
  {
    "id": "photon-lambda",
    "title": "Photon Energy by Wavelength",
    "formula": "E = hc/lambda",
    "display": "E = hc/lambda",
    "symbols": [
      [
        "lambda",
        "wavelength",
        "m"
      ]
    ],
    "meaning": "Shorter wavelength means higher photon energy.",
    "dimension": "J",
    "graph": "E-lambda inverse.",
    "trap": "Use SI or eV-nm conversion carefully.",
    "easyExample": "Easy example: substitute correctly in E = hc/lambda after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Shorter wavelength means higher photon energy.\".",
    "jeeExample": "JEE Main pattern: combine E = hc/lambda with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Use SI or eV-nm conversion carefully."
  },
  {
    "id": "work-function",
    "title": "Work Function",
    "formula": "phi = h f0",
    "display": "phi = h f0",
    "symbols": [
      [
        "phi",
        "work function",
        "J/eV"
      ],
      [
        "f0",
        "threshold frequency",
        "Hz"
      ]
    ],
    "meaning": "Minimum removal energy.",
    "dimension": "J",
    "graph": "phi depends on metal.",
    "trap": "Different metals differ.",
    "easyExample": "Easy example: substitute correctly in phi = h f0 after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Minimum removal energy.\".",
    "jeeExample": "JEE Main pattern: combine phi = h f0 with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Different metals differ."
  },
  {
    "id": "threshold",
    "title": "Threshold Frequency",
    "formula": "f0 = phi/h",
    "display": "f0 = phi/h",
    "symbols": [
      [
        "f0",
        "threshold frequency",
        "Hz"
      ]
    ],
    "meaning": "Minimum frequency for emission.",
    "dimension": "Hz",
    "graph": "Higher phi means higher f0.",
    "trap": "Intensity cannot replace frequency.",
    "easyExample": "Easy example: substitute correctly in f0 = phi/h after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Minimum frequency for emission.\".",
    "jeeExample": "JEE Main pattern: combine f0 = phi/h with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Intensity cannot replace frequency."
  },
  {
    "id": "einstein",
    "title": "Einstein Photoelectric Equation",
    "formula": "Kmax = hf - phi",
    "display": "Kmax = hf - phi",
    "symbols": [
      [
        "Kmax",
        "maximum kinetic energy",
        "J/eV"
      ]
    ],
    "meaning": "Energy conservation for photoemission.",
    "dimension": "J",
    "graph": "Kmax-f straight line.",
    "trap": "Only valid above threshold.",
    "easyExample": "Easy example: substitute correctly in Kmax = hf - phi after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Energy conservation for photoemission.\".",
    "jeeExample": "JEE Main pattern: combine Kmax = hf - phi with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Only valid above threshold."
  },
  {
    "id": "stopping",
    "title": "Stopping Potential",
    "formula": "eV0 = Kmax",
    "display": "eV0 = Kmax",
    "symbols": [
      [
        "V0",
        "stopping potential",
        "V"
      ]
    ],
    "meaning": "Stopping potential measures maximum kinetic energy per charge.",
    "dimension": "C V = J",
    "graph": "V0-f graph is straight.",
    "trap": "Independent of intensity.",
    "easyExample": "Easy example: substitute correctly in eV0 = Kmax after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Stopping potential measures maximum kinetic energy per charge.\".",
    "jeeExample": "JEE Main pattern: combine eV0 = Kmax with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Independent of intensity."
  },
  {
    "id": "v0-f",
    "title": "Stopping Potential Graph",
    "formula": "V0 = (h/e)f - phi/e",
    "display": "V0 = (h/e)f - phi/e",
    "symbols": [
      [
        "e",
        "elementary charge",
        "C"
      ]
    ],
    "meaning": "Linear graph of stopping potential vs frequency.",
    "dimension": "V",
    "graph": "Slope h/e, intercept -phi/e.",
    "trap": "X-intercept is f0.",
    "easyExample": "Easy example: substitute correctly in V0 = (h/e)f - phi/e after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Linear graph of stopping potential vs frequency.\".",
    "jeeExample": "JEE Main pattern: combine V0 = (h/e)f - phi/e with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: X-intercept is f0."
  },
  {
    "id": "photon-momentum",
    "title": "Photon Momentum",
    "formula": "p = h/lambda",
    "display": "p = h/lambda",
    "symbols": [
      [
        "p",
        "momentum",
        "kg m s^-1"
      ]
    ],
    "meaning": "Photon carries momentum.",
    "dimension": "kg m/s",
    "graph": "p-lambda inverse.",
    "trap": "Photon rest mass is zero.",
    "easyExample": "Easy example: substitute correctly in p = h/lambda after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Photon carries momentum.\".",
    "jeeExample": "JEE Main pattern: combine p = h/lambda with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Photon rest mass is zero."
  },
  {
    "id": "de-broglie",
    "title": "de Broglie Wavelength",
    "formula": "lambda = h/p",
    "display": "lambda = h/p",
    "symbols": [
      [
        "p",
        "particle momentum",
        "kg m s^-1"
      ]
    ],
    "meaning": "Matter wavelength.",
    "dimension": "m",
    "graph": "lambda decreases with momentum.",
    "trap": "Macroscopic wavelength tiny.",
    "easyExample": "Easy example: substitute correctly in lambda = h/p after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Matter wavelength.\".",
    "jeeExample": "JEE Main pattern: combine lambda = h/p with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Macroscopic wavelength tiny."
  },
  {
    "id": "mv-wave",
    "title": "Matter Wave for Speed",
    "formula": "lambda = h/(mv)",
    "display": "lambda = h/(mv)",
    "symbols": [
      [
        "m",
        "mass",
        "kg"
      ],
      [
        "v",
        "speed",
        "m/s"
      ]
    ],
    "meaning": "Non-relativistic matter wave.",
    "dimension": "m",
    "graph": "Faster particle, smaller wavelength.",
    "trap": "Use momentum if speed changes.",
    "easyExample": "Easy example: substitute correctly in lambda = h/(mv) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Non-relativistic matter wave.\".",
    "jeeExample": "JEE Main pattern: combine lambda = h/(mv) with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Use momentum if speed changes."
  },
  {
    "id": "electron-voltage",
    "title": "Electron Wavelength by Voltage",
    "formula": "lambda = h/sqrt(2meV)",
    "display": "lambda = h/sqrt(2meV)",
    "symbols": [
      [
        "V",
        "accelerating voltage",
        "V"
      ]
    ],
    "meaning": "Wavelength of accelerated electron.",
    "dimension": "m",
    "graph": "lambda inverse sqrt V.",
    "trap": "Non-relativistic.",
    "easyExample": "Easy example: substitute correctly in lambda = h/sqrt(2meV) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Wavelength of accelerated electron.\".",
    "jeeExample": "JEE Main pattern: combine lambda = h/sqrt(2meV) with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Non-relativistic."
  },
  {
    "id": "bragg",
    "title": "Bragg Condition",
    "formula": "2d sin theta = n lambda",
    "display": "2d sin theta = n lambda",
    "symbols": [
      [
        "d",
        "crystal spacing",
        "m"
      ],
      [
        "theta",
        "glancing angle",
        "degree"
      ]
    ],
    "meaning": "Diffraction condition for electron waves.",
    "dimension": "m",
    "graph": "Peak at constructive condition.",
    "trap": "Angle definition matters.",
    "easyExample": "Easy example: substitute correctly in 2d sin theta = n lambda after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Diffraction condition for electron waves.\".",
    "jeeExample": "JEE Main pattern: combine 2d sin theta = n lambda with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Angle definition matters."
  },
  {
    "id": "ev",
    "title": "Electronvolt",
    "formula": "1 eV = 1.6 x 10^-19 J",
    "display": "1 eV = 1.6 x 10^-19 J",
    "symbols": [
      [
        "eV",
        "energy unit",
        "J"
      ]
    ],
    "meaning": "Convenient atomic energy unit.",
    "dimension": "J",
    "graph": "Conversion factor.",
    "trap": "eV is not volt.",
    "easyExample": "Easy example: substitute correctly in 1 eV = 1.6 x 10^-19 J after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Convenient atomic energy unit.\".",
    "jeeExample": "JEE Main pattern: combine 1 eV = 1.6 x 10^-19 J with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: eV is not volt."
  }
]

export const formulaGroups = [
  {
    "title": "Photoelectric effect",
    "formulas": [
      "photon-energy",
      "photon-lambda",
      "work-function",
      "threshold",
      "einstein"
    ]
  },
  {
    "title": "Photons",
    "formulas": [
      "stopping",
      "v0-f",
      "photon-momentum",
      "de-broglie",
      "mv-wave"
    ]
  },
  {
    "title": "Matter waves",
    "formulas": [
      "electron-voltage",
      "bragg",
      "ev"
    ]
  },
  {
    "title": "Evidence",
    "formulas": []
  }
]

