import React from "react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Navbar() {
  return (
    <div>
      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="font-medium text-gray-500 hover:text-gray-900"
          >
            {item.name}
          </a>
        ))}
        <a
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Log in
        </a>
      </div>
    </div>
  );
}
