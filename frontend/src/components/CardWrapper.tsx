

export default function CardWrapper({ children }: any) {
  return (
    <div className={"grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3 "}  >
      {children}
    </div>
  )
}
