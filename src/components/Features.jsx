const Features = () => {
  const features = [
    {
      title: "Task Management",
      text: "Create tasks, set deadlines and keep track of what needs to be done.",
    },
    {
      title: "Team Collaboration",
      text: "Work together with your team and keep project updates in one place.",
    },
    {
      title: "Smart Automation",
      text: "Let NOVA handle repetitive tasks so your team can focus on important work.",
    },
    {
      title: "Project Tracking",
      text: "See your project progress and know what is completed and what is still left.",
    },
    {
      title: "Team Insights",
      text: "Get a quick view of your team's activity and overall project performance.",
    },
    {
      title: "Easy Integrations",
      text: "Connect the tools your team already uses and keep your workflow simple.",
    },
  ];

  return (
    <section id="features" className="bg-[#081A33] px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <div className="max-w-2xl mb-12">
          <p className="text-cyan-400 text-sm mb-3">
            FEATURES
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Everything you need to get work done
          </h2>

          <p className="text-gray-400 mt-4 leading-7">
            NOVA keeps your team's everyday work organized,
            from simple tasks to bigger projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#102A4A] border border-white/10 rounded-xl p-6 hover:-translate-y-1 hover:border-cyan-400/40 transition duration-300"
            >

              <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-5">
                <span className="text-cyan-400 text-lg">
                  ✓
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm leading-6 mt-3">
                {feature.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;