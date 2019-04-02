import React from 'react';
import { Text, Group } from 'react-konva';

const Info = (props) => {
  const { fps, timeDelta } = props.pointOfView;

  return (
    <Group x='10' y='-160'>
      <Text fontSize='16' fill='#ccc'  lineHeight='24' text={`FPS: ${fps}`} />
      <Text y='24' fontSize='16' fill='#ccc'  lineHeight='24' text={`MSPF: ${timeDelta}`} />
    </Group>
  );
};

export default Info;
