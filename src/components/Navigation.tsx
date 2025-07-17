import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Palette, User, History, Book, HelpCircle } from 'lucide-react';
import { SmartLink } from './SmartLink';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/create', label: 'Create', icon: Palette },
    { path: '/templates', label: 'Templates', icon: Book },
    { path: '/history', label: 'History', icon: History },
    { path: '/faq', label: 'FAQ', icon: HelpCircle },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <SmartLink to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-coral-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-coral-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">ColorCraft AI</span>
          </SmartLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <SmartLink
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-coral-50 text-coral-600 shadow-sm'
                    : 'text-gray-600 hover:text-coral-600 hover:bg-coral-50'
                }`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span className="font-medium">{item.label}</span>
              </SmartLink>
            ))}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <SmartLink
              to="/account"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:text-coral-600 hover:bg-coral-50 transition-all duration-200"
            >
              <User className="w-4 h-4" />
              <span className="font-medium">Account</span>
            </SmartLink>
            <SmartLink
              to="/create"
              className="px-6 py-2 bg-gradient-to-r from-coral-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-coral-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Create Now
            </SmartLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-coral-600 hover:bg-coral-50 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <SmartLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-3 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-coral-50 text-coral-600'
                      : 'text-gray-600 hover:text-coral-600 hover:bg-coral-50'
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span className="font-medium">{item.label}</span>
                </SmartLink>
              ))}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <SmartLink
                  to="/account"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 px-3 py-3 rounded-lg text-gray-600 hover:text-coral-600 hover:bg-coral-50 transition-all duration-200"
                >
                  <User className="w-4 h-4" />
                  <span className="font-medium">Account</span>
                </SmartLink>
                <SmartLink
                  to="/create"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center mt-2 mx-3 px-4 py-3 bg-gradient-to-r from-coral-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  Create Now
                </SmartLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};