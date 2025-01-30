function OurCampus() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-[#00A758] mb-6">Our Campuses</h1>

      <p className="text-lg text-gray-700 mb-6">
        Our campuses provide state-of-the-art facilities and a vibrant learning environment. Each campus is equipped with modern classrooms, libraries, sports complexes, and recreational spaces, designed to nurture the holistic development of our students.
      </p>

      <h2 className="text-2xl font-semibold text-[#00A758] mb-4">Campus Locations</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Campus 1 */}
        <div className="border border-gray-300 rounded-md p-6 bg-white shadow-md">
          <img
            src="https://via.placeholder.com/300"
            alt="Campus 1"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-[#00A758] mb-2">Campus Location 1</h3>
          <p className="text-lg text-gray-700 mb-4">
            Located in the heart of the city, this campus offers a wide range of academic programs and extracurricular activities. It features modern infrastructure and a dedicated student support system.
          </p>
          <a href="/campus/campus1" className="text-[#00A758] font-medium hover:underline">Explore More</a>
        </div>

        {/* Campus 2 */}
        <div className="border border-gray-300 rounded-md p-6 bg-white shadow-md">
          <img
            src="https://via.placeholder.com/300"
            alt="Campus 2"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-[#00A758] mb-2">Campus Location 2</h3>
          <p className="text-lg text-gray-700 mb-4">
            Situated in a peaceful environment, this campus is perfect for students who seek a serene place to focus on their studies. It is equipped with top-notch academic and research facilities.
          </p>
          <a href="/campus/campus2" className="text-[#00A758] font-medium hover:underline">Explore More</a>
        </div>

        {/* Campus 3 */}
        <div className="border border-gray-300 rounded-md p-6 bg-white shadow-md">
          <img
            src="https://via.placeholder.com/300"
            alt="Campus 3"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-[#00A758] mb-2">Campus Location 3</h3>
          <p className="text-lg text-gray-700 mb-4">
            This campus is located near a beautiful park and offers a combination of academic and recreational spaces. Students can enjoy a balanced campus life with various student clubs and events.
          </p>
          <a href="/campus/campus3" className="text-[#00A758] font-medium hover:underline">Explore More</a>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-[#00A758] mb-4 mt-8">Our Facilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Facility 1 */}
        <div className="border border-gray-300 rounded-md p-6 bg-white shadow-md">
          <h3 className="text-xl font-semibold text-[#00A758] mb-2">Modern Classrooms</h3>
          <p className="text-lg text-gray-700 mb-4">
            Our campuses feature fully equipped classrooms with the latest technology, ensuring an immersive and effective learning experience.
          </p>
        </div>

        {/* Facility 2 */}
        <div className="border border-gray-300 rounded-md p-6 bg-white shadow-md">
          <h3 className="text-xl font-semibold text-[#00A758] mb-2">Library & Research Center</h3>
          <p className="text-lg text-gray-700 mb-4">
            The libraries at our campuses are stocked with a vast collection of books, research papers, and digital resources to help students excel in their studies.
          </p>
        </div>

        {/* Facility 3 */}
        <div className="border border-gray-300 rounded-md p-6 bg-white shadow-md">
          <h3 className="text-xl font-semibold text-[#00A758] mb-2">Sports Complex</h3>
          <p className="text-lg text-gray-700 mb-4">
            Our campuses include a state-of-the-art sports complex with facilities for various sports, promoting physical well-being and teamwork among students.
          </p>
        </div>

        {/* Facility 4 */}
        <div className="border border-gray-300 rounded-md p-6 bg-white shadow-md">
          <h3 className="text-xl font-semibold text-[#00A758] mb-2">Student Cafeteria</h3>
          <p className="text-lg text-gray-700 mb-4">
            Enjoy healthy and delicious meals at our student cafeterias, designed to provide a comfortable space for socializing and relaxation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurCampus;
