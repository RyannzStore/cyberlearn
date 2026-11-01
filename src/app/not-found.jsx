import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="panel empty" style={{ maxWidth: 520, margin: '60px auto' }}>
      <span className="kicker">404</span>
      <h1 style={{ fontSize: 28, margin: '10px 0' }}>Halaman tidak ditemukan / Page not found</h1>
      <p style={{ marginBottom: 18 }}>Halaman yang kamu cari tidak ada. / The page you are looking for does not exist.</p>
      <Link href="/" className="btn btn-primary">
        Dashboard
      </Link>
    </div>
  );
}
