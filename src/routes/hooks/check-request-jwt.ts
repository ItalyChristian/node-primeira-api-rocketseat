import type { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";

type JWTPayload = {
  sub: string
  role: 'student' | 'manager'
}

export async function checkRequestJWT(request: FastifyRequest, reply: FastifyReply) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return reply.status(401).send();
  }

  const token = authHeader.replace("Bearer ", "");

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET must be set.");
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload
    
    request.user = payload
  } catch {
    return reply.status(401).send();
  }
}
