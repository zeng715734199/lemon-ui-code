rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:zeng715734199/Lemon-UI.git &&
git push -f -u origin master &&
cd -
echo https://zeng715734199.github.io/Lemon-UI/#/
