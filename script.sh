#!/bin/bash

echo "
#   ───────────────────────────── Start script ─────────────────────────────
"

# Deleting files recursively on aws s3 bucket
echo "Do you want to delete files on S3? Y/yes|N/no"
read confirm01

case "$confirm01" in
[Yy] | [Yy][Ee][Ss])
  echo "Deleting objects in S3"
  if aws s3 rm s3://country.mavericksbalitaan.com/ --recursive; then
    echo "Done deleting."
    echo "Building production."
    yarn build
    echo "Done building."
    echo "Copying objects in S3"
    aws s3 cp ./build/ s3://country.mavericksbalitaan.com/ --recursive
    echo "Done copying."
  fi
  ;;
[Nn] | [Nn][Oo])
  exit 1
  ;;
*)
  echo default
  ;;
esac

echo "
#   ────────────────────────────── End script ──────────────────────────────
"
