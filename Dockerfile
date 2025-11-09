# Use Alpine to download and run PocketBase
FROM alpine:3.18

# Install curl & unzip
RUN apk add --no-cache curl unzip

# Download the latest PocketBase release
RUN curl -L -o /tmp/pb.zip https://github.com/pocketbase/pocketbase/releases/download/v0.22.14/pocketbase_0.22.14_linux_amd64.zip \
 && unzip /tmp/pb.zip -d /pb \
 && mv /pb/pocketbase /pocketbase \
 && chmod +x /pocketbase \
 && rm -rf /tmp/pb.zip /pb

# Copy your pb_data and migrations (if you have)
COPY ./pb_data /pb_data
COPY ./pb_migrations /pb_migrations

# Expose port
EXPOSE 8090

# Run PocketBase
CMD ["/pocketbase", "serve", "--http=0.0.0.0:8090"]
