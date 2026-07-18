import { projectsData } from '@/constants/projects';

type Project = (typeof projectsData)[number];
type ProjectSlug = Project['slug'];

export type CaseStudyMoment = {
  title: string;
  description: string;
};

export type CaseStudySnapshotItem = {
  label: string;
  value: string;
  detail: string;
};

export type CaseStudyData = {
  project: Project;
  discipline: string;
  focus: string;
  title: string;
  heroSummary: string;
  snapshot: CaseStudySnapshotItem[];
  challenge: string;
  approach: string;
  ownership: CaseStudyMoment[];
  visualTitle: string;
  visualCaption: string;
  visualMoments: CaseStudyMoment[];
  outcomeSummary: string;
};

const projectBySlug = Object.fromEntries(
  projectsData.map((project) => [project.slug, project])
) as Record<ProjectSlug, Project>;

export const caseStudies = {
  arkivist: {
    project: projectBySlug.arkivist,
    discipline: 'Product Design',
    focus: 'WebAR Strategy',
    title: 'ARKivist: democratizing immersive commerce.',
    heroSummary:
      'A browser-first WebAR platform that helped brands launch immersive product experiences without asking shoppers to download an app.',
    snapshot: [
      {
        label: 'Role',
        value: 'Lead Product Designer',
        detail: 'UX research, UI design, prototyping',
      },
      {
        label: 'Timeline',
        value: '4 months',
        detail: 'January 2024 to April 2024',
      },
      {
        label: 'Team',
        value: '1 PM, 2 engineers',
        detail: 'Cross-functional product collaboration',
      },
      {
        label: 'Platform',
        value: 'Web on mobile and desktop',
        detail: 'React, WebXR, Three.js',
      },
    ],
    challenge:
      'AR commerce usually breaks down before it becomes valuable: shoppers hit app-download friction, while brands face a messy asset pipeline and little confidence that immersive previews will convert.',
    approach:
      'I focused on the parts that make WebAR usable in practice: a low-code merchant workflow, clearer asset readiness feedback, and an in-browser experience that kept product context and purchase intent intact.',
    ownership: [
      {
        title: 'Lowered the entry barrier',
        description:
          'Made the AR experience work directly in the browser so users could preview products instantly instead of detouring through an app store.',
      },
      {
        title: 'Simplified brand operations',
        description:
          'Designed a cleaner dashboard for uploading, managing, and validating 3D assets before launch.',
      },
      {
        title: 'Connected immersion to conversion',
        description:
          'Kept the interface grounded with persistent product context and clear actions so the AR moment still supported purchase decisions.',
      },
    ],
    visualTitle: 'Merchant setup and browser-based AR preview.',
    visualCaption:
      'The product needed to work for two audiences at once: brands preparing experiences and shoppers entering them with almost no friction.',
    visualMoments: [
      {
        title: 'Asset pipeline',
        description:
          'Automated checks and clearer model feedback helped brands understand whether an experience was ready to ship.',
      },
      {
        title: 'Commerce handoff',
        description:
          'Persistent context inside the AR view made it easier to move from exploration to purchase.',
      },
    ],
    outcomeSummary:
      'The result was a more operational WebAR product: faster launch cycles, clearer onboarding for brands, and stronger proof that immersive commerce could feel practical instead of experimental.',
  },
  billieBot: {
    project: projectBySlug.billieBot,
    discipline: 'AI & Wellbeing',
    focus: 'Student Mental Health',
    title: 'BILLIEBOT: a calmer first layer of student support.',
    heroSummary:
      'An AI companion for student wellbeing, designed to feel anonymous, immediate, and safe for campuses that needed more support capacity.',
    snapshot: [
      {
        label: 'Role',
        value: 'Head of Product Design',
        detail: 'UX, conversation design, trust patterns',
      },
      {
        label: 'Reach',
        value: '15+ U.S. campuses',
        detail: 'Adopted as a student support layer',
      },
      {
        label: 'Delivery',
        value: '3 months',
        detail: 'MVP to V2 transition',
      },
      {
        label: 'Stack',
        value: 'GenAI product',
        detail: 'Next.js, OpenAI, Postgres',
      },
    ],
    challenge:
      'Campus counseling systems were overloaded, and students often needed support long before they could access a human counselor. The product had to feel safe enough to use in vulnerable moments.',
    approach:
      'I kept the experience intentionally light: a warm conversational tone, minimal interface noise, strong privacy cues, and clear crisis escalation logic when a conversation crossed into high-risk territory.',
    ownership: [
      {
        title: 'Built psychological safety into onboarding',
        description:
          'The first screens emphasized anonymity, control, and low pressure so students could start without overthinking the decision.',
      },
      {
        title: 'Shaped the product voice',
        description:
          'Designed for empathy without sounding clinical, which helped the AI feel supportive instead of scripted.',
      },
      {
        title: 'Designed crisis escalation patterns',
        description:
          'Created a clear shift from conversation mode to safety mode whenever the system detected signs of self-harm or urgent risk.',
      },
    ],
    visualTitle: 'Anonymous onboarding and support flow.',
    visualCaption:
      'The interface was stripped back so students could orient quickly, speak freely, and reach the right level of support without friction.',
    visualMoments: [
      {
        title: 'Mood check-in',
        description:
          'Fast entry points gave students a way to start talking without filling out heavy forms or choosing from long menus.',
      },
      {
        title: 'Safety mode',
        description:
          'High-risk conversations triggered a more direct interface for crisis resources and escalation.',
      },
    ],
    outcomeSummary:
      'BillieBot gave campuses a safer and more scalable first-response layer, helping students get immediate support while reducing pressure on overloaded counseling teams.',
  },
  'arora-make-us-visible': {
    project: projectBySlug['arora-make-us-visible'],
    discipline: 'Activism & Digital Art',
    focus: 'WebAR Platform',
    title: 'ARORA: turning public space into a living digital canvas.',
    heroSummary:
      'A WebAR platform built for artists and organizers to place digital monuments in real locations and make them accessible from any phone browser.',
    snapshot: [
      {
        label: 'Role',
        value: 'Head of Product',
        detail: 'Strategy, onboarding, product direction',
      },
      {
        label: 'Partner',
        value: '#MakeUsVisible',
        detail: 'Mission-driven collaboration',
      },
      {
        label: 'Scale',
        value: '30+ artists',
        detail: 'Distributed global campaign',
      },
      {
        label: 'Stack',
        value: 'WebAR product',
        detail: 'Three.js, React, Node.js',
      },
    ],
    challenge:
      'The campaign needed a way to publish public-facing digital monuments without turning artists into developers or forcing visitors through an app-download journey.',
    approach:
      'I focused on accessibility from both sides: a zero-code publishing flow for artists and a QR-led mobile browser experience that made on-site discovery feel immediate.',
    ownership: [
      {
        title: 'Made publishing accessible',
        description:
          'Created a workflow for uploading 3D work and attaching it to real locations without code or technical setup.',
      },
      {
        title: 'Kept the visitor journey frictionless',
        description:
          'Designed for quick entry on mid-range phones so the public experience stayed inclusive and browser-first.',
      },
      {
        title: 'Connected mission to product behavior',
        description:
          'The platform made the act of discovery part of the story, tying physical place and digital narrative together.',
      },
    ],
    visualTitle: 'Geo-fenced publishing and on-site AR discovery.',
    visualCaption:
      'The core experience had to connect artist upload, location setup, and real-world viewing without making any of those steps feel technical.',
    visualMoments: [
      {
        title: 'Artist portal',
        description:
          'A simple flow for uploading assets and assigning locations made campaign participation easier for non-technical contributors.',
      },
      {
        title: 'On-site viewer',
        description:
          'Visitors scanned a code, entered through the browser, and saw the work anchored in place almost immediately.',
      },
    ],
    outcomeSummary:
      'ARORA helped the campaign publish digital public art at meaningful scale while keeping both contribution and participation approachable for non-technical users.',
  },
  shiseido: {
    project: projectBySlug.shiseido,
    discipline: 'Technical Product Management',
    focus: 'Enterprise Web3',
    title: 'Shiseido: teaching Web3 by letting employees use it.',
    heroSummary:
      'An internal learning platform that turned abstract blockchain education into a hands-on, reward-based product for a global enterprise audience.',
    snapshot: [
      {
        label: 'Role',
        value: 'Technical Product Manager',
        detail: 'Architecture, design strategy, product direction',
      },
      {
        label: 'Timeline',
        value: '6 months',
        detail: 'Consulting engagement',
      },
      {
        label: 'Audience',
        value: 'Internal employees',
        detail: 'Global workforce onboarding',
      },
      {
        label: 'Stack',
        value: 'SSO plus Web3 auth',
        detail: 'AWS, Polygon, Next.js',
      },
    ],
    challenge:
      'Shiseido wanted its workforce to understand Web3 in a concrete way, but abstract explanations alone were not enough. The learning system had to feel enterprise-safe while still exposing real blockchain behavior.',
    approach:
      'I helped shape a hybrid product direction: familiar enterprise login patterns on the front, wallet-backed credentials and rewards underneath, with gamified learning flows that made the technology tangible.',
    ownership: [
      {
        title: 'Bridged enterprise security and Web3 mechanics',
        description:
          'Mapped a hybrid authentication model where corporate identity could lead into wallet-based ownership without confusing employees.',
      },
      {
        title: 'Shaped the learning loop',
        description:
          'Used course completion, rewards, and progression to turn passive education into something employees could experience directly.',
      },
      {
        title: 'Connected digital and physical rewards',
        description:
          'Designed a system where earned credentials could lead to physical collectibles, making the experience more memorable inside a corporate context.',
      },
    ],
    visualTitle: 'Employee portal with wallet-backed learning rewards.',
    visualCaption:
      'The product had to feel familiar enough for enterprise users while still demonstrating what Web3 could do in a practical, low-friction way.',
    visualMoments: [
      {
        title: 'SSO to wallet flow',
        description:
          'A hybrid login flow gave employees the simplicity of corporate access with the utility of wallet-linked credentials behind the scenes.',
      },
      {
        title: 'Credential rewards',
        description:
          'Completing lessons unlocked digital rewards and physical recognition, turning abstract concepts into earned outcomes.',
      },
    ],
    outcomeSummary:
      'The platform translated blockchain education into a usable enterprise product, making adoption easier because employees learned the system by interacting with it instead of just reading about it.',
  },
  hive: {
    project: projectBySlug.hive,
    discipline: 'Web3 Product Design',
    focus: 'Data Sovereignty',
    title: 'Hive: making personal data feel visible, controllable, and valuable.',
    heroSummary:
      'A privacy-first browser extension that let users understand, control, and monetize their data without exposing their identity.',
    snapshot: [
      {
        label: 'Role',
        value: 'Lead Product Designer',
        detail: 'UX/UI, browser extension design',
      },
      {
        label: 'Timeline',
        value: '6 months',
        detail: 'Concept through beta',
      },
      {
        label: 'Team',
        value: '3 engineers, 1 PM',
        detail: 'Web3 startup collaboration',
      },
      {
        label: 'Stack',
        value: 'Privacy-preserving data layer',
        detail: 'Polybase, ZK-Snarks, React',
      },
    ],
    challenge:
      'Data products are usually invisible until something goes wrong. For Hive, trust was the core product problem: users needed proof that the system was understandable, stoppable, and aligned with their interests.',
    approach:
      'I designed around transparency and control, pairing a simple extension experience with visible data tags, a clear kill switch, and a reward model that showed why participation mattered.',
    ownership: [
      {
        title: 'Made control unmistakable',
        description:
          'The extension foregrounded simple controls so users could pause collection instantly instead of searching through settings.',
      },
      {
        title: 'Made hidden systems legible',
        description:
          'A data-vault view helped users see the tags and signals being generated rather than treating the product as a black box.',
      },
      {
        title: 'Designed the value exchange',
        description:
          'Created product language and flows that reframed data sharing as a user-controlled system with direct upside.',
      },
    ],
    visualTitle: 'Extension control center and transparent data vault.',
    visualCaption:
      'Hive worked best when users could understand the system at a glance, stop it at any time, and feel the payoff of participating.',
    visualMoments: [
      {
        title: 'Kill switch',
        description:
          'A prominent pause control made safety and agency part of the core interaction model.',
      },
      {
        title: 'Data vault',
        description:
          'The interface showed what the system knew about the user in a language that felt inspectable instead of opaque.',
      },
    ],
    outcomeSummary:
      'Hive turned an abstract privacy promise into a clearer product experience, helping users feel more like participants than targets in the data economy.',
  },
  morph: {
    project: projectBySlug.morph,
    discipline: 'SaaS Product Design',
    focus: 'AI & Telephony',
    title: 'Morph: giving critical response teams a clearer triage layer.',
    heroSummary:
      'An AI-powered communication product that prioritized urgent conversations across SMS, voice, and WhatsApp for teams handling high volumes of service requests.',
    snapshot: [
      {
        label: 'Role',
        value: 'Product Designer',
        detail: 'UX research, UI design, prototyping',
      },
      {
        label: 'Collaboration',
        value: 'Direct with founder',
        detail: 'Product and workflow strategy',
      },
      {
        label: 'Sector',
        value: 'Healthcare and operations',
        detail: 'U.S. service provider context',
      },
      {
        label: 'Stack',
        value: 'Serverless AI product',
        detail: 'Twilio, AWS Lambda, OpenAI',
      },
    ],
    challenge:
      'Urgent conversations were getting buried under routine administrative traffic. Teams needed a way to separate what was dangerous from what was merely time-consuming, without introducing another layer of chaos.',
    approach:
      'I focused on speed and clarity: an omnichannel queue, clearer priority states, and routing controls that let teams adapt the product to different operational setups without heavy engineering work.',
    ownership: [
      {
        title: 'Defined urgency handling',
        description:
          'Designed the experience around one central question: what needs a human right now versus what can be automated or deferred.',
      },
      {
        title: 'Unified channel context',
        description:
          'Brought voice, SMS, and WhatsApp interactions into one prioritised workspace instead of forcing teams to piece context together manually.',
      },
      {
        title: 'Designed for workflow flexibility',
        description:
          'Helped shape a configurable routing layer so different organizations could adapt the system to their own escalation logic.',
      },
    ],
    visualTitle: 'Triage dashboard for urgent and routine queries.',
    visualCaption:
      'The product had to help teams see what mattered first, act quickly, and trust the system when conversations moved between channels.',
    visualMoments: [
      {
        title: 'Urgency detection',
        description:
          'Priority cues made it easier to distinguish emergency signals from routine requests in busy queues.',
      },
      {
        title: 'Routing logic',
        description:
          'Configurable flows let each organization shape how conversations moved from AI handling to human handoff.',
      },
    ],
    outcomeSummary:
      'Morph turned scattered intake into a more structured triage experience, helping teams respond faster to urgent cases while reducing the noise created by routine communication.',
  },
  searcheveryone: {
    project: projectBySlug.searcheveryone,
    discipline: 'SaaS Product Design',
    focus: 'Recruitment Tech',
    title: 'Search Everyone: turning fragmented recruiting data into a working system.',
    heroSummary:
      'A recruiting platform for legal hiring teams that combined candidate discovery, outreach design, and engagement tracking in one operational workspace.',
    snapshot: [
      {
        label: 'Role',
        value: 'Senior Product Designer',
        detail: 'End-to-end design, design ops',
      },
      {
        label: 'Timeline',
        value: '15 months',
        detail: 'Long-term product engagement',
      },
      {
        label: 'Team',
        value: 'CPO, PM, engineers',
        detail: 'Cross-functional delivery',
      },
      {
        label: 'Platform',
        value: 'B2B web application',
        detail: 'Enterprise SaaS workflow',
      },
    ],
    challenge:
      'Legal recruiting relies on fragmented public records, manual research, and high-touch outreach. Teams needed a single product that could gather the data, structure it, and support customized hiring journeys.',
    approach:
      'I focused on building a recruiter command center: stronger candidate search, more flexible outreach flows, and a workspace that reduced the need to switch between sourcing and engagement tools.',
    ownership: [
      {
        title: 'Structured the sourcing workflow',
        description:
          'Helped shape filters, profiles, and data views so recruiters could move from broad search to qualified shortlists faster.',
      },
      {
        title: 'Designed flexible outreach journeys',
        description:
          'Created room for hiring teams to tailor their process instead of forcing everyone into one rigid sequence.',
      },
      {
        title: 'Unified recruiter context',
        description:
          'Brought engagement and candidate information together so action could happen in the same place as discovery.',
      },
    ],
    visualTitle: 'A recruiting command center for sourcing and outreach.',
    visualCaption:
      'The experience needed to turn scattered public data into something recruiters could act on immediately, without losing control over how they worked.',
    visualMoments: [
      {
        title: 'Smart sourcing',
        description:
          'Profiles and filters transformed raw public information into a more usable search system for legal hiring teams.',
      },
      {
        title: 'Journey builder',
        description:
          'Custom outreach flows gave teams more control over communication style, timing, and hiring strategy.',
      },
    ],
    outcomeSummary:
      'Search Everyone made recruiting workflows more operational: faster sourcing, less manual stitching of data, and a stronger connection between candidate discovery and outreach execution.',
  },
  magnetiq: {
    project: projectBySlug.magnetiq,
    discipline: 'Web3 Product Design',
    focus: 'Creator Economy',
    title: 'MAGNETIQ: hiding the complexity of Web3 behind consumer-grade flows.',
    heroSummary:
      'A creator platform built to make blockchain-powered commerce, rewards, and community ownership feel as approachable as a standard Web2 product.',
    snapshot: [
      {
        label: 'Role',
        value: 'Product Designer',
        detail: 'UX/UI, strategy, onboarding design',
      },
      {
        label: 'Timeline',
        value: 'Ongoing',
        detail: 'Started in early 2021',
      },
      {
        label: 'Team',
        value: 'Founding team',
        detail: 'Product, design, engineering',
      },
      {
        label: 'Stack',
        value: 'Web3 consumer platform',
        detail: 'React, Solidity, Shopify API',
      },
    ],
    challenge:
      'Creators saw the value of ownership and token-based community, but their audiences did not want to learn wallets, gas fees, or crypto-native jargon just to participate.',
    approach:
      'I designed around an invisible Web3 principle: keep the product feeling familiar on the surface, then let blockchain mechanics support access, loyalty, and commerce behind the scenes.',
    ownership: [
      {
        title: 'Reduced onboarding friction',
        description:
          'The entry flow was shaped to feel more like a consumer app than a crypto product, which lowered resistance for non-technical users.',
      },
      {
        title: 'Connected commerce and community',
        description:
          'Purchases were framed as useful fan interactions first, with ownership benefits embedded into the product experience.',
      },
      {
        title: 'Made engagement measurable',
        description:
          'The product direction used blockchain utility to support verifiable participation and more durable creator loyalty loops.',
      },
    ],
    visualTitle: 'Consumer-friendly creator commerce with hidden Web3 rails.',
    visualCaption:
      'The system worked best when people could feel the benefits of ownership without being forced through a visibly crypto-native workflow.',
    visualMoments: [
      {
        title: 'Invisible onboarding',
        description:
          'Wallet creation and blockchain mechanics stayed behind the curtain so the front-end flow could stay familiar.',
      },
      {
        title: 'Utility-led purchases',
        description:
          'Items and interactions were framed around access, participation, and fandom rather than token jargon.',
      },
    ],
    outcomeSummary:
      'MAGNETIQ brought the creator economy and Web3 closer together by making ownership-driven participation feel legible for everyday consumers rather than early crypto adopters.',
  },
  midchains: {
    project: projectBySlug.midchains,
    discipline: 'FinTech Product Design',
    focus: 'Institutional Crypto',
    title: 'MidChains: designing a regulated crypto product that felt credible.',
    heroSummary:
      'A multi-platform trading ecosystem for institutional and high-net-worth clients, built around trust, compliance, and operational clarity.',
    snapshot: [
      {
        label: 'Role',
        value: 'Lead Product Designer',
        detail: 'Web, mobile, and admin experience',
      },
      {
        label: 'Timeline',
        value: '10 months',
        detail: 'Full-cycle product development',
      },
      {
        label: 'Team',
        value: 'Cross-functional team',
        detail: 'PM, engineers, compliance',
      },
      {
        label: 'Platform',
        value: 'Multi-platform ecosystem',
        detail: 'iOS, Android, web, admin',
      },
    ],
    challenge:
      'Institutional clients needed a regulated, high-trust digital asset platform that could handle serious trading and compliance requirements without feeling clumsy or intimidating.',
    approach:
      'I treated the product as an ecosystem rather than a single interface: the trading surface, the mobile monitoring experience, and the operations tooling all needed to feel coherent, secure, and institution-ready.',
    ownership: [
      {
        title: 'Defined the cross-platform system',
        description:
          'Aligned the experience across trading, mobile, and admin so the product suite felt like one credible institution instead of separate tools.',
      },
      {
        title: 'Integrated compliance into the journey',
        description:
          'Helped make KYC and regulatory workflows clearer so required friction felt more manageable and less arbitrary.',
      },
      {
        title: 'Shaped institutional trading flows',
        description:
          'Supported high-value use cases such as RFQ and OTC style interactions that demanded more trust than standard retail crypto products.',
      },
    ],
    visualTitle: 'Trading terminal, mobile monitoring, and compliance operations.',
    visualCaption:
      'This work was about creating a product that felt as credible as a regulated financial service while still moving at the speed expected from modern trading tools.',
    visualMoments: [
      {
        title: 'Compliance workflow',
        description:
          'The onboarding and review experience was tuned to support regulatory rigor without overwhelming users at the wrong moment.',
      },
      {
        title: 'Institutional desk',
        description:
          'Large trade flows were framed around confidence, clarity, and reduced operational ambiguity.',
      },
    ],
    outcomeSummary:
      'MidChains pushed the product from a set of ambitious ideas toward a more institution-ready ecosystem, with clearer trust signals, more usable compliance flows, and better support for serious trading behavior.',
  },
  fyt: {
    project: projectBySlug.fyt,
    discipline: 'Product Design',
    focus: 'Mobile Experience',
    title: 'FYT: shaping the product direction before the full story is ready.',
    heroSummary:
      'An in-progress mobile product focused on simplifying everyday interactions through a clearer flow, stronger hierarchy, and more intuitive task design.',
    snapshot: [
      {
        label: 'Role',
        value: 'Product design in progress',
        detail: 'Direction, prototyping, interaction design',
      },
      {
        label: 'Stage',
        value: 'In development',
        detail: 'Case study still taking shape',
      },
      {
        label: 'Focus',
        value: 'Mobile-first',
        detail: 'Flow clarity and reduced friction',
      },
      {
        label: 'Output',
        value: 'Early product system',
        detail: 'Research, prototypes, interaction studies',
      },
    ],
    challenge:
      'The product is still being shaped, so the main challenge is finding the clearest version of the flow before the full visual system and release story are locked in.',
    approach:
      'I am focusing on structure first: reducing friction in the core journey, testing mobile interaction patterns, and making sure the eventual case study reflects real shipped thinking instead of placeholder content.',
    ownership: [
      {
        title: 'Defined the core flow',
        description:
          'Focused on the task sequence and where users need clarity, momentum, or feedback inside the mobile experience.',
      },
      {
        title: 'Explored interaction patterns',
        description:
          'Used lightweight product studies to test what feels natural, fast, and understandable on smaller screens.',
      },
      {
        title: 'Protected the narrative quality',
        description:
          'Kept the public case study honest by documenting direction and scope without inventing finished outcomes that do not exist yet.',
      },
    ],
    visualTitle: 'Early product direction and mobile interaction studies.',
    visualCaption:
      'This page stays intentionally light until the product and its visual artifacts are ready to be shared in a finished case study.',
    visualMoments: [
      {
        title: 'Flow definition',
        description:
          'The current work is centered on making the core path simpler and easier to understand.',
      },
      {
        title: 'Interaction studies',
        description:
          'Mobile hierarchy, pacing, and task sequencing are being refined before the final UI is documented.',
      },
    ],
    outcomeSummary:
      'The case study is still in progress, so the emphasis here is on direction and product thinking rather than finished launch metrics or polished visual artifacts.',
  },
} satisfies Record<ProjectSlug, CaseStudyData>;
