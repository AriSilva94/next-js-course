"use client";

import { cn } from "@/helpers/cn";
import { NavbarListItemButtonProps } from "./types";
import { NavBarListItem } from "./NavBarListItem";

export const NavBarListItemButton = ({
  children,
  className,
  ...props
}: NavbarListItemButtonProps) => {
  return (
    <NavBarListItem className={cn("p-0", className)}>
      <button
        className="flex gap-2 items-center rounded-lg p-2 w-full"
        {...props}
      >
        {children}
      </button>
    </NavBarListItem>
  );
};
