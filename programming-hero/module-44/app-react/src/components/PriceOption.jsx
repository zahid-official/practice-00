import Option from "./Option";

const PriceOption = () => {
  const pricing_options = [
    {
      id: "1",
      name: "Basic Monthly Membership",
      price: 29.99,
      features: [
        "Unlimited access to gym equipment",
        "Free fitness orientation",
        "Access to locker rooms",
      ],
    },
    {
      id: "2",
      name: "Standard Monthly Membership",
      price: 49.99,
      features: [
        "Unlimited access to gym equipment",
        "Free group fitness classes",
        "1 free personal training session",
      ],
    },
    {
      id: "3",
      name: "Premium Monthly Membership",
      price: 79.99,
      features: [
        "Unlimited access to gym equipment",
        "All group fitness classes",
        "3 free personal training sessions",
      ],
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-10 px-8">
      {pricing_options.map((option) => (
        <Option key={option.id} option={option}></Option>
      ))}
    </div>
  );
};

export default PriceOption;
