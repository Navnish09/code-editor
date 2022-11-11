import React from "react";
import { Badge } from "../baseComponents/Badge/Badge";

export const OutputDetails = ({ outputDetails }: any) => {

  const details: Record<string, any> = {
    Status: outputDetails?.status?.description || "",
    Memory: outputDetails?.memory || "",
    Time: outputDetails?.time || ""
  };

  return (
    <div className="metrics-container mt-4 flex flex-col space-y-3">
      {
        Object.keys(details).map((key: string) => (
          details[key] &&
          <p className="flex gap-3 items-center text-sm text-slate-400">
            {key}:
            <Badge>
              {details[key]}
            </Badge>
          </p>
        ))
      }
    </div>
  );
};

export default OutputDetails;
