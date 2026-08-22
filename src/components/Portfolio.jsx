import { portfolio } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import PortfolioCard from './PortfolioCard';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 sm:py-28 lg:py-32 bg-sb-bg-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected Works"
          title="The project idea has been successfully implemented."
          description="Explore project in every aspect design, tecnology and Software."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {portfolio.map((project, i) => (
            <PortfolioCard key={project.title} project={project} delay={(i % 6) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}