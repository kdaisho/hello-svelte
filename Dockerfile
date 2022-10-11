FROM node:18.9.1-alpine3.15 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build && npm prune --production

FROM node:18.9.1-alpine3.15
USER node:node
WORKDIR /app
COPY --from=builder --chown=node:node /app/build ./build
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node package.json .
ENV PORT 5050
ENV NODE_ENV=production
EXPOSE 5050
CMD ["node", "build"]
