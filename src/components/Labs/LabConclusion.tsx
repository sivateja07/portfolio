type LabConclusionProps = {
    children: React.ReactNode;
  };
  
  export default function LabConclusion({
    children,
  }: LabConclusionProps) {
    return (
      <section className="mt-20 rounded-xl border border-neutral-700 bg-neutral-800 p-8">
        <h2 className="mb-6 text-3xl font-bold text-white">
          Lab Conclusion
        </h2>
  
        <div className="space-y-4 leading-8 text-neutral-300">
          {children}
        </div>
      </section>
    );
  }