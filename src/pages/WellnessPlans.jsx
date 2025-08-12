import React from "react";
import wellnessHero from "../assets/wellness-hero.jpg";
import nutrition1 from "../assets/nutrition-1.jpg";
import performance from "../assets/performance.jpg";

const plans = [
  {
    title: "Basic Wellness Plan",
    description:
      "Perfect for beginners who want to start their wellness journey with simple yet effective practices. Includes weekly check-ins and basic nutrition guidance.",
    price: "$49 / month",
    features: [
      "Weekly virtual check-ins",
      "Basic nutrition plan",
      "Guided meditation resources",
      "Email support",
    ],
    image: wellnessHero,
  },
  {
    title: "Advanced Wellness Plan",
    description:
      "A comprehensive plan for those looking to fully integrate wellness into their daily life. Personalized coaching, advanced diet plans, and exclusive content.",
    price: "$99 / month",
    features: [
      "Bi-weekly personal coaching",
      "Custom meal planning",
      "Advanced fitness guidance",
      "24/7 chat support",
    ],
    image: nutrition1,
  },
  {
    title: "Premium Wellness Plan",
    description:
      "Our most complete plan for ultimate transformation. Includes personalized strategies, live coaching sessions, and access to premium resources.",
    price: "$149 / month",
    features: [
      "Weekly live coaching calls",
      "Fully customized nutrition + workout plans",
      "Exclusive webinars & workshops",
      "Priority email & chat support",
    ],
    image: performance,
  },
];

const WellnessPlans = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="bg-green-600 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Wellness Plans</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Choose a plan that fits your lifestyle and start your journey towards
          a healthier, happier you.
        </p>
      </div>

      {/* Plans Section */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-xl transition"
          >
            <img
              src={plan.image}
              alt={plan.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col h-full">
              <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <p className="text-green-600 font-bold text-xl mb-4">
                {plan.price}
              </p>
              <ul className="mb-6 space-y-2 text-gray-700">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-600 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-auto bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WellnessPlans;
