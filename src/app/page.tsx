import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import About from '@/components/landing/about';
import Services from '@/components/landing/services';
import Faq from '@/components/landing/faq';
import Contact from '@/components/landing/contact';
import Footer from '@/components/landing/footer';
import OrganicShapes from '@/components/landing/organic-shapes';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="py-12 bg-background flex justify-center">
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6">
                <Link href="https://wa.me/5511915297265" target="_blank">
                Entre em contato
                <WhatsappIcon />
                </Link>
            </Button>
        </section>
        <About />
        <Services />
        <Faq />
        <OrganicShapes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
