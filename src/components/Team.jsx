import { team } from '../data/team';
import SectionHeading from './SectionHeading';
import TeamCard from './TeamCard';

export default function Team() {
  return (
    <section id="team" className="py-24 sm:py-28 lg:py-32 bg-sb-bg-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Meet Our Team"
          title="The People Behind SPACEBOX."
          description="A creative team that prioritizes system security to turn every idea into a real solution."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} delay={(i % 6) + 1} accentIndex={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
