import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";
import Link from "next/link";

const PAGE_SIZE = 12; // items per page

// 🟢 Revalidate every 7 day
export const revalidate = 604800


export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query, page } = await searchParams;
  const currentPage = page ? parseInt(page, 10) : 1;

  const params = {
    search: query || null,
    offset: (currentPage - 1) * PAGE_SIZE,
    limit: currentPage * PAGE_SIZE,
  };

  const session = await auth();
  console.log(session?.id);

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Newsino Energy Company</h1>
        <p className="text-lg font-medium mt-2 text-center max-w-3xl mx-auto">
          We provide high-tech tools, equipment and spare parts to companies in
          the power generation, oil, petrochemical, Marine Industries and other
          fields.
        </p>
        <p className="sub-heading !max-w-3xl">
          Submit Brands, RFQs, Or Items Number Directly
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Items"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>

        {/* ✅ Pagination Controls */}
        <div className="flex justify-center mt-10 gap-4">
          {currentPage > 1 && (
            <Link
              href={`/?query=${query || ""}&page=${currentPage - 1}`}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Previous
            </Link>
          )}
          {posts?.length === PAGE_SIZE && (
            <Link
              href={`/?query=${query || ""}&page=${currentPage + 1}`}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Next
            </Link>
          )}
        </div>
      </section>

      <SanityLive />
    </>
  );
}