import LoginForm from "@/components/auth/login-form"
import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {createFileRoute, useNavigate} from "@tanstack/react-router"
import {FcGoogle} from "react-icons/fc"

export const Route = createFileRoute("/auth/login")({
    component: RouteComponent,
})

function RouteComponent() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <Card className="w-full max-w-md bg-card backdrop-blur-xl shadow-2xl">
                <CardHeader className="text-left">
                    <CardContent className="p-0 flex flex-row justify-between">
                        <CardTitle className="text-lg font-semibold text-foreground">
                            Login to your account
                        </CardTitle>
                        <CardDescription className="p-0 m-0 text-accent">
                            <Button
                                variant="link"
                                className="text-accent"
                                onClick={() =>
                                    navigate({to: "/auth/register"})
                                }>
                                Register
                            </Button>
                        </CardDescription>
                    </CardContent>
                    <CardDescription className="text-foreground/50">
                        Secure your notes and access them anywhere.
                    </CardDescription>
                </CardHeader>

                <CardContent className="mt-5">
                    <LoginForm />
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
