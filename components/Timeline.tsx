import { FC } from "react";

interface TImelineProps {
  startDate: Date;
  endDate: Date;
}

export const Timeline: FC<TImelineProps> = ({ startDate, endDate }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span>{startDate.toLocaleDateString()}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>{endDate.toLocaleDateString()}</span>
        </div>
      </div>
      <div className="bg-gray-200 p-1">
        <div className="bg-blue-500 h-2" />
      </div>
    </div>
  );
};
