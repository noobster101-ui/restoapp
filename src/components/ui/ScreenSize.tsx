import { useState, useEffect } from 'react';

interface ScreenSizeProps<T> {
  base: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
}

const useScreenSize = <T,>({ base, sm, md, lg, xl, xxl }: ScreenSizeProps<T>) => {
  const [value, setValue] = useState<T>(base);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1536 && xxl !== undefined) {
        setValue(xxl);
      } else if (width >= 1280 && xl !== undefined) {
        setValue(xl);
      } else if (width >= 1024 && lg !== undefined) {
        setValue(lg || base);
      } else if (width >= 768 && md !== undefined) {
        setValue(md || base);
      } else if (width >=  640 && sm !== undefined) {
        setValue(sm || base);
      } else {
        setValue(base);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [base, sm, md, lg, xl, xxl]);

  return value;
};

export default useScreenSize;
