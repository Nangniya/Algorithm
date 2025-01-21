const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);

const tree = {};

for (let i = 1; i <= N; i++) {
  const [node, left, right] = input[i].split(" ");
  tree[node] = [left, right];
}

const answer = ["", "", ""]; // 전위, 중위, 후위

const preorder = (node) => {
  if (node === ".") return;

  answer[0] += node; // 루트
  preorder(tree[node][0]); // 왼쪽
  preorder(tree[node][1]); // 오른쪽
};

const inorder = (node) => {
  if (node === ".") return;

  inorder(tree[node][0]); // 왼쪽
  answer[1] += node; // 루트
  inorder(tree[node][1]); // 오른쪽
};

const postorder = (node) => {
  if (node === ".") return;

  postorder(tree[node][0]); // 왼쪽
  postorder(tree[node][1]); // 오른쪽
  answer[2] += node; //루트
};

preorder("A");
inorder("A");
postorder("A");

console.log(answer.join("\n"));
