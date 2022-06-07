export function validateEmail(email) {
   const emailRegex =  /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
   return emailRegex.test(String(email).toLowerCase());
 }

export function validatePassword(password) {
   const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
   return senhaRegex.test(String(password));
 }
