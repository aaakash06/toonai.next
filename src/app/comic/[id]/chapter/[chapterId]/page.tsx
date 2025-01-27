import React from "react";
import { Suspense, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock function to simulate fetching chapter pages
async function getChapterPages(chapterId: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock data for chapter pages
  return [
    "/placeholder.svg?height=800&width=600",
    "/placeholder.svg?height=800&width=600",
    "/placeholder.svg?height=800&width=600",
    // Add more pages as needed
  ];
}

function ChapterImage({ src }: { src: string }) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt="Comic page"
      width={600}
      height={800}
      className="w-full h-auto object-contain mb-4"
    />
  );
}

async function ChapterContent({ chapterId }: { chapterId: string }) {
  const pages = await getChapterPages(chapterId);

  return (
    <div>
      {pages.map((page, index) => (
        <ChapterImage key={index} src={page} />
      ))}
    </div>
  );
}

export default function ChapterPage({
  params,
}: {
  params: { id: string; chapterId: string };
}) {
  // useEffect(() => {}, []);
  // const unWrappedParams = React.use(params);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Chapter {params.chapterId}</h1>
      <div className="mb-6 space-x-4">
        <Link href={`/comic/${params.id}`}>
          <Button variant="outline">Back to Comic</Button>
        </Link>
        <Button variant="outline">Previous Chapter</Button>
        <Button variant="outline">Next Chapter</Button>
      </div>
      <Suspense fallback={<div>Loading chapter...</div>}>
        <ChapterContent chapterId={params.chapterId} />
      </Suspense>
    </div>
  );
}
