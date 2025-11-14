import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SmartButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;            // left icon
  rightIcon?: React.ReactNode;       // right icon
  isLoading?: boolean;
  className?: string;
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function SmartButton({
  children,
  icon,
  rightIcon,
  isLoading,
  className,
  variant = "default",
  size = "default",
  type = "button",
  onClick,
}: SmartButtonProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      size={size}
      variant={variant}
      className={cn("flex items-center gap-2 transition-all duration-300 hover:scale-[1.009] px-6 py-5 rounded-lg text-sm cursor-pointer", className)}
      disabled={isLoading}
    >
      {/* Left Icon */}
      {icon && !isLoading && <span className="flex items-center">{icon}</span>}

      {/* Loading Spinner */}
      {isLoading && (
        <span className="flex items-center animate-spin">
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <circle cx="12" cy="12" r="10" strokeOpacity="0.25" strokeWidth="4" />
            <path
              d="M12 2a10 10 0 0 1 10 10"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}

      {/* Button Text */}
      <span>{children}</span>

      {/* Right Icon */}
      {rightIcon && !isLoading && (
        <span className="flex items-center">{rightIcon}</span>
      )}
    </Button>
  );
}
