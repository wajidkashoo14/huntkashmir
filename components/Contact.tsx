"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Users,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll, {
  StaggerContainer,
  StaggerChild,
} from "./AnimateOnScroll";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ADMIN =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN ?? "";
const EMAILJS_TEMPLATE_CONFIRM =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONFIRM ?? "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

const GA_CONVERSION_ID = "AW-18329867340";
const GA_CONVERSION_LABEL = "KCJECOHl1tIcEMyorqRE";

function fireConversion() {
  if (typeof window === "undefined") return;
  if (typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "conversion", {
      send_to: `${GA_CONVERSION_ID}/${GA_CONVERSION_LABEL}`,
      value: 500,
      currency: "INR",
    });
  }
}

const contactDetails = [
  {
    icon: <MapPin size={20} className="text-[#C9A84C]" />,
    title: "Our Office",
    lines: [
      "Gousia Complex, Khayam Chowk",
      "Near Khyber Hospital",
      "Srinagar, Kashmir — 190001, India",
    ],
    link: "https://maps.google.com/?q=Khayam+Chowk+Srinagar+Kashmir",
    linkLabel: "View on Map →",
  },
  {
    icon: <Phone size={20} className="text-[#C9A84C]" />,
    title: "Phone / WhatsApp",
    lines: ["+91 95960 41460", "+91 70067 54265"],
    link: "tel:+919596041460",
    linkLabel: "Call Now →",
  },
  {
    icon: <Mail size={20} className="text-[#C9A84C]" />,
    title: "Email Us",
    lines: ["huntkashmir365@gmail.com"],
    link: "mailto:huntkashmir365@gmail.com",
    linkLabel: "Send Email →",
  },
  {
    icon: <Clock size={20} className="text-[#C9A84C]" />,
    title: "Working Hours",
    lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: 10:00 AM – 4:00 PM"],
  },
];

const PACKAGES = [
  "Honeymoon Special (4D/3N)",
  "Family Kashmir (6D/5N)",
  "Adventure Trek (5D/4N)",
  "Golden Kashmir (7D/6N)",
  "Luxury Escape (8D/7N)",
  "Budget Explorer (4D/3N)",
  "Custom Itinerary",
];

const DESTINATIONS = [
  "Dal Lake, Srinagar",
  "Gulmarg",
  "Pahalgam",
  "Sonamarg",
  "Multiple Destinations",
  "Not sure yet",
];

