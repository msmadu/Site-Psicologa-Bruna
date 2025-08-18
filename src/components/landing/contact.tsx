import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Telefone',
    value: '+55 (11) 91234-5678',
    href: 'tel:+5511912345678',
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
                    <Link key={post.id} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="aspect-square block">
                      <Image
                        alt={`Instagram post ${post.id}`}
                        className="rounded-md object-cover w-full h-full transition-transform hover:scale-105"
                        height="200"
                        src={`https://placehold.co/200x200.png`}
                        data-ai-hint={post.hint}
                        width="200"
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
