import Image from 'next/image';

type Props = {
  title: string;
  src: string;
};

const AccessibleImage = ({ title, src }: Props) => {
  return (
    <Image
      src={src}
      alt={`Image for ${title}`}
      className={
        'shadow-sm w-full hover:shadow-lg transition-shadow duration-200'
      }
      width={1300}
      height={630}
      priority={true}
    />
  );
};

export default AccessibleImage;
