import { Users, Wrench, Zap, Sparkle, Layers, LifeBuoy } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const features = [
  { icon: Users, title: 'Experienced Team', description: 'Senior engineers and designers whove shipped products across a range of industries.' },
  { icon: Wrench, title: 'Custom Solutions', description: 'No templates by default every build is scoped around how your business actually works.' },
  { icon: Zap, title: 'Modern Technology', description: 'We build on current, battle-tested stacks so your product stays fast and maintainable.' },
  { icon: Sparkle, title: 'Fast Delivery', description: 'Structured sprints and clear milestones keep your timeline predictable, not padded.' },
  { icon: Layers, title: 'Clean & Scalable', description: 'Readable, documented, and tested code that your team or ours can build on later.' },
  { icon: LifeBuoy, title: 'Ongoing Support', description: 'Post launch monitoring, fixes, and enhancements so your product keeps pace with your business.' },
];

export default function WhySpacebox() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why SPACEBOX"
          title="Built for long-term collaboration."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 6) + 1}>
              <div className="h-full flex items-start gap-4 bg-white border border-sb-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-sb-card hover:border-sb-blue/30">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-sb-blue/8 flex items-center justify-center text-sb-blue">
                  <f.icon size={20} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-sb-ink">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-sb-ink-soft">{f.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
