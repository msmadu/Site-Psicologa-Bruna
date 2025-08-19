'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from './logo';
import type { SVGProps } from 'react';

function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.167 1.679zm6.247-3.907c1.465.894 3.16.E18 4.877.E18 5.451 0 9.9-4.448 9.9-9.902s-4.449-9.9-9.9-9.9-9.9 4.449-9.9 9.9c0 2.18.71 4.215 1.96 5.918l-1.251 4.565 4.649-1.239zm4.919 5.242c-1.465-.894-3.16-.E18-4.877-.E18-5.451 0-9.9 4.448-9.9 9.902s4.449-9.9 9.9-9.9 9.9 4.449-9.9 9.9c0-2.18-.71-4.215-1.96-5.918l1.251-4.565-4.649 1.239z"/>
      </svg>
    );
}

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Sobre mim' },
  { href: '#services', label: 'Serviços' },
  { href: '#faq', label: 'Dúvidas' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-screen-2xl items-center px-4 md:px-6">
        <Link href="#home" className="mr-6 flex items-center gap-2" prefetch={false}>
          <Logo className="h-10 w-auto text-foreground" />
        </Link>
        <nav className="hidden md:flex flex-1 items-center justify-center gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex ml-8">
          <Button asChild variant="outline" className="rounded-full border-2 border-foreground hover:bg-foreground hover:text-background">
            <Link href="https://wa.me/5511915297265" target="_blank">
              Entre em contato
              <WhatsappIcon />
            </Link>
          </Button>
        </div>
        <div className="md:hidden flex-1 flex justify-end">
            <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b pb-4">
                    <Link href="#home" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                      <Logo className="h-8 w-auto text-foreground" />
                    </Link>
                     <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}>
                       <X className="h-6 w-6" />
                     </Button>
                  </div>
                  <nav className="grid gap-6 text-lg font-medium mt-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="transition-colors hover:text-primary"
                        onClick={() => setMenuOpen(false)}
                        prefetch={false}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto">
                    <Button asChild variant="outline" className="w-full rounded-full border-2 border-foreground">
                        <Link href="https://wa.me/5511915297265" onClick={() => setMenuOpen(false)} target="_blank">
                            Entre em contato
                            <WhatsappIcon />
                        </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
