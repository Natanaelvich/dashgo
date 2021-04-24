import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Natanael Lima</Text>
          <Text color="gray.300" fontSize="small">
            taelima1997@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Natanael Lima"
        src="https://github.com/Natanaelvich.png"
      />
    </Flex>
  );
}

Profile.defaultProps = {
  showProfileData: true,
};
