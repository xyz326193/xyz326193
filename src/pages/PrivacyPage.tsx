import React from 'react';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

export const PrivacyPage = () => {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, generate coloring pages, or contact us for support.'
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, process your requests, and communicate with you.'
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.'
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking',
      content: 'We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content.'
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      content: 'You have the right to access, update, or delete your personal information. You can also opt out of certain communications.'
    },
    {
      id: 'childrens-privacy',
      title: 'Children\'s Privacy',
      content: 'Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.'
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-coral-200 rounded-full px-4 py-2 text-sm font-medium text-coral-700 shadow-sm mb-6">
            <Shield className="w-4 h-4" />
            <span>Your Privacy Matters</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy
            <span className="block bg-gradient-to-r from-coral-500 to-purple-500 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to protecting your privacy and being transparent about how we handle your data.
          </p>
          
          <div className="mt-6 text-sm text-gray-500">
            Last updated: January 15, 2025
          </div>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="w-12 h-12 bg-gradient-to-br from-coral-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Security</h3>
            <p className="text-gray-600 text-sm">Your personal information is encrypted and securely stored using industry-standard security measures.</p>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="w-12 h-12 bg-gradient-to-br from-mint-500 to-coral-500 rounded-xl flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparency</h3>
            <p className="text-gray-600 text-sm">We're clear about what data we collect, how we use it, and who we share it with.</p>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-coral-500 rounded-xl flex items-center justify-center mb-4">
              <UserCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Control</h3>
            <p className="text-gray-600 text-sm">You have full control over your data, including the ability to access, update, or delete it.</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block px-3 py-2 text-sm text-coral-600 hover:text-coral-700 hover:bg-coral-50 rounded-lg transition-colors duration-200"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className={`p-8 ${index < sections.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">{section.content}</p>
                
                {section.id === 'information-collection' && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Types of information we collect:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Account information (name, email address)</li>
                      <li>• Generated content (prompts, coloring pages)</li>
                      <li>• Usage data (how you interact with our service)</li>
                      <li>• Device information (browser type, IP address)</li>
                    </ul>
                  </div>
                )}
                
                {section.id === 'how-we-use' && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">We use your information to:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Provide and improve our AI coloring book generation service</li>
                      <li>• Process your requests and save your generated content</li>
                      <li>• Send you important updates about our service</li>
                      <li>• Provide customer support and respond to inquiries</li>
                      <li>• Analyze usage patterns to enhance user experience</li>
                    </ul>
                  </div>
                )}
                
                {section.id === 'data-security' && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Security measures include:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Encryption of data in transit and at rest</li>
                      <li>• Regular security audits and vulnerability assessments</li>
                      <li>• Access controls and authentication requirements</li>
                      <li>• Secure data centers with physical security measures</li>
                      <li>• Regular backup and disaster recovery procedures</li>
                    </ul>
                  </div>
                )}
                
                {section.id === 'your-rights' && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Your rights include:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Access to your personal information</li>
                      <li>• Correction of inaccurate information</li>
                      <li>• Deletion of your account and associated data</li>
                      <li>• Opt-out of marketing communications</li>
                      <li>• Data portability (export your data)</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="space-y-2 text-gray-600">
            <p>Email: privacy@colorcraft.ai</p>
            <p>Address: 123 Innovation Drive, Tech Valley, CA 94105</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
};