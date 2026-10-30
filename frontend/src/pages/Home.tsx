
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [repoUrl, setRepoUrl] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAnalyze = () => {
    const url = repoUrl.trim();

    if (!url) {
      setError("Please enter a GitHub repository URL.");
      return;
    }

    if (!/^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/.test(url)) {
      setError("Please enter a valid GitHub repository URL.");
      return;
    }

    setError("");
    navigate("/results");
  };

  return (
    <main>
      <section className="bg-white px-6 py-24 text-center md:py-32">
        <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">
          AI Powered Repository Analysis
        </span>

        <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
          Understand Any GitHub Repository
          <span className="text-indigo-600"> in Seconds.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
          Get clear summaries, explore project features, understand
          technologies and save time with GitSummarizer.
        </p>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-lg sm:flex-row">
            <input
              type="url"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              placeholder="https://github.com/username/repository"
              className="min-w-0 flex-1 rounded-lg px-4 py-3 outline-none"
            />

            <button
              onClick={handleAnalyze}
              className="rounded-lg bg-indigo-600 px-7 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              Analyze Repository
            </button>
          </div>

          {error && (
            <p className="mt-3 text-left text-sm text-red-500">{error}</p>
          )}

          <p className="mt-4 text-sm text-gray-400">
            Paste a public GitHub repository URL to get started.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Why Choose GitSummarizer?
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "📋",
                title: "AI Overview",
                description: "Understand the purpose and structure of a repository."
              },
              {
                icon: "⚙️",
                title: "Technology Insights",
                description: "Discover the tools and frameworks used in projects."
              },
              {
                icon: "📊",
                title: "Commit Insights",
                description: "Explore recent changes and project activity."
              }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to Explore Your Repository?
        </h2>
        <p className="mt-4 text-gray-500">
          Start understanding your GitHub projects more easily.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-7 rounded-lg bg-indigo-600 px-7 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Analyze Repository
        </button>
      </section>
    </main>
  );
}

export default Home;
