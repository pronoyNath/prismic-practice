import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import React from "react";

const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <div>
      
      <nav className="flex justify-between items-center py-4 border-b-2 border-gray-300 px-20">
        {/* logo  */}
        <Link href={"/"} className="mx-4">
          <h3 className="text-4xl font-semibold">
            Prismic<span className="text-lime-400">Test</span>
          </h3>
        </Link>
        <ul>
          {settings.data.navigation.map((item) => (
            <li key={item.label} className="inline-block mx-4">
              <PrismicNextLink
                field={item.link}
                className="hover:underline text-3xl"
              >
                {item.label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
