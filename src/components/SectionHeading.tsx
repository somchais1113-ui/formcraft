import Marker from './Marker'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  dark?: boolean
  center?: boolean
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  dark = false,
  center = false,
  className = '',
}: SectionHeadingProps) {
  const textColor = dark ? 'var(--text-on-dark)' : 'var(--text-primary)'
  const eyebrowColor = dark ? 'var(--color-orange-gold)' : 'var(--accent)'
  const align = center ? 'items-center text-center' : 'items-start'

  return (
    <div className={`flex flex-col gap-3 ${align} ${className}`}>
      {eyebrow && (
        <span
          className="eyebrow"
          style={{ color: eyebrowColor }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          fontSize: 'var(--fs-h2)',
          lineHeight: 'var(--lh-h2)',
          fontWeight: 'var(--fw-bold)',
          color: textColor,
          letterSpacing: 'var(--tracking-normal)',
        }}
      >
        {title}
      </h2>
      <Marker />
    </div>
  )
}
