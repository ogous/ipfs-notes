# IPFS Notes

This is a storage app for web3. Authenticated user can upload notes, files to IPFS using their wallets. This stack is fastest enabler to build IPFS apps.

## Tools

- Web framework: Next.js
- Rainbowkit with Siwe
- IPFS: go-ipfs with ipfs-client

## Features

- Persist data with private IPFS instance
- Modern UI with Next.js, Headless,ui and Tailwind
- Users sign notes for encryption
- File uploads

## Running the code

0. `./setup.sh` (copies your local environment variables and sets your swarm key, this will be done for you in the next step)
1. `npm run dev` (starts Next.js frontend/backend)
2. `docker compose up` (starts local IPFS on port 5001)

## Notes

The following error message is normal, it means you're running a private IPFS node

```text
ERROR   cmd/ipfs        ipfs/daemon.go:567      failed to bootstrap (no peers found): consider updating Bootstrap or Peering section of your config
```

Want to reset IPFS state? The IPFS data volume is persisted in `./local-data` you may also opt to destroy the Docker container
