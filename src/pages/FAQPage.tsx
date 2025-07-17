import React, { useState } from 'react';
import { Search, Plus, Minus, User, Image, Download, Bug } from 'lucide-react';

export const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Questions', icon: Search },
    { id: 'account', name: 'Account', icon: User },
    { id: 'generation', name: 'Generation', icon: Image },
    { id: 'download', name: 'Download', icon: Download },
    { id: 'technical', name: 'Technical', icon: Bug }
  ];

  const faqs = [
    {
      id: 1,
      category: 'account',
      question: 'How do I create an account?',
      answer: 'You can create an account by clicking the "Sign Up" button in the top right corner of the website. You can also start using the service without an account, but creating one allows you to save your generated coloring pages and access your history.'
    },
    {
      id: 2,
      category: 'generation',
      question: 'How does the AI coloring page generation work?',
      answer: 'Our AI uses advanced machine learning models to interpret your text descriptions and create line art suitable for coloring. Simply describe what you want to see, choose your style preferences, and our AI will generate a unique coloring page in seconds.'
    },
    {
      id: 3,
      category: 'download',
      question: 'What file formats can I download?',
      answer: 'Generated coloring pages are available in high-resolution PNG format, which is perfect for printing. The images are optimized for standard paper sizes and provide crisp, clear lines for coloring.'
    },
    {
      id: 4,
      category: 'generation',
      question: 'Can I control the complexity of the coloring pages?',
      answer: 'Yes! You can choose from three complexity levels: Simple (perfect for younger children), Medium (balanced for all ages), and Complex (detailed designs for advanced colorists). This ensures the coloring page matches your intended audience.'
    },
    {
      id: 5,
      category: 'account',
      question: 'Is there a limit to how many coloring pages I can create?',
      answer: 'No, there are no limits! You can create as many coloring pages as you want. All your generated images are automatically saved to your account history for easy access later.'
    },
    {
      id: 6,
      category: 'technical',
      question: 'Why is my coloring page taking a long time to generate?',
      answer: 'Generation usually takes 10-30 seconds. If it\'s taking longer, it might be due to high demand or complex prompts. Try refreshing the page or simplifying your prompt. If the issue persists, contact our support team.'
    },
    {
      id: 7,
      category: 'generation',
      question: 'What makes a good prompt for coloring page generation?',
      answer: 'Good prompts are specific and descriptive. Include details about the subject, setting, and mood. For example, "A friendly dragon sitting in a meadow with flowers" works better than just "dragon". Avoid complex scenes with too many elements.'
    },
    {
      id: 8,
      category: 'download',
      question: 'Can I use the generated coloring pages commercially?',
      answer: 'Yes! You retain full ownership of the coloring pages you generate and can use them for personal, educational, or commercial purposes. This includes publishing them in books, using them in classrooms, or selling them.'
    },
    {
      id: 9,
      category: 'technical',
      question: 'The generated image doesn\'t match my prompt. What should I do?',
      answer: 'AI generation can be unpredictable. Try being more specific in your prompt, or use the "Regenerate" button to get a different result. You can also experiment with different style options to get closer to your vision.'
    },
    {
      id: 10,
      category: 'account',
      question: 'How do I delete my account?',
      answer: 'You can delete your account by going to your Account Settings and clicking "Delete Account". This will permanently remove all your data, including generated images and history. This action cannot be undone.'
    },
    {
      id: 11,
      category: 'generation',
      question: 'Can I edit the generated coloring pages?',
      answer: 'ColorCraft AI generates final coloring pages that are ready to use. While we don\'t provide editing tools, you can download the high-resolution images and edit them in any image editing software if needed.'
    },
    {
      id: 12,
      category: 'technical',
      question: 'Which browsers are supported?',
      answer: 'ColorCraft AI works best on modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for the best experience.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked
            <span className="block bg-gradient-to-r from-coral-500 to-purple-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about ColorCraft AI. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex space-x-2 overflow-x-auto">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-coral-500 text-white shadow-lg'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map(faq => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-coral-500 focus:ring-inset rounded-2xl"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    categories.find(cat => cat.id === faq.category)?.id === 'account' ? 'bg-coral-100' :
                    categories.find(cat => cat.id === faq.category)?.id === 'generation' ? 'bg-mint-100' :
                    categories.find(cat => cat.id === faq.category)?.id === 'download' ? 'bg-purple-100' :
                    'bg-gray-100'
                  }`}>
                    {React.createElement(categories.find(cat => cat.id === faq.category)?.icon || Search, {
                      className: `w-4 h-4 ${
                        categories.find(cat => cat.id === faq.category)?.id === 'account' ? 'text-coral-500' :
                        categories.find(cat => cat.id === faq.category)?.id === 'generation' ? 'text-mint-500' :
                        categories.find(cat => cat.id === faq.category)?.id === 'download' ? 'text-purple-500' :
                        'text-gray-500'
                      }`
                    })}
                  </div>
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                </div>
                <div className="flex-shrink-0">
                  {openItems.includes(faq.id) ? (
                    <Minus className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openItems.includes(faq.id) && (
                <div className="px-6 pb-4">
                  <div className="pl-11 pr-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or browse all categories</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-coral-500 text-white rounded-lg font-medium hover:bg-coral-600 transition-colors duration-200"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-12 bg-gradient-to-br from-coral-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our support team is here to help you get the most out of ColorCraft AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-coral-500 text-white rounded-lg font-medium hover:bg-coral-600 transition-colors duration-200">
              Contact Support
            </button>
            <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};