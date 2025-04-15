import { useContext, useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart, FaUser, FaBell } from "react-icons/fa";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import useTranslation from "next-translate/useTranslation";

//internal import
import { getUserSession } from "@lib/auth";
import useGetSetting from "@hooks/useGetSetting";
import { handleLogEvent } from "src/lib/analytics";
import NavbarPromo from "@layout/navbar/NavbarPromo";
import CartDrawer from "@components/drawer/CartDrawer";
import { SidebarContext } from "@context/SidebarContext";
import useUtilsFunction from "@hooks/useUtilsFunction";
import Category from "@components/category/Category";
import MobileFooter from "@layout/footer/MobileFooter";

const Navbar = () => {
  const { t, lang } = useTranslation("common");
  const [searchText, setSearchText] = useState("");
  const { toggleCartDrawer } = useContext(SidebarContext);
  const { totalItems } = useCart();
  const router = useRouter();
  const { showingTranslateValue } = useUtilsFunction();

  const userInfo = getUserSession();

  const { storeCustomizationSetting } = useGetSetting();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchText) {
      router.push(`/search?query=${searchText}`, null, { scroll: false });
      setSearchText("");
      handleLogEvent("search", `searched ${searchText}`);
    } else {
      router.push(`/ `, null, { scroll: false });
      setSearchText("");
    }
  };

  return (
    <>
      <CartDrawer />
      <div className="top-0 z-40">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 relative">
          <div className="flex  flex-col items-center py-1">
            {/* Top Section - Logo and Icons */}
            <div className="w-full grid grid-cols-3 items-center justify-between">
              {/* Logo Section - Left */}
              <div></div>
              <div className="w-24 sm:w-28 mx-auto flex items-center justify-center">
                <Image
                  width={60}
                  height={60}
                  className="w-full h-auto "
                  priority
                  src="/logo/gray-logo.png"
                  alt="logo"
                />
              </div>
              {/* <MobileFooter/> */}
              {/* Icons Section - Right */}
              <div className="flex items-center space-x-4 justify-end">
                <button
                  className="text-black text-2xl font-bold"
                  aria-label="Alert"
                >
                  <FaBell className="w-6 h-6 drop-shadow-xl" />
                </button>
                <button
                  aria-label="Total"
                  onClick={toggleCartDrawer}
                  className="relative text-black text-2xl font-bold"
                >
                  <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                    {totalItems}
                  </span>
                  <FaShoppingCart className="w-6 h-6 drop-shadow-xl" />
                </button>
                <button
                  className="text-black text-2xl font-bold"
                  aria-label="Login"
                >
                  {userInfo?.image ? (
                    <Link
                      href="/user/dashboard"
                      className="relative top-1 w-6 h-6"
                    >
                      <Image
                        width={29}
                        height={29}
                        src={userInfo?.image}
                        alt="user"
                        className="bg-white rounded-full"
                      />
                    </Link>
                  ) : userInfo?.name ? (
                    <Link
                      href="/user/dashboard"
                      className="leading-none font-bold font-serif block"
                    >
                      {userInfo?.name[0]}
                    </Link>
                  ) : (
                    <Link href="/auth/login">
                      <FaUser className="w-6 h-6 drop-shadow-xl" />
                    </Link>
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* Navigation Items - Below Logo */}
        </div>
        {/* Navigation Items */}
        <div className="hidden lg:flex items-center justify-center py-3 absolute z-[41] bg-transparent w-full space-x-6 hover:bg-white transition-colors duration-500 ease-in-out mx-auto">
          <Link
            href="/"
            className="relative text-black hover:text-gray-700 text-sm font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            {showingTranslateValue(storeCustomizationSetting?.navbar?.home) ||
              "Home"}
          </Link>
          {storeCustomizationSetting?.navbar?.about_menu_status && (
            <Link
              href="/about-us"
              className="relative text-black hover:text-gray-700 text-sm font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              {showingTranslateValue(
                storeCustomizationSetting?.navbar?.about_us
              )}
            </Link>
          )}
          {storeCustomizationSetting?.navbar?.categories_menu_status && (
            <Popover className="relative">
              <Popover.Button className="group inline-flex items-center text-black hover:text-black-200 text-sm font-medium focus:outline-none  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                <span>
                  {showingTranslateValue(
                    storeCustomizationSetting?.navbar?.categories
                  )}
                </span>
                <ChevronDownIcon
                  className="ml-1 h-3 w-3 group-hover:text-black-200"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs c-h-65vh bg-white">
                  <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll flex-grow scrollbar-hide w-full h-full">
                    <Category />
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          )}
          {storeCustomizationSetting?.navbar?.contact_menu_status && (
            <Link
              href="/contact-us"
              className="relative text-black hover:text-gray-700 text-sm font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full "
            >
              {showingTranslateValue(
                storeCustomizationSetting?.navbar?.contact_us
              )}
            </Link>
          )}
          {storeCustomizationSetting?.navbar?.privacy_policy_status && (
            <Link
              href="/privacy-policy"
              className="relative text-black hover:text-gray-700 text-sm font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              {showingTranslateValue(
                storeCustomizationSetting?.navbar?.privacy_policy
              )}
            </Link>
          )}
          {storeCustomizationSetting?.navbar?.term_and_condition_status && (
            <Link
              href="/terms-and-conditions"
              className="relative text-black hover:text-gray-700 text-sm font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              {showingTranslateValue(
                storeCustomizationSetting?.navbar?.term_and_condition
              )}
            </Link>
          )}
                    
        </div>
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
