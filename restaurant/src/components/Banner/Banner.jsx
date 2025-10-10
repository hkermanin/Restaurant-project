import { FaUserClock } from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";


export default function Banner() {
  return (
    <div className="p-5 mt-10 lg:p-15 place-items-center grid grid-cols-1 lg:grid-cols-2">
      <div data-aos="fade-right" className="flex justify-center items-center overflow-hidden transform -translate-y-10 w-4/4 sm:w-3/4">
        <img
        className="p-5 animate-spin [animation-duration:30s]"
        src="https://opium.feeja.ir/storage/products/fqJWXYMH67VxogRJv82onythGMGyp8hOufsiMjEx.png"
        alt=""
      />
      </div>

      <div data-aos="fade-left" className="text-center flex flex-col gap-6 p-5 lg:p-10">
        <h1 className="text-4xl font-bold text-yellow-600">چرا رستوران کرمانی</h1>

        <p dir="rtl" className=" text-justify text-gray-500 text-md">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>

        <div className="flex gap-4 text-7xl my-1 mx-auto">
          <FaUserClock className=" bg-blue-300 p-2 rounded-full"/>
          <IoFastFoodSharp className="bg-orange-300 p-2 rounded-full"/>
          <GiFoodTruck className="bg-green-300 p-2 rounded-full"/>

        </div>

        <button
          className="bg-gradient-to-l from-yellow-600 to-yellow-400 w-fit mx-auto hover:scale-105
            p-4 rounded-full cursor-pointer hover:from-yellow-700 hover:to-yellow-500 transition duration-300"
        >
          ثبت سفارش
        </button>
      </div>
    </div>
  );
}
