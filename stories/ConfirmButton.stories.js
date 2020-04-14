import React, { Component } from 'react';
import ConfirmButton from '../Simon/ConfirmButton';
import Textbox from '../Simon/Textbox';


export default {
    title:"Simon Confirm button, Textbox",
    component : ConfirmButton,
    component: Textbox
}

export const MyConfirmbutton = () => <ConfirmButton />;
export const MyTextbox = () => <Textbox />;