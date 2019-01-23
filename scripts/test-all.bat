:: windows 运行脚本
echo "windows run test!"
npm run lint && ^
npm run dist && ^
node ./tests/dekko/dist.test.js && ^
set LIB_DIR=dist npm test && ^
npm run compile && ^
node ./tests/dekko/lib.test.js && ^
set LIB_DIR=es && npm test && ^
set LIB_DIR=lib && npm test && ^
npm test && ^
npm run test-node
