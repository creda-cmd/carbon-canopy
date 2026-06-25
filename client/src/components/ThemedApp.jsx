import { useTheme } from "../contexts/ThemeContext";

export default function ThemedApp({ children }) {
  const { currentTheme } = useTheme();
  
  return (
    <div className={`flex min-h-screen flex-col ${currentTheme.colors.background} ${currentTheme.colors.text} transition-colors duration-300`}>
      {children}
    </div>
  );
}
