export default function ShirtImages() {
  return (
    <div className="relative w-full max-w-3xl mx-auto py-12 px-4">
      {/* Main Image Container */}
      <div className="relative h-[600px] w-full">
        {/* Image 1 - Top Mid Left */}
        <div className="absolute top-10 left-10 w-56 h-72 rounded-xl overflow-hidden shadow-lg z-20 rotate-[-3deg]">
          <img
            src="/shirts/shirt1.jpeg"
            alt="Black White Printed Shirt"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 - Slightly Lower Right */}
        <div className="absolute top-36 right-24 w-64 h-80 rounded-xl overflow-hidden shadow-2xl z-30 rotate-[2deg]">
          <img
            src="/shirts/shirt2.jpg"
            alt="Black and Maroon Shirts"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 3 - Top Far Right */}
        <div className="absolute top-0 right-0 w-52 h-68 rounded-xl overflow-hidden shadow-md z-10 rotate-[5deg]">
          <img
            src="/shirts/shirt3.jpg"
            alt="White Shirt"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 4 - Bottom Mid Left */}
        <div className="absolute bottom-14 left-24 w-60 h-72 rounded-xl overflow-hidden shadow-xl z-20 rotate-[-4deg]">
          <img
            src="/shirts/shirt4.jpeg"
            alt="Maroon Shirt Closeup"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
