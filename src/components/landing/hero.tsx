import Image from 'next/image';
import AnimatedIcons from './animated-icons';

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-background pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden">
      <AnimatedIcons />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative space-y-6 z-10">
            <h1 className="font-main text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
              Se você chegou até aqui possivelmente está passando por desafios
            </h1>
            <p className="text-xl text-foreground/80">
              Estou aqui para te auxiliar nesta jornada!
            </p>
          </div>
          <div className="relative mt-8 flex h-[500px] items-center justify-center md:mt-0 md:h-auto md:aspect-square">
            <div className="relative h-full w-full max-w-md group">
              <div 
                className="absolute inset-0 bg-[#EAF5A4] rounded-[50%_50%_50%_50%/50%_50%_50%_50%] transform -rotate-12"
              />
              <Image
                alt="Psicóloga Bruna Morais Miranda"
                src="/images/home.png"
                fill
                className="absolute inset-0 h-full w-full object-contain z-10"
                priority
                style={{
                  clipPath:
                    'polygon(15% 0, 100% 10%, 100% 85%, 85% 100%, 10% 90%, 0 25%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
