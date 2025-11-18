import { Check, Star } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic Care',
      price: '49',
      period: 'per visit',
      description: 'Essential maintenance for your vehicle',
      features: [
        'Exterior Hand Wash',
        'Tire Shine & Pressure Check',
        'Window Cleaning',
        'Basic Interior Vacuum',
        'Fluid Level Check',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Premium Service',
      price: '129',
      period: 'per visit',
      description: 'Complete care package for optimal performance',
      features: [
        'Everything in Basic Care',
        'Full Interior Detailing',
        'Oil Change (Synthetic)',
        'Tire Rotation',
        '50-Point Inspection',
        'Wax Protection',
        'Air Filter Check',
      ],
      cta: 'Most Popular',
      popular: true,
    },
    {
      name: 'Ultimate Package',
      price: '249',
      period: 'per visit',
      description: 'Comprehensive service for total peace of mind',
      features: [
        'Everything in Premium',
        'Brake Service & Inspection',
        'Engine Diagnostics',
        'Full Detail (Interior & Exterior)',
        'Clay Bar Treatment',
        'Headlight Restoration',
        'Odor Elimination',
        'Priority Scheduling',
      ],
      cta: 'Go Ultimate',
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-600 font-semibold text-sm tracking-wide">PRICING PLANS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect service package for your vehicle with no hidden fees
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-blue-600 scale-105 md:scale-110' : 'hover:-translate-y-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-white" />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-slate-900">${plan.price}</span>
                    <span className="text-gray-500 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 text-slate-900 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need a custom package?</p>
          <a
            href="#booking"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Contact Us for Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
