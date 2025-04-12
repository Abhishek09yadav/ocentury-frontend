
const ClassicShirtCard = () => {

    const shirts = [
      {
        image: "shirts/linen_shirt.jpeg",
        // image: 'https://storage.googleapis.com/a1aa/image/_DBiIxtZhGY-_1WXwV3l9ksRaDoBo54CuXzs_1SU9Gg.jpg',
        alt: "Close-up of a light blue linen shirt with wooden buttons and a label that reads 'Punekar Cotton'",
        title: "Linen Shirts",
      },
      {
        image: "shirts/formal_dark_cotton_shirt.jpeg",
        // image: 'https://www.zodiaconline.com/media/catalog/product/cache/253fb0759a515d30bcbc159f082108b5/z/o/zodiac_shirts_filafil_dk11_cf_z1_100_cotton_fil_a_fil_008_fssc_nbd_anthra_21_01.jpg',
        alt: "White formal cotton shirt neatly folded on a table",
        title: "Formal Dark Cotton",
      },
      {
        image: "shirts/formal_super_fine_cotton.jpeg",
        // image: 'https://www.zodiaconline.com/media/catalog/product/z/o/zodiac_shirts_fine_twl_d12_cf_z1_100_cotton_pln_052_fssc_cac_purple_65_b_01.jpg?resize.width=500',
        alt: "A patterned casual shirt hanging on a wooden hanger",
        title: "Formal Super Fine Cotton",
      },
    ];
  
    return (
      <div className="px-6 py-6">
        <div className="flex flex-wrap justify-center gap-4">
          {shirts.map((shirt, index) => (
            <div
              key={index}
              className="relative w-full sm:w-[22rem] md:w-[26rem] lg:w-[30rem] group overflow-hidden shadow-md"
            >
              <img
                src={shirt.image}
                alt={shirt.alt}
                className="w-full h-[30rem] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-20" />
              <div className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl font-[Roboto] px-2 py-1 rounded group">
                <span className="relative font-light after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                  {shirt.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ClassicShirtCard;
  