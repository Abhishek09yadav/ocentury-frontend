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

const Navbar = () => {
  const { t, lang } = useTranslation("common");
  const [searchText, setSearchText] = useState("");
  const { toggleCartDrawer } = useContext(SidebarContext);
  const { totalItems } = useCart();
  const router = useRouter();
  const { showingTranslateValue } = useUtilsFunction();

  const userInfo = getUserSession();

  const { storeCustomizationSetting } = useGetSetting();

  // console.log("storeCustomizationSetting", storeCustomizationSetting);

  // console.log("t", t, "lang::::", lang);

  const handleSubmit = (e) => {
    e.preventDefault();

    // return;
    if (searchText) {
      router.push(`/search?query=${searchText}`, null, { scroll: false });
      setSearchText("");
      handleLogEvent("search", `searched ${searchText}`);
    } else {
      router.push(`/ `, null, { scroll: false });
      setSearchText("");
    }
  };

  // console.log(
  //   "storeCustomizationSetting?.navbar?.header_logo",
  //   storeCustomizationSetting?.navbar?.logo
  // );

  return (
    <>
      <CartDrawer />
      <div className="bg-customPink sticky top-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="top-bar h-14 lg:h-18 flex items-center justify-between py-1 mx-auto">
            <Link
              href="/"
              className="mx-auto lg:mx-0 flex justify-center lg:justify-start w-full lg:w-auto"
            >
<div className="w-18 sm:w-20">
  <Image
    width={80}
    height={80}
    className="w-full h-auto"
    priority
    src="/logo/logo.png"
    alt="logo"
  />
</div>

            </Link>

            {/* Navigation Items */}
            <div className="hidden lg:flex items-center space-x-6 ml-6">
              {storeCustomizationSetting?.navbar?.categories_menu_status && (
                <Popover className="relative">
                  <Popover.Button className="group inline-flex items-center text-white hover:text-gray-200 text-sm font-medium focus:outline-none">
                    <span>
                      {showingTranslateValue(storeCustomizationSetting?.navbar?.categories)}
                    </span>
                    <ChevronDownIcon
                      className="ml-1 h-3 w-3 group-hover:text-gray-200"
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
              {storeCustomizationSetting?.navbar?.about_menu_status && (
                <Link
                  href="/about-us"
                  className="text-white hover:text-gray-200 text-sm font-medium"
                >
                  {showingTranslateValue(storeCustomizationSetting?.navbar?.about_us)}
                </Link>
              )}
              {storeCustomizationSetting?.navbar?.contact_menu_status && (
                <Link
                  href="/contact-us"
                  className="text-white hover:text-gray-200 text-sm font-medium"
                >
                  {showingTranslateValue(storeCustomizationSetting?.navbar?.contact_us)}
                </Link>
              )}
              {storeCustomizationSetting?.navbar?.privacy_policy_status && (
                <Link
                  href="/privacy-policy"
                  className="text-white hover:text-gray-200 text-sm font-medium"
                >
                  {showingTranslateValue(storeCustomizationSetting?.navbar?.privacy_policy)}
                </Link>
              )}
              {storeCustomizationSetting?.navbar?.term_and_condition_status && (
                <Link
                  href="/terms-and-conditions"
                  className="text-white hover:text-gray-200 text-sm font-medium"
                >
                  {showingTranslateValue(storeCustomizationSetting?.navbar?.term_and_condition)}
                </Link>
              )}
            </div>

            <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                className="pr-5 text-white text-2xl font-bold"
                aria-label="Alert"
              >
                <FaBell className="w-6 h-6 drop-shadow-xl" />
              </button>
              <button
                aria-label="Total"
                onClick={toggleCartDrawer}
                className="relative px-5 text-white text-2xl font-bold"
              >
                <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {totalItems}
                </span>
                <FaShoppingCart className="w-6 h-6 drop-shadow-xl" />
              </button>
              {/* Profile dropdown */}

              <button
                className="pl-5 text-white text-2xl font-bold"
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

        {/* second header */}
        {/* <NavbarPromo /> */}
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
