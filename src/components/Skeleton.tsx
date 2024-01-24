const Skeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-8 max-w-xl  bg-teal-50 rounded-3xl m-auto shadow-lg shadow-slate-500">
      <div className="animate-pulse h-3 bg-gray-300 rounded-full dark:bg-gray-700 w-[80px] mb-4"></div>
      <div>
        <div className="animate-pulse h-4 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="animate-pulse h-4 bg-gray-700 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      </div>
    </div>
  );
};

export default Skeleton;
