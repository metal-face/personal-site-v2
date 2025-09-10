import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export type ThemeState = "theme-light" | "dark" | "system";

export function ThemeToggle() {
    const [theme, setThemeState] = useState<ThemeState>("theme-light");

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains("dark");
        setThemeState(isDarkMode ? "dark" : "theme-light");
    }, []);

    useEffect(() => {
        const isDark =
            theme === "dark" ||
            (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
        document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    }, [theme]);

    return (
        <Button
            className="mr-8"
            onClick={() => {
                console.log("clicked")
                if (theme === "theme-light") {
                    setThemeState("dark");
                } else if (theme === "dark" || theme === "system") {
                    setThemeState("theme-light");
                }
            }}
        >
            {theme === "dark" ? <Moon /> : <Sun />}
        </Button>
    );
}
