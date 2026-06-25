import Icon from './Icon';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme, themes } = useTheme();

  const themeOptions = [
    { key: 'default', icon: 'leaf', label: 'Default' },
    { key: 'light', icon: 'sun', label: 'Light' },
    { key: 'dark', icon: 'moon', label: 'Dark' },
  ];

  return (
    <div className="relative">
      <div className="flex items-center gap-1 rounded-full border border-line bg-white p-1 shadow-sm">
        {themeOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => setTheme(option.key)}
            className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition-all ${
              theme === option.key
                ? 'bg-forest-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-forest-700'
            }`}
            title={`${option.label} theme`}
          >
            <Icon name={option.icon} className="h-4 w-4" />
            <span className="hidden sm:inline">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
