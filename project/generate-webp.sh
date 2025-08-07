#!/bin/bash

INPUT_DIR="$1"

if [ -z "$INPUT_DIR" ]; then
  echo "Usage: $0 path/to/folder"
  exit 1
fi

# Ensure input is a directory
if [ ! -d "$INPUT_DIR" ]; then
  echo "Error: '$INPUT_DIR' is not a directory"
  exit 1
fi

# Sizes
THUMB_WIDTH=300
MEDIUM_WIDTH=800
FULL_WIDTH=1600
BLUR_WIDTH=20

# Process images
for file in "$INPUT_DIR"/*.{jpg,jpeg,png,JPG,JPEG,PNG}; do
  [ -e "$file" ] || continue  # Skip if no match

  filename=$(basename -- "$file")
  name="${filename%.*}"
  dir=$(dirname "$file")

  echo "Processing $filename..."

  convert "$file" -resize ${THUMB_WIDTH}x "${dir}/${name}-thumb.webp"
  convert "$file" -resize ${MEDIUM_WIDTH}x "${dir}/${name}-medium.webp"
  convert "$file" -resize ${FULL_WIDTH}x "${dir}/${name}-full.webp"
  convert "$file" -resize ${BLUR_WIDTH}x "${dir}/${name}-blur.webp"
done

echo "✅ All images processed."
