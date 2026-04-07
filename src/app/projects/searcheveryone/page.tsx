'use client';

import CaseStudyPage from '@/components/CaseStudyPage';
import { caseStudies } from '@/constants/caseStudies';

export default function SearchEveryoneProjectPage() {
  return <CaseStudyPage study={caseStudies.searcheveryone} />;
}
