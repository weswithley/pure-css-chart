// library
import React, { Fragment } from 'react';

// toolkit
import { transformUnit } from '../../toolkit/toolkit';

// scss
import pieChartCss from './pie-chart.module.scss';

export const PieChart = (props) => {
  const { chartData } = props;
  const { date, unit, chartList } = chartData;
  const transformedUnit = transformUnit(unit);

  return(
    <div className={pieChartCss['pie-chart-warp']}>
      {
        chartList.map((chartValue, index) => {
          const chartDegree = Math.round(chartValue / 100 * 360);
          const chartStyle = {
            background: `conic-gradient(#0094d8 0 ${chartDegree + 'deg'}, #cacaca 0)`
          }

          return (
            <div className={pieChartCss['chart-body']} key={'pie-chart-body-item-' + index}>
              <div className={pieChartCss['chart-body-value']}>{chartValue + transformedUnit}</div>
              <div style={chartStyle} className={pieChartCss['chart-body-item']}></div>
            </div>
          )
        })
      }
    </div>
  )
};