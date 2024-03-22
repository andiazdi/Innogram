import { useForm } from "react-hook-form";
import {useRouter} from 'next/router'
import Link from "next/link";


const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter()
  
  const onError = (errors, e) => {};
  const onSubmit = async (data, e) => {
      const res = await fetch("http://localhost:3000/api/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(data)}
      )
      if (res.status == 200) {
        router.push('/');
      } else {
        let div = document.getElementById("incorrect")
        div.removeAttribute("hidden")
      }
    };

  return (  
  <form className="col-lg-5 offset-lg-3" onSubmit={handleSubmit(onSubmit, onError)}>
    <h2>Login</h2>
    <div className="form-outline mb-4">
      <label className="form-label">Username</label>
      <input {...register("login")} className="form-control"/>
    </div>
    <div className="form-outline mb-4">
      <label className="form-label">Password</label>
      <input {...register("password")} type="password" className="form-control" />
    </div>
    <Link href='/register'><div >Don&apost have account</div></Link>
    <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
    <div className="alert alert-danger" id="incorrect" role="alert" hidden>Incorrect credentials</div>
</form>
 );
};

export default LoginForm;