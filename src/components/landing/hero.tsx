import Image from 'next/image';
import heroImage from '@/components/images/hero.png';

export default function Hero() {
  return (
    <section id="home" className="w-full bg-background pt-12 pb-24 md:pt-16 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h1 className="font-main text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
              Se você chegou até aqui possivelmente está passando por desafios
            </h1>
            <p className="text-xl text-foreground/80">
              Estou aqui para te auxiliar nesta jornada!
            </p>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="relative w-[300px] h-[450px] sm:w-[350px] sm:h-[525px] md:w-[400px] md:h-[600px] group">
              <div
                className="absolute inset-0 bg-primary/20 rounded-[50%_50%_50%_50%/50%_50%_50%_50%] transform -rotate-12"
                style={{
                  clipPath:
                    'polygon(15% 0, 100% 10%, 100% 85%, 85% 100%, 10% 90%, 0 25%)',
                }}
              />
              <Image
                src={heroImage}
                alt="Psicóloga Bruna Morais Miranda"
                width={400}
                height={600}
                className="absolute inset-0 w-full h-full object-contain"
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
