import { Button } from 'react-bootstrap'
import './App.css'
import { useState } from 'react'
function App() {
  const [color, setColor] = useState();
  return (
    <>
      <div className={color} style={{ height: '100vh', background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 className='mb-0' style={{ fontFamily: 'fantasy' }}>Background</h2>
        <h1 className='mb-3' style={{ fontFamily: 'fantasy' }}>_C o l o r  C h a n g e_</h1>
        <div >
          <Button className='fw-bolder' onClick={() => setColor('bg-primary')} variant="primary">Blue</Button>{' '}
          <Button className='fw-bolder' onClick={() => setColor('bg-secondary')} variant="secondary">Gray</Button>{' '}
          <Button className='fw-bolder' onClick={() => setColor('bg-success ')} variant="success">Green</Button>{' '}
          <Button className='fw-bolder' onClick={() => setColor('bg-warning')} variant="warning">Yellow</Button>{' '}
          <Button className='fw-bolder' onClick={() => setColor('bg-danger')} variant="danger">Red</Button>{' '}
          <Button className='fw-bolder' onClick={() => setColor('bg-info')} variant="info">Sky Blue</Button>{' '}
        </div>
      </div>
    </>
  )
}

export default App