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

type Props = {
  text?: string;
  icon?: React.ReactNode;
};

const AccessibilitySelect = ({ text = 'Accessibility', icon }: Props) => {
  const [colorblind, setColorblind] = React.useState(() => {
    return localStorage.getItem('colorblind') || 'None';
  });

  React.useEffect(() => {
    localStorage.setItem('colorblind', colorblind);
  }, [colorblind]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='mr-3'
          >
            <path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z' />
            <circle cx='12' cy='12' r='3' />
          </svg>
          {text}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Daltonism</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={colorblind} onValueChange={setColorblind}>
          <DropdownMenuRadioItem value='None'>
            None
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='Protanopia'>
            Protanopia
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='Deuteranopia'>
            Deuteranopia
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='Tritanopia'>
            Tritanopia
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccessibilitySelect;
