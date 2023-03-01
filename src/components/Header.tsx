/* eslint-disable @next/next/no-img-element */
import Link from "next/link";


const Header = () => {
  return (
    <div className="w-full py-4 flex items-center px-4 gap-4">
      <div className="inline-flex gap-6 items-center">
        <Link href="/">
          <a className="flex gap-2 items-center">
            <img
              src="/icons/icon.png"
              alt="brackets Logo"
              className="w-9 h-9"
            />
            <p className="hidden lg:inline">
              <span className="font-bold text-xl text-white">Brackets.</span>
            </p>
          </a>
        </Link>
      </div>
      <div className="flex-1"></div>

      <div className="md:flex items-center gap-2 hidden">
      </div>
    </div>
  );
};

export default Header;

