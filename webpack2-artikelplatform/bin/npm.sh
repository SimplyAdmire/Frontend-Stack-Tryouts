#!/usr/bin/env bash

if [ "${1}" == "install" ]; then
    echo "[INFO] Use bin/yarn.sh instead, redirecting..."
    bin/yarn.sh $@
else
    docker run --rm -it \
        --network host \
        --entrypoint "/root/run.sh" \
        -v "$(pwd)/bin/docker/run-without-chown.sh:/root/run.sh" \
        -v "$(pwd):/app/" \
        -v "$(echo ~)/.yarn-cache:/root/.yarn-cache" \
        -v "$(echo ~)/.gitconfig:/root/.gitconfig" \
        -w "/app/" \
        simplyadmire/npm:latest \
        npm --unsafe-perm $@
fi
