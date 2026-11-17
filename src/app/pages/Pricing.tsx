import { Check, Zap } from 'lucide-react';
import { Link } from 'react-router';

export function Pricing() {
  const plans = [
    {
      name: 'Student',
      price: 'Free',
      description: 'Perfect for learners building their first Skill Passport',
      features: [
        'Basic Skill Passport',
        'Up to 5 projects',
        'Challenge Arena access',
        'Community support',
        'Achievement badges',
        'Public profile',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$19',
      period: '/month',
      description: 'For serious builders advancing their careers',
      features: [
        'Everything in Student',
        'Unlimited projects',
        'Priority verification',
        'AI skill analytics',
        'Premium profile themes',
        'Recruiter visibility boost',
        'Custom domain',
        'Advanced analytics',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For organizations hiring at scale',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'Team analytics',
        'Bulk talent search',
        'API access',
        'White-label options',
        'SLA & support',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="w-full">
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="mb-6">
              Simple, <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text">Transparent</span> Pricing
            </h1>
            <p className="text-[#94A3B8] text-xl max-w-2xl mx-auto">
              Choose the plan that's right for you. Start free, upgrade as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-8 rounded-2xl border relative ${
                  plan.popular
                    ? 'bg-gradient-to-br from-[#111827] to-[#0B1020] border-[#7C3AED]'
                    : 'bg-[#111827] border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white text-sm font-semibold flex items-center gap-1">
                    <Zap size={14} />
                    Most Popular
                  </div>
                )}

                <h3 className="text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-[#94A3B8]">{plan.period}</span>}
                </div>
                <p className="text-[#94A3B8] mb-8">{plan.description}</p>

                <Link
                  to="/get-started"
                  className={`w-full py-4 rounded-lg font-semibold mb-8 inline-block text-center transition-opacity ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-white hover:opacity-90'
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={20} className="text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="text-[#94A3B8]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[#94A3B8] mb-4">
              All plans include 14-day free trial. No credit card required.
            </p>
            <Link to="/contact" className="text-[#7C3AED] hover:text-[#3B82F6] transition-colors">
              Need a custom plan? Contact us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
