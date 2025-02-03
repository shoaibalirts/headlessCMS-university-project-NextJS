import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/programs">Programs</Link></li>
                <li><Link href="/professors">Faculty</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/events">Events</Link></li>
            </ul>
        </nav>
    );
}
