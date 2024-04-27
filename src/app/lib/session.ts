import { cookies } from "next/headers";
import { NextRequest } from "next/server";



export const getSession = async (req: NextRequest) => {
    const session = cookies().get('token')?.value
    if (!session) return null
    return
}