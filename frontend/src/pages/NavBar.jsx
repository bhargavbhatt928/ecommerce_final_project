import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
const NavBar = () => {
  return (
    <div className="bg-sky-900 text-xl text-white flex flex-row items-center justify-center z-10 absolute w-full">
      <Menu as="div" className="flex flex-row items-center justify-center">
        <div>
          <MenuButton className="bg-transparent p-2">
            <a>Home</a>
          </MenuButton>
        </div>
        <div>
          <MenuButton className="bg-transparent p-2">
            <a>All Products</a>
          </MenuButton>
        </div>
        <div>
          <div>
            <MenuButton className="bg-transparent flex">
              <span className="pl-2 pt-2 pb-2 pr-1">Women</span>
              <ArrowDownTrayIcon aria-hidden="true" className="h-4 w-4 mt-3" />
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute  z-10 flex flex-col mt-1 w-24 p-4 bg-opacity-75 origin-top-right rounded-md bg-black text-white  py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in "
          >
            <MenuItem>
              <a>Blazer</a>
            </MenuItem>
            <MenuItem>
              <a>Pants</a>
            </MenuItem>
            <MenuItem>
              <a>Skirts</a>
            </MenuItem>
          </MenuItems>
        </div>
      </Menu>
      <Menu as="div" className="flex flex-row items-center justify-center">
        <div>
          <div>
            <MenuButton className="bg-transparent flex">
              <span className="pl-2 pt-2 pb-2 pr-1">Men</span>
              <ArrowDownTrayIcon aria-hidden="true" className="h-4 w-4 mt-3" />
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute  z-10 flex flex-col mt-1 w-24 p-4 bg-opacity-75 origin-top-right rounded-md bg-black text-white  py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in "
          >
            <MenuItem>
              <a>Blazer</a>
            </MenuItem>
            <MenuItem>
              <a>Pants</a>
            </MenuItem>
            <MenuItem>
              <a>Shirts</a>
            </MenuItem>
          </MenuItems>
        </div>
        <div>
          <MenuButton className="bg-transparent p-2">
            <a>Kids</a>
          </MenuButton>
        </div>
        <div>
          <MenuButton className="bg-transparent p-2">
            <a>Contact</a>
          </MenuButton>
        </div>
      </Menu>
    </div>
  );
};

export default NavBar;
