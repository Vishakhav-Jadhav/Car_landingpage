import { Sparkles, Home, Droplet, Gauge, Disc, ClipboardCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'Exterior Wash',
      description: 'Premium hand wash with wax protection, tire shine, and spot-free rinse',
      price: 'From $29',
      features: ['Hand wash & dry', 'Tire shine', 'Window cleaning', 'Wax protection'],
    },
    {
      icon: Home,
      title: 'Interior Detailing',
      description: 'Deep cleaning of seats, carpets, dashboard, and all interior surfaces',
      price: 'From $89',
      features: ['Vacuum & shampoo', 'Leather conditioning', 'Dashboard polish', 'Odor removal'],
    },
    {
      icon: Droplet,
      title: 'Oil Change',
      description: 'Quick and efficient oil change service with full synthetic options',
      price: 'From $49',
      features: ['Up to 5 quarts', 'Filter replacement', 'Fluid check', '21-point inspection'],
    },
    {
      icon: Gauge,
      title: 'Tire Rotation',
      description: 'Extend tire life with professional rotation and pressure adjustment',
      price: 'From $39',
      features: ['4-wheel rotation', 'Pressure check', 'Tread inspection', 'Balance check'],
    },
    {
      icon: Disc,
      title: 'Brake Services',
      description: 'Complete brake inspection, pad replacement, and rotor resurfacing',
      price: 'From $199',
      features: ['Brake inspection', 'Pad replacement', 'Rotor service', 'Fluid flush'],
    },
    {
      icon: ClipboardCheck,
      title: 'Full Inspection',
      description: 'Comprehensive 50-point vehicle inspection with detailed report',
      price: 'From $79',
      features: ['Engine diagnostics', 'Fluid levels', 'Safety check', 'Written report'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-600 font-semibold text-sm tracking-wide">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Complete Auto Care Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From basic maintenance to detailed cleaning, we've got your vehicle covered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">{service.price}</span>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
