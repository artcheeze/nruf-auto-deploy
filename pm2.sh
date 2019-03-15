now=$(date +'%d/%m/%Y'+'%T'); echo "-------$now------" &&
pm2 delete facade; echo "Terminate old running" &&
cd /home/artcheeze/nruf-backend && 
art@bangmod59 | git pull &&
echo "[Reposity cloned]" &&
pm2 start facade.js &&
echo "----------Success Deploy-----------" 
