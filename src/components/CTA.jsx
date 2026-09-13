import { NavLink } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-[#0D3975] px-6 py-20">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Ready to work smarter?
        </h2>

        <p className="text-gray-300 mt-4 max-w-xl mx-auto leading-7">
          Bring your projects, tasks and team together with NOVA.
          Start your free trial and see how it works.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          <NavLink
            to="/startfreetrial"
            className="px-6 py-3 rounded-lg bg-cyan-400 text-[#081A33] font-semibold hover:bg-cyan-300 transition"
          >
            Start Free Trial
          </NavLink>

          <a
            href="#features"
            className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
          >
            Explore Features
          </a>

        </div>

      </div>

    </section>
  );
};

export default CTA;