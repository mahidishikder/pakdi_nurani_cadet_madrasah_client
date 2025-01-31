import React from "react";

const teachers = [
  {
    name: "John Doe",
    subject: "Mathematics",
    experience: "10+ years",
    institution: "ABC High School",
    email: "john.doe@example.com",
    img: "https://source.unsplash.com/150x150/?teacher,man"
  },
  {
    name: "Jane Smith",
    subject: "Physics",
    experience: "8+ years",
    institution: "XYZ Academy",
    email: "jane.smith@example.com",
    img: "https://source.unsplash.com/150x150/?teacher,woman"
  },
  {
    name: "Robert Brown",
    subject: "Chemistry",
    experience: "12+ years",
    institution: "Elite High",
    email: "robert.brown@example.com",
    img: "https://source.unsplash.com/150x150/?teacher,science"
  },
  {
    name: "Emily Johnson",
    subject: "English",
    experience: "6+ years",
    institution: "Sunshine School",
    email: "emily.johnson@example.com",
    img: "https://source.unsplash.com/150x150/?teacher,classroom"
  },
];

function OurTeacher() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Meet Our <span className="text-blue-600">Expert Teachers</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-md"
              src={teacher.img}
              alt={teacher.name}
            />
            <h2 className="mt-4 text-xl font-bold text-center text-gray-800">
              {teacher.name}
            </h2>
            <p className="text-center text-gray-600">{teacher.subject} Teacher</p>
            <div className="mt-4 text-sm text-gray-700 space-y-2">
              <p>🎓 <strong>Experience:</strong> {teacher.experience}</p>
              <p>🏫 <strong>Institution:</strong> {teacher.institution}</p>
              <p>📧 <strong>Email:</strong> {teacher.email}</p>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition">
                Contact Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeacher;
