import { BoardGame } from './components/BoardGame';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <section className="flex justify-center mx-auto max-w-[1000px] p-4 mt-16">
        <BoardGame />
      </section>
    </>
  );
};

export { App };
