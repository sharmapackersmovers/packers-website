"use client";

import { m } from "framer-motion";
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  );
}

const team = [
  {
    name: "Ramesh Sharma",
    role: "Founder & CEO",
    bio: "15+ years in logistics. Built Sharma Packers from the ground up.",
    initials: "RS",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Sunita Sharma",
    role: "Director — Operations",
    bio: "Oversees all moving operations across our 500+ city network.",
    initials: "SS",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Vikram Patel",
    role: "Head of Technology",
    bio: "Leads GPS tracking platform and digital transformation.",
    initials: "VP",
    color: "from-teal-500 to-teal-700",
  },
  {
    name: "Meera Joshi",
    role: "Customer Success Head",
    bio: "Ensures every customer gets a 5-star experience.",
    initials: "MJ",
    color: "from-orange-500 to-orange-700",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 md:py-28 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-electric-600 font-semibold text-sm tracking-wider uppercase bg-electric-50 px-4 py-1.5 rounded-full mb-4">
            Leadership
          </span>
          <h2 className="section-heading">
            The Team Behind{" "}
            <span className="text-gradient-blue">Your Safe Move</span>
          </h2>
          <p className="section-subheading">
            Our experienced leadership team is passionate about delivering
            excellence in every relocation.
          </p>
        </m.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <m.div
              key={member.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 card-hover text-center group"
            >
              {/* Avatar */}
              <div
                className={`w-20 h-20 mx-auto bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg group-hover:scale-105 transition-transform`}
              >
                {member.initials}
              </div>

              <h3 className="font-bold text-navy-900 text-base mb-0.5">
                {member.name}
              </h3>
              <p className="text-electric-600 text-sm font-medium mb-3">
                {member.role}
              </p>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                {member.bio}
              </p>

              <div className="flex items-center justify-center gap-2">
                <a
                  href="#"
                  className="w-8 h-8 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 rounded-lg flex items-center justify-center text-slate-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-slate-50 hover:bg-sky-50 hover:text-sky-500 rounded-lg flex items-center justify-center text-slate-400 transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
