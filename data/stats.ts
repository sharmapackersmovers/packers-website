export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

export const stats: Stat[] = [
  {
    id: "1",
    value: 25000,
    suffix: "+",
    label: "Happy Customers",
    description: "Satisfied families and businesses served",
    icon: "Users",
  },
  {
    id: "2",
    value: 500,
    suffix: "+",
    label: "Cities Served",
    description: "Pan-India coverage across all states",
    icon: "MapPin",
  },
  {
    id: "3",
    value: 50000,
    suffix: "+",
    label: "Deliveries Completed",
    description: "Successful relocations completed",
    icon: "Package",
  },
  {
    id: "4",
    value: 15,
    suffix: "+",
    label: "Years of Experience",
    description: "Trusted logistics partner since 2009",
    icon: "Award",
  },
];

export const companyTimeline = [
  {
    year: "2009",
    title: "Company Founded",
    description:
      "Sharma Packers & Movers was established in Delhi with a small team of 5 dedicated professionals.",
  },
  {
    year: "2012",
    title: "Expanded to 10 Cities",
    description:
      "Rapid growth allowed us to expand our services to 10 major cities across North India.",
  },
  {
    year: "2015",
    title: "Pan-India Operations",
    description:
      "Launched nationwide operations covering 100+ cities. Introduced GPS tracking for all shipments.",
  },
  {
    year: "2018",
    title: "10,000 Happy Customers",
    description:
      "Milestone achievement of serving 10,000 satisfied customers. Launched vehicle transportation services.",
  },
  {
    year: "2021",
    title: "Digital Transformation",
    description:
      "Launched online booking platform and real-time tracking app. Expanded warehouse network.",
  },
  {
    year: "2024",
    title: "25,000+ Customers & Growing",
    description:
      "Today we serve 25,000+ customers across 500+ cities with a team of 500+ professionals.",
  },
];
