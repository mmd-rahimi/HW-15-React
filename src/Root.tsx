import { Header } from "./Header of page/Header";
import { Footer } from "./Footer of page/Footer";
import { Item } from "./Body of page/Foods List/Item";
import { Cart } from "./Body of page/Foods List/Cart/Cart";

export function Root () {
    const root = 
    <div className="bg-slate-200">
            <Header />
            <div className="grid grid-cols-3 gap-6 mt-5 w-[58%] mx-auto">
            <Item title="سیبزمینی ویژه" caption="مثل خودت خوردنی" cost="19000" img="./public/sib vizhe.jpg"/>
            <Item title="سیبزمینی سرخ شده" caption="مثل بابات که بزرگت کرد خفننن" cost="11000" img="./public/sib.jpg"/>
            <Item title="سیبزمینی تنوری" caption="داغغغغ" cost="15000" img="./public/sib tanori.jpg"/>
            <Item title="چیز برگر" caption="یه چیز برگر مردددد" cost="22500" img="./public/chiz burger.jpg"/>
            <Item title="برگر" caption="همش گوشته" cost="20000" img="./public/burger.jpg"/>
            <Item title=" رویال برگر" caption="بی رودروایسی منم همونی که میخواستی" cost="26000" img="./public/royal burger.jpg"/>
            <Item title="هات داگ " caption="بزرگه" cost="19000" img="./public/hot-dog.jpg"/>
            <Item title="بندری" caption="سوسیسه" cost="19000" img="./public/Sosis-Bandari.jpg"/>
            <Item title="فلافل" caption="قراره دلدرد بگیری" cost="11000" img="./public/felaf.jpg"/>
            </div>
            <Cart />
            <Footer />
    </div>
    return root;
}