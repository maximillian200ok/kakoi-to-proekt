import { FC } from 'react';
import { BetBar, Container, Fields, Title } from './components';

export const App: FC = () => {
  return (
    <div className="apple-fortune">
      <Container>
        <Title className="title apple-fortune__title" />
        <div className="apple-fortune__inner">
          <div className="apple-fortune__left">
            <Fields />
            <BetBar />
          </div>
          <div className="apple-fortune__right"></div>
        </div>
      </Container>
    </div>
  );
};
