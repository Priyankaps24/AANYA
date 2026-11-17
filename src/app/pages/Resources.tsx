import { BookOpen, Video, FileText, Headphones } from 'lucide-react';

export function Resources() {
  const resources = [
    {
      category: 'Guides',
      icon: BookOpen,
      color: '#7C3AED',
      items: [
        { title: 'Getting Started with Skill Passport', type: 'Guide', readTime: '5 min' },
        { title: 'How to Complete Your First Challenge', type: 'Tutorial', readTime: '10 min' },
        { title: 'Building an AI-Ready Portfolio', type: 'Guide', readTime: '15 min' },
      ],
    },
    {
      category: 'Video Tutorials',
      icon: Video,
      color: '#3B82F6',
      items: [
        { title: 'Platform Overview & Demo', type: 'Video', readTime: '8 min' },
        { title: 'Optimizing Your Profile for Recruiters', type: 'Video', readTime: '12 min' },
        { title: 'Challenge Arena Walkthrough', type: 'Video', readTime: '15 min' },
      ],
    },
    {
      category: 'Documentation',
      icon: FileText,
      color: '#06B6D4',
      items: [
        { title: 'API Reference', type: 'Docs', readTime: 'Reference' },
        { title: 'Verification Process Explained', type: 'Docs', readTime: '8 min' },
        { title: 'Integration Guide', type: 'Docs', readTime: '20 min' },
      ],
    },
    {
      category: 'Podcasts',
      icon: Headphones,
      color: '#10B981',
      items: [
        { title: 'The Future of Talent Verification', type: 'Podcast', readTime: '45 min' },
        { title: 'AI-Native Career Development', type: 'Podcast', readTime: '30 min' },
        { title: 'Building in Public: Success Stories', type: 'Podcast', readTime: '38 min' },
      ],
    },
  ];

  return (
    <div className="w-full">
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="mb-6">
              Learning <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text">Resources</span>
            </h1>
            <p className="text-[#94A3B8] text-xl max-w-2xl mx-auto">
              Everything you need to succeed on Aanya Cred and build your future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {resources.map((section) => (
              <div key={section.category}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${section.color}20` }}
                  >
                    <section.icon size={24} style={{ color: section.color }} />
                  </div>
                  <h2>{section.category}</h2>
                </div>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="p-6 rounded-2xl bg-[#111827] border border-white/10 hover:border-white/20 transition-all cursor-pointer group"
                    >
                      <h4 className="text-white mb-2 group-hover:text-[#7C3AED] transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span
                          className="text-sm px-3 py-1 rounded-full"
                          style={{ backgroundColor: `${section.color}20`, color: section.color }}
                        >
                          {item.type}
                        </span>
                        <span className="text-[#94A3B8] text-sm">{item.readTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-10 rounded-2xl bg-gradient-to-br from-[#7C3AED]/10 to-[#3B82F6]/10 border border-[#7C3AED]/30 text-center">
            <h2 className="mb-4">Need Help?</h2>
            <p className="text-[#94A3B8] text-lg mb-8">
              Our support team is here to help you succeed.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-white rounded-lg hover:opacity-90 transition-opacity font-semibold">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
