import { responsiveLayout } from "../assets/BaseStyle";

export default function SystemLayout({ children }: any) {
  return (
    <div>
      <main className={responsiveLayout} >
        {children}
      </main>
    </div>
  )
}
