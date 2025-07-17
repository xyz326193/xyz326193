import React, { useState } from 'react';
import { Search, Filter, Grid, List, Star, Download, Eye } from 'lucide-react';
import { SmartLink } from '../components/SmartLink';

export const TemplatesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Templates', count: 124 },
    { id: 'animals', name: 'Animals', count: 32 },
    { id: 'space', name: 'Space', count: 18 },
    { id: 'nature', name: 'Nature', count: 28 },
    { id: 'fantasy', name: 'Fantasy', count: 22 },
    { id: 'alphabet', name: 'Alphabet', count: 16 },
    { id: 'seasons', name: 'Seasons', count: 8 }
  ];

  const templates = [
    {
      id: 1,
      title: 'Friendly Forest Animals',
      category: 'animals',
      description: 'Cute woodland creatures perfect for young children',
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      downloads: 1284,
      rating: 4.8,
      complexity: 'simple',
      featured: true
    },
    {
      id: 2,
      title: 'Space Adventure',
      category: 'space',
      description: 'Rockets, planets, and astronauts exploring the cosmos',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      downloads: 892,
      rating: 4.9,
      complexity: 'medium',
      featured: false
    },
    {
      id: 3,
      title: 'Magical Unicorns',
      category: 'fantasy',
      description: 'Enchanted unicorns in mystical landscapes',
      image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      downloads: 756,
      rating: 4.7,
      complexity: 'medium',
      featured: true
    },
    {
      id: 4,
      title: 'Ocean Life',
      category: 'animals',
      description: 'Dolphins, whales, and colorful sea creatures',
      image: 'https://images.pexels.com/photos/1007669/pexels-photo-1007669.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      downloads: 634,
      rating: 4.6,
      complexity: 'complex',
      featured: false
    },
    {
      id: 5,
      title: 'Butterfly Garden',
      category: 'nature',
      description: 'Beautiful butterflies among blooming flowers',
      image: 'https://images.pexels.com/photos/133464/pexels-photo-133464.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      downloads: 543,
      rating: 4.8,
      complexity: 'medium',
      featured: false
    },
    {
      id: 6,
      title: 'Alphabet Adventure',
      category: 'alphabet',
      description: 'Learn letters with fun illustrations',
      image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      downloads: 967,
      rating: 4.9,
      complexity: 'simple',
      featured: true
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'simple': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'complex': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Coloring Book
            <span className="block bg-gradient-to-r from-coral-500 to-purple-500 bg-clip-text text-transparent">
              Templates
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our collection of professionally designed templates or use them as inspiration for your own creations
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-all duration-200"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode */}
            <div className="flex items-center space-x-2 bg-gray-50 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' ? 'bg-white shadow-sm text-coral-600' : 'text-gray-600 hover:text-coral-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' ? 'bg-white shadow-sm text-coral-600' : 'text-gray-600 hover:text-coral-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredTemplates.map(template => (
            <div
              key={template.id}
              className={`group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-coral-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {template.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-coral-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}
              
              <div className={`relative ${viewMode === 'list' ? 'w-48' : 'aspect-w-16 aspect-h-10'}`}>
                <img
                  src={template.image}
                  alt={template.title}
                  className={`object-cover group-hover:scale-110 transition-transform duration-300 ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors duration-200">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors duration-200">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-coral-600 transition-colors duration-200">
                    {template.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(template.complexity)}`}>
                    {template.complexity}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{template.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{template.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{template.downloads}</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <SmartLink
                    to="/create"
                    state={{ template }}
                    className="flex-1 py-2 px-4 bg-gradient-to-r from-coral-500 to-purple-500 text-white rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Use Template
                  </SmartLink>
                  <button className="py-2 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No templates found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-coral-500 text-white rounded-lg font-medium hover:bg-coral-600 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};