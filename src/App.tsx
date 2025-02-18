import { BoardGame } from './components/BoardGame';
import { Navbar } from './components/Navbar';
import { MatchStatus } from './components/MatchStatus';
import { ControlButtons } from './components/ControlButtons';

const App = () => {
  return (
    <>
      <Navbar />
      <section className="flex p-4 items-center justify-between">
        <MatchStatus />
        <ControlButtons />
      </section>
      <section className="flex justify-center mx-auto max-w-[1000px] p-4 mt-16">
        <BoardGame />
      </section>
    </>
  );
};

export { App };
