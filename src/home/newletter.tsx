const Newletter = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl p-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 shadow-2xl">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-2xl mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Join Our Newsletter
        </h3>
        <p className="text-lg text-white/90 mb-8">
          Get the latest articles and insights delivered directly to your inbox
          every week.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
          />
          <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newletter;
