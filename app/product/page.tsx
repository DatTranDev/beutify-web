'use client'
import { Button } from "@/components/ui/button"; 
import { useRouter } from "next/navigation";

export default function productList() {
  const router = useRouter();
  return (
    <div className="m-auto">
      Product List, show all product here
      <Button onClick={()=>router.push('/product/10')} >Go to product details</Button>
    </div>
  );
}
