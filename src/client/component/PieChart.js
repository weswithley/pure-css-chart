// library
import React, { Fragment } from 'react';

// toolkit
import { transformUnit } from '../toolkit/toolkit';

// scss
import '../scss/pieChart.scss';

export const PieChart = (props) => {
  const { chartData } = props;
  const { date, unit, chartList } = chartData;
  const transformedUnit = transformUnit(unit);

  return(
    <div className="pie-chart-warp">
      {
        chartList.map((chartValue, index) => {
            const chartDegree = Math.round(chartValue / 100 * 360);
            const chartStyle = {
              backgroundImage: `conic-gradient(#4071b1 0deg ${chartDegree + 'deg'}, #18b9be ${chartDegree + 'deg'})`
            }

            return (
              <div className="chart-body" key={'pie-chart-body-item-' + index}>
                <div className="chart-body-value">{chartValue + transformedUnit}</div>
                <div style={chartStyle} className="chart-body-item"></div>
              </div>
            )
          })
        }
    </div>
  )
};