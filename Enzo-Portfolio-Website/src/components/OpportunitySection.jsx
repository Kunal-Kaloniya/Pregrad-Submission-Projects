import React from 'react';

const OpportunitySection = ({ headingTop, headingMain, paragraphs }) => {
  return (
    <section className="bg-white text-center text-black px-6 py-20 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Heading 1 */}
        <h3 className="text-gray-500 text-lg font-semibold tracking-widest mb-2">
          {headingTop}
        </h3>

        {/* Heading 2 */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {headingMain}
        </h2>

        {/* Divider Line */}
        <div className="w-20 border-b-2 border-black mx-auto mb-10"></div>

        {/* Paragraphs */}
        <div className="space-y-8 text-[17px] leading-relaxed">
          {paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
