now=$(date +'%d/%m/%Y'+'%T'); echo "-------$now------" &&
killall screen; echo "Terminate old screen" &&
cd /home/artcheeze/nruf-backend && 
art@bangmod59 | git pull &&
echo "Reposity-----cloned" &&
screen -d -m node facade.js &&
echo "----------Success Deploy-----------" 
