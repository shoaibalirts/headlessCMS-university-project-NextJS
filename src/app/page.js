import Link from "next/link";
import { getStudentNoticeBoard } from "@/lib/univeristyapi";

// app/page.js
export default async function getHomePage() {
  try {
    return (
      <header className="flex flex-col items-center justify-between md:flex-row p-8 bg-slate-700 text-white">
        <p className="text-4xl font-bold">Shoaib</p>
        <ul className="flex flex-col md:flex-row md:space-x-2">
          <li>Apply</li>
          <li>
            <Link href="">Admissions</Link>
          </li>
          <li>
            <Link href="/programs">Programs</Link>
          </li>
          <li className="px-4 underline underline-offset-4 text-red-500">
            <Link href="/student-noticeboard">Student Noticeboard</Link>
          </li>
          <li>News</li>
          <li>Events</li>
          <li>Contact</li>
        </ul>
      </header>
    );
  } catch (error) {}
}
