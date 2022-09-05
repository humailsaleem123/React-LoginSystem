import React , {useState , useEffect} from 'react'
import {Link , useNavigate} from 'react-router-dom';
import Axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Snackbar from "@mui/material/Snackbar";
import TextField from '@mui/material/TextField';
import { Formik , useFormik , Form } from "formik";
import * as Yup from 'yup';
import TextfieldWrapper from '../FormikFields/TextField';
import SubmitButtonWrapper from '../FormikFields/Submit2';
// import './register.css';

function LoginCopy() {

	const initialState = {
		userName:"",
		password:""
	}

// const [stateForm , setStateForm] = useState(initialState);


let Navigate = useNavigate();

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

// const handleChange = (prop) => (event) => {
//     setStateForm({
// 		 ...stateForm, 
// 		 [prop]: event.target.value 
// 		});
//   };
  
// console.log("fullName:", stateForm.fullName);

// console.log("userName:", stateForm.userName);
// console.log("password:", stateForm.password);

// const onSubmitAction = async() => {

// 	await Axios.post('http://localhost:4000/register',
// 	{
// 		fullname:stateForm.fullName,
// 		username:stateForm.userName,
// 		password:stateForm.password,

// 	}).then((res)=>{
// 			console.log("response",res);
// 			const userData = JSON.stringify(res.data.message);
// 			const color = JSON.stringify(res.data.severity);
// 			const removeCommas = color.replace(/['"]+/g, '')
// 				setStatus(userData);
// 				setAlert(removeCommas);
// 			// const userData = res.data;
// 			console.log("dada",userData);
			
// 	})

// }

console.log("check Alert", alert==="success");
console.log("check Alert", alert);
// console.log("remove commas",alert.replace(/['"]+/g, ''));

const formValidation = Yup.object().shape({
    
	userName: Yup.string()
	.max(30, '*Must be 30 characters or less')
	.required('*Required'),
	password: Yup.string()
	.min(5, '*Password Must be 5 characters long')
	.required('*Required'),


  })

  useEffect(() => {

	if(alert==='success'){
		setTimeout(()=>{
			Navigate('/dashboard');
		}, 3000)
	}

  }, [alert])
  




  return (



    <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">LOGIN</h2>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-6 col-lg-4">
					<div className="login-wrap p-0">
		      	<h3 className="mb-4 text-center">Don't have an account?</h3>
{/* 
				  onSubmit={onSubmitAction} */}

	<Formik 
initialValues={initialState}
validationSchema={formValidation}
validateOnMount
enableReinitialize={true}

onSubmit={ async (values , {resetForm} ) => {
  console.log(values);
  handleClick();
  
  await Axios.post('http://localhost:4000/login',
  {
	username:values.userName,
	password:values.password,

  }).then((res)=>{

	console.log("data",res.data);
	const userData = JSON.stringify(res.data.message);
	const colorSeverity = JSON.stringify(res.data.severity);
	const removeCommaseverity = colorSeverity.replace(/['"]+/g, '');

	let userInfoo;

	if(res.data.userName !== undefined){

		const userInfo = JSON.stringify(res.data.userName);
		userInfoo = userInfo.replace(/['"]+/g, '');
		localStorage.setItem('token',userInfoo);
	}


	if(res.status===400 || !res.data){
		window.alert("Invalid");

	}
	else{
		setStatus(userData);
		setAlert(removeCommaseverity);
		console.log("userInfoo",userInfoo);
		


	}
	


  })



}}

>
		
{formik => {



return(

	<Form>

							<div className="form-group">

		
							<TextfieldWrapper
								name='userName'
								label='userName'
							/>
							</div>

						<div className="form-group">
							
						<TextfieldWrapper
								name='password'
								label='password'
								type='password'
							/>
						
						</div>
						{/* 
						<div className="form-group">

							{status}
														
						</div> */}

						<div className="form-group">
							<SubmitButtonWrapper>
								Login
							</SubmitButtonWrapper>
						{/* <button type='submit'  className="form-control btn btn-primary submit px-3">Sign In</button> */}
						</div>

						</Form>
)
					}}
					</Formik>
						<div className="form-group d-md-flex">
						<div className="w-50">
							{/* <label className="checkbox-wrap checkbox-primary">Remember Me
											<input type="checkbox" defaultChecked />
											<span className="checkmark"></span>
										</label> */}
									</div>
									<div className="w-50 text-md-right">
										<Link to='/register'  style={{color: '#fff'}}>REGISTER</Link>
									</div>
						</div>

		

		      	{/* <form action="#" className="signin-form"  onSubmit={()=>{onSubmitAction(); handleClick();}}>
				 
	          </form> */}

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

export default LoginCopy;