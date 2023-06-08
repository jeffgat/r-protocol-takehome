import Image from 'next/image';

interface TokenTagProps {
  image: string;
  name: string;
  children?: React.ReactNode;
}

export const TokenTag = ({ image, name, children }: TokenTagProps) => (
  <div className="flex items-center space-x-2">
    <Image src={image} width={16} height={16} alt="" />
    <p className="font-semibold text-neutral-400 text-sm uppercase">
      {name} {children}
    </p>
  </div>
);
