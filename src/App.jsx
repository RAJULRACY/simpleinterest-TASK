
import { TextField,Stack,Button} from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {
  
  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)

  const[invaildPrinciple,setinvaildPrinciple] = useState(false)
  const[invaildRate,setinvaildRate] = useState(false)
  const[invaildYear,setinvaildYear] = useState(false)

  const validateInput=(inputTag)=>{
    console.log(inputTag,typeof inputTag);
    const{name,value}=inputTag
    console.log(!!value.match(/^\d+(\.\d+)?$/));
    console.log(!!value.match(/^\d+(\.\d+)?$/));

  if(name=='principle'){
      setPrinciple(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvaildPrinciple(false)
    }else{
      setinvaildPrinciple(true)
    }
  }else if(name=="rate"){
    setRate(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvaildRate(false)
    
  }else{
    setinvaildRate(true)

  }
}else if(name=="year"){
  setYear(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvaildYear(false)

}else{
  setinvaildYear(true)
}
}
  }
const handleCalculater=(e)=>{
  e.preventDefault()
  console.log("Button Clicked");
  if(principle && rate && year){
    setInterest(principle*rate*year/100)
  }else{
    alert("Please fill the form completly")
  }
}

const handleReset=()=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setinvaildPrinciple(false)
  setinvaildRate(false)
  setinvaildYear(false)
}

  
  return (
    <>
    <div style={{width:'100%',minHeight:"100vh"}} className='d-flex justify-content-center aling-item-center bg-dark'>
      <div className='bg-light p-5 rounded'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple Interest Easily !</p>
        <div className='bg-warning p-5 rounded text-center'>
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-5'>

          {/* Principle Amount */}
          <div className='mb-3'> 
          <TextField value={principle || ""} name='principle' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ principle Amount" variant="outlined" />
          </div>

          {/* Invalid principle */}
          {invaildPrinciple && <div className='text-danger fw-border mb-3'>Invalid Principle</div>
          }

          {/* Rate */}
          <div className='mb-3'> 
          <TextField value={rate || ""} name='rate' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-rate" label="₹ % Rate" variant="outlined" />
          </div>

          {/* Invalid Rate */}
          {invaildRate && <div className='text-danger fw-border mb-3'>Invalid Rate</div>
          }

          {/* Year  */}
          <div className='mb-3'> 
          <TextField value={year||""} name='year' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-year" label="₹ Time Period (Yr)" variant="outlined" />
          </div>

          {/* Invalid Year */}
          {invaildYear && <div className='text-danger fw-border mb-3'>Invalid Year</div>
          }

          {/* Buttons */}
          <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculater} disabled={invaildPrinciple||invaildRate||invaildYear} variant="contained" style={{width:"50%",height:"70px"}} className='bg-dark'>Calculate</Button>
              <Button onClick={handleReset} variant="outlined" style={{width:"50%",height:"70px"}} className='borger border-dark text-dark'>Reset</Button>
          </Stack>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
