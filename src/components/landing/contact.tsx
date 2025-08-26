import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Instagram } from 'lucide-react';
import type { SVGProps } from 'react';

function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.167 1.679zm6.247-3.907c1.465.894 3.16.E18 4.877.E18 5.451 0 9.9-4.448 9.9-9.902s-4.449-9.9-9.9-9.9-9.9 4.449-9.9 9.9c0 2.18.71 4.215 1.96 5.918l-1.251 4.565 4.649-1.239zm4.919 5.242c-1.465-.894-3.16-.E18-4.877-.E18-5.451 0-9.9 4.448-9.9 9.902s-4.449-9.9 9.9-9.9 9.9 4.449-9.9 9.9c0-2.18-.71-4.215-1.96-5.918l1.251-4.565-4.649 1.239z"/>
      </svg>
    );
  }

const contactMethods = [
  {
    icon: Phone,
    title: 'Telefone',
    value: '+55 (11) 91529-7265',
    href: 'tel:+5511915297265',
  },
  {
    icon: WhatsappIcon,
    title: 'WhatsApp',
    value: 'Agende sua consulta',
    href: 'https://wa.me/5511915297265',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'psibrunamorais@gmail.com',
    href: 'mailto:psibrunamorais@gmail.com',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    value: '@psi.brunamorais',
    href: 'https://instagram.com',
  },
];

const instagramPosts = [
  { id: 1, hint: 'serene landscape' },
  { id: 2, hint: 'inspirational quote' },
  { id: 3, hint: 'calm abstract' },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Entre em Contato</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Vamos conversar? Envie uma mensagem para agendar sua primeira consulta ou para saber mais informações.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              {contactMethods.map((method) => (
                <li key={method.title}>
                  <Link
                    href={method.href}
                    className="group flex items-center gap-4 rounded-lg p-2 transition-colors hover:bg-secondary/50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-secondary">
                      <method.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-headline">{method.title}</h3>
                      <p className="text-muted-foreground">{method.value}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
             <Card className="w-full max-w-md">
              <CardContent className="p-6">
                <h3 className="font-headline text-2xl font-bold mb-4">Siga no Instagram</h3>
                <div className="grid grid-cols-3 gap-2">
                  {instagramPosts.map((post) => (
                    <Link key={post.id} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block aspect-[280/350]">
                      <Image
                        alt={`Instagram post ${post.id}`}
                        className="rounded-md object-cover w-full h-full transition-transform hover:scale-105"
                        height="350"
                        src={`https://placehold.co/280x350.png`}
                        data-ai-hint={post.hint}
                        width="280"
                      />
                    </Link>
                  ))}
                </div>
                <Button asChild className="mt-4 w-full">
                  <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-4 w-4" /> Ver Perfil
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
