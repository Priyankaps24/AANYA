import { GraduationCap, Building2, Users, Briefcase, Check } from 'lucide-react';

export function Solutions() {
  const solutions = [
    {
      title: 'For Students',
      description: 'Build your future with verified skills and real-world experience',
      icon: GraduationCap,
      color: '#7C3AED',
      challenges: [
        'Hard to stand out from peers',
        'Limited proof of practical skills',
        'Unclear career pathways',
      ],
      benefits: [
        'Showcase verified capabilities',
        'Build a competitive portfolio',
        'Gain industry recognition',
        'Track skill development',
      ],
      outcomes: [
        'Higher interview conversion rates',
        'Better job placements',
        'Clearer career trajectory',
        'Increased confidence',
      ],
      features: [
        'Skill Passport creation',
        'Challenge Arena access',
        'Portfolio builder',
        'Career guidance AI',
      ],
    },
    {
      title: 'For Universities',
      description: 'Prepare students for the AI-first workforce',
      icon: Building2,
      color: '#3B82F6',
      challenges: [
        'Gap between education and industry needs',
        'Limited visibility into student progress',
        'Difficulty demonstrating program value',
      ],
      benefits: [
        'Enhanced curriculum alignment',
        'Real-time student analytics',
        'Improved employer partnerships',
        'Accreditation support',
      ],
      outcomes: [
        'Higher graduate placement rates',
        'Stronger industry connections',
        'Better program reputation',
        'Data-driven improvements',
      ],
      features: [
        'Institution dashboard',
        'Cohort analytics',
        'Custom challenge creation',
        'Employer collaboration tools',
      ],
    },
    {
      title: 'For Recruiters',
      description: 'Discover and verify talent beyond the resume',
      icon: Users,
      color: '#06B6D4',
      challenges: [
        'Time-consuming candidate screening',
        'Unreliable resume claims',
        'Difficulty assessing true capabilities',
      ],
      benefits: [
        'Verified skill assessments',
        'Rich candidate profiles',
        'AI-powered matching',
        'Reduced hiring time',
      ],
      outcomes: [
        '60% faster screening process',
        'Higher quality hires',
        'Lower turnover rates',
        'Better candidate experience',
      ],
      features: [
        'Advanced talent search',
        'Skill verification tools',
        'Project portfolio access',
        'Interview scheduling',
      ],
    },
    {
      title: 'For Employers',
      description: 'Build high-performing teams with verified talent',
      icon: Briefcase,
      color: '#10B981',
      challenges: [
        'Skills gaps in workforce',
        'Long time-to-hire',
        'High training costs',
      ],
      benefits: [
        'Access to pre-vetted talent',
        'Custom skill requirements',
        'Team capability mapping',
        'Ongoing skill development',
      ],
      outcomes: [
        'Reduced hiring costs',
        'Faster team onboarding',
        'Better skill alignment',
        'Lower turnover',
      ],
      features: [
        'Enterprise talent platform',
        'Team analytics',
        'Custom challenges',
        'L&D integration',
      ],
    },
  ];

  return (
    <div className="w-full">
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* <h1 className="mb-6">Designed For The<br />Future Workforce</h1> */}
            <h2 className="mb-6">Automated Architectural Network & Yield Analysis <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text">(AANYA)</span> framework</h2>
            <p className="text-[#94A3B8] text-xl max-w-2xl mx-auto">
              Tailored solutions for students, institutions, recruiters, and employers to thrive in the AI era.
            </p>
          </div>

          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div key={solution.title} className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${solution.color}20` }}
                  >
                    <solution.icon size={32} style={{ color: solution.color }} />
                  </div>
                  <div>
                    <h2>{solution.title}</h2>
                    <p className="text-[#94A3B8] text-lg">{solution.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="p-6 rounded-2xl bg-[#111827] border border-white/10">
                    <h4 className="text-white mb-4">Challenges</h4>
                    <ul className="space-y-2">
                      {solution.challenges.map((item) => (
                        <li key={item} className="text-[#94A3B8] text-sm">• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#111827] border border-white/10">
                    <h4 className="text-white mb-4">Benefits</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <Check size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                          <span className="text-[#94A3B8]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#111827] border border-white/10">
                    <h4 className="text-white mb-4">Outcomes</h4>
                    <ul className="space-y-2">
                      {solution.outcomes.map((item) => (
                        <li key={item} className="text-[#94A3B8] text-sm font-medium" style={{ color: solution.color }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#111827] border border-white/10">
                    <h4 className="text-white mb-4">Platform Features</h4>
                    <ul className="space-y-2">
                      {solution.features.map((item) => (
                        <li key={item} className="text-[#94A3B8] text-sm">→ {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
