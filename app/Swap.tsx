import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { TOKEN_LIST } from '@/constants';
import Image from 'next/image';

const Swap = () => {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px] min-w-[360px]">
      <div className="bg-neutral-900 shadow sm:rounded-lg">
        <div className="px-6 py-4 border-b-2 border-neutral-800 relative flex space-x-2">
        <Image className="" src="/images/tokens/eth.webp" width={16} height={16} alt="" />
          <p className="font-semibold text-xs text-neutral-100 uppercase tracking-wider">
            Etherum Mainnet
          </p>
        </div>
        <div className="p-6 space-y-2">
          <p className="font-semibold text-xs text-neutral-400 uppercase tracking-wider">Spend</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {TOKEN_LIST.map((t) => (
                <SelectItem key={t.token} value={t.token}>
                  <div className="flex items-center justify-center space-x-2">
                    <Image className="" src={t.icon} width={16} height={16} alt="" />
                    <p>{t.token}</p>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="border-t-2 border-neutral-800 relative mb-4 mt-6">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-neutral-800 bg-neutral-900 rounded-full" />
        </div>

        <div className="p-6 space-y-2">
          <p className="font-semibold text-xs text-neutral-400 uppercase tracking-wider">Receive</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {TOKEN_LIST.map((t) => (
                <SelectItem key={t.token} value={t.token}>
                  <div className="flex items-center justify-center space-x-2">
                    <Image className="" src={t.icon} width={16} height={16} alt="" />
                    <p>{t.token}</p>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="p-6">
          <Button type="submit" className="w-full">
            Get orders
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Swap;
