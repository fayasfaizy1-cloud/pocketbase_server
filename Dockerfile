# Use Alpine Linux
FROM alpine:latest

# Install dependencies
RUN apk add --no-cache ca-certificates

# Copy PocketBase binary to container
WORKDIR /app
COPY ./pocketbase ./

# Create data folder
RUN mkdir -p /app/pb_data

# Expose port 10000
EXPOSE 10000

# Run PocketBase
CMD ["./pocketbase", "serve", "--http", "0.0.0.0:10000"]
