import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
   <div>
      {/* Hero Container */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Left + Right */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="flex-1">

            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-2 rounded-full border  bg-white/5">
              ✦ AI-Powered Platform
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Build Smarter.
              <br />
              Move Faster.
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              Your AI-powered workspace for creating,
              automating, and growing faster.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <NavLink
                to="/startfreetrial"
                className="px-6 py-3 rounded-lg bg-white text-[#081A33] font-semibold hover:bg-white/90"
              >
                Start Free Trial
              </NavLink>

              <a
                href="#features"
                className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10"
              >
                Explore Features
              </a>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="flex-1 w-full">

            {/* AI Dashboard */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl">

              {/* Dashboard Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h2 className="font-semibold">
                  NOVA AI
                </h2>

                <span className="text-sm text-green-400">
                  ● Online
                </span>
              </div>

              {/* AI Content */}
              <div className="py-8">
                <p className="text-white/60 text-sm">
                  AI Assistant
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  How can I help you today?
                </h3>
              </div>

              {/* Dashboard Input */}
              <div
              className="rounded-lg bg-black/20 border border-white/10 px-4 py-3 text-white/40">
               Nova anything...
              </div>

            </div>

          </div>

        </div>

      </div>
</div>
  
  );
};

export default Hero;