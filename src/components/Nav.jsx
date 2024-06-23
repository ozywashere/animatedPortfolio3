'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0  mt-auto xl:right-[2%] z-[9999] top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/*inner*/}
      <div
        className="
         w-full flex xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-[40px] xl:px-0  h-[80px] xl:h-max py-8 bg-white/20 backdrop-blur-sm text-3xl xl:text-3xl xl:rounded-full
        "
      >
        {navData.map((item, index) => {
          return (
            <Link
              className={`${
                pathname === item.path && 'text-accent'
              } relative flex items-center hover:text-accent transition-colors duration-300 group`}
              key={index}
              href={item.path}
            >
              {/*tooltip*/}
              <div className="absolute pr-16 right-0 hidden xl:group-hover:block">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px]">{item.name}</div>
                  {/*    triangle*/}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 -right-2 absolute"></div>
                </div>
              </div>

              {item.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
