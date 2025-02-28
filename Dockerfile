# Use an ARM64 Ubuntu base image
FROM arm64v8/ubuntu:20.04

# Install build tools and GTK development libraries
RUN apt-get update && apt-get install -y \
    build-essential \
    pkg-config \
    libgtk-3-dev

# Set the working directory
WORKDIR /app

# Copy the source code into the container
COPY hello.c .

# Compile the source code into an executable named vpn_executable
RUN gcc -o vpn_executable hello.c $(pkg-config --cflags --libs gtk+-3.0)

# Optional: Set the default command (not used for building)
CMD ["./vpn_executable"]
