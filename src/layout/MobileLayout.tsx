import { ReactNode } from 'react';
import styled from 'styled-components';

export default function MobileLayout({ children }: { children: ReactNode }) {
  const MobileLayout = styled.div`
    max-width: 650px;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
  `;
  return <MobileLayout className="mobile-layout">{children}</MobileLayout>;
}
