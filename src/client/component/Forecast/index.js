// library
import React, { useContext, useEffect, useMemo } from 'react';

// context
import { MainContext } from '../../context/context';

// component
import { BarChart } from '../BarChart';
import { PieChart } from '../PieChart';

// scss
import forecastCSS from './forecast.module.scss';

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

export const Forecast = () => {
  const { newForecastData, isLoading } = useContext(MainContext);
  if( Object.keys(newForecastData).length === 0 ){ return <></> };

  const tmpForecastdata = newForecastData?.['forecast']?.['forecastday'];
  const newCity = newForecastData?.['location']?.['country'];
  const dateTempList = tmpForecastdata?.map((forecastdayItem) => { return forecastdayItem?.['date'] });
  const maxTempList = tmpForecastdata?.map((forecastdayItem) => { return Math.round(forecastdayItem?.['day']?.['maxtemp_c']) });
  const minTempList = tmpForecastdata?.map((forecastdayItem) => { return Math.round(forecastdayItem?.['day']?.['mintemp_c']) });
  const humidityList = tmpForecastdata?.map((forecastdayItem) => { return forecastdayItem?.['day']?.['avghumidity'] });
  const maxChartData = organizeBarChartList(dateTempList, 0, 50, 'temperature', maxTempList);
  const minChartData = organizeBarChartList(dateTempList, 0, 50, 'temperature', minTempList);
  const humChartData = organizePieChartList(dateTempList, 'percentage', humidityList);
  const loadStatusClassName = isLoading ? forecastCSS['loaded-data-title'] : forecastCSS['loading-data-title'];

  return (
    <div className={forecastCSS['forecast-container']}>
      <div className={forecastCSS['forecast-title']}>
        <div className={loadStatusClassName}>{newCity}</div>
        <div>5 days forecast max temprature</div>
      </div>
      <BarChart chartData={maxChartData}></BarChart>

      <div className={forecastCSS['forecast-title']}>
        <div className={loadStatusClassName}>{newCity}</div>
        <div>5 days forecast min temprature</div>
      </div>
      <BarChart chartData={minChartData}></BarChart>

      <div className={forecastCSS['forecast-title']}>
        <div className={loadStatusClassName}>{newCity}</div>
        <div>5 days forecast avghumidity</div>
      </div>
      <PieChart chartData={humChartData}></PieChart>
    </div>
  );
};