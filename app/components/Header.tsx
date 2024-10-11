"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "Posts", href: "/posts" },
  { name: "Albums", href: "/albums" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex flex-row items-center px-4 border-b">
      <nav>
        <ul className="flex flex-row gap-4">
          {links.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                className={clsx("", { "text-red-500": pathname === href })}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
