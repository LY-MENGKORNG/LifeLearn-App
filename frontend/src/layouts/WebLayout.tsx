import { responsiveLayout } from "../assets/BaseStyle"
import WebFooter from "./website/WebFooter"
import WebHeader from "./website/WebHeader"

export default function WebLayout({ children }: any) {
    return (
        <div className="flex flex-col min-h-screen">
            <WebHeader />
            <main className={"py-5 main-pink flex-1" + responsiveLayout}>
                {children}
            </main>
            <WebFooter />
        </div>
    )
}

