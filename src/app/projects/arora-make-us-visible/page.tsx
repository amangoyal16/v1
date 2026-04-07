'use client';

import CaseStudyPage from '@/components/CaseStudyPage';
import { caseStudies } from '@/constants/caseStudies';

export default function AroraProjectPage() {
  return <CaseStudyPage study={caseStudies['arora-make-us-visible']} />;
}
