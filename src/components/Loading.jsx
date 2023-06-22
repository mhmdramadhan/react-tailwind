const Loading = () => {
  return (
    <div className="m-2 h-full">
      <div className="px-3 py-1 text-xs font-medium grid leading-none text-center text-white bg-blue-200 rounded-full animate-pulse dark:bg-gray-900  h-8">
        <p className="place-self-center">loading...</p>
      </div>
    </div>
  );
};

export default Loading;
