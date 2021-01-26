// library
import React, { useContext, Fragment } from 'react';

// context
import { MainContext } from '../context/context';

// component
import { BarChart } from './BarChart';
import { PieChart } from './PieChart';

// scss
import '../scss/dataList.scss';

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
  const { newDataList } = useContext(MainContext);

  const dateTempList = newDataList.map((data) => { return data['applicable_date'] });
  const maxTempList = newDataList.map((data) => { return Math.round(data['max_temp']) });
  const minTempList = newDataList.map((data) => { return Math.round(data['min_temp']) });
  const huminityList = newDataList.map((data) => { return data['humidity'] });
  const maxChartData = organizeBarChartList(dateTempList, 0, 50, 'temperature', maxTempList);
  const minChartData = organizeBarChartList(dateTempList, 0, 50, 'temperature', minTempList);
  const humChartData = organizePieChartList(dateTempList, 'percentage', huminityList);

  return (
    <div className="data-list">
      <h1>5 days forcast max temprature</h1>
      <BarChart chartData={maxChartData}></BarChart>
      <h1>5 days forcast min temprature</h1>
      <BarChart chartData={minChartData}></BarChart>
      <h1>5 days forcast huminity</h1>
      <PieChart chartData={humChartData}></PieChart>
    </div>
  );
};