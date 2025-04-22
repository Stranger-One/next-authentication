import { clerkClient } from "@clerk/nextjs/server";
import { removeRole, setRole } from "./actions";

export default async function AdminPage() {
  const client = await clerkClient();

  const users = (await client.users.getUserList()).data;
//   console.log({ users });

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-6">
      {users.map((user) => (
        <div
          key={user.id}
          className={`w-full  rounded-sm shadow-sm border p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
            users.indexOf(user) % 2 === 0 ? "bg-neutral-50" : "bg-white"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-gray-800">
            {/* <div className="font-semibold text-lg">
              {user.firstName} {user.lastName}
            </div> */}

            <div className=" text-gray-600">
              {
                user.emailAddresses.find(
                  (email) => email.id === user.primaryEmailAddressId
                )?.emailAddress
              }
            </div>

            <div className="text-sm font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
              {(user.publicMetadata?.role as string) || "No Role"}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <form action={setRole}>
              <input type="hidden" value={user.id} name="id" />
              <input type="hidden" value="admin" name="role" />
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition cursor-pointer"
              >
                Set Admin
              </button>
            </form>

            <form action={setRole}>
              <input type="hidden" value={user.id} name="id" />
              <input type="hidden" value="user" name="role" />
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded-lg transition cursor-pointer"
              >
                Set User
              </button>
            </form>

            <form action={removeRole}>
              <input type="hidden" value={user.id} name="id" />
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-red-600 hover:bg-red-700 text-white rounded-lg transition cursor-pointer"
              >
                Remove Role
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
