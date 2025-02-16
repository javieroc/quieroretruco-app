import { FC, useState } from 'react';
import { useCardImages } from '../hooks/useCardImages';

interface PlayCardProps {
  image: string;
  play: (card: string) => void;
}

const PlayCard: FC<PlayCardProps> = ({ image, play }) => {
  const [isFlipped, flip] = useState<boolean>(false);
  const images = useCardImages();

  const handleOnClick = () => {
    if (!isFlipped) {
      flip(true);
      play(image);
    }
  };

  return (
    <img
      className="w-10 cursor-pointer"
      src={isFlipped ? images[image] : images['back']}
      onClick={handleOnClick}
      alt="Carta de Truco"
    />
  );
};

export { PlayCard };
