import type { FastifyRequest, FastifyReply } from "fastify";
import { getAuthenticatedFromRequest } from "../../utils/get-authenticated-user-from-request.ts";
import type { UserRole } from "../../utils/types.ts";

export function checkUserRole(role: UserRole) {
  return async function (request: FastifyRequest, reply: FastifyReply) {
    const user = getAuthenticatedFromRequest(request);

    if (user.role !== role) {
      return reply.status(401).send();
    }
  };
}
