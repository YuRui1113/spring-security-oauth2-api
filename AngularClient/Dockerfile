###### Must run 'ng build -c production' to build at local before creating image ######

######  Use NgInx alpine image  ###### 
FROM nginx:stable-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy nginx config file
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy dist folder fro build stage to nginx public folder
COPY ./dist/angular-client /usr/share/nginx/html

# Start NgInx service
CMD ["nginx", "-g", "daemon off;"]