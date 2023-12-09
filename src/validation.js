const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$%#^&*])(?=.*[0-9]).{8,}$/;

// Validation object for all fields
const validate = {
    username: (value) => {
        if (!value) return { username: true, usernameError: "username field cannot be empty" };
        else {
          return value.trim().length < 6
            ? { username: true, usernameError: "username must be atleast 6 characters long." }
            : { username: false, usernameError: false }
        }
      },
      password: (value)=>{
        return passwordRegex.test(value)
          ? { password: false, passwordError: false }
          : { password: true, passwordError: "Minimum 8 characters, 1 uppercase, 1 lowercase, 1 symbol (@$%#^&*), 1 number (0-9)." }
      },
      cpassword: (value, password)=>{
          return (value !== password)?
                 {cpassword: true, cpasswordError: "password does not match"}:
                 { cpassword: false, cpasswordError: false }
      }   
}

export default validate;
