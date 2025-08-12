import React from "react";
import nutrition1 from "../assets/nutrition-1.jpg";
import wellnessHero from "../assets/wellness-hero.jpg";
import performance from "../assets/performance.jpg";

const nutritionPrograms = [
  {
    title: "Healthy Eating Basics",
    description:
      "A beginner-friendly program that teaches you the essentials of balanced nutrition, portion control, and healthy food choices for daily life.",
    duration: "4 Weeks",
    image: nutrition1,
    benefits: [
      "Easy-to-follow meal plans",
      "Nutrient-rich recipes",
      "Grocery shopping guide",
      "Email support",
    ],
  },
  {
    title: "Weight Management Program",
    description:
      "A structured nutrition plan designed to help you achieve and maintain your ideal weight while enjoying delicious and healthy meals.",
    duration: "8 Weeks",
    image: wellnessHero,
    benefits: [
      "Customized calorie goals",
      "Healthy swaps guide",
      "Weekly progress tracking",
      "Coach feedback",
    ],
  },
  {
    title: "Performance Nutrition",
    description:
      "Perfect for athletes and fitness enthusiasts, this program focuses on fueling your body for peak performance and faster recovery.",
    duration: "6 Weeks",
    image: performance,
    benefits: [
      "Pre- and post-workout meals",
      "Hydration strategies",
      "Protein & carb optimization",
      "Supplement recommendations",
    ],
  },
];

const Nutrition = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="bg-green-600 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nutrition Programs</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Fuel your body with the right foods, at the right time, for the right goals.
        </p>
      </div>

      {/* Programs Section */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-8">
        {nutritionPrograms.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-xl transition"
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col h-full">
              <h2 className="text-2xl font-semibold mb-2">{program.title}</h2>
              <p className="text-gray-600 mb-3">{program.description}</p>
              <p className="text-green-600 font-medium mb-4">
                Duration: {program.duration}
              </p>
              <ul className="mb-6 space-y-2 text-gray-700">
                {program.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-600 mr-2">✔</span> {benefit}
                  </li>
                ))}
              </ul>
              <button className="mt-auto bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nutrition;
