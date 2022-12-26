import React, { useEffect, useState, useContext } from "react";
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";

import { validateUser, registerUser, loginUser } from "apis";
import { FooterButton, Modal } from "baseComponents";
import { UserDetails } from "components";
import { UserContext } from "contexts";
import { LOGIN_BUTTON_STATES, LOGIN_BUTTON_TEXTS, TEXT_CONTENT } from "../constants";
import { showErrorToast } from "../lib/toastifyHelpers";
import MainWrapper from "./MainWrapper";

export const Landing = () => {

  const { user, setLogin } = useContext(UserContext);

  const { register, formState: { errors, isValid }, getValues, handleSubmit, setValue } = useForm({ mode: "onChange" });

  const [userModalToggle, setUserModalToggle] = useState(!user.isLoggedIn);
  const [formState, setFormState] = useState(LOGIN_BUTTON_STATES.validate);
  const [loading, setLoading] = useState(false);

  // Control visibility of user modal based on user login state
  useEffect(() => {
    setUserModalToggle(!user.isLoggedIn);
  }, [user.isLoggedIn])

  // Reset form input values
  const resetAllInputs = () => {
    setValue("email", "");
    setValue("password", "");
    setFormState("validate");
  }


  // Handler to validate email before register or login
  const validateEmailHandler = async (data: Record<string, any>) => {
    const { email } = data;
    try {

      setLoading(true);
      const res: Record<string, any> = await validateUser(email);
      setFormState(res?.isRegistered ? LOGIN_BUTTON_STATES.login : LOGIN_BUTTON_STATES.register);

    } catch (error: any) {
      showErrorToast(error.message);
    } finally {
      setLoading(false);
    }
  }

  // Handlers to register a user and login after registration
  const registerUserHandler = async (data: Record<string, any>) => {
    const { email, password } = data;
    try {

      setLoading(true);
      const res: Record<string, any> = await registerUser(email, password);
      resetAllInputs();
      setLogin(res.token);

    } catch (error: any) {
      showErrorToast(error.message);
    } finally {
      setLoading(false);
    }
  }

  // Handler to login user
  const loginUserHandler = async (data: Record<string, any>) => {
    const { email, password } = data;
    try {
      setLoading(true);
      const res: Record<string, any> = await loginUser(email, password);
      resetAllInputs();
      setLogin(res.token);
    } catch (error: any) {
      showErrorToast(error.message);
    } finally {
      setLoading(false);
    }
  }

  // Handler to change form state to validate email if email field is changed later
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name && formState !== LOGIN_BUTTON_STATES.validate) {
      setFormState(LOGIN_BUTTON_STATES.validate);
      setValue("password", "");
    }
  }

  // Handlers to be called on submit based on form state
  const submitHandlers: Record<string, any> = {
    [LOGIN_BUTTON_STATES.validate]: validateEmailHandler,
    [LOGIN_BUTTON_STATES.register]: registerUserHandler,
    [LOGIN_BUTTON_STATES.login]: loginUserHandler
  }

  const footerButtons: FooterButton[] = [{
    text: loading ? "Please Wait..." : LOGIN_BUTTON_TEXTS[formState as keyof typeof LOGIN_BUTTON_TEXTS],
    onClick: handleSubmit(submitHandlers[formState]),
    loading,
    ...!isValid ? { disabled: true } : {},
  }];

  return (
    <div className="bg-slate-400 h-full w-full">
      <ToastContainer
        position="top-right"
        theme="dark"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />

      <Modal
        title={TEXT_CONTENT.userDetailsModalTitle}
        description={TEXT_CONTENT.userDetailsModalDescription}
        open={userModalToggle}
        content={
          <UserDetails
            errors={errors}
            values={getValues()}
            onChange={onChange}
            formState={formState}
            register={register} />
        }
        footerButtons={footerButtons}
      />

      {user.isLoggedIn && <MainWrapper />}
    </div>
  );
}

export default Landing;
