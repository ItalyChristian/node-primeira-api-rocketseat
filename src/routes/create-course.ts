import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { db } from "../database/client.ts";
import { courses } from "../database/schema.ts";
import { checkRequestJWT } from "./hooks/check-request-jwt.ts";
import { checkUserRole } from "./hooks/check-roles.ts";
import { USER_ROLE } from "../utils/types.ts";
import z from "zod";

export const createCourseRoute: FastifyPluginAsyncZod = async (server) => {
  server.post("/courses", {
      preHandler: [
        checkRequestJWT,
        checkUserRole(USER_ROLE.MANAGER),
      ],
      schema: {
        tags: ["courses"],
        summary: "Create a course",
        description:
          "Essa rota recebe um título e cria um curso no banco de dados",
        body: z.object({
          title: z
            .string()
            .min(5, "Título precisa ter no mínimo 5 caracteres."),
        }),
        response: {
          201: z
            .object({ courseId: z.uuid() })
            .describe("Curso criado com sucesso!"),
        },
      },
    },
    async (request, reply) => {
      const courseTitle = request.body.title;

      const result = await db
        .insert(courses)
        .values({
          title: courseTitle,
        })
        .returning();

      return reply.status(201).send({ courseId: result[0].id });
    },
  );
};
