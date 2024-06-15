
import { MdOutlinePets } from "react-icons/md";
import { PiDog } from "react-icons/pi";
const Hero = () => {
    return (
        <div className="min-h-screen max-w-5xl mx-auto font-abc">
            <div className="min-h-44  flex  w-full mt-20 ">
                <div className="w-[20%]  relative">
                    <h1 className="text-sm left-10 font-bold z-20 uppercase absolute top-14 w-[200px]">Weekly dog walking <br /> packages daytime <br />Monday - Friday</h1>
                    <div className="h-full w-20 top-0 bg-yellow-400 rounded-full z-10 absolute"></div>
                </div>
                <div className="flex flex-col items-center justify-center relative  w-[60%]">
                    <h1 className="text-6xl text-center font-bold">Take Better Care <br /> of Your Pets</h1>

                    <div className="flex gap-4 -bottom-10 absolute">
                        <button className="bg-black text-white rounded-full px-4 py-2">Our Lessons</button>
                        <button className=" border border-black text-black rounded-full px-4 py-2">Schedule a Call</button>
                    </div>
                </div>
                <div className="w-[20%] font-bold flex items-center justify-center flex-col ">
                    <h1 className="text-2xl">Our Experts</h1>
                    <div className="flex gap-2 items-center mt-2">
                        <div className="flex gap-1">
                            <div className="w-10 overflow-hidden h-10 border border-black rounded-full">
                                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-10 overflow-hidden h-10 border border-black rounded-full">
                                <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <h1>10+ More</h1>
                    </div>
                </div>
            </div>
            <div className="min-h-60   flex items-center justify-center gap-10  w-full mt-16 ">
                <div className="h-60 w-60 overflow-hidden rounded-r-full">
                    <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBldHN8ZW58MHx8MHx8fDA%3D"
                    className="w-full h-full object-cover"
                    alt="" />
                </div>
                <div className="h-60 w-60 overflow-hidden rounded-full">
                    <img src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D"
                    className="w-full h-full object-cover"
                    alt="" />
                </div>
                <div className="h-60 w-60 overflow-hidden rounded-t-full">
                    <img src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBldHN8ZW58MHx8MHx8fDA%3D"
                    className="w-full h-full object-cover"
                    alt="" />
                </div>
            </div>
            <div className="min-h-44 justify-between flex w-full mt-10 ">
                <div className="w-[30%] text-2xl px-4 py-10 font-bold">
                    Providing top-notch care and love for your pets, every day of the week.
                </div>
                <div className="w-[60%]  flex gap-10  font-bold">
                    <div className="w-[40%]">
                        <div className="flex items-center gap-4">
                            <MdOutlinePets size={30} className="text-white rounded-full bg-pink-600 p-2" />
                            <h1 className="text-xl my-4">Pet Walking</h1>
                        </div>
                        <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis hic quo placeat consectetur accusamus voluptatum corporis non incidunt id ea.</p>
                    </div>
                    <div className="w-[40%]">
                        <div className="flex items-center gap-4">
                            <PiDog size={30} className="text-white rounded-full bg-pink-600 p-2" />
                            <h1 className="text-xl my-4">Pet Field Trips</h1>
                        </div>
                        <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis hic quo placeat consectetur accusamus voluptatum corporis non incidunt id ea.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero