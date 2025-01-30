function Gallery() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-[#00A758] mb-6">Gallery</h1>

      <p className="text-lg text-gray-700 mb-6">
        Welcome to our gallery! Here, you can explore various moments captured at our campuses, events, and student activities. Each image showcases the vibrant student life and the incredible experiences our campus offers.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Gallery Image 1 */}
        <div className="overflow-hidden rounded-md shadow-lg">
          <img
            src="https://via.placeholder.com/300"
            alt="Gallery Image 1"
            className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        {/* Gallery Image 2 */}
        <div className="overflow-hidden rounded-md shadow-lg">
          <img
            src="https://via.placeholder.com/300"
            alt="Gallery Image 2"
            className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        {/* Gallery Image 3 */}
        <div className="overflow-hidden rounded-md shadow-lg">
          <img
            src="https://via.placeholder.com/300"
            alt="Gallery Image 3"
            className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        {/* Gallery Image 4 */}
        <div className="overflow-hidden rounded-md shadow-lg">
          <img
            src="https://via.placeholder.com/300"
            alt="Gallery Image 4"
            className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        {/* Gallery Image 5 */}
        <div className="overflow-hidden rounded-md shadow-lg">
          <img
            src="https://via.placeholder.com/300"
            alt="Gallery Image 5"
            className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        {/* Gallery Image 6 */}
        <div className="overflow-hidden rounded-md shadow-lg">
          <img
            src="https://via.placeholder.com/300"
            alt="Gallery Image 6"
            className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        {/* Gallery Image 7 */}
        <div className="overflow-hidden rounded-md shadow-lg">
          <img
            src="https://via.placeholder.com/300"
            alt="Gallery Image 7"
            className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        {/* Gallery Image 8 */}
        <div className="overflow-hidden rounded-md shadow-lg">
          <img
            src="https://via.placeholder.com/300"
            alt="Gallery Image 8"
            className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>

      <div className="text-center mt-8">
        <a
          href="/gallery"
          className="text-[#00A758] font-semibold text-lg hover:underline"
        >
          View All Images
        </a>
      </div>
    </div>
  );
}

export default Gallery;
