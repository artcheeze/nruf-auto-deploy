now=$(date +'%d/%m/%Y'+'%T'); echo "-------$now------" &&
killall screen; echo "Terminate old screen" &&
cd /home/artcheeze/nruf-backend && 
git pull && npm install &&
echo "Cloned and Install Dependencies!" &&
screen -d -m node facade.js &&
echo "----------Success Deploy-----------" 
