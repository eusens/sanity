import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import {
  PLAYLIST_BY_SLUG_QUERY,
  RELATED_STARTUPS_QUERY,
  STARTUP_BY_ID_QUERY,
} from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Truck, Award, Wallet, Globe } from "lucide-react";

import markdownit from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

const md = markdownit();

export const experimental_ppr = true;

// 🟢 Revalidate every 7 day
export const revalidate = 604800


const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  // const [post, { select: editorPosts }] = await Promise.all([
  //   client.fetch(STARTUP_BY_ID_QUERY, { id }),
  //   client.fetch(PLAYLIST_BY_SLUG_QUERY, {
  //     slug: "editor-picks-new",
  //   }),
  // ]);
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();

  // Fetch related items
const relatedPosts = await client.fetch(RELATED_STARTUPS_QUERY, { 
  category: post.category,
  id: post._id,
});
  

  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
      <section className="relative min-h-[300px] flex flex-col items-center justify-center text-center text-white px-6 py-12"
  style={{
    backgroundImage: "url('/banner-bg.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
      {/* Tagline */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 text-xl font-semibold text-white-800">
          <Globe className="w-7 h-7 text-600" />
          <span>Distributor of Industrial Automation Parts</span>
        </div>
        <p className="mt-2 text-orange-600 text-lg">
          One Stop Sourcing and Supply
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* Fast Delivery */}
        <div className="flex flex-col items-center">
          <Truck className="w-10 h-10 text-600 mb-3" />
          <p className="font-semibold text-white-800">
            Fast delivery, reliable combined shipping
          </p>
        </div>

        {/* Experience */}
        <div className="flex flex-col items-center">
          <Award className="w-10 h-10 text-600 mb-3" />
          <p className="font-semibold text-800">
            20 years of experience <br /> Leading industry innovation
          </p>
        </div>

        {/* Payment */}
        <div className="flex flex-col items-center">
          <Wallet className="w-10 h-10 text-600 mb-3" />
          <p className="font-semibold text-800">
            Flexible Payment <br /> Pay in 20+ local currencies
          </p>
        </div>

        {/* Worldwide Shipping */}
        <div className="flex flex-col items-center">
          <Globe className="w-10 h-10 text-600 mb-3" />
          <p className="font-semibold text-800">
            Ship worldwide via DHL, FedEx, UPS & more
          </p>
        </div>
      </div>
    </section>
      
      <section className="section_container">
  {/* Two-column layout for desktop */}
  <div className="flex flex-col md:flex-row gap-8 items-start">
    {/* Left: Image */}
    <div className="w-full md:w-1/2">
      <Image
        src={post.image}
        alt={`${post.title} - ${post.category}`}
        width={100}
        height={50}
        className="w-full h-auto rounded-xl object-cover"
      />
    </div>

    {/* Right: Post info + Author + Category */}
<div className="w-full md:w-1/2 space-y-5">

{/* Post meta info */}
<p className="tag">{formatDate(post?._createdAt)}</p>
<h6 className="category-tag">Item Number:{post.title}</h6>
<p className="category-tag">Category: {post.category}</p>

{post?.price !== undefined && post?.price !== null && (
  <p className="text-lg font-semibold text-black-700">
    Price: ${post.price.toFixed(2)} USD 
    {" / "}
    €{(post.price * 0.91).toFixed(2)} EUR
  </p>
)}

<p >{post.description}</p>

{/* Author info */}
<div className="flex-between gap-5">
  <Link
    href={`/user/${post.author?._id}`}
    className="flex gap-2 items-center mb-3"
  >
    <Image
      src={post.author.image}
      alt="avatar"
      width={64}
      height={64}
      className="rounded-full drop-shadow-lg"
    />
    <div>
      <p className="text-20-medium">{post.author.name}</p>
      <p className="text-16-medium !text-black-300">
        @{post.author.username}
      </p>
    </div>
  </Link>
</div>
</div>
</div>


          {/* Pitch Details - Full width */}
  <div className="mt-10">
    <h3 className="text-30-bold">Details</h3>
    {parsedContent ? (
      <article
        className="prose max-w-4xl font-work-sans break-all"
        dangerouslySetInnerHTML={{ __html: parsedContent }}
      />
    ) : (
      <p className="no-result">No details provided</p>
    )}
  </div>

        {/* <hr className="divider" />

        {editorPosts?.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <p className="text-30-semibold">Editor Picks</p>

            <ul className="mt-7 card_grid-sm">
              {editorPosts.map((post: StartupTypeCard, i: number) => (
                <StartupCard key={i} post={post} />
              ))}
            </ul>
          </div>
        )} */}
        {/* # temporarily comment code replace above */}
        {/* {Array.isArray(editorPosts) && editorPosts.length > 0 ? (
           <div className="max-w-4xl mx-auto">
              <p className="text-30-semibold">Editor Picks</p>

               <ul className="mt-7 card_grid-sm">
                  {editorPosts.map((post: StartupTypeCard, i: number) => (
                    <StartupCard key={i} post={post} />
                   ))}
                </ul>
           </div>
        ) : (
         <p className="text-center text-muted">No editor picks available.</p>
        )} */}
        {relatedPosts?.length > 0 && (
  <div className="mt-16">
    <h3 className="text-30-semibold mb-6">Related Items</h3>
    <ul className="card_grid-sm">
      {relatedPosts.map((related: StartupTypeCard) => (
        <StartupCard key={related._id} post={related} />
      ))}
    </ul>
  </div>
)}


        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default Page;
