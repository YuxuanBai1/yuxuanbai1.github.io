# Wechat-Tools 开发者文档  和 Q&A解疑
  
## 简介  
  
Wechat-Tools 是一个强大的微信工具，旨在帮助开发者快速实现自动化使用微信功能。  
  
## 安装指南 
Q：Wechat-Tools怎么安装？

A：  
方法一：克隆仓库：`https://github.com/YuxuanBai1/Wechat-Tools.git` 

方法二：使用pip：`pip install Wechat`

## 功能讲解

Wechat-Tools有以下几种用法：
- 给用户发送文本信息
  ```python
  Wechat.SendWxMsg('发送的用户名','需要发送的文本消息',循环次数)
  ```
- 给用户发送文件
  ```python
  Wechat.SendWxFile('发送的用户名',r"文件的绝对路径",循环次数)
  ```
- 给用户拨打视频/语音通话
  ```python
  Wechat.WxVoiceCall('需要打通话的用户名','聊天类型')
  ```
- 查找用户
  ```python
  Wechat.SearchWxid('用户的微信号')
  ```
- 删除用户
  ```python
  Wechat.DelWx('用户的微信号')
  ```
- 添加用户
  ```python
  Wechat.AddWx('用户的微信号')
  ```
- 查找用户微信信息
  ```python
  Wechat.GetFriendWx('用户名/微信号')
  ```
- 创建微信笔记
  ```python
  Wechat.CreateWxNote('内容')
  ```
- 打开朋友圈
  ```python
  Wechat.OpenWxCircleOfFriends()
  ```
- 打开用户的微信视频号
  ```python
  Wechat.OpenWxVideoId('用户的微信视频号昵称')
  ```
- 打开看一看
  ```python
  Wechat.OpenWxGlance()
  ```
- 打开搜一搜并搜寻
  ```python
  Wechat.OpenWxSearch('搜寻内容')
  ```
- 打开小程序面板并搜寻
  ```python
  Wechat.OpenWxMiniPrograms('小程序名称')
  ```
- 锁定微信
  ```python
  Wechat.LockWx()
  ```
- 申请解锁微信（要在手机上同意解锁）
  ```python
  Wechat.UnlockWx()
  ```

## 使用指南  
那么，知道了以上用法，怎么使用呢？
1. 新建一份Python文档
2. 导入仓库中的"Wechat.py"
3. 写代码
4. 打开并登录微信
5. 运行代码

### 示例代码  
  
```javascript  
const myApp = require('myapp');  
  
myApp.doSomething().then(() => {  
  console.log('Done!');  
});
