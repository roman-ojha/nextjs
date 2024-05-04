"use server";
// add the "use server" directive at the top of it. All functions within the file will be marked as Server Actions that can be reused in both Client and Server Components:

export async function createUserUsingFormData(
  formData: FormData
): Promise<string> {
  console.log("create User using form data");
  console.log(formData);
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // mutate data
  // revalidate cache
  return "user created";
}

export async function createUser(email: string, password: string) {
  console.log("create new user");
  console.log(email, password);
  return "user created";
}
