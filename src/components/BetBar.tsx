import { ChangeEvent, useState } from 'react';
import { FC } from 'react';
import { BetItem } from './BetItem';

export const BetBar: FC = () => {
  const [betCount, setBetCount] = useState('0');

  const bets = [10, 50, 100, 200, 500, 1000];

  const handleBetBarInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const bet = event.currentTarget.value;

    bet >= '0' && bet.length <= 10 && setBetCount(bet);
  };

  return (
    <div className="bet-bar">
      {bets.map((bet, index) => {
        return <BetItem key={index} bet={bet} />;
      })}
      <input
        value={betCount}
        onChange={handleBetBarInputChange}
        type="number"
        className="bet-bar__input"
      />
      <button className="bet-bar__reset"></button>
    </div>
  );
};
