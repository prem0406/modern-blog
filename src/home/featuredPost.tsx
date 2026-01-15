import { Calendar, Clock, Heart, MessageCircle, User } from "lucide-react";
import React from "react";

const featuredPost = {
  id: 0,
  title: "The Future of Web Design: Trends Shaping 2026",
  excerpt:
    "Explore the cutting-edge design trends that are revolutionizing how we build and experience the web.",
  image:
    "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop",
  author: "Prem Kumar",
  date: "Jan 10, 2026",
  readTime: "8 min read",
  category: "Design",
  likes: 234,
  comments: 45,
};

const FeaturedPost = () => {
  const likedPosts = new Set();
  return (
    <div className="relative group overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 mb-20">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
      <img
        src={featuredPost.image}
        alt={featuredPost.title}
        className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 z-20">
        <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full mb-4">
          Featured
        </span>
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          {featuredPost.title}
        </h3>
        <p className="text-lg text-gray-200 mb-6 max-w-3xl">
          {featuredPost.excerpt}
        </p>
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{featuredPost.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{featuredPost.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{featuredPost.readTime}</span>
          </div>
          <button className="flex items-center gap-2 hover:text-pink-400 transition-colors">
            <Heart
              className={`w-4 h-4 ${
                likedPosts.has(featuredPost.id)
                  ? "fill-pink-500 text-pink-500"
                  : ""
              }`}
            />
            <span>
              {featuredPost.likes + (likedPosts.has(featuredPost.id) ? 1 : 0)}
            </span>
          </button>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            <span>{featuredPost.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
