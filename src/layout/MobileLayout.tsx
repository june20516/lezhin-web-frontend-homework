import { ReactNode } from 'react';
import { StyledMobileLayout } from './styledComponents';

export default function MobileLayout({ children }: { children: ReactNode }) {
  return <StyledMobileLayout className="mobile-layout">{children}</StyledMobileLayout>;
}
