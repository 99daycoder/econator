import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import logo from './econator.png'

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
export default function Results() {
  return (
    <div>
        <img src={logo} alt="horse" />
        How eco was your day?
            <div>
            <ReactSpeedometer
  value={500}
  segments={3}
  segmentColors={[
    "#bf616a",
    "#d08770",  
    "#a3be8c",
  ]}
  // startColor will be ignored
  // endColor will be ignored
/>
    </div>
    </div>
  )
}
