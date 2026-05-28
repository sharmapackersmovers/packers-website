export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "How do I get a quote for my move?",
    answer:
      "Getting a quote is simple! Fill out our online quote form with your pickup location, destination, service type, and moving date. Our team will contact you within 30 minutes with a detailed, transparent quote. Alternatively, call us at +91 98765 43210 for an instant quote.",
    category: "pricing",
  },
  {
    id: "2",
    question: "Are my belongings insured during the move?",
    answer:
      "Yes! We offer comprehensive transit insurance for all moves. Our basic insurance covers damage up to ₹2 lakhs, and you can opt for extended coverage for high-value items. We handle your belongings with utmost care, but insurance gives you added peace of mind.",
    category: "insurance",
  },
  {
    id: "3",
    question: "How far in advance should I book the service?",
    answer:
      "We recommend booking at least 3-5 days in advance for local moves and 7-10 days for long-distance or inter-city moves. However, we also accommodate last-minute bookings subject to availability. For peak season moves (October-December), book 2-3 weeks ahead.",
    category: "booking",
  },
  {
    id: "4",
    question: "Do you provide packing materials?",
    answer:
      "Absolutely! We provide all necessary packing materials including high-quality corrugated boxes, bubble wrap, foam padding, stretch wrap, and specialized containers for fragile items. All materials are included in our packing service package.",
    category: "packing",
  },
  {
    id: "5",
    question: "Can I track my shipment in real-time?",
    answer:
      "Yes! We provide real-time GPS tracking for all long-distance moves. Once your goods are loaded, you'll receive a tracking link via SMS and email. You can monitor the exact location of your belongings at any time through our tracking portal.",
    category: "tracking",
  },
  {
    id: "6",
    question: "What items cannot be transported?",
    answer:
      "For safety and legal reasons, we cannot transport hazardous materials (flammable/explosive items), perishable food items, plants, pets, illegal substances, or highly sensitive documents. We recommend personal transport for valuables like jewelry and important documents.",
    category: "restrictions",
  },
  {
    id: "7",
    question: "Do you offer weekend or holiday moving services?",
    answer:
      "Yes, we operate 7 days a week, including weekends and most holidays. We understand that moving often happens during these times. Weekend and holiday bookings may have slightly different pricing — contact us for accurate quotes.",
    category: "availability",
  },
  {
    id: "8",
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "You can cancel or reschedule up to 48 hours before your move date at no charge. Cancellations within 24 hours may incur a nominal fee. For rescheduling, we'll do our best to accommodate your preferred dates subject to availability.",
    category: "policy",
  },
];
