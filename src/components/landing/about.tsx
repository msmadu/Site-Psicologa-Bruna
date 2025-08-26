import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-background" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative flex justify-center items-center">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl"></div>
            <Image
              alt="Retrato da Dra. Bruna Morais Miranda, psicóloga."
              className="relative h-auto w-full max-w-sm object-contain"
              data-ai-hint="psychologist portrait"
              height="860"
              src="/images/about.png"
              width="600"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 id="about-heading" className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sobre mim
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Olá! Sou psicóloga formada pela Universidade Municipal de São Caetano do Sul, pós-graduada em Saúde Mental e Pós-graduanda em Neurociências e Comportamento pela PUC-RS. Trabalho como Psicóloga Clínica, atendendo crianças, adolescentes e adultos de forma presencial na cidade de Mauá, São Caetano e online.
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground md:text-lg/relaxed">
              <p>
                Sempre fui movida pelo interesse genuíno pelas pessoas — suas perguntas, silêncios e histórias. Na clínica, busco oferecer um espaço seguro e humano, onde cada pessoa possa se escutar, se reconhecer e construir novos caminhos no seu próprio tempo.
              </p>
              <p>
                Minha trajetória profissional foi construída, inicialmente, na área de Recursos Humanos, com foco em desenvolvimento e gestão de pessoas. Nesse percurso, pude contribuir para a criação de ambientes de trabalho mais saudáveis e para a implementação de programas voltados ao bem-estar e ao crescimento pessoal e profissional. Movida pelo desejo de aprofundar meu cuidado com a saúde mental, direcionei meu olhar para a clínica. Hoje, minha atuação é enriquecida por essa bagagem, o que me permite acolher com sensibilidade demandas como estresse no trabalho, questões de relacionamento, ansiedade, depressão e outros desafios ligados à saúde emocional.
              </p>
            </div>
            <div className="mt-6 flex justify-start">
                <div className="inline-block border-b-2 border-primary pb-1 text-lg text-primary">
                    <span>CRP - 06/166835</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
