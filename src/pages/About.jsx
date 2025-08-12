import React from "react";
import wellnessHero from "../assets/wellness-hero.jpg"; // You can replace this with a dedicated About image

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero / Banner */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${wellnessHero})` }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400">
            About WellMind
          </h1>
          <p className="mt-4 text-white text-lg">
            Discover our story, mission, and the passionate team behind
            WellMind.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-600 text-center">
          Who We Are
        </h2>
        <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
          WellMind was founded with a vision to help people live healthier and
          happier lives through holistic wellness solutions. We believe in
          balance — physical fitness, nutrition, and mental health working
          together for long-term well-being.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow-lg rounded-lg bg-gray-50">
            <h3 className="text-xl font-semibold text-green-500">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              To empower individuals with the knowledge, tools, and support to
              achieve sustainable health and wellness.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-gray-50">
            <h3 className="text-xl font-semibold text-green-500">Our Vision</h3>
            <p className="mt-2 text-gray-600">
              A world where wellness is accessible to everyone, everywhere,
              regardless of background or resources.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-gray-50">
            <h3 className="text-xl font-semibold text-green-500">Our Values</h3>
            <p className="mt-2 text-gray-600">
              Integrity, compassion, and a deep commitment to our community’s
              well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-green-600 text-center">
          Meet Our Team
        </h2>
        <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
          Our dedicated wellness coaches, nutritionists, and mental health
          experts work together to bring you the best possible care.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-300"></div>
            <h3 className="mt-4 font-semibold text-lg">Sarah Johnson</h3>
            <p className="text-gray-500">Nutrition Specialist</p>
          </div>
          <div>
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-300"></div>
            <h3 className="mt-4 font-semibold text-lg">David Lee</h3>
            <p className="text-gray-500">Fitness Coach</p>
          </div>
          <div>
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-300"></div>
            <h3 className="mt-4 font-semibold text-lg">Maria Rodriguez</h3>
            <p className="text-gray-500">Mental Health Counselor</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 text-center bg-green-500 text-white">
        <h2 className="text-3xl font-bold">Join Our Wellness Community</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Be part of a supportive, uplifting community focused on improving
          well-being together.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition">
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default About;
