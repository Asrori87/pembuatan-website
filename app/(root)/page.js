import { NeonGradientCardDemo } from "@/components/neonGradient";
import { Pricing } from "@/components/pricing";
import ScrollBasedVelocity from "@/components/scrollBasedVelocity";

const Page = () => {
  return (
    <div className="">
      <header className="px-4 h-20 flex justify-between items-center">
        <h1 className="text-2xl text-white font-bold uppercase">Eassly</h1>
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          <div className="px-8 py-2 bg-black rounded-full relative group transition duration-200 text-white hover:bg-transparent">
            Pesan Sekarang
          </div>
        </button>
      </header>

      <section className="flex flex-col md:flex-row gap-4 px-4">
        <div className="rounded-2xl bg-gray-200 px-8 py-10 flex-1 z-20">
          <p className="text-sm mb-4 uppercase text-gray-500">
            Cepat, Aman, & Anti Ribet
          </p>
          <h1 className="text-black text-4xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-tight max-w-2xl">
            Automasi Tugas, Maksimalkan Produktivitas
            {/* Tugas NumPuk? Santai, Biar Kami yang Kerjakan! */}
          </h1>
          <p className="mt-8 text-base xs:text-lg text-black/80 max-w-2xl">
            Tugas numpuk, deadline mepet? Tenang! Kami siap membantu mahasiswa
            dengan jasa pembuatan website yang cepat, profesional, dan sesuai
            kebutuhan akademik maupun bisnis Anda.
          </p>
          <div>
            <button className="px-8 py-3 rounded-full bg-black text-white mt-14 uppercase max-xs:w-full">
              Pesan Sekarang
            </button>
          </div>
        </div>

        <div className="md:max-w-md w-full flex flex-col gap-4">
          <NeonGradientCardDemo />
          <div className="flex-1 px-8 py-10 bg-black/30 border border-white/10 rounded-2xl z-20">
            <h1 className="text-xl text-gray-100">
              Jelajahi Paket / Testimoni / Mbuhlah
            </h1>
            <p className="text-sm text-gray-300 tracking-tight mt-6">
              ketok e kok malah kakean elemen
            </p>
          </div>
        </div>
      </section>

      <ScrollBasedVelocity />

      <section className="min-h-screen max-w-6xl mx-auto">
        <Pricing />
      </section>
    </div>
  );
};

export default Page;
