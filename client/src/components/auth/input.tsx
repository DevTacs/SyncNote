import {type LucideIcon} from "lucide-react"
import {Input} from "../ui/input"
import {Label} from "../ui/label"

type AuthInputProps = {
    label: string
    type: string
    placeholder: string
    name: string
    Icon: LucideIcon
}

export default function AuthInput({
    label,
    type = "text",
    placeholder,
    name,
    Icon,
}: AuthInputProps) {
    return (
        <div className="space-y-2">
            <Label htmlFor={name} className="text-foreground">
                {label}
            </Label>
            <div className="relative">
                <Icon className="absolute left-3 top-3 h-4 w-4 text-foreground/50   " />
                <Input
                    id={name}
                    placeholder={placeholder}
                    type={type}
                    className="pl-9 py-5 text-foreground border border-foreground/50"
                />
            </div>
        </div>
    )
}
