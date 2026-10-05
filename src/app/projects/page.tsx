import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Commercial Fire Project Portfolio',
  description: 'View Parmic\'s portfolio of critical infrastructure, commercial, and industrial fire protection projects across Tasmania. Showcasing expertise in healthcare, government, and education sectors.',
  openGraph: {
    title: 'Commercial Fire Project Portfolio | Parmic',
    description: 'Explore Parmic\'s track record of delivering end-to-end fire infrastructure for Tasmania\'s most critical facilities.',
  }
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
