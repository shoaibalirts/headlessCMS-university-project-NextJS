import Link from "next/link";
import Image from "next/image";
import { getImage } from "@/lib/univeristyapi";
export default async function Header() {
  const image = await getImage();

  const imgSrc = image[0].guid.rendered;
  console.log(imgSrc);

  return (
    <header className="flex flex-col p-8 bg-slate-700 text-white">
      <ul className="flex flex-col md:flex-row md:space-x-2">
        <li>
          <Link href="apply">Apply</Link>
        </li>
        <li>
          <Link href="admissions">Admissions</Link>
        </li>
        <li>
          <Link href="programs">Programs</Link>
        </li>
        <li className="px-4 underline underline-offset-4 text-red-500">
          <Link href="/student-noticeboard">Student Noticeboard</Link>
        </li>
        <li>
          <Link href="news">News</Link>
        </li>
        <li>
          <Link href="events">Events</Link>
        </li>
        <li>
          <Link href="contact">Contact</Link>
        </li>
      </ul>
      <ul>
        
          <Image
            src={imgSrc}
            width={200}
            height={200}
            priority
            alt="university logo"
            className="rounded-xl md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
          />
        
      </ul>
    </header>
  );
}
