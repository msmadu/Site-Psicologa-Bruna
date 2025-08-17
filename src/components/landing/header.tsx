'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from './logo';

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
      <div className="container mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2" prefetch={false}>
          <Logo className="h-10 w-auto text-foreground" />
        </Link>
        <nav className="hidden md:flex gap-8 text-base font-medium">
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
        <div className="hidden md:flex">
          <Button asChild variant="outline" className="rounded-full border-2 border-foreground hover:bg-foreground hover:text-background">
            <Link href="#contact">
              Entre em contato
              <Mail className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
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
                    <Link href="#contact" onClick={() => setMenuOpen(false)}>
                        Entre em contato
                        <Mail className="h-4 w-4" />
                    </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
