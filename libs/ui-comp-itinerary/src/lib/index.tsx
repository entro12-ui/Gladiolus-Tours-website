import { GladiolusToursItinerary } from '@collo/ui-persistance';

interface IProps {
  itinerary: GladiolusToursItinerary;
}

export const Itinerary = ({ itinerary }: IProps) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {itinerary.map((value) => (
        <li
          key={value.id}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">
                  {value.status}
                </h3>
                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {value.brief}
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">
                {value.brief}
              </p>
            </div>
            <img
              className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
              src={''}
              alt=""
            />
          </div>
          <div></div>
        </li>
      ))}
    </ul>
  );
};
