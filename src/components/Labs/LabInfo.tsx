import { FC, ReactNode } from 'react';

interface LabInfoProps {
  children: ReactNode;
}

const LabInfo: FC<LabInfoProps> = ({ children }) => {
  return (
    <div className="mb-12">
      <h2 className="mb-4 text-2xl font-semibold text-white">
        Lab Environment
      </h2>

      <div className="overflow-hidden rounded-lg border border-neutral-700">
        {children}
      </div>
    </div>
  );
};

export default LabInfo;