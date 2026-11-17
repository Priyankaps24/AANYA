import { Link } from 'react-router';
import { ArrowRight, Check, Sparkles, TrendingUp, Shield, Award, Target, Zap } from 'lucide-react';

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-24 lg:py-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <Sparkles size={16} className="text-[#7C3AED]" />
                <span className="text-sm text-[#94A3B8]">Introducing AI-Native Skill Passports</span>
              </div> */}

              <h1 className="mb-6">
                Build Skills.<br />
                Earn <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text">Credibility.</span><br />
                {/* Shape The <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text">Future.</span> */}
              Shape The <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text whitespace-nowrap">Future.</span>
              </h1>

              <p className="text-[#94A3B8] text-md mb-10 max-w-2xl">
                AanyaCred helps learners showcase verified skills, projects, achievements, and AI-era competencies through a trusted digital Skill Passport.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/get-started"
                  className="px-8 py-4 bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-white rounded-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 font-semibold"
                >
                  Get Started
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/skill-passport"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors inline-flex items-center justify-center gap-2 border border-white/10"
                >
                  View Sample Passport
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#111827] to-[#0B1020] rounded-2xl border border-white/6 p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center text-white text-2xl font-bold">
                    JD
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Jane Developer</h3>
                    <p className="text-[#94A3B8] text-sm">AI-Native Full Stack Engineer</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#10B981]/20 flex items-center justify-center">
                        <Shield size={20} className="text-[#10B981]" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Verified Skills</p>
                        <p className="text-[#94A3B8] text-xs">12 Skills Certified</p>
                      </div>
                    </div>
                    <div className="text-[#10B981] font-bold">98%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center">
                        <Target size={20} className="text-[#3B82F6]" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Projects Completed</p>
                        <p className="text-[#94A3B8] text-xs">24 Total Projects</p>
                      </div>
                    </div>
                    <div className="text-[#3B82F6] font-bold">24</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/20 flex items-center justify-center">
                        <Award size={20} className="text-[#7C3AED]" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">AI Readiness Score</p>
                        <p className="text-[#94A3B8] text-xs">Advanced Level</p>
                      </div>
                    </div>
                    <div className="text-[#7C3AED] font-bold">A+</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/20 flex items-center justify-center">
                        <TrendingUp size={20} className="text-[#F59E0B]" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Challenge Ranking</p>
                        <p className="text-[#94A3B8] text-xs">Top 5% Globally</p>
                      </div>
                    </div>
                    <div className="text-[#F59E0B] font-bold">#487</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 border-y border-white/8 bg-[#0B1020]/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <p className="text-center text-[#94A3B8] text-sm mb-8">Trusted By Future Builders</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
            {['University', 'TechCorp', 'Innovate', 'BuildLab'].map((name) => (
              <div key={name} className="text-center text-white/40 font-semibold text-xl">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <h2 className="text-center mb-16">
            Degrees Tell Stories.<br />Skills Prove Them.
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white mb-6">Traditional Resume</h3>
              <div className="space-y-4">
                {[
                  { label: 'Skills', value: 'Self-reported lists', negative: true },
                  { label: 'Evidence', value: 'Minimal proof', negative: true },
                  { label: 'Projects', value: 'Brief descriptions', negative: true },
                  { label: 'Growth', value: 'Not tracked', negative: true },
                  // { label: 'Verification', value: 'Limited', negative: true },
                  { label: 'Discoverability', value: 'Low', negative: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-white/5">
                    <span className="text-[#94A3B8]">{item.label}</span>
                    <span className="text-red-400">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1020] border border-[#7C3AED]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/10 rounded-full blur-3xl"></div>
              <h3 className="text-white mb-6 relative">Skill Passport</h3>
              <div className="space-y-4 relative">
                {[
                  { label: 'Skills', value: 'Verified & Certified', icon: Check },
                  { label: 'Evidence', value: 'Portfolio + Projects', icon: Check },
                  { label: 'Projects', value: 'Full Documentation', icon: Check },
                  { label: 'Growth', value: 'Real-time Analytics', icon: Check },
                  // { label: 'Verification', value: 'Blockchain-backed', icon: Check },
                  { label: 'Discoverability', value: 'AI-Enhanced', icon: Check },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-white/5">
                    <span className="text-[#94A3B8]">{item.label}</span>
                    <span className="text-[#10B981] flex items-center gap-2">
                      {item.value}
                      <item.icon size={16} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Ecosystem */}
      <section className="py-24 lg:py-32 bg-[#0B1020]/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">One Platform.<br />Multiple Ways To Grow.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Skill Passport',
                description: 'Your living digital identity showcasing verified skills and achievements',
                icon: Shield,
                color: '#7C3AED',
              },
              {
                title: 'Challenge Arena',
                description: 'Learn by building through AI-era challenges and real-world projects',
                icon: Target,
                color: '#3B82F6',
              },
              {
                title: 'Credential Vault',
                description: 'Securely store and share all your certifications and achievements',
                icon: Award,
                color: '#06B6D4',
              },
              {
                title: 'Project Portfolio',
                description: 'Showcase your work with rich evidence and interactive demos',
                icon: Zap,
                color: '#10B981',
              },
              {
                title: 'AI Skill Analytics',
                description: 'Get personalized insights on your growth and capability gaps',
                icon: TrendingUp,
                color: '#F59E0B',
              },
              {
                title: 'Recruiter Insights',
                description: 'Connect with opportunities that match your verified capabilities',
                icon: Sparkles,
                color: '#EC4899',
              },
            ].map((product) => (
              <div
                key={product.title}
                className="p-8 rounded-2xl bg-[#111827] border border-white/10 hover:border-white/20 transition-all group cursor-pointer"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${product.color}20` }}
                >
                  <product.icon size={24} style={{ color: product.color }} />
                </div>
                <h3 className="text-white mb-3">{product.title}</h3>
                <p className="text-[#94A3B8] text-base">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future of Talent */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="mb-6">The Future Belongs To Builders</h2>
          <p className="text-[#94A3B8] text-xl max-w-3xl mx-auto mb-12">
            AI can generate code, content, and ideas. The people who thrive will be those who can think critically, solve problems, and turn ideas into reality.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { title: 'Build with AI', description: 'Master AI tools and workflows' },
              { title: 'Learn Continuously', description: 'Adapt to emerging technologies' },
              { title: 'Demonstrate Capability', description: 'Prove skills through execution' },
            ].map((item) => (
              <div key={item.title} className="p-6">
                <h4 className="text-white mb-3">{item.title}</h4>
                <p className="text-[#94A3B8]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#7C3AED]/10 via-[#3B82F6]/10 to-[#06B6D4]/10 border-y border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready To Build Your Future?</h2>
          <p className="text-[#94A3B8] text-xl mb-12 max-w-2xl mx-auto">
            Create your Skill Passport and start showcasing your skills, achievements, and potential.
          </p>
          <Link
            to="/get-started"
            className="px-8 py-4 bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-white rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2 font-semibold text-lg"
          >
            Create My Skill Passport
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
