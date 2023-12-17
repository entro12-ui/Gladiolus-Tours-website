#!/bin/bash

for f in *.jpg; do
  cwebp -q 100 "$f" -o "${f%.*}.webp"
done
