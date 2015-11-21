#!/bin/bash
OUTDIR=WEBM_OUT
mkdir -p $OUTDIR
while [[ "$1" != "" ]]; do
  DIR="$1"
  cd $DIR
  ffmpeg -y -pattern_type glob -framerate 30 -i "*.png" "../$OUTDIR/$DIR.webm"
  cd ..
  shift
done