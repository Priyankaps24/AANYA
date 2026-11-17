import { Target, Eye, Heart, Users } from 'lucide-react';

export function About() {
  return (
    <div className="w-full">
      <section className="py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="mb-6">
              Building The <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text">Trust Layer</span><br />
              For Future Talent
            </h1>
            <p className="text-[#94A3B8] text-xl max-w-2xl mx-auto">
              We're building the infrastructure that helps people showcase what they can actually do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1020] border border-white/10">
              <Target size={32} className="text-[#7C3AED] mb-6" />
              <h2 className="mb-4">Our Mission</h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Help people showcase what they can actually do. We believe the future belongs to builders who can demonstrate real capability, not just credentials.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1020] border border-white/10">
              <Eye size={32} className="text-[#3B82F6] mb-6" />
              <h2 className="mb-4">Our Vision</h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                A future where skills matter more than credentials alone. Where anyone can build their reputation through verified achievements and demonstrated capability.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Trust Through Evidence',
                  description: 'We verify skills through real projects and certifications, not self-reported claims.',
                  icon: Heart,
                  color: '#10B981',
                },
                {
                  title: 'Build For The Future',
                  description: 'AI is changing how we work. We prepare people for an AI-first future.',
                  icon: Target,
                  color: '#7C3AED',
                },
                {
                  title: 'Empower Everyone',
                  description: 'Opportunity should be accessible to anyone willing to learn and build.',
                  icon: Users,
                  color: '#3B82F6',
                },
              ].map((value) => (
                <div key={value.title} className="p-6 rounded-2xl bg-[#111827] border border-white/10 text-center">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: `${value.color}20` }}
                  >
                    <value.icon size={28} style={{ color: value.color }} />
                  </div>
                  <h3 className="text-white mb-3">{value.title}</h3>
                  <p className="text-[#94A3B8]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 rounded-2xl bg-gradient-to-br from-[#7C3AED]/10 to-[#3B82F6]/10 border border-[#7C3AED]/30 text-center">
            <h2 className="mb-6">The Future of Work</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-[#94A3B8] text-lg leading-relaxed">
              <p>
                Traditional education and hiring are broken. Degrees tell stories, but skills prove them.
              </p>
              <p>
                AI can generate code, content, and ideas. The people who thrive will be those who can think critically, solve problems, and turn ideas into reality.
              </p>
              <p className="text-white font-medium">
                Aanya Cred is building the operating system for future talent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
