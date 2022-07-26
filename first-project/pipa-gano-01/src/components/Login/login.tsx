import{ Formik,Form,Field,ErrorMessage }from 'formik'
import { connect, useDispatch } from 'react-redux'
import { login } from '../../redux/auth-reducer'



const Login = (props:any) =>{

    type ValuesType={
        email:string ,
        password:string,
        rememberMe?:boolean
    }
    const dispatch =useDispatch()
    const  submit = (values:ValuesType)=>{
        dispatch( login(values.email,values.password,values.rememberMe))
        
    }

    return(
        <div>
            <h1>login</h1>
            <div>
                <Formik
                initialValues={{email:'',password:'',rememberMe:false}}
                validate={ values=>{
                    const errors:ValuesType={email:'',password:'',rememberMe:undefined}
                    if(!values.email){
                        errors.email ='Required'
                    }
                    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                        errors.email ='Invalid Email addres'
                    }
                    return errors
                }}
                onSubmit={submit}
                //validationSchema={loginFormShema}
                >
                    {propsformik=> (<Form >
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
                        <button type={"submit"}>Log in</button>
                    </Form>)}
                </Formik>
            </div>
        </div>
    )
} 


 

export default connect(null,{login})(Login);