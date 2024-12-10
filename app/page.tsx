import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello world
      <Link href="/product" >Go to Product</Link>
    </div>
  );
}
