
export default function Temp(props : any) {

  console.log(props);


  
  return (
    <div>
       <button onClick={() => props.close()}> close tem</button>    
    </div>
  )
}
