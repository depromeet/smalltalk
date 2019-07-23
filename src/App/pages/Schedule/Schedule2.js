import React, { Fragment } from 'react'; 
import RouteTemplate from 'App/components/common/RouteTemplate';
import ScheduleContainer from 'App/containers/Schedule/ScheduleContainer';

const Schedule = ({ isSchedule }) => {
  // const { isSchedule } = this.props;
  return (
    <Fragment>
      {
        isSchedule? 
        <ScheduleContainer /> 
        : 
        <RouteTemplate />
      }
    </Fragment>
  )
}

export default Schedule;