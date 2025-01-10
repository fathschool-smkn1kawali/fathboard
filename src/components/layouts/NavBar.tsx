"use client";

import { useGetData } from "@/lib/hooks/GET/useGetData";
import { getCurrentDate, getCurrentTime } from "@/lib/utils/moment";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export const NavBar = () => {
  const { data } = useGetData("others");
  const quotes = data?.data?.data?.quote_of_the_day;

  // Gabungkan quotes menjadi satu string
  const marqueeText = quotes?.join("  •  ") || null;

  return (
    <nav className="bg-zinc-900 shadow-xl px-8">
      <div className="container flex sm:justify-between items-center gap-2 flex-col sm:flex-row py-6 border-b">
        <div className="flex items-center gap-4">
          <Image
            src="/Logo SMKN 1 Kawali.png"
            alt="logo"
            width={60}
            height={60}
          />
          <h5>SMKN 1 Kawali</h5>
        </div>

        <div className="w-full lg:w-2/5 sm:hidden lg:block">
          <Marquee
            speed={50} // Atur kecepatan marquee
            gradient={false} // Hilangkan gradasi
          >
            {marqueeText}
          </Marquee>
        </div>

        <div>
          <p className="text-center line-clamp-1">
            {getCurrentTime() + " | " + getCurrentDate()}
          </p>
        </div>
      </div>

      <div className=" w-full hidden sm:block mt-4 lg:hidden">
        <Marquee
          speed={50} // Atur kecepatan marquee
          gradient={false} // Hilangkan gradasi
        >
          {marqueeText}
        </Marquee>
      </div>
    </nav>
  );
};
