import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Settings, HelpCircle, Wand2, Image, Palette } from 'lucide-react';

export const PromptPage = () => {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('outline');
  const [complexity, setComplexity] = useState('simple');
  const [theme, setTheme] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      navigate('/result', { 
        state: { 
          prompt, 
          style, 
          complexity, 
          theme,
          generatedImage: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      });
    }, 3000);
  };

  const styleOptions = [
    { value: 'outline', label: 'Clean Outline', description: 'Simple, clean lines perfect for coloring' },
    { value: 'detailed', label: 'Detailed Line Art', description: 'More intricate designs with extra details' },
    { value: 'cartoon', label: 'Cartoon Style', description: 'Fun, playful cartoon-style illustrations' },
    { value: 'mandala', label: 'Mandala Style', description: 'Circular, meditative patterns' }
  ];

  const complexityOptions = [
    { value: 'simple', label: 'Simple', description: 'Perfect for younger children' },
    { value: 'medium', label: 'Medium', description: 'Balanced complexity for all ages' },
    { value: 'complex', label: 'Complex', description: 'Detailed designs for advanced colorists' }
  ];

  const themeOptions = [
    { value: '', label: 'No Theme', description: 'Create without a specific theme' },
    { value: 'animals', label: 'Animals', description: 'Cute and friendly animal designs' },
    { value: 'space', label: 'Space', description: 'Rockets, planets, and cosmic adventures' },
    { value: 'nature', label: 'Nature', description: 'Flowers, trees, and natural scenes' },
    { value: 'fantasy', label: 'Fantasy', description: 'Dragons, unicorns, and magical creatures' }
  ];

  const examplePrompts = [
    "A friendly dragon sitting in a meadow",
    "A rocket ship flying through space with stars",
    "A cute cat playing with a ball of yarn",
    "A magical unicorn in an enchanted forest",
    "A butterfly garden with many flowers"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-mint-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-mint-200 rounded-full px-4 py-2 text-sm font-medium text-mint-700 shadow-sm mb-4">
            <Sparkles className="w-4 h-4" />
            <span>AI Coloring Book Generator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Create Your
            <span className="block bg-gradient-to-r from-mint-500 to-coral-500 bg-clip-text text-transparent">
              Perfect Coloring Page
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Describe what you want to create and our AI will generate a beautiful coloring book illustration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Prompt Input */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-mint-500 to-coral-500 rounded-xl flex items-center justify-center">
                  <Wand2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Describe Your Idea</h2>
                  <p className="text-gray-600 text-sm">What would you like to create?</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your coloring page idea... (e.g., 'A friendly dragon sitting in a meadow with flowers')"
                    className="w-full h-32 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-mint-500 focus:border-mint-500 resize-none text-gray-900 placeholder-gray-500 transition-all duration-200"
                    maxLength={200}
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                    {prompt.length}/200
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {examplePrompts.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => setPrompt(example)}
                      className="px-3 py-1 bg-mint-50 text-mint-700 rounded-full text-sm hover:bg-mint-100 transition-colors duration-200"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Style Options */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-coral-500 rounded-xl flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Style & Settings</h2>
                  <p className="text-gray-600 text-sm">Customize your coloring page</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Style Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Art Style</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {styleOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setStyle(option.value)}
                        className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                          style === option.value
                            ? 'border-mint-500 bg-mint-50 text-mint-700'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="font-medium">{option.label}</div>
                        <div className="text-sm text-gray-500 mt-1">{option.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Complexity Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Complexity Level</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {complexityOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setComplexity(option.value)}
                        className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                          complexity === option.value
                            ? 'border-coral-500 bg-coral-50 text-coral-700'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="font-medium">{option.label}</div>
                        <div className="text-sm text-gray-500 mt-1">{option.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Theme Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Theme (Optional)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {themeOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setTheme(option.value)}
                        className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                          theme === option.value
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="font-medium">{option.label}</div>
                        <div className="text-sm text-gray-500 mt-1">{option.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <button
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  !prompt.trim() || isGenerating
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-mint-500 to-coral-500 text-white hover:shadow-xl hover:shadow-mint-500/25 transform hover:scale-105'
                }`}
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Generating Your Coloring Page...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Image className="w-5 h-5" />
                    <span>Generate Coloring Page</span>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tips */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                <HelpCircle className="w-5 h-5 text-mint-500" />
                <h3 className="font-semibold text-gray-900">Tips for Better Results</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-mint-500 mt-1">•</span>
                  <span>Be specific about what you want to see</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-mint-500 mt-1">•</span>
                  <span>Use descriptive words like "friendly", "cute", or "magical"</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-mint-500 mt-1">•</span>
                  <span>Mention the setting or background</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-mint-500 mt-1">•</span>
                  <span>Choose the right complexity for your audience</span>
                </li>
              </ul>
            </div>

            {/* Settings */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                <Settings className="w-5 h-5 text-coral-500" />
                <h3 className="font-semibold text-gray-900">Quick Settings</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">High Resolution</span>
                  <input type="checkbox" className="w-4 h-4 text-mint-500" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Thick Lines</span>
                  <input type="checkbox" className="w-4 h-4 text-mint-500" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Print Ready</span>
                  <input type="checkbox" className="w-4 h-4 text-mint-500" defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};