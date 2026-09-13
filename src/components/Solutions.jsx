const Solutions = () => {
  const solutions = [
    {
      title: "For Startups",
      text: "Keep projects, tasks and team work in one place while your company is growing.",
    },
    {
      title: "For Marketing Teams",
      text: "Plan campaigns, assign work and keep track of deadlines without switching between tools.",
    },
    {
      title: "For Product Teams",
      text: "Organize product tasks, follow progress and make sure everyone knows what comes next.",
    },
    {
      title: "For Remote Teams",
      text: "Give everyone a clear view of projects and updates, even when the team works from different places.",
    },
  ];

  return (
   

      <div className="max-w-7xl mx-auto">

        <div className="max-w-2xl mb-12">
          <p className="text-cyan-400 text-sm mb-3">
            SOLUTIONS
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Built for the way teams work
          </h2>

          <p className="text-gray-300 mt-4 leading-7">
            Whether you're a small startup or a growing team,
            NOVA helps keep everyday work organized.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-[#102A4A] border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {solution.title}
              </h3>

              <p className="text-gray-400 text-sm leading-6">
                {solution.text}
              </p>

              <a
                href="#features"
                className="inline-block mt-6 text-sm text-cyan-400 hover:text-cyan-300"
              >
                Learn more →
              </a>
            </div>
          ))}

        </div>

      </div>


  );
};

export default Solutions;