"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from 'react';

import React from "react";
import {
  Avatar, AvatarFallback, AvatarImage,
} from "@/components/ui/avatar"
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Component from "./Login-btn"

function useDeviceType() {
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    const handleResize = () => {
      // Detect the device width and set the device type accordingly
      if (window.innerWidth > 768) {
        setDeviceType('monitor');
      } else {
        setDeviceType('mobile');
      }
    };

    // Initially detect the device type
    handleResize();

    // Listen to window resize event
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
}


const Navbar = () => {
  const deviceType = useDeviceType();

  const { setTheme } = useTheme()
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href={"/"}>  <h1 className="text-3xl font-bold tracking-tight"> Pixel Palace</h1></Link>
        <div className="ml-auto flex items-center space-x-6">
          {deviceType === 'monitor' && (
            <>
            <ul className="flex gap-6 mr-6">
              <li className="font-semibold hover:text-gray-500 duration-300"><Link href={'/'}>Home</Link></li>
              <li className="font-semibold hover:text-gray-500 duration-300"><Link href={'/gallery'}>Gallery</Link></li>
              <li className="font-semibold hover:text-gray-500 duration-300"><Link href={'/favourite'}>Favourite</Link></li>
              <li className="font-semibold hover:text-gray-500 duration-300"><Link href={'/about'}>About Us</Link></li>
            </ul>
            <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="bg-gray-700" size="icon">
                              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                              <span className="sr-only">Toggle theme</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                              Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                              Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                              System
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <Component />
            </>
          )}
          {deviceType === 'mobile' && (
            <Sheet>
              <SheetTrigger asChild>

                <Button variant="outline">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 mr-2 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  Menu
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <Link href={"/"}>  <h1 className="text-3x1 font-bold tracking-tight">Pixel Palace</h1></Link>
                </SheetHeader>

                <div className="space-y-4 py-4">
                  <div className="px-3 py-2">
                    <div className="px-3 py-2">
                      <SheetClose asChild>
                        <div className="space-y-1">
                          <Link href={"/gallery"}>
                            <Button variant="ghost" type="submit" className="w-full justify-start flex gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                              </svg>
                              Gallery
                            </Button>
                          </Link>
                        </div>
                      </SheetClose>
                      <div className="space-y-1">
                        <Link href={"/about"}>
                          <Button variant="secondary" className="w-full justify-start flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                            </svg>
                            About Us
                          </Button>
                        </Link>
                      </div>
                      <div className="space-y-1">
                        <Link href={"/favourite"}>
                          <Button variant="ghost" className="w-full justify-start flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            Favorites
                          </Button>
                        </Link>
                      </div>
                      <div >
                        <DropdownMenu>
                          <DropdownMenuTrigger className="flex gap-3 text-center pt-4">
                            <Button variant="outline" className="bg-gray-700 ml-4 " size="icon">
                              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                              <span className="sr-only">Toggle theme</span>
                            </Button>
                            <h1 className="pt-2">Theme</h1>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                              Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                              Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                              System
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <Component />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
          
        </div>
      </div>
    </div>
  )
};
export default Navbar;
