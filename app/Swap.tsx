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
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Get token orderbook data
          </h2>
          <p className="opacity-60">See price data between two tokens in real-time</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-neutral-900 shadow sm:rounded-lg">
            <div className="px-6 py-4 border-b-2 border-neutral-800 relative">
              <p className="font-semibold text-xs text-neutral-100 uppercase tracking-wider">
                Etherum Mainnet
              </p>
            </div>
            <div className="p-6 space-y-2">
              <p className="font-semibold text-xs text-neutral-400 uppercase tracking-wider">
                Spend
              </p>
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
              <p className="font-semibold text-xs text-neutral-400 uppercase tracking-wider">
                Receive
              </p>
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
          <p className="mt-10 text-center text-sm text-gray-500 opacity-60">
            Risk Protocol assignment by Jeffrey Gatbonton
          </p>
        </div>
      </div>
    </>
  );
};

export default Swap;
