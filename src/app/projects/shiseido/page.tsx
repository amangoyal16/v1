'use client';

import CaseStudyPage from '@/components/CaseStudyPage';
import { caseStudies } from '@/constants/caseStudies';

export default function ShiseidoProjectPage() {
  return <CaseStudyPage study={caseStudies.shiseido} />;
}
