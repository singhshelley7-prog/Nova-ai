import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    // actual login can be connected later
  };

  return (
    <div className="min-h-screen bg-[#081A33] flex items-center justify-center px-5">

      <div className="w-full max-w-md">

        {/* logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">NOVA</h1>
          <p className="text-gray-400 text-sm mt-2">
            Welcome back, sign in to continue
          </p>
        </div>

        <div className="bg-[#102A4A] border border-white/10 rounded-xl p-7">

          <h2 className="text-xl font-semibold text-white mb-6">
            Sign in
          </h2>

          <form onSubmit={handleSubmit}>

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

            <div className="mb-4">
              <label className="text-sm text-gray-300">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-2 w-full bg-[#081A33] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>

            <div className="flex justify-end mb-6">
              <a href="#" className="text-sm text-cyan-400 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-400 text-[#081A33] font-semibold py-3 rounded-lg hover:bg-cyan-300 transition"
            >
              Sign In
            </button>

          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Don't have an account?{" "}
            <a href="/startfreetrial" className="text-cyan-400">
              Create one
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

export default SignIn;