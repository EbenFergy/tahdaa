const categories = [
  { name: 'Plumbing', icon: '🔧' },
  { name: 'Electrical', icon: '⚡' },
  { name: 'Carpentry', icon: '🔨' },
  { name: 'Painting', icon: '🎨' },
  { name: 'Cleaning', icon: '🧽' },
  { name: 'Gardening', icon: '🌱' },
  { name: 'Roofing', icon: '🏠' },
  { name: 'HVAC', icon: '❄️' },
  { name: 'Flooring', icon: '📐' },
  { name: 'Appliance Repair', icon: '🔧' },
  { name: 'Handyman', icon: '🛠️' },
  { name: 'Moving', icon: '📦' },
];

export default function Categories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Categories</h2>
          <p className="text-xl text-gray-600">Choose from a wide range of professional services</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {categories.map(({ name, icon }, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center cursor-pointer shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-semibold text-gray-900">{name}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 rounded-md bg-gradient-to-r from-[#003CC5] to-[#29BFF4] text-white font-medium hover:opacity-90 transition">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}
