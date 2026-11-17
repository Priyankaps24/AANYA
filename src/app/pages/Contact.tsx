import { Mail, MessageSquare, Users } from 'lucide-react';

export function Contact() {
  return (
    <div className="w-full">
      <section className="py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="mb-6">Get In Touch</h1>
            <p className="text-[#94A3B8] text-xl max-w-2xl mx-auto">
              Have questions? We're here to help you build your future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'General Inquiries',
                description: 'Questions about the platform',
                icon: Mail,
                contact: 'hello@aanyacred.com',
                color: '#7C3AED',
              },
              {
                title: 'Support',
                description: 'Need help with your account',
                icon: MessageSquare,
                contact: 'support@aanyacred.com',
                color: '#3B82F6',
              },
              {
                title: 'Enterprise',
                description: 'Interested in team solutions',
                icon: Users,
                contact: 'enterprise@aanyacred.com',
                color: '#06B6D4',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-[#111827] border border-white/10 text-center"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon size={28} style={{ color: item.color }} />
                </div>
                <h3 className="text-white mb-2">{item.title}</h3>
                <p className="text-[#94A3B8] mb-4">{item.description}</p>
                <a
                  href={`mailto:${item.contact}`}
                  className="text-sm hover:underline"
                  style={{ color: item.color }}
                >
                  {item.contact}
                </a>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Send Us A Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#94A3B8] focus:outline-none focus:border-[#7C3AED]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#94A3B8] focus:outline-none focus:border-[#7C3AED]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#94A3B8] focus:outline-none focus:border-[#7C3AED] resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1020] border border-white/10">
                <h3 className="text-white mb-4">Office Hours</h3>
                <p className="text-[#94A3B8] mb-2">Monday - Friday</p>
                <p className="text-white">9:00 AM - 6:00 PM PST</p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1020] border border-white/10">
                <h3 className="text-white mb-4">Response Time</h3>
                <p className="text-[#94A3B8]">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#7C3AED]/10 to-[#3B82F6]/10 border border-[#7C3AED]/30">
                <h3 className="text-white mb-4">Join Our Community</h3>
                <p className="text-[#94A3B8] mb-4">
                  Connect with other builders, share your progress, and get support.
                </p>
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                  Join Discord
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
