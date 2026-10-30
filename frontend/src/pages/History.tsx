
function History() {
  const history = [
    {
      name: "facebook / react",
      date: "October 25, 2026",
      status: "Completed",
    },
    {
      name: "vercel / next.js",
      date: "October 20, 2026",
      status: "Completed",
    },
    {
      name: "vitejs / vite",
      date: "October 15, 2026",
      status: "Completed",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 md:px-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900">
          Analysis History
        </h1>

        <p className="mt-3 text-gray-500">
          View your previously analyzed GitHub repositories.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-3 gap-4 border-b border-gray-200 bg-gray-50 px-6 py-4 text-sm font-semibold text-gray-600">
            <span>Repository</span>
            <span>Date</span>
            <span>Status</span>
          </div>

          {history.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-3 gap-4 border-b border-gray-100 px-6 py-5 text-sm"
            >
              <span className="font-medium text-gray-900">
                {item.name}
              </span>

              <span className="text-gray-500">{item.date}</span>

              <span className="font-medium text-green-600">
                {item.status}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-gray-400">
          Sample history data is displayed for the frontend preview.
        </p>
      </div>
    </main>
  );
}

export default History;
