import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { setUser, type TUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";



const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues:{
      email:"admin@example.com",
      password:"admin123"
    }
  });
  const [login] = useLoginMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit:SubmitHandler<FieldValues> =async (credentials) => {
    const toastId = toast.loading("Logging in...")
    try{

      const res = await login(credentials).unwrap();
      console.log(res);
      const decodedUser = verifyToken(res.token) as TUser;
      dispatch(setUser({ user: decodedUser, token: res.token}));
      toast.success("Logged in successfully.",{id:toastId,duration:2000})
      navigate(`/`)
    }catch(err){
      toast.error("Something went wrong.",{ id:toastId,duration:2000})
      console.log(err)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100  animate-fade-in">
      <Card className="w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>

        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-center">Welcome to Touriva</h2>
          <p className="text-center text-gray-500">Login to your account</p>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" {...register("email")}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="********" {...register("password")}/>
          </div>
          <Button type="submit" className="w-full">Login</Button>
          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link className="text-blue-600" to="/signup">
              Create Account
            </Link>
          </p>
        </CardContent>
        </form>
      </Card>
    </div>
  );
};
export default Login;
