#!/bin/bash

echo "Checking for icu4c dependency..."

# Check if the library file exists
if [ ! -f "/opt/homebrew/opt/icu4c/lib/libicui18n.74.dylib" ]; then
  echo "Library missing, installing icu4c..."
  
  # Check if brew is installed
  if ! command -v brew &> /dev/null; then
    echo "Homebrew not found. Please install Homebrew first."
    exit 1
  fi
  
  # Install icu4c
  brew install icu4c
  
  # Make sure we have the right version
  brew link --force icu4c
else
  echo "icu4c library found at the expected location."
fi

# Create symbolic link if needed
if [ ! -L "/opt/homebrew/opt/icu4c/lib/libicui18n.74.dylib" ] && [ -f "/opt/homebrew/opt/icu4c/lib/libicui18n.dylib" ]; then
  echo "Creating symbolic link for libicui18n.74.dylib..."
  sudo ln -sf /opt/homebrew/opt/icu4c/lib/libicui18n.dylib /opt/homebrew/opt/icu4c/lib/libicui18n.74.dylib
fi

echo "Done. Please restart your Node.js server." 