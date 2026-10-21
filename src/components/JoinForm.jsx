/**
 * JoinForm.jsx
 * 
 * Lead generation form with Indian mobile number validation.
 * On submit, opens WhatsApp directly with formatted message.
 * SAFE TO CHANGE:
 * - Labels, goals, and WhatsApp target number live in `src/data/siteContent.js`.
 */

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function JoinForm() {
  const { joinForm, contact, brand } = siteContent;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: joinForm.fields.goal.options[0],
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validate form inputs
  const validate = () => {
    const newErrors = {};

    // Name validation
    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = 'Please enter your full name';
    } else if (trimmedName.length > 60) {
      newErrors.name = 'Name must be under 60 characters';
    }

    // Indian 10-digit mobile number validation
    const cleanPhone = formData.phone.replace(/\D/g, '');
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    if (!cleanPhone) {
      newErrors.phone = 'Please enter your 10-digit mobile number';
    } else if (!indianPhoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Enter a valid 10-digit Indian number (starts with 6, 7, 8, or 9)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear inline error on typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);

    const cleanPhone = formData.phone.replace(/\D/g, '');
    const message = `Hi ${brand.name}, I'm interested in joining.\n\nName: ${formData.name.trim()}\nPhone: ${cleanPhone}\nGoal: ${formData.goal}`;
    const whatsappUrl = `https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setSubmitted(false);
      // Reset form fields
      setFormData({
        name: '',
        phone: '',
        goal: joinForm.fields.goal.options[0],
      });
    }, 600);
  };

  return (
    <div id="join" className="bg-gym-card border border-gym-border rounded-xl p-6 sm:p-8 shadow-xl">
      <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
        {joinForm.cardTitle}
      </h3>
      <p className="text-[17px] text-gym-text-muted mb-6 leading-relaxed">
        {joinForm.description}
      </p>

      {/* Success Notification */}
      {submitted && (
        <div 
          role="alert" 
          className="mb-6 p-4 rounded-lg bg-amber-subtle border border-amber-border text-amber-brand flex items-center gap-3 text-[16px] font-semibold"
        >
          <CheckCircle2 size={20} className="flex-shrink-0" />
          <span>{joinForm.successMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        {/* Full Name Field */}
        <div>
          <label 
            htmlFor="full-name-input"
            className="block text-[15px] font-black uppercase tracking-wider text-gym-text-muted mb-2"
          >
            {joinForm.fields.name.label}
          </label>
          <input
            id="full-name-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            maxLength={60}
            required
            placeholder={joinForm.fields.name.placeholder}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full bg-gym-input border rounded-lg px-4 py-3.5 text-[17px] text-white placeholder-gym-text-muted/60 transition-colors min-h-[48px] focus-visible:outline-amber-brand ${
              errors.name ? 'border-red-500' : 'border-gym-border focus:border-amber-brand'
            }`}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-red-400 flex items-center gap-1.5 font-medium">
              <AlertCircle size={15} />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Phone Number Field */}
        <div>
          <label 
            htmlFor="phone-number-input"
            className="block text-[15px] font-black uppercase tracking-wider text-gym-text-muted mb-2"
          >
            {joinForm.fields.phone.label}
          </label>
          <input
            id="phone-number-input"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength={10}
            required
            placeholder={joinForm.fields.phone.placeholder}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`w-full bg-gym-input border rounded-lg px-4 py-3.5 text-[17px] text-white placeholder-gym-text-muted/60 transition-colors min-h-[48px] focus-visible:outline-amber-brand ${
              errors.phone ? 'border-red-500' : 'border-gym-border focus:border-amber-brand'
            }`}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-sm text-red-400 flex items-center gap-1.5 font-medium">
              <AlertCircle size={15} />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Primary Fitness Goal Dropdown */}
        <div>
          <label 
            htmlFor="fitness-goal-select"
            className="block text-[15px] font-black uppercase tracking-wider text-gym-text-muted mb-2"
          >
            {joinForm.fields.goal.label}
          </label>
          <div className="relative">
            <select
              id="fitness-goal-select"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="w-full bg-gym-input border border-gym-border focus:border-amber-brand rounded-lg px-4 py-3.5 text-[17px] text-white appearance-none transition-colors min-h-[48px] cursor-pointer focus-visible:outline-amber-brand"
            >
              {joinForm.fields.goal.options.map((option) => (
                <option key={option} value={option} className="bg-gym-card text-white py-2">
                  {option}
                </option>
              ))}
            </select>
            {/* Custom dropdown chevron */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gym-text-muted">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 w-full bg-amber-brand text-black font-black text-[17px] py-4 px-6 rounded-lg hover:bg-amber-hover transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg min-h-[52px] focus-visible:outline-white"
        >
          <span>{joinForm.submitButtonText}</span>
          <Send size={18} className="fill-black stroke-none" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}
