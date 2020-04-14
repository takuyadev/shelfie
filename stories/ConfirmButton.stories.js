import React, { Component } from 'react';
import ConfirmButton from '../comps/ConfirmButton';
import Textbox from '../comps/Textbox';


export default {
    title:"Simon - Confirm button, Textbox",
    component : ConfirmButton,
    component: Textbox
}

export const MyConfirmbutton = () => <ConfirmButton />;
export const MyTextbox = () => <Textbox />;