import Image from 'next/image';

const features = [
  {
    name: 'Acolhimento',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
      </svg>
    ),
    position: 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2',
  },
  {
    name: 'Empatia',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
      </svg>
    ),
    position: 'bottom-8 left-1/4 -translate-x-1/2',
  },
    {
    name: 'Dedicação',
    icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 22H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12.4444V2H10.6667L12 4.66667L13.3333 2H22V12.4444" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 12.4444C14.2091 12.4444 16 10.6536 16 8.44444C16 6.23533 14.2091 4.44444 12 4.44444C9.79086 4.44444 8 6.23533 8 8.44444C8 10.6536 9.79086 12.4444 12 12.4444Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.3333 22.0001C17.3333 19.4363 15.3948 17.3334 13.0556 17.3334H10.9444C8.60525 17.3334 6.66667 19.4363 6.66667 22.0001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),
    position: 'top-10 right-1/4 translate-x-1/2',
  },
  {
    name: 'Criatividade',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
      </svg>
    ),
    position: 'top-1/3 right-0 -translate-y-1/2 translate-x-1/4',
  },
];


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
                src="https://storage.googleapis.com/studio-hosting-storage/asset-65314a38-a6d1-4402-9a3b-1b9c1d028b03"
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
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute ${feature.position} transform transition-transform duration-300 ease-in-out group-hover:scale-110`}
                >
                  <div className="flex items-center gap-2 rounded-full bg-background/80 backdrop-blur-sm px-4 py-2 shadow-lg border border-primary/20">
                    <div className="text-primary w-5 h-5">{feature.icon}</div>
                    <span className="font-medium text-sm text-foreground">{feature.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
