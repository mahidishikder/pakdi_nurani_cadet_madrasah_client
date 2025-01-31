function Routine() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">📅 Routine</h2>
      <ul className="space-y-2">
        <li className="bg-blue-100 p-3 rounded-md shadow-sm">🔹 <strong>Monday:</strong> Math, Science, English</li>
        <li className="bg-green-100 p-3 rounded-md shadow-sm">🔹 <strong>Tuesday:</strong> History, Geography, Sports</li>
        <li className="bg-yellow-100 p-3 rounded-md shadow-sm">🔹 <strong>Wednesday:</strong> Physics, Chemistry, Biology</li>
        <li className="bg-purple-100 p-3 rounded-md shadow-sm">🔹 <strong>Thursday:</strong> Arts, Music, Computer Science</li>
        <li className="bg-red-100 p-3 rounded-md shadow-sm">🔹 <strong>Friday:</strong> Revision & Extra Activities</li>
      </ul>
    </div>
  );
}

export default Routine;

