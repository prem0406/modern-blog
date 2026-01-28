import { useThemeContext } from "../theme/themeContext";

const categories = [
  { name: "Technology", color: "from-purple-500 to-pink-500", count: 24 },
  { name: "Design", color: "from-blue-500 to-cyan-500", count: 18 },
  { name: "Lifestyle", color: "from-orange-500 to-red-500", count: 31 },
  { name: "Travel", color: "from-green-500 to-emerald-500", count: 15 },
];

const Categories = () => {
  const { isDarkMode } = useThemeContext();

  return (
    <div className="mb-20">
      <h3
        className={`text-3xl font-bold  mb-8  ${isDarkMode ? "text-gray-400" : "text-gray-900"}`}
      >
        Explore Categories
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-2xl p-6 ${isDarkMode ? "bg-gray-900" : "bg-white"} shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer`}
          >
            <div
              className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`}
            ></div>
            <div className="relative">
              <h4
                className={`"text-xl font-bold ${isDarkMode ? "text-gray-400" : "text-gray-900"} mb-2`}
              >
                {category.name}
              </h4>
              <p
                className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}
              >
                {category.count} articles
              </p>
              <div
                className={`mt-4 w-12 h-1 bg-linear-to-r ${category.color} rounded-full`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
