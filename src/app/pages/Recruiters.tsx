import { Search, Filter, Shield, TrendingUp, Users, Clock, Check, Star } from 'lucide-react';

export function Recruiters() {
  return (
    <div className="w-full">
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="mb-6">
              Discover <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text">Verified</span><br />Talent
            </h1>
            <p className="text-[#94A3B8] text-xl max-w-2xl mx-auto">
              Move beyond resumes. Find candidates with proven skills, real projects, and verified capabilities.
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1020] border border-white/10 mb-16">
            <div className="flex flex-col lg:flex-row gap-6 mb-6">
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                <input
                  type="text"
                  placeholder="Search by skills, projects, or AI capabilities..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#94A3B8] focus:outline-none focus:border-[#7C3AED]"
                />
              </div>
              <button className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors flex items-center gap-2">
                <Filter size={20} />
                Filters
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { label: 'AI Readiness', value: 'Advanced' },
                { label: 'Experience', value: '2-5 Years' },
                { label: 'Location', value: 'Remote' },
              ].map((filter) => (
                <div key={filter.label} className="p-4 rounded-xl bg-white/5">
                  <p className="text-[#94A3B8] text-sm mb-1">{filter.label}</p>
                  <p className="text-white font-medium">{filter.value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[
                {
                  name: 'Sarah Chen',
                  role: 'Full Stack AI Engineer',
                  skills: ['React', 'Python', 'LLM Integration'],
                  aiScore: 'A+',
                  projects: 18,
                  rank: 234,
                  verified: true,
                },
                {
                  name: 'Marcus Brown',
                  role: 'Senior Backend Developer',
                  skills: ['Node.js', 'PostgreSQL', 'System Design'],
                  aiScore: 'A',
                  projects: 24,
                  rank: 567,
                  verified: true,
                },
                {
                  name: 'Emily Rodriguez',
                  role: 'AI/ML Engineer',
                  skills: ['TensorFlow', 'PyTorch', 'RAG Systems'],
                  aiScore: 'A+',
                  projects: 15,
                  rank: 123,
                  verified: true,
                },
              ].map((candidate) => (
                <div
                  key={candidate.name}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center text-white font-bold">
                        {candidate.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white">{candidate.name}</h4>
                          {candidate.verified && (
                            <Shield size={16} className="text-[#10B981]" />
                          )}
                        </div>
                        <p className="text-[#94A3B8] mb-3">{candidate.role}</p>
                        <div className="flex flex-wrap gap-2">
                          {candidate.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 rounded-full bg-white/10 text-[#94A3B8] text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white hover:opacity-90 transition-opacity">
                      View Profile
                    </button>
                  </div>
                  <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <Star size={16} className="text-[#7C3AED]" />
                      <span className="text-sm text-[#94A3B8]">AI Score: <span className="text-white font-medium">{candidate.aiScore}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp size={16} className="text-[#3B82F6]" />
                      <span className="text-sm text-[#94A3B8]">{candidate.projects} Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-[#06B6D4]" />
                      <span className="text-sm text-[#94A3B8]">Rank #{candidate.rank}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: 'Verified Skills',
                description: 'All skills are certification-backed and project-proven',
                icon: Shield,
                color: '#10B981',
              },
              {
                title: 'AI-Powered Matching',
                description: 'Find candidates that perfectly match your requirements',
                icon: Search,
                color: '#7C3AED',
              },
              {
                title: '60% Faster Screening',
                description: 'Rich profiles eliminate back-and-forth questions',
                icon: Clock,
                color: '#3B82F6',
              },
              {
                title: 'Project Evidence',
                description: 'See real work, not just claims on a resume',
                icon: TrendingUp,
                color: '#06B6D4',
              },
            ].map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl bg-[#111827] border border-white/10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon size={24} style={{ color: feature.color }} />
                </div>
                <h4 className="text-white mb-2">{feature.title}</h4>
                <p className="text-[#94A3B8] text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="p-10 rounded-2xl bg-gradient-to-br from-[#7C3AED]/10 to-[#3B82F6]/10 border border-[#7C3AED]/30">
            <h2 className="text-center mb-12">Why Top Recruiters Choose Aanya Cred</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Verified Capabilities',
                  description: 'Every skill is backed by certifications, projects, and real-world evidence.',
                },
                {
                  title: 'Comprehensive Profiles',
                  description: 'See the full picture: skills, projects, growth trajectory, and AI readiness.',
                },
                {
                  title: 'Better Hires',
                  description: 'Reduce turnover with candidates who have proven track records.',
                },
              ].map((benefit) => (
                <div key={benefit.title}>
                  <div className="flex items-start gap-3 mb-3">
                    <Check size={24} className="text-[#10B981] flex-shrink-0" />
                    <h4 className="text-white">{benefit.title}</h4>
                  </div>
                  <p className="text-[#94A3B8]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
