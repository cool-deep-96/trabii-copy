
import infinityLoop from '../../assets/backed_by/infinity_loop.png'

const Unfold = () => {
    return (
        <div className="w-full bg-black flex justify-center">
            <div className="max-w-[355px] lg:max-w-screen-xl w-full  px-5 pt-10 lg:px-24 lg:py-40 flex justify-between items-center">
                <div className="flex flex-col gap-10 lg:w-[44%] ">
                    <div className="font-bold  lg:text-5xl text-white">
                        <p className='leading-tight  text-[2.10rem] lg:text-5xl'>
                            Anyone Can Host with <span className="text-yellow-400">TraBii</span>
                        </p>
                        <p className="text-pink-900 leading-tight  text-[2.10rem] lg:text-5xl">Where memories unfold, joy sparkles</p>
                    </div>
                    <div className="lg:hidden flex px-2 my-10">
                        <img src={infinityLoop} alt="infinty_loop.png" className="w-full h-auto" />
                    </div>
                    <p className="font-medium text-white text-lg">
                        From casual meetups to exciting adventures,<br className="hidden lg:flex"/>create and manage any
                        event with ease.
                    </p>

                    <button className="w-fit text-black font-bold py-3 px-10 rounded-full bg-white hover:bg-yellow-400 transition-all duration=300 ease-in-out hover:cursor-pointer">
                        Create it
                    </button>
                </div>
                <div className="w-[45%] hidden lg:flex">
                    <img src={infinityLoop} alt="infinty_loop.png" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Unfold;
