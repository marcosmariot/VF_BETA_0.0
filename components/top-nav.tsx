import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeLanguageControls } from "@/components/ThemeLanguageControls";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Palette } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/contexts/TranslationContext";

export function TopNav() {
    const { theme } = useTheme();
    const { t } = useTranslation();
    
    const headerClasses = theme === 'light'
        ? 'border-b border-gray-200 backdrop-blur-sm'
        : 'border-b border-gray-800/50 backdrop-blur-sm';

    const buttonClasses = theme === 'light'
        ? 'text-gray-700 hover:text-gray-900'
        : 'text-gray-300 hover:text-white';

    return (
        <nav className={`flex items-center justify-between px-4 py-4 bg-background ${headerClasses}`}>
            <div className="flex items-center space-x-2">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                        <Palette className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Vertical Fashion
                    </span>
                </Link>
            </div>
            
            <div className="flex items-center space-x-4">
                <ThemeLanguageControls />
                
                <SignedOut>
                    <SignInButton mode="modal">
                        <Button variant="ghost" className={buttonClasses}>
                            {t('header.signup')}
                        </Button>
                    </SignInButton>
                </SignedOut>
                
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
                
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                    Comece a Criar
                </Button>
            </div>
        </nav>
    );
}

