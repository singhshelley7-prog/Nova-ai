import { useState } from "react";

const StartFreeTrial = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen bg-[#081A33] flex items-center justify-center px-5 py-10">

      <div className="w-full max-w-md">

        <div className="mb-7">
          <h1 className="text-2xl font-bold text-white">
            NOVA
          </h1>

          <p className="text-gray-400 text-sm mt-2">
            Start your free trial today
          </p>
        </div>

        <div className="bg-[#102A4A] border border-white/10 rounded-xl p-7">

          <h2 className="text-xl font-semibold text-white mb-6">
            Create your account
          </h2>

          <form onSubmit={handleSubmit}>

            {/* name */}
            <div className="mb-5">
              <label className="text-sm text-gray-300">
                Full name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="mt-2 w-full bg-[#081A33] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>

            {/* email */}
            <div className="mb-5">
              <label className="text-sm text-gray-300">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-2 w-full bg-[#081A33] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>

            {/* password */}
            <div className="mb-5">
              <label className="text-sm text-gray-300">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="mt-2 w-full bg-[#081A33] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>

            <p className="text-xs text-gray-500 mb-6">
              By creating an account, you agree to our terms and privacy policy.
            </p>

            <button
              type="submit"
              className="w-full bg-cyan-400 text-[#081A33] font-semibold py-3 rounded-lg hover:bg-cyan-300 transition"
            >
              Start Free Trial
            </button>

          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <a href="/signin" className="text-cyan-400 hover:underline">
              Sign in
            </a>
          </p>

        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          © 2026 NOVA
        </p>

      </div>

    </div>
  );
};

export default StartFreeTrial;