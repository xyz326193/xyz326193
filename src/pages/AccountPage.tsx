import React from 'react';
import { User, Settings, History, Heart, Download, Palette } from 'lucide-react';

export const AccountPage = () => {
  const userStats = {
    totalGenerated: 24,
    totalDownloads: 18,
    favoriteTemplates: 8,
    accountCreated: 'March 2024'
  };

  const recentActivity = [
    {
      id: 1,
      type: 'generated',
      title: 'Friendly Dragon',
      date: '2 hours ago',
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      type: 'downloaded',
      title: 'Space Adventure',
      date: '1 day ago',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 3,
      type: 'liked',
      title: 'Butterfly Garden',
      date: '3 days ago',
      image: 'https://images.pexels.com/photos/133464/pexels-photo-133464.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'generated': return <Palette className="w-4 h-4 text-coral-500" />;
      case 'downloaded': return <Download className="w-4 h-4 text-mint-500" />;
      case 'liked': return <Heart className="w-4 h-4 text-red-500" />;
      default: return <User className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your
            <span className="block bg-gradient-to-r from-coral-500 to-purple-500 bg-clip-text text-transparent">
              Account
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Manage your profile and track your creative journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-coral-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Sarah Johnson</h2>
                <p className="text-gray-600">Creative Parent</p>
                <p className="text-sm text-gray-500 mt-2">Member since {userStats.accountCreated}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-coral-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Palette className="w-5 h-5 text-coral-500" />
                    <span className="text-coral-700 font-medium">Generated</span>
                  </div>
                  <span className="text-coral-600 font-semibold">{userStats.totalGenerated}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-mint-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Download className="w-5 h-5 text-mint-500" />
                    <span className="text-mint-700 font-medium">Downloads</span>
                  </div>
                  <span className="text-mint-600 font-semibold">{userStats.totalDownloads}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-purple-500" />
                    <span className="text-purple-700 font-medium">Favorites</span>
                  </div>
                  <span className="text-purple-600 font-semibold">{userStats.favoriteTemplates}</span>
                </div>
              </div>

              <button className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-coral-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Activity */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Recent Activity</h3>
                <button className="text-coral-500 hover:text-coral-600 font-medium">View All</button>
              </div>

              <div className="space-y-4">
                {recentActivity.map(activity => (
                  <div
                    key={activity.id}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        {getActivityIcon(activity.type)}
                        <span className="font-medium text-gray-900">{activity.title}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center space-x-3 p-4 bg-coral-50 rounded-lg hover:bg-coral-100 transition-colors duration-200">
                  <Palette className="w-6 h-6 text-coral-500" />
                  <div className="text-left">
                    <p className="font-medium text-coral-700">Create New Page</p>
                    <p className="text-sm text-coral-600">Start a new coloring project</p>
                  </div>
                </button>

                <button className="flex items-center space-x-3 p-4 bg-mint-50 rounded-lg hover:bg-mint-100 transition-colors duration-200">
                  <History className="w-6 h-6 text-mint-500" />
                  <div className="text-left">
                    <p className="font-medium text-mint-700">View History</p>
                    <p className="text-sm text-mint-600">Browse your creations</p>
                  </div>
                </button>

                <button className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
                  <Heart className="w-6 h-6 text-purple-500" />
                  <div className="text-left">
                    <p className="font-medium text-purple-700">Favorites</p>
                    <p className="text-sm text-purple-600">View saved templates</p>
                  </div>
                </button>

                <button className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <Settings className="w-6 h-6 text-gray-500" />
                  <div className="text-left">
                    <p className="font-medium text-gray-700">Settings</p>
                    <p className="text-sm text-gray-600">Manage preferences</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Account Settings */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive updates about new features</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 text-coral-500" defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Save History</p>
                    <p className="text-sm text-gray-500">Keep track of your generated images</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 text-coral-500" defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">High Quality Downloads</p>
                    <p className="text-sm text-gray-500">Always download in highest resolution</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 text-coral-500" defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};