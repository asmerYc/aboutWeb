/*
 * @Author: your name
 * @Date: 2021-01-15 11:29:51
 * @LastEditTime: 2021-01-15 16:17:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/leetCode/二叉搜索树.js
 */

 // 给你二叉搜索树的根节点 root ，同时给定最小边界low 和最大边界 high。
 // 通过修剪二叉搜索树，使得所有节点的值在[low, high]中。修剪树不应该改变保留在树中的元素的相对结构（即，如果没有被移除，原有的父代子代关系都应当保留）。 
 // 可以证明，存在唯一的答案。所以结果应当返回修剪好的二叉搜索树的新的根节点。注意，根节点可能会根据给定的边界发生改变。

 // 输入：root = [3,0,4,null,2,null,null,1], low = 1, high = 3
 // 输出：[3,2,null,1]

 // 输入：root = [1], low = 1, high = 2
 // 输出：[1]

 // 输入：root = [1,null,2], low = 1, high = 3
 // 输出：[1,null,2]

 var trimBST = function(root, L, R) {
  if (root === null) return root;
  
  if (root.val < L) return trimBST(root.right, L, R);
  if (root.val > R) return trimBST(root.left, L, R);
  
  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);
  
  return root;
};

console.log(trimBST([1,null,2],1,3))