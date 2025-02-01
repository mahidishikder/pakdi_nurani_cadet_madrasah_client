import React from "react";

const subjects = [
  { title: "All-Quran", videoUrl: "https://cdn.pixabay.com/video/2024/03/17/204467-924780664_tiny.mp4" },
  { title: "Islamic History", videoUrl: "https://cdn.pixabay.com/video/2022/09/03/130073-746154332_tiny.mp4" },
  { title: "ICT", videoUrl: "https://cdn.pixabay.com/video/2020/08/27/48420-453832153_tiny.mp4" },
  { title: "Mathematics", videoUrl: "https://cdn.pixabay.com/video/2024/09/22/232671_tiny.mp4" },
  { title: "Science", videoUrl: "https://cdn.pixabay.com/video/2016/09/21/5451-183788677_tiny.mp4" },
  { title: "English", videoUrl: "https://cdn.pixabay.com/video/2019/03/11/21941-323198485_tiny.mp4" },
];

function Primary() {
  return (
    <div className="relative w-full h-full">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="https://cdn.pixabay.com/video/2021/09/08/87786-602074234_large.mp4" type="video/mp4" />
      </video>

      <div className="relative container mx-auto py-12">
        <h1 className="relative text-3xl md:text-4xl font-bold text-center text-black mb-12">
          Core <span className="text-[#00BF63]">Subjects</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl p-8"
            >
              <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src={subject.videoUrl} type="video/mp4" />
              </video>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-80 transition-opacity duration-500 z-10 flex flex-col text-center justify-center items-center">
                <h2 className="text-2xl font-semibold text-white mb-6">{subject.title}</h2>
                <p className="text-white">
                  Learn and explore the basics of {subject.title} in an engaging and interactive way.
                </p>
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{subject.title}</h2>
                <p className="text-gray-600">
                  Learn and explore the basics of {subject.title} in an engaging and interactive way.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Primary;
