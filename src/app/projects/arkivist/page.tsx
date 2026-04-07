'use client';

import CaseStudyPage from '@/components/CaseStudyPage';
import { caseStudies } from '@/constants/caseStudies';

export default function ARKivistProjectPage() {
  return <CaseStudyPage study={caseStudies.arkivist} />;
}
