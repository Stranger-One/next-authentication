import { currentUser } from "@clerk/nextjs/server";


export default async function DashboardPage() {
    const userOjb = await currentUser()

    // console.log({authObj, userOjb});


    return (
        <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="mt-4">Hello! {userOjb?.firstName} {userOjb?.lastName}, Welcome to your dashboard!</p>
            <p className="mt-4">User ID: {userOjb?.id}</p>
            <p className="mt-4">User Email: {userOjb?.emailAddresses[0]?.emailAddress}</p>
        </div>
    )
    
}