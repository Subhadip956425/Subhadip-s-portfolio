import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#050414] flex justify-center items-center z-[9999]">
      <div className="w-16 h-16 border-4 border-[#00ffcc] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
