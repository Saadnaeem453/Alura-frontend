export const pricingPlans = [
  {
    id: 1,
    title: 'Starter',
    price: '$49',
    description: 'Billed annually',
    features: [
      '5,000 minutes/month',
      '5 Twilio numbers included',
      '10 agents',
      'Basic analytics',
      'Email support'
    ],
    isPopular: false,
    buttonText: 'Get Started'
  },
  {
    id: 2,
    title: 'Professional',
    price: '$149',
    description: 'Billed annually',
    features: [
      '25,000 minutes/month',
      '20 Twilio numbers included',
      '50 agents',
      'Advanced analytics and reporting',
      'Priority email and chat support',
      'CRM integration'
    ],
    isPopular: true,
    buttonText: 'Get Started'
  },
  {
    id: 3,
    title: 'Enterprise',
    price: '$499',
    description: 'Billed annually',
    features: [
      '100,000 minutes/month',
      'Unlimited Twilio numbers',
      'Unlimited agents',
      'Enterprise analytics with custom reports',
      '24/7 priority support with dedicated manager',
      'Custom integrations and API access',
      'SLA guarantees'
    ],
    isPopular: false,
    buttonText: 'Contact Sales'
  }
];
