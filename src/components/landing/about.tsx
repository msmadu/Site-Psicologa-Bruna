import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center items-center">
            <Card className="w-full max-w-md overflow-hidden rounded-lg shadow-lg">
              <Image
                alt="Dr. Bruna Morais Miranda"
                className="h-auto w-full object-cover"
                data-ai-hint="psychologist portrait"
                height="600"
                src="/home/user/studio/src/components/images/about.png"
                width="600"
              />
            </Card>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
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
          </div>
        </div>
      </div>
    </section>
  );
}
