import React from 'react';
import { Sparkles, Zap, Download, Star, ArrowRight, Palette, Book, Users, Timer } from 'lucide-react';
import { SmartLink } from '../components/SmartLink';

export const HomePage = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Generation',
      description: 'Transform your ideas into beautiful coloring book illustrations with advanced AI technology.'
    },
    {
      icon: Palette,
      title: 'Professional Quality',
      description: 'Get crisp, clean line art perfect for coloring books with consistent style and quality.'
    },
    {
      icon: Book,
      title: 'Themed Templates',
      description: 'Choose from pre-designed templates or create custom themes for any occasion.'
    },
    {
      icon: Timer,
      title: 'Instant Results',
      description: 'Generate coloring book pages in seconds, not hours. Perfect for busy parents and educators.'
    }
  ];

  const templates = [
    {
      title: 'Animals',
      description: 'Cute animals and wildlife',
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Space Adventure',
      description: 'Rockets, planets, and astronauts',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Alphabet Fun',
      description: 'Educational letter designs',
      image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Seasons',
      description: 'Spring, summer, fall, winter',
      image: 'https://images.pexels.com/photos/1007669/pexels-photo-1007669.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Elementary Teacher',
      content: 'ColorCraft AI has transformed how I create educational materials. My students love the custom coloring pages!'
    },
    {
      name: 'Mike Chen',
      role: 'Parent',
      content: 'Finally, a tool that lets me create personalized coloring books for my kids. The quality is amazing!'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Indie Publisher',
      content: 'I\'ve published three coloring books using ColorCraft AI. The professional quality saves me hours of work.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-coral-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23f1f5f9%22%20fill-opacity=%220.3%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-coral-200 rounded-full px-4 py-2 text-sm font-medium text-coral-700 shadow-sm">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Coloring Book Creation</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Create Beautiful
                <span className="block bg-gradient-to-r from-coral-500 to-purple-500 bg-clip-text text-transparent">
                  Coloring Books
                </span>
                <span className="block">in Seconds</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your ideas into professional-quality coloring book illustrations with our AI-powered platform. Perfect for parents, educators, and creative professionals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <SmartLink
                to="/create"
                className="group relative px-8 py-4 bg-gradient-to-r from-coral-500 to-purple-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-coral-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Create Your First Book</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-coral-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </SmartLink>
              
              <SmartLink
                to="/templates"
                className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 rounded-xl font-semibold text-lg hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Browse Templates
              </SmartLink>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-coral-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-mint-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                </div>
                <span>Trusted by 10,000+ creators</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose ColorCraft AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of coloring book creation with our advanced AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-coral-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-coral-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Popular Templates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started quickly with our professionally designed template collections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templates.map((template, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-coral-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-10 relative overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.title}</h3>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <button className="w-full py-2 px-4 bg-gradient-to-r from-coral-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Use Template
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <SmartLink
              to="/templates"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Templates</span>
              <ArrowRight className="w-5 h-5" />
            </SmartLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Loved by Creators Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our community has to say about ColorCraft AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-coral-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-coral-500 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Create Amazing Coloring Books?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of creators who are already using ColorCraft AI to bring their ideas to life
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <SmartLink
                to="/create"
                className="group px-8 py-4 bg-white text-coral-600 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <span>Start Creating Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </SmartLink>
              <SmartLink
                to="/templates"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                Browse Templates
              </SmartLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};