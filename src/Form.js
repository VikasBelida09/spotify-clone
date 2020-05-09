import React,{useState} from 'react'
import Modal from "react-bootstrap/Modal";
import { Redirect } from 'react-router-dom'
import Navbar from './Navbar';

const Form=()=> {
    const [values, setValues] = useState({
        name:'',
        phone:'',
        issudate:'',
        returnDate:''
        })
    
    const{
     name,
     phone,
     issueDate,
     returnDate      
    } = values  
    
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccess, setSuccess]=useState('');
    const [redirect,setRedirect]= useState(false)
    const hideModal = () => {
        setIsOpen(false);
        setRedirect(true);
    };

    const handleChange=(name)=>(event)=>{
        setValues({ ...values, [name]: event.target.value });
    }
    const getFormValidated=()=>{
        const phoneStr=phone.toString();
        const issuedate=new Date(issueDate);
        const returndate=new Date(returnDate);
        console.log(phoneStr)
        console.log(issuedate, returndate)

        if(phoneStr.slice(0,3)!=="+91"){
           return false;        
        }
        if(issuedate.getTime()>returndate.getTime()){
            return false; 
        }
        return true;

            
    }
    const modalPopup=(flag)=>{
        return(
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                <Modal.Title>Booking Confirmation Pop Up</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        {flag?(<h3 className="alert alert-success mt-3 text-ceter">{name}, your Booking Registration SuccessFull</h3>):( <h3 className="alert alert-danger mt-3 text-center">Booking Registration Failed due to inconsitent details added by you</h3> )}
                    </Modal.Body>
                <Modal.Footer>
                <button className="btn  btn-lg btn-danger" onClick={hideModal}>Close</button>
                </Modal.Footer>
        </Modal>     
       )
    }
    const getRedirect = (redirect) => {
        if (redirect) {
          return <Redirect to="/"/>;
        }
      };
    const onSubmit=(event)=>{
        event.preventDefault();
        setIsOpen(true);
        if(getFormValidated()){
            setSuccess(true);
            return;
        }
        setSuccess(false)   
    }
    const customerForm=()=>{
        return (
            <form action="" style={{width:"300px", marginLeft:"40%" ,marginTop:"15%" }} >
                <h2>Customer Form</h2>
                 <div className="form-group">
                     <label htmlFor="Name">Name</label>
                     <input type="text"required name="name" id="Name" placeholder="Name" className="form-control" onChange={handleChange("name")}/>
                 </div>
                 <div className="form-group">
                     <label htmlFor="phonenum">Phone</label>
                     <input type="tel" required name="phone" id="phonenum" placeholder="phone num" className="form-control" onChange={handleChange("phone")}/>
                 </div>
                 <div className="form-group">
                     <label htmlFor="date">Issue Date</label>
                     <input type="date"  required name="issue" id="date"  className="form-control" onChange={handleChange("issueDate")}/>
                 </div>
                 <div className="form-group">
                     <label htmlFor="date">Return Date</label>
                     <input type="date" required name="return" id="date"  className="form-control" onChange={handleChange("returnDate")}/>
                 </div>
                 <button className="btn btn-block btn-primary" onClick={onSubmit}>Submit</button>
             </form>
        )
    }
    return (
        <div> 
              <Navbar/>
              {getRedirect(redirect)}
              {modalPopup(isSuccess)}
              {customerForm()}
             
        </div>
    )
}
export default Form