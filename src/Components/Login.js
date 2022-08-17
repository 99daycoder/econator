

import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  import { useAuth0 } from "@auth0/auth0-react";
  

  import logo from './econator.png'
  
  export default function Login() {
    
    const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
    return ( 
      <Center py={6}>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
           <Box> <img src={logo} alt="horse" /></Box>
            <Text>Change the world with small steps, one at a time!</Text>
          </Stack>
  
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            
            <Button
              mt={10}
              w={'full'}
              bg={'#6D9B51'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}
              onClick={() => loginWithRedirect()}
              >
Login            </Button>

<Button
              mt={10}
              w={'full'}
              bg={'#D9D9D9'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}>
Signup Free            </Button>
          </Box>
        </Box>
      </Center>
      
    );
  }

