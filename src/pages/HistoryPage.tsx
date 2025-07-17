import React, { useState } from 'react';
import { Calendar, Search, Filter, Download, Eye, Heart, Trash2 } from 'lucide-react';

export const HistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const historyItems = [
    {
      id: 1,
      prompt: 'A friendly dragon sitting in a meadow with colorful flowers',
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      date: '2024-01-15',
      style: 'outline',
      complexity: 'simple',
      downloads: 3,
      liked: true
    },
    {
      id: 2,
      prompt: 'Space rocket flying through stars and planets',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      date: '2024-01-14',
      style: 'cartoon',
      complexity: 'medium',
      downloads: 1,
      liked: false
    },
    {
      id: 3,
      prompt: 'Cute cat playing with a ball of yarn',
      image: 'https://images.pexels.com/photos/1007669/pexels-photo-1007669.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      date: '2024-01-13',
      style: 'detailed',
      complexity: 'medium',
      downloads: 2,
      liked: true
    },
    {
      id: 4,
      prompt: 'Magical unicorn in an enchanted forest',
      image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      date: '2024-01-12',
      style: 'outline',
      complexity: 'complex',
      downloads: 5,
      liked: false
    },
    {
      id: 5,
      prompt: 'Butterfly garden with many colorful flowers',
      image: 'https://images.pexels.com/photos/133464/pexels-photo-133464.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      date: '2024-01-11',
      style: 'mandala',
      complexity: 'complex',
      downloads: 4,
      liked: true
    },
    {
      id: 6,
      prompt: 'Pirate ship sailing on the ocean',
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      date: '2024-01-10',
      style: 'cartoon',
      complexity: 'medium',
      downloads: 2,
      liked: false
    }
  ];

  const filteredItems = historyItems.filter(item => {
    const matchesSearch = item.prompt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'liked' && item.liked) ||
                         (selectedFilter === 'recent' && new Date(item.date) > new Date('2024-01-13'));
    return matchesSearch && matchesFilter;
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
            Your Creative
            <span className="block bg-gradient-to-r from-coral-500 to-purple-500 bg-clip-text text-transparent">
              History
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Browse and manage all your AI-generated coloring pages
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search your creations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-all duration-200"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-all duration-200"
              >
                <option value="all">All Items</option>
                <option value="recent">Recent</option>
                <option value="liked">Liked</option>
              </select>
            </div>
          </div>
        </div>

        {/* History Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-coral-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.prompt}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
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
                  <button className={`w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-200 ${
                    item.liked ? 'text-red-500' : 'text-gray-700 hover:text-red-500'
                  }`}>
                    <Heart className={`w-4 h-4 ${item.liked ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Complexity Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(item.complexity)}`}>
                    {item.complexity}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Download className="w-4 h-4" />
                    <span>{item.downloads}</span>
                  </div>
                </div>

                <p className="text-gray-900 font-medium mb-3 line-clamp-2">{item.prompt}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 capitalize">Style: {item.style}</span>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 py-2 px-4 bg-coral-50 text-coral-700 rounded-lg font-medium hover:bg-coral-100 transition-colors duration-200">
                    View
                  </button>
                  <button className="flex-1 py-2 px-4 bg-mint-50 text-mint-700 rounded-lg font-medium hover:bg-mint-100 transition-colors duration-200">
                    Download
                  </button>
                  <button className="py-2 px-4 bg-purple-50 text-purple-700 rounded-lg font-medium hover:bg-purple-100 transition-colors duration-200">
                    Recreate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or create your first coloring page</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedFilter('all');
              }}
              className="px-6 py-3 bg-coral-500 text-white rounded-lg font-medium hover:bg-coral-600 transition-colors duration-200"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Load More */}
        {filteredItems.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};