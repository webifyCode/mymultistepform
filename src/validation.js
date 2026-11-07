const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Optional leading +, then 7-15 digits; spaces, dashes and brackets are allowed
// as separators (so the placeholder "+1 234 567 890" is valid).
const PHONE_REGEX = /^\+?[0-9]{7,15}$/;

export function validateField(name, value) {
  if (!value || value.trim() === "") {
    return "This field is required";
  }

  if (name === "email" && !EMAIL_REGEX.test(value.trim())) {
    return "Please enter a valid email";
  }

  if (name === "phone" && !PHONE_REGEX.test(value.replace(/[\s\-().]/g, ""))) {
    return "Please enter a valid phone number";
  }

  return "";
}
