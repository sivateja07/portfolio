import { FC } from 'react';

interface LabHeaderProps {
  title: string;
  overview: string;
}

const LabHeader: FC<LabHeaderProps> = ({ title, overview }) => {
  return (
    <div className="mb-12">
      <h1 className="mb-6 text-4xl font-bold text-white">{title}</h1>

      <h2 className="mb-2 text-2xl font-semibold text-white">
        Overview
      </h2>

      <p className="text-neutral-300 leading-7">
        {overview}
      </p>
    </div>
  );
};

export default LabHeader;