import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x section text-center">
      <h1 className="text-4xl">Page not found</h1>
      <p className="mt-3 text-charcoal/75">That page does not exist. Try the products or recipes instead.</p>
      <div className="mt-6 flex justify-center gap-3"><Link href="/products" className="btn-primary">Products</Link><Link href="/" className="btn-outline">Home</Link></div>
    </div>
  );
}
