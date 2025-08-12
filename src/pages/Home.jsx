import React from "react";
import wellnessHero from "../assets/wellness-hero.jpg";
import nutrition1 from "../assets/nutrition-1.jpg";

const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center"
        style={{ backgroundImage: `url(${wellnessHero})` }}
      >
        <div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Your Journey to Mind, Body & Balance
          </h1>
          <p className="mt-4 text-lg text-green-100">
            Discover personalized wellness plans, nutrition tips, and holistic
            approaches to a healthier you.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold">
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <img
          src={nutrition1}
          alt="Nutrition"
          className="rounded-lg shadow-lg w-full h-auto"
        />
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Nutrition That Fits Your Lifestyle
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We believe in making healthy eating easy, enjoyable, and sustainable.
            Our expert nutritionists craft personalized plans tailored to your
            goals, preferences, and cultural background.
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600">
            <li>Balanced meal plans</li>
            <li>Healthy recipes</li>
            <li>Grocery shopping tips</li>
          </ul>
        </div>
      </section>

      {/* Wellness Plans Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Our Wellness Plans
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-10">
            Whether you're looking to improve your diet, reduce stress, or
            enhance your fitness, we have the right plan for you.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Nutrition Plan",
                desc: "Custom meal plans with fresh, healthy ingredients.",
              },
              {
                title: "Fitness Plan",
                desc: "Guided workouts for all levels to keep you active.",
              },
              {
                title: "Mindfulness Plan",
                desc: "Meditation & breathing techniques to reduce stress.",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 border border-green-100 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-600">{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Start Your Wellness Journey</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Take the first step towards a healthier, more balanced life today.
          Our experts are here to guide you every step of the way.
        </p>
        <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-100">
          Join Now
        </button>
      </section>
    </div>
  );
};

export default Home;
