import { InfinitySpin } from 'react-loader-spinner';

export const RouterLazyFallback = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 place-items-center h-screen">
      <div className="col-start-2 row-start-2 ">
        <div className={'bg-indigo-100 rounded-md'}>
          <InfinitySpin width="200" color="#bda6fc" />
        </div>
      </div>
    </div>
  );
};
