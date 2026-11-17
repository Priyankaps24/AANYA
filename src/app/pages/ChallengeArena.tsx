import { Code, Brain, Lightbulb, Database, Layout, Rocket, Trophy, Flame, Star } from 'lucide-react';

export function ChallengeArena() {
  const categories = [
    { name: 'Coding', icon: Code, color: '#7C3AED', challenges: 247 },
    { name: 'AI Engineering', icon: Brain, color: '#3B82F6', challenges: 89 },
    { name: 'Prompt Engineering', icon: Lightbulb, color: '#06B6D4', challenges: 156 },
    { name: 'System Design', icon: Layout, color: '#10B981', challenges: 112 },
    { name: 'Data Science', icon: Database, color: '#F59E0B', challenges: 178 },
    { name: 'Product Thinking', icon: Rocket, color: '#EC4899', challenges: 93 },
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Chen', xp: 12450, streak: 89, avatar: 'AC' },
    { rank: 2, name: 'Sarah Kim', xp: 11230, streak: 67, avatar: 'SK' },
    { rank: 3, name: 'Marcus Johnson', xp: 10890, streak: 54, avatar: 'MJ' },
    { rank: 4, name: 'Emma Davis', xp: 10120, streak: 45, avatar: 'ED' },
    { rank: 5, name: 'Raj Patel', xp: 9870, streak: 38, avatar: 'RP' },
  ];

  return (
    <div className="w-full">
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="mb-6">
              Learn By <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text">Building.</span><br />
              Not Memorizing.
            </h1>
            <p className="text-[#94A3B8] text-xl max-w-2xl mx-auto">
              A next-generation platform inspired by LeetCode and HackerRank, but built for the AI era. Master real-world skills through hands-on challenges.
            </p>
          </div>

          {/* Challenge Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((category) => (
              <div
                key={category.name}
                className="p-8 rounded-2xl bg-[#111827] border border-white/10 hover:border-white/20 transition-all group cursor-pointer"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon size={28} style={{ color: category.color }} />
                </div>
                <h3 className="text-white mb-2">{category.name}</h3>
                <p className="text-[#94A3B8]">{category.challenges} Challenges</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Leaderboard */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1020] border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Trophy size={24} className="text-[#F59E0B]" />
                <h3 className="text-white">Global Leaderboard</h3>
              </div>
              <div className="space-y-4">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-[#94A3B8] font-bold w-6">#{user.rank}</div>
                      <div
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center text-white text-sm font-bold"
                      >
                        {user.avatar}
                      </div>
                      <div>
                        <p className="text-white font-medium">{user.name}</p>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-[#94A3B8]">{user.xp.toLocaleString()} XP</span>
                          <span className="flex items-center gap-1 text-[#F59E0B]">
                            <Flame size={14} />
                            {user.streak} day streak
                          </span>
                        </div>
                      </div>
                    </div>
                    {user.rank <= 3 && (
                      <Star size={20} className="text-[#F59E0B]" fill="#F59E0B" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Progression System */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1020] border border-white/10">
              <h3 className="text-white mb-6">Your Progression</h3>
              <div className="space-y-6">
                {[
                  { level: 'Explorer', xp: 500, color: '#94A3B8', completed: true },
                  { level: 'Builder', xp: 2000, color: '#3B82F6', completed: true },
                  { level: 'Creator', xp: 5000, color: '#7C3AED', completed: false, current: true },
                  { level: 'Innovator', xp: 10000, color: '#06B6D4', completed: false },
                  { level: 'Leader', xp: 20000, color: '#10B981', completed: false },
                  { level: 'Visionary', xp: 50000, color: '#F59E0B', completed: false },
                ].map((level) => (
                  <div key={level.level} className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 ${
                        level.completed
                          ? 'bg-white/10 border-white/20'
                          : level.current
                          ? 'border-current animate-pulse'
                          : 'border-white/5'
                      }`}
                      style={level.current || level.completed ? { borderColor: level.color } : {}}
                    >
                      {level.completed && <Star size={20} style={{ color: level.color }} fill={level.color} />}
                      {level.current && <div className="w-3 h-3 rounded-full" style={{ backgroundColor: level.color }} />}
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${level.current ? 'text-white' : 'text-[#94A3B8]'}`}>
                        {level.level}
                      </p>
                      <p className="text-sm text-[#94A3B8]">{level.xp.toLocaleString()} XP required</p>
                    </div>
                    {level.current && (
                      <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white">
                        Current
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Challenges */}
          <div>
            <h3 className="text-white mb-6">Featured Challenges</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Build a RAG System',
                  difficulty: 'Advanced',
                  category: 'AI Engineering',
                  xp: 500,
                  color: '#3B82F6',
                },
                {
                  title: 'Optimize Database Query',
                  difficulty: 'Intermediate',
                  category: 'System Design',
                  xp: 250,
                  color: '#10B981',
                },
                {
                  title: 'Prompt Chain Builder',
                  difficulty: 'Beginner',
                  category: 'Prompt Engineering',
                  xp: 100,
                  color: '#06B6D4',
                },
              ].map((challenge) => (
                <div
                  key={challenge.title}
                  className="p-6 rounded-2xl bg-[#111827] border border-white/10 hover:border-white/20 transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ backgroundColor: `${challenge.color}20`, color: challenge.color }}
                    >
                      {challenge.category}
                    </span>
                    <span className="text-[#F59E0B] text-sm font-bold">+{challenge.xp} XP</span>
                  </div>
                  <h4 className="text-white mb-2 group-hover:text-[#7C3AED] transition-colors">
                    {challenge.title}
                  </h4>
                  <p className="text-[#94A3B8] text-sm">{challenge.difficulty}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
