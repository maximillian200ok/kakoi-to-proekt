import { FC } from 'react';

interface Props {
  bet: number;
}

export const BetItem: FC<Props> = ({ bet }) => {
  return <div className="bet-item">{bet}</div>;
};
