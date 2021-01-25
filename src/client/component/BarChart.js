// library
import React from 'react';

// toolkit
import { organizePeriodList, transformUnit } from '../toolkit/toolkit';

// scss
import '../scss/barChart.scss';

export const BarChart = (props) => {
  const { chartData } = props;
  const { date, start, end, unit, chartList } = chartData;

  const periodList = organizePeriodList(start, end);
  const transformedUnit = transformUnit(unit);

  return (
    <div className="bar-chart-warp">
      <div className="chart-body">
        {
          chartList.map((chartValue, index) => {
            const chartStyle = {
              height: Math.ceil(chartValue / (end + 10) * 100) + '%'
            }

            return (
              <div className="chart-body-item" style={chartStyle} key={'bar-chart-body-item-' + index}>{chartValue + transformedUnit}</div>
            )
          })
        }
      </div>
      <div className="chart-bg">
        {
          periodList.map((period, index) => {
            return (
              <div key={'bar-chart-bg-item-' + index} className="chart-bg-item">
                <div className="chart-bg-line">
                  <hr></hr>
                </div>
                <div className="chart-bg-value">
                  <span>{period}</span>
                  <span>{transformedUnit}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};