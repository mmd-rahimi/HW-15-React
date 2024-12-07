export function Row1() {
    const flexFoods =
    <div className="flex flex-row gap-5 mt-5 justify-center">
        <div className="bg-white w-[22rem] h-[18rem] rounded-xl">
            <div className="w-[20rem] h-[9rem] mx-auto mt-4">
                <img className="h-full w-full" src="./public/burger.jpg" alt="" />
                <p className="font-medium text-lg mt-2">چیز برگر مرددد</p>
                <p className="font-normal text-sm mt-2 text-gray-400">یه چیز برگر خفن و مردونه</p>
            </div>
            <div className="flex justify-start mr-4 gap-40">
                <div className="mt-[5rem] text-orange-500 text-sm font-medium">22,500 تومان</div>
                <div className="mt-[5rem]">2</div>
            </div>
        </div>


        {/* <div className="bg-black">2</div>
        <div className="bg-black">3</div> */}

    </div>
    return flexFoods;
}