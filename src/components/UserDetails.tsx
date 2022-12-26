import { Input } from "baseComponents";
import { LOGIN_BUTTON_STATES } from "../constants";

const validationSchema = {
  email: {
    required: "Email can not be empty",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address"
    }
  },
  password: {
    required: "Password can not be empty",
  },
  confirmPassword: {
    required: "Confirm password can not be empty"
  }
}

export const UserDetails = ({ register, errors, formState, onChange, values }: any) => {

  const emailRegister = register("email", validationSchema.email);

  return (
    <div className="my-6 flex flex-col gap-4">
      <Input
        placeholder="johndoe@gmail.com"
        error={errors.email?.message as string}
        autoComplete="off"
        label="Email"
        {...emailRegister}
        onChange={(e) => {
          emailRegister.onChange(e);
          onChange(e);
        }}
      />

      {
        [
          LOGIN_BUTTON_STATES.login,
          LOGIN_BUTTON_STATES.register
        ].includes(formState) && (
          <Input
            type="password"
            placeholder="********"
            error={errors.password?.message as string}
            label="Password"
            autoFocus
            {...register("password", validationSchema.password)} />
        )
      }

      {
        [LOGIN_BUTTON_STATES.register].includes(formState) && (
          <Input
            type="password"
            placeholder="********"
            error={errors.confirmPassword?.message as string}
            label="Confirm Password"
            {...register("confirmPassword", {
              ...validationSchema.confirmPassword,
              validate: (value: string) => {
                const { password } = values;
                return value === password || "Passwords do not match"
              }
            })} />
        )
      }

    </div>
  );
}

export default UserDetails;
