export function Pricing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12">
      {[
        {
          title: "Basic",
          price: "50K - 150K",
          features: [
            "1-3 Halaman",
            "Desain Responsif",
            "Hosting Gratis",
            "Revisi 1x",
          ],
        },
        {
          title: "Standard",
          price: "200K - 400K",
          features: [
            "3-6 Halaman",
            "UI/UX Menarik",
            "Integrasi Form",
            "Revisi 2x",
          ],
          popular: true,
        },
        {
          title: "Premium",
          price: "500K - 1.5JT",
          features: [
            "6+ Halaman",
            "Custom Desain",
            "SEO Optimasi",
            "Revisi 3x",
          ],
        },
      ].map((pkg, index) => (
        <div
          key={index}
          className={`p-6 rounded-xl shadow-lg text-center ${
            pkg.popular ? "bg-blue-500 text-white" : "bg-white border"
          }`}
        >
          <h3 className="text-2xl font-bold">{pkg.title}</h3>
          <p className="text-xl font-semibold my-2">{pkg.price}</p>
          <ul className="text-sm space-y-2">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex justify-center items-center gap-2">
                ✅ {feature}
              </li>
            ))}
          </ul>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg">
            Pesan Sekarang
          </button>
        </div>
      ))}
    </div>
  );
}
