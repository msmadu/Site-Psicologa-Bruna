'use server';

/**
 * @fileOverview AI-powered FAQ flow for answering questions about therapy and mental health.
 *
 * - aiFAQ - A function that handles the FAQ process.
 * - AiFaqInput - The input type for the aiFAQ function.
 * - AiFaqOutput - The return type for the aiFAQ function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiFaqInputSchema = z.object({
  question: z.string().describe('The question about therapy or mental health.'),
});
export type AiFaqInput = z.infer<typeof AiFaqInputSchema>;

const AiFaqOutputSchema = z.object({
  answer: z.string().describe('The answer to the question.'),
});
export type AiFaqOutput = z.infer<typeof AiFaqOutputSchema>;

export async function aiFAQ(input: AiFaqInput): Promise<AiFaqOutput> {
  return aiFAQFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiFAQPrompt',
  input: {schema: AiFaqInputSchema},
  output: {schema: AiFaqOutputSchema},
  prompt: `You are an AI assistant providing information about therapy and mental health, specifically related to Dr. Bruna Morais Miranda's practice. Answer the following question:

Question: {{{question}}}

Please provide a helpful and informative answer, keeping in mind that this information is for potential clients. Use a tone that is approachable and understanding. Incorporate the following information about Dr. Bruna Morais Miranda:

*   Psychologist formed by the Municipal University of São Caetano do Sul
*   Postgraduate in Mental Health and Postgraduate in Neurosciences and Behavior by PUC-RS
*   Works as a Clinical Psychologist, attending children, adolescents and adults in person in the city of Mauá, São Caetano and online.
*   Offers a safe and humane space where each person can listen to themselves, recognize themselves and build new paths in their own time.
*   Experience in Recursos Humanos, with focus in development and people management. Able to contribute to the creation of healthier work environments and to the implementation of programs focused on well-being and personal and professional growth. Sensitivity to demands such as stress at work, relationship issues, anxiety, depression and other challenges linked to emotional health.

`,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const aiFAQFlow = ai.defineFlow(
  {
    name: 'aiFAQFlow',
    inputSchema: AiFaqInputSchema,
    outputSchema: AiFaqOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
