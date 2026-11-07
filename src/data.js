// Static pricing and step data. Prices are whole dollars per month/year.

export const PLAN_PRICES = {
  monthly: { arcade: 9, advanced: 12, pro: 15 },
  yearly: { arcade: 90, advanced: 120, pro: 150 },
};

export const ADD_ON_PRICES = {
  monthly: {
    "online service": 1,
    "larger storage": 2,
    "customizable profile": 2,
  },
  yearly: {
    "online service": 10,
    "larger storage": 20,
    "customizable profile": 20,
  },
};

export const PLANS = [
  { id: "arcade", label: "Arcade" },
  { id: "advanced", label: "Advanced" },
  { id: "pro", label: "Pro" },
];

export const ADD_ONS = [
  {
    name: "online service",
    inputId: "online-service",
    label: "Online service",
    description: "Access to multiplayer games",
  },
  {
    name: "larger storage",
    inputId: "larger-storage",
    label: "Larger storage",
    description: "Extra 1TB of cloud save",
  },
  {
    name: "customizable profile",
    inputId: "customize-profile",
    label: "Customizable profile",
    description: "Custom theme on your profile",
  },
];

// Order of the wizard; the sidebar shows the first four.
export const PAGE_ORDER = [
  "personalInfo",
  "selectPlan",
  "addOns",
  "finishingUp",
  "thanks",
];

export const STEPS = [
  { title: "YOUR INFO", pages: ["personalInfo"] },
  { title: "SELECT PLAN", pages: ["selectPlan"] },
  { title: "ADD-ONS", pages: ["addOns"] },
  { title: "SUMMARY", pages: ["finishingUp", "thanks"] },
];

export const cycleSuffix = (cycle) => (cycle === "monthly" ? "mo" : "yr");
