import { NextRequest } from "next/server";




export default function middleware(req: NextRequest) {
    const token = req.cookies.get('jsonwebtoken')
}

