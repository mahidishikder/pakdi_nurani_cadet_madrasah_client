function OurService() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Our Amazing Features</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center mb-4">
            <img 
              className="w-16 h-16 object-contain transition-transform duration-300 hover:translate-y-[-10px]" 
              src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h1-icon-2.png" 
              alt="Play Time" 
            />
          </div>
          <h3 className="text-2xl font-semibold  text-center mb-4">Play Time</h3>
          <p className="text-gray-700 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center mb-4">
            <img 
              className="w-16 h-16 object-contain transition-transform duration-300 hover:translate-y-[-10px]" 
              src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h1-icon-3.png" 
              alt="Daycare" 
            />
          </div>
          <h3 className="text-2xl font-semibold  text-center mb-4">Daycare</h3>
          <p className="text-gray-700 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center mb-4">
            <img 
              className="w-16 h-16 object-contain transition-transform duration-300 hover:translate-y-[-10px]" 
              src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h1-icon-1.png" 
              alt="Learning" 
            />
          </div>
          <h3 className="text-2xl font-semibold  text-center mb-4">Learning</h3>
          <p className="text-gray-700 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center mb-4">
            <img 
              className="w-16 h-16 object-contain transition-transform duration-300 hover:translate-y-[-10px]" 
              src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h1-icon-4.png" 
              alt="Outdoors" 
            />
          </div>
          <h3 className="text-2xl font-semibold text-center mb-4">Outdoors</h3>
          <p className="text-gray-700 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center mb-4">
            <img 
              className="w-16 h-16 object-contain transition-transform duration-300 hover:translate-y-[-10px]" 
              src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h1-icon-5.png" 
              alt="Healthy Meals" 
            />
          </div>
          <h3 className="text-2xl font-semibold  text-center mb-4">Healthy Meals</h3>
          <p className="text-gray-700 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center mb-4">
            <img 
              className="w-16 h-16 object-contain transition-transform duration-300 hover:translate-y-[-10px]" 
              src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h1-icon-6.png" 
              alt="Events" 
            />
          </div>
          <h3 className="text-2xl font-semibold text-center mb-4">Events</h3>
          <p className="text-gray-700 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

      </div>
    </div>
  );
}

export default OurService;
