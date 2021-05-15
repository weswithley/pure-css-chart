// library
import React, { useContext, Fragment } from 'react';

// context
import { MainContext } from '../context/context';

// component
import { BarChart } from './BarChart';
import { PieChart } from './PieChart';

// scss
import '../scss/dataLists.scss';

const organizeBarChartList = (date, start, end, unit, chartList) => {
  const chartData = {
    date,
    start,
    end,
    unit,
    chartList
  }
  return chartData
}

const organizePieChartList = (date, unit, chartList) => {
  const chartData = {
    date,
    unit,
    chartList
  }
  return chartData
}

export const DataList = () => {
  const { newCity, newDataList, loadingDone } = useContext(MainContext);

  const dateTempList = newDataList.map((data) => { return data['applicable_date'] });
  const maxTempList = newDataList.map((data) => { return Math.round(data['max_temp']) });
  const minTempList = newDataList.map((data) => { return Math.round(data['min_temp']) });
  const huminityList = newDataList.map((data) => { return data['humidity'] });
  const maxChartData = organizeBarChartList(dateTempList, 0, 50, 'temperature', maxTempList);
  const minChartData = organizeBarChartList(dateTempList, 0, 50, 'temperature', minTempList);
  const humChartData = organizePieChartList(dateTempList, 'percentage', huminityList);
  const dataTitleClassName = loadingDone ? 'loaded-data-title' : 'loading-data-title';

  return (
    <div className="data-list">
      <div className="data-title">
        <div className={dataTitleClassName}>{newCity}</div>
        <div>5 days forcast max temprature</div>
      </div>
      <BarChart chartData={maxChartData}></BarChart>

      <div className="data-title">
        <div className={dataTitleClassName}>{newCity}</div>
        <div>5 days forcast min temprature</div>
      </div>
      <BarChart chartData={minChartData}></BarChart>

      <div className="data-title">
        <div className={dataTitleClassName}>{newCity}</div>
        <div>5 days forcast huminity</div>
      </div>
      <PieChart chartData={humChartData}></PieChart>
    </div>
  );
};