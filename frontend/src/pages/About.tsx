
function About() {
  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          About GitSummarizer
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          GitSummarizer is a developer-focused platform designed to
          help developers understand GitHub repositories easily.
          It provides clear project summaries, key features,
          technology details, and recent commit insights.
        </p>

        <p className="mt-5 leading-7 text-gray-500">
          Our goal is to make exploring and understanding code
          repositories faster and simpler.
        </p>
      </div>
    </section>
  );
}

export default About;
