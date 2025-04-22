import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">My App</div>
    <ul className="flex space-x-4">
      <li>
        <Link href="/" className="hover:underline">
        Home
        </Link>
      </li>
      <li>
        <Link href="/about" className="hover:underline">
        About
        </Link>
      </li>
      <li>
        <Link href="/contact" className="hover:underline">
        Contact
        </Link>
      </li>
      <li>
        <Link href="/admin" className="hover:underline">
        Admin
        </Link>
      </li>
    </ul>
      <div className="flex items-center space-x-4">
        <SignedOut>
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </SignedOut>

        {/* <UserButton/> */}
        <SignedIn>
          <Link href={"/user-profile"}>Profile</Link>
          <SignOutButton />
        </SignedIn>
      </div>
    </nav>
  );
};
