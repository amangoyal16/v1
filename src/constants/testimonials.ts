export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
  is_visible: boolean;
}

export const foundersImageArray = [
  {
    image: '/founders/Thanasi.jpeg',
    name: 'Thanasi Dilos',
    title: 'Co-Founder @ Civics Unplugged',
  },
  {
    image: '/founders/sakshi-bansal.jpeg',
    name: 'Sakshi Bansal',
    title: 'Founder',
  },

  {
    image: '/founders/akash.jpeg',
    name: 'Akash',
    title: 'IT Business Consultant',
  },

  {
    image: '/founders/pratik.jpeg',
    name: 'Pratik',
    title: 'Co-Founder @ PollenStudios',
  },
  {
    image: '/founders/keiji.jpeg',
    name: 'Keiji Yamamoto',
    title: 'Co-founder @ Arkivist',
  },
  {
    image: '/founders/Veronika.webp',
    name: 'Veronika Schmidt',
    title: 'Founder & CEO @ MetaLumna',
  },
  {
    image: '/founders/rakesh.jpeg',
    name: 'Rakesh Sehgal',
    title: 'COO @ CodeYogi',
  },
  {
    image: '/founders/tyler.png',
    name: 'Tyler',
    title: 'Co-Founder @ MAGNETIQ',
  },
  {
    image: '/founders/nam_le.png',
    name: 'Nam Le',
    title: 'Co-Founder @ PollenStudios',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'tyler-stambaugh',
    quote: `Aman worked with us at a critical point of our product development. We had just scheduled our Alpha Launch and wanted to optimize our application for mobile devices. We had a tight timeline and Aman was able to direct the team in a way that got us to the finish line and ensured that the designs were user friendly.

    He was very proactive in suggesting changes to the UI/UX and I felt like I had someone in the cockpit with me driving as opposed to someone just doing the work because he had to. It was a great experience and would recommend working with Aman any time!

    Thanks Aman for your efforts and a successful launch!`,
    name: 'Tyler Stambaugh 🧲',
    title: 'Co-Founder @ MAGNETIQ',
    company: 'MAGNETIQ',
    image: '/founders/tyler.png',
    is_visible: true,
  },
  {
    id: 'nam-le',
    quote: `Aman takes great ownership of his work commitments and is an amazing colleague to work with. Deliverables are timely and high quality. We are incredibly lucky to have Aman part of our team!`,
    name: 'Nam Le',
    title: 'Co-Founder @ PollenStudios',
    company: 'PollenStudios',
    image: '/founders/nam_le.png',
    is_visible: true,
  },
  {
    id: 'akash-trivedi',
    quote: `Aman is a hard working individual and has a great understanding of UI/ UX and Frontend. Easy to manage guy with a problem solving attitude. He is an asset for whichever organization he works for.`,
    name: 'Akash Trivedi',
    title: 'IT Business Consultant',
    company: '',
    image: '/founders/akash.jpeg',
    is_visible: true,
  },

  // Need to get these
  {
    id: 'rakesh-sehgal',
    quote: `Aman is a hard working individual and has a great understanding of UI/ UX and Frontend. Easy to manage guy with a problem solving attitude. He is an asset for whichever organization he works for.`,
    name: 'Rakesh Sehgal',
    title: 'COO @ CodeYogi',
    company: 'CodeYogi',
    image: '/founders/rakesh.jpeg',
    is_visible: false,
  },
  {
    id: 'keiji-drysdale',
    quote: `Aman's ability to translate complex user requirements into intuitive design solutions is remarkable. He delivered our MVP design ahead of schedule and the quality exceeded our expectations. Our investors were impressed!`,
    name: 'Keiji Drysdale',
    title: 'Co-founder @ Arkivist',
    company: 'Arkivist',
    image: '/founders/keiji.jpeg',
    is_visible: false, // Hidden by default
  },
  {
    id: 'veronika-nesheva',
    quote: `I've worked with many designers, but Aman stands out for his collaborative approach and deep understanding of SaaS products. He helped us redesign our entire platform, resulting in a 60% improvement in user engagement.`,
    name: 'Veronika Nesheva',
    title: 'Founder & CEO @ MetaLumna',
    company: 'MetaLumna',
    image: '/founders/Veronika.webp',
    is_visible: false, // Hidden by default
  },
  {
    id: 'blake',
    quote: `Aman's design system work transformed how our team builds products. His attention to scalability and consistency has saved us countless hours and improved our design quality across all touchpoints.`,
    name: 'Blake Minho Kim',
    title: 'Co-Founder @ Myosin.xyz',
    company: 'Myosin.xyz',
    image: '/founders/blake.jpeg',
    is_visible: false, // Hidden by default
  },
  {
    id: 'sakshi-bansal',
    quote: `Aman's design system work transformed how our team builds products. His attention to scalability and consistency has saved us countless hours and improved our design quality across all touchpoints.`,
    name: 'Sakshi Bansal',
    title: 'Founder',
    company: '',
    image: '/founders/sakshi-bansal.jpeg',
    is_visible: false, // Hidden by default
  },
];