const TRIP_TYPES = [
  "Honeymoon / Romantic",
  "Family Trip",
  "Solo Adventure",
  "Friends Group",
  "Corporate / MICE",
  "Pilgrimage (Amarnath)",
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    destination: "",
    travel_date: "",
    return_date: "",
    travelers: "2",
    trip_type: "",
    package: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const cleanPhone = form.phone.replace(/\D/g, "").replace(/^(91|0)/, "");
      const payload = { ...form, phone: cleanPhone } as Record<string, unknown>;
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ADMIN,
        payload,
        EMAILJS_PUBLIC_KEY
      );
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_CONFIRM,
        payload,
        EMAILJS_PUBLIC_KEY
      );
      fireConversion();
      setStatus("success");
      setForm({
        from_name: "",
        from_email: "",
        phone: "",
        destination: "",
        travel_date: "",
        return_date: "",
        travelers: "2",
        trip_type: "",
        package: "",
        budget: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[#0F1923] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B4332]/25 focus:border-[#1B4332] transition-all";
  const labelCls =
    "block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide";

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll direction="up" className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[#C9A84C] font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1923]">
            Plan Your Dream Kashmir Trip
          </h2>
          <p className="mt-4 sm:mt-6 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            Fill in your details and our Kashmir travel experts will craft a
            personalised itinerary and get back to you within 2 hours.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-2 space-y-4">
            <StaggerContainer stagger={0.1} className="space-y-4">
              {contactDetails.map((c, i) => (
                <StaggerChild key={i} direction="left">
                  <motion.div
                    whileHover={{
                      x: 4,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.07)",
                    }}
                    className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#1B4332]/10 flex items-center justify-center shrink-0">
                      {c.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-[#1B4332] mb-1.5 text-sm">
                        {c.title}
                      </p>
                      {c.lines.map((line, j) => (
                        <p
                          key={j}
                          className="text-gray-600 text-sm leading-snug"
                        >
                          {line}
                        </p>
                      ))}
                      {c.link && (
                        <a
                          href={c.link}
                          target={
                            c.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-[#C9A84C] text-xs font-semibold hover:underline"
                        >
                          {c.linkLabel}
                        </a>
                      )}
                    </div>
                  </motion.div>
                </StaggerChild>
              ))}
            </StaggerContainer>

            <StaggerChild direction="up">
              <motion.a
                href="https://wa.me/919596041460?text=Hi!%20I'd%20like%20to%20plan%20a%20Kashmir%20trip.%20Can%20you%20help%20me%3F"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 12px 32px rgba(37,211,102,0.25)",
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 bg-[#25D366] rounded-2xl p-5 text-white cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width={24}
                    height={24}
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.57a.75.75 0 0 0 .918.919l5.85-1.486A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.01-1.374l-.36-.214-3.724.946.98-3.62-.234-.372A9.818 9.818 0 1 1 12 21.818z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-base">Chat on WhatsApp</p>
                  <p className="text-white/80 text-sm mt-0.5">
                    Fastest reply — usually within minutes
                  </p>
                </div>
              </motion.a>
            </StaggerChild>
          </div>

          <AnimateOnScroll direction="right" className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-xl bg-[#1B4332]/10 flex items-center justify-center">
                  <MessageSquare size={18} className="text-[#1B4332]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F1923]">
                    Send Us Your Requirements
                  </h3>
                  <p className="text-gray-400 text-xs mt-0.5">
                    We reply within 2 hours · Free consultation
                  </p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold text-[#1B4332] mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-gray-500 text-sm max-w-xs mx-auto mb-6">
                      Thank you! Our Kashmir travel expert will call you back
                      within 2 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-[#C9A84C] font-semibold text-sm hover:underline"
                    >
                      Send another enquiry →
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>Full Name *</label>
                        <input
                          name="from_name"
                          value={form.from_name}
                          onChange={handleChange}
                          required
                          type="text"
                          placeholder="Your full name"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className={labelCls}>Email Address *</label>
                        <input
                          name="from_email"
                          value={form.from_email}
                          onChange={handleChange}
                          required
                          type="email"
                          placeholder="you@email.com"
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>Phone / WhatsApp *</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-semibold pointer-events-none">
                            +91
                          </span>
                          <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            type="tel"
                            placeholder="9XXXXXXXXX"
                            className={`${inputCls} pl-12`}
                          />
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>
                          <Users size={12} className="inline mr-1" />
                          No. of Travelers *
                        </label>
                        <select
                          name="travelers"
                          value={form.travelers}
                          onChange={handleChange}
                          className={inputCls}
                        >
                          {[
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "10+",
                          ].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === "1" ? "Person" : "People"}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>
                          Destination Interested In
                        </label>
                        <select
                          name="destination"
                          value={form.destination}
                          onChange={handleChange}
                          className={inputCls}
                        >
                          <option value="">Select destination</option>
                          {DESTINATIONS.map((d) => (
                            <option key={d}>{d}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Type of Trip</label>
                        <select
                          name="trip_type"
                          value={form.trip_type}
                          onChange={handleChange}
                          className={inputCls}
                        >
                          <option value="">Select trip type</option>
                          {TRIP_TYPES.map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>
                          <Calendar size={12} className="inline mr-1" />
                          Travel From Date
                        </label>
                        <input
                          name="travel_date"
                          value={form.travel_date}
                          onChange={handleChange}
                          type="date"
                          min={new Date().toISOString().split("T")[0]}
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className={labelCls}>Return Date</label>
                        <input
                          name="return_date"
                          value={form.return_date}
                          onChange={handleChange}
                          type="date"
                          min={
                            form.travel_date ||
                            new Date().toISOString().split("T")[0]
                          }
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>Preferred Package</label>
                        <select
                          name="package"
                          value={form.package}
                          onChange={handleChange}
                          className={inputCls}
                        >
                          <option value="">Select a package</option>
                          {PACKAGES.map((p) => (
                            <option key={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Budget (Per Person)</label>
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className={inputCls}
                        >
                          <option value="">Select budget range</option>
                          <option>Under ₹15,000</option>
                          <option>₹15,000 – ₹25,000</option>
                          <option>₹25,000 – ₹40,000</option>
                          <option>₹40,000 – ₹60,000</option>
                          <option>₹60,000 – ₹1,00,000</option>
                          <option>Above ₹1,00,000 (Luxury)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelCls}>
                        Special Requirements / Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us your travel preferences, any special occasions (anniversary, birthday), dietary needs, or any questions you have..."
                        className={`${inputCls} resize-none overflow-auto`}
                      />
                    </div>

                    <AnimatePresence>
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700"
                        >
                          <AlertCircle size={16} className="shrink-0" />
                          Something went wrong. Please try WhatsApp or call us
                          directly.
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#1B4332] text-white py-4 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 disabled:opacity-75 transition-all hover:bg-[#133024]"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={17} />
                          <span className="sm:hidden">Send Enquiry</span>
                          <span className="hidden sm:inline">
                            Send Enquiry — We Reply in 2 Hours
                          </span>
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-gray-400">
                      🔒 Your details are private and will never be shared with
                      third parties.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
