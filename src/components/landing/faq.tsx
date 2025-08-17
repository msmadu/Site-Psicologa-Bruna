import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const faqItems = [
  {
    question: "Você atende por convênio?",
    answer: "Não, meus atendimentos são particulares. No entanto, forneço a documentação necessária para que você possa solicitar reembolso junto ao seu plano de saúde, caso tenha essa cobertura."
  },
  {
    question: "Como funcionam os pagamentos?",
    answer: "Os pagamentos são realizados através de um pacote mensal e de forma antecipada, ou seja, antes da realização das sessões."
  },
  {
    question: "Quais horários de atendimento?",
    answer: "Os atendimentos acontecem de segunda a quinta-feira das 07h às 21h. Durante a primeira sessão, combinamos o melhor horário para você!"
  },
  {
    question: "Qual a frequência das sessões?",
    answer: "As sessões têm duração de 50 minutos e são realizadas semanalmente, sempre no mesmo dia e horário previamente acordados."
  },
  {
    question: "Como é assegurado o sigilo?",
    answer: "De acordo com o Art 9º do Código de Ética de Psicologia, é dever do psicólogo respeitar o sigilo profissional. Tanto nos encontros presenciais quanto virtuais, o sigilo é garantido. Para sessões online, recomendo o uso de fones de ouvido em um local privado. Não é permitido gravar a sessão."
  },
  {
    question: "Quantas sessões são necessárias?",
    answer: "Não é possível antecipar essa resposta. Cada acompanhamento é único e exclusivo, não sendo possível prever a quantidade de encontros necessários para algum tipo de benefício da psicoterapia."
  }
];

export default function Faq() {
  return (
    <section id="faq" className="bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Perguntas Frequentes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Encontre respostas para as dúvidas mais comuns sobre o processo terapêutico.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <div className="flex flex-col justify-center">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-headline text-lg text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}