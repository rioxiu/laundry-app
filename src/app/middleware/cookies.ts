import { cookies } from "next/headers"

export const setCookies = (token: any) => {
    cookies().set('access token', token, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
    })
}