import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltround = 10;
    const hashPassword = await bcrypt.hash(password, saltround);

    return hashPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
