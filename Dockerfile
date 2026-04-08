FROM node:24-alpine
COPY . .
RUN yarn
CMD ["yarn", "start"]