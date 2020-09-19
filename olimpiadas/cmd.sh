#!/bin/bash

for j in *gif *jpeg *jpg *webp *png; do
	if [[ ! -e src/$j.png ]]; then
		convert $j -resize 240x240\! src/$j.png; fi ; done
cd src

ffmpeg -threads 3 -framerate 6 -pattern_type glob -i '*.png' -profile:v high444 -level:v 5.1 -pix_fmt yuv444p -threads 3 -crf 0 -preset ultrafast -framerate 6 -filter_complex scale=240:240,setsar=sar=1/1,setdar=dar=1/1 -y ../../gif.mp4

cd ..
ffmpeg -i ../gif.mp4 -filter_complex "[0:v]split [a][b];[a] palettegen [p];[b][p] paletteuse" -f gif -y ../slideshow.gif

