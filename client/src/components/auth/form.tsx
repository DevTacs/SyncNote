import AuthInput from "./input"
import {Lock, Mail, User} from "lucide-react"
import {Button} from "../ui/button"

export default function AuthForm() {
    return (
        <form className="space-y-5">
            {/* Username */}
            <AuthInput
                label="username"
                type="text"
                placeholder="Enter your username"
                name="username"
                Icon={User}
            />

            {/* Email */}
            <AuthInput
                label="Email"
                type="email"
                placeholder="Enter your email"
                name="email"
                Icon={Mail}
            />

            {/* Password */}
            <AuthInput
                label="Password"
                type="password"
                placeholder="Enter your password"
                name="password"
                Icon={Lock}
            />

            <Button className="w-full py-5 text-foreground bg-accent hover:bg-accent/80">
                Create account
            </Button>
        </form>
    )
}
