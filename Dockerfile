# Use a Linux image
FROM alpine:3.18

# install tools
RUN apk add --no-cache curl unzip ca-certificates

WORKDIR /app

# download linux amd64 pocketbase binary (change version if you want)
RUN curl -L -o /tmp/pb.zip https://github.com/pocketbase/pocketbase/releases/download/v0.22.14/pocketbase_0.22.14_linux_amd64.zip \
 && unzip /tmp/pb.zip -d /tmp/pb \
 && mv /tmp/pb/pocketbase /pocketbase \
 && chmod +x /pocketbase \
 && rm -rf /tmp/pb /tmp/pb.zip

# copy your project public folder and data/migrations if present
COPY pb_public /app/pb_public
# optional: copy initial pb_data or migrations if you want to include them
# COPY pb_data /app/pb_data
# COPY pb_migrations /app/pb_migrations

EXPOSE 8090

# make /app the working directory so pocketbase will find pb_public when serving
WORKDIR /app

# start pocketbase (serves pb_public in current working dir)
CMD ["/pocketbase", "serve", "--http=0.0.0.0:8090"]
