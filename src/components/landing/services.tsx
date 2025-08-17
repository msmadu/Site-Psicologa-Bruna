import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HeartHandshake, User, Users, Monitor, MapPin, CheckCircle2 } from 'lucide-react';
import atendimentoImage from '@/components/images/atendimento.JPEG';

const therapyTypes = [
  {
    icon: User,
    title: 'Terapia para Adolescentes',
    description: 'Atendo adolescentes a partir dos 13 anos, de forma individualizada, apoiando-os durante essa fase de crescimento, descoberta e desafios. A família é envolvida quando necessário, mantendo o sigilo do adolescente.',
  },
  {
    icon: User,
    title: 'Terapia para Adultos',
    description: 'Voltada para pessoas de todas as idades. Os primeiros encontros são fundamentais para compreendermos juntos o que está sendo vivido e traçarmos, de forma cuidadosa, os próximos passos do processo terapêutico.',
  },
  {
    icon: Users,
    title: 'Terapia para Casais',
    description: 'Para casais que enfrentam dificuldades de comunicação, conflitos, desalinhamento de valores ou distanciamento. O objetivo é apoiar na manutenção do relacionamento, melhorando a comunicação e a expressão dos sentimentos.',
  },
];

const helpSituations = [
  'Ansiedade, angústias e crises de pânico',
  'Luto ou dificuldade para lidar com perdas e mudanças',
  'Tristeza persistente ou episódios de depressão',
  'Dificuldades com relacionamentos afetivos',
  'Estresse e conflitos no trabalho (burnout, insegurança)',
  'Desejo por autoconhecimento e identidade',
  'Baixa autoestima e autocrítica',
];

export default function Services() {
  return (
    <section id="services" className="bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Serviços Terapêuticos</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubra as diferentes formas de cuidado que ofereço para apoiar sua jornada de bem-estar emocional.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {therapyTypes.map((therapy) => (
            <Card key={therapy.title} className="h-full flex flex-col">
              <CardHeader className="flex flex-col items-center text-center">
                 <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primary">
                    <therapy.icon className="h-8 w-8" />
                 </div>
                <CardTitle className="font-headline text-xl">{therapy.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground flex-grow">
                {therapy.description}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Tabs defaultValue="what-is" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="what-is">O que é Psicoterapia?</TabsTrigger>
            <TabsTrigger value="why-do">Por que Fazer?</TabsTrigger>
          </TabsList>
          <TabsContent value="what-is">
            <Card>
              <CardContent className="p-6 space-y-4 text-muted-foreground">
                <p>A psicoterapia é uma prática profissional conduzida por psicólogos em ambiente clínico. Reconhecida cientificamente e pautada pela ética, envolve encontros semanais nos quais a psicóloga acolhe o paciente e suas questões emocionais. Utilizando-se de teorias e técnicas que incluem escuta atenta e especializada, a psicoterapia é um caminho para o alívio e compreensão das dores e demandas do indivíduo, oferecendo um ambiente seguro que facilita a descoberta de uma vida mais satisfatória e autêntica.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="why-do">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">A terapia é sobre estar em processo.</CardTitle>
                    <CardDescription>Você não precisa estar em crise para começar. Se algo tem causado incômodo, talvez seja um convite para cuidar de si.</CardDescription>
                </CardHeader>
              <CardContent className="p-6 space-y-4">
                <ul className="space-y-2">
                    {helpSituations.map((sit, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-accent mt-1 shrink-0" />
                            <span className="text-muted-foreground">{sit}</span>
                        </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16">
             <div className="flex flex-col items-center justify-center space-y-4 text-center">
                 <h3 className="font-headline text-3xl font-bold tracking-tighter">Formas de Atendimento</h3>
             </div>
             <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-2">
                 <Card>
                     <CardHeader className="flex flex-row items-center gap-4">
                         <Monitor className="h-8 w-8 text-accent"/>
                         <CardTitle className="font-headline text-2xl">Atendimento Online</CardTitle>
                     </CardHeader>
                     <CardContent className="space-y-2 text-muted-foreground">
                         <p>A terapia online torna o cuidado com a saúde mental mais acessível, prático e seguro.</p>
                         <ul className="text-sm list-disc pl-5">
                             <li>Sigilo e ética profissional garantidos</li>
                             <li>Conforto e flexibilidade para sua rotina</li>
                             <li>Atendimento humanizado e acessível</li>
                         </ul>
                     </CardContent>
                 </Card>
                 <Card>
                     <CardHeader className="flex flex-row items-center gap-4">
                         <MapPin className="h-8 w-8 text-accent"/>
                         <CardTitle className="font-headline text-2xl">Atendimento Presencial</CardTitle>
                     </CardHeader>
                     <CardContent className="space-y-2 text-muted-foreground">
                         <p>Locais de atendimento:</p>
                         <ul className="text-sm list-disc pl-5">
                             <li>Rua Pará, 139, São Caetano do Sul - SP</li>
                             <li>R. dos Bandeirantes, n°215 - Vila Bocaina, Mauá - SP</li>
                         </ul>
                     </CardContent>
                 </Card>
             </div>
        </div>

        <div className="mt-12 rounded-lg overflow-hidden">
          <Image
            alt="A calm and inviting therapy room"
            className="h-auto w-full object-cover"
            data-ai-hint="serene minimalist interior"
            height="400"
            src="/home/user/studio/src/components/images/atendimento.JPEG"
            width={1200}
          />
        </div>

      </div>
    </section>
  );
}
