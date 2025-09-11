'use client';
import React from 'react';
import { Select as HeroSelect, SelectItem, SelectProps as HeroSelectProps } from '@heroui/select';
import clsx from 'clsx';
import Icon, { IconName } from './icon';

interface SelectOption {
  value: string;
  label: string;
  description?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

interface SelectProps extends Omit<HeroSelectProps, 'children'> {
  startIcon?: IconName;
  endIcon?: IconName;
  iconSize?: number;
  iconColor?: string;
  options: SelectOption[];
}

const Select = ({
  startIcon,
  endIcon,
  iconSize = 20,
  iconColor,
  options = [],
  startContent,
  endContent,
  ...props
}: SelectProps) => {
  // Create icon content if icons are provided
  const startIconContent = startIcon ? (
    <Icon name={startIcon} size={iconSize} color={iconColor} />
  ) : startContent;

  const endIconContent = endIcon ? (
    <Icon name={endIcon} size={iconSize} color={iconColor} />
  ) : endContent;

  return (
    <HeroSelect
      {...props}
      startContent={startIconContent}
      endContent={endIconContent}
    >
      {options.map((option) => (
        <SelectItem
          key={option.value}
          textValue={option.label}
          description={option.description}
          startContent={option.startContent}
          endContent={option.endContent}
        >
          {option.label}
        </SelectItem>
      ))}
    </HeroSelect>
  );
};

export default Select;
export type { SelectProps, SelectOption };