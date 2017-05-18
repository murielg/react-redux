import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';

function unitConversion(data, type) {
  switch (type) {
    case 'temperature':
      return _.round(_.subtract(_.multiply(average(data),9/5), 459.67));
    case 'pressure':
      return _.round(_.multiply(average(data),0.02952998751));
    case 'humidity':
      return _.round(average(data));
  }
  return;
}

function average (data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={40} width={90} data={props.data}>
        <SparklinesLine style={ props.colors} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{unitConversion(props.data, props.type)}</div>
    </div>
  );
}

