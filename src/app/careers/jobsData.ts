export type Job = {
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  summary: string;
  aboutRole: string;
  jobDescription: string;
  responsibilities: string[];
  requiredSkills: string[];
  qualifications: string[];
  experience: string;
  niceToHave: string[];
  whatWeOffer: string[];
};

export const jobs: Job[] = [
  {
    slug: "accountant",
    title: "Accountant",
    department: "Finance & Accounts",
    location: "Noida (Work from Office)",
    employmentType: "Full-Time",
    summary:
      "Manage day-to-day financial operations with accurate records, timely compliance, and dependable support across GST, TDS, invoicing, and reconciliations.",
    aboutRole:
      "Launch Veda is looking for a detail-oriented, proactive Accountant to manage day-to-day financial operations. You will keep financial records accurate while supporting the company’s compliance with accounting standards, tax regulations, and internal financial policies.",
    jobDescription:
      "This is a hands-on finance role for an Accountant with 1-3 years of experience in GST, TDS, invoicing, vendor payments, reconciliations, bookkeeping, statutory compliance, and financial reporting. You will work closely with internal teams, vendors, clients, auditors, and tax consultants to keep operations organized, accurate, and on schedule.",
    responsibilities: [
      "Maintain accurate books of accounts and proper financial records.",
      "Prepare, verify, and process customer invoices, vendor bills, and payment vouchers.",
      "Manage accounts payable and accounts receivable.",
      "Process vendor payments and employee reimbursements within defined timelines.",
      "Prepare and file GST returns on time, in line with applicable regulations.",
      "Calculate, deduct, deposit, and reconcile TDS as required under Income Tax provisions.",
      "Handle GST and TDS reconciliations, resolving discrepancies promptly.",
      "Perform bank reconciliations and maintain daily cash and bank records.",
      "Monitor outstanding receivables and coordinate payment follow-ups with clients.",
      "Maintain purchase and sales registers, invoices, receipts, tax records, and transaction documentation.",
      "Assist with monthly, quarterly, and annual financial closing activities.",
      "Prepare MIS reports and financial summaries for management.",
      "Coordinate with auditors, tax consultants, and regulatory authorities during audits and assessments.",
      "Ensure statutory compliance and adherence to company financial policies.",
      "Support payroll processing with finance-related inputs when required.",
    ],
    requiredSkills: [
      "Strong knowledge of GST, TDS, accounting principles, and statutory compliance.",
      "Hands-on experience with invoice generation, payment processing, vendor management, and ledger management.",
      "Working knowledge of accounts payable, accounts receivable, bank reconciliations, and bookkeeping.",
      "Experience using Tally Prime, Busy, Zoho Books, or similar accounting software.",
      "Proficiency in Microsoft Excel, including VLOOKUP, Pivot Tables, formulas, and data analysis.",
      "Strong analytical and numerical skills with exceptional attention to detail.",
      "Effective problem-solving and reconciliation skills.",
      "Good communication, coordination, organizational, and time-management abilities.",
      "Ability to handle confidential financial information with integrity.",
      "Ability to work independently and meet deadlines.",
    ],
    qualifications: [
      "Bachelor's degree in Commerce (B.Com) or BBA is mandatory.",
      "M.Com, MBA (Finance), CA Inter, or an equivalent qualification is an added advantage.",
    ],
    experience: "1-3 years of experience in Accounting or Finance, including GST filings, TDS compliance, invoicing, vendor payments, and customer collections.",
    niceToHave: [
      "Experience in a startup, IT company, digital marketing agency, or service-based organization.",
      "Experience coordinating with auditors, tax consultants, or regulatory authorities.",
      "Exposure to payroll-related finance inputs and management reporting.",
    ],
    whatWeOffer: [
      "Opportunity to work with a fast-growing AI-powered company.",
      "Collaborative and professional work environment.",
      "Exposure to end-to-end finance and accounting operations.",
      "Career growth and learning opportunities.",
      "Competitive salary and performance-based incentives.",
    ],
  },
  {
    slug: "video-editor",
    title: "Video Editor",
    department: "Marketing",
    location: "Noida (Work from Office)",
    employmentType: "Full-Time",
    summary:
      "Create high-quality, brand-aligned video content for digital marketing, social media, advertising campaigns, and product storytelling.",
    aboutRole:
      "Launch Veda is looking for a creative and skilled Video Editor to turn ideas and raw footage into engaging video content. You will bring strong storytelling, pacing, and editing skills to content that supports our brand identity and growth campaigns.",
    jobDescription:
      "This is a hands-on editing role for a Video Editor with 3-5 years of professional experience. You will create polished reels, short-form content, promotional videos, product videos, advertisements, and social-first assets while collaborating closely with the marketing and design teams.",
    responsibilities: [
      "Edit videos for social media platforms, advertisements, and marketing campaigns.",
      "Create reels, short-form videos, promotional videos, and product videos.",
      "Add motion graphics, transitions, text animations, and visual effects.",
      "Perform color correction, color grading, and audio enhancement.",
      "Sync audio, music, voiceovers, and sound effects.",
      "Collaborate with the marketing and design teams to develop creative content.",
      "Optimize videos for different social media platforms and formats.",
      "Organize and manage video assets efficiently.",
      "Stay current with video-editing trends, tools, and techniques.",
    ],
    requiredSkills: [
      "3-5 years of professional experience in video editing.",
      "A strong portfolio that showcases creative video projects.",
      "Strong storytelling, pacing, and visual-composition skills.",
      "Advanced working knowledge of Adobe Premiere Pro, Adobe After Effects, and Adobe Media Encoder.",
      "Experience creating motion graphics, text animations, transitions, and visual effects.",
      "Strong color-correction, color-grading, audio-editing, and sound-design skills.",
      "Experience creating reels and short-form social media content.",
      "Ability to manage multiple projects and meet deadlines.",
      "Strong attention to detail, creativity, and visual judgment.",
      "Familiarity with AI-assisted video-editing tools such as Adobe Firefly, Runway, CapCut AI, or similar tools.",
    ],
    qualifications: [
      "A strong portfolio demonstrating creative short-form, promotional, product, or advertising video work.",
      "Demonstrated proficiency with Adobe Premiere Pro, Adobe After Effects, and Adobe Media Encoder.",
    ],
    experience: "3-5 years of relevant professional experience in video editing.",
    niceToHave: [
      "Canva experience for social and marketing content.",
      "Experience with D2C, Ayurvedic, FMCG, Cosmetics, Wellness, or Fragrance brands.",
      "Basic knowledge of cinematography and camera handling.",
      "Experience in animation or VFX.",
      "Knowledge of YouTube, Instagram, and Meta video-content optimization.",
      "Experience working in a startup or fast-paced environment.",
    ],
    whatWeOffer: [
      "Opportunity to work with a fast-growing AI-powered company.",
      "Collaborative and professional work environment.",
      "Exposure to high-impact brand, social, and advertising campaigns.",
      "Career growth and learning opportunities.",
      "Competitive salary and performance-based incentives.",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    department: "Marketing",
    location: "Noida (Work from Office)",
    employmentType: "Full-Time",
    summary: "Develop and execute digital marketing strategies that drive brand visibility, qualified leads, website traffic, and business growth.",
    aboutRole:
      "Launch Veda is looking for an experienced and results-driven Digital Marketing professional to build and execute strategies that drive brand visibility, qualified leads, website traffic, and sustainable business growth.",
    jobDescription:
      "This is a hands-on role for a digital marketer with 3–6 years of experience in SEO, Google Ads, Meta Ads, performance marketing, social media, and analytics. The ideal candidate will combine strategic thinking with practical execution to ensure campaigns deliver measurable results.",
    responsibilities: [
      "Develop and execute comprehensive digital marketing strategies aligned with business objectives.",
      "Plan, launch, manage, and optimize paid campaigns across Google Ads, Meta Ads, and other relevant platforms.",
      "Drive qualified leads and improve campaign ROI through continuous optimization.",
      "Manage SEO activities, including keyword research, on-page and off-page optimization.",
      "Develop and execute social media strategies to strengthen brand presence and engagement.",
      "Coordinate with content and creative teams to develop high-performing marketing assets.",
      "Monitor website traffic, conversions, campaign performance, and other key marketing metrics.",
      "Use tools such as Google Analytics and Google Search Console to analyze performance and identify growth opportunities.",
      "Conduct competitor, audience, and market research.",
      "Prepare regular performance reports with actionable insights and recommendations.",
      "Stay updated with the latest digital marketing trends, tools, algorithms, and best practices.",
    ],
    requiredSkills: [
      "3–6 years of hands-on experience in digital marketing.",
      "Strong knowledge of Google Ads, Meta Ads, SEO, SEM, and social media marketing.",
      "Experience in lead generation and performance marketing.",
      "Proficiency in Google Analytics and Google Search Console.",
      "Strong analytical and data-driven approach.",
      "Good understanding of content marketing and email marketing.",
      "Excellent communication and coordination skills.",
      "Ability to manage multiple campaigns and deliver results within deadlines.",
      "Creative, proactive, and result-oriented mindset.",
    ],
    qualifications: [
      "Bachelor's degree in Marketing, Business Administration, Communications, or a related field.",
      "Digital Marketing certifications will be an added advantage.",
    ],
    experience: "3–6 years of relevant work experience in digital marketing.",
    niceToHave: [
      "Hands-on experience across SEO, paid media, and analytics reporting.",
      "Strong understanding of campaign attribution, conversion tracking, and optimization loops.",
      "Ability to collaborate cross-functionally with content, design, and growth teams.",
    ],
    whatWeOffer: [
      "Opportunity to work with a fast-growing AI-powered company.",
      "Collaborative and professional work environment.",
      "Career growth and learning opportunities.",
      "Competitive salary and performance-based incentives.",
    ],
  },
];

export function getJob(slug: string) {
  return jobs.find((job) => job.slug === slug);
}

export function getJobApplicationMailto(job: Job) {
  const subject = encodeURIComponent(`Application: ${job.title} | LaunchVeda Careers`);
  const body = encodeURIComponent(
    `Hello LaunchVeda team,\n\nI would like to apply for the ${job.title} role. I have attached my latest resume/CV for your review.\n\nThank you,`,
  );

  return `mailto:support@launchveda.com?subject=${subject}&body=${body}`;
}
