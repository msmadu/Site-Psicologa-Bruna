'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { aiFAQ, type AiFaqInput, type AiFaqOutput } from '@/ai/flows/ai-faq';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  question: z.string().min(10, 'Sua pergunta deve ter pelo menos 10 caracteres.'),
});

export default function AiFaq() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiFaqOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: '',
    },
  });

  const onSubmit: SubmitHandler<AiFaqInput> = async (data) => {
    setLoading(true);
    setResult(null);
    try {
      const response = await aiFAQ(data);
      setResult(response);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Ocorreu um erro',
        description: 'Não foi possível obter uma resposta. Por favor, tente novamente.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-secondary/50">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
          <Sparkles className="text-accent" />
          Pergunte à IA
        </CardTitle>
        <CardDescription>
          Tem uma dúvida rápida sobre terapia? Nossa assistente de IA pode ajudar a fornecer informações gerais.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sua Pergunta</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: Como a terapia pode me ajudar com a ansiedade?"
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
              {loading ? 'Pensando...' : 'Obter Resposta'}
            </Button>
          </form>
        </Form>
        {result && (
          <Card className="mt-6 bg-background">
            <CardHeader>
              <CardTitle className="font-headline text-xl">Resposta</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground whitespace-pre-wrap">{result.answer}</p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
