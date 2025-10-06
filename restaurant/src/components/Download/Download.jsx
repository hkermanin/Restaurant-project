export default function Download(){
    return(
        <div className="bg-gray-100">
            <div className="max-w-[90%] md:max-w-[80%] gap-5 grid grid-cols-1 md:grid-cols-2 p-10 mx-auto md:mr-20 ">
                <div className="flex flex-col items-center justify-center gap-5">
                    <span className="text-4xl sm:text-5xl text-gray-500">اپلیکشن کرمانی</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <img className="cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" alt="" />
                    <img className="cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="" />
                    </div>
                </div>

                <div>
                    <img className="mix-blend-multiply" src="https://files.virgool.io/upload/users/592208/posts/ecacqic1nxuh/cgaua4udhd9g.gif?width=1024" alt="" />

                </div>
            </div>
        </div>
    )
}