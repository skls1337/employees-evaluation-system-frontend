import React,{useState} from 'react'
import '../GradesListComponent/GradesList.css'
import GradeWorker from '../GradeWorkerComponent/GradeWorker'

const Worker = ({worker}) => {
    const [show,setShow]=useState(false)
    return (
        <div className="col-lg-4 container">
        <div className="background" onClick={()=>setShow(!show)}>
          <article className="grade-container">
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
              className="grade-img"
            />
            <span class="grade-title-key">{worker.fullName}</span>
          </article>
        </div>
        {show?<GradeWorker worker={worker}/>:null}
      </div>
    )
}

export default Worker
