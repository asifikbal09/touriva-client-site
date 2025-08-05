import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100  animate-fade-in">
      <Card className="w-full max-w-md">
          <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-center">Welcome to Touriva</h2>
          <p className="text-center text-gray-500">Create your account</p>

          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="name" placeholder="Full name" {...register("name")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" {...register("email")}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="********" {...register("password")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="phone" placeholder="+88012 1111 2222" {...register("phone")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" type="address" placeholder="Dhaka,Bangladesh" {...register("address")}/>
          </div>
          
          <Button type="submit" className="w-full">Login</Button>
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
