import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Providers } from "./providers";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Next app",
    description: "Next app",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className="light">
            <body className={inter.className}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
