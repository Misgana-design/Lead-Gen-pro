// src/components/ui/Skeleton.tsx
export const Skeleton = ({ className }: { className?: string }) => {
  return (
    <div className={`animate-pulse bg-slate-200 rounded-md ${className}`} />
  );
};
