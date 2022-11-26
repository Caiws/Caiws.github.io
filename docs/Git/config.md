
## 查看参数
git config get value

git config --list

git config --list --global


## 设置参数

### 设置用户名及邮箱

针对当前项目生效，位于.git/config文件夹
git config user.name 'name'
git config user.email 'email'

修改全局配置
git config --global user.name 'name'
git config --global user.email 'email'

### 设置代理

git config --global http.proxy http://127.0.0.1:1080

git config --global https.proxy https://127.0.0.1:1080


## 删除参数

git config --unset configName