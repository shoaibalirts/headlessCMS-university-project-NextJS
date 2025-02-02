import Link from "next/link";
import Image from "next/image";
import { getImage } from "@/lib/univeristyapi";
export default async function Header() {
  const image = await getImage();

  const imgSrc = image[0].guid.rendered;
  console.log(imgSrc);

  return (
    <header className="flex flex-col items-center justify-between md:flex-row p-8 bg-slate-700 text-white">
      <Link href="/" className="flex items-center">
        <p className="text-4xl font-bold">ShoaibAli</p>
        <Image src={imgSrc} width={100} height={100} alt="logo" />
      </Link>

      <ul className="flex flex-col md:flex-row md:space-x-2">
        <li><Link href="apply">Apply</Link></li>
        <li>
          <Link href="admissions">Admissions</Link>
        </li>
        <li>
          <Link href="programs">Programs</Link>
        </li>
        <li className="px-4 underline underline-offset-4 text-red-500">
          <Link href="/student-noticeboard">Student Noticeboard</Link>
        </li>
        <li><Link href="news">News</Link></li>
        <li><Link href="events">Events</Link></li>
        <li><Link href="contact">Contact</Link></li>
      </ul>
    </header>
  );
}
