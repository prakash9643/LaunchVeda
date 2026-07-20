"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const initialForm = { fullName: "", phoneNumber: "", email: "", category: "Cosmetic / Skincare Brand", stage: "I only have an idea", budget: "₹10–25 Lakh", message: "" };

export default function ContactLeadForm({ compact = false }: { compact?: boolean }) {
	const [formData, setFormData] = useState(initialForm);
	const [errors, setErrors] = useState({ fullName: "", email: "", phoneNumber: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);
	const update = (field: keyof typeof initialForm, value: string) => setFormData((current) => ({ ...current, [field]: value }));

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const next = { fullName: "", email: "", phoneNumber: "" };
		if (!formData.fullName.trim()) next.fullName = "Full name is required";
		if (!formData.email.trim()) next.email = "Email address is required";
		else if (!/\S+@\S+\.\S+/.test(formData.email)) next.email = "Please enter a valid email";
		if (!formData.phoneNumber.trim()) next.phoneNumber = "Phone/WhatsApp number is required";
		else if (!/^[0-9+\s-]{8,15}$/.test(formData.phoneNumber.replace(/\s+/g, ""))) next.phoneNumber = "Please enter a valid phone number";
		setErrors(next);
		if (Object.values(next).some(Boolean)) return;
		setIsSubmitting(true); setSubmitError("");
		try {
			const response = await fetch("/api/launch-roadmap-lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
			if (!response.ok) throw new Error("Unable to submit your request. Please try again.");
			setIsSuccess(true); setFormData(initialForm);
		} catch (error) { setSubmitError(error instanceof Error ? error.message : "Something went wrong. Please try again."); }
		finally { setIsSubmitting(false); }
	};

	if (isSuccess) return <div className="py-10 text-center"><CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-500" /><h3 className="text-xl font-extrabold text-slate-900">Request received!</h3><p className="mt-2 text-sm text-slate-500">Our launch team will contact you shortly.</p></div>;
	const field = "w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 font-medium text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all";
	const label = "block text-slate-700 font-extrabold text-xs uppercase tracking-wider mb-1.5";

	return <form onSubmit={handleSubmit} className={compact ? "space-y-4" : "space-y-5"}>
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
			<div><label className={label}>Full Name</label><input type="text" placeholder="Enter your full name" value={formData.fullName} onChange={(e) => update("fullName", e.target.value)} className={`${field} ${errors.fullName ? "border-red-400" : ""}`} />{errors.fullName && <p className="mt-1 text-xs font-semibold text-red-500">{errors.fullName}</p>}</div>
			<div><label className={label}>Phone Number</label><input type="tel" placeholder="Enter your WhatsApp number" value={formData.phoneNumber} onChange={(e) => update("phoneNumber", e.target.value)} className={`${field} ${errors.phoneNumber ? "border-red-400" : ""}`} />{errors.phoneNumber && <p className="mt-1 text-xs font-semibold text-red-500">{errors.phoneNumber}</p>}</div>
		</div>
		<div><label className={label}>Email Address</label><input type="email" placeholder="Enter your email address" value={formData.email} onChange={(e) => update("email", e.target.value)} className={`${field} ${errors.email ? "border-red-400" : ""}`} />{errors.email && <p className="mt-1 text-xs font-semibold text-red-500">{errors.email}</p>}</div>
		<div className={`grid grid-cols-1 gap-4 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
			<div><label className={label}>Brand Category</label><select value={formData.category} onChange={(e) => update("category", e.target.value)} className={field}><option>Perfume Brand</option><option>Cosmetic / Skincare Brand</option><option>Ayurveda Brand</option><option>Nutraceutical Brand</option><option>Other</option></select></div>
			<div><label className={label}>Current Stage</label><select value={formData.stage} onChange={(e) => update("stage", e.target.value)} className={field}><option>I only have an idea</option><option>I need product planning</option><option>I need manufacturer support</option><option>I need branding &amp; packaging</option><option>I need website &amp; marketing</option><option>Product is ready, need launch support</option></select></div>
			<div className={compact ? "sm:col-span-2" : ""}><label className={label}>Estimated Budget</label><select value={formData.budget} onChange={(e) => update("budget", e.target.value)} className={field}><option>Below ₹5 Lakh</option><option>₹5–10 Lakh</option><option>₹10–25 Lakh</option><option>₹25 Lakh+</option></select></div>
		</div>
		<div><label className={label}>Message</label><textarea rows={compact ? 2 : 4} placeholder="Tell us about your brand idea, product category, requirement, and timeline." value={formData.message} onChange={(e) => update("message", e.target.value)} className={`${field} h-auto min-h-20 py-3 resize-y`} /></div>
		{submitError && <div className="rounded-xl border border-red-100 bg-red-50 p-3 text-xs font-semibold text-red-700">{submitError}</div>}
		<button type="submit" disabled={isSubmitting} className="flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-sm font-bold text-white shadow-md hover:brightness-105 disabled:opacity-50">{isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" />Submitting...</> : <>Request My Launch Roadmap<ArrowRight className="h-4 w-4" /></>}</button>
	</form>;
}
