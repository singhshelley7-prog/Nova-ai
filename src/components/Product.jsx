const Product = () => {
  return (
    <section
      id="product"
      className="py-24 px-6 bg-[#081A33]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-10">

          <p className="text-sm tracking-[0.2em] text-cyan-400 mb-4">
            THE NOVA WORKSPACE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Everything your team needs
            <span className="block text-cyan-400">
              in one place.
            </span>
          </h2>

          <p className="mt-5 text-gray-400 text-lg leading-relaxed">
            NOVA brings your projects, workflows, tasks and
            team activity together in one intelligent workspace.
          </p>

        </div>


        {/* Dashboard */}
        <div className="bg-[#102A4A] border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl">

          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">

            <div>
              <p className="text-sm text-gray-400">
                Workspace
              </p>

              <h3 className="text-2xl font-semibold">
                Product Launch
              </h3>
            </div>

            <div className="flex items-center gap-2">

              <span className="w-2 h-2 rounded-full bg-green-400"></span>

              <span className="text-sm text-green-400">
                On Track
              </span>

            </div>

          </div>


          {/* Dashboard Content */}
          <div className="grid lg:grid-cols-4 gap-4">

            {/* Sidebar */}
            <div className="hidden lg:block bg-[#0B213C] rounded-xl p-5">

              <p className="text-sm text-gray-400 mb-5">
                WORKSPACE
              </p>

              <div className="space-y-4 text-sm">

                <p className="text-cyan-400">
                  Overview
                </p>

                <p className="text-gray-400">
                  Projects
                </p>

                <p className="text-gray-400">
                  Tasks
                </p>

                <p className="text-gray-400">
                  Team
                </p>

                <p className="text-gray-400">
                  Analytics
                </p>

              </div>

            </div>


            {/* Main Dashboard */}
            <div className="lg:col-span-3 space-y-4">

              {/* Stats */}
              <div className="grid sm:grid-cols-3 gap-4">

                <div className="bg-[#173555] rounded-xl p-5">

                  <p className="text-sm text-gray-400">
                    Total Tasks
                  </p>

                  <p className="text-3xl font-bold mt-2">
                    128
                  </p>

                  <p className="text-sm text-cyan-400 mt-2">
                    +18% this week
                  </p>

                </div>


                <div className="bg-[#173555] rounded-xl p-5">

                  <p className="text-sm text-gray-400">
                    Completed
                  </p>

                  <p className="text-3xl font-bold mt-2">
                    94
                  </p>

                  <p className="text-sm text-green-400 mt-2">
                    73% completion
                  </p>

                </div>


                <div className="bg-[#173555] rounded-xl p-5">

                  <p className="text-sm text-gray-400">
                    Team Members
                  </p>

                  <p className="text-3xl font-bold mt-2">
                    24
                  </p>

                  <p className="text-sm text-cyan-400 mt-2">
                    6 active now
                  </p>

                </div>

              </div>


              {/* Projects */}
              <div className="bg-[#173555] rounded-xl p-5">

                <div className="flex items-center justify-between mb-6">

                  <h4 className="font-semibold">
                    Project Progress
                  </h4>

                  <span className="text-sm text-gray-400">
                    This month
                  </span>

                </div>


                {/* Project 1 */}
                <div className="mb-5">

                  <div className="flex justify-between text-sm mb-2">

                    <span>
                      Website Launch
                    </span>

                    <span className="text-gray-400">
                      80%
                    </span>

                  </div>

                  <div className="h-2 bg-[#0B213C] rounded-full overflow-hidden">

                    <div className="h-full w-[80%] bg-cyan-400 rounded-full"></div>

                  </div>

                </div>


                {/* Project 2 */}
                <div className="mb-5">

                  <div className="flex justify-between text-sm mb-2">

                    <span>
                      Marketing Campaign
                    </span>

                    <span className="text-gray-400">
                      90%
                    </span>

                  </div>

                  <div className="h-2 bg-[#0B213C] rounded-full overflow-hidden">

                    <div className="h-full w-[90%] bg-cyan-400 rounded-full"></div>

                  </div>

                </div>


                {/* Project 3 */}
                <div>

                  <div className="flex justify-between text-sm mb-2">

                    <span>
                      Mobile App
                    </span>

                    <span className="text-gray-400">
                      60%
                    </span>

                  </div>

                  <div className="h-2 bg-[#0B213C] rounded-full overflow-hidden">

                    <div className="h-full w-[60%] bg-cyan-400 rounded-full"></div>

                  </div>

                </div>

              </div>


              {/* AI Insight */}
              <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-5">

                <div className="flex items-start gap-3">

                  <div className="text-xl">
                    ✨
                  </div>

                  <div>

                    <p className="font-semibold text-cyan-300">
                      NOVA AI Insight
                    </p>

                    <p className="text-sm text-gray-400 mt-1">
                      Your team is ahead of schedule.
                      Two high-priority tasks were completed
                      earlier than expected.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Product;