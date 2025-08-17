import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Abstract background representing mental clarity"
        data-ai-hint="serene nature"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 -z-10" />
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="max-w-3xl">
            <h1 className="font-headline tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              Encontre seu caminho, no seu tempo.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-foreground/80">
              Ofereço um espaço seguro e humano onde você pode se escutar, se reconhecer e construir novas narrativas para sua vida.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="#contact">Agende uma Conversa</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#services">Conheça os Serviços</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
