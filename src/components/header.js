import Link from "next/link";
import Image from "next/image";
import { getImage } from "@/lib/univeristyapi";
import { CiSearch } from "react-icons/ci";
import { GoPersonFill } from "react-icons/go";

export default async function Header() {
  const image = await getImage();

  const imgSrc = image[0].guid.rendered;
  console.log(imgSrc);

  return (
    <header className="">
      <ul className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:justify-end md:pr-14 uppercase">
        <li className="mt-3 p-4 py-2">
          <Link href="apply" className="hover:text-sky-500">
            Apply
          </Link>
        </li>
        <li className="p-4 py-2">
          <Link href="admissions" className="hover:text-sky-500">
            Admissions
          </Link>
        </li>
        <li className="p-4 py-2">
          <Link href="programs" className="hover:text-sky-500">
            Programs
          </Link>
        </li>
        <li className="p-8 py-2">
          <Link href="/student-noticeboard" className="hover:text-sky-500 px-4">
            Student Noticeboard
          </Link>
        </li>
        <li className="p-4 py-2">
          <Link href="news" className=" hover:text-sky-500">
            News
          </Link>
        </li>
        <li className="p-4 py-2">
          <Link href="events" className="hover:text-sky-500">
            Events
          </Link>
        </li>
        <li className="py-2">
          <Link href="contact" className="hover:text-sky-500">
            Contact
          </Link>
        </li>
      </ul>
      <ul className="flex items-center justify-between md:pr-14">
        <li>
          <Link href="/">
            <div className="relative h-16 w-[600px]">
              <Image
                src={imgSrc}
                layout="fill"
                objectFit="cover"
                priority
                alt="university logo"
                className="hidden md:block"
              />
            </div>
          </Link>
        </li>
        <li>
          <ul className="flex items-center space-x-4">
            <li className="bg-sky-500 p-8 py-2 w-10 h-10 hover:bg-sky-700 hover:text-white"><button>Menu</button></li>
            <li>
              <CiSearch />
            </li>
            <li>
              <GoPersonFill />
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
}
