import React from 'react'
import { SpinnerCircular } from 'spinners-react';
import { BarLoader } from 'react-spinners';

const Loading = ({loading}) => {
  return <BarLoader size={8}  color='#EB5E28' enabled={loading.toString()}/>
}

export default Loading;