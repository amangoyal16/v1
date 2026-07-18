'use client';

import CaseStudyPage from '@/components/CaseStudyPage';
import { caseStudies } from '@/constants/caseStudies';

export default function MorphProjectPage() {
  return <CaseStudyPage study={caseStudies.morph} />;
}
