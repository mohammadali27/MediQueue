"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries());
    console.log(user);

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      // image: user.image,
    });

    if (data) {
      router.push("/");
    }
    console.log({ data, error });
  };
  return (
    <div className="items-center mx-auto p-10">
      <div className="">
        <h1 className="font-bold text-2xl text-center my-3">Create Account</h1>
      </div>
      <Card className="max-w-7xl mx-auto items-center">
        <Form
          className="flex w-96 flex-col gap-4"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={onSubmit}
        >
          <TextField isRequired name="name" type="name">
            <Label>Name</Label>
            <Input placeholder="Mohammad Ali" />
            <FieldError />
          </TextField>
          {/* <TextField isRequired name="image" type="url">
            <Label>Image uri</Label>
            <Input placeholder="https//:image" />
            <FieldError />
          </TextField> */}

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="mt-5 text-center">
            <Button className="w-full" variant="primary" type="submit">
              <Check />
              Create Account
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterPage;
