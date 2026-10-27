import { useTheme } from "next-themes"
import type { ToasterProps } from "sonner"
import { Toaster as Sonner, toast } from "sonner"

const Toaster = (props: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return <Sonner theme={theme as ToasterProps["theme"]} {...props} />
}

export { toast, Toaster }
