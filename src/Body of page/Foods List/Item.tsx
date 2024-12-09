import { CounterFoodBtn } from "./CounterFoodBtn";



export function Item({title, caption, cost, img}: {title:string, caption:string, cost:string, img:string}) {
    const flexFoods =
    <div className="mx-auto">
        <div className="bg-white w-[22rem] h-[18rem] rounded-xl py-4">
            <div className="w-[20rem] h-[9rem] mx-auto">
                <img className="h-full w-full" src={img} alt="" />
                <p className="font-medium text-lg mt-2">{title}</p>
                <p className="font-normal text-sm mt-2 text-gray-400">{caption}</p>
            </div>
            <div className="flex justify-start mr-4 gap-40">
                <div className="mt-[5rem] text-orange-500 text-sm font-medium">{cost} تومان</div>
                <div className="mt-[5rem]">
                    <CounterFoodBtn />
                </div>
            </div>
        </div>


    </div>
    return flexFoods;
}