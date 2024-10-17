// src/components/ui/badge.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "danger";
  size?: "sm" | "md" | "lg";
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  const classes = cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium",
    {
      "bg-primary text-primary-foreground": variant === "primary",
      "bg-secondary text-secondary-foreground": variant === "secondary",
      "bg-success text-success-foreground": variant === "success",
      "bg-danger text-danger-foreground": variant === "danger",
    },
    {
      "px-2 py-1": size === "sm",
      "px-3 py-2": size === "md",
      "px-4 py-3": size === "lg",
    },
    className
  );

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

Badge.displayName = "Badge";

export default Badge;