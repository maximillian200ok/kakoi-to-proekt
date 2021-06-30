import { FC } from 'react';

interface Props {
  className?: string;
}

export const Title: FC<Props> = ({ className }) => {
  return <h3 className={className}>мини-игра apple of fortune</h3>;
};
