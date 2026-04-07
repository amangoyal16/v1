'use client';

import CaseStudyPage from '@/components/CaseStudyPage';
import { caseStudies } from '@/constants/caseStudies';

export default function BillieBotProjectPage() {
  return <CaseStudyPage study={caseStudies.billieBot} />;
}
