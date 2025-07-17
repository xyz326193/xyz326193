import React from 'react';
import { User, UserPlus, Sparkles, ArrowRight } from 'lucide-react';
import { SmartLink } from '../components/SmartLink';

export const OnboardingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-purple-50 to-mint-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-coral-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-mint-200 rounded-full opacity-25 animate-pulse"></div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-coral-200 rounded-full px-4 py-2 text-sm font-medium text-coral-700 shadow-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Welcome to ColorCraft AI</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Start Your
              <span className="block bg-gradient-to-r from-coral-500 to-purple-500 bg-clip-text text-transparent">
                Creative Journey
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Create beautiful coloring books with AI. Choose how you'd like to get started.
            </p>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {/* Create Account */}
            <SmartLink
              to="/signup"
              className="group relative block w-full bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:bg-white hover:border-coral-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-coral-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                  <UserPlus className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-coral-600 transition-colors duration-200">
                    Create Account
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Save your creations and access them anywhere
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-coral-500 group-hover:translate-x-1 transition-all duration-200" />
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                  <span>Unlimited coloring page generation</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-mint-500 rounded-full"></div>
                  <span>Save and organize your creations</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Access creation history</span>
                </div>
              </div>
            </SmartLink>

            {/* Continue Without Account */}
            <SmartLink
              to="/create"
              className="group relative block w-full bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:bg-white/80 hover:border-mint-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-mint-500 to-coral-500 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-mint-600 transition-colors duration-200">
                    Continue Without Account
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Start creating immediately, no signup required
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-mint-500 group-hover:translate-x-1 transition-all duration-200" />
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-mint-500 rounded-full"></div>
                  <span>Instant access to AI generation</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                  <span>Download your creations</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Create account later to save progress</span>
                </div>
              </div>
            </SmartLink>
          </div>

          {/* Benefits */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Why Choose ColorCraft AI?
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-coral-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">AI</span>
                </div>
                <span className="text-gray-700">Powered by advanced AI technology</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-mint-500 to-coral-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">∞</span>
                </div>
                <span className="text-gray-700">Unlimited creative possibilities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-mint-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <span className="text-gray-700">Generate in seconds, not hours</span>
              </div>
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <SmartLink
                to="/login"
                className="text-coral-600 font-medium hover:text-coral-700 transition-colors duration-200"
              >
                Sign in here
              </SmartLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};