export default function Marker({
  className = '',
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <span
      className={`marker ${className}`}
      style={style}
      role="presentation"
      aria-hidden="true"
    />
  )
}
