import React from 'react';
import { Text, Group } from 'react-konva';

const Info = (props) => {
  const { fps } = props;
  return (
    <Group>
      <Text>{fps}</Text>
    </Group>
  );
};

export default Info;
