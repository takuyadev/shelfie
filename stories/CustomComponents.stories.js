import React from 'react'; 
import BackButton from '../comps/BackButton';
import Text from '../comps/Text';
import RestartButton from '../comps/RestartButton';

export default {
    title: "My components",
}; 

export const MyText = () => <Text />; 
export const MyRestartButton = () => <RestartButton />;
export const MyBackButton = () => <BackButton />;