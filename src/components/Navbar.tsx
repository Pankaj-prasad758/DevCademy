"use client";
import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { s } from "motion/react-client";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <Link href={"/service"}>
          <MenuItem setActive={setActive} active={active} item="service">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/career in IT">Career in IT</HoveredLink>
            <HoveredLink href="/future ready course">
              Future ready course
            </HoveredLink>
            <HoveredLink href="/campus">Campus</HoveredLink>
            <HoveredLink href="/admission">Admission</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"/contact"}>
        <MenuItem
            setActive={setActive}
            active={active}
            item="Contact us"
          >
            <HoveredLink href="/contact">
                Contact
            </HoveredLink>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
