import { FC, memo } from 'react';
import Image from 'next/image';

import Section from '../Layout/Section';
import { certifications, SectionId } from '../../data/data';

const Certifications: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Certifications}>
      <div className="flex flex-col gap-y-8">

        <h2 className="self-center text-3xl font-bold text-white">
          Certifications
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-neutral-900 shadow-lg transition hover:scale-105"
            >
              <Image
                src={cert.image}
                alt={cert.title}
                className="w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  {cert.title}
                </h3>

                <p className="mt-1 text-sm text-neutral-400">
                  {cert.issuer}
                </p>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm text-orange-500 hover:underline"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
});

Certifications.displayName = 'Certifications';

export default Certifications;