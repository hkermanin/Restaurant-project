import Service from "./Service"

export default function Services() {

    

    const services = [
        {id:1, img:'https://www.bojanglesrdu.com/wp-content/uploads/2016/07/img-cajun-filet-club-sandwich-new-bun-1.png', title:'چیز برگر', des:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'},
        {id:2, img:'https://rasoolmandi.ir/wp-content/uploads/2024/11/%D9%86%D8%B5%D9%81-%D9%85%D8%B1%D8%BA.png', title:'مرغ با برنج', des:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'},
        {id:3, img:'https://chelohajali.com/wp-content/uploads/2023/11/kabab.png', title:'برنچ و کباب', des:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'},
    ]


  return (
    <div className="p-10 lg:p-20 mt-5 flex gap-16 flex-col items-center justify-center">
        <div><h1 className="text-4xl">خدمات ما</h1></div>

        <div data-aos="zoom-in" className="grid gap-5 lg:gap-10 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service)=>{
                return <Service service={service}/>
            })}
        </div>
    </div>
  )
}
