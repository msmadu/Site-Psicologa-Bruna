import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'MindFlow Psychology | Dr. Bruna Morais Miranda',
  description: 'Um espaço seguro e humano para terapia e crescimento pessoal com a Dra. Bruna Morais Miranda, psicóloga especialista em saúde mental. Atendimento online e presencial em São Caetano e Mauá.',
  keywords: 'psicóloga, psicologia, terapia, saúde mental, Bruna Morais Miranda, psicoterapia, terapia online, terapia de casal, ansiedade, depressão, São Caetano do Sul, Mauá',
  authors: [{ name: 'Dr. Bruna Morais Miranda' }],
  openGraph: {
    title: 'MindFlow Psychology | Dra. Bruna Morais Miranda',
    description: 'Um espaço seguro e humano para terapia e crescimento pessoal com a Dra. Bruna Morais Miranda.',
    url: 'https://your-website-url.com', // Replace with your actual domain
    siteName: 'MindFlow Psychology',
    images: [
      {
        url: '/images/og-image.png', // It's recommended to have an og-image.png in your public folder
        width: 1200,
        height: 630,
        alt: 'Dra. Bruna Morais Miranda - Psicóloga',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MindFlow Psychology | Dra. Bruna Morais Miranda',
    description: 'Um espaço seguro e humano para terapia e crescimento pessoal com a Dra. Bruna Morais Miranda.',
    images: ['/images/og-image.png'], // Ensure you have this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Psychologist',
  name: 'Dr. Bruna Morais Miranda',
  image: 'https://your-website-url.com/images/about.png', // Replace with your actual domain
  telephone: '+5511915297265',
  email: 'psibrunamorais@gmail.com',
  url: 'https://your-website-url.com', // Replace with your actual domain
  address: [
    {
      '@type': 'PostalAddress',
      'streetAddress': 'Rua Pará, 139',
      'addressLocality': 'São Caetano do Sul',
      'addressRegion': 'SP',
      'addressCountry': 'BR'
    },
    {
      '@type': 'PostalAddress',
      'streetAddress': 'R. dos Bandeirantes, n°215 - Vila Bocaina',
      'addressLocality': 'Mauá',
      'addressRegion': 'SP',
      'addressCountry': 'BR'
    }
  ],
  sameAs: [
    'https://www.instagram.com/psibrumorais?igsh=MXVjNmpiM3pvdnpyeg=='
  ],
  description: 'Psicóloga formada pela Universidade Municipal de São Caetano do Sul, pós-graduada em Saúde Mental. Atendimento para crianças, adolescentes e adultos, online e presencial.',
  hasMap: [
    'https://www.google.com/maps/place/R.+Par%C3%A1,+139+-+Centro,+S%C3%A3o+Caetano+do+Sul+-+SP,+09521-170,+Brazil',
    'https://www.google.com/maps/place/R.+dos+Bandeirantes,+215+-+Vila+Bocaina,+Mau%C3%A1+-+SP,+09310-130,+Brazil'
  ],
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday'
      ],
      opens: '07:00',
      closes: '21:00'
    }
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,700;1,400&family=Belleza&family=Plus+Jakarta+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
