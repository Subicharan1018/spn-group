import React from 'react';
import { ArrowRight, ArrowDown, ArrowLeft } from 'lucide-react';

const ProcessFlow = () => {
  const topRow = [
    { id: 1, text: 'START', shape: 'oval' },
    { id: 2, text: 'Visit Platform', shape: 'rect' },
    { id: 3, text: 'Partner Login / Register', shape: 'parallelogram' },
    { id: 4, text: 'Browse Industrial Materials', shape: 'rect' },
    { id: 5, text: 'View Material Specs', shape: 'rect' },
    { id: 6, text: 'Add to Inquiry', shape: 'rect' },
  ];

  const bottomRow = [
    { id: 12, text: 'END', shape: 'oval' },
    { id: 11, text: 'Trade Confirmation', shape: 'parallelogram' },
    { id: 10, text: 'Finalize Agreement', shape: 'rect' },
    { id: 9, text: 'Enter Logistics Details', shape: 'parallelogram' },
    { id: 8, text: 'Proceed to Quote', shape: 'rect' },
    { id: 7, text: 'View Inquiry', shape: 'rect' },
  ];

  const renderShape = (item) => {
    switch (item.shape) {
      case 'oval':
        return (
          <div className="flex items-center justify-center w-28 h-16 border-2 border-black rounded-[50%] bg-white text-black font-semibold text-xs text-center px-2">
            {item.text}
          </div>
        );
      case 'rect':
        return (
          <div className="flex items-center justify-center w-36 h-16 border-2 border-black bg-white text-black font-semibold text-xs text-center px-4">
            {item.text}
          </div>
        );
      case 'parallelogram':
        return (
          <div className="flex items-center justify-center w-40 h-16 border-2 border-black bg-white text-black font-semibold text-xs text-center px-6 -skew-x-[15deg]">
            <span className="skew-x-[15deg]">{item.text}</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-20 px-4 bg-white font-sans">
      <div className="max-w-6xl w-full flex flex-col items-center relative">
        {/* Top Row */}
        <div className="flex flex-row items-center justify-between w-full mb-10">
          {topRow.map((item, index) => (
            <React.Fragment key={item.id}>
              {renderShape(item)}
              {index < topRow.length - 1 && (
                <div className="flex-shrink-0 mx-2 text-black">
                  <ArrowRight size={24} strokeWidth={2.5} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Vertical Arrow */}
        <div className="absolute right-12 top-16 h-16 flex items-center justify-center">
          <ArrowDown size={24} strokeWidth={2.5} className="text-black" />
        </div>

        {/* Bottom Row */}
        <div className="flex flex-row items-center justify-between w-full mt-10">
          {bottomRow.map((item, index) => (
            <React.Fragment key={item.id}>
              {index > 0 && (
                <div className="flex-shrink-0 mx-2 text-black">
                  <ArrowLeft size={24} strokeWidth={2.5} />
                </div>
              )}
              {renderShape(item)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
