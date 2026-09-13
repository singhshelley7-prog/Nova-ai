const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "For small teams getting started.",
      features: [
        "Up to 3 team members",
        "Basic task management",
        "5 projects",
        "Team collaboration",
      ],
    },
    {
      name: "Pro",
      price: "$12",
      description: "For teams that need more flexibility.",
      features: [
        "Unlimited team members",
        "Unlimited projects",
        "Task automation",
        "Advanced reports",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Business",
      price: "$29",
      description: "For growing companies and larger teams.",
      features: [
        "Everything in Pro",
        "Advanced automation",
        "Custom workflows",
        "Team analytics",
        "Dedicated support",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-[#081A33] px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-cyan-400 text-sm mb-3">
            PRICING
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold">
            A plan for every team
          </h2>

          <p className="text-gray-400 mt-4">
            Start for free and upgrade when your team needs more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-7 border ${
                plan.popular
                  ? "border-cyan-400 bg-[#102A4A]"
                  : "border-white/10 bg-[#102A4A]"
              }`}
            >

              {plan.popular && (
                <div className="absolute -top-3 left-6 bg-cyan-400 text-[#081A33] text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold text-white">
                {plan.name}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                {plan.description}
              </p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>

                {plan.name !== "Starter" && (
                  <span className="text-gray-500 text-sm">
                    /month
                  </span>
                )}
              </div>

              <button
                className={`w-full mt-7 py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? "bg-cyan-400 text-[#081A33] hover:bg-cyan-300"
                    : "border border-white/20 text-white hover:bg-white/10"
                }`}
              >
                {plan.name === "Starter"
                  ? "Get Started"
                  : "Start Free Trial"}
              </button>

              <div className="mt-7">

                <p className="text-sm text-gray-300 mb-4">
                  What's included:
                </p>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <p
                      key={feature}
                      className="text-sm text-gray-400"
                    >
                      ✓ {feature}
                    </p>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Pricing;