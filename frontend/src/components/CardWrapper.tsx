
type propType = {
  className: string
}
export default function CardWrapper({ children }: any, { className }: string) {
  return (
    <div className={"grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3 " + { className }}>
      {children}
    </div>
  )
}
