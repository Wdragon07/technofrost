export type IconName =
  | "airVent"
  | "refrigerator"
  | "washingMachine"
  | "cog"
  | "car"
  | "packageCheck"
  | "wrench"
  | "showerHead"
  | "mapPin"
  | "badge"
  | "snowflake"
  | "clipboard"
  | "search"
  | "phone"
  | "message"
  | "mail";

export type Service = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  mark: string;
  icon: IconName;
  image: string;
  shortDescription: string;
  description: string;
  details: string[];
  commonIssues: string[];
  suitableFor: string[];
  href: string;
};

type ProcessStep = {
  title: string;
  description: string;
  icon: IconName;
};

export const services: Service[] = [
  {
    slug: "ac-installation-service",
    title: "A/C Installation & Service",
    seoTitle: "A/C Installation & Service in Kalpitiya",
    seoDescription:
      "Book air conditioner installation, cleaning, servicing, cooling checks, and repair support for homes and businesses in Kalpitiya.",
    mark: "AC",
    icon: "airVent",
    image: "/images/services/ac-installation-service.webp",
    shortDescription: "Installation, servicing, cleaning, and cooling performance checks.",
    description:
      "Professional air conditioner installation, routine servicing, cleaning, and troubleshooting for homes, shops, offices, and small commercial spaces.",
    details: [
      "A/C installation and re-installation support",
      "Normal service, pumpdown service, and cooling checks",
      "Gas leak inspection and repair guidance",
    ],
    commonIssues: [
      "Weak or uneven cooling",
      "Water leaking from the indoor unit",
      "Unusual noise or odour",
      "Installation or relocation requirements",
    ],
    suitableFor: ["Homes and apartments", "Shops and offices", "Small commercial spaces"],
    href: "/services/ac-installation-service",
  },
  {
    slug: "deep-freezer-repair",
    title: "Deep Freezer Repair",
    seoTitle: "Deep Freezer Repair in Kalpitiya",
    seoDescription:
      "Request deep freezer inspection and repair support for cooling loss, temperature problems, gas checks, and parts in Kalpitiya.",
    mark: "DF",
    icon: "snowflake",
    image: "/images/services/deep-freezer-repair.webp",
    shortDescription: "Cooling loss, compressor issues, gas checks, and inspection visits.",
    description:
      "Repair and inspection support for deep freezers used by homes, retailers, restaurants, and small businesses.",
    details: [
      "Cooling and temperature issue checks",
      "Gas leak inspection and repair guidance",
      "Parts replacement support where available",
    ],
    commonIssues: [
      "Freezer not reaching the set temperature",
      "Compressor or starting problems",
      "Excess frost or poor air circulation",
      "Possible refrigerant leaks",
    ],
    suitableFor: ["Homes", "Retail shops", "Restaurants and small businesses"],
    href: "/services/deep-freezer-repair",
  },
  {
    slug: "refrigerator-repair",
    title: "Refrigerator Repair",
    seoTitle: "Refrigerator Repair in Kalpitiya",
    seoDescription:
      "Get refrigerator troubleshooting and repair support for poor cooling, leaks, noise, thermostat faults, and gas issues in Kalpitiya.",
    mark: "RF",
    icon: "refrigerator",
    image: "/images/services/refrigerator-repair.webp",
    shortDescription: "Reliable refrigerator troubleshooting, repair, and maintenance.",
    description:
      "Support for common refrigerator issues including poor cooling, water leaks, noise, thermostat faults, and gas-related problems.",
    details: [
      "Single-door and double-door refrigerator support",
      "Gas leak checks and gas charge guidance",
      "Parts replacement and general repair support",
    ],
    commonIssues: [
      "Refrigerator not cooling properly",
      "Water leaking inside or underneath",
      "Unusual compressor or fan noise",
      "Thermostat and temperature-control faults",
    ],
    suitableFor: ["Single-door refrigerators", "Double-door refrigerators", "Home and shop use"],
    href: "/services/refrigerator-repair",
  },
  {
    slug: "washing-machine-repair",
    title: "Washing Machine Repair",
    seoTitle: "Washing Machine Repair in Kalpitiya",
    seoDescription:
      "Arrange washing machine inspection and repair for draining, spinning, noise, power, installation, and parts issues in Kalpitiya.",
    mark: "WM",
    icon: "washingMachine",
    image: "/images/services/washing-machine-repair.webp",
    shortDescription: "Inspection and repair for washing, draining, spinning, and power issues.",
    description:
      "Washing machine service visits for home customers, including inspection of drainage, spinning, electrical, and mechanical faults.",
    details: [
      "Top-load and front-load support",
      "Installation and parts replacement support",
      "Drainage, spinning, noise, and general repair checks",
    ],
    commonIssues: [
      "Machine not draining or spinning",
      "Power or control problems",
      "Water filling or leaking issues",
      "Excessive vibration or noise",
    ],
    suitableFor: ["Top-load washing machines", "Front-load washing machines", "Home appliance users"],
    href: "/services/washing-machine-repair",
  },
  {
    slug: "hot-water-shower-repair",
    title: "Hot Water Shower Repair",
    seoTitle: "Hot Water Shower Repair in Kalpitiya",
    seoDescription:
      "Request hot water shower installation, re-installation, parts replacement, and repair support in Kalpitiya and nearby areas.",
    mark: "HW",
    icon: "showerHead",
    image: "/images/services/hot-water-shower-repair.webp",
    shortDescription: "Installation, re-installation, parts replacement, and repair support.",
    description:
      "Service support for hot water shower installation, dismantling and re-installation, parts replacement, and related repair needs.",
    details: [
      "Hot water shower installation support",
      "Dismantling and re-installation guidance",
      "Parts replacement and general repair support",
    ],
    commonIssues: [
      "Water not heating correctly",
      "Inconsistent temperature or flow",
      "Replacement-part requirements",
      "Dismantling and re-installation needs",
    ],
    suitableFor: ["Homes and apartments", "Replacement installations", "Existing shower units"],
    href: "/services/hot-water-shower-repair",
  },
  {
    slug: "spare-parts",
    title: "Spare Parts",
    seoTitle: "A/C & Appliance Spare Parts in Kalpitiya",
    seoDescription:
      "Find selected A/C, refrigerator, freezer, and washing machine spare parts with part-matching guidance in Kalpitiya.",
    mark: "SP",
    icon: "packageCheck",
    image: "/images/services/spare-parts.webp",
    shortDescription: "Selected appliance and cooling spare parts with service guidance.",
    description:
      "Spare part guidance and selected replacement support for cooling, refrigeration, and appliance service work.",
    details: [
      "A/C, refrigerator, freezer, and washer parts",
      "Part matching support",
      "Genuine replacement guidance where available",
    ],
    commonIssues: [
      "Identifying a compatible replacement part",
      "Checking part availability",
      "Matching appliance brand and model details",
      "Planning part replacement with service support",
    ],
    suitableFor: ["A/C systems", "Refrigerators and freezers", "Washing machines"],
    href: "/services/spare-parts",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const processSteps: ProcessStep[] = [
  {
    title: "Contact Us",
    description: "Call, WhatsApp, or send a service request with your appliance issue.",
    icon: "clipboard",
  },
  {
    title: "Explain the Issue",
    description: "Share the model, symptoms, and location so we can prepare properly.",
    icon: "search",
  },
  {
    title: "Technician Visit",
    description: "A technician inspects the equipment and explains the recommended work.",
    icon: "wrench",
  },
  {
    title: "Service Completion",
    description: "Repair or service is completed with practical care advice.",
    icon: "badge",
  },
];

export const faqs = [
  {
    question: "How do I book a service?",
    answer:
      "You can call TECHNOFROST, send a WhatsApp message, or submit the contact form with your name, phone number, service type, and issue details.",
  },
  {
    question: "Do you repair refrigerators and freezers?",
    answer:
      "Yes. TECHNOFROST supports refrigerator repair, deep freezer inspection, cooling checks, and related spare part guidance.",
  },
  {
    question: "Can I contact through WhatsApp?",
    answer:
      "Yes. WhatsApp is available for quick service requests, issue photos, location sharing, and booking coordination.",
  },
  {
    question: "Do you provide spare parts?",
    answer:
      "Selected spare parts and part guidance are available for supported A/C, refrigeration, washing machine, and appliance services.",
  },
];
