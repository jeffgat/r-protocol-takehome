import React from 'react';

type Props = {
  children: React.ReactNode;
};

const WidgetWrapper = ({ children }: Props) => {
  return (
    <div className="mt-10 min-w-[320px] sm:mx-auto sm:w-full sm:max-w-[480px] sm:min-w-[360px]">
      <div className="bg-neutral-900 shadow sm:rounded-lg">{children}</div>
    </div>
  );
};

export default WidgetWrapper;
