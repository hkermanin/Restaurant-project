import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from './Slide';
import { PrevArrow ,NextArrow} from './CustomArrows';

export default function SliderApp() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay:true,
    prevArrow:<PrevArrow/>,
    nextArrow:<NextArrow/>,

  };


  const comments = [
    {name:'حسین کرمانی', img:'https://cdn-icons-png.flaticon.com/256/4042/4042356.png', com:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'},
    {name:'علی احمدی', img:'https://cdn-icons-png.flaticon.com/256/4042/4042356.png', com:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'},
    {name:'جمال رضایی', img:'https://cdn-icons-png.flaticon.com/256/4042/4042356.png', com:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'},
    {name:'رضا محمدی', img:'https://cdn-icons-png.flaticon.com/256/4042/4042356.png', com:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'},
  ]

  return (
    <div className='  flex justify-center items-center'>
      <div className='w-11/12 lg:w-3/4 xl:w-1/2 my-25 text-center'>
        <Slider className='h-fit bg-bottom-left bg-cover bg-no-repeat bg-[url(https://files.123freevectors.com/wp-content/original/148467-abstract-glowing-orange-and-yellow-wave-background-vector-graphic.jpg)]' {...settings}>
          {comments.map((comment)=>{
            return <Slide comment={comment}/>
          })}
        </Slider>
      </div>
    </div>
  )
}
