'use client';

import CaseStudyPage from '@/components/CaseStudyPage';
import { caseStudies } from '@/constants/caseStudies';

export default function HiveProjectPage() {
  return <CaseStudyPage study={caseStudies.hive} />;
}
