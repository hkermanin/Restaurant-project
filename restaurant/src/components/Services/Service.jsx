
export default function Service({service}) {
  return (
    <div dir="rtl" className="p-2 hover:scale-105 duration-300 group rounded-md cursor-pointer hover:bg-yellow-400 mt-14 mb-3 shadow-md text-center w-[330px] sm:w-[270px] md:w-[300px]">
        <img className="h-[200px] mx-auto transform -translate-y-20" src={service.img} alt="" />
        <h2 className="m-3 group-hover:text-white -mt-15 text-3xl">{service.title}</h2>
        <p className="my-2 line-clamp-2 text-sm text-gray-500">{service.des}</p>
    </div>
  )
}
