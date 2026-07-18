export function SEOStructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aman Goyal',
    jobTitle: 'Product Designer & Frontend Engineer',
    description:
      'Product designer and frontend engineer with 7+ years of experience helping startups and SaaS companies design and ship user-centered products.',
    url: 'https://amangoyal.design',
    image: 'https://amangoyal.design/me.png',
    sameAs: [
      'https://x.com/amangoyal676',
      'https://www.linkedin.com/in/amangoyal676/',
      'https://dribbble.com/amangoyal676',
      'https://peerlist.io/amangoyal676',
    ],
    knowsAbout: [
      'Product Design',
      'UX Design',
      'UI Design',
      'Frontend Development',
      'React',
      'Next.js',
      'User Experience',
      'Product Strategy',
      'Design Systems',
      'MVP Design',
      'SaaS Design',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Product Designer',
      description:
        'Designs and builds user-centered products and experiences for startups and SaaS companies',
      skills: [
        'User Experience Design',
        'User Interface Design',
        'Frontend Development',
        'Design Systems',
        'Prototyping',
        'User Research',
        'Wireframing',
        'Visual Design',
      ],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'India',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Professional',
      url: 'https://amangoyal.design/contact',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aman Goyal Design',
    founder: 'Aman Goyal',
    url: 'https://amangoyal.design',
    logo: 'https://amangoyal.design/logo.png',
    description:
      'Freelance product design consultancy specializing in user-centered design for startups and SaaS companies.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://amangoyal.design/contact',
    },
    sameAs: [
      'https://x.com/amangoyal676',
      'https://www.linkedin.com/in/amangoyal676/',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'Website',
    name: 'Aman Goyal - Product Designer & Frontend Engineer',
    url: 'https://amangoyal.design',
    description:
      'Portfolio and services of Aman Goyal, a product designer and frontend engineer specializing in user-centered design for startups.',
    author: {
      '@type': 'Person',
      name: 'Aman Goyal',
    },
    inLanguage: 'en-US',
    copyrightYear: '2024',
    genre: 'Portfolio',
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Product Design Services',
    description:
      'Comprehensive product design services including MVP design, product redesign, UX audits, and design systems for startups and SaaS companies.',
    provider: {
      '@type': 'Person',
      name: 'Aman Goyal',
    },
    serviceType: 'Design Consulting',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MVP Design for SaaS',
            description:
              'Design early version of SaaS products for advisors, investors, and customers.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Product Redesign',
            description:
              'Overhaul existing SaaS products with user-centered approach to increase engagement and retention.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UX Audit',
            description:
              'Identify product bottlenecks and optimization opportunities.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Design System',
            description:
              'Create scalable design systems for growing SaaS companies.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Team Extension',
            description:
              'Integrate seamlessly into product development teams as design partner.',
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://amangoyal.design',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://amangoyal.design/about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Projects',
        item: 'https://amangoyal.design/projects',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Blog',
        item: 'https://amangoyal.design/blog',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Contact',
        item: 'https://amangoyal.design/contact',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
