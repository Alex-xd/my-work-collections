
# Git学习总结 #

###任务###

* 学会简单的使用git、coding；
* 还原出设计稿的静态页面并适当加入js，兼容到ie9;

---
###知识点###


* **创建ssh秘钥** `$ ssh-keygen -t rsa -C "youremail@example.com"`

* **添加文件到Git仓库，分两步：**
	* 第一步，使用命令`git add <file>`，注意，可反复多次使用，添加多个文件；
	* 第二步，使用命令`git commit`，完成。

<br>

* **不要使用Windows自带的记事本编辑任何文本文件** 

* 版本回退
	* 用`git log`可以查看提交历史，以便确定要回退到哪个版本。
	* HEAD指向当前版本，所以可以在各个版本间切换，使用命令`git reset --hard commit_id`
	* 用`git log`可以查看提交历史，以便确定要回退到哪个版本。
	* 要撤销回退可以用`git reflog`查看命令历史，以便确定要回到哪个版本。

<br>

* **工作区和暂存区**

 ![](http://www.liaoxuefeng.com/files/attachments/001384907702917346729e9afbf4127b6dfbae9207af016000/0)

* **创建与合并分支**

	![](http://www.liaoxuefeng.com/files/attachments/0013849087937492135fbf4bbd24dfcbc18349a8a59d36d000/0)

	查看分支：`git branch`

	创建分支：`git branch <name>`

	切换分支：`git checkout <name>`

	创建+切换分支：`git checkout -b <name>`
	
	合并某分支到当前分支：`git merge <name>`

	删除分支：`git branch -d <name>`

	
* **解决冲突**
	<br>当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。
    合并分支`$ git merge <branch name>`
	> **合并分支时，加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并。**

* **多人协作工作模式**
	1. 首先，可以试图用`git push origin branch-name`推送自己的修改；
	2. 如果推送失败，则因为远程分支比你的本地更新，需要先用`git pull`试图合并；
	3. 如果合并有冲突，则解决冲突，并在本地提交；
	4. 没有冲突或者解决掉冲突后，再用`git push origin branch-name`推送就能成功！
	5. 如果`git pull`提示“no tracking information”，则说明本地分支和远程分支的链接关系没有创建，用命令`git branch --set-upstream branch-name origin/branch-name`。
	
* **打标签**
   <br>命令`git tag <name>`用于新建一个标签，默认为`HEAD`，也可以指定一个`commit id`；<br>
`git tag -a <tagname> -m "blablabla..."`可以指定标签信息；

---
2016/5/4 17:14:56 

 ZhangBoyuan

