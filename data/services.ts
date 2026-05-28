export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  price: string;
  category: string;
}

export const services: Service[] = [
  {
    id: "1",
    slug: "household-shifting",
    title: "Household Shifting",
    shortDescription:
      "Complete home relocation services with expert packing and safe transportation of all your belongings.",
    fullDescription:
      "Our household shifting service provides end-to-end moving solutions. From careful packing of fragile items to safe transportation and unpacking at your new home, we handle everything with utmost care.",
    icon: "Home",
    features: [
      "Professional packing team",
      "Furniture disassembly & reassembly",
      "Fragile item special care",
      "Real-time GPS tracking",
      "Insurance coverage",
      "Unpacking assistance",
    ],
    price: "Starting ₹5,000",
    category: "residential",
  },
  {
    id: "2",
    slug: "office-relocation",
    title: "Office Relocation",
    shortDescription:
      "Seamless office shifting with minimal downtime. We relocate your business professionally.",
    fullDescription:
      "Our office relocation experts ensure your business moves with zero disruption. We plan every detail — IT equipment, furniture, documents — for a smooth transition.",
    icon: "Building2",
    features: [
      "Dedicated project manager",
      "IT equipment handling",
      "Document management",
      "After-hours moving",
      "Floor plan setup",
      "Business continuity focus",
    ],
    price: "Starting ₹15,000",
    category: "commercial",
  },
  {
    id: "3",
    slug: "local-shifting",
    title: "Local Shifting",
    shortDescription:
      "Quick and reliable local moving services within the city at affordable rates.",
    fullDescription:
      "Moving within the same city? Our local shifting team ensures a fast, affordable, and stress-free experience with same-day or next-day service options.",
    icon: "MapPin",
    features: [
      "Same-day service available",
      "Hourly pricing",
      "Experienced local team",
      "No hidden charges",
      "Quick turnaround",
      "Full packing available",
    ],
    price: "Starting ₹2,500",
    category: "residential",
  },
  {
    id: "4",
    slug: "domestic-relocation",
    title: "Domestic Relocation",
    shortDescription:
      "Pan-India relocation services covering all major cities and towns safely.",
    fullDescription:
      "Relocating to another state? Our domestic relocation services cover the entire country with secure transportation, real-time tracking, and door-to-door delivery.",
    icon: "Globe",
    features: [
      "Pan-India coverage",
      "Door-to-door delivery",
      "GPS tracking",
      "Transit insurance",
      "Dedicated vehicle",
      "Customer support 24/7",
    ],
    price: "Starting ₹8,000",
    category: "residential",
  },
  {
    id: "5",
    slug: "car-transportation",
    title: "Car Transportation",
    shortDescription:
      "Safe and secure car transportation across India using enclosed carriers.",
    fullDescription:
      "We transport your car safely using specialized car carrier trucks. Your vehicle is loaded carefully, secured properly, and delivered in perfect condition.",
    icon: "Car",
    features: [
      "Enclosed car carriers",
      "Zero damage guarantee",
      "Insurance coverage",
      "Door pickup & delivery",
      "GPS tracking",
      "Experienced handlers",
    ],
    price: "Starting ₹6,000",
    category: "vehicle",
  },
  {
    id: "6",
    slug: "bike-transportation",
    title: "Bike Transportation",
    shortDescription:
      "Reliable two-wheeler transportation with secure packaging and timely delivery.",
    fullDescription:
      "Your motorcycle is packed securely and transported on specialized carriers. We ensure your bike reaches the destination scratch-free and on time.",
    icon: "Bike",
    features: [
      "Secure packaging",
      "Specialized carriers",
      "Insurance available",
      "Quick delivery",
      "Pan-India service",
      "Door pickup",
    ],
    price: "Starting ₹2,000",
    category: "vehicle",
  },
  {
    id: "7",
    slug: "packing-unpacking",
    title: "Packing & Unpacking",
    shortDescription:
      "Expert packing services using quality materials to protect all your valuables.",
    fullDescription:
      "Our trained packing team uses high-quality bubble wrap, corrugated boxes, and specialized materials to ensure every item is packed safely and organized for easy unpacking.",
    icon: "Package",
    features: [
      "Quality packing materials",
      "Labeling & inventory",
      "Fragile item expertise",
      "Electronics packing",
      "Artwork handling",
      "Systematic unpacking",
    ],
    price: "Starting ₹1,500",
    category: "additional",
  },
  {
    id: "8",
    slug: "loading-unloading",
    title: "Loading & Unloading",
    shortDescription:
      "Professional loading and unloading services with trained labor teams.",
    fullDescription:
      "Our trained labor teams handle loading and unloading with care and efficiency. We use proper equipment and techniques to prevent damage to your belongings.",
    icon: "ArrowUpDown",
    features: [
      "Trained labor team",
      "Proper equipment",
      "Fast service",
      "Heavy item handling",
      "Staircase assistance",
      "Affordable rates",
    ],
    price: "Starting ₹1,000",
    category: "additional",
  },
  {
    id: "9",
    slug: "warehouse-storage",
    title: "Warehouse & Storage",
    shortDescription:
      "Secure, climate-controlled storage solutions for short or long-term needs.",
    fullDescription:
      "Our state-of-the-art warehouses offer secure, clean, and climate-controlled storage. Whether you need short-term transit storage or long-term solutions, we have you covered.",
    icon: "Warehouse",
    features: [
      "24/7 security",
      "Climate controlled",
      "CCTV surveillance",
      "Flexible duration",
      "Easy access",
      "Inventory management",
    ],
    price: "Starting ₹3,000/month",
    category: "additional",
  },
  {
    id: "10",
    slug: "commercial-goods-shifting",
    title: "Commercial Goods Shifting",
    shortDescription:
      "Bulk commercial goods transportation with specialized logistics solutions.",
    fullDescription:
      "We handle commercial goods relocation for businesses of all sizes. From retail stores to factories, our logistics team ensures safe and timely delivery of all commercial assets.",
    icon: "Truck",
    features: [
      "Bulk handling",
      "Specialized vehicles",
      "Commercial insurance",
      "Scheduled deliveries",
      "Inventory tracking",
      "Pan-India coverage",
    ],
    price: "Custom Pricing",
    category: "commercial",
  },
];

export const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "vehicle", label: "Vehicle" },
  { id: "additional", label: "Additional" },
];
