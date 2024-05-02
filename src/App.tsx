import { useState } from 'react'
import Alert from './components/ui/Alert/Alert'
import './App.css'
import { Ban} from 'lucide-react';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{margin:"2rem"}}>
      <Alert type={"alert-error"}
        icon={<Ban size={20} />}
        title={'Something went wrong'}>
        <p>
          "Lorem ipsum dolor sit amet consectetur  adipisicing elit.{ " "}
          Quaerat <a href="/">laboriosm</a>dignissimos blanditiis
          minus at aliquam consectetur laborum officiis ipsum dolor similique!"
        </p>
        </Alert>
      <Alert type={"alert-warning"}
        icon={<Ban size={20} />}
        title={'Something went wrong'}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dignissimos blanditiis minus at aliquam consectetur laborum officiis ipsum dolor similique!"
      />
      <Alert type={"alert-info"}
        icon={<Ban size={18} />}
        title={'Something went wrong'}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dignissimos blanditiis minus at aliquam consectetur laborum officiis ipsum dolor similique!"
      />
      <Alert type={"alert-default"}
        icon={<Ban size={18} />}
        title={'Something went wrong'}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dignissimos blanditiis minus at aliquam consectetur laborum officiis ipsum dolor similique!"
      />
      <Alert type={"alert-success"}
        icon={<Ban size={18} />}
        title={'Something went wrong'}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dignissimos blanditiis minus at aliquam consectetur laborum officiis ipsum dolor similique!"
      />
    </div>
  )
}

export default App
