'use client';

import CaseStudyPage from '@/components/CaseStudyPage';
import { caseStudies } from '@/constants/caseStudies';

export default function MidChainsProjectPage() {
  return <CaseStudyPage study={caseStudies.midchains} />;
}
