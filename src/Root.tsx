import { Header } from "./Header of page/Header";
import { Footer } from "./Footer of page/Footer";
import { Row1 } from "./Body of page/Foods List/Row1";

export function Root () {
    const root = 
    <div className="bg-slate-200">
            <Header />
            <Row1 />
            <Footer />
    </div>
    return root;
}