import React from 'react';
import { Heart, Target, Users, Award, Sparkles, Zap } from 'lucide-react';

export const AboutPage = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Former educator passionate about creative learning tools'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'AI researcher with expertise in computer vision'
    },
    {
      name: 'Emma Thompson',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Creative director with a background in children\'s illustration'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Full-stack developer specializing in AI integration'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Child-Centered Design',
      description: 'Every feature is designed with children\'s developmental needs and creative expression in mind.'
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'We leverage cutting-edge AI technology to make creativity accessible to everyone.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community of parents, educators, and creative professionals.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Committed to delivering professional-grade results that exceed expectations.'
    }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'The Idea',
      description: 'Sarah, a teacher, struggled to find quality coloring pages for her students and envisioned an AI solution.'
    },
    {
      year: '2024',
      title: 'First Prototype',
      description: 'Michael joined to build the first AI model capable of generating clean, child-friendly line art.'
    },
    {
      year: '2024',
      title: 'Beta Launch',
      description: 'Emma and David joined the team to create the beautiful, user-friendly platform you see today.'
    },
    {
      year: '2025',
      title: 'Growing Community',
      description: 'Over 10,000 creators have joined our platform, generating millions of coloring pages.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coral-50 to-purple-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-coral-200 rounded-full px-4 py-2 text-sm font-medium text-coral-700 shadow-sm mb-6">
            <Heart className="w-4 h-4" />
            <span>Made with Love for Creative Minds</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our
            <span className="block bg-gradient-to-r from-coral-500 to-purple-500 bg-clip-text text-transparent">
              Story
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            ColorCraft AI was born from a simple belief: every child deserves access to beautiful, engaging coloring materials that spark their imagination and creativity.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Target className="w-12 h-12 text-coral-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're democratizing creativity by making high-quality coloring book creation accessible to parents, educators, and creative professionals worldwide. Through the power of AI, we're turning imagination into beautiful, printable art in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem We Solve</h3>
              <p className="text-gray-600 mb-6">
                Creating quality coloring pages traditionally requires artistic skills, expensive software, or settling for generic templates. Parents and educators often struggle to find age-appropriate, engaging content that matches their specific needs.
              </p>
              <div className="flex items-center space-x-2 text-coral-600">
                <Zap className="w-5 h-5" />
                <span className="font-medium">Our solution: AI-powered instant creation</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-coral-50 to-purple-50 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                  <span className="text-gray-700">Instant generation from text descriptions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-mint-500 rounded-full"></div>
                  <span className="text-gray-700">Professional-quality line art</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Customizable complexity levels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                  <span className="text-gray-700">Print-ready high resolution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at ColorCraft AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-coral-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-coral-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind ColorCraft AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-coral-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-coral-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-coral-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From idea to impact - the ColorCraft AI story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-coral-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-coral-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.year}
                  </div>
                  <div className="ml-8 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-coral-500 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Creative Community
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of the movement that's making creativity accessible to everyone. Start creating amazing coloring books today.
          </p>
          <button className="px-8 py-4 bg-white text-coral-600 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Start Creating Now
          </button>
        </div>
      </section>
    </div>
  );
};