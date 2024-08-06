import { ReactElement, useEffect } from "react";
import "@/app/styles/scss/layouts/default.scss";
import Button from "@/components/button";
import InputLabel from "@/components/input/Label";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin, type TSchemaLogin } from "@/app/utils/schema/login";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<TSchemaLogin>({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      password: '',
      username: ''
    }
  });

  const onSubmit = handleSubmit((values) => {
    console.log("berhasil login");
  });

  return (
    <div className='flex flex-col' style={{ minHeight: "calc(100vh - 80px)" }}>
      <div className='card w-11/12 lg:w-1/3 m-auto py-5 px-8'>
        <p className='font-bold text-center text-xl'>WELCOME</p>
        <form className='mt-8' onSubmit={onSubmit}>
          <InputLabel
            name='username'
            id='username'
            className='mb-4'
            placeholder='Username'
            label='Username'
            errorMsg={errors.username?.message}
            error={Boolean(errors?.username?.message)}
            value={watch('username')}
            onChange={(e) => setValue('username', e.target.value)}
          />
          <InputLabel
            id='password'
            className='mb-4'
            placeholder='Password'
            type='password'
            label='Password'
            errorMsg={errors.password?.message}
            error={Boolean(errors?.password?.message)}
            value={watch('password')}
            onChange={(e) => setValue('password', e.target.value)}
          />
          <div className='flex justify-center mt-2'>
            <Button
              label='Login'
              variant='primary'
              className='w-1/4'
              type='submit'
            ></Button>
          </div>
        </form>
      </div>
    </div>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <div className='wrap-default-layout '>{page}</div>;
};
export default LoginPage;
