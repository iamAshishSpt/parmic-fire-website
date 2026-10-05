import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Our Tasmanian Operations',
  description: 'Tasmanian owned and operated since 1992. Learn about Parmic\'s in-house engineering team, our custom Mornington fabrication workshop, and our AS/NZS ISO 9001 quality assurance.',
  openGraph: {
    title: 'About Parmic | Tasmanian Fire Engineering',
    description: 'Discover the team, facility, and infrastructure behind Tasmania\'s leading end-to-end fire protection company.',
  }
};

export default function AboutPage() {
  return <AboutClient />;
}
