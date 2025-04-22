"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  //   const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn } = useUser();

  //   console.log({isLoaded, isSignedIn, user});

  if (!isLoaded || !isSignedIn) return null;

  return (
    <div className="flex items-center justify-center p-8">
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
    </div>
  );
}
