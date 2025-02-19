import { NeonGradientCardDemo } from "@/components/neonGradient";
// import { CheckIcon } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen">
      <header className="px-4 h-20 flex justify-between items-center">
        <h1 className="text-2xl text-white font-bold uppercase">Eassly</h1>
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          <div className="px-8 py-2  bg-black rounded-full relative group transition duration-200 text-white hover:bg-transparent">
            Pesan Sekarang
          </div>
        </button>
      </header>

      <section className="flex gap-4 px-4">
        {/* <Hero /> */}
        <div className="rounded-2xl bg-gray-100 px-8 py-10 flex-1 z-20">
          <p className="text-sm mb-4 uppercase">Cepat, Aman, & Anti Ribet</p>
          <h1 className="text-black text-5xl font-bold uppercase tracking-tight leading-tight max-w-2xl">
            Automasi Tugas, Maksimalkan Produktivitas
            {/* Tugas NumPuk? Santai, Biar Kami yang Kerjakan! */}
          </h1>
          <p className="mt-8 text-lg text-black/80 max-w-2xl">
            Tugas numpuk, deadline mepet? Tenang! Kami siap membantu mahasiswa
            dengan jasa pembuatan website yang cepat, profesional, dan sesuai
            kebutuhan akademik maupun bisnis Anda.
          </p>
          <div>
            <button className="px-8 py-3 rounded-full bg-black text-white mt-14 uppercase">
              Pesan Sekarang
            </button>
          </div>
        </div>
        {/* <div className="rounded-2xl bg-gray-100 px-8 py-10 max-w-xl w-full">
          <p className="text-3xl font-bold text-black">Langkah Pemesanan</p>
          <div className="text-black mt-4">
            3 Langkah, Tugas Beres!
            <ul className="list-none space-y-2 mt-2">
              <Step title="Kirim Tugas – Upload tugas kamu, tentukan deadline." />
              <Step title="Pilih Paket & Bayar – Sesuaikan kebutuhan & bayar aman." />
              <Step title="Tugas Selesai! – Terima tugas sebelum deadline." />
            </ul>
          </div>
          <p className="text-black mt-4 text-sm">
            Cukup tunggu dan kami akan mengerjakan tugasmu. Nikmati hidupmu
            seenjoy mungkin.
          </p>
        </div> */}
        <div className="max-w-md w-full flex flex-col gap-4">
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
      {/* <MagicCardDemo /> */}
    </div>
  );
};

// const Step = ({ title }) => {
//   return (
//     <li className="flex gap-2 items-center">
//       <div className="size-6 flex items-center justify-center ">
//         <CheckIcon size={16} className="" />
//       </div>
//       <p className="text-black text-base">{title}</p>
//     </li>
//   );
// };

export default Page;
