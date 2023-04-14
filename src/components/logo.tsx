import { ThemeContext } from 'styled-components';
import { ReactComponent as Jayme } from '../assets/image/placeholder/jaymee.svg';
import { useContext } from 'react';

export default function Logo({ width }: { width?: string | number }) {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className="image"
      style={{
        width: width || '100%',
        backgroundColor: themeContext.color.primary,
        aspectRatio: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Jayme />
    </div>
  );
}
