import { Shield, Github, Award, TrendingUp, Calendar, Share2, Download, Check } from 'lucide-react';

export function SkillPassport() {
  return (
    <div className="w-full">
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="mb-6">
              A Digital Passport<br />For <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text">Skills</span>
            </h1>
            <p className="text-[#94A3B8] text-xl max-w-2xl mx-auto">
              Your living profile of verified capabilities, achievements, and growth. Trusted by recruiters, powered by evidence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Main Passport Preview */}
            <div className="lg:col-span-2">
              <div className="p-10 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1020] border border-white/10 shadow-2xl">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center text-white text-3xl font-bold">
                      JD
                    </div>
                    <div>
                      <h2 className="text-white">Jane Developer</h2>
                      <p className="text-[#94A3B8]">AI-Native Full Stack Engineer</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Shield size={16} className="text-[#10B981]" />
                        <span className="text-[#10B981] text-sm">Verified Profile</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <Share2 size={20} className="text-[#94A3B8]" />
                    </button>
                    <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <Download size={20} className="text-[#94A3B8]" />
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'AI Readiness', value: 'A+', color: '#7C3AED' },
                    { label: 'Projects', value: '24', color: '#3B82F6' },
                    { label: 'Skills', value: '12', color: '#06B6D4' },
                    { label: 'Rank', value: '#487', color: '#F59E0B' },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-xl bg-white/5 text-center">
                      <p className="text-[#94A3B8] text-sm mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold" style={{ color: stat.color }}>
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-white mb-4 flex items-center gap-2">
                      <Shield size={18} className="text-[#10B981]" />
                      Verified Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'Node.js', 'Python', 'AI/ML', 'System Design', 'PostgreSQL', 'AWS'].map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 rounded-lg bg-white/10 text-white text-sm border border-[#10B981]/30 flex items-center gap-2"
                        >
                          <Check size={14} className="text-[#10B981]" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white mb-4 flex items-center gap-2">
                      <Award size={18} className="text-[#7C3AED]" />
                      Recent Achievements
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { title: 'AI Engineering Master', date: '2026-05-15', type: 'Certification' },
                        { title: 'Top 5% Global Rank', date: '2026-05-01', type: 'Achievement' },
                        { title: 'RAG System Builder', date: '2026-04-20', type: 'Project' },
                      ].map((achievement) => (
                        <div key={achievement.title} className="p-4 rounded-xl bg-white/5 border border-white/10">
                          <p className="text-white font-medium mb-1">{achievement.title}</p>
                          <div className="flex items-center justify-between">
                            <p className="text-[#94A3B8] text-sm">{achievement.type}</p>
                            <p className="text-[#94A3B8] text-xs">{achievement.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white mb-4 flex items-center gap-2">
                      <Github size={18} className="text-[#94A3B8]" />
                      Featured Projects
                    </h4>
                    <div className="space-y-3">
                      {[
                        { name: 'AI Content Generator', tech: 'React, GPT-4, Node.js', stars: 234 },
                        { name: 'Real-time Analytics Dashboard', tech: 'TypeScript, PostgreSQL', stars: 156 },
                      ].map((project) => (
                        <div key={project.name} className="p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-white font-medium mb-1">{project.name}</p>
                              <p className="text-[#94A3B8] text-sm">{project.tech}</p>
                            </div>
                            <span className="text-[#F59E0B] text-sm">★ {project.stars}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[#111827] border border-white/10">
                <h4 className="text-white mb-4">What's Included</h4>
                <ul className="space-y-3">
                  {[
                    'Verified skill certifications',
                    'Project portfolio',
                    'AI readiness scoring',
                    'Growth timeline',
                    'Shareable credentials',
                    'GitHub integration',
                    'Achievement badges',
                    'Recruiter visibility',
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check size={18} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="text-[#94A3B8] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#7C3AED]/10 to-[#3B82F6]/10 border border-[#7C3AED]/30">
                <TrendingUp size={24} className="text-[#7C3AED] mb-4" />
                <h4 className="text-white mb-2">Growth Timeline</h4>
                <p className="text-[#94A3B8] text-sm mb-4">
                  Track your skill development over time with AI-powered insights.
                </p>
                <div className="space-y-2">
                  {[
                    { month: 'May 2026', progress: 95 },
                    { month: 'Apr 2026', progress: 78 },
                    { month: 'Mar 2026', progress: 62 },
                  ].map((month) => (
                    <div key={month.month}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[#94A3B8] text-xs">{month.month}</span>
                        <span className="text-white text-xs">{month.progress}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]"
                          style={{ width: `${month.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#111827] border border-white/10">
                <Calendar size={24} className="text-[#06B6D4] mb-4" />
                <h4 className="text-white mb-2">Verification</h4>
                <p className="text-[#94A3B8] text-sm">
                  All credentials are blockchain-backed and cryptographically verified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
