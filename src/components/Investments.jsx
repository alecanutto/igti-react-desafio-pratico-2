import { formatPercent, formatValue, getClassColor } from '../util/functions';
import Investment from './Investment';
var _ = require('lodash');

export default function investments({ description, children = null }) {
  if (!children) {
    return <div>Impossível renderizar os investimentos</div>;
  }

  const reports = _.sortBy(children, ['month', 'year']);

  const newReports = reports.map(
    ({ id, investmentId, month, year, value }, index) => {
      let percentage = 0;
      if (index > 0) {
        percentage =
          ((value - reports[index - 1].value) * 100) / reports[index - 1].value;
      }
      return {
        id,
        investmentId,
        month,
        year,
        value,
        percentage,
      };
    }
  );

  const valueTotal = _.last(newReports).value - _.first(newReports).value;
  const percentageTotal = (valueTotal / _.first(newReports).value) * 100;

  return (
    <div className="border p-2 mb-4">
      <h2 className="text-center font-semibold text-2xl">{description}</h2>
      <h3 className="text-center font-semibold text-xl">
        Rendimento total:
        <span className={`ml-2 ${getClassColor(percentageTotal)}`}>
          {formatValue(valueTotal)} ({formatPercent(percentageTotal)})
        </span>
      </h3>
      {newReports.map(report => {
        return <Investment key={report.id}>{report}</Investment>;
      })}
    </div>
  );
}
