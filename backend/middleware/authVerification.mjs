import jwt from "jsonwebtoken";

//protected routes token based

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = await jwt.verify(
      req.headers.authorization,
      process.env.SECRET_KEY
    );
    next();
  } catch (error) {
    console.log(error);
  }
};
