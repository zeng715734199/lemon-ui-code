git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@gitee.com:zeng715734199/lemon-source-code.git &&
git push -f -u origin main &&
cd -
echo https://zeng715734199.github.io/Lemon-UI/#/
