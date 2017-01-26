#!/usr/bin/env bash

abort()
{
    rm preload.c preload.so
}

trap 'abort' 0

echo "int chown() { return 0; }" > preload.c && \
gcc -shared -o preload.so preload.c && \
LD_PRELOAD=$PWD/preload.so $@ && \

trap : 0

