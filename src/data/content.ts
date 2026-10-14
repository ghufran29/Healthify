export const navigation = [
  ["Home", "home"],
  ["About Us", "about"],
  ["Our Services", "services"],
  ["Advantages", "advantages"],
  ["Growth Plans", "plans"],
  ["Blogs", "blogs"],
  ["Contact Us", "contact"],
] as const;
export const services = [
  {
    title: "Healthy Ready-To-Eat Meals",
    description: "Fresh, balanced meals prepared daily and ready to enjoy.",
    image: require("../../assets/images/ready.jpg"),
    detail:
      "Enjoy freshly prepared, balanced bowls without the daily cooking. Explore a plan and tell us your preferred meals.",
  },
  {
    title: "Customized Meal Plans",
    description: "Personalized nutrition plans designed for your goals.",
    image: require("../../assets/images/salmon.jpg"),
    detail:
      "Share your food preferences and lifestyle goals in your enquiry. Meal options and dietary needs can be discussed before choosing a plan.",
  },
  {
    title: "Weight Management Plans",
    description:
      "Delicious meals to support your weight loss or maintenance journey.",
    image: require("../../assets/images/prep.jpg"),
    detail:
      "Discover balanced meals that fit your routine. Tell us your preferences; individual nutrition needs should be discussed with a qualified professional.",
  },
  {
    title: "High-Protein Meal Plans",
    description: "Nutrient-rich meals for active lifestyles and fitness goals.",
    image: require("../../assets/images/protein.jpg"),
    detail:
      "Explore protein-rich meal options for an active day, with a variety of vegetables, legumes, grains, and lean proteins.",
  },
];
export const plans = [
  {
    name: "Essential Plan",
    price: 299,
    description: "Great for individuals starting their healthy journey.",
    icon: "leaf",
    benefits: ["Fresh daily meals", "Balanced nutrition", "Flexible delivery"],
  },
  {
    name: "Balanced Plan",
    price: 499,
    description: "Our best value plan for a healthier lifestyle.",
    icon: "star",
    benefits: [
      "Customized meal options",
      "Wide variety of meals",
      "Nutritionist support",
      "Flexible delivery",
    ],
  },
  {
    name: "Performance Plan",
    price: 699,
    description: "For fitness enthusiasts and active lifestyles.",
    icon: "chart",
    benefits: [
      "High-protein meals",
      "Performance-focused nutrition",
      "Personalized plans",
      "Priority support",
    ],
  },
] as const;
export type PlanName = (typeof plans)[number]["name"];
export const advantages = [
  {
    title: "Premium Quality",
    description: "High-quality, fresh ingredients",
    icon: "diamond",
  },
  {
    title: "Health Focused",
    description: "Nutritionist-designed meals",
    icon: "heart",
  },
  {
    title: "Convenient Delivery",
    description: "To your home or office",
    icon: "truck",
  },
  {
    title: "Flexible Plans",
    description: "Options for every dietary need",
    icon: "leaf",
  },
] as const;
export const testimonials = [
  {
    name: "Sara M.",
    portrait: require("../../assets/images/sara.jpg"),
    review:
      "Healthify has completely changed my eating habits. The meals are delicious, fresh, and so convenient!",
  },
  {
    name: "Ahmed R.",
    portrait: require("../../assets/images/ahmed.jpg"),
    review:
      "Finally a healthy meal service that tastes amazing! It fits perfectly into my busy lifestyle.",
  },
  {
    name: "Fatima K.",
    portrait: require("../../assets/images/fatima.jpg"),
    review:
      "Great quality, variety, and customer service. I feel healthier and more energized every day.",
  },
];
export const faqs = [
  {
    question: "What are your meal plans?",
    answer:
      "Our Essential, Balanced, and Performance plans offer ready-to-eat meals for different lifestyles and nutrition goals. Explore the plans above to compare their features.",
  },
  {
    question: "How does delivery work?",
    answer:
      "In a live service, delivery details would be agreed after your enquiry, based on your address and preferred schedule. This assessment demo does not arrange deliveries or confirm availability.",
  },
  {
    question: "Can I customize my meals?",
    answer:
      "You can include dietary preferences in the plan enquiry. Specific allergy or medical requirements would need to be confirmed with the provider before ordering.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Payment options would be confirmed during a real order enquiry. This demo does not collect payment information, charge you, or create a subscription.",
  },
  {
    question: "Do you have a mobile app?",
    answer:
      "This responsive landing page is the current demo experience. It works on mobile browsers; a downloadable Healthify app is not available through this demo.",
  },
];
export const extraServices = [
  "Corporate meal solutions",
  "Fitness and wellness nutrition",
  "Healthy snack and food bundles",
  "Delivery and pickup services",
];
