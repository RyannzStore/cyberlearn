import { notFound } from 'next/navigation';
import ModuleView from '@/components/ModuleView';
import { getModuleBySlug, modules } from '@/data/modules';

// Semua 36 halaman modul dibuat saat build (kompatibel Vercel & static export).
export const dynamicParams = false;

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const m = getModuleBySlug(slug);
  if (!m) return {};
  return { title: m.title.en, description: m.description.en };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const m = getModuleBySlug(slug);
  if (!m) notFound();
  return <ModuleView module={m} />;
}
