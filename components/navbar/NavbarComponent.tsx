"use client"

import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { NavbarMenu } from "@/components/navbar/navbarMenu";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

type MenuItem = {
	name: string;
	path: string;
	active: boolean;
};

export default function NavbarComponent() {
  const [menu, setMenu] = useState<MenuItem[]>(NavbarMenu)
  const pathname = usePathname()

  return (
    <Navbar position="static">
      <NavbarBrand>
        <p className="font-bold">PSA</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-24 text-gray-100" justify="center">
        {menu.map((item, index)=> (
          <NavbarItem
            key={index}
            as={Link}
						href={item.path}
						isActive={item.path === pathname}
          >
            {item.name}
          </NavbarItem>
        ))}
        
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem className="hidden lg:flex">
          <FontAwesomeIcon icon={faCartShopping} className="text-green-600" />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className=" bg-green-400 text-gray-100" href="#" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}


