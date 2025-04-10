'use client';

import { useEffect, useState } from 'react';

const coupons = [
  { code: 'SAVE50', discount: 50, minimumAmount: 1000 },
  { code: 'FIRST20', discount: 20, minimumAmount: 500 },
  { code: 'WELCOME30', discount: 30, minimumAmount: 700 },
  { code: 'FREESHIP', discount: 0, minimumAmount: 500 },
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const announcements = coupons.map((c) =>
    c.discount > 0
      ? `${c.code} ${c.discount}% OFF on purchase of ₹${c.minimumAmount} & Above`
      : `${c.code} Free Shipping on orders above ₹${c.minimumAmount}`
  );

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
