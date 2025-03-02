import { pricingPlans } from "@/data";
import { ShinyButtonDemo } from "./shinyButton";

export default pricingPlans;

export function Pricing() {
  return (
    <div className="px-4 py-12">
      <h1 className="text-3xl text-gray-200 mb-4 font-semibold">
        Pilih Paket yang Sesuai!
      </h1>
      <p className="text-gray-300 max-w-xl mb-8 text-base">
        Kami menawarkan paket fleksibel yang sesuai dengan kebutuhanmu. Dari
        tugas kuliah, portofolio, hingga bisnis – semua bisa dibuat dengan harga
        terjangkau!
      </p>

      <div className="mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-neutral-900 border px-8 py-10 shadow-lg rounded-2xl flex flex-col ${
                plan.isPopular ? "border-blue-500" : "border-neutral-700"
              }`}
            >
              <div className="flex-1">
                {plan.isPopular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Paling Populer
                  </span>
                )}

                <div className="pb-4 mb-4 border-b-2 border-neutral-700">
                  <h3 className="text-xl font-semibold mb-2 text-gray-100">
                    {plan.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                  <p className="text-lg text-gray-100 font-bold mt-4">
                    {plan.priceRange}
                  </p>
                </div>
                {/* <p className="text-gray-300 text-sm">{plan.suitableFor}</p> */}

                <ul className="text-left mt-4 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-200"
                    >
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {plan.isPopular ? (
                <ShinyButtonDemo className="rounded-full">
                  {plan.cta}
                </ShinyButtonDemo>
              ) : (
                <button className="mt-6 w-full bg-white/10 text-white py-2 rounded-full hover:bg-blue-700">
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
