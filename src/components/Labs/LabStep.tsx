import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface LabStepProps {
  title: string;
  image: string | StaticImageData;
  description: string;
  configuration?: string[];
}

const LabStep: FC<LabStepProps> = ({
  title,
  image,
  description,
  configuration,
}) => {
  return (
    <section className="mb-16">

      <h2 className="mb-6 text-2xl font-semibold text-white">
        {title}
      </h2>

      <Image
        src={image}
        alt={title}
        className="mb-6 rounded-lg border border-neutral-700"
      />

      <h3 className="mb-3 text-xl font-semibold text-white">
        Explanation
      </h3>

      <p className="mb-6 leading-7 text-neutral-300">
        {description}
      </p>

      {configuration && configuration.length > 0 && (
        <>
          <h3 className="mb-3 text-xl font-semibold text-white">
            Configuration Applied
          </h3>

          <ul className="list-disc space-y-2 pl-6 text-neutral-300">
            {configuration.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}

    </section>
  );
};

export default LabStep;