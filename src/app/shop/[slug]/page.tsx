import { products } from '@/data/products'
import { notFound } from 'next/navigation'
import ProductDetail from '@/components/product/ProductDetail'

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  return {
    title: product ? `${product.name} | FreshCart` : "Product | FreshCart",
    description: product?.description ?? "Fresh grocery product.",
  };
}

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
