// import { NeonGradientCard } from "@/registry/magicui/neon-gradient-card";

import { CheckIcon } from "lucide-react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

export function NeonGradientCardDemo() {
  return (
    <NeonGradientCard className="h-auto items-center justify-center text-center">
      <div className="pt-10 pb-12 px-8">
        <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          Langkah Pemesanan
        </span>

        <div className="text-gray-200 mt-10 relative z-20 text-start tracking-tight">
          3 Langkah, Tugas Beres!
          <ul className="list-none space-y-3 mt-6 text-start">
            <Step title="Kirim Tugas – Upload tugas kamu, tentukan deadline." />
            <Step title="Pilih Paket & Bayar – Sesuaikan kebutuhan & bayar aman." />
            <Step title="Tugas Selesai! – Terima tugas sebelum deadline." />
          </ul>
        </div>
      </div>
    </NeonGradientCard>
  );
}

const Step = ({ title }) => {
  return (
    <li className="flex gap-2 items-center">
      <div className="min-w-6 min-h-6 flex items-center justify-center bg-gray-700 rounded">
        <CheckIcon size={16} className="" />
      </div>
      <p className="text-gray-400 text-sm font-medium tracking-tight">
        {title}
      </p>
    </li>
  );
};
