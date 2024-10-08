import Link from "next/link";

// not found 상황을 만나면 자동으로 렌더링됨.

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
