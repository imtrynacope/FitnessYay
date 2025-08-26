export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "FitnessYay Ultra Charge 5",
      price: "RM1,179.95",
      priceValue: 1179.95,
      image: "fitnessyay1.png",
      color: "Titanium",
      features: [
        "7-day battery",
        "50m water resistance",
        "Built-in GPS",
        "Heart rate monitoring",
        "Blood oxygen tracking",
        "Sleep analysis"
      ],
      specs: {
        hr: "Advanced",
        battery: "10 hours",
        waterResistance: "50m",
        gps: "Built-in"
      }
    },
    {
      id: 2,
      name: "FitnessYay Series 7",
      price: "RM1,399.00",
      priceValue: 1399.00,
      image: "fitnessyay2.png",
      color: "Aluminum",
      features: [
        "18-hour battery",
        "50m water resistance",
        "Dual-frequency GPS",
        "ECG capability",
        "SpO2 monitoring",
        "Fast charging"
      ],
      specs: {
        hr: "Advanced",
        battery: "18 hours",
        waterResistance: "50m",
        gps: "Built-in"
      }
    },
    {
      id: 3,
      name: "FitnessYay Series 6",
      price: "RM1,399.99",
      priceValue: 1399.99,
      image: "fitnessyay3.png",
      color: "Rose Gold",
      features: [
        "11-day battery",
        "50m water resistance",
        "Standard GPS",
        "Continuous heart rate",
        "Oxygen saturation",
        "Sleep score"
      ],
      specs: {
        hr: "Standard",
        battery: "20 hours",
        waterResistance: "50m",
        gps: "Built-in"
      }
    },
    {
      id: 4,
      name: "FitnessYay Ultra Charge 4",
      price: "RM1,344.99",
      priceValue: 1344.99,
      image: "fitnessyay4.png",
      color: "Space Gray",
      features: [
        "14-day battery",
        "50m water resistance",
        "Connected GPS",
        "Basic heart rate",
        "Step counting",
        "Sleep tracking"
      ],
      specs: {
        hr: "Advanced",
        battery: "14 hours",
        waterResistance: "50m",
        gps: "Not Available"
      }
    }
  ]);
}
