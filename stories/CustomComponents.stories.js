import React from 'react'; 
import BackButton from '../comps/BackButton';
import Text from '../comps/Text';
import RestartButton from '../comps/RestartButton';
import Solution from '../pages/Solution'; 

export default {
    title: "Emma - Restart Button, Back Button",
    
}; 

export const MyText = () => <Text />; 
export const MyRestartButton = () => <RestartButton />;
export const MyBackButton = () => <BackButton />;
export const SolutionPage = () => <Solution />
