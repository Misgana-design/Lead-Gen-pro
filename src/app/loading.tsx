// src/app/loading.tsx
import { Skeleton } from "@/components/ui/Skeleton";
import { Section } from "@/components/ui/Section";

export default function GlobalLoading() {
  return (
    <Section>
      <div className="space-y-8">
        {/* Skeleton for Title */}
        <Skeleton className="h-12 w-1/3" />

        {/* Skeletons for Content Blocks */}
        <div className="grid md:grid-cols-3 gap-8">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>

        {/* Skeleton for Text Lines */}
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    </Section>
  );
}
