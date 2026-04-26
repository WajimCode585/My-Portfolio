export default function SectionHeader({ num, label, title, accent }) {
  return (
    <>
      <div className="sec-label">
        <span className="text-muted">{num}</span>
        {label}
      </div>
      <h2 className="font-head font-bold tracking-tight leading-none mb-3"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
        {title}{' '}
        {accent && <span className="text-neon">{accent}</span>}
      </h2>
      <div className="neon-divider" />
    </>
  )
}
