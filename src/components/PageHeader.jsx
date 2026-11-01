export default function PageHeader({ kicker, title, description, children }) {
  return (
    <div className="page-head fade-in">
      {kicker ? <span className="kicker">{kicker}</span> : null}
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
      {children}
    </div>
  );
}
