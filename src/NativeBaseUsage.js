import React from 'react';
import {
  Center,
  NativeBaseProvider,
  HStack,
  Box,
  Text,
  Spacer,
} from 'native-base';

export default NativeBaseUsage = () => {
  return (
        
    <NativeBaseProvider>
      <Center flex={1} bg="coolGray.700">
           
        <Box bg="blueGray.50" p="5" w="296" rounded="8">
          <HStack alignItems="flex-start">
            <Text fontSize="12" color="gray.500" fontWeight="medium">
              Business
            </Text>
            <Spacer />
            <Text fontSize="10" color="gray.400">
              1 month ago
            </Text>
          </HStack>
          <Text mt="3" fontWeight="medium" fontSize="20">
            Marketing License
          </Text>
          <Text mt="2" fontSize="14" color="gray.500">
            Unlock powerfull time-saving tools for creating email delivery and
            collecting marketing data
          </Text>
          <Text mt="6" fontSize="12" fontWeight="medium" color="cyan.600">
            Read More
          </Text>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};
