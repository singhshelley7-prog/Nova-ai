const Statistics = () => {
  return (
    <section className="bg-[#081A33] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-5">

          <p className="text-sm tracking-[0.2em] text-cyan-400">
            NOVA BY THE NUMBERS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Built to help teams move faster.
          </h2>

        </div>


        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Stat 1 */}
          <div className="text-center p-6 border border-white/10 rounded-xl hover:border-cyan-400/40 transition">

            <h3 className="text-4xl md:text-5xl font-bold text-cyan-400">
              10K+
            </h3>

            <p className="mt-3 text-gray-400">
              Teams using NOVA
            </p>

          </div>


          {/* Stat 2 */}
          <div className="text-center p-6 border border-white/10 rounded-xl hover:border-cyan-400/40 transition">

            <h3 className="text-4xl md:text-5xl font-bold text-cyan-400">
              2M+
            </h3>

            <p className="mt-3 text-gray-400">
              Tasks automated
            </p>

          </div>


          {/* Stat 3 */}
          <div className="text-center p-6 border border-white/10 rounded-xl hover:border-cyan-400/40 transition">

            <h3 className="text-4xl md:text-5xl font-bold text-cyan-400">
              94%
            </h3>

            <p className="mt-3 text-gray-400">
              Team performance
            </p>

          </div>


          {/* Stat 4 */}
          <div className="text-center p-6 border border-white/10 rounded-xl hover:border-cyan-400/40 transition">

            <h3 className="text-4xl md:text-5xl font-bold text-cyan-400">
              40%
            </h3>

            <p className="mt-3 text-gray-400">
              Less time on repetitive work
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Statistics;