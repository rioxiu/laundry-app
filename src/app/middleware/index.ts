import { NextRequest } from "next/server";


export default async function middleware(req: NextRequest) {
    const token = req.cookies.get('jsonwebtoken')
    console.log(token)


}