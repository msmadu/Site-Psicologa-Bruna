'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Seu nome deve ter pelo menos 2 caracteres.'),
  email: z.string().email('Por favor, insira um email válido.'),
  question: z.string().min(10, 'Sua pergunta deve ter pelo menos 10 caracteres.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function AiFaq() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      question: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    try {
      const mailtoLink = `mailto:psibrunamorais@gmail.com?subject=Nova Pergunta do Site&body=Nome: ${data.name}%0D%0AEmail: ${data.email}%0D%0APergunta: ${data.question}`;
      window.location.href = mailtoLink;

      toast({
        title: 'Sucesso!',
        description: 'Seu aplicativo de email será aberto para enviar a mensagem.',
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Ocorreu um erro',
        description: 'Não foi possível criar o rascunho do email. Por favor, tente novamente.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-secondary/50 w-full">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
          <Send className="text-accent" />
          Envie sua Dúvida
        </CardTitle>
        <CardDescription>
          Tem alguma pergunta? Preencha o formulário abaixo e entrarei em contato o mais breve possível.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome Completo" className="bg-background" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu Email</FormLabel>
                  <FormControl>
                    <Input placeholder="seuemail@exemplo.com" className="bg-background" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sua Pergunta</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Digite sua dúvida ou mensagem aqui..."
                      className="resize-none bg-background"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading} className="w-full">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? 'Enviando...' : 'Enviar Pergunta'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
