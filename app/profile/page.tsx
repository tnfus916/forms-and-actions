import Button from "@/components/button";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";

async function getUser() {
    const session = await getSession();
    if (session.id) {
        const user = await db.user.findUnique({
            where: {
                id: session.id,
            },
        });
        if (user) {
            return user;
        }
    }
    notFound();
}

export default async function Profile() {
    const user = await getUser();
    const logOut = async () => {
        "use server";
        const session = await getSession();
        await session.destroy();
        redirect("/");
    };
    return (
        <div className="flex flex-col items-center justify-center p-10">
            <h1 className="text-2xl">Welcome, {user?.username}!</h1>
            <h1>{user?.email}</h1>
            <form className="w-full p-10" action={logOut}>
                <Button text="Log out" />
            </form>
        </div>
    );
}