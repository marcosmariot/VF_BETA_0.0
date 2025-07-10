import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Sun, Moon, Globe } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { useTranslation } from '@/contexts/TranslationContext'

export function ThemeLanguageControls() {
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage } = useTranslation()

  const languages = [
    { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
    { code: 'en-US', name: 'English', flag: '🇺🇸' },
    { code: 'es-ES', name: 'Español', flag: '🇪🇸' },
  ]

  const selectClasses = theme === 'light' 
    ? 'bg-white border-gray-300 text-gray-900' 
    : 'bg-transparent border-gray-700 text-gray-300'

  const selectContentClasses = theme === 'light'
    ? 'bg-white border-gray-300'
    : 'bg-gray-800 border-gray-700'

  const buttonClasses = theme === 'light'
    ? 'text-gray-700 hover:text-gray-900'
    : 'text-gray-300 hover:text-white'

  return (
    <div className="flex items-center space-x-2">
      {/* Language Selector */}
      <Select value={language} onValueChange={(value) => setLanguage(value as any)}>
        <SelectTrigger className={`w-[140px] ${selectClasses}`}>
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4" />
            <SelectValue />
          </div>
        </SelectTrigger>
        <SelectContent className={selectContentClasses}>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              <div className="flex items-center space-x-2">
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Theme Toggle */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className={buttonClasses}
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>
    </div>
  )
}

