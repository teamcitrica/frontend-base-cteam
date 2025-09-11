'use client'
import React from "react";
import Text from "../atoms/text";
import {Button as ButtonHeroUI} from "@heroui/react";
import clsx from 'clsx';

type ButtonProps = {
  onClick?: () => void;
  label?: string;
  children?: React.ReactNode;
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
  textVariant?: "label" | "body" | "title" | "display" | "headline" | "subtitle";
  color?: "primary" | "secondary" | "default" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  fullWidth?: boolean;
};

const getTextColorByVariantAndColor = (variant: string, color: string) => {
  if (variant === "solid") {
    return color === "primary" || color === "warning" ? "black" : "white";
  }
  if (variant === "bordered" || variant === "light" || variant === "ghost") {
    return "inherit";
  }
  return "inherit";
}

const Button = ({ 
  onClick, 
  label,
  children,
  color = "primary", 
  textVariant = "label", 
  variant = "solid", 
  size = "md",
  radius = "md",
  className = "",
  type = "button",
  disabled = false,
  isLoading = false,
  startContent,
  endContent,
  fullWidth = false
}: ButtonProps) => {
  const content = children || (label && (
    <Text 
      variant={textVariant} 
      color={getTextColorByVariantAndColor(variant, color)}
    >
      {label}
    </Text>
  ));

  return (
    <ButtonHeroUI 
      color={color} 
      onPress={onClick} 
      className={clsx("py-2 px-2", className)} 
      variant={variant}
      size={size}
      radius={radius}
      type={type}
      isDisabled={disabled}
      isLoading={isLoading}
      startContent={startContent}
      endContent={endContent}
      fullWidth={fullWidth}
    >
      {content}
    </ButtonHeroUI>
  )
}

export default Button;