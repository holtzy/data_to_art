for i in $(ls ../ORIG/*) ; do

clean=$(echo $i | sed 's/.*ORIG\///' | sed 's/.jpg//' | sed 's/.png//')
echo $clean
cp $i tmp
convert tmp -resize 400x480 $clean.png
#convert -size 480x480 xc:#F8F9FA new.png  -gravity center -composite output.png
#mv output.png $FILE
#rm tmp.png new.png

done
