FROM strapi/strapi

# Create app directory
WORKDIR /app
ADD . /app/

# global install & update
RUN npm install
RUN npm run-script build



# start command
CMD [ "npm", "run", "develop" ]