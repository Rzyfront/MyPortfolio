import React from 'react'
import './ContactMe.css'
import { useForm, ValidationError } from '@formspree/react';
import { Input,useInput,Textarea,Button } from '@nextui-org/react';
import {RiMailSendLine} from 'react-icons/ri'
import { Contact_EN } from '../../Languages/EN';
import { Contact_ES } from '../../Languages/ES';
import { useSelector } from 'react-redux';


function ContactMe({setNotify}) {
    const { value, reset, bindings } = useInput("");
     const {Languages} = useSelector(state=>state)
  
  const {Title,Text,InputEmail,RegexEmail,GoodEmail,BadEmail,EmailMessage,MessagePlaceholder} = Languages === 'EN' ? Contact_EN : Contact_ES;

  const validateEmail = (value) => {
    return value.match(/^(?!$)[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? GoodEmail : BadEmail,
      color: isValid ? "primary" : "warning",
    };
  }, [value]);


  const [state, handleSubmit] = useForm("mrgvdyor");
  if (state.submitting && !state.succeeded){
    setNotify(true)
  }


  return (
    <div id='Contact' className='Container-ContactMe'>
      
      <div className='ContactMe-Box'>
      <div className='Left'>
      <h3 className='C-Title'>
      {Title}
      </h3>
      <p className='C-Text'>{Text}</p>
      </div>
      <div className='Rigth'>
      <form onSubmit={handleSubmit} className='C-Form' action="https://formspree.io/f/mrgvdyor" method="POST">
        <Input
          {...bindings}
          clearable
          shadow={false}
          onClearClick={reset}
          status={helper.color}
          color={helper.color}
          helperColor={helper.color}
          helperText={helper.text}
          type="email"
          label={InputEmail}
          name="email"
          placeholder={RegexEmail}
          id="email"
          className='C-Input'
        />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
  
      <Textarea
          id="message"
          name="message"
          label={EmailMessage}
          helperText="Please enter your message"
          placeholder={MessagePlaceholder}
          className='C-Input'
        />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <Button iconRight={<RiMailSendLine fill="currentColor"/>} type="submit" disabled={state.submitting}
      className='C-Input'>
        Enviar
      </Button>
    </form>
      </div>
      </div>

    </div>
  )
}

export default ContactMe