import React from 'react';
import { Shield, Clock, BarChart3, Globe, Lock, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Security Analysis',
      description: 'Comprehensive security scanning and vulnerability assessment for any domain.',
      color: 'from-teal-400 to-teal-600'
    },
    {
      icon: Clock,
      title: 'Historical Data',
      description: 'Access years of domain history, ownership changes, and performance metrics.',
      color: 'from-teal-400 to-teal-600'
    },
    {
      icon: BarChart3,
      title: 'Performance Metrics',
      description: 'Real-time monitoring of uptime, speed, and overall domain performance.',
      color: 'from-teal-400 to-teal-600'
    },
    {
      icon: Globe,
      title: 'Global Insights',
      description: 'Worldwide perspective on domain accessibility and geographic performance.',
      color: 'from-teal-400 to-teal-600'
    },
    {
      icon: Lock,
      title: 'Privacy Protection',
      description: 'Analyze privacy settings, WHOIS data, and domain protection status.',
      color: 'from-teal-400 to-teal-600'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get comprehensive domain analysis results in seconds, not minutes.',
      color: 'from-teal-400 to-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Powerful Domain Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our advanced analysis engine provides comprehensive insights into any domain's
            infrastructure, security, and performance characteristics.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer hover:bg-gray-600"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                {/* Gradient Title */}
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                {/* Updated Description Color */}
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
