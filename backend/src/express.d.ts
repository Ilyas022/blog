declare namespace Express {
  interface Request {
    userId: string
  }
}

declare namespace jwt {
  interface JwtPayload {
    _id: string
  }
}
