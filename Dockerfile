# Start from a lightweight Alpine image
FROM alpine:latest

# Create working directory
WORKDIR /app

# Copy PocketBase binary from your local folder
COPY pocketbase /app/pocketbase

# Give execute permission
RUN chmod +x /app/pocketbase

# Expose PocketBase port
EXPOSE 8090

# Run PocketBase in serve mode
CMD ["/app/pocketbase", "serve", "--http=0.0.0.0:8090"]
