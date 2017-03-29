import React from 'react';

import { storiesOf, action, linkTo } from '@kadira/storybook';

import Meeting from '../src/components/01-atoms/Meeting';
import Timeline from '../src/components/02-molecules/Timeline';
import Room from '../src/components/02-molecules/Room';

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

storiesOf('Timeline', module)
  .add('with one meeting', () => {
    const exampleMeetings = [
      {
        startTime: '2017-03-24T15:00:00-04:00', // ISO8601 format YYYY-MM-DDTHH:mm:ssZ
        duration: '1.5', // hours
        isOwnedByUser: true,
      },
    ];
    return <Timeline meetings={exampleMeetings} />;
  });

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
