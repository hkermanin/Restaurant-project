import { useEffect, useState } from "react";

export default function Hero() {
  const imgList = [
    {
      id: 1,
      img: "https://static.vecteezy.com/system/resources/thumbnails/045/383/391/small_2x/a-cheesy-delicious-pizza-with-tasty-pepperoni-on-a-transparent-background-png.png",
    },
    {
      id: 2,
      img: "https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-authentic-italian-pizza-with-cheese-and-fresh-vegetable-toppings-png-image_14714611.png",
    },
    {
      id: 3,
      img: "https://static.vecteezy.com/system/resources/thumbnails/051/038/355/small_2x/pizza-slice-italian-template-isolated-on-transparent-background-png.png",
    },
  ];

  const [imgActive, setImagActive] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setImagActive((preImg) => {
        if (preImg == 2) {
          return 0;
        } else {
          return preImg+1;
        }
      });
    }, 5000);

    return () => {
      clearInterval(interval1);
    };
  }, []);

  return (
    <div
      className="min-h-[645px] p-2  py-8 sm:p-6 sm:min-h-[650px] bgHero
        flex justify-center items-center duration-200 "
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="text-center flex flex-col items-center justify-center gap-4">
          <div className="text-6xl leading-tight">
            <span>به کرمانی </span>
            <span className="text-yellow-600">خوش آمدید</span>
          </div>
          <p className="text-gray-700">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
          <button className="hover:bg-yellow-500  hover:shadow imgAni text-lg cursor-pointer p-4 py-2 text-gray-50 rounded-full bg-yellow-400 w-fit">
            ثبت سفارش
          </button>
        </div>

        <div className="flex gap-4 sm:gap-7 flex-col justify-center items-center">
          <img
            className="max-h-[220px] lg:min-h-[350px] duration-200 "
            src={imgList[imgActive].img}
            alt=""
          />
          <div className="flex">
            <img
              onClick={() => {
                setImagActive(0);
              }}
              className="w-24 cursor-pointer imgAni"
              src={imgList[0].img}
              alt=""
            />
            <img
              onClick={() => {
                setImagActive(1);
              }}
              className="w-24 cursor-pointer imgAni"
              src={imgList[1].img}
              alt=""
            />
            <img
              onClick={() => {
                setImagActive(2);
              }}
              className="w-24 cursor-pointer imgAni"
              src={imgList[2].img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
