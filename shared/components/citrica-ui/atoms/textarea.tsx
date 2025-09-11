'use client';
import React from 'react';
import { Textarea as HeroTextarea } from '@heroui/react';
import clsx from 'clsx';

interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string) => void;
  name?: string;
  variant?: 'flat' | 'bordered' | 'faded' | 'underlined';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
  description?: string;
  className?: string;
  classNames?: {
    base?: string;
    input?: string;
    inputWrapper?: string;
    label?: string;
    description?: string;
    errorMessage?: string;
  };
  fullWidth?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  rows?: number;
  minRows?: number;
  maxRows?: number;
}

const Textarea = ({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  onValueChange,
  name,
  variant = 'bordered',
  color = 'default',
  size = 'md',
  radius = 'md',
  required = false,
  disabled = false,
  readOnly = false,
  isInvalid = false,
  errorMessage,
  description,
  className,
  classNames,
  fullWidth = true,
  autoFocus = false,
  maxLength,
  minLength,
  rows = 4,
  minRows,
  maxRows,
}: TextareaProps) => {
  return (
    <HeroTextarea
      label={label}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onValueChange={onValueChange}
      name={name}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      isRequired={required}
      isDisabled={disabled}
      isReadOnly={readOnly}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      description={description}
      className={clsx(className)}
      classNames={classNames}
      fullWidth={fullWidth}
      autoFocus={autoFocus}
      maxLength={maxLength}
      minLength={minLength}
      // @ts-ignore - HeroUI textarea supports these props
      rows={rows}
      minRows={minRows}
      maxRows={maxRows}
    />
  );
};

export default Textarea;
export type { TextareaProps };