import { pageLayout, responsiveLayout } from "../assets/BaseStyle"
import WebFooter from "./website/WebFooter"
import WebHeader from "./website/WebHeader"

export default function WebLayout({ children }: any) {
    return (
        <div className={pageLayout}>
            <WebHeader />
            <main className={ responsiveLayout }>
                {children}
            </main>
            <WebFooter />
        </div>
    )
}

