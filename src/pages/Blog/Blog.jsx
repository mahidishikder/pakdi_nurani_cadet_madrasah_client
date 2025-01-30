function Blog() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-[#00A758] mb-6">Our Blog</h1>

      <p className="text-lg text-gray-700 mb-6">
        Welcome to our blog! Here, we share the latest news, updates, and insights related to our school, educational programs, and community. Stay tuned for more exciting articles and stories.
      </p>

      <h2 className="text-2xl font-semibold text-[#00A758] mb-4">Recent Posts</h2>

      <div className="space-y-6">
        {/* Blog Post 1 */}
        <div className="border border-gray-300 rounded-md p-6 bg-white shadow-md">
          <h3 className="text-2xl font-bold text-[#00A758] mb-2">Post Title 1</h3>
          <p className="text-lg text-gray-700 mb-4">
            This is a preview of the first blog post. Here, we provide an overview of a recent school event or topic. Click below to read more!
          </p>
          <a href="/blog/post1" className="text-[#00A758] font-medium hover:underline">Read More</a>
        </div>

        {/* Blog Post 2 */}
        <div className="border border-gray-300 rounded-md p-6 bg-white shadow-md">
          <h3 className="text-2xl font-bold text-[#00A758] mb-2">Post Title 2</h3>
          <p className="text-lg text-gray-700 mb-4">
            This is a preview of the second blog post. Here, we share insights on another important topic related to our school or education in general.
          </p>
          <a href="/blog/post2" className="text-[#00A758] font-medium hover:underline">Read More</a>
        </div>

        {/* Blog Post 3 */}
        <div className="border border-gray-300 rounded-md p-6 bg-white shadow-md">
          <h3 className="text-2xl font-bold text-[#00A758] mb-2">Post Title 3</h3>
          <p className="text-lg text-gray-700 mb-4">
            In this post, we dive into various educational tips, resources, and stories that can help students thrive academically and socially.
          </p>
          <a href="/blog/post3" className="text-[#00A758] font-medium hover:underline">Read More</a>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-[#00A758] mb-4 mt-8">Popular Topics</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="border border-gray-300 rounded-md p-6 bg-white shadow-md">
          <h3 className="text-xl font-bold text-[#00A758]">School Events</h3>
          <p className="text-lg text-gray-700 mb-4">
            Stay updated with the latest events happening at our school, including workshops, seminars, and student-led activities.
          </p>
        </div>

        <div className="border border-gray-300 rounded-md p-6 bg-white shadow-md">
          <h3 className="text-xl font-bold text-[#00A758]">Educational Tips</h3>
          <p className="text-lg text-gray-700 mb-4">
            Discover helpful tips and tricks to succeed in your academic journey, from study guides to time management strategies.
          </p>
        </div>

        <div className="border border-gray-300 rounded-md p-6 bg-white shadow-md">
          <h3 className="text-xl font-bold text-[#00A758]">Community Stories</h3>
          <p className="text-lg text-gray-700 mb-4">
            Read inspiring stories about our students, teachers, and community members, showcasing achievements and personal growth.
          </p>
        </div>

        <div className="border border-gray-300 rounded-md p-6 bg-white shadow-md">
          <h3 className="text-xl font-bold text-[#00A758]">School Achievements</h3>
          <p className="text-lg text-gray-700 mb-4">
            Celebrate our school’s accomplishments, from academic excellence to sports victories and beyond.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
