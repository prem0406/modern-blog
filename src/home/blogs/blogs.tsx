import { ArrowRight, Bookmark, Heart, MessageCircle } from "lucide-react";
import { useThemeContext } from "../../theme/themeContext";

const blogPosts = [
  {
    id: 1,
    title: "Mastering React Server Components",
    excerpt:
      "A deep dive into React Server Components and how they transform modern web development.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    author: "Alex Chen",
    date: "Jan 12, 2026",
    readTime: "6 min read",
    category: "Technology",
    likes: 189,
    comments: 23,
  },
  {
    id: 2,
    title: "Minimalist Living: A Practical Guide",
    excerpt:
      "Transform your space and mindset with these essential minimalist principles.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    author: "Emma Wilson",
    date: "Jan 11, 2026",
    readTime: "5 min read",
    category: "Lifestyle",
    likes: 312,
    comments: 67,
  },
  {
    id: 3,
    title: "Hidden Gems of Southeast Asia",
    excerpt:
      "Discover breathtaking destinations off the beaten path in Southeast Asia.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&h=400&fit=crop",
    author: "David Park",
    date: "Jan 9, 2026",
    readTime: "7 min read",
    category: "Travel",
    likes: 428,
    comments: 89,
  },
  {
    id: 4,
    title: "Typography in Modern UI Design",
    excerpt:
      "How thoughtful typography choices can elevate your interface design.",
    image:
      "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?w=600&h=400&fit=crop",
    author: "Lisa Martinez",
    date: "Jan 8, 2026",
    readTime: "4 min read",
    category: "Design",
    likes: 267,
    comments: 34,
  },
  {
    id: 5,
    title: "Building Scalable APIs with Node.js",
    excerpt:
      "Best practices for creating robust and performant backend services.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
    author: "Michael Brown",
    date: "Jan 7, 2026",
    readTime: "9 min read",
    category: "Technology",
    likes: 195,
    comments: 41,
  },
  {
    id: 6,
    title: "Sustainable Fashion Choices",
    excerpt: "Making eco-friendly decisions without compromising on style.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop",
    author: "Olivia Taylor",
    date: "Jan 6, 2026",
    readTime: "5 min read",
    category: "Lifestyle",
    likes: 341,
    comments: 52,
  },
];

const Blogs = () => {
  const { isDarkMode } = useThemeContext();

  const likedPosts = new Set();
  const bookmarkedPosts = new Set();
  return (
    <div className="mb-20">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900">Latest Articles</h3>
        <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium group">
          View All
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className={`group ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300`}
          >
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  className={`p-2 ${isDarkMode ? "bg-gray-500" : "bg-white/90"} backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-md`}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      likedPosts.has(post.id)
                        ? "fill-pink-500 text-pink-500"
                        : "text-gray-700"
                    }`}
                  />
                </button>
                <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-md">
                  <Bookmark
                    className={`w-4 h-4 ${
                      bookmarkedPosts.has(post.id)
                        ? "fill-purple-500 text-purple-500"
                        : "text-gray-700"
                    }`}
                  />
                </button>
              </div>
            </div>
            <div className="p-6">
              <span
                className={`inline-block px-3 py-1 ${isDarkMode ? "bg-gray-900" : "bg-purple-100"} ${isDarkMode ? "text-purple-300" : "text-purple-600"} text-xs font-semibold rounded-full mb-3`}
              >
                {post.category}
              </span>
              <h4
                className={`text-xl font-bold ${isDarkMode ? "text-gray-200" : "text-gray-900"} mb-3 group-hover:text-purple-600 transition-colors`}
              >
                {post.title}
              </h4>
              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-4 line-clamp-2`}
              >
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-linear-to-br from-purple-400 to-pink-400 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {post.author}
                    </p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>
                      {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
