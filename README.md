# npm link error
error report.   
see [You can finally "npm link" packages that contain peer dependencies!](https://chevtek.io/you-can-finally-npm-link-packages-that-contain-peer-dependencies/)

# reproduction
### run docker container
```bash
./docker.sh
```

### exec node app in container
```bash
cd app
node .
```

success
```
Message: Library init
Message: Library call
Message: App init
Message: SUCCESS!!
```

### npm link
```bash
cd app
npm link ../libs/sample-library/
node .
```

error
```
Error: Cannot find module 'colors'
```

# resolution
### add --preserve-symlinks  
see [preserve-symlinks](https://nodejs.org/docs/latest-v12.x/api/cli.html#cli_preserve_symlinks)  
in webpack, see [resolve.symlinks](https://webpack.js.org/configuration/resolve/#resolvesymlinks)
```bash
node --preserve-symlinks .
```
### set absolute path to NODE_PATH  
see [NODE_PATH](https://nodejs.org/docs/latest-v12.x/api/cli.html#cli_node_path_path)  
in webpack, see [resolve.modules](https://webpack.js.org/configuration/resolve/#resolvemodules)
```bash
NODE_PATH="$PWD/node_modules" node .
```

# exit

```
exit
```




