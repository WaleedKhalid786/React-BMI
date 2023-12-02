import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Input() {
    const [weight,setWeight] = useState('')
    const [height,setHeight] = useState('')
    const [bmi,setBmi] = useState('')
    const [healthy,setHealthy] = useState('')

  let avgBmi = (e)=>{
    
   e.preventDefault()

    if(weight===0 || height===0){
        alert('Please Enter the valid value')
    }
    else{
        let bmi =(weight/((height*0.0254)*(height*0.0254)))
        setBmi(bmi.toFixed(1))

        if(bmi<18.5){
            setHealthy('You are Under Weight')
        }
        else if(bmi>=18.5 && bmi<=24.9){
            setHealthy('Your Weight is Normal')
        }
        else{
            setHealthy('You are Over Weight')
        }
    }
  }
  // Reload function
  let reload = () =>{
    window.location.reload()
  }

  return (
    <div>
        <form className='button1' onSubmit={avgBmi}>
           <Stack spacing={2} direction="row">
      <TextField value={weight} onChange={(e)=>{setWeight(e.target.value)}} id="outlined-basic" label="Weight" variant="outlined" />
      <TextField value={height} onChange={(e)=>{setHeight(e.target.value)}} id="outlined-basic" label="Height" variant="outlined" />
      <Button type='submit' variant="contained" color='success'>Submit</Button>
      <Button onClick={reload} type='reload' variant="contained" color='success'>Reset</Button>
      
      </Stack>
      <center><h3>Your BMI is:{bmi}</h3></center>
      <center><h3>{healthy}</h3></center>
      </form>
    </div>
  )
}

export default Input