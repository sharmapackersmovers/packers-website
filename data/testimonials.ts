export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  service: string;
  date: string;
  initials: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    location: "Delhi → Mumbai",
    rating: 5,
    review:
      "Sharma Packers made our family's move from Delhi to Mumbai incredibly smooth. The team was professional, punctual, and handled all our furniture with extreme care. Not a single item was damaged. Highly recommended!",
    service: "Household Shifting",
    date: "March 2024",
    initials: "RK",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "2",
    name: "Priya Sharma",
    location: "Bangalore → Pune",
    rating: 5,
    review:
      "We relocated our entire office within 48 hours with zero downtime. The team was extremely organized — they labeled everything, set up our new office, and even helped arrange the furniture. Outstanding service!",
    service: "Office Relocation",
    date: "February 2024",
    initials: "PS",
    color: "from-purple-500 to-purple-700",
  },
  {
    id: "3",
    name: "Amit Verma",
    location: "Chennai → Hyderabad",
    rating: 5,
    review:
      "I was worried about transporting my car, but Sharma Packers handled it like pros. Real-time GPS tracking gave me peace of mind, and the car was delivered in perfect condition. 10/10!",
    service: "Car Transportation",
    date: "January 2024",
    initials: "AV",
    color: "from-teal-500 to-teal-700",
  },
  {
    id: "4",
    name: "Sunita Patel",
    location: "Ahmedabad → Surat",
    rating: 5,
    review:
      "The local shifting was done in just half a day. Very efficient team. They packed everything neatly, moved it, and helped unpack at the new place. The pricing was transparent with no hidden costs.",
    service: "Local Shifting",
    date: "April 2024",
    initials: "SP",
    color: "from-orange-500 to-orange-700",
  },
  {
    id: "5",
    name: "Vikram Singh",
    location: "Jaipur → Noida",
    rating: 5,
    review:
      "Used their warehouse storage for 2 months while our new home was being renovated. The facility was clean, secure, and well-maintained. The pickup and delivery were seamless. Very happy with the service.",
    service: "Warehouse & Storage",
    date: "December 2023",
    initials: "VS",
    color: "from-green-500 to-green-700",
  },
  {
    id: "6",
    name: "Meera Nair",
    location: "Kochi → Bangalore",
    rating: 5,
    review:
      "Moved from Kerala to Bangalore with a lot of valuables and antiques. The team used special packing materials and handled every piece with so much care. Everything arrived perfectly. Fantastic service!",
    service: "Household Shifting",
    date: "March 2024",
    initials: "MN",
    color: "from-pink-500 to-pink-700",
  },
];
