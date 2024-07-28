import { responsiveLayout } from "../../assets/BaseStyle";
import AppLogo from "../../components/AppLogo";

export default function WebFooter() {
  return (
    <div className={"sticky left-0 top-0 z-50 w-full py-4  main-dark text-white" + responsiveLayout}>
      <AppLogo />
    </div>
  )
}
