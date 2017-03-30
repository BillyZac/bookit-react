import React from 'react';

import { storiesOf, action, linkTo } from '@kadira/storybook';

import Meeting from '../src/components/01-atoms/Meeting';
import Timeblock from '../src/components/01-atoms/Timeblock';
import Timeline from '../src/components/02-molecules/Timeline';
import Room from '../src/components/02-molecules/Room';

storiesOf('Room', module)
  .add('displays the name and timeline', () => {
    const exampleRoom = {
      name: 'Blue',
      meetings: [
        {
          startTime: '2017-03-24T15:00:00-04:00', // ISO8601 format YYYY-MM-DDTHH:mm:ssZ
          duration: '1.5', // hours
          isOwnedByUser: true,
        },
      ],
    };
    return <Room room={exampleRoom} />;
  });

storiesOf('Timeline', module)
  .add('with one meeting', () => {
    const exampleMeetings = [
      {
        startTime: '2017-03-24T07:00:00-04:00', // ISO8601 format YYYY-MM-DDTHH:mm:ssZ
        duration: '1.0', // hours
        isOwnedByUser: true,
      },
    ];
    return <Timeline meetings={exampleMeetings} />;
  });

storiesOf('Timeline', module)
  .add('with multiple meetings', () => {
    const exampleMeetings = [
      {
        startTime: '2017-03-24T07:00:00-04:00', // ISO8601 format YYYY-MM-DDTHH:mm:ssZ
        duration: '2.0', // hours
        isOwnedByUser: true,
      },
      {
        startTime: '2017-03-24T10:00:00-04:00', // ISO8601 format YYYY-MM-DDTHH:mm:ssZ
        duration: '4.0', // hours
        isOwnedByUser: false,
      },
    ];
    return <Timeline meetings={exampleMeetings} />;
  });

storiesOf('Timeblock', module)
  .add('displays a representation of an hour of time', () => (
    <Timeblock />
  ))
  .add('displays two timeblocks side by side', () => (
    <div><Timeblock /><Timeblock /></div>
  ));

storiesOf('Meeting', module)
  .add('is not owned by user', () => (
    <Meeting duration={1} />
  ))
  .add('is owned by user', () => (
    <Meeting duration={1} isOwnedByUser />
  ))
  .add('an hour and a half', () => (
    <Meeting duration={1.5} isOwnedByUser />
  ));
