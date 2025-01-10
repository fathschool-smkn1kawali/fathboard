"use client";

import { Information } from "@/components/pages/home/Information";
import { InformationClass } from "@/components/pages/home/InformationClass";
// import { useGetData } from "@/lib/hooks/GET/useGetData";

export interface DashboardData {
  total_student: number;
  total_student_attendance: number;
  total_student_absent: number;
  student_attendance_percentage: string;
  attendance_students: [];

  total_teacher: number;
  total_teacher_attendance: number;
  total_teacher_absent: number;
  teacher_attendance_percentage: string;
  attendance_teachers: []; // data

  total_administartion: number;
  total_administration_attendance: number;
  total_administration_absent: number;
  administration_attendance_percentage: string;
  attendance_administrations: []; // data

}

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
