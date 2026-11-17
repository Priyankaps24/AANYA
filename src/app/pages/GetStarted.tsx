import { Shield, Award, Target } from 'lucide-react';

export function GetStarted() {
  return (
    <div className="w-full">
      <section className="py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="mb-6">
              Create Your <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text">Skill Passport</span>
            </h1>
            <p className="text-[#94A3B8] text-xl max-w-2xl mx-auto">
              Get started in minutes. Build your verified digital identity and unlock opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: '01',
                title: 'Create Account',
                description: 'Sign up with your email or GitHub account',
                icon: Shield,
                color: '#7C3AED',
              },
              {
                step: '02',
                title: 'Build Profile',
                description: 'Add your skills, projects, and achievements',
                icon: Target,
                color: '#3B82F6',
              },
              {
                step: '03',
                title: 'Get Verified',
                description: 'Complete challenges to verify your capabilities',
                icon: Award,
                color: '#06B6D4',
              },
            ].map((item) => (
              <div key={item.step} className="p-8 rounded-2xl bg-[#111827] border border-white/10 text-center">
                <div className="text-[#94A3B8] text-sm mb-4">{item.step}</div>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon size={28} style={{ color: item.color }} />
                </div>
                <h3 className="text-white mb-3">{item.title}</h3>
                <p className="text-[#94A3B8]">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://aanyacred.com"
              className="inline-block px-10 py-4 bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Create Account
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
