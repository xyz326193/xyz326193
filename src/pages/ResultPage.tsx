import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Download, RefreshCw, ArrowLeft, Share2, Heart, Sparkles } from 'lucide-react';
import { SmartLink } from '../components/SmartLink';

export const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const { prompt, style, complexity, theme, generatedImage } = location.state || {};

  if (!generatedImage) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">No Result Found</h1>
          <p className="text-gray-600 mb-8">Please generate a coloring page first.</p>
          <SmartLink
            to="/create"
            className="px-6 py-3 bg-gradient-to-r from-coral-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            Create New Page
          </SmartLink>
        </div>
      </div>
    );
  }

  const handleDownload = async () => {
    setIsDownloading(true);
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
      // In a real app, this would trigger the actual download
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = 'coloring-page.png';
      link.click();
    }, 2000);
  };

  const handleRegenerate = () => {
    navigate('/create', { state: { prompt, style, complexity, theme } });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My ColorCraft AI Creation',
          text: `Check out this coloring page I created with AI: "${prompt}"`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isLiked
                  ? 'bg-red-50 text-red-600 border border-red-200'
                  : 'bg-white text-gray-600 border border-gray-200 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span>{isLiked ? 'Liked' : 'Like'}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Image */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2 text-sm font-medium text-purple-700 mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>AI Generated</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Your Coloring Page is Ready!
                </h1>
                <p className="text-gray-600">
                  Created from: "{prompt}"
                </p>
              </div>

              <div className="relative group">
                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={generatedImage}
                    alt="Generated coloring page"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="flex-1 flex items-center justify-center space-x-2 py-3 px-6 bg-gradient-to-r from-coral-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-coral-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isDownloading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Downloading...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      <span>Download High Quality</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleRegenerate}
                  className="flex-1 flex items-center justify-center space-x-2 py-3 px-6 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>Regenerate</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Generation Details */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Generation Details</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-500">Style</label>
                  <p className="text-gray-900 capitalize">{style}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Complexity</label>
                  <p className="text-gray-900 capitalize">{complexity}</p>
                </div>
                {theme && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Theme</label>
                    <p className="text-gray-900 capitalize">{theme}</p>
                  </div>
                )}
                <div>
                  <label className="text-sm font-medium text-gray-500">Generated</label>
                  <p className="text-gray-900">{new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <SmartLink
                  to="/create"
                  className="block w-full py-2 px-4 text-center bg-mint-50 text-mint-700 rounded-lg hover:bg-mint-100 transition-colors duration-200"
                >
                  Create Another Page
                </SmartLink>
                <SmartLink
                  to="/templates"
                  className="block w-full py-2 px-4 text-center bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors duration-200"
                >
                  Browse Templates
                </SmartLink>
                <SmartLink
                  to="/history"
                  className="block w-full py-2 px-4 text-center bg-coral-50 text-coral-700 rounded-lg hover:bg-coral-100 transition-colors duration-200"
                >
                  View History
                </SmartLink>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Coloring Tips</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-coral-500 mt-1">•</span>
                  <span>Use high-quality coloring tools for best results</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-coral-500 mt-1">•</span>
                  <span>Print on thicker paper to prevent bleed-through</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-coral-500 mt-1">•</span>
                  <span>Start with lighter colors and build up</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-coral-500 mt-1">•</span>
                  <span>Have fun and be creative!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};