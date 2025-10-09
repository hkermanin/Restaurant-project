import { GrRestaurant } from "react-icons/gr";
import { IoIosSend } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="bg-gray-200">
        <div className="p-5 flex flex-col justify-center items-center">
            <div className="grid  grid-cols-1 gap-7 md:gap-0 md:grid-cols-3">
                <div className="grid text-lg md:col-span-2 gap-3 md:gap-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <ul className="text-center">
                        <li className="text-xl mb-2">لینکهای مفید</li>
                        <li>خانه</li>
                        <li>درباره</li>
                        <li>خدمات</li>
                        <li>ورود</li>
                    </ul>

                    <ul className="text-center">
                        <li className="text-xl mb-2">لینکهای مفید</li>
                        <li>خانه</li>
                        <li>درباره</li>
                        <li>خدمات</li>
                        <li>ورود</li>
                    </ul>

                    <ul className="text-center">
                        <li className="text-xl mb-2">لینکهای مفید</li>
                        <li>خانه</li>
                        <li>درباره</li>
                        <li>خدمات</li>
                        <li>ورود</li>
                    </ul>
                </div>

                <div className="text-xl text-center sm:text-left items-center sm:items-start md:col-span-1 flex gap-2 flex-col">
                    <div className="flex">
                        <GrRestaurant/>
                        <span>کرمانی</span>
                    </div>
                    <p className="text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                    <div className="flex gap-2"><IoIosSend /> <span>تهران، ستارخان</span></div>
                    <div className="flex gap-2"><FaMobileAlt /> <span>09100000000</span></div>
                    <div className="flex gap-2"><FaInstagram /><FaFacebook /><FaLinkedin /></div>
                </div>
            </div>

            <div class="h-px m-15 mb-5 w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>

            <div className=" mb-5">
                <span>Kermani </span>
                <span>ساخته شده توسط </span>
            </div>
        </div>
    </div>
  )
}
