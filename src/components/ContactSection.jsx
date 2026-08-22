import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Reveal from './Reveal';

const info = [
  { icon: Mail, label: 'Email', value: 'raditya@gmail.com' },
  { icon: Phone, label: 'Telepon', value: '+62 8235-9027-400' },
  { icon: MapPin, label: 'Lokasi', value: 'Online, Indonesia' },
];

const inputClass =
  'w-full rounded-xl border border-sb-border bg-sb-bg-2/60 px-4 py-3 text-sm text-sb-ink placeholder:text-sb-ink-soft/60 outline-none transition-all duration-200 focus:border-sb-blue focus:ring-4 focus:ring-sb-blue/12 focus:bg-white';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-14">
        <div className="lg:col-span-2">
          <Reveal>
            <span className="eyebrow text-sb-blue">Kontak</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 text-[28px] sm:text-[34px] font-extrabold leading-[1.12] text-sb-ink">
              You have idea in your mind?
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-[15px] leading-relaxed text-sb-ink-soft max-w-sm">
              Send us your detail project and our team will contact you in next day! 
            </p>
          </Reveal>

          <div className="mt-9 space-y-5">
            {info.map((item, i) => (
              <Reveal key={item.label} delay={(i % 3) + 1}>
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-sb-blue/8 text-sb-blue flex items-center justify-center">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-sb-ink-soft">{item.label}</div>
                    <div className="text-sm font-semibold text-sb-ink">{item.value}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={2} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-sb-border rounded-2xl shadow-sb-card p-6 sm:p-8"
          >
            {submitted && (
              <div className="mb-6 rounded-xl bg-sb-blue/8 border border-sb-blue/20 text-sb-blue-dark text-sm font-medium px-4 py-3">
                Terima kasih! Pesan Anda telah terkirim, kami akan segera menghubungi Anda.
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-sb-ink mb-2">Name</label>
                <input id="name" name="name" type="text" required placeholder="Full Name " className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-sb-ink mb-2">Email</label>
                <input id="email" name="email" type="email" required placeholder="nama@email.com" className={inputClass} />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs font-semibold text-sb-ink mb-2">Company</label>
                <input id="company" name="company" type="text" placeholder="Company  (opsional)" className={inputClass} />
              </div>
              <div>
                <label htmlFor="projectType" className="block text-xs font-semibold text-sb-ink mb-2">Project</label>
                <select id="projectType" name="projectType" className={inputClass} defaultValue="">
                  <option value="" disabled>Pilih jenis project</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Custom Software</option>
                  <option>Electronics & IoT</option>
                  <option>Branding</option>
                  <option>Another Opsion</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-xs font-semibold text-sb-ink mb-2">Messages</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell a story of your Project..."
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-sb-blue text-white px-7 py-3.5 text-sm font-semibold w-full sm:w-auto transition-all duration-300 hover:bg-sb-blue-dark hover:-translate-y-0.5"
            >
              Send Message
              <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
