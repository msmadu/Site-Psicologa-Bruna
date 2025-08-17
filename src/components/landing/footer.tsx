import Link from 'next/link';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import Logo from './logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start gap-4">
            <Link href="#home" className="flex items-center gap-2" prefetch={false}>
              <Logo className="h-8 w-8 text-accent" />
            </Link>
            <p className="text-sm text-secondary-foreground/80">
              Um espaço seguro e humano para sua jornada de autoconhecimento.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-headline text-lg font-semibold mb-2">Navegação</h4>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-sm hover:text-accent transition-colors">Sobre mim</Link></li>
                <li><Link href="#services" className="text-sm hover:text-accent transition-colors">Serviços</Link></li>
                <li><Link href="#faq" className="text-sm hover:text-accent transition-colors">FAQ</Link></li>
                <li><Link href="#contact" className="text-sm hover:text-accent transition-colors">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline text-lg font-semibold mb-2">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:psibrunamorais@gmail.com" className="hover:text-accent transition-colors">psibrunamorais@gmail.com</a></li>
                <li><a href="tel:+5511912345678" className="hover:text-accent transition-colors">+55 (11) 91234-5678</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline text-lg font-semibold mb-2">Redes Sociais</h4>
              <div className="flex gap-4">
                <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 hover:text-accent transition-colors" /></Link>
                <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 hover:text-accent transition-colors" /></Link>
                <Link href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6 hover:text-accent transition-colors" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-secondary-foreground/20 pt-4 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {currentYear} Dr. Bruna Morais Miranda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
