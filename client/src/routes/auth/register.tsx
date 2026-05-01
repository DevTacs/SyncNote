import {createFileRoute, useNavigate} from "@tanstack/react-router"
import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import RegisterForm from "@/components/auth/register-form"

export const Route = createFileRoute("/auth/register")({
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
                            Create an account
                        </CardTitle>
                        <CardDescription className="p-0 m-0 text-accent">
                            <Button
                                variant="link"
                                className="text-accent"
                                onClick={() => navigate({to: "/auth/login"})}>
                                Login
                            </Button>
                        </CardDescription>
                    </CardContent>
                    <CardDescription className="text-foreground/50">
                        Secure your notes and access them anywhere.
                    </CardDescription>
                </CardHeader>

                <CardContent className="mt-5">
                    <RegisterForm />
                </CardContent>
            </Card>
        </div>
    )
}
