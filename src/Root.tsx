import { Header } from "./Header of page/Header";
import { Footer } from "./Footer of page/Footer";
import { Item } from "./Body of page/Foods List/Item";
import { Cart } from "./Body of page/Foods List/Cart/Cart";

export function Root () {
    const root = 
    <div className="bg-slate-200">
            <Header />
            <div className="grid grid-cols-3 gap-6 mt-5 w-[58%] mx-auto">
            <Item title="برگر" caption="برگر مردددد" cost="22,500" img="./public/burger.jpg"/>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            </div>
            <Cart />
            <Footer />
    </div>
    return root;
}