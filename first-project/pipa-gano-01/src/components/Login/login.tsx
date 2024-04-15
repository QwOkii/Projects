import{ Formik,Form,Field,ErrorMessage }from 'formik'
import { connect, useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { StateType } from '../../type/state'



const Login = (props:any) =>{

    type ValuesType={
        email:string ,
        password:string,
        rememberMe:boolean
        captchaURL:string|null
    }
    const captcha = useSelector((u:StateType)=>u.auth.captchaURL)
    const dispatch =useDispatch()
    

    return(
        <div>
            <h1>login</h1>
            <div>
                <Formik
                initialValues={{email:'',password:'',rememberMe:false,captchaURL:''}}
                
                onSubmit={(values:ValuesType)=>{
                    const {email,password,rememberMe,captchaURL }=values
                    dispatch( login(email,password,captchaURL,rememberMe))
        
                }}
                //validationSchema={loginFormShema}
                >
                    <Form >
                        <div>
                            <Field type={'text'} name={'email'} placeholder={'e-mail'}></Field>
                        </div>
                        <ErrorMessage name='email' component='div'/>
                        <div>
                            <Field type={'password'} name={'password'} placeholder={'password'}></Field>
                        </div>
                        <ErrorMessage name='password' component='div'/>
                        <div>
                            <Field type={'checkbox'} name={'rememberMe'}></Field>
                            <label htmlFor={"rememberMe"}>rememberMe</label>
                        </div>
                        <button type="submit">Log in</button>
                        {captcha !==null&&
                            <div>
                            is captcha <img src={captcha} alt="" />
                            <Field name={'captchaURL'} />
                            </div>
                        }
                    </Form>
                </Formik>
            </div>
        </div>
    )
} 


 

export default connect(null,{login})(Login);