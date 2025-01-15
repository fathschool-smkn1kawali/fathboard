"use client";

import { Information } from "@/components/pages/home/Information";
import { InformationClass } from "@/components/pages/home/InformationClass";
// import { useGetData } from "@/lib/hooks/GET/useGetData";

export default function Page() {
  // const { data } = useGetData();

  return (
    <>
      {/* Information, Absence, Attendance and Leave */}
      <Information />

      {/* Information, Classroom */}
      <InformationClass/>
    </>
  );
}
