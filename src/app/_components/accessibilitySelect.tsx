type Props = {
  text?: string;
  icon?: React.ReactNode;
};

const AccessibilitySelect = ({ text = 'Accessibility', icon }: Props) => {
  return (
    <button className='gap-2 h-10 py-2 px-4 border flex items-center justify-center rounded-md text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='22'
        height='22'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z' />
        <circle cx='12' cy='12' r='3' />
      </svg>
      <select className='appearance-none cursor-pointer'>
        {icon}
        <option selected value='Off'>
          {text}
        </option>
        <option value='Protanopia'>Protanopia</option>
        <option value='Deuteranopia'>Deuteranopia</option>
        <option value='Tritanopia'>Tritanopia</option>
      </select>
    </button>
  );
};

export default AccessibilitySelect;
