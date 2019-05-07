import React from 'react';
import { Button } from '../../ui/src/components/common/widgets';
const TodaysDate = () => {
  return (
    <div>
      {`Todays Date is ${Date()}`}
      <Button type='primary'>Update date</Button>
    </div>
  );
};
export default TodaysDate;
