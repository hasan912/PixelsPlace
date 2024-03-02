'use client'
import { Skeleton } from "@/components/ui/skeleton"
 
export default function SkeletonCard() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-5 mt-5 m-3 gap-5">
      <Skeleton className="h-[250px] w-[350px] rounded-xl" />
      <Skeleton className="h-[250px] w-[350px] rounded-xl" />
      <Skeleton className="h-[250px] w-[350px] rounded-xl" />
      <Skeleton className="h-[250px] w-[350px] rounded-xl" />
      <Skeleton className="h-[250px] w-[350px] rounded-xl" />
    </div>
  
    </>
  )
}