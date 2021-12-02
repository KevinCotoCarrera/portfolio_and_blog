import React from 'react'
import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import { animate } from 'framer-motion';
import link from 'next/link';

export default function CardProject({img, name, type, text, link}) {
  return (
    <Center py={6}>
      <Box
        w={['350px', '500px']}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        _hover={{
            rotate: '10',
            transition: '1s'
        }}>
        <Box
          height={['250', '300']}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={img}
            layout={'fill'}          />
        </Box>
        <Stack>
          <Text
            color={'pink.300'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {type}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {name}
          </Heading>
          <Text color={'gray.500'}
          >
            {text}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
         <Link href={link} className="text-gray-800 dark:text-gray-800">{link}</Link>
        </Stack>
      </Box>
    </Center>
  );
}