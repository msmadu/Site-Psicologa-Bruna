import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="w-full bg-background pt-12 pb-24 md:pt-16 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h1 className="font-main text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Se você chegou até aqui possivelmente está passando por desafios
            </h1>
            <p className="text-xl text-foreground/80">
              Estou aqui para te auxiliar nesta jornada!
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/500x700.png"
              alt="Woman in a calm setting"
              data-ai-hint="portrait thoughtful"
              width={500}
              height={700}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
