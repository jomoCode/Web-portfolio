"use client";
import React, { useState } from "react";
import { DropDownChevron } from "../../public/drop_down_chevron";

const DropDownPicker = ({ title }: { title: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex w-full justify-center items-center text-lg hover:text-gray-500"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {title}
        <DropDownChevron />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition duration-200"
          role="menu"
        >
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Account settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              License
            </a>
            <button
              onClick={() => {
                // Perform logout
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { DropDownPicker };
