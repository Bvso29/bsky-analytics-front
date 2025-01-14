"use client"
import { AuthProvider } from "../../providers/UserContext"
import LoginForm from "@/components/Forms/LoginForm"

export default function Home() {
    return (
        <>
            <AuthProvider>
                <LoginForm />
            </AuthProvider>
        </>
    )
}
