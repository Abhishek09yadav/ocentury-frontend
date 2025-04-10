'use client';

import React, { useState,useEffect } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { CopyToClipboard } from "react-copy-to-clipboard";

//internal import
import CouponServices from "@services/CouponServices";
import OfferTimer from "@components/coupon/OfferTimer";
import useUtilsFunction from "@hooks/useUtilsFunction";
import CMSkeletonTwo from "@components/preloader/CMSkeletonTwo";

const coupons = [
  { code: 'SAVE50', discount: 50, minimumAmount: 1000 },
  { code: 'FIRST20', discount: 20, minimumAmount: 500 },
  { code: 'WELCOME30', discount: 30, minimumAmount: 700 },
  { code: 'FREESHIP', discount: 0, minimumAmount: 500 },
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const announcements = coupons.map((c) =>
  //   c.discount > 0
  //     ? `${c.code} ${c.discount}% OFF on purchase of ₹${c.minimumAmount} & Above`
  //     : `${c.code} Free Shipping on orders above ₹${c.minimumAmount}`
  // );
  const [copiedCode, setCopiedCode] = useState("");
  const [copied, setCopied] = useState(false);

  const { data, error, isLoading } = useQuery({
    queryKey: ["coupon"],
    queryFn: async () => await CouponServices.getShowingCoupons(),
    // staleTime: 5 * 60 * 1000, //default cache for 5 minute, if you want to without cache then comment this and gcTime lines
    // gcTime: 5 * 60 * 1000,
  });

  // console.log("coupon  data", data);
const announcements =
  data?.map((coupon) => {
    const code = coupon.couponCode;
    const discount = coupon.discountType.value;
    const discountType = coupon.discountType.type;
    const minAmount = coupon.minimumAmount;

    if (discountType === "percentage" && discount > 0) {
      return `${code} ${discount}% OFF on purchase of ₹${minAmount} & Above`;
    } else if (discountType === "fixed" && discount > 0) {
      return `${code} ₹${discount} OFF on purchase of ₹${minAmount} & Above`;
    } else {
      return `${code} Free Shipping on orders above ₹${minAmount}`;
    }
  }) || [];

  const handleCopied = (code) => {
    setCopiedCode(code);
    setCopied(true);
  };

  console.log("data in announcementbar", data);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === announcements.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <div className="w-full bg-blue-900 text-white h-12 flex items-center overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${announcements.length * 100}%`,
        }}
      >
        {announcements.map((msg, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center flex-none w-full h-12 text-center font-medium text-base"
          >
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}
