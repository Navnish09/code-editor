import React from "react";

const OutputDetails = ({ outputDetails } : any) => {
  return (
    <div className="metrics-container mt-4 flex flex-col space-y-3">
      <p className="flex gap-3 items-center text-sm text-slate-400">
        Status:
        <span className="font-semibold px-2 py-1 rounded-md bg-slate-800">
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="flex gap-3 items-center text-sm text-slate-400">
        Memory:
        <span className="font-semibold px-2 py-1 rounded-md  bg-slate-800">
          {outputDetails?.memory}
        </span>
      </p>
      <p className="flex gap-3 items-center text-sm text-slate-400">
        Time:
        <span className="font-semibold px-2 py-1 rounded-md  bg-slate-800">
          {outputDetails?.time}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;
