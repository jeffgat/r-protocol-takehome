import React from 'react';

type Props = {
  children: React.ReactNode;
};

const WidgetWrapper = ({ children }: Props) => {
  return (
    <div className="mt-10 min-w-[320px] w-full sm:mx-auto lg:w-[320px] xl:w-[400px]">
      <div className="bg-neutral-900 shadow sm:rounded-lg">{children}</div>
    </div>
  );
};

export default WidgetWrapper;
