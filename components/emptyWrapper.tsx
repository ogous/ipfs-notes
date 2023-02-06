export default function EmptyWrapper({ children }: { children: JSX.Element }) {
  return (
    <div className="flex flex-1 items-center justify-center">{children}</div>
  )
}
