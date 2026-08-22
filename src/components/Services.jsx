import { services } from '../data/services';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28 lg:py-32 bg-sb-bg-2">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_50%_40%_at_50%_20%,black,transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="From creative ideas to real solutions."
          description="SPACEBOX provides creative and technology services that can be tailored to the needs of each project."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} delay={(i % 6) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
