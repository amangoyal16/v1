'use client';

import CaseStudyPage from '@/components/CaseStudyPage';
import { caseStudies } from '@/constants/caseStudies';

export default function FYTProjectPage() {
  return <CaseStudyPage study={caseStudies.fyt} />;
}
