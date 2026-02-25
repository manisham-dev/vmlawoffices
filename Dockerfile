FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build


FROM node:22-alpine AS production

WORKDIR /app

COPY --from=build /app/dist/aglawfirm ./dist/aglawfirm

ENV PORT=4000
EXPOSE 4000

CMD ["node", "dist/aglawfirm/server/server.mjs"]
