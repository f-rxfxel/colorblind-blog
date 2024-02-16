'use client';

import * as React from 'react';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';
import AccessibilityIcon from '../../../public/assets/AccessibilityIcon';

type Props = {
  text?: string;
  icon?: React.ReactNode;
};

const AccessibilitySelect = ({
  text = 'Accessibility',
  icon = <AccessibilityIcon />,
}: Props) => {
  const deficiencies = [
    'None',
    'Protanopia',
    'Protanomaly',
    'Deuteranopia',
    'Deuteranomaly',
    'Tritanopia',
    'Tritanomaly',
  ];

  const [colorblind, setColorblind] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('colorblind') || 'None';
    }
    return 'None';
  });

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('colorblind', colorblind);
    }
  }, [colorblind]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          {icon}
          {text}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Daltonism</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={colorblind}
          onValueChange={setColorblind}
        >
          {deficiencies.map((deficiency) => (
            <DropdownMenuRadioItem key={deficiency} value={deficiency}>
              {deficiency}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccessibilitySelect;
