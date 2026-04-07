'use client';

import CaseStudyPage from '@/components/CaseStudyPage';
import { caseStudies } from '@/constants/caseStudies';

export default function MagnetiqProjectPage() {
  return <CaseStudyPage study={caseStudies.magnetiq} />;
}
