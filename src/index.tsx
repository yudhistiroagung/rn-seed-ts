import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};
