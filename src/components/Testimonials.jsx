const Testimonials = () => {

  const testimonials = [
    {
      name: "Sarah",
      role: "Product Manager, Vertex",
      quote:
        "Before NOVA, I was using three different tools just to keep our launch on track. Now everything is in one place.",
    },
    {
      name: "Alex",
      role: "Engineering Lead, Orbit",
      quote:
        "The automations are probably my favorite part. I don't have to keep reminding the team about small tasks anymore.",
    },
    {
      name: "Maya",
      role: "Founder, Lumio",
      quote:
        "We started using NOVA with a five-person team and it scaled with us. It's simple enough that everyone actually uses it.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-[#081A33] px-6 py-20"
    >

      <div className="max-w-6xl mx-auto">

        <div className="mb-5">

          
          <h2 className="text-3xl md:text-4xl font-semibold">
            What people are saying
          </h2>

        </div>


        <div className="grid md:grid-cols-3 gap-5">

          {testimonials.map((testimonial) => (

            <div
              key={testimonial.name}
              className="bg-[#102A4A] border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition duration-300"
            >

              <div className="text-cyan-400 mb-5">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-7">
                "{testimonial.quote}"
              </p>

              <div className="mt-7">

                <p className="font-medium">
                  {testimonial.name}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {testimonial.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;