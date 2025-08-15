import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import {
  PLAYLIST_BY_SLUG_QUERY,
  STARTUP_BY_ID_QUERY,
} from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

import markdownit from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

const md = markdownit();

export const experimental_ppr = true;

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
  

  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(post?._createdAt)}</p>

        <h1 className="heading">{post.title}</h1>
        {post?.price !== undefined && post?.price !== null && (
    <p className="text-lg font-semibold text-green-700">
      ${post.price.toFixed(2)} USD
    </p>
  )}
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>
      
      <section className="section_container">
  {/* Two-column layout for desktop */}
  <div className="flex flex-col md:flex-row gap-8 items-start">
    {/* Left: Image */}
    <div className="w-full md:w-1/2">
      <Image
        src={post.image}
        alt="thumbnail"
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
    <h3 className="text-30-bold">Pitch Details</h3>
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


        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default Page;
