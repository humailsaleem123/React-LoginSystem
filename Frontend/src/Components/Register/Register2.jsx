import React , {useState} from 'react'
import {Link} from 'react-router-dom';
import Axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Snackbar from "@mui/material/Snackbar";
import TextField from '@mui/material/TextField';
import { Formik , useFormik , Form } from "formik";
import * as Yup from 'yup';

function Register() {

	const initialState = {
		fullName:"",
		userName:"",
		password:""
	}

const [stateForm , setStateForm] = useState(initialState);
const [status ,setStatus] = useState("");
const [alert, setAlert] = useState("");

const [open, setOpen] = React.useState(false);



const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


const AlertComponent = React.forwardRef((props, ref) =>
<Alert elevation={6} severity={(alert==='error')? 'error' : 'success'} variant="filled" {...props} ref={ref} /> 
 
 );


// const handleChange = (props) => (event) => {
//     setStateForm((values) => ({
//       ...values,
//       [props]: event.target.value
//     }));
//   };

const handleChange = (prop) => (event) => {
    setStateForm({
		 ...stateForm, 
		 [prop]: event.target.value 
		});
  };
  
console.log("fullName:", stateForm.fullName);
// console.log("userName:", stateForm.userName);
// console.log("password:", stateForm.password);

const onSubmitAction = async() => {

	await Axios.post('http://localhost:4000/register',
	{
		fullname:stateForm.fullName,
		username:stateForm.userName,
		password:stateForm.password,

	}).then((res)=>{
			console.log("response",res);
			const userData = JSON.stringify(res.data.message);
			const color = JSON.stringify(res.data.severity);
			const removeCommas = color.replace(/['"]+/g, '')
				setStatus(userData);
				setAlert(removeCommas);
			// const userData = res.data;
			console.log("dada",userData);
			
	})

}

console.log("check Alert", alert==="success");
console.log("check Alert", alert);
// console.log("remove commas",alert.replace(/['"]+/g, ''));







  return (


    <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">REGISTER</h2>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-6 col-lg-4">
					<div className="login-wrap p-0">
		      	<h3 className="mb-4 text-center">Already have an account?</h3>
{/* 
				  onSubmit={onSubmitAction} */}
		      	<form action="#" className="signin-form"  onSubmit={()=>{onSubmitAction(); handleClick();}}>
				  <div className="form-group">

	              <input  type="text" className="form-control" 
					onChange={handleChange('fullName')}
				  placeholder="FullName"
				 	value={stateForm.fullName} 
				  required />
	            </div>
		      		<div className="form-group">
		      			<input type="text" className="form-control" placeholder="Username"
						onChange={handleChange('userName')}
						value={stateForm.userName} 
						required />
		      		</div>
	    
				<div className="form-group">
	              <input id="password-field" type="password" className="form-control"
				   placeholder="Password"
				   onChange={handleChange('password')}
				   value={stateForm.password} 
				    required />
	              <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
	            </div>
{/* 
					<div className="form-group">

				  	{status}
													
					</div> */}

	            <div className="form-group">
	            	<button type='submit'  className="form-control btn btn-primary submit px-3">Sign In</button>
	            </div>
	            <div className="form-group d-md-flex">
	            	<div className="w-50">
		            	{/* <label className="checkbox-wrap checkbox-primary">Remember Me
									  <input type="checkbox" defaultChecked />
									  <span className="checkmark"></span>
									</label> */}
								</div>
								<div className="w-50 text-md-right">
									<Link to='/'  style={{color: '#fff'}}>LOGIN</Link>
								</div>
	            </div>
	          </form>

	          <p className="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
	          <div className="social d-flex text-center">
	          	<a href="#" className="px-2 py-2 mr-md-1 rounded"><span className="ion-logo-facebook mr-2"></span> Facebook</a>
	          	<a href="#" className="px-2 py-2 ml-md-1 rounded"><span className="ion-logo-twitter mr-2"></span> Twitter</a>
	          </div>
		      </div>
				</div>
			</div>
		</div>

		{/* {alert ? <Alert severity='error'>{status}</Alert> : <></> } */}
		<Snackbar open={open} autoHideDuration={3000}
        					onClose={handleClose}

							anchorOrigin={{
							   vertical: "bottom",
							   horizontal: "left"
							}}
							>

									<AlertComponent onClose={handleClose}
										>
										{status}
									</AlertComponent>

								
						</Snackbar>

	</section>


  )
}

export default Register;