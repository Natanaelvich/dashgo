import { useState } from 'react';
import { Radio, RadioGroup, Stack, Switch } from '@chakra-ui/react';

export default function Home() {
  const [value, setValue] = useState<string>('1');
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
        <Switch size="lg" />
      </Stack>
    </RadioGroup>
  );
}
