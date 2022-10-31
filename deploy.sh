echo "Deploying changes..."
# Pull changes from the live branch
git pull

# Build the image with the new changes
docker build . -t 3mawyyy/2otty

# Shut down the existing containers
docker-compose down

# Start the new containers
docker-compose up -d
echo "Deployed!"
