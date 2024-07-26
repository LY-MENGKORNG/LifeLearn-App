import { responsiveLayout } from "../../assets/BaseStyle";

export default function WebHeader() {
  return (
    <div className={"sticky left-0 top-0 z-50 w-full py-4 border-b backdrop-blur-lg" + responsiveLayout}>
      Header
    </div>
  )
}
