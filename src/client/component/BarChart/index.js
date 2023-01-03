// library
import React from 'react';

// toolkit
import { organizePeriodList, transformUnit } from '../../toolkit/toolkit';

// scss
import barChartCSS from './bar-chart.module.scss';

export const BarChart = (props) => {
  const { chartData } = props;
  const { date, start, end, unit, chartList } = chartData;

  const periodList = organizePeriodList(start, end);
  const transformedUnit = transformUnit(unit);

  return (
    <div className={barChartCSS['bar-chart-warp']}>
      <div className={barChartCSS['chart-body']}>
        {
          chartList.map((chartValue, index) => {
            const tranlateYValue = 'translateY(' + Math.ceil(chartValue / (end + 10) * 100) + '%)';
            const chartStyle = {
              height: Math.ceil(chartValue / (end + 10) * 100) + '%',
              animationDuration: (index/5) + 's'
            }

            const thisYear = new Date().getFullYear() + '-';
            const chartDate = date[index].split(thisYear)[1].replace('-', '/');

            return (
              <div className={barChartCSS['chart-body-item']} style={chartStyle} key={'bar-chart-body-item-' + index}>
                <div className={barChartCSS['chart-body-value']}>{chartValue + transformedUnit}</div>
                <div className={barChartCSS['chart-body-date']}>{chartDate}</div>
              </div>
            )
          })
        }
      </div>
      <div className={barChartCSS['chart-bg']}>
        {
          periodList.map((period, index) => {
            return (
              <div key={'bar-chart-bg-item-' + index} className={barChartCSS['chart-bg-item']}>
                <div className={barChartCSS['chart-bg-line']}>
                  <hr></hr>
                </div>
                <div className={barChartCSS['chart-bg-value']}>
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