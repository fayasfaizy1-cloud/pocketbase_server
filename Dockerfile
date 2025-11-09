# Use an official minimal image
FROM alpine:latest

# Set working directory
WORKDIR /app

# Copy PocketBase binary and data
COPY pocketbase.exe /app/pocketbase
COPY pb_data /app/pb_data
COPY pb_migrations /app/pb_migrations

# Expose PocketBase port
EXPOSE 8090

# Run PocketBase
CMD ["/app/pocketbase", "serve", "--http=0.0.0.0:8090"]
