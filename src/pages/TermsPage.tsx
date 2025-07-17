import React from 'react';
import { FileText, Scale, AlertCircle } from 'lucide-react';

export const TermsPage = () => {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      content: 'By accessing and using ColorCraft AI, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      id: 'description',
      title: 'Service Description',
      content: 'ColorCraft AI is an AI-powered platform that generates coloring book illustrations based on user prompts and preferences.'
    },
    {
      id: 'user-accounts',
      title: 'User Accounts',
      content: 'You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account information.'
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable Use',
      content: 'You agree to use our service only for lawful purposes and in accordance with these terms. Prohibited uses include generating inappropriate content or violating intellectual property rights.'
    },
    {
      id: 'content-ownership',
      title: 'Content Ownership',
      content: 'You retain ownership of the coloring pages you generate. However, you grant us a license to use your prompts to improve our AI models.'
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      content: 'The service, including its design, features, and underlying technology, is protected by copyright and other intellectual property laws.'
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers',
      content: 'The service is provided "as is" without warranties of any kind. We do not guarantee that the service will be uninterrupted or error-free.'
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      content: 'In no event shall ColorCraft AI be liable for any indirect, incidental, special, consequential, or punitive damages.'
    },
    {
      id: 'termination',
      title: 'Termination',
      content: 'We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these terms.'
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      content: 'We reserve the right to modify these terms at any time. Your continued use of the service constitutes acceptance of the modified terms.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2 text-sm font-medium text-purple-700 shadow-sm mb-6">
            <Scale className="w-4 h-4" />
            <span>Legal Terms & Conditions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of
            <span className="block bg-gradient-to-r from-purple-500 to-coral-500 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using ColorCraft AI. By using our service, you agree to these terms.
          </p>
          
          <div className="mt-6 text-sm text-gray-500">
            Last updated: January 15, 2025
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
              <p className="text-yellow-700">
                These terms constitute a legally binding agreement between you and ColorCraft AI. Please read them carefully and contact us if you have any questions.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block px-3 py-2 text-sm text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors duration-200"
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
                
                {section.id === 'acceptable-use' && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Prohibited activities include:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Generating inappropriate, offensive, or harmful content</li>
                      <li>• Violating intellectual property rights of others</li>
                      <li>• Attempting to reverse engineer or hack our systems</li>
                      <li>• Using the service for commercial purposes without permission</li>
                      <li>• Sharing account credentials with others</li>
                    </ul>
                  </div>
                )}
                
                {section.id === 'content-ownership' && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Content rights:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• You own the coloring pages you generate</li>
                      <li>• You can use them for personal, educational, or commercial purposes</li>
                      <li>• You grant us a license to use your prompts to improve our AI</li>
                      <li>• We may showcase generated content (with permission)</li>
                    </ul>
                  </div>
                )}
                
                {section.id === 'user-accounts' && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Account responsibilities:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Provide accurate and complete information</li>
                      <li>• Maintain the security of your password</li>
                      <li>• Notify us immediately of any unauthorized use</li>
                      <li>• You are responsible for all activity under your account</li>
                    </ul>
                  </div>
                )}
                
                {section.id === 'disclaimers' && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Service disclaimers:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Service availability may vary</li>
                      <li>• AI-generated content may not always meet expectations</li>
                      <li>• We do not guarantee specific results</li>
                      <li>• Third-party services may be integrated</li>
                    </ul>
                  </div>
                )}
                
                {section.id === 'termination' && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Termination conditions:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Violation of these terms</li>
                      <li>• Fraudulent or illegal activity</li>
                      <li>• Abuse of our service or resources</li>
                      <li>• Long periods of inactivity</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="space-y-2 text-gray-600">
            <p>Email: legal@colorcraft.ai</p>
            <p>Address: 123 Innovation Drive, Tech Valley, CA 94105</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
};