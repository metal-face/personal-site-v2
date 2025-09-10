import { ThemeToggle } from "@/components/ThemeToggle.tsx";

export function AppBar() {
    return (
        <div className="h-24 w-full flex items-center justify-end">
            <ThemeToggle />
        </div>
    );
}
