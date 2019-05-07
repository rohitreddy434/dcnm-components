import React from 'react';
import { Button } from 'antd';
const TodaysDate = () => {
  return (
    <div>
      {`Todays Date is ${Date()}`}
      <Button type='primary'>Update date</Button>
    </div>
  );
};
export default TodaysDate;
