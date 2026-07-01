export const models3d = {
  "repo": "physicsforge-chapter11",
  "chapterNumber": 11,
  "chapterName": "Dual Nature of Radiation and Matter",
  "shortName": "Dual Nature",
  "count": 20,
  "models": [
    {
      "id": "model-01",
      "number": 1,
      "title": "Photoelectric Metal Plate",
      "kind": "photoelectric",
      "formula": "Kmax = hf - phi",
      "concept": "Photons eject electrons when their energy exceeds work function.",
      "exam": "Intensity cannot eject electrons below threshold frequency.",
      "labels": [
        "photon",
        "metal",
        "electron"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-02",
      "number": 2,
      "title": "Stopping Potential Chamber",
      "kind": "photoelectric",
      "formula": "eV0 = Kmax",
      "concept": "A reverse potential just stops the fastest photoelectrons.",
      "exam": "Stopping potential depends on frequency, not intensity.",
      "labels": [
        "collector",
        "retarding V",
        "stopped electron"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-03",
      "number": 3,
      "title": "Threshold Frequency Gate",
      "kind": "energy-level",
      "formula": "f0 = phi/h",
      "concept": "Below threshold, electrons remain bound.",
      "exam": "Increasing intensity below threshold still gives no emission.",
      "labels": [
        "bound electron",
        "threshold",
        "no emission"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-04",
      "number": 4,
      "title": "Photocurrent Saturation",
      "kind": "circuit",
      "formula": "current vs voltage",
      "concept": "Collector voltage gathers more emitted electrons until saturation.",
      "exam": "Saturation current increases with intensity.",
      "labels": [
        "emitter",
        "collector",
        "current"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-05",
      "number": 5,
      "title": "Intensity Photon Shower",
      "kind": "photoelectric",
      "formula": "I proportional photons/second",
      "concept": "Higher intensity sends more photons per second.",
      "exam": "Energy of each photon is set by frequency.",
      "labels": [
        "low intensity",
        "high intensity",
        "same energy"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-06",
      "number": 6,
      "title": "Photon Energy Ladder",
      "kind": "energy-level",
      "formula": "E = hf = hc/lambda",
      "concept": "Shorter wavelength corresponds to higher photon energy.",
      "exam": "Use eV conversion carefully.",
      "labels": [
        "red photon",
        "blue photon",
        "energy"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-07",
      "number": 7,
      "title": "de Broglie Matter Wave",
      "kind": "wave",
      "formula": "lambda = h/p",
      "concept": "A moving particle has a wave associated with its momentum.",
      "exam": "Higher momentum gives smaller wavelength.",
      "labels": [
        "particle",
        "wave packet",
        "lambda"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-08",
      "number": 8,
      "title": "Electron Accelerated by Voltage",
      "kind": "atom",
      "formula": "lambda = 1.227/sqrt(V) nm",
      "concept": "Voltage increases electron momentum and reduces wavelength.",
      "exam": "Formula assumes non-relativistic electron.",
      "labels": [
        "electron gun",
        "voltage",
        "wave"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-09",
      "number": 9,
      "title": "Davisson Germer Crystal",
      "kind": "interference",
      "formula": "Bragg diffraction",
      "concept": "Electron diffraction from crystal confirms matter waves.",
      "exam": "Diffraction proves wave nature of electrons.",
      "labels": [
        "electron beam",
        "crystal",
        "detector"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-10",
      "number": 10,
      "title": "Wave Particle Duality Balance",
      "kind": "phasor",
      "formula": "dual nature",
      "concept": "Experiments reveal wave or particle aspects depending on setup.",
      "exam": "Do not say electron is only a wave or only a particle.",
      "labels": [
        "wave test",
        "particle test",
        "duality"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-11",
      "number": 11,
      "title": "Millikan Photoelectric Graph",
      "kind": "resonance",
      "formula": "slope = h/e",
      "concept": "Stopping potential versus frequency is a straight line.",
      "exam": "Intercept gives threshold frequency.",
      "labels": [
        "slope",
        "intercept",
        "V0"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-12",
      "number": 12,
      "title": "Work Function Surface",
      "kind": "thermal",
      "formula": "phi material dependent",
      "concept": "Different metals need different minimum photon energy.",
      "exam": "Changing metal changes threshold frequency.",
      "labels": [
        "metal A",
        "metal B",
        "escape energy"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-13",
      "number": 13,
      "title": "Pair of Photon Beams",
      "kind": "wave",
      "formula": "same intensity different f",
      "concept": "Equal intensity beams can have different photon counts.",
      "exam": "Photon count depends on energy per photon.",
      "labels": [
        "low f many photons",
        "high f fewer photons",
        "same power"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-14",
      "number": 14,
      "title": "Momentum of Photon",
      "kind": "phasor",
      "formula": "p = h/lambda",
      "concept": "Photons carry momentum despite zero rest mass.",
      "exam": "Momentum increases as wavelength decreases.",
      "labels": [
        "photon",
        "momentum",
        "pressure"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-15",
      "number": 15,
      "title": "Compton Concept Preview",
      "kind": "photoelectric",
      "formula": "photon collision",
      "concept": "Photon-particle collision ideas support photon momentum.",
      "exam": "This is conceptual enrichment for JEE foundation.",
      "labels": [
        "incoming photon",
        "electron",
        "scattered photon"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-16",
      "number": 16,
      "title": "Electron Microscope Link",
      "kind": "optics",
      "formula": "small lambda improves resolution",
      "concept": "Matter waves allow electron microscopes to resolve tiny structures.",
      "exam": "Higher accelerating voltage improves resolution.",
      "labels": [
        "electron lens",
        "sample",
        "image"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-17",
      "number": 17,
      "title": "Probability Wave Packet",
      "kind": "wave",
      "formula": "matter wave packet",
      "concept": "Matter waves describe probability amplitude rather than a material ripple.",
      "exam": "Do not picture electron as a classical water wave.",
      "labels": [
        "packet",
        "particle",
        "spread"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-18",
      "number": 18,
      "title": "Quantized Light Counter",
      "kind": "atom",
      "formula": "energy packets",
      "concept": "Light energy is absorbed and emitted in quanta.",
      "exam": "One photon interacts as one packet.",
      "labels": [
        "photon 1",
        "photon 2",
        "absorber"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-19",
      "number": 19,
      "title": "Emission Delay Test",
      "kind": "photoelectric",
      "formula": "instant emission",
      "concept": "Photoelectric emission is nearly instantaneous above threshold.",
      "exam": "Classical wave theory predicted delay, which failed.",
      "labels": [
        "incident light",
        "electron",
        "no delay"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-20",
      "number": 20,
      "title": "Dual Nature Summary Lab",
      "kind": "default",
      "formula": "radiation and matter duality",
      "concept": "The model connects photoelectric effect, diffraction and matter waves.",
      "exam": "Match experiment to nature being tested.",
      "labels": [
        "photoelectric",
        "diffraction",
        "de Broglie"
      ],
      "color": "#7c3aed"
    }
  ]
}
