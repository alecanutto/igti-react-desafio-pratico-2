import { formatPercent, formatValue, getClassColor } from '../util/functions';

export default function Item({
  children: value = 0,
  label = 'mm/yyyy',
  percentage = 0,
}) {
  return (
    <div className="flex flex-row justify-between text-sm p-2 border-b-2">
      <div>
        <span className="inline-block font-semibold w-20">{label}</span>
        <span className={getClassColor(value)}>{formatValue(value)}</span>
      </div>
      <span className={getClassColor(percentage)}>
        {formatPercent(percentage)}
      </span>
    </div>
  );
}
