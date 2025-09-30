import React from "react";
import { urlFor } from "../../../../../lib/sanity.client";
import { BeforeAfterPair } from "../../../../../lib/types";

type BeforeAfterPairProps = {
  pair: BeforeAfterPair;
  beforeText: string;
  afterText: string;
};

const BeforeAndAfterPair = ({
  pair,
  beforeText,
  afterText,
}: BeforeAfterPairProps) => {
  return (
    <div className="container mx-auto flex gap-4 ">
      <div className="flex flex-col flex-1  justify-center py-6">
        <img src={urlFor(pair.before).url()} alt={pair.before.alt || ""} />
        <span className="mt-3 font-bold uppercase">{beforeText}</span>
      </div>
      <div className="w-px bg-gray-200"></div>
      <div className="flex flex-col  flex-1  justify-center py-6 ">
        <img src={urlFor(pair.after).url()} alt={pair.after.alt || ""} />
        <span className="mt-3 font-bold uppercase text-right">{afterText}</span>
      </div>
    </div>
  );
};

export default BeforeAndAfterPair;
