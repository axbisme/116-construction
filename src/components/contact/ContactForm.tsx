'use client';

import { useState } from 'react';
import { siteDetails } from '@/data/siteDetails';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  message: string;
}

const initialState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  message: '',
};

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSubmitted(false);
      setError('');
      setFormState((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = Boolean(formState.fullName.trim() && formState.email.trim() && formState.message.trim().length >= 10);
    if (!isValid) {
      setError('Please add your name, email address, and a short message about the project.');
      return;
    }
    const subject = encodeURIComponent(`Website inquiry: ${formState.projectType || 'New project request'}`);
    const body = encodeURIComponent([
      `Name: ${formState.fullName}`,
      `Email: ${formState.email}`,
      `Phone: ${formState.phone || 'Not provided'}`,
      `Project Type: ${formState.projectType || 'Not provided'}`,
      `Project Location: ${formState.location || 'Not provided'}`,
      '',
      formState.message,
    ].join('\n'));
    window.location.href = `mailto:${siteDetails.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-border bg-white p-8 shadow-card">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-foreground">
          <span>Full Name *</span>
          <input name="fullName" value={formState.fullName} onChange={handleChange('fullName')} className="w-full rounded-2xl border border-border bg-soft px-4 py-3 font-normal text-foreground outline-none transition focus:border-primary" placeholder="Full name" />
        </label>
        <label className="space-y-2 text-sm font-semibold text-foreground">
          <span>Email Address *</span>
          <input type="email" name="email" value={formState.email} onChange={handleChange('email')} className="w-full rounded-2xl border border-border bg-soft px-4 py-3 font-normal text-foreground outline-none transition focus:border-primary" placeholder="name@example.com" />
        </label>
        <label className="space-y-2 text-sm font-semibold text-foreground">
          <span>Phone Number</span>
          <input name="phone" value={formState.phone} onChange={handleChange('phone')} className="w-full rounded-2xl border border-border bg-soft px-4 py-3 font-normal text-foreground outline-none transition focus:border-primary" placeholder="(229) 555-7890" />
        </label>
        <label className="space-y-2 text-sm font-semibold text-foreground">
          <span>Project Type</span>
          <input name="projectType" value={formState.projectType} onChange={handleChange('projectType')} className="w-full rounded-2xl border border-border bg-soft px-4 py-3 font-normal text-foreground outline-none transition focus:border-primary" placeholder="Kitchen remodel, she shed, porch, barn..." />
        </label>
      </div>
      <label className="mt-5 block space-y-2 text-sm font-semibold text-foreground">
        <span>Project City / Area</span>
        <input name="location" value={formState.location} onChange={handleChange('location')} className="w-full rounded-2xl border border-border bg-soft px-4 py-3 font-normal text-foreground outline-none transition focus:border-primary" placeholder="Valdosta, Tifton, Moultrie, etc." />
      </label>
      <label className="mt-5 block space-y-2 text-sm font-semibold text-foreground">
        <span>Message *</span>
        <textarea name="message" value={formState.message} onChange={handleChange('message')} rows={6} className="w-full rounded-[1.5rem] border border-border bg-soft px-4 py-3 font-normal text-foreground outline-none transition focus:border-primary" placeholder="Tell us about the project, timing, and anything important to know." />
      </label>
      {error ? <p className="mt-4 text-sm text-primary">{error}</p> : null}
      {submitted ? <p className="mt-4 text-sm text-muted">Your email app should open with the message drafted to the owner.</p> : null}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-muted">This version intentionally uses a mailto workflow so it works immediately without configuring a third-party form service.</p>
        <button type="submit" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_18px_40px_-20px_rgba(139,30,30,0.65)] transition hover:bg-primary-accent">Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;
