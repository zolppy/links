FROM node:18-alpine
WORKDIR /src/app
COPY package.json yarn.lock /src/app/
RUN yarn install --freeze-lockfile
COPY . .
ENV PORT 3000
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]