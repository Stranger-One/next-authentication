import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">My App</div>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </li>
        <li>
          <a href="/admin" className="hover:underline">
            Admin
          </a>
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
