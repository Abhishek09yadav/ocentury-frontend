import useUtilsFunction from "@hooks/useUtilsFunction";

const Price = ({ product, price, card, currency, originalPrice }) => {
  // console.log("price", price, "originalPrice", originalPrice, "card", card);
  const { getNumberTwo } = useUtilsFunction();

  return (
    <div className="font-serif product-price font-bold">
      {product?.isCombination ? (
        <>
          {originalPrice > price && (
            <span className="relative inline-block mr-2 md:mr-4 text-[12px] lg:text-sm text-gray-400 font-medium">
              MRP {currency}{getNumberTwo(originalPrice)}
              <span className="absolute left-0 top-5 w-20 md:w-24 lg:w-full h-[1px] bg-gray-400 -translate-y-1/2 rotate-[-10deg] lg:rotate-[-15deg] origin-left pointer-events-none"></span>
            </span>
          )}
          <span
            className={
              card
                ? "inline-block text-lg font-semibold text-gray-800"
                : "inline-block text-2xl"
            }
          >
            {currency}
            {getNumberTwo(price)}
          </span>
        </>
      ) : (
        <>
          {originalPrice > price && (
            <span className="relative inline-block mr-1">
                <span className="relative inline-block mr-4 text-sm text-gray-400 font-medium">
                  MRP {currency}{getNumberTwo(originalPrice)}
                  <span className="absolute left-0 top-5 w-full h-[1px] bg-gray-400 -translate-y-1/2 rotate-[-15deg] origin-left pointer-events-none"></span>
                </span>
            </span>
          )}
          <span
            className={
              card
                ? "inline-block text-lg font-semibold text-gray-800"
                : "inline-block text-2xl"
            }
          >
            {currency}
            {getNumberTwo(product?.prices?.price)}
          </span>
        </>
      )}
    </div>
  );
};

export default Price;
