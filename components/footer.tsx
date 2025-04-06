import Link from "next/link"

export function Footer() {
  return (
    <footer className="container mx-auto py-4 flex justify-between text-sm text-gray-400">
      <Link href="/#" className="hover:text-white">
        Term & Conditions
      </Link>
      <Link href="/#" className="hover:text-white">
        Privacy Policy
      </Link>
    </footer>
  )
}

