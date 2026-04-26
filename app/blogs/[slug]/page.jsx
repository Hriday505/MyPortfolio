import { items } from "@/data/blogs";
import { notFound } from "next/navigation";

// Dynamic blog detail page that resolves the article by its slug.
export default async function BlogDetails({ params }) {
  const { slug } = await params;

  const blog = items.find((item) => item.slug === slug);

  // Show Next.js 404 page when the slug does not match any known article.
  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white px-6 py-20 text-black">
      <div className="mx-auto max-w-4xl">
        {/* Hero image for the selected article. */}
        <img
          src={blog.image}
          alt={blog.title}
          className="mb-8 h-[320px] w-full rounded-2xl object-cover"
        />

        {/* Category label helps group the article by topic. */}
        <p className="mb-3 text-[16px] text-gray-500">{blog.category}</p>

        {/* Main article title. */}
        <h1 className="mb-6 text-4xl font-bold">{blog.title}</h1>

        {/* Short summary shown before the full article content. */}
        <p className="mb-8 text-[26px] text-gray-600">{blog.description}</p>

        {/* Blog body content from the local data source. */}
        <div className="whitespace-pre-line text-[16px] leading-8">
          {blog.content}
        </div>
      </div>
    </div>
  );
}
