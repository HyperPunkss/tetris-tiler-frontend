import Grid from '@/components/Grid'
import axios from 'axios'

export default function Home() {
  var data = JSON.stringify({
    x: 5,
    y: 5,
    holes: [{x: 2, y:2}],
    allow_rotations: true,
    allow_flips: false,
    shapes: ["T", "L"]
  })

  // var config = {
  //   method: 'post',
  //   url: 'api',
  //   data: data
  // }
  
  axios.post('/api/user', data).then((response)=>{
    const data = response.data
    console.log(response)
  }, (error)=>{
    console.log(error);
  })
  
  return (
    <div>
         <Grid rows={3} columns={21} />
    </div>
  )
}

