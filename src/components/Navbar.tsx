import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-2 border-b border-gray-200 bg-white p-4">
      <a href="/">
        <img src={Logo} className="h-10" alt="QuieroReTruco Logo" />
      </a>
    </nav>
  );
};

export { Navbar };
