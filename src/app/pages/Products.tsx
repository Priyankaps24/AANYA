import { Shield, Target, Award, Zap, TrendingUp, Sparkles, Check } from 'lucide-react';

export function Products() {
  const products = [
    {
      title: 'Skill Passport',
      description: 'Your living, verified digital identity',
      icon: Shield,
      color: '#7C3AED',
      features: [
        'Verified skill certifications',
        'Project portfolio integration',
        'AI readiness scoring',
        'Growth timeline tracking',
        'Shareable digital credentials',
        'GitHub & platform integrations',
      ],
      benefits: [
        'Stand out to recruiters',
        'Portable career profile',
        'Automated verification',
      ],
    },
    {
      title: 'Challenge Arena',
      description: 'Learn by building, not memorizing',
      icon: Target,
      color: '#3B82F6',
      features: [
        'AI Engineering challenges',
        'System design problems',
        'Real-world scenarios',
        'Leaderboard rankings',
        'XP & achievement system',
        'Collaborative competitions',
      ],
      benefits: [
        'Hands-on skill development',
        'Competitive learning',
        'Industry-relevant practice',
      ],
    },
    {
      title: 'Credential Vault',
      description: 'Secure storage for all achievements',
      icon: Award,
      color: '#06B6D4',
      features: [
        'Blockchain-backed verification',
        'Certificate management',
        'Badge collections',
        'One-click sharing',
        'Tamper-proof storage',
        'Lifetime access',
      ],
      benefits: [
        'Never lose credentials',
        'Easy verification',
        'Professional presentation',
      ],
    },
    {
      title: 'Project Portfolio',
      description: 'Showcase work with rich evidence',
      icon: Zap,
      color: '#10B981',
      features: [
        'Interactive project demos',
        'Code repository links',
        'Video walkthroughs',
        'Technical documentation',
        'Impact metrics',
        'Collaboration history',
      ],
      benefits: [
        'Prove capability',
        'Engage recruiters',
        'Tell your story',
      ],
    },
    {
      title: 'AI Skill Analytics',
      description: 'Personalized growth insights',
      icon: TrendingUp,
      color: '#F59E0B',
      features: [
        'Skill gap analysis',
        'Learning recommendations',
        'Market demand insights',
        'Progress visualization',
        'Predictive career paths',
        'Peer comparisons',
      ],
      benefits: [
        'Data-driven decisions',
        'Targeted learning',
        'Career optimization',
      ],
    },
    {
      title: 'Recruiter Insights',
      description: 'Connect with the right opportunities',
      icon: Sparkles,
      color: '#EC4899',
      features: [
        'AI-matched opportunities',
        'Verified talent discovery',
        'Skill-based filtering',
        'Interview preparation',
        'Hiring analytics',
        'Direct recruiter access',
      ],
      benefits: [
        'Better job matches',
        'Faster hiring process',
        'Transparent evaluation',
      ],
    },
  ];

  return (
    <div className="w-full">
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="mb-6">One Platform.<br />Multiple Ways To Grow.</h1>
            <p className="text-[#94A3B8] text-xl max-w-2xl mx-auto">
              A complete ecosystem designed to help you build skills, prove capability, and accelerate your career.
            </p>
          </div>

          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={product.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${product.color}20` }}
                  >
                    <product.icon size={32} style={{ color: product.color }} />
                  </div>
                  <h2 className="mb-4">{product.title}</h2>
                  <p className="text-[#94A3B8] text-xl mb-8">{product.description}</p>

                  <div className="mb-8">
                    <h4 className="text-white mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check size={20} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                          <span className="text-[#94A3B8]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white mb-4">Benefits</h4>
                    <div className="flex flex-wrap gap-3">
                      {product.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-[#94A3B8]"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1020] border border-white/10 min-h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <product.icon size={120} style={{ color: product.color }} className="mx-auto mb-6 opacity-20" />
                      <p className="text-[#94A3B8]">Product Screenshot</p>
                    </div>
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
