import {createFileRoute} from "@tanstack/react-router"
import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {User, Mail, Lock} from "lucide-react"
import {FcGoogle} from "react-icons/fc"
import AuthInput from "@/components/auth/input"

export const Route = createFileRoute("/auth/register")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <Card className="w-full max-w-md bg-card backdrop-blur-xl shadow-2xl">
                <CardHeader className="text-left">
                    <CardContent className="p-0 flex flex-row justify-between">
                        <CardTitle className="text-2xl font-semibold text-foreground">
                            Create an account
                        </CardTitle>
                        <CardDescription className="p-0 m-0 text-accent">
                            <Button variant="link" className="text-accent">
                                Login
                            </Button>
                        </CardDescription>
                    </CardContent>
                    <CardDescription className="text-foreground/50">
                        Secure your notes and access them anywhere.
                    </CardDescription>
                </CardHeader>

                <CardContent className="mt-5">
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
                </CardContent>
                <CardFooter className="flex flex-col gap-3 bg-card">
                    <Button
                        variant="outline"
                        className="w-full bg-background text-foreground border-none hover:bg-background/50 hover:text-accent">
                        <FcGoogle className="h-5 w-5" />
                        Continue with Google
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
