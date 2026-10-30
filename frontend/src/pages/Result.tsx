
function Results() {
  const results = [
    {
      title: "AI Repository Overview",
      description:
        "This repository contains a web application built to provide useful features and a user-friendly experience.",
    },
    {
      title: "Key Features",
      description:
        "Responsive user interface, reusable components, and organized project structure.",
    },
    {
      title: "Prerequisites",
      description:
        "Node.js, npm, and basic knowledge of the technologies used in the project.",
    },
    {
      title: "Technical Summary",
      description:
        "The project uses a component-based structure to organize its frontend functionality.",
    },
    {
      title: "Recent Changes",
      description:
        "Recent commit information and repository updates will appear here.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div>
          <p className="text-sm font-medium text-indigo-600">
            Repository Analysis
          </p>

          <h1 className="mt-3 text-3xl font-bold text-gray-900">
            Analysis Results
          </h1>

          <p className="mt-3 text-gray-500">
            Explore the summary and technical details of your repository.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Repository</p>
          <h2 className="mt-2 text-xl font-semibold text-gray-900">
            GitHub Repository
          </h2>
          <p className="mt-2 text-sm text-indigo-600">
            Repository URL will appear here.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {results.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h2>

              <p className="mt-3 leading-7 text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-indigo-100 bg-indigo-50 p-6">
          <h2 className="text-lg font-semibold text-indigo-900">
            Analysis Status
          </h2>
          <p className="mt-2 text-sm text-indigo-700">
            Sample results are currently displayed. Real repository analysis
            will be connected through an API later.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Results;
