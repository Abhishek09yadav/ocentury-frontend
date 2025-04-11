"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { IoAdd, IoBagAddSharp, IoRemove } from "react-icons/io5";
import { useCart } from "react-use-cart";
import { useRouter } from "next/router";
import { FaWhatsapp, FaFacebook, FaShareAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

//internal import

import Price from "@components/common/Price";
import Stock from "@components/common/Stock";
import { notifyError } from "@utils/toast";
import useAddToCart from "@hooks/useAddToCart";
import useGetSetting from "@hooks/useGetSetting";
import Discount from "@components/common/Discount";
import useUtilsFunction from "@hooks/useUtilsFunction";
import ProductModal from "@components/modal/ProductModal";
import ImageWithFallback from "@components/common/ImageWithFallBack";
import { handleLogEvent } from "src/lib/analytics";

const ProductCard = ({ product, attributes }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isToolTipVisible, setIsToolTipVisible] = useState(false);
  const { items, addItem, updateItemQuantity, inCart } = useCart();
  const { handleIncreaseQuantity } = useAddToCart();
  const { globalSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  const router = useRouter();
  const currency = globalSetting?.default_currency || "$";

  // console.log('attributes in product cart',attributes)

  const toggleToolTip = () => {
    setIsToolTipVisible((prev) => !prev);
  };

  const handleAddItem = (p) => {
    if (p.stock < 1) return notifyError("Insufficient stock!");

    if (p?.variants?.length > 0) {
      setModalOpen(!modalOpen);
      return;
    }
    const { slug, variants, categories, description, ...updatedProduct } =
      product;
    const newItem = {
      ...updatedProduct,
      title: showingTranslateValue(p?.title),
      id: p._id,
      variant: p.prices,
      price: p.prices.price,
      originalPrice: product.prices?.originalPrice,
    };
    addItem(newItem);
  };

  const handleModalOpen = (event, id) => {
    setModalOpen(event);
  };

  return (
    <>
      {modalOpen && (
        <ProductModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          product={product}
          currency={currency}
          attributes={attributes}
        />
      )}

      <div className="md:w-[44%] lg:w-[22%] w-full group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative hover:shadow-2xl">
        <div className="w-full flex justify-between">
          <Stock product={product} stock={product.stock} card />
          <Discount product={product} />
        </div>
        <div
          onClick={() => {
            // handleModalOpen(!modalOpen, product._id);
            // handleLogEvent(
            //   "product",
            //   `opened ${showingTranslateValue(product?.title)} product modal`
            // );
            router.push(`/product/${product.slug}`);
          }}
          className="relative flex justify-center cursor-pointer pt-2 w-full h-80"
        >
          <div className="relative w-full h-full">
            {product.image[0] ? (
              <ImageWithFallback src={product.image[0]} alt="product" />
            ) : (
              <Image
                src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                fill
                style={{
                  objectFit: "contain",
                }}
                sizes="100%"
                alt="product"
                className="object-contain transition duration-700 ease-in-out transform group-hover:scale-105"
              />
            )}
          </div>
        </div>
        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
          <div className="relative mb-1 mt-4">
            <span className="text-gray-400 font-medium text-xs d-block mb-1">
              {product.unit}
            </span>
            <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
              <span className="line-clamp-2 font-bold">
                {showingTranslateValue(product?.title)}
              </span>
            </h2>
          </div>
          {/* //^ Price section */}
          <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
            <Price
              card
              product={product}
              currency={currency}
              price={
                product?.isCombination
                  ? product?.variants[0]?.price
                  : product?.prices?.price
              }
              originalPrice={
                product?.isCombination
                  ? product?.variants[0]?.originalPrice
                  : product?.prices?.originalPrice
              }
            />

            {inCart(product._id) ? (
              <div>
                {items.map(
                  (item) =>
                    item.id === product._id && (
                      <div
                        key={item.id}
                        className="h-9  w-auto flex flex-nowrap items-center justify-evenly py-1 px-2 bg-customPink text-white rounded"
                      >
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <span className="text-dark text-base">
                            <IoRemove />
                          </span>
                        </button>
                        <p className="text-sm text-dark px-1 font-serif font-semibold">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() =>
                            item?.variants?.length > 0
                              ? handleAddItem(item)
                              : handleIncreaseQuantity(item)
                          }
                        >
                          <span className="text-dark text-base">
                            <IoAdd />
                          </span>
                        </button>
                      </div>
                    )
                )}{" "}
              </div>
            ) : (
              <button
                onClick={() => handleAddItem(product)}
                aria-label="cart"
                className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-customPink hover:border-customPinkDark hover:bg-customPinkDark hover:text-white transition-all"
              >
                {" "}
                <span className="text-xl">
                  <IoBagAddSharp />
                </span>{" "}
              </button>
            )}
          </div>
          {/* share button */}
          <div
            className={`absolute transition-transform ease-in-out shadow-lg shadow-gray-400/35 bg-gray-100 p-1 rounded-3xl ${
              isToolTipVisible ? "flex -translate-y-20" : "hidden"
            }`}
          >
            <div className="tooltip-container flex items-center justify-center gap-1">
              <div className="w-12 h-12 flex items-center justify-center shadow-gray-200 rounded-full hover:bg-green-500 hover:text-gray-50">
                <WhatsappShareButton
                  url={`${process.env.NEXT_PUBLIC_STORE_DOMAIN}/product/${product.slug}`}
                  quote=""
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-gray-50 shadow-md shadow-gray-200 rounded-full hover:bg-sky-500 hover:text-gray-50">
                <FacebookShareButton
                  url={`${process.env.NEXT_PUBLIC_STORE_DOMAIN}/product/${product.slug}`}
                  quote=""
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </div>

              <div className="w-12 h-12 flex items-center justify-center  bg-gray-50 rounded-full shadow-md shadow-gray-200 hover:bg-gray-700 hover:text-gray-50">
                <TwitterShareButton
                  url={`${process.env.NEXT_PUBLIC_STORE_DOMAIN}/product/${product.slug}`}
                  quote=""
                >
                  <XIcon size={32} round />
                </TwitterShareButton>
              </div>
            </div>
            <div className="absolute left-0 w-full bg-transparent z-50 h-4 -bottom-4" />
            <div className="absolute -bottom-2 left-[45%] h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-100" />
          </div>
          <div
            className={`relative border-4 border-gray-50 bg-gradient-to-r from-customPink to-customPink p-2 rounded-full transition-all duration-300 ease-in-out shadow-gray-300/50 shadow-xl hover:cursor-pointer w-10 h-10 flex items-center justify-center ${
              isToolTipVisible
                ? "scale-110 -translate-y-1 from-violet-800 to-indigo-800"
                : ""
            }`}
            onClick={toggleToolTip}
          >
            <FaShareAlt
              className={`text-gray-100 dark:text-white transition-transform duration-300 ${
                isToolTipVisible ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(ProductCard), { ssr: false });
