import { z } from 'zod'

export const register = z.object({
    name: z.string().min(6).max(100, {
        message: 'Name must be at least 6 characters'
    }),
    email: z.string().email({
        message: 'Email must be a valid email'
    }),
    password: z.string().min(8).max(100, {
        message: 'Password must be at least 8 characters'
    }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
    confirmPassword: z.string().min(8).max(100, {
        message: 'Confirm password is required'
    })
}).refine(data => data.password === data.confirmPassword, {
    message: 'Password dont match! ',
    path: ['confirmPassword']
})

export const login = z.object({
    email: z.string().email({
        message: 'Email must be a valid email'
    }),
    password: z.string().min(8).max(100, {
        message: 'Password must be at least 8 characters'
    })
})