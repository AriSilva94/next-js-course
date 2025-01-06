import { cn } from "@/helpers/cn";
import { NavbarListItemLinkProps } from "./types";
import { NavBarListItem } from "./NavBarListItem";
import Link from "next/link";

export const NavbarListItemLink = ({
  href,
  children,
  className,
  ...props
}: NavbarListItemLinkProps) => {
  return (
    <NavBarListItem className={cn("p-0", className)}>
      <Link
        href={href}
        className="flex gap-2 items-center rounded-lg p-2 w-full"
        {...props}
      >
        {children}
      </Link>
    </NavBarListItem>
  );
};
