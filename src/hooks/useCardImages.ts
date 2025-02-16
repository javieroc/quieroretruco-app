import { useMemo } from 'react';

const useCardImages = () => {
  const cardImages = useMemo(() => {
    const images = import.meta.glob('/src/assets/cards/*.png', { eager: true }) as Record<
      string,
      { default: string }
    >;

    return Object.fromEntries(
      Object.entries(images).map(([path, module]) => {
        const match = path.match(/\/([^/]+)\.png$/);
        const key = match ? match[1] : path;
        return [key, module.default];
      }),
    );
  }, []);

  return cardImages;
};

export { useCardImages };
