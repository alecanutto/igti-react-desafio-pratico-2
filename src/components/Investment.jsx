import { formatPeriod } from '../util/functions';
import Item from './Item';

export default function Investment({ children }) {
  const { month, year, value, percentage } = children;

  return (
    <>
      <ul className="mb-4">
        <li>
          <Item label={formatPeriod(month, year)} percentage={percentage}>
            {value}
          </Item>
        </li>
      </ul>
    </>
  );
}
