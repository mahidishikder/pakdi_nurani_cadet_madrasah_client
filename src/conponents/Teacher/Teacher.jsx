import React from "react";
import { Link } from "react-router-dom";

const teachers = [
  {
    name: "John Doe",
    subject: "Mathematics Teacher",
    experience: "10+ years",
    institution: "ABC High School",
    email: "john.doe@example.com",
    img: "https://img.freepik.com/premium-vector/vector-muslim-man-avatar-vector-arab-people-icon-saudi-character-minimalistic-flat-design-isolated_615232-2332.jpg"
  },
  {
    name: "Jane Smith",
    subject: "Physics Teacher",
    experience: "8+ years",
    institution: "XYZ Academy",
    email: "jane.smith@example.com",
    img: "https://img.freepik.com/premium-vector/vector-muslim-man-avatar-vector-arab-people-icon-saudi-character-minimalistic-flat-design-isolated_615232-2332.jpg"
  },
  {
    name: "Robert Brown",
    subject: "Chemistry Teacher",
    experience: "12+ years",
    institution: "Elite High",
    email: "robert.brown@example.com",
    img: "https://thumbs.dreamstime.com/b/flat-color-islamic-muslim-woman-teacher-hijab-illustration-generate-ai-generated-297301127.jpg"
  },
  {
    name: "Emily Johnson",
    subject: "English Teacher",
    experience: "6+ years",
    institution: "Sunshine School",
    email: "emily.johnson@example.com",
    img: "https://thumbs.dreamstime.com/b/flat-color-islamic-muslim-woman-teacher-hijab-illustration-generate-ai-generated-297301127.jpg"
  },
];

function Teacher() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://cdn.pixabay.com/video/2021/08/19/85590-590014592_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Meet Our <span className="text-[#00BF63]">Expert Teachers</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                className="w-32 h-32 mx-auto rounded-full border border-[#00BF63] border-l-3 p-2 shadow-inner shadow-gray-300 "
                src={teacher.img}
                alt={teacher.name}
              />
              <h2 className="mt-4 text-xl font-bold text-center text-gray-800">
                {teacher.name}
              </h2>
              <p className="text-center text-gray-600">{teacher.subject}</p>
              <div className="mt-4 text-sm text-gray-700 space-y-2">
                <p>🎓 <strong>Experience:</strong> {teacher.experience}</p>
                <p>🏫 <strong>Institution:</strong> {teacher.institution}</p>
                <p>📧 <strong>Email:</strong> {teacher.email}</p>
              </div>
              <div className="mt-4 flex justify-center">
                <button className="ring-1 ring-[#00BF63]  duration-500  px-4 py-2 rounded  shadow-[#00BF63] hover:bg-[#00BF63] transition">
                  Contact Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center font-medium ">
          <Link to='/teachers'>
            <button className="py-3 duration-500 px-12 hover:text-white/80 bg-[#00BF6C] mt-10 ">All Teacher</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Teacher;

