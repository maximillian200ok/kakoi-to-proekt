import { FC } from 'react';

interface Props {
  className?: string;
}

export const Field: FC<Props> = ({ className, children }) => {
  return (
    <div
      className={
        className ? `apple-fortune__field ${className}` : 'apple-fortune__field'
      }
    >
      {children}
    </div>
  );
};
