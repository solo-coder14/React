import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (t) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, t * 1000);
    })
  }

  const onSubmit = async (data) => {
    // await delay(2)
    // console.log(data)
    // if(data.username !== "woafi"){
    //   setError("myform",{message: "your form is not in good order"}) 
    // }

    let url = await fetch("http://localhost:3000/", {method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data),
    })
    let res = await url.text()
    console.log(data, res)
  }


  return (
    <>{isSubmitting && <div className="loading">Loading...</div>}

      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {/* <input {...register("username",{required: true, minLength: 3, maxLength: 8})} type="text" />
          {errors.username && <div>there are some error in username</div> } */}

          <input {...register("username", { 
            required: { 
              value: true, 
              message: "The field is required" 
            }, 
            minLength: { value: 3, message: "min length is 3" }, maxLength: { value: 8, message: "max length is 8" } 
            })} 
          type="text" />
          {errors.username && <div className='red'>{errors.username.message}</div>}

          <br />
          <input {...register("password")} type="password" />
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App





// import { useForm } from "react-hook-form";

// function App() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm();

  

//   const onSubmit = async (data) => {
//     let url = await fetch("http://localhost:3000/", {method: "POST",
//       headers: {
//         "Content-Type": "application/json", 
//       },
//       body: JSON.stringify(data),
//     })
//     let res = await url.text()
//     console.log(data, res)
//   }


//   return (
//     <>{isSubmitting && <div className="loading">Loading...</div>}

//       <div className="container">
//         <form action="" onSubmit={handleSubmit(onSubmit)}>
//           <input {...register("username", { required: { value: true, message: "The field is required" }, minLength: { value: 3, message: "min length is 3" }, maxLength: { value: 8, message: "max length is 8" } })} type="text" />
//           {errors.username && <div>{errors.username.message}</div>}
//           <input disabled={isSubmitting} type="submit" value="submit" />
//           {errors.myform && <div className='red'>{errors.myform.message}</div>}
//         </form>
//       </div>
//     </>
//   )
// }

// export default App
