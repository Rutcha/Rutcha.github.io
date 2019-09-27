#!/bin/bash

convert $1 -scale 32x32 favicon.bmp
mv favicon.bmp favicon.ico

for y in 57 114 72 144 60 120 76 152
do
	convert $1 -scale ${y}x${y} apple-touch-icon-${y}x${y}.png
done
for y in 196 96 32 16 128 
do
	convert $1 -scale ${y}x${y} favicon-${y}x${y}.png
done

cp favicon-128x128.png favicon-128.png

for y in 144 70 150 310 
do
	convert $1 -scale ${y}x${y} mstile-${y}x${y}.png
done

montage $1 $1 -tile 2x1 -geometry +0+0 /tmp/tile.png
convert  /tmp/tile.png -scale 310x150 mstile-310x150.png

for z in *png
do
	optipng -o7 -strip all $z
done
