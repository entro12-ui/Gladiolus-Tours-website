import { classNames } from '@collo/ui-utils';

export interface IProps {
  status: boolean;
}

export const UiStatus = ({ status }: IProps) => {
  const baseClasses =
    'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset';
  switch (status) {
    case true:
      return (
        <span
          className={classNames(
            baseClasses,
            'bg-green-50 text-green-700 ring-green-600/20'
          )}
        >
          Active
        </span>
      );
    case false:
      return (
        <span
          className={classNames(
            baseClasses,
            'bg-red-50 text-red-700 ring-red-600/10'
          )}
        >
          Disabled
        </span>
      );
  }
};
