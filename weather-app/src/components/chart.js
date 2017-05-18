import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';

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
      <div>{average(props.data)}</div>
    </div>
  );
}

