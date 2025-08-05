import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import {
  useLoginMutation,
  useSignupMutation,
} from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { verifyToken } from "@/utils/verifyToken";
import { setUser, type TUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const [signup] = useSignupMutation();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<FieldValues> = async (userInfo) => {
    const toastId = toast.loading("Loading..");
    try {
      const res = await signup(userInfo).unwrap();
      if (res.success === true && res.statusCode === 201) {
        toast.success("User Signup successfully.", {
          id: toastId,
          duration: 2000,
        });
        toast.success("Login process running.", {
          id: toastId,
          duration: 2000,
        });
        const credentials = {
          email: userInfo.email,
          password: userInfo.password,
        };
        const loggedUser = await login(credentials).unwrap();
        console.log(loggedUser);
        const decodedUser = verifyToken(loggedUser.token) as TUser;
        dispatch(setUser({ user: decodedUser, token: loggedUser.token }));
        toast.success("Logged in successfully.", {
          id: toastId,
          duration: 2000,
        });
        navigate(`/`);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something want wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100  animate-fade-in">
      <Card className="w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-center">
              Welcome to Touriva
            </h2>
            <p className="text-center text-gray-500">Create your account</p>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="name"
                placeholder="Full name"
                {...register("name")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                {...register("password")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="phone"
                placeholder="+88012 1111 2222"
                {...register("phone")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                type="address"
                placeholder="Dhaka,Bangladesh"
                {...register("address")}
              />
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link className="text-blue-600" to="/login">
                Login
              </Link>
            </p>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
