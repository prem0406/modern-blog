import FeaturedPost from "./home/featuredPost";
import Categories from "./home/categories";
import Blogs from "./home/blogs/blogs";
import Newletter from "./home/newletter";
import { useThemeContext } from "./theme/themeContext";

export const BlogTemplate = () => {
  // const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  // const [bookmarkedPosts, setBookmarkedPosts] = useState<Set<number>>(
  //   new Set()
  // );

  // const toggleLike = (postId: number) => {
  //   setLikedPosts((prev) => {
  //     const newSet = new Set(prev);
  //     if (newSet.has(postId)) {
  //       newSet.delete(postId);
  //     } else {
  //       newSet.add(postId);
  //     }
  //     return newSet;
  //   });
  // };

  // const toggleBookmark = (postId: number) => {
  //   setBookmarkedPosts((prev) => {
  //     const newSet = new Set(prev);
  //     if (newSet.has(postId)) {
  //       newSet.delete(postId);
  //     } else {
  //       newSet.add(postId);
  //     }
  //     return newSet;
  //   });
  // };

  const { isDarkMode } = useThemeContext();

  return (
    <section
      className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? "bg-gray-900" : "bg-amber-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Stories That
            <span className="block bg-linear-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Inspire & Inform
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of articles covering technology,
            design, lifestyle, and more.
          </p>
        </div>

        {/* Featured Post */}
        <FeaturedPost />

        {/* Categories */}
        <Categories />

        {/* Blog Grid */}
        <Blogs />

        {/* Newsletter */}
        <Newletter />
      </div>
    </section>
  );
};
