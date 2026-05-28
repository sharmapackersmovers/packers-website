"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  Loader2,
  User,
  Phone,
  Mail,
  MapPin,
  Package,
  Calendar,
  MessageSquare,
} from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  pickup: string;
  destination: string;
  serviceType: string;
  movingDate: string;
  message: string;
}

const serviceOptions = [
  "Household Shifting",
  "Office Relocation",
  "Local Shifting",
  "Domestic Relocation",
  "Car Transportation",
  "Bike Transportation",
  "Packing & Unpacking",
  "Loading & Unloading",
  "Warehouse & Storage",
  "Commercial Goods Shifting",
];

interface FloatingInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  icon: React.ElementType;
  required?: boolean;
  error?: string;
}

function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  icon: Icon,
  required,
  error,
}: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
          <Icon className="w-4 h-4" />
        </div>
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          placeholder=" "
          className={`w-full pt-5 pb-2 pl-10 pr-4 text-sm border rounded-xl outline-none transition-all duration-200 bg-white ${
            error
              ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100"
              : "border-slate-200 focus:border-electric-500 focus:ring-2 focus:ring-electric-100"
          }`}
        />
        <label
          htmlFor={id}
          className={`absolute left-10 transition-all duration-200 pointer-events-none ${
            isActive
              ? "top-2 text-[10px] font-semibold text-electric-600"
              : "top-1/2 -translate-y-1/2 text-sm text-slate-400"
          }`}
        >
          {label}
          {required && " *"}
        </label>
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    destination: "",
    serviceType: "",
    movingDate: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const update = (field: keyof FormData) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, "")))
      newErrors.phone = "Valid 10-digit phone required";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email address";
    if (!form.pickup.trim()) newErrors.pickup = "Pickup location required";
    if (!form.destination.trim())
      newErrors.destination = "Destination required";
    if (!form.serviceType) newErrors.serviceType = "Select a service";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 2000));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <section id="quote-form" className="py-20 section-gradient scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center bg-white rounded-3xl p-12 shadow-xl border border-slate-100"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2
              className="text-2xl font-bold text-navy-900 mb-3"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Request Received!
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Thank you, {form.name}! Our team will call you on{" "}
              <strong>{form.phone}</strong> within the next 30 minutes with a
              detailed quote.
            </p>
            <button
              onClick={() => {
                setStatus("idle");
                setForm({
                  name: "",
                  phone: "",
                  email: "",
                  pickup: "",
                  destination: "",
                  serviceType: "",
                  movingDate: "",
                  message: "",
                });
              }}
              className="btn-primary justify-center w-full"
            >
              Submit Another Request
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote-form" className="py-20 md:py-28 section-gradient scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="inline-block text-electric-600 font-semibold text-sm tracking-wider uppercase bg-electric-50 px-4 py-1.5 rounded-full mb-4">
              Get a Quote
            </span>
            <h2 className="section-heading mb-5">
              Free Moving{" "}
              <span className="text-gradient-blue">Quote Form</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Fill in your details and we&apos;ll prepare a customized quote for
              your move. No obligation, no hidden charges.
            </p>

            <div className="space-y-4">
              {[
                { title: "Quick Response", desc: "We call back within 30 minutes" },
                { title: "Free Quote", desc: "Detailed estimate at no cost" },
                { title: "Best Price", desc: "Competitive, transparent pricing" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-electric-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-electric-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">
                      {item.title}
                    </p>
                    <p className="text-slate-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 space-y-5"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FloatingInput
                  id="name"
                  label="Full Name"
                  value={form.name}
                  onChange={update("name")}
                  icon={User}
                  required
                  error={errors.name}
                />
                <FloatingInput
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  icon={Phone}
                  required
                  error={errors.phone}
                />
              </div>

              <FloatingInput
                id="email"
                label="Email Address (optional)"
                type="email"
                value={form.email}
                onChange={update("email")}
                icon={Mail}
                error={errors.email}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FloatingInput
                  id="pickup"
                  label="Pickup Location"
                  value={form.pickup}
                  onChange={update("pickup")}
                  icon={MapPin}
                  required
                  error={errors.pickup}
                />
                <FloatingInput
                  id="destination"
                  label="Destination"
                  value={form.destination}
                  onChange={update("destination")}
                  icon={MapPin}
                  required
                  error={errors.destination}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Service select */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    <Package className="w-4 h-4" />
                  </div>
                  <select
                    value={form.serviceType}
                    onChange={(e) => update("serviceType")(e.target.value)}
                    className={`w-full h-12 pl-10 pr-4 text-sm border rounded-xl outline-none transition-all duration-200 bg-white appearance-none ${
                      errors.serviceType
                        ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                        : "border-slate-200 focus:border-electric-500 focus:ring-2 focus:ring-electric-100"
                    } ${!form.serviceType ? "text-slate-400" : "text-slate-900"}`}
                  >
                    <option value="" disabled>
                      Service Type *
                    </option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.serviceType}
                    </p>
                  )}
                </div>

                <FloatingInput
                  id="movingDate"
                  label="Moving Date"
                  type="date"
                  value={form.movingDate}
                  onChange={update("movingDate")}
                  icon={Calendar}
                />
              </div>

              {/* Message */}
              <div className="relative">
                <div className="absolute left-4 top-4 text-slate-400 pointer-events-none">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => update("message")(e.target.value)}
                  rows={3}
                  placeholder="Additional details (optional)"
                  className="w-full pt-4 pb-3 pl-10 pr-4 text-sm border border-slate-200 rounded-xl outline-none focus:border-electric-500 focus:ring-2 focus:ring-electric-100 transition-all duration-200 resize-none placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Get Free Quote
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-400">
                By submitting, you agree to our Privacy Policy. We never share
                your data.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
