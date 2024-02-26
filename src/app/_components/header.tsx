import Link from 'next/link';

const styles = {
  text: 'text-sm font-medium tracking-',
};

const Header = () => {
  return (
    <header className='body-font mb-12'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <div className='flex title-font font-medium items-center mb-4 md:mb-0'>
          <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight'>
            <Link href='/' className='hover:underline'>
              Blog
            </Link>
            .
          </h2>
        </div>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap gap-16 items-center text-md justify-center md:mb-0 mb-6'>
          <a
            className={`hover:underline cursor-pointer text-sm font-medium tracking-wide`}
          >
            Posts
          </a>
          <a
            className={`hover:underline cursor-pointer text-sm font-medium tracking-wide`}
          >
            About
          </a>
          <a
            className={`hover:underline cursor-pointer text-sm font-medium tracking-wide`}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
