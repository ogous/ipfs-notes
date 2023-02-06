if [ ! -f ".env" ]; then
    echo "Starting setup..."
    echo "Generating IPFS swarm key..."
    GENERATED_KEY=$(docker run --rm -it --platform=linux/amd64 mattjtodd/ipfs-swarm-key-gen | tail -n 1)
    SED_OPTIONS=""

    echo "Copying environment variables"
    echo  "Generated Key is: $GENERATED_KEY"
    cp .env.example .env

    echo "Setting swarm key"
    sed -i $SED_OPTIONS "s/IPFS_SWARM_KEY=/IPFS_SWARM_KEY=$GENERATED_KEY/" .env
fi
echo "Setup complete (delete .env and run again to redo setup)"
