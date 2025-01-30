function Notice() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-[#00A758] mb-6">Notice</h1>

      <p className="text-lg text-gray-700 mb-6">
        Stay updated with the latest news and important announcements from our school. In this section, you'll find all the notices regarding upcoming events, deadlines, or any other crucial information for students and staff.
      </p>

      <div className="space-y-6">
        {/* Notice Item 1 */}
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-semibold text-[#00A758] mb-2">Upcoming Exam Schedule</h2>
          <p className="text-gray-700 mb-4">
            Please be informed that the final exams will commence on the 5th of February. The schedule will be available on the official portal.
          </p>
          <a
            href="/exam-schedule"
            className="text-[#00A758] font-semibold text-lg hover:underline"
          >
            View Schedule
          </a>
        </div>

        {/* Notice Item 2 */}
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-semibold text-[#00A758] mb-2">Annual Sports Day</h2>
          <p className="text-gray-700 mb-4">
            Our Annual Sports Day is scheduled for the 12th of March. Students are encouraged to participate in various events.
          </p>
          <a
            href="/sports-day"
            className="text-[#00A758] font-semibold text-lg hover:underline"
          >
            Read More
          </a>
        </div>

        {/* Notice Item 3 */}
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-semibold text-[#00A758] mb-2">Holiday Notice</h2>
          <p className="text-gray-700 mb-4">
            Due to national holidays, there will be no classes from the 20th to the 22nd of February. Please plan accordingly.
          </p>
          <a
            href="/holiday-notice"
            className="text-[#00A758] font-semibold text-lg hover:underline"
          >
            More Details
          </a>
        </div>

        {/* Notice Item 4 */}
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-semibold text-[#00A758] mb-2">New Admission Guidelines</h2>
          <p className="text-gray-700 mb-4">
            New admission guidelines have been released for the upcoming academic session. Please refer to the official document for more details.
          </p>
          <a
            href="/admission-guidelines"
            className="text-[#00A758] font-semibold text-lg hover:underline"
          >
            Read Guidelines
          </a>
        </div>
      </div>

      <div className="text-center mt-8">
        <a
          href="/all-notices"
          className="text-[#00A758] font-semibold text-lg hover:underline"
        >
          View All Notices
        </a>
      </div>
    </div>
  );
}

export default Notice;
